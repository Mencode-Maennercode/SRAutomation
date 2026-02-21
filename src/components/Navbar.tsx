"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-dark m-4 rounded-lg"
    >
      <a href="#" className="flex items-center gap-3 group">
        <img 
          src="/Logo-rund.png" 
          alt="SR Automation" 
          className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105 drop-shadow-2xl" 
        />
        <span className="text-white font-bold text-lg md:text-xl tracking-tight">SR Automation</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {["Leistungen", "Projekte", "Über Uns", "Partner", "Karriere"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="technical-label hover:text-primary transition-colors cursor-pointer"
          >
            {item}
          </a>
        ))}
        <a href="#kontakt">
          <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
            KONTAKT
          </Button>
        </a>
      </div>

      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-industrial-dark border border-white/10 mt-2 p-6 rounded-lg flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {["Leistungen", "Projekte", "Über Uns", "Partner", "Karriere"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="technical-label py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setIsOpen(false)}>
            <Button className="w-full">KONTAKT</Button>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}