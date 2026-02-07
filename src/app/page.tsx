import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Feedback from "@/components/Feedback";
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
      <Feedback />
      <Contact />
      <Footer />
    </main>
  );
}