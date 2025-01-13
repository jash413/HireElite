import { notFound } from "next/navigation";
import { getCandidateById } from "@/lib/services/candidateService";
import CandidateHeader from "@/components/cv/CandidateHeader";
import KeyMetrics from "@/components/cv/KeyMetrics";
import ExperienceTimeline from "@/components/cv/ExperienceTimeline";
import SkillsGrid from "@/components/cv/SkillsGrid";
import ProjectsShowcase from "@/components/cv/ProjectsShowcase";
import EducationSection from "@/components/cv/EducationSection";
import QuickActions from "@/components/cv/QuickActions";

export default async function CandidatePage({
  params,
}: {
  params: { id: string };
}) {
  const candidate = await getCandidateById(params.id);

  if (!candidate) {
    notFound();
  }

  // Redact sensitive details for shadow profiles
  const shadowCandidate = {
    ...candidate,
    workExperience: candidate.workExperience.map((exp) => ({
      ...exp,
      company: "Confidential", // Redact company details
    })),
    contactDetails: null, // Remove contact details
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Confidentiality Notice */}
          <div className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 dark:from-yellow-800 dark:via-yellow-700 dark:to-yellow-600 text-yellow-900 dark:text-yellow-100 p-6 rounded-lg shadow-lg border border-yellow-300 dark:border-yellow-600">
            <h2 className="text-2xl font-semibold">Privacy & Trust</h2>
            <p className="mt-4 text-lg leading-relaxed font-light">
              We are fully committed to ensuring the privacy and confidentiality
              of all candidates.
            </p>
            <p className="text-lg leading-relaxed font-light">
              To protect personal details, some of the information provided is
              anonymized throughout the recruitment process.
            </p>
            <p className="mt-4 text-lg leading-relaxed font-light">
              Thank you for your trust and understanding.
            </p>
          </div>

          {/* Header Section */}
          <CandidateHeader candidate={shadowCandidate} />

          {/* Key Metrics */}
          <KeyMetrics candidate={shadowCandidate} />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <ExperienceTimeline experience={shadowCandidate.workExperience} />
              {/* <ProjectsShowcase projects={shadowCandidate.projects} /> */}
              <EducationSection education={shadowCandidate.education} />
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              <SkillsGrid skills={shadowCandidate.skills} />
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
