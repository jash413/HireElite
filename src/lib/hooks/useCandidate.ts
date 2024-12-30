'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { type Candidate } from '@/types/candidate';
import { getCandidateById } from '@/lib/services/candidateService';

export function useCandidate() {
  const params = useParams();
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    if (params?.id) {
      getCandidateById(params.id as string).then(setCandidate);
    }
  }, [params?.id]);

  return candidate;
}