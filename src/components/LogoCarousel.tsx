"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";

export default function LogoCarousel() {
  const doubledPartners = [...partners, ...partners];

  return (
    <div className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="technical-label opacity-50">Vertrauen von Branchenführern</span>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center whitespace-nowrap px-10"
        >
          {doubledPartners.map((partner, i) => (
            <div key={i} className="flex-shrink-0 w-32 md:w-48 h-12 relative grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}