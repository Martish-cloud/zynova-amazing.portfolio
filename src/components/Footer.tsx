import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black overflow-hidden pt-16 pb-8 px-6 z-20">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/footer-bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        
        <div className="flex flex-col space-y-4">
          <Link href="/" className="inline-block transition-opacity hover:opacity-80">
            <Image 
              src="/logo.png" 
              alt="Zynova Logo" 
              width={140} 
              height={40} 
              className="filter invert hue-rotate-180 brightness-[1.5] contrast-125 object-contain mix-blend-screen"
            />
          </Link>
          <p className="text-sm font-mono text-gray-400">
            Digital & intelligent solutions for modern enterprises.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-syne font-bold text-white">CONNECT</h4>
          <Link href="https://wa.me/918584055431" target="_blank" className="text-sm font-mono text-gray-400 hover:text-brand-emerald flex items-center gap-2 transition-colors">
            <MessageCircle size={14} /> WhatsApp
          </Link>
          <Link href="mailto:team.zynova@gmail.com" className="text-sm font-mono text-gray-400 hover:text-brand-cyan flex items-center gap-2 transition-colors">
            <Mail size={14} /> Email Us
          </Link>
          <div className="pt-2">
            <p className="text-xs font-mono text-gray-500 mb-3">Join our WhatsApp Group</p>
            <div className="bg-white p-1.5 rounded-lg inline-block hover:scale-105 transition-transform">
              <Image 
                src="/qr-code.png" 
                alt="WhatsApp Group QR Code" 
                width={80} 
                height={80} 
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-syne font-bold text-white">SOCIALS</h4>
          <Link href="https://github.com/Martish-cloud/zynova-amazing.portfolio" target="_blank" className="text-sm font-mono text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.2 5.2 0 0 0-1.5-3.8 4.9 4.9 0 0 0 .1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a4.9 4.9 0 0 0 .1 3.8A5.2 5.2 0 0 0 3.6 9.2c0 5.6 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg> zynova-cloud
          </Link>
          <Link href="https://www.linkedin.com/company/139674410" target="_blank" className="text-sm font-mono text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> Zynova LinkedIn
          </Link>
          <Link href="https://www.linkedin.com/in/amit-halder-" target="_blank" className="text-sm font-mono text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> Amit Halder
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-syne font-bold text-white">LEGAL</h4>
          <Link href="#" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-sm font-mono text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-mono text-gray-500">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Zynova. All rights reserved.</p>
      </div>
    </footer>
  );
}
