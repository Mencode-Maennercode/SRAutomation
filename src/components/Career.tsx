"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Career() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Spannende Projekte",
      description: "Arbeiten Sie an innovativen Automatisierungslösungen für namhafte Kunden"
    },
    {
      icon: TrendingUp,
      title: "Weiterentwicklung",
      description: "Fortbildungen und Schulungen für Ihre persönliche und fachliche Entwicklung"
    },
    {
      icon: Heart,
      title: "Teamgeist",
      description: "Familiäres Arbeitsklima in einem engagierten und kompetenten Team"
    }
  ];

  return (
    <section id="karriere" className="py-24 bg-black/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="technical-label text-primary"
          >
            Karriere
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 mb-6"
          >
            VERSTÄRKEN SIE UNSER TEAM
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Wir suchen motivierte Fachkräfte, die mit uns die Zukunft der Automatisierungstechnik gestalten möchten.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-xl border border-white/10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-12 rounded-xl border border-white/10 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Offene Stellen</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Elektriker / Elektroniker (m/w/d)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">SPS-Programmierer (m/w/d)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Schaltschrank-Bauer (m/w/d)</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Auch Initiativbewerbungen sind jederzeit willkommen!
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-6">
                Interessiert? Ruf mich doch einfach ungezwungen an und lass uns reden!
              </p>
              <a href="tel:+4926419173331">
                <Button size="lg" className="w-full md:w-auto">
                  +49 (0) 2641 917 333 – 1
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                Oder schreib mir: info@srautomation.de
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
