"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Services() {
  return (
    <section id="leistungen" className="py-24 relative overflow-hidden">
      {/* Background Technical Illustration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <img 
          src="https://pixabay.com/get/g075046e05027701ec401eca79d864b5d03bce2059a33be3b2acb51fecfd3724ee9ccff5dab9505dd47947cb06cad4f62.svg" 
          alt="Technical Circuitry by GDJ on Pixabay" 
          className="w-full h-full invert"
        />
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="technical-label text-primary"
            >
              Kompetenzen
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter mt-4"
            >
              UNSERE LEISTUNGEN
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground max-w-sm text-sm font-mono uppercase tracking-tight"
          >
            Maßgeschneiderte Lösungen für Steuerung, Anlagenbau und spezialisierte Maschinenkomponenten.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={index === 2 ? "md:col-span-2 md:row-span-1" : ""}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="h-full relative overflow-hidden group border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 glass cursor-pointer">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      <div>
                        <span className="technical-label text-primary/80">{service.category} / {service.id}</span>
                        <h3 className="text-2xl font-bold mt-2">{service.title}</h3>
                      </div>
                      
                      <div className="flex items-end justify-between">
                        <p className="text-sm text-muted-foreground max-w-[200px] leading-relaxed">
                          {service.description}
                        </p>
                        <motion.div 
                          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-primary/50 transition-colors"></div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="glass-dark border-white/10 text-white max-w-3xl">
                  <DialogHeader>
                    <span className="technical-label text-primary">{service.category}</span>
                    <DialogTitle className="text-4xl font-bold tracking-tighter mt-2">{service.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div className="aspect-video rounded-lg overflow-hidden linear-border">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description} Wir bieten umfassende Unterstützung bei der Planung, 
                        Installation und Wartung Ihrer Systeme. Unsere Lösungen sind auf maximale Effizienz 
                        und Langlebigkeit ausgelegt.
                      </p>
                      <ul className="space-y-2">
                        {["Moderne Steuerungskonzepte", "Termingerechte Ausführung", "Fachmännische Beratung"].map(item => (
                          <li key={item} className="flex items-center gap-2 text-sm font-mono uppercase tracking-tight">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}