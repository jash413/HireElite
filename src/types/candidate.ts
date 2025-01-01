export interface Experience {
    title: string;
    company: string;
    period: string;
    achievements: string[];
    technologies: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    period: string;
    technologies: string[];
    github?: string;
    live?: string;
  }
  
  export interface Education {
    degree: string;
    school: string;
    period: string;
    description?: string;
  }
  
  export interface Contact {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  }
  
  export interface Candidate {
    id: string;
    name: string;
    title: string;
    avatar: string;
    location: string;
    yearsOfExperience: string;
    availability: string;
    summary: string;
    skills: {
      category: string;
      items: string[];
    }[];
    workExperience: Experience[];
    projects: Project[];
    education: Education[];
    contact: Contact;
  }