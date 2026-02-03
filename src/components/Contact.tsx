"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="technical-label text-primary">In Verbindung treten</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 mb-8">
              BEREIT FÜR DIE <br />
              <span className="text-muted-foreground">AUTOMATISIERUNG?</span>
            </h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="technical-label">E-Mail</span>
                  <p className="text-lg font-medium">info@srautomation.de</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="technical-label">Telefon</span>
                  <p className="text-lg font-medium">+49 (0) 123 456789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="technical-label">Standort</span>
                  <p className="text-lg font-medium">Beispielstraße 123, 12345 Stadt, Deutschland</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="technical-label opacity-30">FORM_SYS_v2.0</span>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="technical-label">Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Ihr Name" />
                </div>
                <div className="space-y-2">
                  <label className="technical-label">E-Mail</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="name@beispiel.de" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="technical-label">Betreff</label>
                <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Wie können wir helfen?" />
              </div>
              
              <div className="space-y-2">
                <label className="technical-label">Nachricht</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-primary outline-none transition-colors h-32 resize-none" placeholder="Ihre Nachricht an uns..." />
              </div>
              
              <Button size="lg" className="w-full h-14 text-base gap-2">
                ANFRAGE SENDEN
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}