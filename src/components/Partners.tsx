"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Partners() {
  const { t } = useLanguage();
  const partners = [
    {
      name: "Herter Industries",
      description: t.partners.partnerDescriptions[0],
      url: "https://herter-industries.com/",
      logo: "/Images/Herter.png"
    },
    {
      name: "Sistema Seminar",
      description: t.partners.partnerDescriptions[1],
      url: "https://www.sistema-seminar.de/",
      logo: "/Images/sistema.png"
    }
  ];

  return (
    <section id="partner" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="technical-label text-primary"
          >
            {t.partners.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 mb-6"
          >
            {t.partners.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            {t.partners.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group relative"
            >
              <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="h-16 flex items-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className={`w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity ${
                        partner.name === "Sistema Seminar" 
                          ? "max-h-16" 
                          : "max-h-6 filter brightness-0 invert"
                      }`}
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {partner.description}
                </p>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="technical-label text-primary/80 group-hover:text-primary transition-colors">
                    {t.partners.learnMore}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
