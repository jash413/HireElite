import { FadeIn } from '@/components/ui/animations';
import TechLogosBackground from '@/components/ui/backgrounds/TechLogosBackground';
import { frontendTechnologies, backendTechnologies } from './techData';

export default function TechnologySection() {
  const allTechnologies = [...frontendTechnologies, ...backendTechnologies];

  return (
    <section id="technologies" className="relative py-20 overflow-hidden">
      <TechLogosBackground 
        technologies={allTechnologies}
        className="opacity-50"
      />
      
      <div className="container relative mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Technology Stack
          </h2>
          
          {/* Rest of your existing technology section content */}
        </FadeIn>
      </div>
    </section>
  );
}