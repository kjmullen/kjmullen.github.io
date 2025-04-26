export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'devops' | 'cloud' | 'infrastructure' | 'tools' | 'languages';
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Contact {
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  contacts: Contact[];
}