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
      
      {/* Scroll to Top Mechanical Detail */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-[1px] bg-gradient-to-t from-primary to-transparent"></div>
          <span className="technical-label rotate-90 origin-left translate-x-3">SCROLL_v1.0</span>
        </div>
      </div>
    </main>
  );
}