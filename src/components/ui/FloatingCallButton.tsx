'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function FloatingCallButton() {
  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded from external script
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/hireelite-info/30min'
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={openCalendly}
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-20" />
            <Calendar className="w-5 h-5 animate-bounce" />
          </div>
          <span className="font-medium">Schedule a Call</span>
        </button>
      </motion.div>
    </>
  );
}