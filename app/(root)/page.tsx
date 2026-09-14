import Service from "@/components/shared/Services";
import { AccordionFaqs } from "@/components/shared/Faqs";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Testimonials from "@/components/shared/Testimonials";
import About from "@/components/shared/about";
import HeroSection from "@/components/shared/Herosection";
export default function Home() {
  return (
    <main className="bg-[#f8f7f4]">
      <Navbar />
      <HeroSection />
      <Service />
      <About />
      <Testimonials />
      <AccordionFaqs />
      <Footer />
    </main>
  );
}