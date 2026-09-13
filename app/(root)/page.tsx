import Service from "@/components/shared/Services";
import { AccordionFaqs } from "@/components/shared/Faqs";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Testimonials from "@/components/shared/Testimonials";
import About from "@/components/shared/about";
import HeroSection from "@/components/shared/Herosection";
export default function Home() {
  return (
    <main className="bg-[#131412]">
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