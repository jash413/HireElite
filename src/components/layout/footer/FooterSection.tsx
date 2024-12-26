'use client';

import { motion } from 'framer-motion';
import type { FooterSection as FooterSectionType } from './types';

interface FooterSectionProps {
  section: FooterSectionType;
  index: number;
}

export default function FooterSection({ section, index }: FooterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold text-gray-100 mb-4">
        {section.title}
      </h3>
      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}