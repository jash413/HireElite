import { NavItem } from '@/types/nav';

export const navItems: NavItem[] = [
  { name: 'Home', href: '#' },
  { name: 'How We Work', href: '#how-we-work' },
  { name: 'Hiring Models', href: '#hiring-models' },
  { name: 'What Sets Us Apart', href: '#why-us' },
  { name: 'Testimonials', href: '#testimonials' }
];

export default function NavItems() {
  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {item.name}
        </a>
      ))}
    </>
  );
}