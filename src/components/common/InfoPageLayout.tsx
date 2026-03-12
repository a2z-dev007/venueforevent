import Navbar from "@/components/pages-components/home/Navbar";
import Footer from "@/components/pages-components/home/Footer";
import FloatingPetals from "@/components/pages-components/home/FloatingPetals";
import GoldenParticles from "@/components/pages-components/home/GoldenParticles";
import CornerRose from "@/components/pages-components/home/CornerRose";
import MandalaDecor from "@/components/pages-components/home/MandalaDecor";
import HangingGarland from "@/components/pages-components/home/HangingGarland";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WaveDivider } from "./InfoComponents";

interface InfoPageLayoutProps {
  children: React.ReactNode;
  heroTitle: string;
  heroSubtitle?: string;
  heroImage?: string;
  heroDescription?: string;
}

export default function InfoPageLayout({
  children,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroDescription,
}: InfoPageLayoutProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroScrollY, [0, 1], ["0%", "30%"]);
  const heroTextY = useTransform(heroScrollY, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(heroScrollY, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-background selection:bg-wine/10 selection:text-wine overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section
        ref={heroRef}
        className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center"
      >
        {heroImage ? (
          <div className="absolute inset-0 z-0">
            <motion.img
              style={{ y: heroImgY }}
              src={heroImage}
              alt={heroTitle}
              className="h-[120%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-accent/80 via-dark-accent/40 to-transparent" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 0%, hsl(var(--dark-2) / 0.6) 100%)",
              }}
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--dark-2)) 0%, hsl(var(--wine-10)) 100%)",
            }}
          />
        )}

        <div className="absolute top-0 left-0 right-0 z-10 opacity-60">
          <HangingGarland variant="marigold" />
        </div>

        <FloatingPetals count={16} color="rose" />
        <GoldenParticles />
        <CornerRose position="top-left" />
        <CornerRose position="top-right" />

        <motion.div
          style={{ y: heroTextY, opacity }}
          className="relative z-10 text-center section-px max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 pointer-events-none"
          >
            <MandalaDecor size={500} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-4 mb-4"
          >
            <div className="h-px w-20 bg-champagne items-center" />
            <span className="font-heading text-xs uppercase tracking-[0.5em] text-champagne">
              ESTD. 2024
            </span>
            <div className="h-px w-20 bg-champagne" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-accent text-3xl md:text-5xl text-champagne-gold mb-8 drop-shadow-luxury"
          >
            {heroSubtitle || "VenueForEvent"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-6xl md:text-9xl font-heavy text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)] leading-[1.05] tracking-tight uppercase"
          >
            {heroTitle}
          </motion.h1>
          {heroDescription && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed italic"
            >
              "{heroDescription}"
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-champagne/60 font-bold">
              Scroll to Explore
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-champagne to-transparent opacity-50 animate-scroll-vertical" />
          </motion.div>
        </motion.div>

        <WaveDivider position="bottom" variant="ivory" isMultiWave />
      </section>

      <main className="relative z-10 w-full">{children}</main>

      <Footer />
    </div>
  );
}
