import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ScrollFramesBackground from "@/components/ScrollFramesBackground";
import AudioPlayer from "@/components/AudioPlayer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Zynova",
  description: "Zynova is a high-end agency building high-performance software, scalable web architectures & data-driven dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          jetbrainsMono.variable,
          syne.variable,
          playfair.variable,
          "antialiased font-sans text-white bg-background min-h-screen selection:bg-brand-cyan/30"
        )}
      >
        <AudioPlayer />
        <div className="noise-overlay" />
        <ScrollFramesBackground />
        {children}
      </body>
    </html>
  );
}
