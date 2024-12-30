'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded from external script
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/webwisesolution/30min'
    });
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-20" />
        
        <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Schedule an Interview
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in working with this developer? Schedule a call to discuss your project needs.
          </p>

          <button
            onClick={openCalendly}
            className="group w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <span className="flex items-center justify-center">
              Book a Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}