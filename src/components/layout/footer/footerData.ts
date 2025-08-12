import { Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import type { FooterSection, SocialLink } from './types';

export const footerSections: FooterSection[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'Hire Developers', href: '#' },
      { label: 'Team Augmentation', href: '#' },
      { label: 'Dedicated Teams', href: '#' },
      { label: 'Staff Augmentation', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press Kit', href: '#' }
    ]
  },
  // {
  //   title: 'Resources',
  //   links: [
  //     { label: 'Documentation', href: '#' },
  //     { label: 'Case Studies', href: '#' },
  //     { label: 'Success Stories', href: '#' },
  //     { label: 'Developer Guide', href: '#' }
  //   ]
  // },
  // {
  //   title: 'Legal',
  //   links: [
  //     { label: 'Privacy Policy', href: '#' },
  //     { label: 'Terms of Service', href: '#' },
  //     { label: 'Cookie Policy', href: '#' },
  //     { label: 'Security', href: '#' }
  //   ]
  // }
];

export const socialLinks: SocialLink[] = [
  { icon: Instagram, href: 'https://www.instagram.com/hireelite/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/hireelite', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@Hire-Elite', label: 'YouTube' },
  { icon: Twitter, href: 'https://x.com/Hire_Elite', label: 'X' },
  { icon: Github, href: 'https://www.facebook.com/hireelite', label: 'Facebook' }
];