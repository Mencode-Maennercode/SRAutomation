"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="technical-label text-primary">{t.contact.label}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 mb-8">
              {t.contact.title1} <br />
              <span className="text-muted-foreground">{t.contact.title2}</span>
            </h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="technical-label block mb-1">{t.contact.emailLabel}</span>
                  <a href="mailto:info@srautomation.de" className="text-lg font-medium hover:text-primary transition-colors block">info@srautomation.de</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="technical-label block mb-1">{t.contact.phoneLabel}</span>
                  <a href="tel:+4926419173331" className="text-lg font-medium hover:text-primary transition-colors block">+49 (0) 2641 917 333 – 1</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded flex items-center justify-center text-primary">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="technical-label block mb-1">{t.contact.whatsappLabel}</span>
                  <a href="https://wa.me/491703432894" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors block">+49 170 343 2894</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="technical-label">{t.contact.locationLabel}</span>
                  <p className="text-lg font-medium">{t.contact.location}</p>
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
                  <label className="technical-label">{t.contact.formName}</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-primary outline-none transition-colors" placeholder={t.contact.formPlaceholderName} />
                </div>
                <div className="space-y-2">
                  <label className="technical-label">{t.contact.formEmail}</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-primary outline-none transition-colors" placeholder={t.contact.formPlaceholderEmail} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="technical-label">{t.contact.formSubject}</label>
                <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-primary outline-none transition-colors" placeholder={t.contact.formPlaceholderSubject} />
              </div>
              
              <div className="space-y-2">
                <label className="technical-label">{t.contact.formMessage}</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-primary outline-none transition-colors h-32 resize-none" placeholder={t.contact.formPlaceholderMessage} />
              </div>
              
              <Button size="lg" className="w-full h-14 text-base gap-2">
                {t.contact.formSubmit}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}