"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function Career() {
  const { t } = useLanguage();
  const icons = [Briefcase, TrendingUp, Heart];
  const benefits = t.career.benefits.map((b, i) => ({ ...b, icon: icons[i] }));

  return (
    <section id="karriere" className="py-24 bg-black/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="technical-label text-primary"
          >
            {t.career.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 mb-6"
          >
            {t.career.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-muted-foreground text-lg"
          >
            {t.career.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass p-12 rounded-xl border border-white/10 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t.career.openPositions}</h3>
              <div className="space-y-3 mb-6">
                {t.career.positions.map((pos) => (
                  <div key={pos} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground">{pos}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {t.career.initiative}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-6">
                {t.career.cta}
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+4926419173331">
                  <Button size="lg" className="w-full md:w-auto">
                    +49 (0) 2641 917 333 – 1
                  </Button>
                </a>
                <a href="https://wa.me/491703432894" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full md:w-auto gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {t.career.whatsapp}
                  </Button>
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                {t.career.orEmail}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
