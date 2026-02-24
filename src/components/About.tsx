"use client";

import { motion } from "framer-motion";
import { Award, Zap, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const icons = [Award, Zap, Users];
  return (
    <section id="über-uns" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="technical-label text-primary">{t.about.label}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t.about.p1} <strong className="text-white">Srimugunthan Ratnasingam</strong>, {t.about.p1b}
              </p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {t.about.cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <div key={card.title} className="glass p-8 rounded-xl border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <p className="text-muted-foreground text-sm">{card.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
