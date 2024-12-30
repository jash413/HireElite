'use client';

import { Briefcase } from 'lucide-react';
import { type Experience } from '@/types/candidate';

export default function ExperienceTimeline({ experience }: { experience: Experience[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
      
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div
            key={index}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-500 before:to-purple-500"
          >
            <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {job.period}
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}