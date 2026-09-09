"use client";
import { useEffect, useRef } from "react";

export default function ScrollFramesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const START_FRAME = 1;
  const END_FRAME = 449;
  const totalActiveFrames = END_FRAME - START_FRAME + 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    // Cache to hold loaded images
    const images: HTMLImageElement[] = [];

    // Preload function - loads frames in chunks to prevent blocking
    const preloadFrames = async () => {
      for (let i = START_FRAME; i <= END_FRAME; i++) {
        const img = new window.Image();
        const num = i.toString().padStart(4, '0');
        img.src = `/video_frames_30fps_png/frame_${num}.png`;
        images.push(img);
        
        // Wait for the first few frames to load before continuing so we can render immediately
        if (i - START_FRAME < 5) {
          await new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        }
      }
    };

    const draw = (image: HTMLImageElement) => {
      if (!context || !canvas) return;
      
      // Ensure high quality scaling
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      const hRatio = canvas.width / image.width;
      const vRatio = canvas.height / image.height;
      const ratio  = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - image.width * ratio) / 2;
      const centerShift_y = (canvas.height - image.height * ratio) / 2;  
      
      context.fillStyle = "#000000";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, image.width, image.height,
                         centerShift_x, centerShift_y, image.width * ratio, image.height * ratio);
    };

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const footer = document.querySelector('footer');
        const footerHeight = footer ? footer.offsetHeight : 0;
        
        // Calculate the maximum scroll distance until the top of the footer hits the bottom of the viewport
        const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight - footerHeight);
        
        let progress = scrollTop / maxScroll;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        const frameIndex = Math.min(
          totalActiveFrames - 1,
          Math.floor(progress * totalActiveFrames)
        );

        const currentImage = images[frameIndex];

        if (currentImage && currentImage.complete) {
          draw(currentImage);
        }
      });
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      
      // Set actual size in memory (scaled for retina/high-DPI)
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Ensure CSS size remains 100% of viewport (handled by Tailwind, but good to be explicit if needed, though w-full h-full does this)
      
      handleScroll();
    };

    // Initialize
    preloadFrames().then(() => {
      if (canvasRef.current) {
        handleResize(); // draw first frame
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[-5] pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[#030014]/60 z-10 pointer-events-none" />
    </div>
  );
}
