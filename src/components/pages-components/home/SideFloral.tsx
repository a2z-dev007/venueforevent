"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Side = "left" | "right";

interface SideFloralProps {
  side: Side;
  className?: string;
  /** Use "light" on dark backgrounds so leaves use champagne/light tones */
  variant?: "default" | "light";
}

export default function SideFloral({ side, className, variant = "default" }: SideFloralProps) {
  const ref = useRef<HTMLDivElement>(null);

  const wine = "hsl(var(--wine))";
  const champagne = variant === "light" ? "hsl(var(--champagne-light))" : "hsl(var(--champagne))";
  const blush = "hsl(var(--blush))";
  const wineMuted = "hsl(var(--wine) / 0.4)";
  const champagneMuted = "hsl(var(--champagne) / 0.35)";

  const isRight = side === "right";

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute top-0 z-0 w-[min(45vw,420px)] h-[min(55vw,480px)]",
        isRight ? "right-0 origin-top-right" : "left-0 origin-top-left",
        className
      )}
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 280 320"
        className={cn("w-full h-full", isRight && "scale-x-[-1]")}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <defs>
          <linearGradient id={`leaf-grad-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={champagne} stopOpacity="0.9" />
            <stop offset="60%" stopColor={wineMuted} stopOpacity="0.7" />
            <stop offset="100%" stopColor={wine} stopOpacity="0.5" />
          </linearGradient>
          <filter id={`blur-${side}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
          <radialGradient id={`gold-${side}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={champagne} stopOpacity="0.6" />
            <stop offset="100%" stopColor={champagne} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Main branch – organic curve */}
        <motion.path
          d="M 0 120 Q 80 80 120 100 Q 160 120 180 90 Q 200 60 220 80 Q 260 110 280 70"
          fill="none"
          stroke={champagneMuted}
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <path
          d="M 40 100 Q 90 70 130 85"
          fill="none"
          stroke={champagneMuted}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M 160 95 Q 200 75 250 95"
          fill="none"
          stroke={champagneMuted}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Large leaves – painterly clusters */}
        <ellipse cx="55" cy="95" rx="22" ry="12" fill={`url(#leaf-grad-${side})`} transform="rotate(-25 55 95)" opacity="0.85" />
        <ellipse cx="75" cy="82" rx="18" ry="10" fill={champagneMuted} transform="rotate(-5 75 82)" opacity="0.75" />
        <ellipse cx="95" cy="108" rx="20" ry="11" fill={`url(#leaf-grad-${side})`} transform="rotate(15 95 108)" opacity="0.8" />
        <ellipse cx="115" cy="88" rx="16" ry="9" fill={blush} transform="rotate(-15 115 88)" opacity="0.5" />
        <ellipse cx="140" cy="78" rx="19" ry="10" fill={champagneMuted} transform="rotate(5 140 78)" opacity="0.7" />
        <ellipse cx="165" cy="92" rx="17" ry="9" fill={`url(#leaf-grad-${side})`} transform="rotate(-20 165 92)" opacity="0.75" />
        <ellipse cx="195" cy="75" rx="20" ry="11" fill={champagneMuted} transform="rotate(10 195 75)" opacity="0.7" />
        <ellipse cx="220" cy="88" rx="18" ry="10" fill={blush} transform="rotate(-8 220 88)" opacity="0.5" />
        <ellipse cx="245" cy="72" rx="16" ry="9" fill={`url(#leaf-grad-${side})`} transform="rotate(18 245 72)" opacity="0.8" />

        {/* Small accent leaves */}
        <ellipse cx="35" cy="108" rx="10" ry="6" fill={wineMuted} transform="rotate(-40 35 108)" opacity="0.5" />
        <ellipse cx="185" cy="108" rx="11" ry="6" fill={wineMuted} transform="rotate(25 185 108)" opacity="0.45" />

        {/* Gold / champagne splatter dots */}
        <circle cx="48" cy="88" r="3" fill={champagne} opacity="0.5" />
        <circle cx="68" cy="100" r="2" fill={champagne} opacity="0.4" />
        <circle cx="105" cy="82" r="2.5" fill={champagne} opacity="0.45" />
        <circle cx="128" cy="98" r="2" fill={champagne} opacity="0.4" />
        <circle cx="155" cy="72" r="3" fill={champagne} opacity="0.5" />
        <circle cx="178" cy="88" r="2" fill={champagne} opacity="0.4" />
        <circle cx="208" cy="68" r="2.5" fill={champagne} opacity="0.45" />
        <circle cx="235" cy="82" r="2" fill={champagne} opacity="0.4" />
        <circle cx="258" cy="65" r="2.5" fill={champagne} opacity="0.5" />

        {/* Tiny buds / roses */}
        <circle cx="62" cy="92" r="5" fill={blush} opacity="0.6" />
        <circle cx="62" cy="92" r="2" fill={wineMuted} opacity="0.8" />
        <circle cx="172" cy="86" r="4" fill={blush} opacity="0.5" />
        <circle cx="172" cy="86" r="1.5" fill={wineMuted} opacity="0.7" />
      </motion.svg>
    </div>
  );
}
