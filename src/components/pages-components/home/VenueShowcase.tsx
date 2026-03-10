import { motion } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import FloralDivider from "./FloralDivider";
import HangingGarland from "./HangingGarland";
import WeddingBells from "./WeddingBells";
import CornerRose from "./CornerRose";
import gardenWedding from "@/assets/garden-wedding.jpg";
import beachWedding from "@/assets/beach-wedding.jpg";
import palaceWedding from "@/assets/palace-wedding.jpg";
import banquetHall from "@/assets/banquet-hall.jpg";
import { Star, MapPin, ArrowRight } from "lucide-react";

const venues = [
  { name: "The Royal Garden", location: "Jaipur", rating: 4.9, price: "₹3,50,000", image: gardenWedding, tag: "Most Popular" },
  { name: "Sunset Beach Resort", location: "Goa", rating: 4.8, price: "₹5,00,000", image: beachWedding, tag: "Beach Wedding" },
  { name: "Heritage Palace", location: "Udaipur", rating: 5.0, price: "₹8,00,000", image: palaceWedding, tag: "Royal" },
  { name: "Grand Ballroom", location: "Delhi", rating: 4.7, price: "₹2,50,000", image: banquetHall, tag: "Best Value" },
  { name: "Lakeside Haven", location: "Mumbai", rating: 4.8, price: "₹4,20,000", image: gardenWedding, tag: "Scenic" },
  { name: "Emerald Greens", location: "Bangalore", rating: 4.6, price: "₹3,00,000", image: beachWedding, tag: "Garden" },
  { name: "Ivory Towers", location: "Hyderabad", rating: 4.9, price: "₹6,50,000", image: palaceWedding, tag: "Luxury" },
  { name: "Marigold Mansion", location: "Lucknow", rating: 4.7, price: "₹2,80,000", image: banquetHall, tag: "Heritage" },
];

const VenueShowcase = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--blush-4)) 0%, hsl(var(--champagne-5)) 50%, hsl(var(--peach-3)) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, hsl(var(--champagne-7) / 0.5) 0%, transparent 40%), radial-gradient(ellipse at 20% 70%, hsl(var(--blush-7) / 0.5) 0%, transparent 40%)",
        }}
      />
      <FloatingPetals count={8} color="gold" />
      <CornerRose position="top-left" />
      <CornerRose position="bottom-right" />
      <div className="absolute top-0 left-0 right-0">
        <HangingGarland variant="rose" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <WeddingBells />
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-accent mb-2 text-2xl text-champagne">Featured</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Handpicked Venues
          </h2>
        </motion.div>
        <FloralDivider variant="gold" />

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              className="venue-card group cursor-pointer overflow-hidden rounded-2xl border border-champagne/15 bg-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={venue.image.src} alt={venue.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 via-transparent to-transparent" />
                <div className="absolute left-2.5 top-2.5 rounded-full bg-wine px-2.5 py-0.5 text-[10px] font-medium text-wine-foreground md:text-xs md:px-3 md:py-1">
                  {venue.tag}
                </div>
                <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-full bg-dark-accent/60 px-2 py-0.5 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-champagne text-champagne" />
                  <span className="text-[10px] font-medium text-primary-foreground md:text-xs">{venue.rating}</span>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground md:text-base line-clamp-1">{venue.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {venue.location}
                </p>
                <p className="mt-2 font-heading text-sm font-semibold text-wine md:text-base">{venue.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10 flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <button className="btn-luxury flex items-center gap-2 px-8 py-3 text-sm">
            View All Venues <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueShowcase;
