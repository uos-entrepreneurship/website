export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatarText: string;
  github?: string;
  linkedin?: string;
  email: string;
  badge?: string;
}

export const executiveTeam: TeamMember[] = [
  {
    id: 'ashar-iftikhar',
    name: 'Ashar Iftikhar',
    role: 'Founder & President',
    department: 'BS Computer Science',
    bio: 'Full-Stack Web Developer & AI Systems Architect. Founder of Ashflow. Establishing the official UOS student developer and venture ecosystem and spearheading the university’s first GitHub Campus Expert accreditation.',
    avatarText: 'AI',
    github: 'https://github.com/ashariftikhar',
    linkedin: 'https://linkedin.com/in/ashariftikhar',
    email: 'ashiriftikharofficial@gmail.com',
    badge: 'Founding Lead',
  },
  {
    id: 'vp-operations',
    name: 'Executive Vice President',
    role: 'VP Operations & Campus Affairs',
    department: 'Department of Business Administration (BBA)',
    bio: 'Leads venue permissions, event logistics across university auditoriums, department liaison, and cross-faculty coordination.',
    avatarText: 'VP',
    email: 'ashiriftikharofficial@gmail.com',
    badge: 'Recruitment Open',
  },
  {
    id: 'director-technical',
    name: 'Director of Technical Programs',
    role: 'Engineering & Lab Bootcamps Lead',
    department: 'Department of Computer Science',
    bio: 'Directs curriculum delivery in computing labs, oversees society code repositories, and mentors first-year student pull requests.',
    avatarText: 'DT',
    email: 'ashiriftikharofficial@gmail.com',
    badge: 'Recruitment Open',
  },
  {
    id: 'director-incubation',
    name: 'Director of Incubation & Strategy',
    role: 'Venture & Pitch Lead',
    department: 'Department of Commerce & Economics',
    bio: 'Oversees pre-seed business validation clinics, customer discovery interviews, unit economics review, and pitch decks.',
    avatarText: 'DI',
    email: 'ashiriftikharofficial@gmail.com',
    badge: 'Recruitment Open',
  },
];

export const facultyAdvisors = [
  {
    title: 'Faculty Advisor — Computing & IT',
    faculty: 'Faculty of Computing & Information Technology',
    role: 'Technical validation, computing lab accreditation & academic compliance.',
  },
  {
    title: 'Faculty Advisor — Management Sciences',
    faculty: 'Faculty of Economics & Management Sciences',
    role: 'Venture ethics, commercial incubation oversight & business plan evaluation.',
  },
  {
    title: 'Institutional Oversight',
    faculty: 'Directorate of Student Affairs (DSA), University of Sahiwal',
    role: 'Official society charter, auditorium venue bookings & campus governance.',
  },
];
