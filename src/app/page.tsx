import Hero from "../components/sections/Hero";
import ExpertiseShowcase from "../components/sections/ExpertiseShowcase";
import HowWeWork from "../components/sections/HowWeWork";
import Technologies from "../components/sections/Technologies";
import HiringModels from "../components/sections/hiring-models/HiringModels";
import WhyUs from "../components/sections/why-us/WhyUs";
import TestimonialsSection from "../components/sections/testimonials/TestimonialsSection";
import { FAQSection } from '../components/sections/faq';
import ContactSection from "../components/sections/contact/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HowWeWork />
      <WhyUs />
      {/* <ExpertiseShowcase /> */}
      <Technologies />
      <TestimonialsSection />
      <HiringModels />
      <FAQSection />
      <ContactSection />
    </div>
  );
}