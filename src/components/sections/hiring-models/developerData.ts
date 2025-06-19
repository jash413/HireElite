interface Developer {
  name: string;
  title: string;
  description: string;
  skills: string[];
  experience: string;
  location: string;
  rating: number;
  avatar: string;
  featured?: boolean;
}

export const developers: Developer[] = [
  {
    name: 'Alex Thompson',
    title: 'Senior Full-Stack Developer',
    description: 'Specialized in React, Node.js, and cloud architecture. Built scalable applications for Fortune 500 companies with expertise in microservices and DevOps.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    experience: '8+ Years Experience',
    location: 'New York, NY',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300',
    featured: true
  },
  {
    name: 'Sarah Chen',
    title: 'Frontend Architecture Expert',
    description: 'Expert in modern frontend frameworks and performance optimization. Led teams in building responsive, accessible web applications with cutting-edge UI/UX.',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL'],
    experience: '6+ Years Experience',
    location: 'Brooklyn, NY',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300'
  },
  {
    name: 'Michael Rodriguez',
    title: 'Backend Node.js Expert',
    description: 'Specialized in building robust APIs and microservices. Expert in database design, system architecture, and performance optimization for high-traffic applications.',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis'],
    experience: '7+ Years Experience',
    location: 'Manhattan, NY',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300'
  },
  {
    name: 'Emily Johnson',
    title: 'DevOps & Cloud Specialist',
    description: 'Expert in cloud infrastructure and CI/CD pipelines. Specialized in AWS, Docker, and Kubernetes with a focus on scalable, secure deployments.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    experience: '5+ Years Experience',
    location: 'Queens, NY',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300'
  },
  {
    name: 'David Kim',
    title: 'Mobile App Developer',
    description: 'Cross-platform mobile development expert with React Native and Flutter. Built apps with millions of downloads, focusing on performance and user experience.',
    skills: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Redux'],
    experience: '6+ Years Experience',
    location: 'Bronx, NY',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300'
  },
  {
    name: 'Lisa Wang',
    title: 'Data Engineer',
    description: 'Specialized in big data processing and analytics. Expert in building data pipelines, ETL processes, and real-time analytics systems for enterprise clients.',
    skills: ['Python', 'Apache Spark', 'Kafka', 'Elasticsearch', 'SQL'],
    experience: '7+ Years Experience',
    location: 'Staten Island, NY',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300'
  }
];