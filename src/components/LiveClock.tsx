"use client";
import { useEffect, useState } from "react";

export default function LiveClock({ className = "", baseColor = "#ffffff" }: { className?: string, baseColor?: string }) {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) {
    // Prevent hydration mismatch by returning a static placeholder or null
    return <div className={`relative flex items-center justify-center ${className}`} />;
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Analog Clock */}
      <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] overflow-visible">
        {/* Base Clock Design - Replicated from User's Image */}
        <g stroke={baseColor} fill={baseColor}>
          {/* Two diagonal lines top left */}
          <line x1="30" y1="20" x2="90" y2="80" strokeWidth="8" strokeLinecap="round" />
          <line x1="60" y1="10" x2="110" y2="60" strokeWidth="8" strokeLinecap="round" />
          
          {/* Two diagonal lines bottom right */}
          <line x1="130" y1="180" x2="180" y2="230" strokeWidth="8" strokeLinecap="round" />
          <line x1="150" y1="160" x2="210" y2="220" strokeWidth="8" strokeLinecap="round" />

          {/* Left Outline Ring */}
          <path d="M120,40 A80,80 0 0,0 120,200" fill="none" strokeWidth="8" />
          
          {/* Right Solid Semi-Circle */}
          <path d="M120,40 A80,80 0 0,1 120,200 Z" fill={baseColor} stroke="none" />
          
          {/* Inner Solid Circle to connect the left side */}
          <circle cx="120" cy="120" r="45" fill={baseColor} stroke="none" />
        </g>

        {/* Hour Hand (Golden) */}
        <g transform={`rotate(${hourAngle} 120 120)`}>
          <path d="M120,130 L114,120 L120,60 L126,120 Z" fill="#d4af37" />
        </g>
        
        {/* Minute Hand (Golden) */}
        <g transform={`rotate(${minuteAngle} 120 120)`}>
          <path d="M120,135 L116,120 L120,40 L124,120 Z" fill="#d4af37" />
        </g>
        
        {/* Second Hand (Thin Golden) */}
        <g transform={`rotate(${secondAngle} 120 120)`}>
          <line x1="120" y1="140" x2="120" y2="30" stroke="#f1c40f" strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="120" r="6" fill="#f1c40f" />
        </g>
      </svg>
    </div>
  );
}
