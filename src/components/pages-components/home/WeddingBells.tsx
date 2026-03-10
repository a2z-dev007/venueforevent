import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WeddingBells = () => {
  const bellContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bells = bellContainerRef.current?.querySelectorAll("path:not([opacity]), ellipse, circle:not([r='3'])");
    if (bells) {
      gsap.to(bells, {
        rotate: (i) => (i % 2 === 0 ? 5 : -5),
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "50% 10%",
      });
    }

    const clappers = bellContainerRef.current?.querySelectorAll("circle[r='3']");
    if (clappers) {
      gsap.to(clappers, {
        x: (i) => (i % 2 === 0 ? 3 : -3),
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });
    }
  }, { scope: bellContainerRef });

  return (
    <div ref={bellContainerRef} className="pointer-events-none flex justify-center py-4 opacity-20">
      <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
        {/* Ribbon bow */}
        <path d="M25 8 Q32 2 40 8 Q48 2 55 8" stroke="hsl(var(--champagne))" strokeWidth="1.5" fill="none" />
        <path d="M30 5 Q35 0 40 5" stroke="hsl(var(--blush))" strokeWidth="1" fill="hsl(var(--blush))" opacity="0.3" />
        <path d="M40 5 Q45 0 50 5" stroke="hsl(var(--blush))" strokeWidth="1" fill="hsl(var(--blush))" opacity="0.3" />
        
        {/* Left bell */}
        <path d="M20 20 Q20 12 30 10 L30 8" stroke="hsl(var(--champagne))" strokeWidth="1" fill="none" />
        <path d="M15 45 Q15 20 30 18 Q45 20 45 45Z" fill="hsl(var(--champagne))" opacity="0.3" />
        <path d="M15 45 Q15 20 30 18 Q45 20 45 45" stroke="hsl(var(--champagne))" strokeWidth="1" fill="none" />
        <ellipse cx="30" cy="45" rx="15" ry="4" fill="hsl(var(--champagne))" opacity="0.4" />
        <circle cx="30" cy="50" r="3" fill="hsl(var(--champagne))" opacity="0.5" />
        
        {/* Right bell */}
        <path d="M60 20 Q60 12 50 10 L50 8" stroke="hsl(var(--champagne))" strokeWidth="1" fill="none" />
        <path d="M35 45 Q35 20 50 18 Q65 20 65 45Z" fill="hsl(var(--champagne))" opacity="0.3" />
        <path d="M35 45 Q35 20 50 18 Q65 20 65 45" stroke="hsl(var(--champagne))" strokeWidth="1" fill="none" />
        <ellipse cx="50" cy="45" rx="15" ry="4" fill="hsl(var(--champagne))" opacity="0.4" />
        <circle cx="50" cy="50" r="3" fill="hsl(var(--champagne))" opacity="0.5" />
        
        {/* Small hearts */}
        <path d="M38 58 Q38 55 40 56 Q42 55 42 58 Q40 62 38 58Z" fill="hsl(var(--blush))" opacity="0.5" />
      </svg>
    </div>
  );
};

export default WeddingBells;
