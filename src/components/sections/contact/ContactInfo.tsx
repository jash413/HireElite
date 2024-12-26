'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { contactInfo } from './formData';

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Cards */}
      <div className="grid gap-6">
        {contactInfo.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="group relative"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              
              {/* Card Content */}
              <div className="relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Office Hours */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-20" />
        <div className="relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
              Office Hours
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM EST</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM EST</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}