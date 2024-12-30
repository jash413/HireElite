import { type Candidate } from '@/types/candidate';

export const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    title: 'Senior Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300',
    location: 'New York, NY',
    yearsOfExperience: '8 Years',
    availability: 'Available in 2 weeks',
    summary: 'Experienced full-stack developer specializing in React and Node.js with a proven track record of delivering scalable applications. Passionate about clean code and performance optimization.',
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis']
      },
      {
        category: 'DevOps',
        items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
      }
    ],
    workExperience: [
      {
        title: 'Senior Full-Stack Developer',
        company: 'TechCorp Inc.',
        period: '2020 - Present',
        achievements: [
          'Led development of microservices architecture serving 1M+ users',
          'Reduced application load time by 60% through optimization',
          'Mentored junior developers and established coding standards'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'AWS']
      },
      {
        title: 'Full-Stack Developer',
        company: 'DataFlow Systems',
        period: '2018 - 2020',
        achievements: [
          'Developed real-time analytics dashboard used by Fortune 500 clients',
          'Implemented automated testing reducing bugs by 40%'
        ],
        technologies: ['React', 'Express', 'MongoDB', 'Redis']
      }
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Built a scalable e-commerce platform handling 100K+ daily transactions',
        period: '2022',
        technologies: ['Next.js', 'NestJS', 'PostgreSQL'],
        github: 'https://github.com/alexthompson/ecommerce',
        live: 'https://demo-ecommerce.com'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Real-time analytics dashboard with complex data visualizations',
        period: '2021',
        technologies: ['React', 'D3.js', 'Node.js'],
        github: 'https://github.com/alexthompson/analytics'
      }
    ],
    education: [
      {
        degree: 'M.S. Computer Science',
        school: 'Stanford University',
        period: '2016 - 2018',
        description: 'Focus on Distributed Systems and Machine Learning'
      },
      {
        degree: 'B.S. Computer Science',
        school: 'MIT',
        period: '2012 - 2016'
      }
    ],
    contact: {
      email: 'alex@example.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      linkedin: 'https://linkedin.com/in/alexthompson',
      github: 'https://github.com/alexthompson'
    }
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Frontend Architecture Expert',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    location: 'San Francisco, CA',
    yearsOfExperience: '6 Years',
    availability: 'Available Immediately',
    summary: 'Frontend specialist with expertise in building performant and accessible web applications. Strong focus on component architecture, design systems, and modern frontend practices.',
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Webpack']
      },
      {
        category: 'Testing & Tools',
        items: ['Jest', 'Cypress', 'Storybook', 'Figma', 'Git']
      },
      {
        category: 'Performance',
        items: ['Web Vitals', 'Lighthouse', 'PWA', 'SEO']
      }
    ],
    workExperience: [
      {
        title: 'Lead Frontend Developer',
        company: 'InnovateTech',
        period: '2021 - Present',
        achievements: [
          'Architected and implemented a component library used by 50+ developers',
          'Improved core web vitals scores by 40% across all products',
          'Led frontend architecture decisions for enterprise applications'
        ],
        technologies: ['React', 'TypeScript', 'Next.js', 'Storybook']
      },
      {
        title: 'Senior Frontend Developer',
        company: 'WebScale Solutions',
        period: '2019 - 2021',
        achievements: [
          'Built responsive web applications serving millions of users',
          'Implemented A/B testing framework increasing conversion by 25%'
        ],
        technologies: ['Vue.js', 'Nuxt.js', 'JavaScript', 'SCSS']
      }
    ],
    projects: [
      {
        title: 'Design System',
        description: 'Enterprise-grade design system and component library',
        period: '2023',
        technologies: ['React', 'TypeScript', 'Storybook'],
        github: 'https://github.com/sarahchen/design-system'
      },
      {
        title: 'Performance Monitoring',
        description: 'Real-time performance monitoring dashboard for web applications',
        period: '2022',
        technologies: ['Next.js', 'Web Vitals', 'D3.js'],
        github: 'https://github.com/sarahchen/perf-monitor',
        live: 'https://perf-monitor-demo.com'
      }
    ],
    education: [
      {
        degree: 'B.S. Computer Science',
        school: 'UC Berkeley',
        period: '2014 - 2018',
        description: 'Focus on Human-Computer Interaction'
      }
    ],
    contact: {
      email: 'sarah@example.com',
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen'
    }
  }
];