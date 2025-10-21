export interface Service {
  slug: string;
  title: string;
  image: string;
  blurb: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  rating: number;
}

export const services: Service[] = [
  {
    slug: 'commercial-re-roofing',
    title: 'Commercial Re-Roofing',
    image: '/img/2025/03/Best-Commercial-Roof-Restoration-Melbourne.jpg',
    blurb: 'Complete commercial roof replacement with minimal disruption to your operations.',
  },
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing',
    image: '/img/commercial_roofing.png',
    blurb: 'New commercial roof installations for all building types with quality materials.',
  },
  {
    slug: 'architectural-cladding',
    title: 'Architectural Cladding',
    image: '/img/wall_cladding.png',
    blurb: 'Premium cladding solutions that enhance aesthetics and weather protection.',
  },
  {
    slug: 'industrial-roofing',
    title: 'Industrial Roofing',
    image: '/img/2025/03/Best-Metal-Roofing-For-Commercial-Flat-Roofs.jpg',
    blurb: 'Heavy-duty roofing systems for warehouses, factories, and large facilities.',
  },
  {
    slug: 'roof-inspections',
    title: 'Roof Reports',
    image: '/img/2025/03/Flat-Metal-Roofing-Solutions-Melbourne.jpg',
    blurb: 'Comprehensive roof condition assessments with detailed reports.',
  },
  {
    slug: 'metal-roof-replacement',
    title: 'Metal Roof Replacement',
    image: '/img/metal_roof_replacement.png',
    blurb: 'Expert metal roof replacement with durable, long-lasting materials.',
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    image: '/img/roof_repair.png',
    blurb: 'Fast and reliable roof repairs for leaks, storm damage, and general wear.',
  },
  {
    slug: 'roof-restoration',
    title: 'Roof Restoration',
    image: '/img/roof_restoration.png',
    blurb: 'Complete roof restoration services to extend lifespan and improve appearance.',
  },
];

export const features: Feature[] = [
  {
    icon: 'Shield',
    title: 'Licensed & Insured',
    description: 'Fully licensed registered plumbers with comprehensive insurance coverage for all projects.',
  },
  {
    icon: 'Award',
    title: '22 Years Experience',
    description: 'Over two decades of commercial and industrial roofing excellence across Melbourne.',
  },
  {
    icon: 'CheckCircle',
    title: 'Quality Workmanship',
    description: 'Meticulous attention to detail and commitment to delivering superior roofing solutions.',
  },
  {
    icon: 'Clock',
    title: 'On-Time Completion',
    description: 'We respect your schedule and complete projects on time, every time.',
  },
];

export const processSteps: Step[] = [
  {
    number: 1,
    title: 'Free Inspection',
    description: 'We assess your roof condition and provide a detailed report with photos.',
  },
  {
    number: 2,
    title: 'Custom Quote',
    description: 'Receive a comprehensive quote tailored to your specific roofing needs.',
  },
  {
    number: 3,
    title: 'Expert Installation',
    description: 'Our licensed team completes your project with minimal disruption.',
  },
  {
    number: 4,
    title: 'Quality Guarantee',
    description: 'Enjoy peace of mind with our workmanship warranty and ongoing support.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'John Smith',
    company: 'Smith Manufacturing',
    quote: 'Active Metal Roofing did an outstanding job on our warehouse re-roofing project. Professional, on-time, and excellent quality.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    company: 'Johnson Logistics',
    quote: 'Highly recommend! They completed our commercial roofing project ahead of schedule with minimal disruption to our operations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Chen Industries',
    quote: 'Professional service from start to finish. The team was knowledgeable, efficient, and delivered exactly what they promised.',
    rating: 5,
  },
];

export const serviceAreas = [
  'Melbourne CBD',
  'Langwarrin',
  'Frankston',
  'Mornington Peninsula',
  'Dandenong',
  'Pakenham',
  'Cranbourne',
  'Carrum Downs',
  'Berwick',
  'Bayswater',
  'Glen Waverley',
];
