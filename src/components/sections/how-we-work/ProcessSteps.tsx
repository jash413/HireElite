'use client';

import { ClipboardList, Users, Rocket, Headphones } from 'lucide-react';
import ProcessStep from './ProcessStep';

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: 'Define Requirements',
    description: 'Tell us your tech stack, team size, and project scope. We will match you with the perfect developers.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Meet Your Developers',
    description: 'Review pre-vetted candidates and interview your top picks. All our developers are in the top 1%.'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Quick Integration',
    description: 'Your new team members can start within 48 hours, fully equipped with the tools you use.'
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Get dedicated account management and technical support throughout your journey.'
  }
];

export default function ProcessSteps() {
  return (
    <div className="grid md:grid-cols-4 gap-12 md:gap-8">
      {steps.map((step, index) => (
        <ProcessStep
          key={step.title}
          {...step}
          index={index}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}