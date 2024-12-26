import { Shield, Clock, Zap, Users, CheckCircle, Workflow } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Shield,
    title: 'Risk-Free Trial Period',
    description: 'Test our developers for a full week with zero risk. Not satisfied? Full refund guaranteed.'
  },
  {
    icon: Clock,
    title: 'Quick Integration',
    description: 'Our developers can start within 48 hours and adapt quickly to your workflows.'
  },
  {
    icon: Zap,
    title: 'Proven Excellence',
    description: 'Every developer is thoroughly vetted through a rigorous technical assessment process.'
  },
  {
    icon: Users,
    title: 'Seamless Scaling',
    description: 'Easily scale your team up or down based on project needs with flexible hiring models.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Guaranteed',
    description: 'We stand behind our developers with a 100% satisfaction guarantee on all projects.'
  },
  {
    icon: Workflow,
    title: 'Dedicated Support',
    description: '24/7 access to our support team and dedicated account management for your success.'
  }
];