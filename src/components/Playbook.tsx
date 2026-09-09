"use client";

import { motion, useScroll } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useRef } from "react";

const STEPS = [
  {
    id: "01",
    title: "Discovery & Planning",
    description: "We start by deeply understanding your business goals, target audience, and technical requirements to map out a foolproof project architecture.",
    icon: Search,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
    border: "border-brand-cyan/20",
    glow: "shadow-[0_0_30px_rgba(0,240,255,0.3)]",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description: "Our design team crafts pixel-perfect, high-converting interfaces in Figma, ensuring the user experience is intuitive, modern, and perfectly aligned with your brand.",
    icon: PenTool,
    color: "text-brand-amber",
    bg: "bg-brand-amber/10",
    border: "border-brand-amber/20",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
  },
  {
    id: "03",
    title: "Development & Engineering",
    description: "We write clean, scalable, and highly performant code. Whether it's a Next.js frontend or a robust Laravel backend, we build software designed to scale.",
    icon: Code2,
    color: "text-brand-emerald",
    bg: "bg-brand-emerald/10",
    border: "border-brand-emerald/20",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
  },
  {
    id: "04",
    title: "Delivery & Deployment",
    description: "After rigorous testing and QA, we deploy your product to secure cloud infrastructure, monitor its performance, and provide seamless handover and support.",
    icon: Rocket,
    color: "text-white",
    bg: "bg-white/10",
    border: "border-white/20",
    glow: "shadow-[0_0_30px_rgba(255,255,255,0.3)]",
  }
];

export default function Playbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 z-20" id="playbook">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-4 mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-gray-300 mb-4">
            OUR PLAYBOOK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold text-white uppercase">
            The Zynova <span className="text-brand-cyan italic font-playfair lowercase font-normal">Process</span>
          </h2>
          <p className="font-mono text-gray-400 max-w-2xl text-sm leading-relaxed mt-4">
            We don't just write code. We engineer complete business solutions using a proven, predictable methodology that guarantees excellence from concept to launch.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Static Background Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 hidden sm:block" />
          
          {/* Animated Scroll Line */}
          <motion.div 
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-emerald to-transparent hidden sm:block z-0" 
          />

          <div className="flex flex-col space-y-12 md:space-y-24">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;
              // Determine initial slide direction based on even/odd
              const initialX = isEven ? -50 : 50;

              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: initialX, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  
                  {/* Center Node (Hidden on very small screens) */}
                  <div className="hidden sm:flex absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-black border border-white/20 items-center justify-center z-10 shadow-2xl">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                      className={`w-10 h-10 rounded-full ${step.bg} ${step.border} border flex items-center justify-center ${step.glow}`}
                    >
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors relative overflow-hidden group"
                    >
                      
                      {/* Step Number Watermark */}
                      <div className="absolute -right-4 -bottom-8 text-9xl font-syne font-bold text-white/[0.03] z-0 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
                        {step.id}
                      </div>

                      <div className="relative z-10">
                        <span className={`font-mono text-xs tracking-widest ${step.color} mb-3 block`}>
                          STEP {step.id}
                        </span>
                        <h3 className="text-2xl font-syne font-bold text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
