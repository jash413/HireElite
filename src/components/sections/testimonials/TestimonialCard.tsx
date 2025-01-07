'use client';

import { Star } from 'lucide-react';
import { type Testimonial } from './types';
import { FloatingElement } from '@/components/ui/animations';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div className="group relative h-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />

      {/* Card Content */}
      <div className="relative h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        {/* Stars */}
        <div className="flex text-yellow-400 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-gray-600 dark:text-gray-300 mb-8">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center">
          {/* <FloatingElement 
            height={8}
            duration={3}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur opacity-20" />
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="relative w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700"
              />
            </div>
          </FloatingElement> */}

          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {testimonial.author}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}