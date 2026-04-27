"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

function ImageCarousel({ images, title, imagePositions }: { images: string[]; title: string; imagePositions?: string[] }) {
  const [current, setCurrent] = useState(0);
  const pos = imagePositions?.[current] ?? "center center";
  if (!images || images.length <= 1) {
    return (
      <div className="rounded-lg overflow-hidden mb-8 bg-black/20">
        <img src={images?.[0]} alt={title} className="w-full h-auto max-h-[60vh] object-contain mx-auto block" loading="lazy" decoding="async" />
      </div>
    );
  }
  return (
    <div className="relative rounded-lg overflow-hidden mb-8 bg-black/20 group">
      <img
        src={images[current]}
        alt={`${title} ${current + 1}`}
        className="w-full h-auto max-h-[60vh] object-contain mx-auto block transition-opacity duration-300"
        loading="lazy"
        decoding="async"
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

export default function Projects() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const sel = selected !== null ? projects[selected] : null;
  const selT = selected !== null ? t.projects.items[selected] : null;
  const selImages = sel ? (sel.images && sel.images.length > 0 ? sel.images : [sel.image]) : [];

  return (
    <section id="projekte" className="py-24 bg-black/10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="technical-label text-primary">{t.projects.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 uppercase">{t.projects.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const tProject = t.projects.items[index];
            const images = project.images && project.images.length > 0 ? project.images : [project.image];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div
                  className="aspect-[16/10] overflow-hidden rounded-lg linear-border cursor-pointer"
                  onClick={() => setSelected(index)}
                >
                  <img
                    src={images[0]}
                    alt={tProject?.title ?? project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/40 to-transparent">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">{tProject?.title ?? project.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && sel && selT && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
          >
            <div className="flex min-h-full items-center justify-center p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
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
                  <span className="technical-label text-primary">{selT.client} | {sel.year}</span>
                  <h2 className="text-4xl font-bold tracking-tighter mt-2 mb-6">{selT.title}</h2>
                  <div className="mb-8">
                    <h4 className="technical-label mb-4">{t.projects.descLabel}</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selT.description} {selT.detail}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <ImageCarousel images={selImages} title={selT.title} imagePositions={(sel as any).imagePositions} />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="technical-label mb-2">{t.projects.techLabel}</h4>
                        <div className="flex flex-wrap gap-2">
                          {selT.tags.map(tag => (
                            <Badge key={tag} className="bg-primary/20 text-primary border-primary/20">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="technical-label mb-2">{t.projects.statusLabel}</h4>
                        <Badge variant="outline" className="text-green-500 border-green-500/30 bg-green-500/5">{t.projects.statusValue}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}