export const CASE_STUDIES = [
  {
    slug: 'baari',
    index: '01',
    whyHere: 'Proof I can take a product from nothing to production.',
    path: '/work/baari',
    title: 'Baari',
    oneLiner: 'A live queue for India’s clinics and salons.',
    readTime: '3 min read',
    year: '2026',
    accent: '#34D399',
    category: 'Product Design · 0→1',
    tags: ['Zero to one', 'Android + Web', 'AI-built'],
    glowPosition: '35% 40%',
    card: { frame: 'token' },
  },
  {
    slug: 'luca',
    index: '02',
    whyHere: 'Proof I can design AI products for appropriate trust.',
    path: '/work/luca',
    title: 'LUCA',
    oneLiner: 'An AI careers coach for Lancaster University students.',
    readTime: '3 min read',
    year: '2025',
    accent: '#F0576B',
    category: 'AI Product Design',
    tags: ['AI product', 'EdTech', 'Trust design'],
    glowPosition: '65% 45%',
    card: { frame: 'luca-multi', url: 'luca.lancaster.ac.uk' },
  },
  {
    slug: 'ilancaster',
    index: '03',
    whyHere: 'Proof I can work within brand constraints on a live product.',
    path: '/work/ilancaster',
    title: 'iLancaster',
    oneLiner: 'Redesigning the app every Lancaster University student carries.',
    readTime: '3 min read',
    year: '2025',
    accent: '#E4002B',
    category: 'Mobile App · Design System',
    tags: ['Mobile app', 'Design system', 'IA'],
    glowPosition: '45% 55%',
    card: { frame: 'flat', image: '/assets/ilancaster/cover-hero-v2.png' },
  },
  {
    slug: 'smartup',
    index: '04',
    whyHere: 'Proof I can turn complex products into clean, user-friendly ones without losing their value.',
    path: '/work/smartup',
    title: 'SmartUp',
    oneLiner: 'Inventory Management Retail SaaS App.',
    readTime: '3 min read',
    year: '2025',
    accent: '#7C5CFC',
    category: 'Mobile App · B2B Retail',
    tags: ['Mobile app', 'B2B SaaS', 'Retail'],
    glowPosition: '55% 50%',
    card: {
      frame: 'flat',
      image: '/assets/smartup/smartup-hero.png',
      fit: 'contain',
    },
  },
];

export const OTHER_PROJECTS = [
  {
    slug: 'wobble',
    path: '/work/wobble',
    title: 'Wobble',
    oneLiner: 'An indoor play centre that gives UK children the outdoors back.',
    category: 'Strategy & Service Design',
    image: '/assets/wobble/wobble-tile.jpg',
    hasPage: true,
  },
  {
    slug: 'oracle',
    path: '/work/oracle',
    title: 'Oracle',
    oneLiner: 'A speculative knowledge-transmission device for a 2071 post-crisis society.',
    category: 'Speculative Design',
    image: '/assets/oracle/oracle-poster.jpg',
    hasPage: true,
  },
];

export function nextCaseStudy(slug) {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  if (i === -1) return CASE_STUDIES[0];
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
}

export function getCaseStudy(slug) {
  return CASE_STUDIES.find((c) => c.slug === slug) || null;
}
