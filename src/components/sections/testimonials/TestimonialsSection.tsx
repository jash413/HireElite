'use client';

import { useState } from 'react';
import { MessageSquare, TrendingUp, Users, Award, Clock } from 'lucide-react';
import { FadeIn } from '@/components/ui/animations';
import GradientText from '@/components/ui/GradientText';
import TestimonialGrid from './TestimonialGrid';
import TestimonialStats from './TestimonialStats';

const results = [
  {
    icon: TrendingUp,
    title: '300% Faster Development',
    description: 'Our clients ship features 3x faster with our elite developers',
    metric: '300%',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Users,
    title: '500+ Projects Delivered',
    description: 'Successfully completed projects across various industries',
    metric: '500+',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Award,
    title: '98% Client Satisfaction',
    description: 'Consistently high ratings from our satisfied clients',
    metric: '98%',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Clock,
    title: '48h Average Start Time',
    description: 'Get your developers onboarded and productive in 2 days',
    metric: '48h',
    color: 'from-orange-500 to-red-600'
  }
];

export default function TestimonialsSection() {
  const [showResults, setShowResults] = useState(false);

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
              <span className="text-sm font-medium">Results & Success Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Proven <GradientText>Results</GradientText> & Client Success
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              See the measurable impact our developers have on businesses and what our clients say about working with HireElite.
            </p>

            {/* Show Results Button */}
            <button
              onClick={() => setShowResults(!showResults)}
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              {showResults ? 'Hide Results' : 'Show Results'}
            </button>
          </FadeIn>
        </div>

        {/* Dynamic Results Display */}
        {showResults && (
          <FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <div
                    key={result.title}
                    className="group relative"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${result.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
                    
                    {/* Card Content */}
                    <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${result.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      
                      <div className={`text-3xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-2`}>
                        {result.metric}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {result.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {result.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        )}

        <TestimonialStats />
        <TestimonialGrid />
      </div>
    </section>
  );
}