'use client';

import { MapPin, Calendar, Clock } from 'lucide-react';
import { type Candidate } from '@/types/candidate';

export default function CandidateHeader({ candidate }: { candidate: Candidate }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
      
      <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur opacity-20" />
            <img
              src={candidate.avatar}
              alt={candidate.name}
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {candidate.name}
            </h1>
            
            <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
              {candidate.title}
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{candidate.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>{candidate.yearsOfExperience}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>{candidate.availability}</span>
              </div>
            </div>
          </div>

          <div>
            <button 
              onClick={() => {
                // @ts-ignore - Calendly is loaded from external script
                window.Calendly?.initPopupWidget({
                  url: 'https://calendly.com/hireelite-info/30min'
                });
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow"
            >
              Schedule Interview
            </button>
          </div>
        </div>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl">
          {candidate.summary}
        </p>
      </div>
    </div>
  );
}