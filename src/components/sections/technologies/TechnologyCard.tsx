'use client';

import React from 'react';
import TechIcon from '../../ui/TechIcon';
import { Technology } from './types';

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  return (
    <div className="group relative p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <TechIcon
          name={technology.icon}
          className="text-blue-600 dark:text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {technology.displayName}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {technology.description}
        </p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/20 transition-colors duration-300" />
    </div>
  );
};

export default TechnologyCard;