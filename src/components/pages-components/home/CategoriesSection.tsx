import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";
import CornerRose from "./CornerRose";
import MandalaDecor from "./MandalaDecor";
import RangoliBorder from "./RangoliBorder";
import HangingGarland from "./HangingGarland";
import FloatingPetals from "./FloatingPetals";
import { Heart, Cake, Building2, Gem, Sparkles, Briefcase } from "lucide-react";

const categories = [
  { name: "Wedding Venues", icon: Heart, desc: "Dream settings for your perfect day" },
  { name: "Birthday Halls", icon: Cake, desc: "Celebrate every milestone in style" },
  { name: "Banquet Halls", icon: Building2, desc: "Grand spaces for grand occasions" },
  { name: "Engagement Venues", icon: Gem, desc: "Begin your journey together" },
  { name: "Anniversary Venues", icon: Sparkles, desc: "Relive the magic year after year" },
  { name: "Corporate Events", icon: Briefcase, desc: "Impress with premium spaces" },
];

const CategoriesSection = () => {
  return (
    <section
      id="categories-section"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--champagne-5)) 0%, hsl(var(--peach-1)) 50%, hsl(var(--blush-2)) 100%)",
      }}
    >
      {/* Soft warm light spots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(var(--gold-3) / 0.6) 0%, transparent 45%), radial-gradient(ellipse at 10% 80%, hsl(var(--blush-3) / 0.4) 0%, transparent 35%), radial-gradient(ellipse at 90% 60%, hsl(var(--champagne-6) / 0.4) 0%, transparent 35%)",
        }}
      />
      <FloatingPetals count={6} color="rose" />
      <CornerRose position="top-left" />
      <CornerRose position="bottom-right" />

      <div className="absolute top-0 left-0 right-0">
        <HangingGarland variant="marigold" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MandalaDecor size={90} position="center" />
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-accent mb-2 text-2xl text-champagne">Categories</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Every Event, Perfectly Planned
          </h2>
        </motion.div>
        <FloralDivider variant="wine" />
        <RangoliBorder />

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="glass-card group cursor-pointer p-8 transition-all duration-500 hover:shadow-[var(--shadow-luxury)] border-champagne/15"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-wine/10 text-wine transition-colors group-hover:bg-wine group-hover:text-wine-foreground">
                <cat.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{cat.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
