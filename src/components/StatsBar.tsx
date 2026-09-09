"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const STATS = [
  { 
    value: "4+", 
    label: "Years of Experience",
    color: "text-brand-cyan"
  },
  { 
    value: "99%", 
    label: "Positive Reviews",
    color: "text-brand-emerald"
  },
  { 
    value: "299+", 
    label: "Projects Delivered",
    color: "text-brand-amber"
  },
  { 
    value: "4.5", 
    label: "Average Rating",
    color: "text-white",
    icon: true
  }
];

export default function StatsBar() {
  return (
    <section className="relative w-full z-30 -mt-16 mb-16 overflow-hidden pointer-events-none">
      <div className="w-full relative bg-transparent py-4">
        
        <motion.div
          animate={{ x: ["-50%", "0%"] }} // Left to right continuous animation
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap w-fit"
        >
          {/* We duplicate the stats multiple times to ensure a seamless infinite loop */}
          {[...Array(4)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex items-center">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center px-12 md:px-20 border-r border-white/10 last:border-r-0">
                  <div className="flex items-center space-x-1 mb-2">
                    <span className={`text-4xl md:text-5xl font-syne font-bold ${stat.color} drop-shadow-lg`}>
                      {stat.value}
                    </span>
                    {stat.icon && (
                      <Star className="w-6 h-6 text-brand-amber fill-brand-amber mb-3 drop-shadow-md" />
                    )}
                  </div>
                  <span className="font-mono text-xs md:text-sm text-gray-400 tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
