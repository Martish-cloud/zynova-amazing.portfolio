"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "Nexora Frontend Architecture",
    category: "React & Next.js",
    image: "/projects/nexora.png",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Corebase Backend Control",
    category: "Node.js, APIs & Databases",
    image: "/projects/corebase.jpg",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "LaravelX E-Commerce",
    category: "Full-Stack Laravel",
    image: "/projects/laravelx.jpg",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "Elephantrack Enterprise",
    category: "Web Applications",
    image: "/projects/elephantrack.jpg",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Executive Data Dashboards",
    category: "Data Analytics & Power BI",
    image: "/projects/excel.jpg",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Custom Shopify Applications",
    category: "E-Commerce & SaaS",
    image: "/projects/shopify.png",
    colSpan: "col-span-1 md:col-span-1",
  }
];

export default function ServicesGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="relative w-full py-24 px-6 z-20" id="solutions" ref={containerRef}>
      <div className="max-w-7xl mx-auto w-full flex flex-col space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-white uppercase">
            Featured <span className="text-brand-emerald italic font-playfair lowercase font-normal">Solutions</span>
          </h2>
          <p className="font-mono text-gray-400 max-w-xl text-sm leading-relaxed">
            A curated selection of our high-performance dashboards, enterprise architectures, and data analytics pipelines.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm aspect-video md:aspect-auto md:h-[280px] ${project.colSpan}`}
            >
              <Image 
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col space-y-2 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <span className="text-brand-cyan font-mono text-xs tracking-widest uppercase shadow-black drop-shadow-md">
                  {project.category}
                </span>
                <h3 className="text-2xl font-syne font-bold text-white shadow-black drop-shadow-md">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
