"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "./CountUp";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface Particle {
  id: number;
  x: string;
  y: string;
  opacity: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      opacity: Math.random() * 0.5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic Background Footage with subtle animation */}
      <motion.div 
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/Images/hero-background.jpeg" 
          alt="Technical Background" 
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
          style={{ backgroundColor: "#8C94A9" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </motion.div>

      {/* Floating Particles for Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              x: p.x, 
              y: p.y,
              opacity: p.opacity
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [0, p.opacity, 0]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: p.delay
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
          />
        ))}
      </div>

      {/* Mechanical Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-1">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="technical-label text-primary mb-4 block">{t.hero.label}</span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              {t.hero.title1} <br />
              <span className="text-muted-foreground">{t.hero.title2}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#leistungen">
                <Button size="lg" className="px-8 h-14 text-base gap-2 group">
                  {t.hero.btn1}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#projekte">
                <Button size="lg" variant="outline" className="px-8 h-14 text-base border-white/10 hover:bg-white/5">
                  {t.hero.btn2}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Floating Technical Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.hero.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl font-bold font-mono text-white">
                  {stat.value === "0" ? "Weltweit" : (
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  )}
                </span>
                <span className="technical-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] border-[1px] border-primary rounded-full hidden lg:block"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] border-[1px] border-primary rounded-full hidden lg:block"
      />
    </section>
  );
}