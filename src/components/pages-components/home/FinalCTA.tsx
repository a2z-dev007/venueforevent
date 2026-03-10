import { motion } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import HangingGarland from "./HangingGarland";
import GoldenParticles from "./GoldenParticles";
import celebrationImg from "@/assets/celebration-sparklers.jpg";

const FinalCTA = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={celebrationImg.src}
        alt="Wedding celebration with sparklers"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Dark warm overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--dark-1) / 0.4) 0%, hsl(var(--dark-2) / 0.55) 40%, hsl(var(--dark-2) / 0.6) 70%, hsl(var(--dark-2) / 0.75) 100%)",
        }}
      />

      {/* Warm golden radial glow behind text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 55%, hsl(var(--champagne-10) / 0.15) 0%, transparent 70%)",
        }}
      />

      <FloatingPetals count={10} color="gold" />
      <GoldenParticles />

      <div className="absolute left-0 right-0 top-0">
        <HangingGarland variant="marigold" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center section-px text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="font-accent mb-3 text-3xl text-champagne md:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let's begin
        </motion.p>

        <motion.h2
          className="font-heading max-w-4xl text-5xl font-bold leading-[1.1] text-primary-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          style={{ textShadow: "0 2px 20px hsl(var(--dark-2) / 0.5)" }}
        >
          Your Perfect
          <br />
          Celebration
          <br />
          <span className="text-gradient-gold">Starts Here</span>
        </motion.h2>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70 md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Discover handpicked venues that make every moment magical — from intimate gatherings to grand celebrations.
        </motion.p>

        <motion.button
          className="btn-luxury mt-10 text-lg shadow-[0_8px_32px_hsl(var(--wine)/0.35)]"
          whileHover={{ scale: 1.05, boxShadow: "0 12px 44px hsl(var(--wine-5) / 0.45)" }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Find Your Venue
        </motion.button>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
