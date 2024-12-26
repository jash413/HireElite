'use client';

import { motion } from 'framer-motion';
import { type Skill } from './types';
import SkillBadge from './SkillBadge';

const availableSkills: Skill[] = [
  'React', 'Node.js', 'TypeScript', 'Next.js', 
  'GraphQL', 'AWS', 'MongoDB', 'PostgreSQL'
];

interface TechFilterProps {
  selectedSkills: Skill[];
  onSkillsChange: (skills: Skill[]) => void;
}

export default function TechFilter({ selectedSkills, onSkillsChange }: TechFilterProps) {
  const toggleSkill = (skill: Skill) => {
    if (selectedSkills.includes(skill)) {
      onSkillsChange(selectedSkills.filter(s => s !== skill));
    } else {
      onSkillsChange([...selectedSkills, skill]);
    }
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-3 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {availableSkills.map((skill) => (
        <button
          key={skill}
          onClick={() => toggleSkill(skill)}
          className={`transition-transform hover:scale-105 ${
            selectedSkills.includes(skill) ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900' : ''
          }`}
        >
          <SkillBadge skill={skill} />
        </button>
      ))}
    </motion.div>
  );
}