import { Clock, UserCheck, UserMinus, Users, Calendar } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface HiringModel {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const hiringModels: HiringModel[] = [
  {
    icon: Clock,
    title: 'Hourly Contract',
    description: 'Perfect for small tasks or specific features that need expert attention.',
    price: 'From $35/hour',
    features: [
      'No minimum commitment',
      'Weekly billing',
      'Scale up or down anytime',
      'Direct communication',
      'Same-day start available'
    ]
  },
  {
    icon: UserCheck,
    title: 'Full-Time Developer',
    description: 'Dedicated developer working exclusively on your project.',
    price: 'From $4,000/month',
    features: [
      '160 hours per month',
      'Priority support',
      'Dedicated account manager',
      'Weekly progress reports',
      'Direct team integration'
    ],
    popular: true
  },
  {
    icon: UserMinus,
    title: 'Part-Time Resource',
    description: 'Flexible part-time development support for your projects.',
    price: 'From $2,000/month',
    features: [
      '80 hours per month',
      'Flexible scheduling',
      'Weekly sync meetings',
      'Progress tracking',
      'Easy hour tracking'
    ]
  },
  {
    icon: Calendar,
    title: 'Monthly Retainer',
    description: 'Reserved development capacity with priority access.',
    price: 'From $3,000/month',
    features: [
      'Guaranteed availability',
      'Rollover unused hours',
      'Priority queue',
      'Monthly planning',
      'Flexible allocation'
    ]
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Scale your team with multiple skilled developers.',
    price: 'Custom pricing',
    features: [
      'Multiple developers',
      'Team lead included',
      'Custom team structure',
      'Seamless integration',
      'Enterprise support'
    ]
  }
];