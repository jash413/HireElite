import { type Candidate } from '@/types/candidate';
import { candidates } from './candidateData';

export async function getCandidateById(id: string): Promise<Candidate | null> {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    const candidate = candidates.find(c => c.id === id);
    return candidate || null;
  } catch (error) {
    console.error('Error fetching candidate:', error);
    return null;
  }
}

export async function getAllCandidates(): Promise<Candidate[]> {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return candidates;
  } catch (error) {
    console.error('Error fetching candidates:', error);
    return [];
  }
}