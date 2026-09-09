"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only on client side
    audioRef.current = new Audio("/nature-sound.ogg");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Soft volume for peaceful background

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    setHasInteracted(true);
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={togglePlay}
        className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl"
        aria-label={isPlaying ? "Mute nature sound" : "Play nature sound"}
      >
        {/* Pulsing rings when playing */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border border-brand-cyan/40 animate-ping opacity-50" style={{ animationDuration: '2s' }}></span>
            <span className="absolute inset-[-4px] rounded-full border border-brand-cyan/20 animate-ping opacity-30" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></span>
          </>
        )}
        
        {isPlaying ? (
          <Volume2 size={20} className="text-brand-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        ) : (
          <VolumeX size={20} className="text-gray-400 group-hover:text-white transition-colors" />
        )}
      </button>

      {/* Tooltip to encourage playing */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-300 px-3 py-2 rounded-lg pointer-events-none"
          >
            Play Nature Sound 🌿
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
