import Service from "@/components/shared/Services";
import Services from "@/components/shared/Services2";
import Features from "@/components/shared/Features";
import { AccordionFaqs } from "@/components/shared/Faqs";
import Footer from "@/components/shared/Footer";
import Uptodate from "@/components/shared/upToDateSection";
import Navbar from "@/components/shared/Navbar";
import Testimonials from "@/components/shared/Testimonials";
import About from "@/components/shared/about";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Services />
      <Service />
      <About />
      <Features />
      <Uptodate />
      <Testimonials />
      <AccordionFaqs />
      <Footer />
    </main>
  );
}