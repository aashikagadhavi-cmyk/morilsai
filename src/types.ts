export type PageType = 'home' | 'about' | 'solutions' | 'industries' | 'pricing' | 'blog' | 'contact' | 'auth';

export interface Solution {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  metrics: { label: string; value: string }[];
  highlightColor: string;
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  caseStudy: {
    client: string;
    challenge: string;
    outcome: string;
    stat: string;
  };
  benefits: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  features: string[];
  cta: string;
  badge?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'AI Insights' | 'Workflows' | 'Engineering' | 'Company';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
}

export interface FeatureComparison {
  name: string;
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
  category: 'core' | 'support' | 'security' | 'integration';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}
