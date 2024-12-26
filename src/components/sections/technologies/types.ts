export interface Technology {
  name: string;
  icon: 'react' | 'nodejs' | 'nextjs' | 'vuejs' | 'typescript' | 'angular' | 'express' | 'nestjs' | 'graphql' | 'mongodb' | 'postgresql' | 'prisma' | 'netlify' | 'docker' | 'kubernetes' | 'aws';
  displayName: string;
  description: string;
}