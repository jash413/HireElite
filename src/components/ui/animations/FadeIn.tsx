'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { useInView } from '@/lib/hooks/useInView';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function FadeIn({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const directions = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 transform-none' : `opacity-0 ${directions[direction]}`}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}