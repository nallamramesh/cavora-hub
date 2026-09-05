export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  badge: string;
}

export interface BeforeAfterPreset {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  stats: string;
}

export interface VideoProject {
  id: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  views?: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  featured?: boolean;
  aspectRatio?: '16:9' | '9:16';
  tags: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Video Editing' | 'Photo Editing' | 'Graphic Design' | 'Social Media';
  tagline: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  client: string;
  date: string;
  description: string;
  challenge: string;
  solution: string;
  servicesUsed: string[];
  tools: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  handle?: string;
  company?: string;
  avatar: string;
  rating: number;
  content: string;
  tag: string;
  metric?: {
    value: string;
    label: string;
  };
  verified?: boolean;
  location?: string;
  date?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  currencySymbol: string;
  period?: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  targetBudget: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}
