import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Feedback from "@/components/Feedback";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Services />
      <Projects />
      <About />
      <Partners />
      <Feedback />
      <Career />
      <Contact />
      <Footer />
    </main>
  );
}