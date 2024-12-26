'use client';

import { type ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function FloatingElement({ 
  children, 
  duration = 3,
  height = 20,
  className = '',
  style = {},
  delay = 0
}: FloatingElementProps) {
  const animationStyle = {
    '--float-height': `${height}px`,
    '--float-duration': `${duration}s`,
    animationDelay: `${delay}s`
  } as React.CSSProperties;

  return (
    <div
      className={`animate-float ${className}`}
      style={{
        ...style,
        ...animationStyle
      }}
    >
      {children}
    </div>
  );
}