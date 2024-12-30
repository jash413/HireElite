'use client';

import { Award, Code2, Users, Zap } from 'lucide-react';
import { type Candidate } from '@/types/candidate';

const getMetrics = (experience: Candidate['workExperience']) => {
  const totalYears = parseInt(experience[0].period.split(' - ')[1] === 'Present' 
    ? new Date().getFullYear().toString() 
    : experience[0].period.split(' - ')[1]
  ) - parseInt(experience[experience.length - 1].period.split(' - ')[0]);

  const allTechnologies = experience.flatMap(job => job.technologies);
  const uniqueTechnologies = new Set(allTechnologies).size;

  const totalAchievements = experience.reduce((acc, job) => acc + job.achievements.length, 0);

  return [
    { icon: Award, label: 'Years Experience', value: `${totalYears}+` },
    { icon: Code2, label: 'Technologies', value: uniqueTechnologies },
    { icon: Users, label: 'Projects Completed', value: totalAchievements },
    { icon: Zap, label: 'Success Rate', value: '100%' }
  ];
};

export default function KeyMetrics({ experience }: { experience: Candidate['workExperience'] }) {
  const metrics = getMetrics(experience);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}