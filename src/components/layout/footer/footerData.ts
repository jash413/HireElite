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
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Success Stories', href: '#' },
      { label: 'Developer Guide', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];