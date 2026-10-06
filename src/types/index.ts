export type PageView = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'solutions' 
  | 'portfolio' 
  | 'blog' 
  | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  toolsUsed: string[];
  idealFor: string[];
  iconName: string;
}

export interface ProblemSolutionItem {
  id: string;
  problemTitle: string;
  problemDesc: string;
  impact: string;
  solutionTitle: string;
  solutionDesc: string;
  keyBenefits: string[];
  industry: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  industry: string;
  isDemo: boolean;
  problem: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  summary: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
  isUserCreated?: boolean;
}

export interface AuditQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    points: number;
    recommendedService: string;
  }[];
}
