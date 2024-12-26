'use client';

import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import ThemeToggle from '@/components/ThemeToggle';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

export default function Header() {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            DevHire
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <NavItems />
            <ThemeToggle />
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              <a href='#contact'>Hire Now</a>
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}