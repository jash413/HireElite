'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { type Education } from '@/types/candidate';

export default function EducationSection({ education }: { education: Education[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-20" />
            
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {edu.period}
                  </p>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}