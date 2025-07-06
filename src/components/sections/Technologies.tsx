'use client';

import React from 'react';
import { Code2 } from 'lucide-react';
import GradientText from '../ui/GradientText';
import TechnologyGrid from './technologies/TechnologyGrid';
import { frontendTechnologies, backendTechnologies, deploymentTechnologies } from './technologies/techData';

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
            <Code2 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Tech Stack</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            When You Hire Software Developer <GradientText>Expertise in Modern Technologies</GradientText>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            When you hire software engineers through HireElite, you get experts in frontend, backend, and deployment technologies,
            ensuring full-stack excellence for your projects. Our New York developers master these cutting-edge tools.
          </p>
        </div>

        <div className="space-y-16">
          <TechnologyGrid 
            title="Frontend Development - Hire Software Developer Frontend Experts" 
            technologies={frontendTechnologies} 
          />
          
          <TechnologyGrid 
            title="Backend Development - Hire Software Engineers Backend Specialists" 
            technologies={backendTechnologies} 
          />

          <TechnologyGrid 
            title="Deployment & DevOps - Hire a Software Programmer DevOps Expert" 
            technologies={deploymentTechnologies} 
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;