"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import LiveClock from "./LiveClock";

export default function FounderMessage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10" id="about">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-amber/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left Column: Founder Intro */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-gray-300 w-max mb-2">
              A MESSAGE FROM THE FOUNDER
            </div>
            
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-white">
              Amit Halder
            </h2>
            <h3 className="text-xl font-playfair italic text-brand-amber -mt-4">
              Founder of Zynova
            </h3>
            
            <div className="prose prose-invert prose-p:text-gray-300 prose-p:leading-relaxed">
              <p>
                Hello, Everyone !👋 I hope you’re all doing well!
              </p>
              <p>
                Here’s our portfolio, where you can learn more about us, our services, and the work we do.
              </p>
            </div>

            <div className="mt-8 relative overflow-hidden border border-brand-emerald/30 rounded-xl p-6 shadow-xl">
              {/* Background Video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
              >
                <source src="/car.mp4" type="video/mp4" />
              </video>
              
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 w-full">
                
                {/* Left Side: Live Clock */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
                  <LiveClock className="w-full h-full opacity-90" baseColor="#ffffff" />
                </div>

                {/* Right Side: Content */}
                <div className="flex-1">
                  <p className="text-sm font-mono text-gray-200 leading-relaxed shadow-black drop-shadow-md">
                    <span className="text-brand-emerald font-bold mb-2 block text-base drop-shadow-lg">READY TO START?</span>
                    If you’re interested in our services, you can place an order through our WhatsApp group. Simply let us know what type of service you need, share the required files via Google Drive or GitHub, and tag the admin in the group. We will review your request and get in touch with you within 2 hours.
                  </p>
                  <Link 
                    href="https://wa.me/918584055431" 
                    target="_blank"
                    className="mt-6 inline-flex items-center space-x-2 bg-brand-emerald text-black font-bold px-5 py-3 rounded-lg hover:bg-white transition-colors text-sm"
                  >
                    <MessageCircle size={16} />
                    <span>Join WhatsApp Group</span>
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Services List */}
          <motion.div variants={itemVariants} className="lg:col-span-7 relative flex flex-col space-y-8 rounded-3xl p-8 lg:p-10 overflow-hidden border border-white/10 shadow-2xl bg-black/40">
            
            {/* Background Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen"
            >
              <source src="/amazing-effect-2.mp4" type="video/mp4" />
            </video>
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-bl from-black/60 via-black/30 to-black/80 z-0"></div>

            <div className="relative z-10 w-full">
              {/* Web & Software */}
              <div>
                <h4 className="text-lg font-syne font-bold text-brand-cyan flex items-center gap-3 mb-6 shadow-black drop-shadow-md">
                  <span className="text-2xl">💻</span> Web & Software Development
                  <div className="h-px bg-brand-cyan/30 flex-grow ml-2"></div>
                </h4>
                
                <motion.ul 
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm font-mono text-gray-200 drop-shadow-md"
                >
                  {[
                    "HTML, CSS & Web Design",
                    "Full-Stack MERN Stack",
                    "Frontend (React.js & Next.js)",
                    "Backend (Express.js & NestJS)",
                    "Android (Flutter & React Native)",
                    "iOS App Development",
                    "Spring Boot Backend",
                    ".NET Backend Development",
                    "Blockchain Development",
                    "PHP & Laravel Full-Stack",
                    "WordPress Development",
                    "Shopify Development",
                    "Django Backend"
                  ].map((service, idx) => (
                    <motion.li variants={listItemVariants} key={idx} className="flex items-start gap-2">
                      <span className="text-brand-cyan font-bold opacity-80">{(idx + 1).toString().padStart(2, '0')}.</span> {service}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Data & Business */}
              <div className="pt-10">
                <h4 className="text-lg font-syne font-bold text-brand-amber flex items-center gap-3 mb-6 shadow-black drop-shadow-md">
                  <span className="text-2xl">📊</span> Data & Business Solutions
                  <div className="h-px bg-brand-amber/30 flex-grow ml-2"></div>
                </h4>
                
                <motion.ul 
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col space-y-3 text-sm font-mono text-gray-200 drop-shadow-md"
                >
                  {[
                    "Data Reporting, Data Cleaning & Data Merging using MS Excel",
                    "Professional & Advanced Dashboard Development using MS Excel",
                    "Power BI Reporting & Advanced Dashboard Development"
                  ].map((service, idx) => (
                    <motion.li variants={listItemVariants} key={idx} className="flex items-start gap-2">
                      <span className="text-brand-amber font-bold opacity-80">{(idx + 1).toString().padStart(2, '0')}.</span> {service}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
