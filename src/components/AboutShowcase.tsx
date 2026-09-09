"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const CARDS = [
  {
    id: "web",
    title: "WEB & SOFTWARE ENGINEERING",
    skills: [
      "MERN Stack (React.js, Node.js, Express.js)",
      "Next.js & Modern Frontend Architecture",
      "Backend Systems: NestJS, Spring Boot, .NET & Django",
      "PHP & Laravel Full-Stack Solutions",
      "CMS & E-Commerce: WordPress & Shopify Development"
    ]
  },
  {
    id: "mobile",
    title: "MOBILE & DECENTRALIZED APPS",
    skills: [
      "Cross-Platform Mobile Apps (Flutter & React Native)",
      "Native iOS App Development",
      "Web3 & Blockchain Development"
    ]
  },
  {
    id: "data",
    title: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
    skills: [
      "Advanced MS Excel Dashboards & Automated Reporting",
      "Data Cleaning, Merging & Transformation Pipelines",
      "Power BI Interactive Dashboards & Executive KPI Tracking"
    ]
  }
];

export default function AboutShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-transparent" id="services">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center px-6 z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
          {/* Left Column - Brand Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8 lg:pr-8"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-syne leading-tight text-white font-bold">
              We are <span className="text-brand-amber font-playfair italic font-normal">Zynova</span>, we build <span className="text-brand-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">high-performance</span> software, scalable web architectures & <span className="text-brand-emerald drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">data-driven</span> dashboards for modern businesses.
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                href="https://wa.me/918584055431?text=Hi%20Zynova,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                className="flex items-center space-x-2 bg-brand-cyan text-background font-mono font-bold px-6 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>

              <Link 
                href="mailto:team.zynova@gmail.com"
                className="flex items-center space-x-2 bg-white/5 border border-white/20 text-white font-mono px-6 py-4 rounded-full hover:bg-white/10 transition-all"
              >
                <Mail size={18} />
                <span>Send Email</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Stacked Scroll Cards */}
          <div className="relative h-[550px] w-full max-w-md mx-auto lg:mx-0 flex flex-col perspective-1000">
            {CARDS.map((card, i) => {
              
              // Safe strictly-increasing arrays within [0, 1] for Framer Motion WAAPI
              let xInput = [0, 1]; let xOutput = [0, 0];
              let yInput = [0, 1]; let yOutput = [0, 0];
              let scaleInput = [0, 1]; let scaleOutput = [1, 1];
              let opacityInput = [0, 1]; let opacityOutput = [1, 1];
              let rotateInput = [0, 1]; let rotateOutput = [0, 0];

              if (i === 0) {
                xInput = [0, 0.33]; xOutput = [0, 600];
                yInput = [0, 1]; yOutput = [0, 0];
                scaleInput = [0, 1]; scaleOutput = [1, 1];
                opacityInput = [0, 0.15]; opacityOutput = [1, 0];
                rotateInput = [0, 0.33]; rotateOutput = [0, 15];
              } else if (i === 1) {
                xInput = [0, 0.33, 0.66]; xOutput = [0, 0, 600];
                yInput = [0, 0.33]; yOutput = [40, 0];
                scaleInput = [0, 0.33]; scaleOutput = [0.95, 1];
                opacityInput = [0, 0.33, 0.48]; opacityOutput = [0.6, 1, 0];
                rotateInput = [0, 0.33, 0.66]; rotateOutput = [0, 0, 15];
              } else if (i === 2) {
                xInput = [0, 1]; xOutput = [0, 0];
                yInput = [0, 0.33, 0.66]; yOutput = [80, 40, 0];
                scaleInput = [0, 0.33, 0.66]; scaleOutput = [0.9, 0.95, 1];
                opacityInput = [0, 0.33, 0.66]; opacityOutput = [0.2, 0.6, 1];
                rotateInput = [0, 1]; rotateOutput = [0, 0];
              }
              
              const x = useTransform(scrollYProgress, xInput, xOutput);
              const y = useTransform(scrollYProgress, yInput, yOutput);
              const scale = useTransform(scrollYProgress, scaleInput, scaleOutput);
              const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);
              const rotateZ = useTransform(scrollYProgress, rotateInput, rotateOutput);
              
              const zIndex = 10 - i;

              return (
                <motion.div
                  key={card.id}
                  style={{ 
                    x, 
                    y, 
                    scale, 
                    opacity, 
                    zIndex, 
                    rotateZ,
                    transformOrigin: 'bottom center',
                    willChange: 'transform, opacity'
                  }}
                  className="absolute top-0 left-0 w-full h-full bg-black border border-white/10 rounded-3xl p-8 overflow-hidden flex flex-col"
                >
                  <div className="text-xs font-mono text-brand-cyan mb-2">0{i+1}</div>
                  <h3 className="text-xl font-syne font-bold text-white mb-6 border-b border-white/10 pb-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-4 flex-1">
                    {card.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start text-sm font-mono text-gray-300">
                        <span className="text-brand-cyan mr-3">▹</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
