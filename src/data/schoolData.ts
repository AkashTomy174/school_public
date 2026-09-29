/**
 * Central content, media and design-type definitions for
 * Peevees Public School, Nilambur.
 *
 * Single source of truth for every section, modal and form in the app.
 * All exported collections are plain readonly arrays so consumers get full
 * literal-union typing without runtime cost.
 */

import hostelImg from '../assets/images/boarding_campus_hostel_1790445856059.jpg';
import sportsImg from '../assets/images/sports_turf_complex_1790445871188.jpg';
import libraryImg from '../assets/images/library_reading_hall_1790445882436.jpg';

/* ------------------------------------------------------------------ */
/* Media                                                              */
/* ------------------------------------------------------------------ */

/** Remote brand assets served from the school's media CDN. */
const REMOTE_CAMPUS_IMAGERY = {
  /** Monogram crest used in the masthead and footer. */
  logoCrest:
    'https://lh3.googleusercontent.com/aida/AEtjO1XNbLRDQSA0lFTRJmekQOapEdSVNGdXiBUDPVD7ESsIrkp5te6qNqwhiXDnGkPyegizf6FSpVwa_ifuNxxBdHyG8wkHFIWPsBi9ljzmPi2QdUxADSO3TMlD5CXcmysc3WHZ0ATljDsBuFyLWthSHaEc_-A4vJcShApdSw58vr4mvNA6IwBe2tXDJZv_DUnfKtAYG1vyMyL3E3e3tiEXy1LnhUOuF9xJeFkrjgnSNB6cGsDn3a-cmHOD-iSt',
  /** Aerial view of the emerald foothill campus. */
  campusAerial:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA3pC36O-yF65MLHvtUYThEd6wPiwvib43p_N5GsNPz8BnrCbrdnpxA061jA_onpYE1ubPWhIJUBMzQSs0ZMkr5Kbf1jeZvx9CQkMSZnEbIBdy55MHigyps1S4cUWA4eFtWVM5N1EXOft11Iubed8-E1fVltVYnMrUTb6XhHUSbqG6kpY0B7oo1lif-57cICCyqYTcF8O7icLg1D75EguHARrcoRaIM6Wt2E0s0SlTgz_cdY92SvWj7iA',
  /** Physics / chemistry laboratory interior. */
  scienceLab:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC8a_3v4rnX3hEO5exxN0iSEsnV92TfuB0j1OizqqKWaIwXCvEP0aUWKLOtm1k51VEGrtvBnqs45VntrG4AfnfENhNgAfb7O7ZGNuryPWxdczeEg7ZLmqighahAep6egHiQ1sRhjWDH_nf0eZ-zB9vOG6gFsuLXGP8fARH2zVBFSq0NkHdl-hRnZBSBBH-Z1sfoNsiXJczHwuQhpryZIoEUockB0MilO89a6Kf6BCdRo2zdXnFGH0a0MQ',
} as const;

/** Campus photography bundled with the build (generated, locally served). */
export const SCHOOL_IMAGES = {
  logoCrest: REMOTE_CAMPUS_IMAGERY.logoCrest,
  heroCampus: REMOTE_CAMPUS_IMAGERY.campusAerial,
  scienceLab: REMOTE_CAMPUS_IMAGERY.scienceLab,
  hostel: hostelImg,
  sports: sportsImg,
  library: libraryImg,
} as const;

export type SchoolImageKey = keyof typeof SCHOOL_IMAGES;

/* ------------------------------------------------------------------ */
/* Institutional profile                                              */
/* ------------------------------------------------------------------ */

export const SCHOOL_INFO = {
  name: 'Peevees Public School',
  shortName: 'Peevees',
  tagline: 'Day-cum-Boarding • Nilambur, Est. 1993',
  affiliationNo: '930127',
  schoolCode: '75124',
  established: 1993,
  campusAcreage: '25+ Acres Green Belt',
  classRange: 'Classes IV to XII (Co-Educational)',
  phonePrimary: '+91 4931 220261',
  phoneSecondary: '+91 4931 222384',
  email: 'admissions@peevees.com',
  addressLine1: 'Peevees Public School',
  addressLine2: 'Nilambur, Malappuram District',
  addressLine3: 'Kerala - 679329, India',
  timings: 'Mon - Sat: 8:30 AM - 4:30 PM IST',
  tourTimings: 'Tours: 9:30 AM – 3:30 PM IST',
  intake: '2025–26',
  mapsUrl: 'https://maps.google.com/?q=Peevees+Public+School+Nilambur',
} as const;

/** Digits-only phone suitable for `tel:` hrefs. */
export const telHref = (phone: string): string => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const SCHOOL_ADDRESS_LINES: readonly string[] = [
  `${SCHOOL_INFO.addressLine1},`,
  `${SCHOOL_INFO.addressLine2},`,
  SCHOOL_INFO.addressLine3,
];

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export interface NavLink {
  /** Element id to scroll to; `home` is handled as scroll-to-top. */
  readonly id: string;
  readonly label: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'academics', label: 'Academics' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

export interface StatItem {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly subtext: string;
  /** Rendered in the deep-forest accent when true. */
  readonly accent?: 'forest' | 'gold';
}

export const HERO_STATS: readonly StatItem[] = [
  { id: 'heritage', value: '31+', label: 'Years of Heritage', subtext: 'Estd. 1993 in Nilambur' },
  {
    id: 'results',
    value: '100%',
    label: 'CBSE Pass Track',
    subtext: 'Consistent distinctions',
    accent: 'forest',
  },
  { id: 'ratio', value: '1:15', label: 'Faculty-Scholar Ratio', subtext: 'Focused pastoral care' },
  {
    id: 'campus',
    value: '25+',
    label: 'Acre Eco Campus',
    subtext: 'Clean air, rich canopy',
    accent: 'forest',
  },
  {
    id: 'mode',
    value: 'Dual',
    label: 'Education Mode',
    subtext: 'Day scholars & Boarders',
    accent: 'gold',
  },
];

export interface HeroScene {
  readonly id: string;
  readonly title: string;
  readonly caption: string;
  readonly image: string;
}

/** Rotating cinematic backgrounds for the hero viewport. */
export const HERO_SCENES: readonly HeroScene[] = [
  {
    id: 'campus',
    title: 'Western Ghats Foothills',
    caption: '25-Acre Emerald Botanical Campus',
    image: SCHOOL_IMAGES.heroCampus,
  },
  {
    id: 'labs',
    title: 'Advanced Science & AI Labs',
    caption: 'Experiential STEM & Micro-Spectroscopy',
    image: SCHOOL_IMAGES.scienceLab,
  },
  {
    id: 'boarding',
    title: 'Gurukul Residential Life',
    caption: 'Colonial-Style Boy & Girl Hostels',
    image: SCHOOL_IMAGES.hostel,
  },
  {
    id: 'sports',
    title: 'Championship Sports Arena',
    caption: '400m Turf Track, Football & Swimming',
    image: SCHOOL_IMAGES.sports,
  },
];

/** Milliseconds each hero scene stays on screen before advancing. */
export const HERO_SCENE_INTERVAL_MS = 6000;

/* ------------------------------------------------------------------ */
/* Heritage                                                           */
/* ------------------------------------------------------------------ */

export interface FactItem {
 /** Lucide icon name, resolved through the shared icon map. */
  readonly icon: string;
  readonly label: string;
  readonly value: string;
}

export const CAMPUS_FACTS: readonly FactItem[] = [
  {
    icon: 'shield-check',
    label: 'Affiliation Status',
    value: `Senior Secondary (#${SCHOOL_INFO.affiliationNo})`,
  },
  { icon: 'trees', label: 'Campus Acreage', value: SCHOOL_INFO.campusAcreage },
  { icon: 'sparkles', label: 'Student Diversity', value: '14+ Indian States & NRI' },
  { icon: 'circle-check', label: 'Co-Educational Status', value: 'Boys & Girls (Classes IV-XII)' },
];

export const HERITAGE_PARAGRAPHS: readonly string[] = [
  'Founded three decades ago under the visionary patronship of the Peevees Group, Peevees Public School has stood as an intellectual sanctuary in the Malappuram district of Kerala. Our tranquil 25-acre setting fosters a seamless harmony between rigorous CBSE academics, world-class athletic disciplines, and heartfelt moral character.',
  'By blending traditional gurukul-inspired residential warmth with progressive 21st-century pedagogy, we empower young boys and girls from Class 4 through 12 to flourish into independent scholars, compassionate innovators, and ethical global citizens.',
];

export const PRINCIPAL_QUOTE =
  'True education does not merely train scholars for tests; it shapes character that endures adversity and kindles curiosity that transforms the world.';

export const PRINCIPAL_MESSAGE: readonly string[] = [
  'Welcome to Peevees Public School. When our doors opened in 1993, we set out with a simple yet profound conviction: that education in the 21st century must marry absolute scholastic rigor with the timeless values of compassionate mentorship.',
  'In an era dominated by relentless screens and urban distractions, our 25-acre foothill haven in Nilambur offers students a restorative environment where their minds can breathe, think deeply, and stretch their ambitions. Here, day scholars and residential boarders learn side by side, guided by faculty who mentor them around the clock.',
  'Whether in our robotics laboratories, our sports turf, or our quiet library nooks, we cherish every child’s unique spark. We welcome you to visit our campus and experience the Peevees family firsthand.',
];

export interface PillarItem {
  readonly id: string;
  /** Lucide icon name, resolved through the shared icon map. */
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly badge: string;
  readonly extendedDetails: string;
  readonly highlights: readonly string[];
}

export const PILLARS: readonly PillarItem[] = [
  {
    id: 'curriculum',
    icon: 'book-open',
    title: 'CBSE Distinction Curriculum',
    description: 'NCERT-aligned syllabi augmented with competitive foundation modules for JEE, NEET, and CUET, ensuring both board mastery and entrance readiness.',
    badge: 'Competitive Foundation',
    extendedDetails: 'Our curriculum goes beyond rote learning through conceptual depth, diagnostic assessments every fortnight, and individualized remedial tutorials.',
    highlights: ['Synchronized Board & Entrance syllabus', 'Weekly diagnostic progress trackers', 'Specialist faculty for Physics, Chemistry & Math'],
  },
  {
    id: 'boarding',
    icon: 'bed',
    title: 'Home-Away-From-Home Boarding',
    description: 'Separate residential hostels for boys and girls with dedicated housemasters, nutritious hygienic dining, evening study hours, and round-the-clock medical care.',
    badge: '24/7 Pastoral Guardianship',
    extendedDetails: 'Modern dormitories with air conditioning, personal study nooks, organic farm-to-table meals prepared under nutritionist oversight, and an in-house infirmary.',
    highlights: ['Separate Junior & Senior Hostels', 'Resident doctor & 24/7 ambulance', 'Dedicated evening prep supervised by teachers'],
  },
  {
    id: 'science-labs',
    icon: 'flask',
    title: 'Cutting-Edge Science & AI Labs',
    description: 'High-spec laboratories for Physics, Chemistry, Biology, and Computer Science with hands-on robotics and coding literacy from Class 6 onward.',
    badge: 'Experiential Inquiry',
    extendedDetails: 'Equipped with digital microscopes, 3D printers, Python & AI simulation units, and sensors to encourage inquiry-based STEM projects.',
    highlights: ['Individual student workstations', 'Robotics and Arduino innovation kits', 'Annual regional science exposition champions'],
  },
  {
    id: 'mentorship',
    icon: 'user-check',
    title: '1:15 Mentorship & Care',
    description: 'Small section sizes enable individualized learning plans, emotional well-being check-ins, and proactive parent-teacher communications throughout the year.',
    badge: 'Tailored Academic Attention',
    extendedDetails: 'Each teacher acts as an academic and emotional mentor to 15 scholars, ensuring no child is left behind or overlooked.',
    highlights: ['Personalized career roadmap', 'Dedicated student counselor on campus', 'Bi-weekly updates via Parent Portal'],
  },
  {
    id: 'sports',
    icon: 'trophy',
    title: '25-Acre Sports Complex',
    description: 'Full standard football field, athletic tracks, synthetic basketball courts, badminton arena, swimming pool, and dedicated NIS-certified coaching.',
    badge: 'State-Level Representation',
    extendedDetails: 'Structured physical training embedded in daily routine, producing district and state champions across athletics, swimming, and football.',
    highlights: ['Semi-Olympic swimming facility', 'Floodlit multi-sport turf arena', 'NIS certified resident physical mentors'],
  },
  {
    id: 'values',
    icon: 'drama',
    title: 'Values & Cultural Life',
    description: 'Vibrant music, classical arts, debate leagues, Model United Nations, scouts & guides, and regular environmental conservation projects in Nilambur.',
    badge: 'Holistic Character Building',
    extendedDetails: 'Instilling Indian cultural heritage, ethical integrity, public speech proficiency, and active environmental conservation in the Western Ghats.',
    highlights: ['Model United Nations (MUN) chapter', 'Western Ghats Eco-Club expeditions', 'Carnatic & Western music conservatories'],
  },
];

export interface AcademicTrack {
  readonly tier: string;
  readonly classes: string;
  readonly badge: string;
  /** Tailwind classes for the tier badge chip. */
  readonly badgeColor: string;
  readonly ages: string;
  readonly description: string;
  readonly curriculumPoints: readonly string[];
  readonly focus: string;
  readonly focusCaption: string;
  /** Senior Secondary renders as the inverted navy feature card. */
  readonly isSpecialized?: boolean;
}

export const ACADEMIC_TRACKS: readonly AcademicTrack[] = [
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
    focusCaption: 'Focus',
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
    focusCaption: 'Focus',
  },
  {
    tier: 'Senior Secondary',
    classes: 'Classes XI & XII',
    badge: 'Career Specialization',
    badgeColor: 'bg-secondary-container text-on-secondary-container',
    ages: 'Ages 16 – 18',
    description: 'Specialized academic tracks with intensive synchronized coaching for entrance examinations, without compromising the CBSE board score.',
    curriculumPoints: [
      'Science Stream: PCMB (Medical), PCMC (Engineering with AI Elective)',
      'Commerce Stream: Accountancy, Economics, Business Studies, Math',
      'Synchronized JEE / NEET / CUET coaching with top faculties',
      'Evening study supervision & test paper forensic feedback',
    ],
    focus: 'Placements in premier IITs, AIIMS, and Central Universities',
    focusCaption: 'Success Record',
    isSpecialized: true,
  },
];

/** Senior-secondary stream switch inside the feature card. */
export interface StreamOption {
  readonly id: string;
  readonly label: string;
  readonly detail: string;
}

export const SENIOR_STREAMS: readonly StreamOption[] = [
  {
    id: 'pcmb',
    label: 'Medical (PCMB)',
    detail:
      'Physics, Chemistry, Mathematics, Biology with structured NEET hospital simulation clinics and problem labs.',
  },
  {
    id: 'pcmc',
    label: 'AI & Tech (PCMC)',
    detail:
      'Physics, Chemistry, Mathematics, Computer Science / Artificial Intelligence with JEE Advanced coding and robotics modules.',
  },
  {
    id: 'commerce',
    label: 'Commerce',
    detail:
      'Accountancy, Business Studies, Economics, Applied Mathematics / Informatics with CUET & CA Foundation guidance.',
  },
];

export interface RoutineEntry {
  readonly time: string;
  readonly activity: string;
  readonly category: RoutineCategory;
}

export type RoutineCategory = 'Academics' | 'Sports' | 'Dining' | 'Fitness' | 'Hostel' | 'Assembly';

export const DAILY_ROUTINE: readonly RoutineEntry[] = [
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

/** Chip colours for the daily-routine category legend. */
export const ROUTINE_CATEGORY_COLORS: Record<RoutineCategory, string> = {
  Academics: 'bg-primary-fixed text-[#001c37]',
  Sports: 'bg-forest-tint text-[#00210f]',
  Fitness: 'bg-forest-tint text-[#00210f]',
  Dining: 'bg-secondary-fixed text-[#271900]',
  Hostel: 'bg-surface-container text-on-surface-variant',
  Assembly: 'bg-surface-container text-on-surface-variant',
};

/* ------------------------------------------------------------------ */
/* Facilities                                                         */
/* ------------------------------------------------------------------ */

export const FACILITY_CATEGORIES = ['All', 'Labs', 'Boarding', 'Sports', 'Library', 'Campus'] as const;

export type FacilityCategory = (typeof FACILITY_CATEGORIES)[number];
export type FacilityKind = Exclude<FacilityCategory, 'All'>;

export interface FacilityItem {
  readonly id: string;
  readonly name: string;
  readonly category: FacilityKind;
  readonly image: string;
  readonly tag: string;
  /** Tailwind classes for the badge over the imagery. */
  readonly tagColor: string;
  readonly description: string;
  readonly specs: readonly string[];
  /** Compact stat rendered in the card footer. */
  readonly footerStat: string;
  /** Lucide icon name for the card footer. */
  readonly footerIcon: string;
  /** Visual weight inside the bento grid. */
  readonly emphasis: 'hero' | 'standard';
}

export const FACILITIES: readonly FacilityItem[] = [
  {
    id: 'fac-1',
    name: 'Advanced Science & Innovation Labs',
    category: 'Labs',
    image: SCHOOL_IMAGES.scienceLab,
    tag: 'Interactive STEM Discovery',
    tagColor: 'bg-secondary-container text-on-secondary-container',
    description:
      'Separate, fully-equipped experimental labs for Physics, Chemistry, and Life Sciences. Scholars gain hands-on mastery with micro-spectroscopy, organic reactions, and data logging under specialist mentor supervision.',
    specs: ['3 Specialist Laboratories', 'Robotics & AI Innovation Station', 'Digital sensor apparatus & fume hoods'],
    footerStat: '3 Specialist Labs • AI & Robotics Station',
    footerIcon: 'flask',
    emphasis: 'hero',
  },
  {
    id: 'fac-2',
    name: '25-Acre Serene Eco Grounds',
    category: 'Campus',
    image: SCHOOL_IMAGES.heroCampus,
    tag: 'Eco-Sanctuary',
    tagColor: 'bg-tertiary-container text-on-tertiary-container',
    description:
      'Nestled at the base of the Western Ghats, the sprawling campus includes fruit orchards, botanical gardens, and spacious pedestrian avenues free from urban distractions.',
    specs: ['Teak & Mahogany Canopy', 'Zero-pollution air index', 'Rainwater harvesting & solar power'],
    footerStat: 'Nilambur, Western Ghats Valley',
    footerIcon: 'map-pin',
    emphasis: 'standard',
  },
  {
    id: 'fac-3',
    name: 'Residential Boarding Houses',
    category: 'Boarding',
    image: SCHOOL_IMAGES.hostel,
    tag: 'Pastoral Comfort',
    tagColor: 'bg-primary-container text-surface-bright',
    description:
      'Airy, well-ventilated dormitories with round-the-clock security, dedicated laundry, study desks, and recreational common rooms managed by experienced resident wardens.',
    specs: ['Separate Boys & Girls Hostels', 'Round-the-clock security guards', 'Nutritious South & North Indian cuisine'],
    footerStat: 'Separate Boys & Girls Hostels',
    footerIcon: 'shield',
    emphasis: 'standard',
  },
  {
    id: 'fac-4',
    name: 'The Central Resource Library',
    category: 'Library',
    image: SCHOOL_IMAGES.library,
    tag: 'Scholastic Hub',
    tagColor: 'bg-secondary-fixed text-on-secondary-fixed',
    description:
      'Housing over 20,000 literary volumes, peer-reviewed science journals, national dailies, and high-speed digital research terminals for independent scholar inquiries.',
    specs: [
      '20,000+ Printed & Digital Titles',
      'Quiet Silent Study Pods',
      'Subscription to National & International journals',
    ],
    footerStat: '20,000+ Printed & Digital Titles',
    footerIcon: 'book-open',
    emphasis: 'standard',
  },
  {
    id: 'fac-5',
    name: 'Athletic Complex & Turfs',
    category: 'Sports',
    image: SCHOOL_IMAGES.sports,
    tag: 'NIS Certified Training',
    tagColor: 'bg-tertiary-container text-on-tertiary-container',
    description:
      '400m running track, football turf, outdoor basketball courts, cricket practice pitches, swimming pool, and indoor table tennis complexes with specialized morning training.',
    specs: ['Regulation Football Turf', '400m All-Weather Athletic Track', 'Semi-Olympic Swimming Pool'],
    footerStat: 'NIS Certified Physical Mentors',
    footerIcon: 'trophy',
    emphasis: 'standard',
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials & outcomes                                            */
/* ------------------------------------------------------------------ */

export interface TestimonialItem {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly quote: string;
  readonly rating: number;
  readonly initials: string;
  /** Tailwind classes for the monogram avatar. */
  readonly avatarColor: string;
  readonly badge: string;
}

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Rajesh Kurup',
    role: 'Parent of Class XII Boarder (Batch 2024)',
    quote:
      'Sending our son to Peevees Boarding in Nilambur was the finest decision we made. The balanced daily regimen, caring house wardens, and disciplined study hours transformed his academic focus completely.',
    rating: 5,
    initials: 'RK',
    avatarColor: 'bg-primary text-on-primary',
    badge: 'Boarder Parent',
  },
  {
    id: 'test-2',
    name: 'Fathima Ansar',
    role: 'Alumna (Batch 2023), Calicut Medical College',
    quote:
      'The Science laboratory facilities and faculty mentoring at Peevees helped me crack NEET with a 99.2 percentile. The teachers here believe in your potential before you even see it yourself.',
    rating: 5,
    initials: 'FA',
    avatarColor: 'bg-tertiary-container text-on-tertiary-container',
    badge: 'NEET 99.2% Topper',
  },
  {
    id: 'test-3',
    name: 'Mohammed Niyas',
    role: 'NRI Parent, Dubai (UAE)',
    quote:
      'As non-resident Keralites based in Dubai, ensuring our daughter had roots, safety, and academic rigor was paramount. Peevees provides an idyllic foothill haven with unmatched pastoral vigilance.',
    rating: 5,
    initials: 'MN',
    avatarColor: 'bg-secondary text-on-secondary',
    badge: 'NRI Parent (UAE)',
  },
];

export interface OutcomeStat {
  readonly value: string;
  readonly label: string;
}

/** Verified CBSE board outcomes shown beneath the testimonials. */
export const BOARD_OUTCOMES: readonly OutcomeStat[] = [
  { value: '100%', label: 'Pass Percentage Class X & XII' },
  { value: '48%', label: 'Students Above 90% Aggregate' },
  { value: '34', label: 'Centum Scores in Science & Math' },
  { value: 'Zero', label: 'Compromise on Student Well-being' },
];

/* ------------------------------------------------------------------ */
/* Virtual campus tour                                                */
/* ------------------------------------------------------------------ */

export interface TourHotspot {
  /** Percentage offsets inside the viewport frame. */
  readonly x: string;
  readonly y: string;
  readonly label: string;
  readonly detail: string;
}

export interface TourSpot {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly image: string;
  readonly description: string;
  readonly hotspots: readonly TourHotspot[];
}

export const TOUR_SPOTS: readonly TourSpot[] = [
  {
    id: 'grounds',
    name: '25-Acre Foothill Eco Campus',
    category: 'Outdoors',
    image: SCHOOL_IMAGES.heroCampus,
    description:
      'Sprawling botanical campus located in the Western Ghats foothill green belt with zero urban pollution.',
    hotspots: [
      { x: '35%', y: '60%', label: 'Main Assembly Lawn', detail: 'Morning yoga & moral assembly grounds' },
      { x: '68%', y: '45%', label: 'Botanical Canopy', detail: 'Over 1,200 native Nilambur teak & mahogany trees' },
    ],
  },
  {
    id: 'labs',
    name: 'Advanced Science & AI Innovation Labs',
    category: 'STEM',
    image: SCHOOL_IMAGES.scienceLab,
    description:
      'State-of-the-art Physics, Chemistry, and Life Sciences laboratories with individual workstations.',
    hotspots: [
      { x: '30%', y: '50%', label: 'Microscopy Workstation', detail: 'High-power optical & digital spectrometers' },
      { x: '70%', y: '55%', label: 'Robotics & AI Bench', detail: 'Microcontrollers, Arduino and sensor rigs' },
    ],
  },
  {
    id: 'hostel',
    name: 'Residential Gurukul Boarding Houses',
    category: 'Pastoral',
    image: SCHOOL_IMAGES.hostel,
    description:
      'Airy colonial architecture with spacious verandas, climate-controlled rooms, and 24/7 warden supervision.',
    hotspots: [
      { x: '45%', y: '40%', label: 'Study Veranda', detail: 'Supervised evening prep and reading lounge' },
      { x: '75%', y: '65%', label: 'Hostel Courtyard', detail: 'Recreational lawns and indoor games room' },
    ],
  },
  {
    id: 'sports',
    name: 'Athletic Arena & 400m Track',
    category: 'Athletics',
    image: SCHOOL_IMAGES.sports,
    description:
      'Full standard football turf, synthetic athletic running track, basketball pavilion, and semi-Olympic pool.',
    hotspots: [
      { x: '50%', y: '65%', label: 'FIFA-Spec Football Turf', detail: 'Floodlit evening matches & tournaments' },
      { x: '25%', y: '55%', label: 'All-Weather Track', detail: '400m track for sprints and cross-country drills' },
    ],
  },
  {
    id: 'library',
    name: 'Central Scholastic Library',
    category: 'Academics',
    image: SCHOOL_IMAGES.library,
    description:
      'Quiet intellectual haven housing 20,000+ volumes, scientific periodicals, and high-speed research terminals.',
    hotspots: [
      { x: '40%', y: '50%', label: 'Reference Arch', detail: 'Encyclopedias and peer-reviewed journals' },
      { x: '80%', y: '60%', label: 'Digital Scholar Carrels', detail: 'Internet-enabled academic terminals' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Statutory disclosure                                               */
/* ------------------------------------------------------------------ */

export interface DisclosureDoc {
  readonly title: string;
  readonly code: string;
  readonly validity: string;
}

export const CBSE_DISCLOSURE_DOCS: readonly DisclosureDoc[] = [
  { title: 'CBSE Affiliation Extension Letter', code: 'CBSE/AFF/930127/2023-28', validity: '2028' },
  { title: 'School Management Committee (SMC) Constitution', code: 'PPS/SMC/2024-25', validity: 'Annual' },
  { title: 'Building Safety Certificate by PWD Executive Engineer', code: 'PWD/BS/KL-MPM-1029', validity: '2027' },
  { title: 'Fire & Rescue Safety NOC Certificate', code: 'KFRS/NOC/2024/771', validity: '2025' },
  { title: 'Water, Health & Sanitation Hygiene Certificate', code: 'DMO/MAL/H2O/4402', validity: '2025' },
  { title: 'Fee Structure Approved by PTA & SMC for 2025-26', code: 'PPS/FEE/2025-26', validity: '2026' },
  { title: 'Academic Calendar & 3-Year Board Result Summary', code: 'PPS/ACAD/2024-25', validity: '2025' },
];

/* ------------------------------------------------------------------ */
/* Admission forms                                                    */
/* ------------------------------------------------------------------ */

export const GRADE_OPTIONS: readonly string[] = [
  'Class IV',
  'Class V',
  'Class VI',
  'Class VII',
  'Class VIII',
  'Class IX',
  'Class X',
  'Class XI (Science - PCMB)',
  'Class XI (Science - PCMC)',
  'Class XI (Commerce)',
];

export const ENROLLMENT_MODES: readonly string[] = ['Full Boarder (Hostel)', 'Day Scholar'];

export const ASSESSMENT_SLOTS: readonly string[] = [
  'Next Saturday (10:00 AM IST) - Nilambur Campus',
  'Next Sunday (11:00 AM IST) - Nilambur Campus',
  'Online Proctored Slot (For NRI / Gulf Scholars)',
  'Schedule Personalized Weekday Tour & Assessment',
];

export const ADMISSION_HIGHLIGHTS: readonly FactItem[] = [
  { icon: 'calendar', label: 'Entrance Assessments: Weekly Slots', value: '' },
  { icon: 'bed', label: 'Residential Hostel Seats Limited', value: '' },
  { icon: 'graduation-cap', label: 'Merit Scholarships Available', value: '' },
  { icon: 'bus', label: 'Day-Scholar Transport Routes Active', value: '' },
];

/* ------------------------------------------------------------------ */
/* Fees & scholarships                                                */
/* ------------------------------------------------------------------ */

export interface FeeBand {
  readonly label: string;
  /** Tailwind text colour for the band heading. */
  readonly labelColor: string;
  readonly range: string;
  readonly notes: string;
}

export const FEE_BANDS: readonly FeeBand[] = [
  {
    label: 'Day Scholar (Annual)',
    labelColor: 'text-secondary',
    range: '₹45,000 – ₹72,000',
    notes:
      'Tuition, smart lab access, library, sports coaching, and CBSE registration. Bus transport optional by route.',
  },
  {
    label: 'Residential Boarder (Annual)',
    labelColor: 'text-tertiary',
    range: '₹1,40,000 – ₹1,95,000',
    notes:
      'Includes AC dorms, four wholesome organic meals daily, laundry, evening tutor prep, and infirmary medical care.',
  },
];

export const SCHOLARSHIP_NOTE =
  'Up to 50% tuition waiver available for scholars scoring 90%+ in the Peevees Talent Search Assessment or state-level sports achievers.';
