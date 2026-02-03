"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Projects() {
  return (
    <section id="projekte" className="py-24 bg-black/10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="technical-label text-primary">Referenzen</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 uppercase">Beispielprojekte</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="aspect-[16/10] overflow-hidden rounded-lg linear-border glass cursor-pointer">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/20 to-transparent opacity-90">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="technical-label text-primary/80">{project.client} / {project.year}</span>
                          <h3 className="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">{project.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground max-w-md mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
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
                <DialogContent className="glass-dark border-white/10 text-white max-w-4xl">
                  <DialogHeader>
                    <div className="flex items-center justify-between">
                      <span className="technical-label text-primary">{project.client} | {project.year}</span>
                    </div>
                    <DialogTitle className="text-4xl font-bold tracking-tighter mt-2">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-6">
                    <div className="aspect-video rounded-lg overflow-hidden linear-border mb-8">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h4 className="technical-label mb-4">Projektbeschreibung</h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {project.description} Für dieses Projekt wurde eine spezialisierte Lösung entwickelt, 
                          die exakt auf die Anforderungen des Kunden zugeschnitten war. Besonderer Fokus lag auf 
                          der Benutzerfreundlichkeit und der Integration modernster Sicherheitsstandards.
                        </p>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="technical-label mb-2">Technologien</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <Badge key={tag} className="bg-primary/20 text-primary border-primary/20">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="technical-label mb-2">Status</h4>
                          <Badge variant="outline" className="text-green-500 border-green-500/30 bg-green-500/5">Abgeschlossen</Badge>
                        </div>
                      </div>
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