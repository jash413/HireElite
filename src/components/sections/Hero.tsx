'use client';

import { ArrowRight, Sparkles, Code2 } from 'lucide-react';
import TechLogosBackground from '@/components/ui/backgrounds/TechLogosBackground';
import GradientText from '@/components/ui/GradientText';
import { backendTechnologies, frontendTechnologies } from './technologies/techData';

export default function Hero() {
  const allTechnologies = [...frontendTechnologies, ...backendTechnologies];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowWeWork = () => {
    const howWeWorkSection = document.getElementById('how-we-work');
    if (howWeWorkSection) {
      howWeWorkSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
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
            {/* Header Offer */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white mb-6 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              <span className="text-lg font-bold">Get 25% OFF on Your First Month - Just Sample</span>
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

            {/* Support Notice */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-700">
              <span className="text-lg font-semibold">For Instant Support - Available 24/7</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={scrollToContact}
              className="group relative overflow-hidden px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                Hire Your Expert Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            
            <button 
              onClick={scrollToHowWeWork}
              className="group px-8 py-4 text-lg font-medium text-gray-900 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-full hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center">
                <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Our Process
              </span>
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