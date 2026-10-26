export const LINKEDIN = 'https://www.linkedin.com/in/zubia-ahsanullah-303397349';

export const NAV = [
  ['#about', 'About'],
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#experience', 'Experience'],
  ['#education', 'Education'],
  ['#contact', 'Contact'],
];

export const ROLES = ['Full Stack Developer', 'React.js Developer', 'WordPress & Shopify Developer', 'ERP Developer'];

export const SERVICES = [
  { icon: 'screen', title: 'Frontend interfaces', text: 'Responsive, fast screens with React.js and Next.js, built from clean HTML and CSS.', tech: 'React.js · Next.js · JavaScript · HTML · CSS' },
  { icon: 'db', title: 'Backend and APIs', text: 'REST APIs, CRUD operations and database design that keep the data right and the app quick.', tech: 'Node.js · PHP · MySQL · SQL · REST APIs' },
  { icon: 'bag', title: 'WordPress and e-commerce', text: 'WordPress maintenance and Shopify customization for stores that need to sell, not just look nice.', tech: 'WordPress · Shopify · E-commerce' },
  { icon: 'grid', title: 'ERP and CRM solutions', text: 'Business software for real operations: stock, sales, finance and customers, working together.', tech: 'ERP · CRM · Reports · Integrations' },
  { icon: 'phone', title: 'Mobile with React Native', text: 'Cross-platform mobile screens that share logic with the web app.', tech: 'React Native · JavaScript' },
  { icon: 'bolt', title: 'Speed, fixes and launch', text: 'Debugging, performance optimization and deployment, so the site stays fast after it goes live.', tech: 'Git · GitHub · Deployment · Debugging' },
];

export const WEBSITES = [
  { img: '/projects/ladydev.jpg', title: 'Lady Dev Zubia', text: 'Web development studio website' },
  { img: '/projects/kg.jpg', title: 'KG Synergy Minerals', text: 'Corporate website for a mineral exporter' },
  { img: '/projects/vis.jpg', title: 'Visibil8y', text: 'Digital marketing agency website' },
  { img: '/projects/bbb.jpg', title: 'Blessed Bridge Builders', text: 'Plumbing and electrical services website' },
];

export const SKILLS = [
  ['Frontend', ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Responsive design']],
  ['Backend', ['Node.js', 'PHP', 'REST APIs', 'CRUD', 'API integration']],
  ['Databases', ['MySQL', 'SQL']],
  ['Platforms', ['WordPress', 'Shopify', 'E-commerce', 'ERP / CRM', 'React Native']],
  ['Workflow', ['Git', 'GitHub', 'Deployment', 'Debugging', 'Performance optimization']],
];

export const MARQUEE = ['React.js', 'Node.js', 'PHP', 'Next.js', 'MySQL', 'REST APIs', 'WordPress', 'Shopify', 'React Native', 'ERP'];

// s / e = months since Nov 2024 (e: null means "now")
export const JOBS = [
  { co: '3DM Solutions', short: 'Full Stack Developer', yr: '2026 – Present', live: true, when: '2026 – Present', meta: ['Karachi, Pakistan', 'Current role'],
    roles: [['FS', 'Full Stack Developer', 'Working on FINAC, the company’s ERP for businesses across Pakistan.']], tags: ['ERP', 'Full stack', 'FINAC'], s: 23, e: null, color: 'var(--violet)' },
  { co: 'Web Octane', short: 'Full Stack Engineer · Web Developer', yr: 'Jan 2025 – Oct 2026', when: 'Jan 2025 – Oct 2026 · 1 yr 10 mos', meta: ['Karachi, Sindh', 'On-site', 'Full-time'],
    roles: [['FS', 'Full Stack Engineer', 'WordPress and e-commerce work, from setup to launch.'], ['WD', 'Web Developer', 'Web and mobile interfaces with React.js and React Native.']], tags: ['WordPress', 'E-commerce', 'React.js', 'React Native'], s: 2, e: 23, color: 'var(--ink)' },
  { co: 'Mark Solve', short: 'Web Developer', yr: 'Nov – Dec 2024', when: 'Nov 2024 – Dec 2024 · 2 mos', meta: ['Lahore, Punjab', 'Remote', 'Full-time'],
    roles: [['WD', 'Web Developer', 'Remote web development for a team based in Lahore.']], tags: ['Web development', 'Remote'], s: 0, e: 2, color: 'var(--aqua)' },
];

export const EDUCATION = [
  { kind: 'Matriculation', title: 'Matriculation in Humanities', school: 'S.M.B. Fatima Jinnah Government Girls School, Karachi' },
  { kind: 'Intermediate', title: 'Intermediate in Humanities', school: 'BAMM PECHS Govt College for Women' },
  { kind: 'Associate degree', title: 'Associate of Arts (AA)', school: 'BAMM PECHS Govt College for Women' },
  { kind: 'Software engineering', title: 'Advance Diploma in Software Engineering', school: 'Aptech Pakistan', dest: true },
];
