'use client';

import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { type Candidate } from './types';
import { FloatingElement } from '@/components/ui/animations';
import SkillBadge from './SkillBadge';

interface CandidateCardProps {
  candidate: Candidate;
}

export default function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <div className="group relative">
      {/* Card Background with Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
      
      <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Profile Section */}
        <div className="flex items-start gap-4 mb-6">
          <FloatingElement 
            height={10} 
            duration={4}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur opacity-20" />
              <img
                src={candidate.avatar}
                alt={candidate.name}
                className="relative w-20 h-20 rounded-full object-cover border-2 border-white dark:border-gray-700"
              />
            </div>
          </FloatingElement>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {candidate.name}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {candidate.title}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>{candidate.experience} Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>Available {candidate.availability}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 col-span-2">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>{candidate.timezone}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
          {candidate.summary}
        </p>

        {/* View Profile Button */}
        <button className="group/btn w-full px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
          <span className="flex items-center justify-center">
            View Full Profile
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
}