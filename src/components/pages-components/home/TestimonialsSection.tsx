import { motion } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import FloralDivider from "./FloralDivider";
import CornerRose from "./CornerRose";
import MandalaDecor from "./MandalaDecor";
import WeddingBells from "./WeddingBells";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun",
    location: "Wedding in Jaipur",
    text: "We found our dream palace venue through VenueForEvent. The entire experience was magical — from discovery to our wedding day. It was everything we imagined and more.",
    rating: 5,
  },
  {
    name: "Sneha & Rohit",
    location: "Beach Wedding in Goa",
    text: "The sunset beach venue was absolutely breathtaking. Our guests still talk about how beautiful everything was. Thank you for making our special day unforgettable!",
    rating: 5,
  },
  {
    name: "Meera & Vikram",
    location: "Garden Wedding in Delhi",
    text: "From the first search to the final dance, everything was perfect. The venue exceeded our expectations and the team was incredibly supportive throughout.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--blush-2)) 0%, hsl(var(--wine-11)) 50%, hsl(var(--champagne-14)) 100%)",
      }}
    >
      {/* Warm emotional glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(var(--wine-4) / 0.5) 0%, transparent 50%), radial-gradient(ellipse at 20% 20%, hsl(var(--champagne-7) / 0.3) 0%, transparent 40%)",
        }}
      />
      <FloatingPetals count={10} color="rose" />
      <CornerRose position="top-right" />
      <CornerRose position="bottom-left" />

      <div className="relative mx-auto max-w-7xl">
        <WeddingBells />
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-accent mb-2 text-2xl text-champagne">Love Stories</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Real Couples, Real Celebrations
          </h2>
        </motion.div>
        <FloralDivider variant="gold" />
        <MandalaDecor size={80} position="center" />

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass-card rounded-2xl p-8 border-champagne/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Quote className="mb-4 h-8 w-8 text-champagne/40" />
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-champagne text-champagne" />
                ))}
              </div>
              <p className="font-heading text-lg font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-champagne">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
