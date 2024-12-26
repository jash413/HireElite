'use client';

import { Shield, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/animations';

export default function GuaranteeShowcase() {
  return (
    <FadeIn>
      <div className="relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
        
        {/* Content */}
        <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-8">
                <Shield className="w-10 h-10" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Risk-Free Guarantee
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We're so confident in our developers that we offer a risk-free trial period.
                If you're not completely satisfied, we'll replace the developer or provide
                a full refund.
              </p>
              
              <button className="group inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="space-y-6">
              {[
                'Free 1-week trial period',
                'No questions asked refund',
                'Instant developer replacement',
                '24/7 support included',
                'Money-back guarantee'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="ml-4 text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}