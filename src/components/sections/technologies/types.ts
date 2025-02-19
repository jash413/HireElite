export interface Technology {
    name: string;
    icon: 'vercel'|'react' | 'nodejs' | 'nextjs' | 'vuejs' | 'angular' | 'express' | 'nestjs' | 'graphql' | 'mongodb' | 'postgresql' | 'prisma' | 'netlify' | 'docker' | 'kubernetes' | 'aws';
    displayName: string;
    description: string;
  }