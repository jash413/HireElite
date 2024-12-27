// SEO configuration
export const siteConfig = {
  title: 'HireElite - Top JavaScript & TypeScript Developers',
  description: 'Hire top JavaScript and TypeScript developers for your projects. Expert React, Node.js, and full-stack developers with risk-free trial period.',
  url: 'https://hireelite.dev',
  ogImage: 'https://hireelite.dev/og-image.png',
  links: {
    twitter: 'https://twitter.com/HireElite',
    github: 'https://github.com/HireElite',
    linkedin: 'https://linkedin.com/company/HireElite'
  }
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HireElite',
  url: 'https://hireelite.dev',
  logo: 'https://hireelite.dev/logo.png',
  description: 'Hire top JavaScript and TypeScript developers for your projects.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-832-005-2869',
    contactType: 'customer service',
    email: 'info@hireelite.dev',
    areaServed: 'Worldwide',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://twitter.com/HireElite',
    'https://linkedin.com/company/HireElite',
    'https://github.com/HireElite',
  ],
};