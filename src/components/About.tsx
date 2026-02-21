"use client";

import { motion } from "framer-motion";
import { Award, Zap, Users } from "lucide-react";

export default function About() {
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
            <span className="technical-label text-primary">Über Uns</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4 mb-6">
              EXPERTISE TRIFFT INNOVATION
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SR Automation steht für höchste Qualität im Bereich Automatisierungstechnik, 
                Steuerungsbau und Anlagenbau. Unter der Leitung von <strong className="text-white">Srimugunthan Ratnasingam</strong>, 
                Elektromeister mit langjähriger Erfahrung, realisieren wir anspruchsvolle Projekte 
                für Industrie und Gewerbe.
              </p>
              <p>
                Seit der Gründung im Jahr 2011 haben wir uns auf maßgeschneiderte Lösungen spezialisiert, 
                die exakt auf die Bedürfnisse unserer Kunden zugeschnitten sind. Von der ersten Planung 
                über die Fertigung bis hin zur Inbetriebnahme – wir begleiten Sie durch den gesamten Prozess.
              </p>
              <p>
                Unser Anspruch ist es, modernste Technik mit bewährten Sicherheitsstandards zu verbinden 
                und dabei stets wirtschaftliche Lösungen zu entwickeln. Vertrauen Sie auf unsere Kompetenz 
                in den Bereichen SPS-Programmierung, Schaltschrankbau, DGUV V3 Prüfungen und Sistema-Berechnungen.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Elektromeister</h3>
                  <p className="text-muted-foreground text-sm">
                    Srimugunthan Ratnasingam führt SR Automation mit fundiertem Fachwissen 
                    und jahrzehntelanger Praxiserfahrung in der Elektrotechnik und Automatisierung.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Seit 2011</h3>
                  <p className="text-muted-foreground text-sm">
                    Über ein Jahrzehnt Erfahrung in der Realisierung komplexer Automatisierungsprojekte 
                    für namhafte Kunden aus verschiedensten Branchen.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Kundenzufriedenheit</h3>
                  <p className="text-muted-foreground text-sm">
                    Unsere Kunden schätzen unsere Zuverlässigkeit, Termintreue und die 
                    hohe Qualität unserer Arbeit – das bestätigen zahlreiche erfolgreiche Projekte.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
