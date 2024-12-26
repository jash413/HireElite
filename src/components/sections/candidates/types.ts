export type Skill = 
  | 'React'
  | 'Node.js'
  | 'TypeScript'
  | 'Next.js'
  | 'GraphQL'
  | 'AWS'
  | 'MongoDB'
  | 'PostgreSQL';

export interface Candidate {
  id: string;
  name: string;
  title: string;
  avatar: string;
  experience: number;
  availability: string;
  timezone: string;
  skills: Skill[];
  summary: string;
}