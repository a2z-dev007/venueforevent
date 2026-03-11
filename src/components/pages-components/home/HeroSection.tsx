import React, { useRef, useState } from "react";
import { Search, MapPin, Users, CalendarHeart, Sparkles } from "lucide-react";

import GoldenParticles from "./GoldenParticles";
import FloatingPetals from "./FloatingPetals";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Local videos used for dynamic background
// Static video paths from the /public/videos folder
const VIDEO_1 = "/videos/slide1.mp4";
const VIDEO_2 = "/videos/slide2.mp4";
const VIDEO_3 = "/videos/slide3.mp4";
const VIDEO_4 = "/videos/slide4.mp4";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Refs for animation targets
  const bgScaleRef = useRef<HTMLDivElement>(null);
  const scene1Ref = useRef<HTMLVideoElement>(null);
  const scene2Ref = useRef<HTMLVideoElement>(null);
  const scene3Ref = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const textScene0Ref = useRef<HTMLDivElement>(null);
  const textScene1Ref = useRef<HTMLDivElement>(null);
  const textScene2Ref = useRef<HTMLDivElement>(null);
  const textScene3Ref = useRef<HTMLDivElement>(null);
  
  const [activeScene, setActiveScene] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Video scrubbing
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        if (videoRef.current && videoRef.current.duration) {
          // currentTime scrubbing disabled for better compatibility on first load
          // videoRef.current.currentTime = self.progress * videoRef.current.duration;
        }
        
        // Update active scene dots based on progress
        const p = self.progress;
        if (p < 0.2) setActiveScene(0);
        else if (p < 0.45) setActiveScene(1);
        else if (p < 0.7) setActiveScene(2);
        else setActiveScene(3);
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Initial setup
    gsap.set([scene1Ref.current, scene2Ref.current, scene3Ref.current, textScene1Ref.current, textScene2Ref.current, textScene3Ref.current], { autoAlpha: 0 });
    gsap.set(bgScaleRef.current, { scale: 1, y: 0 });
    gsap.set(textScene1Ref.current, { y: 80 });
    gsap.set(scene3Ref.current, { scale: 1.1 });
    gsap.set(textScene2Ref.current, { y: 100 });
    gsap.set(textScene3Ref.current, { y: 100 });

    // Timeline construction
    tl.to(bgScaleRef.current, { scale: 1.2, duration: 2 }, 0) // Removed y: -400 for stability
      .to(textScene0Ref.current, { y: -100, autoAlpha: 0, duration: 0.5 }, 0)
      .to(overlayRef.current, { opacity: 0.5, duration: 0.4 }, 0)
      
      // Scene 1: Search Form
      .to(videoRef.current, { autoAlpha: 0, duration: 0.5 }, 0.4) // Explicitly fade out Slide 0 video
      .to(scene1Ref.current, { autoAlpha: 1, duration: 0.5 }, 0.5)
      .to(textScene1Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.6)
      .to(textScene1Ref.current, { autoAlpha: 0, y: -50, duration: 0.4 }, 1.6)
      .to(scene1Ref.current, { autoAlpha: 0, duration: 0.4 }, 1.8)
      
      // Scene 2: Garden 
      .to(scene2Ref.current, { autoAlpha: 1, duration: 0.5 }, 1.4)
      .to(textScene2Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 1.5)
      .to(overlayRef.current, { opacity: 0.55, duration: 0.4 }, 1.5)
      .to(textScene2Ref.current, { autoAlpha: 0, y: -100, duration: 0.4 }, 2.5)
      .to(scene2Ref.current, { autoAlpha: 0, duration: 0.4 }, 2.8)
      
      // Scene 3: Celebration
      .to(scene3Ref.current, { autoAlpha: 1, scale: 1, duration: 0.5 }, 2.4)
      .to(textScene3Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 2.6)
      .to(overlayRef.current, { opacity: 0.65, duration: 0.4 }, 2.5)
      
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video background - autoPlay enabled for stability */}
        <div ref={bgScaleRef} className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={VIDEO_1}
            muted
            playsInline
            preload="auto"
            autoPlay
            loop
          />
        </div>

        {/* Scene 1 video */}
        <video 
          ref={scene1Ref} 
          src={VIDEO_2} 
          muted 
          playsInline 
          loop 
          autoPlay
          style={{ opacity: 0 }}
          className="absolute inset-0 h-full w-full object-cover" 
        />

        {/* Scene 2 video */}
        <video 
          ref={scene2Ref} 
          src={VIDEO_3} 
          muted 
          playsInline 
          loop 
          autoPlay
          style={{ opacity: 0 }}
          className="absolute inset-0 h-full w-full object-cover" 
        />

        {/* Scene 3 video */}
        <video 
          ref={scene3Ref} 
          src={VIDEO_4} 
          muted 
          playsInline 
          loop 
          autoPlay
          style={{ opacity: 0 }}
          className="absolute inset-0 h-full w-full object-cover" 
        />

        {/* Cinematic overlay gradient */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-[1]"
          style={{
            opacity: 0.4,
            background: "linear-gradient(180deg, rgba(0,0,5,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 z-[2]" style={{ background: "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.8) 100%)" }} />

        {/* Particles & Petals */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <GoldenParticles />
          {activeScene >= 2 && <FloatingPetals count={12} color="rose" />}
        </div>

        {/* ============ SCENE 0: Grand Opening ============ */}
        <div ref={textScene0Ref} className="absolute inset-0 z-20 flex flex-col items-center justify-center section-px text-center">
          <div className="mb-6 flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="h-px w-12 bg-champagne/40" />
            <Sparkles className="h-4 w-4 text-champagne" />
            <div className="h-px w-12 bg-champagne/40" />
          </div>
          <p className="font-accent text-3xl text-wine md:text-4xl animate-fade-in-up drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]" style={{ animationDelay: "0.5s" }}>Where dreams come true</p>
          <h1 className="font-heading mt-4 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl animate-fade-in-up drop-shadow-[0_15px_40px_rgba(0,0,0,1)]" style={{ animationDelay: "0.8s" }}>
            <span className="text-white">Find the Perfect Venue</span><br />
            <span className="text-gradient-gold drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">For Your Celebration</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white md:text-xl animate-fade-in-up drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] font-medium" style={{ animationDelay: "1.2s" }}>
            From dream weddings to unforgettable celebrations —<br className="hidden md:block" />
            discover beautiful venues for every special moment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row animate-fade-in-up" style={{ animationDelay: "1.5s" }}>
            <button className="btn-luxury group relative overflow-hidden rounded-full px-12 py-5 text-lg font-black tracking-widest text-white transition-all shadow-2xl">
              <span className="relative z-10">EXPLORE VENUES</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
            <button className="rounded-full px-10 py-5 text-lg font-bold tracking-wide border-2 border-champagne text-white hover:bg-champagne/10 transition-all backdrop-blur-md shadow-lg flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-champagne animate-pulse" />
              WATCH STORY
            </button>
          </div>
          <div className="absolute bottom-10 flex flex-col items-center gap-3 animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.3em] text-champagne/40">Scroll to discover</span>
          </div>
        </div>

        {/* ============ SCENE 1: Search Bar ============ */}
        <div ref={textScene1Ref} className="absolute inset-0 z-20 flex items-center justify-center section-px">
          <div className="w-full max-w-4xl">
            <p className="font-accent mb-2 text-center text-3xl text-wine drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">Begin your journey</p>
            <h2 className="font-heading mb-8 text-center text-4xl font-bold text-white md:text-6xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">Discover Beautiful Venues</h2>
            <div className="glass-dark rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
                <SearchField icon={MapPin} label="City" value="Select City" />
                <SearchField icon={CalendarHeart} label="Event Type" value="Wedding" />
                <SearchField icon={Users} label="Guests" value="100 – 300" />
                <button className="btn-luxury flex items-center justify-center gap-2 rounded-xl py-4 text-base font-bold shadow-lg">
                  <Search className="h-5 w-5" />
                  Find My Venue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============ SCENE 2: Emotional Moment ============ */}
        <div ref={textScene2Ref} className="absolute inset-0 z-20 flex flex-col items-center justify-center section-px text-center">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-16 bg-champagne/30" />
            <Sparkles className="h-5 w-5 text-champagne" />
            <div className="h-px w-16 bg-champagne/30" />
          </div>
          <p className="font-accent mb-4 text-3xl text-wine md:text-4xl drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">A new beginning</p>
          <h2 className="font-heading max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-8xl drop-shadow-[0_20px_50px_rgba(0,0,0,1)]">
            Every Celebration<br />
            <span className="text-gradient-gold drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">Deserves a Beautiful Beginning</span>
          </h2>
        </div>

        {/* ============ SCENE 3: Final CTA ============ */}
        <div ref={textScene3Ref} className="absolute inset-0 z-20 flex flex-col items-center justify-center section-px text-center">
          <p className="font-accent mb-4 text-3xl text-wine md:text-4xl drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">Let's celebrate</p>
          <h2 className="font-heading max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-8xl drop-shadow-[0_20px_50px_rgba(0,0,0,1)]">
            Let's Plan Your<br />
            <span className="text-gradient-gold">Perfect Event</span>
          </h2>
          <button className="btn-luxury rounded-full px-12 py-5 mt-10 text-xl font-black tracking-widest text-white transition-all shadow-[0_30px_60px_rgba(0,0,0,0.6)] uppercase">
            Explore Venues
          </button>
        </div>

        {/* Scene indicator dots */}
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-2 w-2 rounded-full transition-all duration-500 ${activeScene === i ? "scale-125 bg-champagne shadow-[0_0_8px_hsl(var(--champagne)/0.6)]" : "bg-primary-foreground/20"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SearchField = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 transition-all hover:border-champagne/30 hover:bg-primary-foreground/10">
    <Icon className="h-5 w-5 shrink-0 text-champagne" />
    <div>
      <p className="text-[10px] uppercase tracking-wider text-primary-foreground/40">{label}</p>
      <p className="text-sm font-medium text-primary-foreground">{value}</p>
    </div>
  </div>
);

export default HeroSection;
