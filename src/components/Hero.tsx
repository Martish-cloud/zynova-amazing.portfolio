"use client";

import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-end p-6 overflow-hidden pt-24" id="services">
      {/* 3D Canvas with refractive lens over typography */}
      <HeroCanvas />

      {/* Meta Badges */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6 mb-24 pointer-events-none">
        
        {/* Left Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col space-y-1 bg-transparent p-4 pointer-events-auto"
        >
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-brand-cyan drop-shadow-md">SOFTWARE ENGINEERING / FULL-STACK / DATA SYSTEMS</span>
          <span className="text-[10px] md:text-xs font-mono text-gray-400 drop-shadow-md">AVAILABLE FOR GLOBAL CLIENTS & ENTERPRISES</span>
        </motion.div>

        {/* Right Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col space-y-1 bg-transparent p-4 text-right pointer-events-auto"
        >
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-brand-emerald flex items-center justify-end gap-2 drop-shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
            </span>
            ACTIVE STATUS: ONLINE
          </span>
          <span className="text-[10px] md:text-xs font-mono text-gray-400 drop-shadow-md">GET IN TOUCH: EMAIL & WHATSAPP</span>
        </motion.div>

      </div>
    </section>
  );
}
