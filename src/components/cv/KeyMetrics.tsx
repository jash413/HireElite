"use client";

import { Award, Code2, Users, Zap } from "lucide-react";
import { type Candidate } from "@/types/candidate";

const getMetrics = (candidate: Candidate) => {
  const experience = candidate.workExperience; // Access the workExperience from the candidate object

  // Total years of experience can be summed up from each job's `yearsOfExperience`
  const totalYears = candidate.yearsOfExperience;

  // Flatten the technologies from all jobs and get unique ones
  const allTechnologies = experience.flatMap((job) => job.technologies);
  const uniqueTechnologies = new Set(allTechnologies).size;

  // Count total achievements across all work experiences
  const totalAchievements = experience.reduce(
    (acc, job) => acc + job.achievements.length,
    0
  );

  // Assuming the success rate is static for now (this can be adjusted later if needed)
  const successRate = "100%";

  return [
    { icon: Award, label: "Years Experience", value: `${totalYears}` },
    { icon: Code2, label: "Technologies", value: uniqueTechnologies },
    { icon: Users, label: "Projects Completed", value: totalAchievements },
    { icon: Zap, label: "Success Rate", value: successRate },
  ];
};

export default function KeyMetrics({ candidate }: { candidate: Candidate }) {
  const metrics = getMetrics(candidate); // Pass the candidate object to the getMetrics function

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.label} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />

            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
