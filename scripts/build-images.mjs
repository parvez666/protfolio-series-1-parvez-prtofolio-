// Builds optimized portrait assets from the original photos in the project root.
// pic1.jpeg = photo on a plain background, pic.png = background-removed cutout (same framing).
// If the cutout is already high-resolution (>= 1000px wide) it is used directly, which avoids a light halo
// from the original background. Otherwise the cutout's alpha mask is upscaled and applied to the high-res
// photo so the face stays sharp.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const hi = sharp('pic1.jpeg');
const { width, height } = await hi.metadata();
const cutMeta = await sharp('pic.png').metadata();

const alpha = await sharp('pic.png')
  .ensureAlpha()
  .extractChannel('alpha')
  .resize(width, height, { kernel: 'lanczos3' })
  .blur(0.8)
  .raw()
  .toBuffer();

const rgb = await sharp('pic1.jpeg').removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}
const cutout =
  cutMeta.width >= 1000
    ? await sharp('pic.png').ensureAlpha().png().toBuffer()
    : await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Inter, Impact, sans-serif" font-weight="800" font-size="150" fill="#f4f1ec" letter-spacing="4">PARVEZ</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">FULL-STACK DEVELOPER • ANDROID • ENTREPRENEUR</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

// Wide profile banner (1740x904): dark backdrop with a red glow, name block on the left, cutout on the right
const BW = 1740, BH = 904;
const bPortrait = await sharp(cutout).resize({ height: 840 }).png().toBuffer();
await sharp({ create: { width: BW, height: BH, channels: 4, background: '#050507' } })
  .composite([
    {
      input: Buffer.from(`<svg width="${BW}" height="${BH}" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="38%" r="48%"><stop offset="0" stop-color="#b0102a" stop-opacity="0.85"/><stop offset="1" stop-color="#b0102a" stop-opacity="0"/></radialGradient></defs>
        <rect width="${BW}" height="${BH}" fill="url(#g)"/>
      </svg>`),
    },
    { input: bPortrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="${BW}" height="${BH}" xmlns="http://www.w3.org/2000/svg">
        <text x="96" y="370" font-family="Inter, Impact, sans-serif" font-weight="800" font-size="84" fill="#f4f1ec" letter-spacing="4">SHAIK MOHAMMAD</text>
        <text x="96" y="470" font-family="Inter, Impact, sans-serif" font-weight="800" font-size="84" fill="#f4f1ec" letter-spacing="4">PARVEZ</text>
        <text x="100" y="540" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="28" fill="#ff3d5a" letter-spacing="14">PROFESSIONAL PROFILE</text>
        <text x="100" y="600" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#d6d5db" letter-spacing="5">FULL-STACK DEVELOPER • ANDROID • ENTREPRENEUR</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/profile-banner.jpg`);
console.log('images built');
