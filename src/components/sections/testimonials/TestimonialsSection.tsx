'use client';

import { MessageSquare } from 'lucide-react';
import { FadeIn } from '@/components/ui/animations';
import GradientText from '@/components/ui/GradientText';
import TestimonialGrid from './TestimonialGrid';
import TestimonialStats from './TestimonialStats';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMSwgMTAwLCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 dark:opacity-20" />

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Client Success Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by <GradientText>Industry Leaders</GradientText>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what our clients say about working with HireElite developers.
              Real stories from real companies.
            </p>
          </FadeIn>
        </div>

        <TestimonialStats />
        <TestimonialGrid />
      </div>
    </section>
  );
}