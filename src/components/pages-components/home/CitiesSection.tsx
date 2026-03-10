import { motion } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import FloralDivider from "./FloralDivider";
import CornerRose from "./CornerRose";
import HangingGarland from "./HangingGarland";
import MandalaDecor from "./MandalaDecor";
import RangoliBorder from "./RangoliBorder";
import cityDelhi from "@/assets/city-delhi.jpg";
import cityMumbai from "@/assets/city-mumbai.jpg";
import cityJaipur from "@/assets/city-jaipur.jpg";
import cityGoa from "@/assets/city-goa.jpg";
import cityBangalore from "@/assets/city-bangalore.jpg";
import cityLucknow from "@/assets/city-lucknow.jpg";
import { ArrowRight } from "lucide-react";

const cities = [
  { name: "Delhi", venues: 850, image: cityDelhi },
  { name: "Mumbai", venues: 720, image: cityMumbai },
  { name: "Jaipur", venues: 430, image: cityJaipur },
  { name: "Goa", venues: 310, image: cityGoa },
  { name: "Bangalore", venues: 580, image: cityBangalore },
  { name: "Lucknow", venues: 290, image: cityLucknow },
  { name: "Hyderabad", venues: 410, image: cityDelhi },
  { name: "Chennai", venues: 350, image: cityMumbai },
];

const CitiesSection = () => {
  return (
    <section
      id="venues"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--champagne-3)) 0%, hsl(var(--blush-4)) 40%, hsl(var(--champagne-2)) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, hsl(var(--champagne-7) / 0.6) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(var(--blush-5) / 0.4) 0%, transparent 50%)",
        }}
      />
      <FloatingPetals count={10} color="rose" />
      <CornerRose position="top-right" />
      <CornerRose position="bottom-left" />
      <div className="absolute top-0 left-0 right-0">
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
          <p className="font-accent mb-2 text-2xl text-champagne">Explore</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Wedding Venues by City
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover stunning venues across India's most celebrated destinations
          </p>
        </motion.div>
        <FloralDivider variant="gold" />
        <RangoliBorder />

        <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              className="venue-card group cursor-pointer overflow-hidden rounded-2xl border border-champagne/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={city.image.src}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="font-heading text-lg font-semibold text-primary-foreground md:text-xl">
                    {city.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-champagne md:text-sm">
                    {city.venues}+ Venues
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="btn-luxury flex items-center gap-2 px-8 py-3 text-sm">
            View All Cities <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CitiesSection;
