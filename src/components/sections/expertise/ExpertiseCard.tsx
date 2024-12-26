'use client';

import { FadeIn } from '@/components/ui/animations';
import { type LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  Icon: LucideIcon; // Changed from icon prop to Icon component
  title: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  index: number;
}

export default function ExpertiseCard({
  Icon, // Changed from icon prop
  title,
  description,
  stats,
  index
}: ExpertiseCardProps) {
  return (
    <FadeIn 
      direction="up" 
      delay={index * 100}
      className="relative group"
    >
      <div className="relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
        
        <div className="relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8" /> {/* Use Icon component directly */}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}