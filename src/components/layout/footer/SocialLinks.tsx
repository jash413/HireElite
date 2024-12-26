'use client';

import { motion } from 'framer-motion';
import { socialLinks } from './footerData';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            className="text-gray-400 hover:text-white transition-colors"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            aria-label={social.label}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        );
      })}
    </div>
  );
}