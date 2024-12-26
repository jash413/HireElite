'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="#contact"
        className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="relative">
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-20" />
          <Phone className="w-5 h-5 animate-bounce" />
        </div>
        <span className="font-medium">Book a Call</span>
      </a>
    </motion.div>
  );
}