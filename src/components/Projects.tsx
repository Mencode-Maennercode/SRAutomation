"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ImageCarousel({ images, title, imagePositions }: { images: string[]; title: string; imagePositions?: string[] }) {
  const [current, setCurrent] = useState(0);
  const pos = imagePositions?.[current] ?? "center center";
  if (!images || images.length <= 1) {
    return (
      <div className="aspect-video rounded-lg overflow-hidden linear-border mb-8">
        <img src={images?.[0]} alt={title} className="w-full h-full object-cover" style={{ objectPosition: imagePositions?.[0] ?? "center center" }} />
      </div>
    );
  }
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden linear-border mb-8 group">
      <img
        src={images[current]}
        alt={`${title} ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
        style={{ objectPosition: pos }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-[16/10] overflow-hidden rounded-lg linear-border glass cursor-pointer">
                      <img
                        src={images[0]}
                        alt={tProject?.title ?? project.title}
                        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />

                      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/20 to-transparent opacity-90">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="technical-label text-primary/80">{tProject?.client ?? project.client} / {project.year}</span>
                            <h3 className="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">{tProject?.title ?? project.title}</h3>
                          </div>
                        </div>

                        <p className="text-muted-foreground max-w-md mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          {tProject?.description ?? project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {(tProject?.tags ?? project.tags).map(tag => (
                            <Badge key={tag} variant="outline" className="bg-white/5 border-white/10 font-mono text-[10px]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="glass-dark border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hidden">
                    <DialogHeader>
                      <div className="flex items-center justify-between">
                        <span className="technical-label text-primary">{tProject?.client ?? project.client} | {project.year}</span>
                      </div>
                      <DialogTitle className="text-4xl font-bold tracking-tighter mt-2">{tProject?.title ?? project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-6">
                      <ImageCarousel images={images} title={tProject?.title ?? project.title} imagePositions={(project as any).imagePositions} />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                          <h4 className="technical-label mb-4">{t.projects.descLabel}</h4>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {tProject?.description ?? project.description} {tProject?.detail ?? project.detailDescription}
                          </p>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <h4 className="technical-label mb-2">{t.projects.techLabel}</h4>
                            <div className="flex flex-wrap gap-2">
                              {(tProject?.tags ?? project.tags).map(tag => (
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
                  </DialogContent>
                </Dialog>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}