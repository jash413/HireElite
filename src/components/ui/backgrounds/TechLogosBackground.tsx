'use client';

import { useRef } from 'react';
import { FloatingElement } from '../animations';
import TechIcon from '../TechIcon';
import { type Technology } from '@/types/tech';
import { getDistributedPosition } from './utils/positioning';

interface TechLogosBackgroundProps {
  technologies: Technology[];
  className?: string;
}

export default function TechLogosBackground({
  technologies,
  className = ''
}: TechLogosBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {technologies.map((tech, index) => {
        const position = getDistributedPosition(index, technologies.length);
        
        // Vary animation parameters subtly
        const duration = 3 + Math.sin(index * 0.5) * 1;
        const height = 15 + Math.cos(index * 0.5) * 5;
        
        return (
          <FloatingElement
            key={tech.name}
            duration={duration}
            height={height}
            delay={index * 0.3}
            className="absolute opacity-20 dark:opacity-30 transition-opacity duration-300 hover:opacity-50"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: `scale(${position.scale})`
            }}
          >
            <TechIcon 
              name={tech.icon} 
              className="w-16 h-16 md:w-20 md:h-20" 
            />
          </FloatingElement>
        );
      })}
    </div>
  );
}