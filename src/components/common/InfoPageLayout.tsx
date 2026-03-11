import Navbar from "@/components/pages-components/home/Navbar";
import Footer from "@/components/pages-components/home/Footer";
import FloatingPetals from "@/components/pages-components/home/FloatingPetals";
import GoldenParticles from "@/components/pages-components/home/GoldenParticles";
import CornerRose from "@/components/pages-components/home/CornerRose";
import MandalaDecor from "@/components/pages-components/home/MandalaDecor";
import HangingGarland from "@/components/pages-components/home/HangingGarland";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen bg-background selection:bg-wine/10 selection:text-wine">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
        {heroImage ? (
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt={heroTitle} 
              className="h-full w-full object-cover"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-b from-dark-accent/60 via-dark-accent/40 to-background"
            />
             <div 
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, transparent 0%, hsl(var(--dark-2) / 0.4) 100%)"
              }}
            />
          </div>
        ) : (
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(180deg, hsl(var(--dark-2)) 0%, hsl(var(--wine-10)) 100%)"
            }}
          />
        )}
        
        <div className="absolute top-0 left-0 right-0 z-10 opacity-60">
           <HangingGarland variant="marigold" />
        </div>

        <FloatingPetals count={12} color="rose" />
        <GoldenParticles />
        <CornerRose position="top-left" />
        <CornerRose position="top-right" />
        
        <div className="relative z-10 text-center section-px max-w-5xl mx-auto">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 0.3, scale: 1 }}
             transition={{ duration: 1.5 }}
             className="absolute -top-32 left-1/2 -translate-x-1/2 pointer-events-none"
          >
             <MandalaDecor size={400} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-accent text-2xl md:text-4xl text-champagne mb-6"
          >
            {heroSubtitle || "VenueForEvent"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-8xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-tight"
          >
            {heroTitle}
          </motion.h1>
          {heroDescription && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              {heroDescription}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex justify-center"
          >
             <div className="w-px h-24 bg-gradient-to-b from-champagne to-transparent opacity-50" />
          </motion.div>
        </div>
      </section>

      <main className="relative z-10 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}

