"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

function ImageCarousel({ images, title, imagePositions }: { images: string[]; title: string; imagePositions?: string[] }) {
  const [current, setCurrent] = useState(0);
  const pos = imagePositions?.[current] ?? "center center";
  if (!images || images.length <= 1) {
    return (
      <div className="rounded-lg overflow-hidden mb-8 bg-black/20">
        <img src={images?.[0]} alt={title} className="w-full h-auto max-h-[60vh] object-contain mx-auto block" />
      </div>
    );
  }
  return (
    <div className="relative rounded-lg overflow-hidden mb-8 bg-black/20 group">
      <img
        src={images[current]}
        alt={`${title} ${current + 1}`}
        className="w-full h-auto max-h-[60vh] object-contain mx-auto block transition-opacity duration-300"
      />
      <button
        onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-4" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const sel = selected !== null ? services[selected] : null;
  const selT = selected !== null ? t.services.items[selected] : null;
  const selImages = sel ? (sel.images && sel.images.length > 0 ? sel.images : [sel.image]) : [];

  return (
    <section id="leistungen" className="py-24 relative overflow-hidden">
      {/* Background Technical Illustration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <img src="/Images/technical-circuitry.svg" alt="Technical Circuitry" className="w-full h-full invert" />
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="technical-label text-primary">
              {t.services.label}
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
              {t.services.title}
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-muted-foreground max-w-sm text-sm font-mono uppercase tracking-tight">
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const tService = t.services.items[index];
            const images = service.images && service.images.length > 0 ? service.images : [service.image];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <motion.div
                  layoutId={`service-card-${service.id}`}
                  className="aspect-[16/10] overflow-hidden rounded-lg linear-border cursor-pointer"
                  style={{ opacity: selected === index ? 0 : 1, transition: "opacity 0.15s" }}
                  onClick={() => setSelected(index)}
                >
                  <img
                    src={images[0]}
                    alt={tService?.title ?? service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/40 to-transparent">
                    <div className="mb-4">
                      <span className="technical-label text-primary/80">{service.category} / {service.id}</span>
                      <h3 className="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">{tService?.title ?? service.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && sel && selT && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-6 md:p-10">
                <motion.div
                  layoutId={`service-card-${sel.id}`}
                  className="relative w-full max-w-5xl glass-dark rounded-2xl border border-white/10 text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="p-8 pt-14">
                    <span className="technical-label text-primary">{sel.category} | {sel.id}</span>
                    <h2 className="text-4xl font-bold tracking-tighter mt-2 mb-6">{selT.title}</h2>
                    <div className="mb-8">
                      <h4 className="technical-label mb-4">{t.services.label}</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {selT.description} {t.services.dialogExtra}
                      </p>
                      {(sel as any).checkPoints && (
                        <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                          {(sel as any).checkPoints.map((point: string, i: number) => (
                            <li key={i} className={`flex items-start gap-2 text-sm ${i === 0 ? "text-primary/80 font-mono" : "text-muted-foreground"}`}>
                              <span className="text-primary mt-0.5 flex-shrink-0">{i === 0 ? "" : "•"}</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <ImageCarousel images={selImages} title={selT.title} imagePositions={(sel as any).imagePositions} />
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="technical-label mb-2">STICHWORTE</h4>
                          <div className="flex flex-wrap gap-2">
                            {((sel as any).tags || t.services.bulletPoints).map((item: string) => (
                              <Badge key={item} className="bg-primary/20 text-primary border-primary/20">{item}</Badge>
                            ))}
                          </div>
                        </div>
                        {(sel as any).memberOf && (
                          <div>
                            <h4 className="technical-label mb-2">MITGLIED BEI</h4>
                            <a
                              href={(sel as any).memberOf.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors leading-relaxed block"
                            >
                              {(sel as any).memberOf.name}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}