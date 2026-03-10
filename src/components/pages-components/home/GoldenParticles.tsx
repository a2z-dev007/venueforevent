import { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GoldenParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
    }));
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const particleElements = containerRef.current.querySelectorAll(".sparkle");
    
    particleElements.forEach((el) => {
      // Create a infinite twinkling/floating animation for each particle
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          scale: 0,
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10
        },
        {
          opacity: Math.random() * 0.5 + 0.3,
          scale: 1,
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10,
          duration: Math.random() * 2 + 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 5
        }
      );

      // Subtle slow drift
      gsap.to(el, {
        left: `+=${Math.random() * 2 - 1}%`,
        top: `+=${Math.random() * 2 - 1}%`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="sparkle absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "hsl(var(--champagne))",
          }}
        />
      ))}
    </div>
  );
};

export default GoldenParticles;
