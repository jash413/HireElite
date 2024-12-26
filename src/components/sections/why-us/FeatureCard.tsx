'use client';

import { type LucideIcon } from 'lucide-react';
import { ScaleIn } from '@/components/ui/animations';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  Icon,
  title,
  description,
  index
}: FeatureCardProps) {
  return (
    <ScaleIn delay={index * 100}>
      <div className="group relative h-full">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
        
        {/* Card Content */}
        <div className="relative h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </ScaleIn>
  );
}