/**
 * School Data & Assets for Peevees Public School, Nilambur
 */

import hostelImg from '../assets/images/boarding_campus_hostel_1790445856059.jpg';
import sportsImg from '../assets/images/sports_turf_complex_1790445871188.jpg';
import libraryImg from '../assets/images/library_reading_hall_1790445882436.jpg';

export const SCHOOL_IMAGES = {
  logoCrest: 'https://lh3.googleusercontent.com/aida/AEtjO1XNbLRDQSA0lFTRJmekQOapEdSVNGdXiBUDPVD7ESsIrkp5te6qNqwhiXDnGkPyegizf6FSpVwa_ifuNxxBdHyG8wkHFIWPsBi9ljzmPi2QdUxADSO3TMlD5CXcmysc3WHZ0ATljDsBuFyLWthSHaEc_-A4vJcShApdSw58vr4mvNA6IwBe2tXDJZv_DUnfKtAYG1vyMyL3E3e3tiEXy1LnhUOuF9xJeFkrjgnSNB6cGsDn3a-cmHOD-iSt',
  heroCampus: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3pC36O-yF65MLHvtUYThEd6wPiwvib43p_N5GsNPz8BnrCbrdnpxA061jA_onpYE1ubPWhIJUBMzQSs0ZMkr5Kbf1jeZvx9CQkMSZnEbIBdy55MHigyps1S4cUWA4eFtWVM5N1EXOft11Iubed8-E1fVltVYnMrUTb6XhHUSbqG6kpY0B7oo1lif-57cICCyqYTcF8O7icLg1D75EguHARrcoRaIM6Wt2E0s0SlTgz_cdY92SvWj7iA',
  scienceLab: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8a_3v4rnX3hEO5exxN0iSEsnV92TfuB0j1OizqqKWaIwXCvEP0aUWKLOtm1k51VEGrtvBnqs45VntrG4AfnfENhNgAfb7O7ZGNuryPWxdczeEg7ZLmqighahAep6egHiQ1sRhjWDH_nf0eZ-zB9vOG6gFsuLXGP8fARH2zVBFSq0NkHdl-hRnZBSBBH-Z1sfoNsiXJczHwuQhpryZIoEUockB0MilO89a6Kf6BCdRo2zdXnFGH0a0MQ',
  hostel: hostelImg,
  sports: sportsImg,
  library: libraryImg,
};

export const SCHOOL_INFO = {
  name: 'Peevees Public School',
  tagline: 'Day-cum-Boarding • Nilambur, Est. 1993',
  affiliationNo: '930127',
  schoolCode: '75124',
  established: 1993,
  campusAcreage: '25+ Acres Green Belt',
  classes: 'Classes IV to XII (Co-Educational)',
  phonePrimary: '+91 4931 220261',
  phoneSecondary: '+91 4931 222384',
  email: 'admissions@peevees.com',
  address: 'Peevees Public School, Nilambur, Malappuram District, Kerala - 679329, India',
  timings: 'Mon - Sat: 8:30 AM - 4:30 PM IST',
};

export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  highlight?: boolean;
}

export const HERO_STATS: StatItem[] = [
  { id: '1', value: '31+', label: 'Years of Heritage', subtext: 'Estd. 1993 in Nilambur' },
  { id: '2', value: '100%', label: 'CBSE Pass Track', subtext: 'Consistent distinctions', highlight: true },
  { id: '3', value: '1:15', label: 'Faculty-Scholar Ratio', subtext: 'Focused pastoral care' },
  { id: '4', value: '25+', label: 'Acre Eco Campus', subtext: 'Clean air, rich canopy', highlight: true },
  { id: '5', value: 'Dual', label: 'Education Mode', subtext: 'Day scholars & Boarders' },
];

export interface PillarItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge: string;
  extendedDetails: string;
  highlights: string[];
}

export const PILLARS: PillarItem[] = [
  {
    id: 'curriculum',
    icon: 'menu_book',
    title: 'CBSE Distinction Curriculum',
    description: 'NCERT-aligned syllabi augmented with competitive foundation modules for JEE, NEET, and CUET, ensuring both board mastery and entrance readiness.',
    badge: 'Competitive Foundation',
    extendedDetails: 'Our curriculum goes beyond rote learning through conceptual depth, diagnostic assessments every fortnight, and individualized remedial tutorials.',
    highlights: ['Synchronized Board & Entrance syllabus', 'Weekly diagnostic progress trackers', 'Specialist faculty for Physics, Chemistry & Math'],
  },
  {
    id: 'boarding',
    icon: 'hotel',
    title: 'Home-Away-From-Home Boarding',
    description: 'Separate residential hostels for boys and girls with dedicated housemasters, nutritious hygienic dining, evening study hours, and round-the-clock medical care.',
    badge: '24/7 Pastoral Guardianship',
    extendedDetails: 'Modern dormitories with air conditioning, personal study nooks, organic farm-to-table meals prepared under nutritionist oversight, and in-house infirmary.',
    highlights: ['Separate Junior & Senior Hostels', 'Resident doctor & 24/7 ambulance', 'Dedicated evening prep supervised by teachers'],
  },
  {
    id: 'science-labs',
    icon: 'biotech',
    title: 'Cutting-Edge Science & AI Labs',
    description: 'High-spec laboratories for Physics, Chemistry, Biology, and Computer Science with hands-on robotics and coding literacy from Class 6 onward.',
    badge: 'Experiential Inquiry',
    extendedDetails: 'Equipped with digital microscopes, 3D printers, Python & AI simulation units, and sensors to encourage inquiry-based STEM projects.',
    highlights: ['Individual student workstations', 'Robotics and Arduino innovation kits', 'Annual regional science exposition champions'],
  },
  {
    id: 'mentorship',
    icon: 'psychology',
    title: '1:15 Mentorship & Care',
    description: 'Small section sizes enable individualized learning plans, emotional well-being check-ins, and proactive parent-teacher communications throughout the year.',
    badge: 'Tailored Academic Attention',
    extendedDetails: 'Each teacher acts as an academic and emotional mentor to 15 scholars, ensuring no child is left behind or overlooked.',
    highlights: ['Personalized career roadmap', 'Dedicated student counselor on campus', 'Bi-weekly updates via Parent Portal'],
  },
  {
    id: 'sports',
    icon: 'sports_soccer',
    title: '25-Acre Sports Complex',
    description: 'Full standard football field, athletic tracks, synthetic basketball courts, badminton arena, swimming pool, and dedicated NIS-certified coaching.',
    badge: 'State-Level Representation',
    extendedDetails: 'Structured physical training embedded in daily routine, producing district and state champions across athletics, swimming, and football.',
    highlights: ['Semi-Olympic swimming facility', 'Floodlit multi-sport turf arena', 'NIS certified resident physical mentors'],
  },
  {
    id: 'values',
    icon: 'theater_comedy',
    title: 'Values & Cultural Life',
    description: 'Vibrant music, classical arts, debate leagues, Model United Nations, scouts & guides, and regular environmental conservation projects in Nilambur.',
    badge: 'Holistic Character Building',
    extendedDetails: 'Instilling Indian cultural heritage, ethical integrity, public speech proficiency, and active environmental conservation in the Western Ghats.',
    highlights: ['Model United Nations (MUN) chapter', 'Western Ghats Eco-Club expeditions', 'Carnatic & Western music conservatories'],
  },
];

export interface AcademicTrack {
  tier: string;
  classes: string;
  badge: string;
  badgeColor: string;
  ages: string;
  description: string;
  curriculumPoints: string[];
  focus: string;
  isSpecialized?: boolean;
}

export const ACADEMIC_TRACKS: AcademicTrack[] = [
  {
    tier: 'Middle School',
    classes: 'Classes IV to VIII',
    badge: 'Foundation Tier',
    badgeColor: 'bg-surface-container text-primary',
    ages: 'Ages 9 – 13',
    description: 'Fostering exploratory learning, reading habits, and conceptual foundations in Science and Mathematics through project-based exercises.',
    curriculumPoints: [
      'Language triad: English, Malayalam, Hindi / Arabic',
      'STEM discovery & introductory computing labs',
      'Art, drama, public speaking & physical education',
      'Activity-based NCERT experiential learning',
    ],
    focus: 'Inquiry-driven curiosity & disciplined study habits',
  },
  {
    tier: 'Secondary School',
    classes: 'Classes IX & X',
    badge: 'CBSE Core',
    badgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
    ages: 'Ages 14 – 15',
    description: 'Rigorous NCERT curriculum combined with analytic problem-solving, structured lab practicals, and early competitive aptitude tests.',
    curriculumPoints: [
      'Science (Physics, Chemistry, Biology) & Mathematics Standard',
      'Social Sciences & Information Technology / AI Fundamentals',
      'Mock board drills & one-on-one remedial clinics',
      'Foundation modules for NTSE and Olympiads',
    ],
    focus: '100% Board distinction & foundational aptitude',
  },
  {
    tier: 'Senior Secondary',
    classes: 'Classes XI & XII',
    badge: 'Career Specialization',
    badgeColor: 'bg-secondary-container text-on-secondary-container',
    ages: 'Ages 16 – 18',
    description: 'Specialized academic tracks with intensive synchronized coaching for entrance examinations without compromising the CBSE board score.',
    curriculumPoints: [
      'Science Stream: PCMB (Medical), PCMC (Engineering with AI Elective)',
      'Commerce Stream: Accountancy, Economics, Business Studies, Math',
      'Synchronized JEE / NEET / CUET coaching with top faculties',
      'Evening study supervision & test paper forensic feedback',
    ],
    focus: 'Placements in premier IITs, AIIMS, and Central Universities',
    isSpecialized: true,
  },
];

export interface FacilityItem {
  id: string;
  name: string;
  category: 'Labs' | 'Boarding' | 'Sports' | 'Library' | 'Campus';
  image: string;
  tag: string;
  tagColor: string;
  colSpan: string;
  description: string;
  specs: string[];
}

export const FACILITIES: FacilityItem[] = [
  {
    id: 'fac-1',
    name: 'Advanced Science & Innovation Labs',
    category: 'Labs',
    image: SCHOOL_IMAGES.scienceLab,
    tag: 'Interactive STEM Discovery',
    tagColor: 'bg-secondary-container text-on-secondary-container',
    colSpan: 'md:col-span-8',
    description: 'Separate, fully-equipped experimental labs for Physics, Chemistry, and Life Sciences. Scholars gain hands-on mastery with micro-spectroscopy, organic reactions, and data logging under specialist mentor supervision.',
    specs: ['3 Specialist Laboratories', 'Robotics & AI Innovation Station', 'Digital sensor apparatus & fume hoods'],
  },
  {
    id: 'fac-2',
    name: '25-Acre Serene Eco Grounds',
    category: 'Campus',
    image: SCHOOL_IMAGES.heroCampus,
    tag: 'Eco-Sanctuary',
    tagColor: 'bg-tertiary-container text-on-tertiary-container',
    colSpan: 'md:col-span-4',
    description: 'Nestled at the base of the Western Ghats, the sprawling campus includes fruit orchards, botanical gardens, and spacious pedestrian avenues free from urban distractions.',
    specs: ['Teak & Mahogany Canopy', 'Zero-pollution air index', 'Rainwater harvesting & solar power'],
  },
  {
    id: 'fac-3',
    name: 'Residential Boarding Houses',
    category: 'Boarding',
    image: SCHOOL_IMAGES.hostel,
    tag: 'Pastoral Comfort',
    tagColor: 'bg-primary-container text-surface-bright',
    colSpan: 'md:col-span-4',
    description: 'Airy, well-ventilated dormitories with round-the-clock security, dedicated laundry, study desks, and recreational common rooms managed by experienced resident wardens.',
    specs: ['Separate Boys & Girls Hostels', 'Round-the-clock security guards', 'Nutritious South & North Indian cuisine'],
  },
  {
    id: 'fac-4',
    name: 'The Central Resource Library',
    category: 'Library',
    image: SCHOOL_IMAGES.library,
    tag: 'Scholastic Hub',
    tagColor: 'bg-secondary-fixed text-on-secondary-fixed',
    colSpan: 'md:col-span-4',
    description: 'Housing over 20,000 literary volumes, peer-reviewed science journals, national dailies, and high-speed digital research terminals for independent scholar inquiries.',
    specs: ['20,000+ Printed & Digital Titles', 'Quiet Silent Study Pods', 'Subscription to National & International journals'],
  },
  {
    id: 'fac-5',
    name: 'Athletic Complex & Turfs',
    category: 'Sports',
    image: SCHOOL_IMAGES.sports,
    tag: 'NIS Certified Training',
    tagColor: 'bg-tertiary-container text-on-tertiary-container',
    colSpan: 'md:col-span-4',
    description: '400m running track, football turf, outdoor basketball courts, cricket practice pitches, swimming pool, and indoor table tennis complexes with specialized morning training.',
    specs: ['Regulation Football Turf', '400m All-Weather Athletic Track', 'Semi-Olympic Swimming Pool'],
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  bgColor: string;
  badge: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Rajesh Kurup',
    role: 'Parent of Class XII Boarder (Batch 2024)',
    quote: 'Sending our son to Peevees Boarding in Nilambur was the finest decision we made. The balanced daily regimen, caring house wardens, and disciplined study hours transformed his academic focus completely.',
    rating: 5,
    initials: 'RK',
    bgColor: 'bg-primary text-on-primary',
    badge: 'Boarder Parent',
  },
  {
    id: 'test-2',
    name: 'Fathima Ansar',
    role: 'Alumna (Batch 2023), Calicut Medical College',
    quote: 'The Science laboratory facilities and faculty mentoring at Peevees helped me crack NEET with a 99.2 percentile. The teachers here believe in your potential before you even see it yourself.',
    rating: 5,
    initials: 'FA',
    bgColor: 'bg-tertiary-container text-on-tertiary-container',
    badge: 'NEET 99.2% Topper',
  },
  {
    id: 'test-3',
    name: 'Mohammed Niyas',
    role: 'NRI Parent, Dubai (UAE)',
    quote: 'As non-resident Keralites based in Dubai, ensuring our daughter had roots, safety, and academic rigor was paramount. Peevees provides an idyllic foothill haven with unmatched pastoral vigilance.',
    rating: 5,
    initials: 'MN',
    bgColor: 'bg-secondary text-on-secondary',
    badge: 'NRI Parent (UAE)',
  },
];

export const CBSE_DISCLOSURE_DOCS = [
  { title: 'CBSE Affiliation Extension Letter', code: 'CBSE/AFF/930127/2023-28', validUntil: '2028', type: 'PDF' },
  { title: 'School Management Committee (SMC) Constitution', code: 'PPS/SMC/2024-25', validUntil: 'Annual', type: 'PDF' },
  { title: 'Building Safety Certificate by PWD Executive Engineer', code: 'PWD/BS/KL-MPM-1029', validUntil: '2027', type: 'PDF' },
  { title: 'Fire & Rescue Safety NOC Certificate', code: 'KFRS/NOC/2024/771', validUntil: '2025', type: 'PDF' },
  { title: 'Water, Health & Sanitation Hygiene Certificate', code: 'DMO/MAL/H2O/4402', validUntil: '2025', type: 'PDF' },
  { title: 'Fee Structure Approved by PTA & SMC for 2025-26', code: 'PPS/FEE/2025-26', validUntil: '2026', type: 'PDF' },
  { title: 'Academic Calendar & 3-Year Board Result Summary', code: 'PPS/ACAD/2024-25', validUntil: '2025', type: 'PDF' },
];

export const DAILY_ROUTINE = [
  { time: '05:45 AM', activity: 'Rising Bell & Morning Hydration', category: 'Hostel' },
  { time: '06:15 AM - 07:00 AM', activity: 'Morning Conditioning / Yoga / Sports Drills', category: 'Fitness' },
  { time: '07:15 AM - 08:00 AM', activity: 'Nutritious Breakfast in Central Dining', category: 'Dining' },
  { time: '08:15 AM', activity: 'School Assembly & Moral Value Thought of the Day', category: 'Assembly' },
  { time: '08:45 AM - 01:15 PM', activity: 'Academic Sessions & Practical Labs (Classes IV - XII)', category: 'Academics' },
  { time: '01:15 PM - 02:00 PM', activity: 'Wholesome Lunch & Relaxation Break', category: 'Dining' },
  { time: '02:00 PM - 03:45 PM', activity: 'Advanced Tutorials & Synchronized JEE/NEET Coaching', category: 'Academics' },
  { time: '04:15 PM - 05:45 PM', activity: 'Evening Sports, Athletics & Co-Curricular Clubs', category: 'Sports' },
  { time: '06:00 PM - 06:30 PM', activity: 'Evening Refreshments & Bathing Hour', category: 'Hostel' },
  { time: '06:30 PM - 08:30 PM', activity: 'Supervised Evening Study Prep with Subject Mentors', category: 'Academics' },
  { time: '08:30 PM - 09:15 PM', activity: 'Dinner & Leisure Common Room Time', category: 'Dining' },
  { time: '09:45 PM', activity: 'Night Roll Call & Lights Out', category: 'Hostel' },
];
