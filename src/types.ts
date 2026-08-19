export interface Course {
  id: string;
  name: string;
  code: string;
  degree: 'BE' | 'MBA' | 'MCA' | 'MTech' | 'PhD';
  category: 'Undergraduate' | 'Postgraduate' | 'Research';
  duration: string;
  intake: number;
  established: number;
  description: string;
  highlights: string[];
  careerProspects: string[];
  hodName: string;
  hodQualification: string;
  accreditationStatus: string;
  curriculumSemesters: {
    semester: number;
    subjects: string[];
  }[];
  labFacilities: string[];
  icon: string;
  image?: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Exams' | 'Placements' | 'Events' | 'Admissions';
  isNew?: boolean;
  linkText?: string;
  details?: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
  icon: string;
}

export interface PlacementStat {
  year: string;
  offers: number;
  highestPackage: number; // in LPA
  avgPackage: number; // in LPA
  companiesVisited: number;
}

export interface Recruiter {
  name: string;
  logoText: string;
  industry: string;
  tier: 'Dream' | 'Super Dream' | 'Core' | 'Mass';
  highestHired?: number;
}

export interface Faculty {
  name: string;
  role: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  image: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Laboratories' | 'Student Life' | 'Innovation';
  shortDesc: string;
  fullDesc: string;
  stats: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  branch: string;
  batch: string;
  role: string;
  company: string;
  package: string;
  quote: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Hostel & Campus' | 'Placements';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Sports' | 'Events' | 'Culture';
  image: string;
  caption: string;
}

export interface TourHotspot {
  id: string;
  title: string;
  description: string;
  x: number; // percentage horizontal position (0 - 100)
  y: number; // percentage vertical position (0 - 100)
  iconType?: 'info' | 'tech' | 'book' | 'sport' | 'lab';
}

export interface VirtualTourSpot {
  id: string;
  name: string;
  category: 'Labs & Research' | 'Library' | 'Sports & Fitness' | 'Innovation & Incubation' | 'Auditorium' | 'Campus Grounds';
  tagline: string;
  description: string;
  panoramicImage: string;
  thumbnailImage: string;
  badge: string;
  specs: { label: string; value: string }[];
  hotspots: TourHotspot[];
  mapCoords: { x: number; y: number }; // Relative position on 11-acre campus map (0-100%)
  audioGuideTranscript?: string;
  established?: string;
}

