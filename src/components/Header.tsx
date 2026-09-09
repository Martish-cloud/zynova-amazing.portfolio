"use client";

import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-center"
    >
      <div className="w-full max-w-7xl backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        
        {/* Brand */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image 
            src="/logo.png" 
            alt="Zynova Logo" 
            width={140} 
            height={40} 
            className="filter invert hue-rotate-180 brightness-[1.5] contrast-125 object-contain mix-blend-screen"
            priority
          />
        </Link>

        {/* Center Nav - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          {["SERVICES", "SOLUTIONS", "PLAYBOOK", "ABOUT"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-mono tracking-wider text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-cyan transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <Link 
            href="https://wa.me/918584055431?text=Hi%20Zynova,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            className="flex items-center space-x-2 text-xs font-mono text-white bg-white/10 hover:bg-brand-emerald/20 hover:text-brand-emerald border border-white/10 px-4 py-2 rounded-full transition-all"
          >
            <MessageCircle size={14} />
            <span className="hidden sm:inline">WHATSAPP</span>
          </Link>
          
          <Link 
            href="mailto:team.zynova@gmail.com"
            className="flex items-center space-x-2 text-xs font-mono text-background bg-white hover:bg-brand-cyan hover:text-background px-4 py-2 rounded-full transition-all"
          >
            <Mail size={14} />
            <span className="hidden sm:inline">CONTACT</span>
          </Link>
        </div>

      </div>
    </motion.header>
  );
}
