export type TechIcon = 
  | 'react' 
  | 'nodejs' 
  | 'nextjs' 
  | 'vuejs' 
  | 'typescript' 
  | 'angular' 
  | 'express' 
  | 'nestjs' 
  | 'graphql' 
  | 'mongodb' 
  | 'postgresql' 
  | 'prisma' 
  | 'netlify' 
  | 'docker' 
  | 'kubernetes' 
  | 'aws';

export interface Technology {
  name: string;
  icon: TechIcon;
  displayName: string;
  description: string;
}