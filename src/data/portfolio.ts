/**
 * Central portfolio data — generated from Shaik Mohammad Parvez's resume (parvez_resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const BASE = import.meta.env.BASE_URL;

export const profile = {
  fullName: 'Shaik Mohammad Parvez',
  displayName: 'Shaik Mohammad Parvez',
  firstName: 'PARVEZ',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PARVEZ ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Android', 'Entrepreneur'],
  intro:
    'A results-driven, growth-oriented entrepreneur and B.Tech ECE student — a full-stack web and Android developer skilled in business development, strategic planning and team leadership, with a strong focus on innovation and customer satisfaction.',
  location: 'Bengaluru, Karnataka',
  email: 'parvezparru6@gmail.com',
  phone: '+91 9542793027',
  links: {
    linkedin: 'https://www.linkedin.com/in/shaik-mohammad-parvez-766a09311',
  },
  resumePdf: `${BASE}assets/Shaik_Mohammad_Parvez_Resume.pdf`,
  portrait: {
    src: `${BASE}assets/portrait-720.webp`,
    srcSet: `${BASE}assets/portrait-420.webp 420w, ${BASE}assets/portrait-720.webp 720w, ${BASE}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Shaik Mohammad Parvez',
  },
  interests: ['Digital Marketing', 'Social Media Marketing', 'Entrepreneurship'],
};

export type Education = { school: string; place?: string; degree: string; period: string; score?: string };

export const education: Education[] = [
  {
    school: 'Sri Venkateshwara Engineering College',
    place: 'Tirupati',
    degree: 'B.Tech — Electronics & Communication Engineering (ECE)',
    period: 'December 2021 – Present',
    score: 'Pursuing',
  },
  {
    school: 'Sri Venkateshwara Junior College',
    degree: 'IPE — MPC',
    period: 'March 2019 – April 2021',
  },
  {
    school: 'Sri Siddartha Vidhayaniketha English Medium High School',
    degree: 'SSC — State Board',
    period: 'Completed March 2019',
  },
];

export type Experience = { company: string; role: string; place?: string; period: string; points: string[] };

export const experience: Experience[] = [
  {
    company: 'RVEIYA DYNAMICS PVT LTD',
    role: 'Full-Stack Web Developer / Android Developer',
    place: 'Bengaluru',
    period: 'November 2024 – April 2026',
    points: ['Worked as a full-stack web developer and Android developer at RVEIYA DYNAMICS PVT LTD, Bengaluru.'],
  },
  {
    company: 'ZEITGEIST (IIT Ropar)',
    role: 'Campus Ambassador',
    period: 'December 2022 – February 2023',
    points: [],
  },
  {
    company: 'INTERNSHALA',
    role: 'Internshala Student Partner',
    period: 'November 2023 – January 2024',
    points: [],
  },
  {
    company: 'IETE',
    role: 'President',
    period: 'January 2023 – January 2024',
    points: ['President of IETE (Institute of Electronic Telecommunication Engineering) at Sri Venkateshwara Engineering College, Tirupati.'],
  },
  {
    company: 'InAmigos Foundation (IAF)',
    role: 'Community Coordinator',
    period: 'August 2022 – November 2022',
    points: [],
  },
  {
    company: 'Marpu Foundation',
    role: 'Social Work Intern',
    period: 'August 2022 – October 2022',
    points: ['Volunteered with Marpu Foundation in 2022.'],
  },
  {
    company: 'Muskurahat Foundation',
    role: 'Fundraiser',
    period: 'July 2022 – October 2022',
    points: [],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'fullstack-android',
    title: 'Full-Stack & Android Development',
    year: '2024 – 2026',
    genre: 'Full-Stack • Android • Professional',
    logline: 'Full-stack web and Android development work at RVEIYA DYNAMICS PVT LTD, Bengaluru.',
    stack: ['Web Development', 'Android Development', 'Full-Stack'],
    build: [
      'Worked as a Full-Stack Web Developer / Android Developer at RVEIYA DYNAMICS PVT LTD, Bengaluru, from November 2024 to April 2026.',
    ],
    features: [
      'Full-stack web development',
      'Android app development',
      'Professional role at RVEIYA DYNAMICS PVT LTD',
    ],
    metrics: [
      { value: 'Nov 2024 – Apr 2026', label: 'time at RVEIYA DYNAMICS' },
      { value: '2', label: 'platforms — web & Android' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'smart-chip-system',
    title: 'Smart Chip System',
    year: '2023',
    genre: 'Innovation • Hackathon • Embedded',
    logline: 'An innovation idea born at the SVCE Hackathon, where it was selected as CR3.',
    stack: ['SVCE Hackathon', 'Innovation', 'Smart Chip'],
    build: [
      'Came up with a new innovation idea — the "smart chip system" — at the SVCE Hackathon on 4 March 2023.',
      'Selected as CR3 at the SVCE Hackathon.',
    ],
    features: ['Smart chip system concept', 'Selected CR3 at the SVCE Hackathon'],
    metrics: [
      { value: 'CR3', label: 'selected at SVCE Hackathon' },
      { value: '4 Mar 2023', label: 'hackathon date' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'agri-weather',
    title: 'Agriculture & Weather Forecasting',
    year: '2022',
    genre: 'Agriculture • Weather • Innovation',
    logline: 'Agriculture Fertilisation and Weather Forecasting — a team project for the Abdul Kalam Innovation Contest.',
    stack: ['Abdul Kalam Innovation Contest', 'Team Project', 'Kalam Trust'],
    build: [
      'Our team created the project "Agriculture Fertilisation and Weather Forecasting" for the Abdul Kalam Innovation Contest, organised by Kalam Trust.',
    ],
    features: ['Agriculture fertilisation', 'Weather forecasting', 'Built as a team'],
    metrics: [
      { value: '10 Oct 2022', label: 'Abdul Kalam Innovation Contest' },
      { value: 'Team', label: 'built together' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'kalam-innovation',
    title: 'Innovation Contest',
    org: 'Abdul Kalam · Kalam Trust',
    detail: 'Our team created "Agriculture Fertilisation and Weather Forecasting" — 10 October 2022.',
    laurel: 'Award',
  },
  {
    id: 'ample-coordinator',
    title: 'Event Coordinator',
    org: 'Ample',
    detail: 'Recognised as event coordinator at Ample — 4 March 2023.',
    laurel: 'Award',
  },
  {
    id: 'svce-hackathon',
    title: 'Selected CR3',
    org: 'SVCE Hackathon',
    detail: 'Came up with the "smart chip system" innovation idea and was selected as CR3 — 4 March 2023.',
    laurel: 'Hackathon',
  },
  {
    id: 'iete-president',
    title: 'President, IETE',
    org: 'Sri Venkateshwara Engineering College',
    detail: 'President of the Institute of Electronic Telecommunication Engineering (IETE) chapter — January 2023 to January 2024.',
    laurel: 'Student Leader',
  },
  {
    id: 'zeitgeist-ambassador',
    title: 'Campus Ambassador',
    org: 'ZEITGEIST · IIT Ropar',
    detail: 'Campus Ambassador for ZEITGEIST, IIT Ropar — December 2022 to February 2023.',
    laurel: 'IIT Ropar',
    link: 'https://internshala.com/student/certificate/122972448/4B9B227E-03C7-CC79-A2C1-768FF0C029D3',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'ZEITGEIST, IIT Ropar', name: 'Campus Ambassador', link: 'https://internshala.com/student/certificate/122972448/4B9B227E-03C7-CC79-A2C1-768FF0C029D3' },
  { issuer: 'LinkedIn Learning', name: 'Learning C', link: 'https://www.linkedin.com/posts/shaik-mohammad-parvez-01b34024a_certificate-of-completion-activity-6996269536861679617-ThRS?utm_source=share&utm_medium=member_android' },
  { issuer: 'LinkedIn Learning', name: 'Learning Arduino: Foundations', link: 'https://www.linkedin.com/posts/shaik-mohammad-parvez-01b34024a_certificate-of-completion-activity-6992315168944766976-BxjV?utm_source=share&utm_medium=member_android' },
  { issuer: 'Internshala', name: 'Internshala Verified Candidate', link: 'https://www.linkedin.com/posts/shaik-mohammad-parvez-01b34024a_verified-candidate-on-internshala-activity-6984709528441278464-hsEv?utm_source=share&utm_medium=member_android' },
  { issuer: 'SVCE', name: 'SVCE Hackathon' },
  { issuer: 'Great Learning', name: 'App Design', link: 'https://www.linkedin.com/posts/shaik-mohammad-parvez-01b34024a_1000-free-courses-with-free-certificates-activity-7042034923267907584-7v7R?utm_source=share&utm_medium=member_android' },
  { issuer: 'Internshala', name: 'Direct Entry', link: 'https://www.linkedin.com/posts/shaik-mohammad-parvez-01b34024a_i-am-happy-to-share-my-isp-certificate-internshala-activity-7136394339886256129-KoPd?utm_source=share&utm_medium=member_desktop' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'C and Python',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'Python', mono: 'Py' },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded & Hardware',
    subtitle: 'Where code meets circuits',
    skills: [
      { name: 'Arduino', mono: 'Ar', note: 'Expert' },
      { name: 'Raspberry Pi', mono: 'Rp' },
      { name: 'Embedded Systems with OS', mono: 'Es' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Apps',
    subtitle: 'Full-stack web and Android',
    skills: [
      { name: 'Web Development', mono: 'Wd' },
      { name: 'Android Development', mono: 'An' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Interfaces & prototypes',
    skills: [
      { name: 'Adobe XD', mono: 'Xd' },
      { name: 'Figma', mono: 'Fg' },
    ],
  },
  {
    id: 'business',
    title: 'Business Tools',
    subtitle: 'Office & accounting',
    skills: [
      { name: 'MS Office', mono: 'Of' },
      { name: 'Tally', mono: 'Ty' },
    ],
  },
  {
    id: 'personal',
    title: 'Personal Skills',
    subtitle: 'Growth & reach',
    skills: [
      { name: 'Digital Marketing', mono: 'Dm' },
      { name: 'Social Media Marketing', mono: 'Sm' },
    ],
  },
  {
    id: 'spoken',
    title: 'Languages',
    subtitle: 'Spoken languages',
    skills: [
      { name: 'Hindi', mono: 'Hi' },
      { name: 'Telugu', mono: 'Te' },
      { name: 'Urdu', mono: 'Ur' },
      { name: 'Kannada', mono: 'Ka' },
      { name: 'English', mono: 'En' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  C: ['LinkedIn Learning – Learning C'],
  Arduino: ['LinkedIn Learning – Arduino: Foundations', 'Listed as Expert on the resume'],
  'Web Development': ['RVEIYA DYNAMICS PVT LTD'],
  'Android Development': ['RVEIYA DYNAMICS PVT LTD'],
  'Adobe XD': ['Great Learning – App Design'],
  Figma: ['Great Learning – App Design'],
  'Embedded Systems with OS': ['B.Tech ECE'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2019 – 2021',
    synopsis: 'School and intermediate years — SSC (State Board) and IPE in MPC.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'SSC, State Board at Sri Siddartha Vidhayaniketha English Medium High School — completed March 2019.',
        tags: ['SSC', 'State Board'],
        runtime: 'Until Mar 2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Intermediate',
        description: 'IPE, MPC at Sri Venkateshwara Junior College.',
        tags: ['IPE', 'MPC'],
        runtime: 'Mar 2019 – Apr 2021',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Engineering',
    period: '2021 – Present',
    synopsis: 'B.Tech in Electronics & Communication Engineering at Sri Venkateshwara Engineering College, Tirupati.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'B.Tech, ECE at Sri Venkateshwara Engineering College, Tirupati.',
        tags: ['B.Tech', 'ECE'],
        runtime: 'Dec 2021 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Innovator',
        description: 'Abdul Kalam Innovation Contest — our team created "Agriculture Fertilisation and Weather Forecasting".',
        tags: ['Kalam Trust', 'Innovation'],
        runtime: '10 Oct 2022',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'The Hackathon',
        description: 'Came up with the "smart chip system" idea at the SVCE Hackathon and was selected as CR3.',
        tags: ['SVCE Hackathon', 'CR3', 'Smart Chip'],
        runtime: '4 Mar 2023',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Leading & Giving Back',
    period: '2022 – 2024',
    synopsis: 'Volunteering, leadership and campus ambassador roles — IETE, Marpu, InAmigos, Muskurahat, ZEITGEIST and Internshala.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Volunteer',
        description: 'Community Coordinator at InAmigos Foundation, Social Work Intern at Marpu Foundation and Fundraiser at Muskurahat Foundation — plus a charity event organised in 2022.',
        tags: ['InAmigos', 'Marpu', 'Muskurahat'],
        runtime: 'Jul – Nov 2022',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The President',
        description: 'President of IETE (Institute of Electronic Telecommunication Engineering) at Sri Venkateshwara Engineering College, Tirupati.',
        tags: ['IETE', 'Leadership'],
        runtime: 'Jan 2023 – Jan 2024',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'The Ambassador',
        description: 'Campus Ambassador for ZEITGEIST (IIT Ropar), Internshala Student Partner and event coordinator at Ample.',
        tags: ['ZEITGEIST', 'Internshala', 'Ample'],
        runtime: 'Dec 2022 – Jan 2024',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2024 – 2026',
    synopsis: 'Full-stack web and Android development at RVEIYA DYNAMICS PVT LTD, Bengaluru.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Developer',
        description: 'Full-Stack Web Developer / Android Developer at RVEIYA DYNAMICS PVT LTD, Bengaluru.',
        tags: ['Web', 'Android', 'Full-Stack'],
        runtime: 'Nov 2024 – Apr 2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Designer',
        description: 'App Design from Great Learning, with Adobe XD and Figma in the toolkit.',
        tags: ['App Design', 'Adobe XD', 'Figma'],
        runtime: 'Great Learning',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Maker',
        description: 'Arduino (expert), Raspberry Pi and embedded systems with an operating system.',
        tags: ['Arduino', 'Raspberry Pi', 'Embedded'],
        runtime: 'Hardware',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The objective on the resume points to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Entrepreneur',
        description: 'Leveraging an entrepreneurial mindset, problem-solving skills and business acumen to contribute to organizational growth and create long-term value.',
        tags: ['Business Development', 'Strategy', 'Digital Marketing'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Expert skill', title: 'Arduino', detail: 'Listed as Expert on the resume', palette: amber },
  { label: 'The Innovation Original', title: 'Smart Chip System', detail: 'Selected CR3 • SVCE Hackathon', palette: crimson },
  { label: 'Biggest stage', title: 'Abdul Kalam Innovation Contest', detail: 'Kalam Trust • Oct 2022', palette: ocean },
  { label: 'Leadership', title: 'President, IETE', detail: 'Jan 2023 – Jan 2024', palette: violet },
  { label: 'The professional arc', title: 'RVEIYA DYNAMICS', detail: 'Full-Stack & Android Developer', palette: jade },
  { label: 'Campus Ambassador', title: 'ZEITGEIST', detail: 'IIT Ropar', palette: amber },
  { label: 'Giving back', title: '3 Foundations', detail: 'InAmigos • Marpu • Muskurahat', palette: crimson },
  { label: 'Student partner', title: 'Internshala', detail: 'Direct entry • Jun 2023', palette: ocean },
  { label: 'Design credential', title: 'App Design', detail: 'Great Learning', palette: jade },
  { label: 'Speaks', title: '5 Languages', detail: 'Hindi • Telugu • Urdu • Kannada • English', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: ['Sri Venkateshwara Engineering College, Tirupati', 'December 2021 – Present'],
    chips: ['B.Tech', 'ECE'],
  },
  {
    kicker: 'Skills',
    title: 'Hardware meets web.',
    lines: ['C, Python · Arduino, Raspberry Pi', 'Web development · Embedded systems · Adobe XD, Figma'],
    chips: ['C', 'Python', 'Arduino', 'Raspberry Pi', 'Web', 'Figma'],
  },
  {
    kicker: 'Experience',
    title: 'The Developer Arc',
    lines: ['Full-Stack Web Developer / Android Developer', 'RVEIYA DYNAMICS PVT LTD, Bengaluru · Nov 2024 – Apr 2026'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Full-Stack & Android Development', 'Smart Chip System — selected CR3', 'Agriculture & Weather Forecasting'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Abdul Kalam Innovation Contest — Kalam Trust', 'SVCE Hackathon — selected CR3', 'President — IETE'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: ['LinkedIn Learning · Internshala · Great Learning', 'ZEITGEIST, IIT Ropar · SVCE'],
  },
  {
    kicker: 'Current mission',
    title: 'Building ventures',
    lines: ['Entrepreneurship · Business development · Digital marketing'],
  },
];

export type ProfileId = 'parvez' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'parvez',
    name: 'Parvez',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, skills & experience first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2022 – 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
