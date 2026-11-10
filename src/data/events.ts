export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  rawDate: string; // for sorting
  time: string;
  venue: string;
  category: 'Technical Bootcamp' | 'Venture Sprint' | 'Founder Talk' | 'Hackathon';
  status: 'upcoming' | 'past';
  speaker: {
    name: string;
    role: string;
    avatar?: string;
  };
  summary: string;
  description: string;
  agenda: {
    time: string;
    title: string;
    description: string;
  }[];
  prerequisites?: string[];
  registrationUrl: string;
  recap?: {
    attendees: number;
    photos?: string[];
    takeaways: string[];
    quote: {
      text: string;
      author: string;
      department: string;
    };
  };
}

export const events: Event[] = [
  {
    id: 'git-zero-to-hero',
    slug: 'git-zero-to-hero',
    title: 'Git & GitHub: Ground Zero to First PR',
    date: 'Saturday, Dec 05, 2026',
    rawDate: '2026-12-05',
    time: '10:00 AM – 12:30 PM PKT',
    venue: 'CS Computing Lab 1, Academic Block',
    category: 'Technical Bootcamp',
    status: 'upcoming',
    speaker: {
      name: 'Ashar Iftikhar',
      role: 'Society Lead & Full-Stack Architect',
    },
    summary: 'A 2-hour hands-on lab workshop taking beginners from terminal installation to opening their first open-source Pull Request.',
    description: 'This is the foundational technical sprint of the semester. Every attendee will configure Git locally, generate SSH keys, clone the society repository, create an isolated feature branch, and submit their first Pull Request live on screen. We will also walk through manual verification for the GitHub Student Developer Pack without an institutional .edu email address.',
    agenda: [
      {
        time: '10:00 AM – 10:20 AM',
        title: 'The Why & Foundation',
        description: 'Why version control matters, Git vs GitHub, and moving past final_project_v2.zip.',
      },
      {
        time: '10:20 AM – 10:50 AM',
        title: 'Environment Config & Authentication',
        description: 'Git CLI installation, identity configuration, and secure SSH key generation.',
      },
      {
        time: '10:50 AM – 11:45 AM',
        title: 'Hands-on Branching & PR Sandbox',
        description: 'Cloning the sandbox repo, pushing your student profile branch, and opening a PR live.',
      },
      {
        time: '11:45 AM – 12:30 PM',
        title: 'Student Developer Pack & Q&A',
        description: 'Step-by-step walkthrough of manual student fee voucher and ID card verification.',
      },
    ],
    prerequisites: [
      'Bring your personal laptop (Windows, Mac, or Linux)',
      'Pre-register a free personal GitHub account at github.com',
      'No prior programming or terminal experience required',
    ],
    registrationUrl: '/join',
  },
  {
    id: 'zero-capital-mvp',
    slug: 'zero-capital-mvp',
    title: 'Idea Validation & Zero-Capital MVPs',
    date: 'Friday, Dec 18, 2026',
    rawDate: '2026-12-18',
    time: '02:30 PM – 04:30 PM PKT',
    venue: 'Video Conference Room, Admin Block',
    category: 'Venture Sprint',
    status: 'upcoming',
    speaker: {
      name: 'Management Sciences Advisory',
      role: 'Guest Venture Mentors',
    },
    summary: 'How to validate whether a problem is worth solving and launch an MVP with $0 upfront investment.',
    description: 'Most student projects fail because they build something nobody wants. In this intensive clinic, we review lean startup methodologies, conduct mock customer discovery interviews, and explore low-code and open-source tools to build a prototype without writing thousands of lines of boilerplate code.',
    agenda: [
      {
        time: '02:30 PM – 03:00 PM',
        title: 'The Anatomy of a Real Problem',
        description: 'Separating genuine customer pain points from imaginary startup ideas.',
      },
      {
        time: '03:00 PM – 03:45 PM',
        title: 'Customer Discovery Live Sprints',
        description: 'Running 15-minute problem validation interviews with campus peers.',
      },
      {
        time: '03:45 PM – 04:30 PM',
        title: 'The Zero-Capital Tech Stack',
        description: 'Using Supabase, Next.js, and free-tier infrastructure to deploy an MVP.',
      },
    ],
    prerequisites: [
      'An idea or problem you care about solving',
      'Curiosity about customer research and business models',
    ],
    registrationUrl: '/join',
  },
  {
    id: 'intra-campus-hackathon-2027',
    slug: 'intra-campus-hackathon-2027',
    title: 'The Annual UOS 48-Hour Intra-Campus Hackathon',
    date: 'Feb 20 – 22, 2027',
    rawDate: '2027-02-20',
    time: '48-Hour Continuous Marathon',
    venue: 'University Main Auditorium & CS Labs',
    category: 'Hackathon',
    status: 'upcoming',
    speaker: {
      name: 'Judges Panel & Industry Mentors',
      role: 'Founders & Alumni Engineers',
    },
    summary: 'The flagship annual innovation competition bringing together CS developers, BBA strategists, and designers.',
    description: '150+ students forming 3-to-4 member cross-department teams to build software solutions for regional governance, education, commerce, and enterprise automation over a 48-hour sprint. Featuring live stage demos, cash prizes, and incubation fast-tracks.',
    agenda: [
      {
        time: 'Day 1 (Friday 04:00 PM)',
        title: 'Kickoff & Team Matchmaking',
        description: 'Problem statements revealed and team formation mixer.',
      },
      {
        time: 'Day 2 (Saturday)',
        title: 'Building & Mentor Office Hours',
        description: 'Continuous development, midnight pizza sprint, and code architecture reviews.',
      },
      {
        time: 'Day 3 (Sunday 02:00 PM)',
        title: 'Live Stage Demos & Awards',
        description: '3-minute live pitch to external founders, alumni judges, and faculty patrons.',
      },
    ],
    prerequisites: [
      'Cross-department teams of 3 to 4 students',
      'Every team must have at least one developer and one business/strategy member',
    ],
    registrationUrl: '/join',
  },
  {
    id: 'society-orientation-launch',
    slug: 'society-orientation-launch',
    title: 'Founding Society Orientation & Cross-Faculty Mixer',
    date: 'Monday, Nov 10, 2026',
    rawDate: '2026-11-10',
    time: '02:00 PM – 03:30 PM PKT',
    venue: 'Main Seminar Hall, Academic Block A',
    category: 'Founder Talk',
    status: 'past',
    speaker: {
      name: 'Executive Council',
      role: 'Founding Student Leaders',
    },
    summary: 'The formal launch of the UOS Entrepreneurship Society and roadmap reveal for the 2026–2027 academic year.',
    description: 'Over 65 students gathered across Computer Science, BBA, Commerce, and English to announce the official chapter formation, reveal the GitHub open-source repository hub, and initiate core team recruitment.',
    agenda: [
      {
        time: '02:00 PM – 02:20 PM',
        title: 'Charter Announcement & Society Mandate',
        description: 'Why the society was established and how it bridges academia to industry.',
      },
      {
        time: '02:20 PM – 03:00 PM',
        title: 'Semester Roadmap & Bootcamp Previews',
        description: 'Revealing the Git workshop, incubation cohort, and hackathon dates.',
      },
      {
        time: '03:00 PM – 03:30 PM',
        title: 'Open Networking & Cabinet Q&A',
        description: 'Direct interaction with students interested in joining the organizing cabinet.',
      },
    ],
    registrationUrl: '/join',
    recap: {
      attendees: 68,
      takeaways: [
        'Officially inaugurated with cross-faculty participation from CS, BBA, and English.',
        'GitHub Organization uos-entrepreneurship unveiled as the central hub for all code & guides.',
        'Over 40 initial student membership applications logged in the first 24 hours.',
      ],
      quote: {
        text: 'For the first time on campus, developers and business students were sitting in the same room talking about building products together.',
        author: 'Hamza R.',
        department: 'BS Computer Science, 5th Sem',
      },
    },
  },
];
