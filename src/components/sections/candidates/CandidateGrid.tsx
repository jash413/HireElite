'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { candidates } from './candidateData';
import CandidateCard from './CandidateCard';
import { type Skill } from './types';

interface CandidateGridProps {
  selectedSkills: Skill[];
}

export default function CandidateGrid({ selectedSkills }: CandidateGridProps) {
  const filteredCandidates = candidates.filter(candidate => 
    selectedSkills.length === 0 || 
    selectedSkills.every(skill => candidate.skills.includes(skill))
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {filteredCandidates.map((candidate) => (
          <motion.div
            key={candidate.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <CandidateCard candidate={candidate} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}