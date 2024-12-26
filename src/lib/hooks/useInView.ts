'use client';

import { useEffect, useState, RefObject } from 'react';

export function useInView(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}