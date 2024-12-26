'use client';

import { useRef, type ReactNode } from 'react';
import { useInView } from '@/lib/hooks/useInView';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScaleIn({ 
  children, 
  delay = 0,
  className = '' 
}: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}