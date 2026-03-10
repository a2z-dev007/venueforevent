"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ParallaxItemProps {
  children: React.ReactNode;
  speed?: number; // 1 = fast, 0.1 = slow
  className?: string;
}

export default function ParallaxItem({ children, speed = 0.5, className = "" }: ParallaxItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !itemRef.current) return;

    // The y translation distance based on speed
    const ySetter = gsap.quickSetter(itemRef.current, "y", "px");
    const containerHeight = containerRef.current.offsetHeight;
    
    // We animate from positive to negative translation over the life of the scroll
    gsap.fromTo(
      itemRef.current,
      { y: 50 * speed },
      {
        y: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // when the top of the trigger hits the bottom of the viewport
          end: "bottom top", // when the bottom of the trigger hits the top of the viewport
          scrub: true,
        },
      }
    );
  }, { scope: containerRef, dependencies: [speed] });

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={itemRef} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
