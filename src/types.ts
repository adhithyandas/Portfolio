export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectLinks {
  ios?: string;
  android?: string;
  web?: string;
  github?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  links?: ProjectLinks;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface InfoDetail {
  label: string;
  value: string;
  iconName: string;
}
