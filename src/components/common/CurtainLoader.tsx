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
    }, 4200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  const curtainTexture = `
  radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15), transparent 60%),
  repeating-linear-gradient(
    to right,
    rgba(0,0,0,0.5) 0px,
    rgba(0,0,0,0.2) 18px,
    rgba(255,255,255,0.05) 36px,
    rgba(0,0,0,0.3) 54px
  )
  `;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          exit={{
            opacity: 0,
            filter: "blur(20px) brightness(1.3)",
            transition: { duration: 1.2 }
          }}
        >
          {/* Stage light */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
          </div>

          {/* LEFT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-105%" }}
            transition={{
              duration: 2.4,
              ease: [0.77, 0, 0.175, 1],
              delay: 1.8
            }}
            className="absolute left-0 top-0 h-full w-1/2 z-20"
            style={{
              backgroundColor: "#6e0d1d",
              backgroundImage: curtainTexture,
              boxShadow: "40px 0 120px rgba(0,0,0,0.9)"
            }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/70 to-transparent" />
          </motion.div>

          {/* RIGHT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "105%" }}
            transition={{
              duration: 2.4,
              ease: [0.77, 0, 0.175, 1],
              delay: 1.8
            }}
            className="absolute right-0 top-0 h-full w-1/2 z-20"
            style={{
              backgroundColor: "#6e0d1d",
              backgroundImage: curtainTexture,
              boxShadow: "-40px 0 120px rgba(0,0,0,0.9)"
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/70 to-transparent" />
          </motion.div>

          {/* Curtain Rod */}
          <motion.div
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            exit={{ y: -60 }}
            className="absolute top-0 left-0 right-0 h-4 z-40 
            bg-gradient-to-b from-[#f5d27a] to-[#8a6d3b]
            shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          />

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* CENTER CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 1.1
            }}
            transition={{ duration: 1.4 }}
            className="relative z-30 text-center px-6"
          >
            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="Venue For Event"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="h-32 md:h-48 mx-auto 
              drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            />

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-[2px] my-6 bg-gradient-to-r from-transparent via-[#e8c57a] to-transparent"
            />

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="font-accent text-[#e8c57a] text-5xl md:text-7xl 
              font-normal antialiased
              drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]
              [text-shadow:0_0_40px_rgba(232,197,122,0.3)]"
            >
              Welcome
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-[2px] my-6 bg-gradient-to-r from-transparent via-[#e8c57a] to-transparent"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ delay: 1.2 }}
              className="font-body text-[#c9b896] text-xs md:text-sm font-medium 
              uppercase tracking-[0.28em] md:tracking-[0.35em] italic antialiased"
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