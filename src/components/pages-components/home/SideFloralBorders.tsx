"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const rosePath =
  "M12 4C12 4 6 10 6 16C6 20 8 24 12 24C16 24 18 20 18 16C18 10 12 4 12 4Z";
const leafPath = "M12 2Q16 8 12 14Q8 8 12 2Z";

function FloralsColumn({
  side,
  variant = "light",
  className,
}: {
  side: "left" | "right";
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  const fillRose = isDark ? "hsl(var(--champagne) / 0.25)" : "hsl(var(--blush) / 0.5)";
  const fillChampagne = isDark ? "hsl(var(--champagne) / 0.2)" : "hsl(var(--champagne) / 0.35)";
  const fillLeaf = isDark ? "hsl(var(--champagne) / 0.15)" : "hsl(var(--champagne) / 0.2)";

  const positions = [
    { top: "12%", scale: 0.7, delay: 0 },
    { top: "25%", scale: 1, delay: 0.3 },
    { top: "40%", scale: 0.85, delay: 0.1 },
    { top: "55%", scale: 0.9, delay: 0.5 },
    { top: "70%", scale: 0.75, delay: 0.2 },
    { top: "85%", scale: 0.8, delay: 0.4 },
  ];

  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 bottom-0 w-24 md:w-32 z-0 overflow-hidden",
        side === "left" ? "left-0" : "right-0",
        className
      )}
      aria-hidden
    >
      {positions.map((pos, i) => (
        <motion.div
          key={`${side}-${i}`}
          className="absolute flex flex-col items-center gap-1"
          style={{
            left: side === "left" ? 0 : "auto",
            right: side === "right" ? 0 : "auto",
            top: pos.top,
            transform: side === "right" ? "scaleX(-1)" : undefined,
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: pos.delay,
          }}
        >
          {/* Small rose/blossom */}
          <svg
            width={28 * pos.scale}
            height={32 * pos.scale}
            viewBox="0 0 24 28"
            className="drop-shadow-sm"
          >
            <path d={rosePath} fill={fillRose} opacity={0.85} />
            <path
              d="M12 6C12 6 8 11 8 16C8 19 9 22 12 22"
              stroke={fillChampagne}
              strokeWidth="0.6"
              fill="none"
              opacity={0.9}
            />
          </svg>
          {/* Leaf */}
          <svg
            width={16 * pos.scale}
            height={20 * pos.scale}
            viewBox="0 0 24 16"
            style={{ marginLeft: side === "left" ? 4 : -4 }}
          >
            <path d={leafPath} fill={fillLeaf} opacity={0.9} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export default function SideFloralBorders({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <>
      <FloralsColumn side="left" variant={variant} className={className} />
      <FloralsColumn side="right" variant={variant} className={className} />
    </>
  );
}
