import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import TreatmentsPreview from "@/components/sections/treatments-preview";
import TeamSection from "@/components/sections/team-section";
import InsurancesSection from "@/components/sections/insurances-section";
import FaqSection from "@/components/sections/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TreatmentsPreview />
      <TeamSection />
      <InsurancesSection />
      <FaqSection />
    </>
  );
}
