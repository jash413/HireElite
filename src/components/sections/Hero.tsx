'use client';

import { ArrowRight, Sparkles, Code2, Phone } from 'lucide-react';
import TechLogosBackground from '@/components/ui/backgrounds/TechLogosBackground';
import GradientText from '@/components/ui/GradientText';
import { backendTechnologies, frontendTechnologies } from './technologies/techData';

export default function Hero() {
  const allTechnologies = [...frontendTechnologies, ...backendTechnologies];

  return (
    <section className="relative min-h-screen pt-48 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-pink-50/20 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMSwgMTAwLCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 dark:opacity-20" />
      
      <TechLogosBackground 
        technologies={allTechnologies}
        className="opacity-30"
      />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Top 1% Talent</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              In 10 Minutes - Hire{' '}
              <GradientText className="inline-block">
                Elite Software Developers
              </GradientText>
              {' '}in New York
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Quickly augment your team with pre-vetted senior developers.
              Start risk-free with our 1-week trial period.
            </p>

            {/* Instant Support Line */}
            <div className="flex items-center justify-center gap-2 mb-12 text-lg text-gray-700 dark:text-gray-300">
              <Phone className="w-5 h-5 text-green-500" />
              <span className="font-medium">Instant Support:</span>
              <a href="tel:+918320052869" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                (+91) 832-005-2869
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group relative overflow-hidden px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <a href='#contact' className="relative z-10 flex items-center justify-center">
                Hire Your Expert Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            
            <button className="group px-8 py-4 text-lg font-medium text-gray-900 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-full hover:shadow-xl transition-all duration-300">
              <a href='#how-we-work' className="flex items-center">
                <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Our Process
              </a>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            {['Risk-Free Trial', 'Top 1% Developers', '24/7 Support', '100% Success Rate'].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}