'use client';

import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      href={href}
      className="relative group py-2 px-4"
    >
      <span className="relative z-10 text-gray-600 dark:text-gray-300 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {children}
      </span>
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
    </Link>
  );
}