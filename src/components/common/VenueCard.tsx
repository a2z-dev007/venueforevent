"use client";

import React, { useRef, useState, useCallback, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Crown, Trophy, ArrowRight } from "lucide-react";

export interface VenueData {
  name: string;
  location?: string;
  description?: string;
  rating?: number;
  price?: string;
  image: string | { src: string };
  type?: string;
  badges?: string[];
}

interface VenueCardProps {
  venue: VenueData;
  variant?: "standard" | "featured" | "minimal" | "overlay" | "horizontal";
  className?: string;
  onClick?: () => void;
  tiltEnabled?: boolean;
}

export function VenueCard({
  venue,
  variant = "standard",
  className = "",
  onClick,
  tiltEnabled = true
}: VenueCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!tiltEnabled || !ref.current) return;
      
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Compute 3D rotation, inverted to tilt correctly towards the user
      const maxAngle = 10;
      const rX = (mouseY / (height / 2)) * -maxAngle; 
      const rY = (mouseX / (width / 2)) * maxAngle;
      
      setRotateX(rX);
      setRotateY(rY);
    },
    [tiltEnabled]
  );

  const handleMouseLeave = () => {
    if (!tiltEnabled) return;
    setRotateX(0);
    setRotateY(0);
  };

  const imageSrc = typeof venue.image === 'string' ? venue.image : venue.image.src;

  const motionProps = tiltEnabled ? {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { rotateX, rotateY, transformPerspective: 1000 },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    style: { transformStyle: "preserve-3d" as const }
  } : {};

  // ============================
  // Standard Default Layout
  // ============================
  if (variant === "standard") {
    return (
      <motion.div
        ref={ref}
        className={`group cursor-pointer rounded-2xl border border-champagne/15 bg-card relative shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-luxury)] transition-colors ${className}`}
        onClick={onClick}
        {...motionProps}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
          <img src={imageSrc} alt={venue.name} className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 via-transparent to-transparent pointer-events-none" />
          
          {venue.type && (
            <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-wine/90 backdrop-blur-md px-3 py-1 text-[10px] font-medium text-wine-foreground md:text-xs z-10 shadow-sm" style={{ transform: "translateZ(20px)" }}>
              <Crown className="h-3 w-3" /> {venue.type}
            </div>
          )}
          
          {venue.rating && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-dark-accent/70 px-2.5 py-1 backdrop-blur-md z-10" style={{ transform: "translateZ(20px)" }}>
              <Star className="h-3 w-3 fill-champagne text-champagne" />
              <span className="text-[10px] font-medium text-primary-foreground md:text-xs">{venue.rating}</span>
            </div>
          )}
        </div>
        
        <div className="relative p-4 md:p-5 bg-card z-20" style={{ transform: "translateZ(10px)" }}>
          <h3 className="font-heading text-base md:text-lg font-bold text-foreground line-clamp-1 group-hover:text-wine transition-colors">{venue.name}</h3>
          
          {venue.location && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground md:text-sm">
              <MapPin className="h-3.5 w-3.5" /> {venue.location}
            </p>
          )}

          {venue.price && (
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
               <p className="font-heading text-sm md:text-base font-bold text-wine">{venue.price}</p>
               <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/50 group-hover:text-champagne transition-colors">Details</span>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // ============================
  // Featured Immersive Card
  // ============================
  if (variant === "featured") {
    return (
      <motion.div
        ref={ref}
        className={`group cursor-pointer relative rounded-[2rem] aspect-[3/4] sm:aspect-auto sm:h-[480px] w-full isolate shadow-xl hover:shadow-[var(--shadow-luxury)] ${className}`}
        onClick={onClick}
        {...motionProps}
      >
        {/* Background Image & Gradients Wrapper to guard Border Radius */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
          <img 
            src={imageSrc} 
            alt={venue.name} 
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
            loading="lazy" 
          />
          
          {/* Gradients to match the mock image */}
          <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-90" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
          
          {/* Full Interactive Glass Frost Overlay on Hover */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 border-t border-white/10" style={{ maskImage: "linear-gradient(to top, white, white 80%, transparent)" }} />
        </div>

        {/* 3D Pop Content */}
        <div 
          className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6 md:p-8"
          style={{ transform: tiltEnabled ? "translateZ(30px)" : "none" }}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 shadow-sm drop-shadow-lg">{venue.name}</h3>
          
          {/* Main Description (Removed location fallback and description per request) */}
          {venue.location && (
            <p className="text-sm text-white/90 mb-5 flex items-center gap-1.5 font-medium drop-shadow-md">
              <MapPin className="h-4 w-4" /> {venue.location}
            </p>
          )}

          {/* Tag Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
             {venue.badges?.map((badge, idx) => (
               <span key={badge} className="flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-medium text-white shadow-sm border border-white/20">
                 {idx === 0 && <Trophy className="h-3 w-3 text-champagne" />}
                 {badge}
               </span>
             ))}
             {!venue.badges && venue.type && (
                <span className="flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-medium text-white shadow-sm border border-white/20">
                  <Crown className="h-3 w-3 text-champagne" />
                  {venue.type}
                </span>
             )}
          </div>

          {/* Primary Action Button */}
          <button className="w-full rounded-[1.2rem] bg-white px-6 py-4 text-sm font-bold text-black shadow-xl transition-all duration-300 transform group-hover:bg-champagne group-hover:text-white active:scale-[0.98] flex items-center justify-between">
            <span>Reserve now</span>
            {venue.price && (
               <span className="font-heading text-base font-bold">{venue.price}</span>
            )}
          </button>
        </div>
      </motion.div>
    );
  }

  // ============================
  // Overlay Layout
  // ============================
  if (variant === "overlay") {
    return (
      <motion.div
        ref={ref}
        className={`group cursor-pointer relative rounded-2xl aspect-[4/5] sm:aspect-[3/4] isolate shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-luxury)] transition-all ${className}`}
        onClick={onClick}
        {...motionProps}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <img 
            src={imageSrc} 
            alt={venue.name} 
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/90 via-dark-accent/20 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-90" />
        </div>
        
        <div className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4 p-5 z-20 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 shadow-lg" style={{ transform: tiltEnabled ? "translateZ(30px)" : "none" }}>
          {venue.type && (
            <span className="mb-2 block text-[10px] uppercase font-bold tracking-widest text-champagne drop-shadow-sm">
              {venue.type}
            </span>
          )}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white line-clamp-1 drop-shadow-md">{venue.name}</h3>
          
          <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-3">
            {venue.location && (
              <p className="flex items-center gap-1.5 text-xs md:text-sm text-white/90 drop-shadow-sm">
                <MapPin className="h-4 w-4" /> {venue.location}
              </p>
            )}
            {venue.price && (
              <p className="font-heading text-sm md:text-base font-bold text-champagne drop-shadow-sm">{venue.price}</p>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // ============================
  // Horizontal Layout
  // ============================
  if (variant === "horizontal") {
    return (
      <motion.div
        ref={ref}
        className={`group cursor-pointer flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-champagne/15 bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-luxury)] transition-all ${className}`}
        onClick={onClick}
        {...motionProps}
      >
        <div className="relative w-full sm:w-2/5 md:w-1/3 aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
          <img src={imageSrc} alt={venue.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
        </div>
        
        <div className="flex-1 p-5 md:p-6 flex flex-col justify-center relative z-10 bg-card" style={{ transform: tiltEnabled ? "translateZ(15px)" : "none" }}>
          {venue.type && (
            <span className="mb-2 inline-block text-[10px] uppercase font-bold tracking-widest text-champagne">
              {venue.type}
            </span>
          )}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-wine transition-colors">{venue.name}</h3>
          
          {venue.location && (
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground border-b border-border pb-4">
              <MapPin className="h-4 w-4" /> {venue.location}
            </p>
          )}

          <div className="mt-4 flex items-center justify-between">
            {venue.price && (
               <p className="font-heading text-lg font-bold text-wine">{venue.price}</p>
            )}
            <button className="text-xs font-semibold text-champagne hover:text-wine transition-colors flex items-center gap-1">
               View Details <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // ============================
  // Minimal Layout
  // ============================
  return (
     <motion.div ref={ref} className={`group cursor-pointer ${className}`} onClick={onClick} {...motionProps}>
       <div className="overflow-hidden rounded-2xl aspect-square mb-3 shadow-md relative">
         <img src={imageSrc} alt={venue.name} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
         <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
       </div>
       <h3 className="font-heading text-lg font-bold text-foreground line-clamp-1">{venue.name}</h3>
       <div className="flex justify-between items-center mt-1">
         {venue.location && <p className="text-sm text-muted-foreground">{venue.location}</p>}
         {venue.price && <p className="text-sm font-bold text-wine">{venue.price}</p>}
       </div>
     </motion.div>
  );
}
