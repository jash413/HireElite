import { notFound } from 'next/navigation';
import { getCandidateById } from '@/lib/services/candidateService';
import CandidateHeader from '@/components/cv/CandidateHeader';
import KeyMetrics from '@/components/cv/KeyMetrics';
import ExperienceTimeline from '@/components/cv/ExperienceTimeline';
import SkillsGrid from '@/components/cv/SkillsGrid';
import ProjectsShowcase from '@/components/cv/ProjectsShowcase';
import EducationSection from '@/components/cv/EducationSection';
import ContactSection from '@/components/cv/ContactSection';
import QuickActions from '@/components/cv/QuickActions';

export default async function CandidatePage({ params }: { params: { id: string } }) {
  const candidate = await getCandidateById(params.id);
  
  if (!candidate) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <CandidateHeader candidate={candidate} />
          
          {/* Key Metrics */}
          <KeyMetrics experience={candidate.workExperience} />
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <ExperienceTimeline experience={candidate.workExperience} />
              <ProjectsShowcase projects={candidate.projects} />
              <EducationSection education={candidate.education} />
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              <SkillsGrid skills={candidate.skills} />
              <ContactSection />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Fixed at bottom */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
        <QuickActions />
      </div>
    </main>
  );
}