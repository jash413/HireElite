'use client';

import { ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { ScaleIn } from '@/components/ui/animations';

interface Developer {
  name: string;
  title: string;
  description: string;
  skills: string[];
  experience: string;
  location: string;
  rating: number;
  avatar: string;
  featured?: boolean;
}

interface DeveloperCardProps {
  developer: Developer;
  index: number;
}

export default function DeveloperCard({ developer, index }: DeveloperCardProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScaleIn delay={index * 100}>
      <div className={`group relative h-full ${developer.featured ? 'lg:-mt-4' : ''}`}>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
        
        {/* Card Content */}
        <div className="relative h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          {developer.featured && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium">
                Featured Developer
              </div>
            </div>
          )}

          <div className="flex flex-col h-full">
            {/* Developer Avatar & Info */}
            <div className="flex items-center mb-4">
              <img
                src={developer.avatar}
                alt={developer.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-700 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {developer.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {developer.title}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < developer.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                {developer.rating}.0
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              {developer.description}
            </p>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <Clock className="w-4 h-4 text-blue-500 mr-2" />
                <span>{developer.experience}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                <span>{developer.location}</span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {developer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={scrollToContact}
              className="group/btn w-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Hire {developer.name.split(' ')[0]}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </ScaleIn>
  );
}