import Service from "@/components/shared/Services";
import { AccordionFaqs } from "@/components/shared/Faqs";
import Footer from "@/components/shared/Footer";
import Uptodate from "@/components/shared/upToDateSection";
import Navbar from "@/components/shared/Navbar";
import Testimonials from "@/components/shared/Testimonials";
import About from "@/components/shared/about";
import HeroSection from "@/components/shared/Herosection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Service />
      <About />
      <Uptodate />
      <Testimonials />
      <AccordionFaqs />
      <Footer />
    </main>
  );
}