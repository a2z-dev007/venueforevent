"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CurtainLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 3800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  const curtainFoldGradient = `
    repeating-linear-gradient(
      to right,
      rgba(0,0,0,0.4) 0%,
      rgba(0,0,0,0.1) 5%,
      rgba(255,255,255,0.05) 10%,
      rgba(0,0,0,0.1) 15%,
      rgba(0,0,0,0.4) 20%
    )
  `;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
           exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          {/* Left Curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 2.2, ease: [0.77, 0, 0.175, 1], delay: 1.8 }}
            className="absolute left-0 top-0 h-full w-1/2 z-20 overflow-hidden"
            style={{ 
               backgroundColor: "#6e0d1d", // Deep wine base
               boxShadow: "40px 0 80px rgba(0,0,0,0.9)",
            }}
          >
             {/* Realistic Folds */}
             <div className="absolute inset-0" style={{ backgroundImage: curtainFoldGradient, backgroundSize: "40% 100%" }} />
             {/* Fabric Grain */}
             <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
             {/* Shadow at the parting line */}
             <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/60 to-transparent" />
          </motion.div>
          
          {/* Right Curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.2, ease: [0.77, 0, 0.175, 1], delay: 1.8 }}
            className="absolute right-0 top-0 h-full w-1/2 z-20 overflow-hidden"
            style={{ 
               backgroundColor: "#6e0d1d",
               boxShadow: "-40px 0 80px rgba(0,0,0,0.9)",
            }}
          >
             {/* Realistic Folds */}
             <div className="absolute inset-0" style={{ backgroundImage: curtainFoldGradient, backgroundSize: "40% 100%" }} />
             {/* Fabric Grain */}
             <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
             {/* Shadow at the parting line */}
             <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>

          {/* Curtain Rod Detail */}
          <motion.div 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            className="absolute top-0 left-0 right-0 h-3 z-40 bg-gradient-to-b from-[#d4af37] to-[#8a6d3b] shadow-2xl"
          />

          {/* Logo Content - remains centered while curtains separate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)", transition: { duration: 1 } }}
            className="relative z-30 text-center px-6"
          >
            <div className="mb-8">
              <img 
                 src="/logo.png" 
                 alt="VenueFOR EVENT" 
                 className="h-28 md:h-44 w-auto mx-auto  drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </div>
            <div className="space-y-4">
              <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ delay: 0.6, duration: 1.2 }}
                 className="h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent"
              />
              <motion.h2 
                 initial={{ opacity: 0, letterSpacing: "0.2em" }}
                 animate={{ opacity: 1, letterSpacing: "0.6em" }}
                 transition={{ delay: 0.4, duration: 1 }}
                 className="font-heading text-champagne text-4xl md:text-7xl font-black uppercase tracking-[0.6em] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              >
                 Welcome
              </motion.h2>
              <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ delay: 0.6, duration: 1.2 }}
                 className="h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-10 text-white font-bold text-xs md:text-sm uppercase tracking-[0.5em] italic"
            >
              India's Premier Event Marketplace
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CurtainLoader;
