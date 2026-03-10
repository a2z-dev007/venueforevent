import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MandalaDecor = ({ size = 120, position = "center" }: { size?: number; position?: "left" | "right" | "center" }) => {
  const posClass = position === "left" ? "mr-auto" : position === "right" ? "ml-auto" : "mx-auto";
  const mandalaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(mandalaRef.current, {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });
  }, { scope: mandalaRef });

  return (
    <div ref={mandalaRef} className={`pointer-events-none ${posClass} opacity-[0.12]`}>
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        {/* Outer ring of petals */}
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={`outer-${i}`}
            cx="60"
            cy="20"
            rx="8"
            ry="18"
            fill="hsl(var(--champagne))"
            transform={`rotate(${i * 30} 60 60)`}
          />
        ))}
        {/* Inner ring */}
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={`inner-${i}`}
            cx="60"
            cy="32"
            rx="6"
            ry="12"
            fill="hsl(var(--blush))"
            transform={`rotate(${i * 45} 60 60)`}
          />
        ))}
        {/* Dot ring */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          return (
            <circle
              key={`dot-${i}`}
              cx={60 + Math.cos(angle) * 50}
              cy={60 + Math.sin(angle) * 50}
              r="2"
              fill="hsl(var(--champagne))"
            />
          );
        })}
        {/* Center */}
        <circle cx="60" cy="60" r="10" fill="hsl(var(--wine))" opacity="0.4" />
        <circle cx="60" cy="60" r="5" fill="hsl(var(--champagne))" opacity="0.6" />
      </svg>
    </div>
  );
};

export default MandalaDecor;
