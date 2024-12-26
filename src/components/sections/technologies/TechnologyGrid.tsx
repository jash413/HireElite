'use client';

import React from 'react';
import TechnologyCard from './TechnologyCard';
import { Technology } from './types';

interface TechnologyGridProps {
  title: string;
  technologies: Technology[];
}

const TechnologyGrid: React.FC<TechnologyGridProps> = ({ title, technologies }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {technologies.map((tech) => (
          <TechnologyCard key={tech.name} technology={tech} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;