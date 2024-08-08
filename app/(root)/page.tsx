import HeroSection from "@/components/shared/Herosection";
import Services from "@/components/shared/Services";
import Features from "@/components/shared/Features";
import { AccordionFaqs } from "@/components/shared/Faqs";
import Footer from "@/components/shared/Footer";
import InteractionFeature from "@/components/shared/InteractionFeature";
import Uptodate from "@/components/shared/upToDateSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Features />
      <Uptodate />
      <InteractionFeature />
      <AccordionFaqs />
      <Footer />
    </main>
  );
}
