'use client';

import { type LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { ScaleIn } from '@/components/ui/animations';

interface ModelCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
  popular?: boolean;
}

export default function ModelCard({
  Icon,
  title,
  description,
  features,
  index,
  popular = false
}: ModelCardProps) {
  return (
    <ScaleIn delay={index * 100}>
      <div className={`group relative h-full ${popular ? 'lg:-mt-4' : ''}`}>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
        
        {/* Card Content */}
        <div className="relative h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          {popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium">
                Most Popular
              </div>
            </div>
          )}

          <div className="flex flex-col h-full">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform">
              <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>

            <div className="space-y-4 mb-8 flex-grow">
              {features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="group/btn w-full px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
              <a href='#contact' className="flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </ScaleIn>
  );
}