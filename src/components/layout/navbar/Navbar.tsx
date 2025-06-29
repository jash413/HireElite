'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { navItems } from './navItems';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <header
      className={`fixed top-16 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a 
            href="https://hireelite.dev/#"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            HireElite
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
            <button className="ml-4 px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              <a href='#contact'>Hire Now</a>
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}