'use client';

import { type LucideIcon } from 'lucide-react';
import { ScaleIn } from '@/components/ui/animations';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export default function ProcessStep({
  icon,
  title,
  description,
  index,
  isLast = false
}: ProcessStepProps) {
  return (
    <div className="relative">
      <ScaleIn delay={index * 100}>
        <div className="flex flex-col items-center text-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform">
              {icon}
            </div>
          </div>
          
          <div className="relative">
            <span className="absolute -left-4 -top-4 text-5xl font-bold text-gray-900/5 dark:text-white/5">
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {title}
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-sm">
            {description}
          </p>
        </div>
      </ScaleIn>

      {!isLast && (
        <div className="hidden md:block absolute top-20 left-[calc(50%+4rem)] right-0 h-0.5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
          <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-purple-500" />
        </div>
      )}
    </div>
  );
}