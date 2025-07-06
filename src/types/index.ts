export interface NavItem {
    name: string;
    href: string;
  }
  
  export interface SocialLink {
    name: string;
    href: string;
    icon: React.ReactNode;
  }
  
  export interface TechStack {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'tools';
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  }