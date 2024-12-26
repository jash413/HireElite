// SEO configuration
export const siteConfig = {
  title: 'DevHire - Top JavaScript & TypeScript Developers',
  description: 'Hire top JavaScript and TypeScript developers for your projects. Expert React, Node.js, and full-stack developers with risk-free trial period.',
  url: 'https://devhire.com',
  ogImage: 'https://devhire.com/og-image.png',
  links: {
    twitter: 'https://twitter.com/devhire',
    github: 'https://github.com/devhire',
    linkedin: 'https://linkedin.com/company/devhire'
  }
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DevHire',
  url: 'https://devhire.com',
  logo: 'https://devhire.com/logo.png',
  description: 'Hire top JavaScript and TypeScript developers for your projects.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'contact@devhire.com',
    areaServed: 'Worldwide',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://twitter.com/devhire',
    'https://linkedin.com/company/devhire',
    'https://github.com/devhire',
  ],
};