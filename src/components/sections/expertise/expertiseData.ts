import { Code2, Zap, Users } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface ExpertiseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
}

export const expertiseData: ExpertiseItem[] = [
  {
    icon: Code2,
    title: 'Full-Stack Excellence',
    description: 'Our developers excel in both frontend and backend development, delivering solutions with modern tech stacks.',
    stats: [
      { value: '8+', label: 'Years Avg. Experience' },
      { value: '50+', label: 'Technologies' }
    ]
  },
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Get your projects delivered faster with our agile development practices and efficient coding methodologies.',
    stats: [
      { value: '2x', label: 'Faster Delivery' },
      { value: '99%', label: 'On-time Completion' }
    ]
  },
  {
    icon: Users,
    title: 'Seamless Integration',
    description: 'Our developers integrate smoothly with your existing team, adapting to your workflows and coding standards.',
    stats: [
      { value: '48h', label: 'Integration Time' },
      { value: '97%', label: 'Client Satisfaction' }
    ]
  }
];