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
import { VenueCard } from "../../common/VenueCard";

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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <VenueCard 
                venue={{
                  name: venue.name,
                  location: venue.location,
                  rating: venue.rating,
                  price: venue.price,
                  image: venue.image,
                  type: venue.tag
                }} 
                variant="standard" 
              />
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
