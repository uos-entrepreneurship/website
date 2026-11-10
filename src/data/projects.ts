export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Infrastructure' | 'Open Source Tooling' | 'Venture Kit' | 'Student App';
  status: 'Launched' | 'Prototype' | 'Idea';
  team: {
    name: string;
    role: string;
  }[];
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'uos-es-portal',
    name: 'UOS ES Official Web Portal & Hub',
    tagline: 'The official digital operating system for the society.',
    description: 'A lightning-fast, conversion-focused event hub engineered with Astro 5.4, React islands, and Tailwind CSS v4. Hosts society events, membership admissions, open blueprints, and project archives with zero runtime JavaScript bloat.',
    category: 'Infrastructure',
    status: 'Launched',
    team: [
      { name: 'Ashar Iftikhar', role: 'Lead Architect' },
      { name: 'Core Contributors', role: 'Engineering Team' },
    ],
    techStack: ['Astro 5', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'Lenis'],
    links: {
      github: 'https://github.com/uos-entrepreneurship/website',
      demo: 'https://github.com/uos-entrepreneurship',
    },
  },
  {
    id: 'git-first-pr-sandbox',
    name: 'Git Ground Zero: First PR Sandbox',
    tagline: 'Interactive sandbox repository for student first pull requests.',
    description: 'A dedicated open-source repository designed for campus workshop participants to clone, configure local Git credentials, create feature branches, and submit their first pull request live on screen.',
    category: 'Open Source Tooling',
    status: 'Launched',
    team: [
      { name: 'Technical Cabinet', role: 'Maintainers' },
      { name: 'Society Cohort', role: 'Contributors' },
    ],
    techStack: ['Git', 'GitHub Actions', 'Markdown', 'CI Validation'],
    links: {
      github: 'https://github.com/uos-entrepreneurship/.github/blob/main/WORKSHOP_SERIES_GIT_ZERO_TO_HERO.md',
    },
  },
  {
    id: 'student-pack-verification-guide',
    name: 'Manual GitHub Student Pack Verification Framework',
    tagline: 'Navigating student developer benefits without an institutional .edu domain.',
    description: 'University of Sahiwal does not issue individual @uosahiwal.edu.pk email addresses. This guide documents how to capture official semester fee vouchers and student ID cards to achieve 100% manual verification success with GitHub Education.',
    category: 'Open Source Tooling',
    status: 'Launched',
    team: [
      { name: 'Ashar Iftikhar', role: 'Author' },
    ],
    techStack: ['GitHub Education', 'Verification Protocols', 'Documentation'],
    links: {
      github: 'https://github.com/uos-entrepreneurship/.github/blob/main/CAMPUS_EXPERT_PORTFOLIO.md',
    },
  },
  {
    id: 'campus-freelance-growth-kit',
    name: 'Campus Agency & Freelance Starter Kit',
    tagline: 'Production-ready client onboarding and proposal templates for student builders.',
    description: 'A curated repository of client contracts, scope-of-work agreements, proposal templates, and Next.js starter templates enabling student developers to pitch and close high-value external freelance projects.',
    category: 'Venture Kit',
    status: 'Prototype',
    team: [
      { name: 'Ashflow Ecosystem', role: 'Mentors' },
      { name: 'Society Leads', role: 'Curators' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Notion OS'],
    links: {
      github: 'https://github.com/uos-entrepreneurship',
    },
  },
  {
    id: 'hackathon-team-matchmaker',
    name: 'Intra-Campus Hackathon Team Matchmaker',
    tagline: 'Cross-departmental founder and developer matching platform.',
    description: 'An upcoming web tool allowing Computer Science developers, BBA business strategists, and graphic designers to post problem statements, showcase skillsets, and assemble multidisciplinary hackathon teams.',
    category: 'Student App',
    status: 'Idea',
    team: [
      { name: 'Upcoming Hackathon Cohort', role: 'Builders' },
    ],
    techStack: ['React', 'Supabase', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/uos-entrepreneurship',
    },
  },
];
