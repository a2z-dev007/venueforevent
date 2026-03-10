import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";
import CornerRose from "./CornerRose";
import HangingGarland from "./HangingGarland";
import FloatingPetals from "./FloatingPetals";
import MandalaDecor from "./MandalaDecor";
import decorTheme from "@/assets/decor-theme.jpg";
import bridalEntry from "@/assets/bridal-entry.jpg";
import cateringFood from "@/assets/catering-food.jpg";
import djNight from "@/assets/dj-night.jpg";
import birthdayPackage from "@/assets/birthday-package.jpg";
import gardenWedding from "@/assets/garden-wedding.jpg";
import beachWedding from "@/assets/beach-wedding.jpg";
import palaceWedding from "@/assets/palace-wedding.jpg";
import { Sparkles, ArrowRight } from "lucide-react";

const ideas = [
  { title: "Decor Themes", subtitle: "Royal to rustic — set the vibe", image: decorTheme },
  { title: "Bridal Entry Ideas", subtitle: "Make it unforgettable", image: bridalEntry },
  { title: "Per-Plate Catering", subtitle: "Feasts that steal hearts", image: cateringFood },
  { title: "DJ & Sangeet Nights", subtitle: "Dance like nobody's watching", image: djNight },
  { title: "Birthday Packages", subtitle: "Every age, every style", image: birthdayPackage },
  { title: "Floral Arrangements", subtitle: "Blooming beautiful setups", image: gardenWedding },
  { title: "Beach Celebrations", subtitle: "Sun, sand & celebrations", image: beachWedding },
  { title: "Royal Themed Events", subtitle: "Regal and majestic", image: palaceWedding },
];

const PartyPlanningIdeas = () => {
  return (
    <section
      id="ideas"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--peach-2)) 0%, hsl(var(--champagne-13)) 40%, hsl(var(--wine-9)) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, hsl(var(--champagne-7) / 0.5) 0%, transparent 45%), radial-gradient(ellipse at 80% 70%, hsl(var(--wine-10) / 0.4) 0%, transparent 40%)",
        }}
      />
      <FloatingPetals count={10} color="gold" />
      <CornerRose position="top-right" />
      <CornerRose position="bottom-left" />
      <div className="absolute left-0 right-0 top-0">
        <HangingGarland variant="marigold" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MandalaDecor size={100} position="center" />
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-accent mb-2 text-2xl text-champagne">Inspiration</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Party Planning Ideas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Get inspired with trending celebration ideas — from dreamy décor to unforgettable entertainment
          </p>
        </motion.div>
        <FloralDivider variant="gold" />

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {ideas.map((idea, i) => (
            <motion.div
              key={idea.title}
              className="venue-card group cursor-pointer overflow-hidden rounded-2xl border border-champagne/15 bg-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={idea.image.src} alt={idea.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/70 via-dark-accent/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <div className="flex items-center gap-1 mb-0.5">
                    <Sparkles className="h-3 w-3 text-champagne" />
                    <span className="text-[10px] uppercase tracking-wider text-champagne md:text-[11px]">{idea.subtitle}</span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-primary-foreground md:text-lg">
                    {idea.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10 flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <button className="btn-luxury flex items-center gap-2 px-8 py-3 text-sm">
            View All Ideas <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartyPlanningIdeas;
