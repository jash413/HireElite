'use client';

import { ClipboardList, Users } from 'lucide-react';
import ProcessStep from './ProcessStep';

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: 'Tell Us Your Requirements',
    description: 'Share your tech stack, team size, and project scope. We will match you with the perfect developers in under 10 minutes.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Start Working Immediately',
    description: 'Your new team members can start within 48 hours, fully equipped with the tools you use. All our developers are in the top 1%.'
  }
];

export default function ProcessSteps() {
  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-16">
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