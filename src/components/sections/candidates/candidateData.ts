import { Candidate } from './types';

export const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    title: 'Senior Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300',
    experience: 8,
    availability: 'Immediate',
    timezone: 'UTC-5 (EST)',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    summary: 'Full-stack developer specializing in React and Node.js with extensive experience in building scalable applications.'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Frontend Architecture Expert',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    experience: 6,
    availability: '2 weeks',
    timezone: 'UTC-8 (PST)',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    summary: 'Frontend specialist focused on building performant and accessible web applications using React and Next.js.'
  },
  {
    id: '3',
    name: 'Michael R',
    title: 'Backend Node.js Expert',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300',
    experience: 7,
    availability: 'Immediate',
    timezone: 'UTC+1 (CET)',
    skills: ['Node.js', 'Express', 'MongoDB', 'GraphQL'],
    summary: 'Backend developer specialized in building scalable APIs and microservices using Node.js and GraphQL.'
  }
];