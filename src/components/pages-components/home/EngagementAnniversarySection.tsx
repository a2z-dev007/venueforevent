import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";
import HangingGarland from "./HangingGarland";
import FloatingPetals from "./FloatingPetals";
import MandalaDecor from "./MandalaDecor";
import CornerRose from "./CornerRose";
import engagementVenue from "@/assets/engagement-venue.jpg";
import anniversaryVenue from "@/assets/anniversary-venue.jpg";
import gardenWedding from "@/assets/garden-wedding.jpg";
import palaceWedding from "@/assets/palace-wedding.jpg";
import { Gem, Heart, ArrowRight } from "lucide-react";
import { VenueCard } from "../../common/VenueCard";

const engagementVenues = [
  { name: "Rosewood Engagement Hall", location: "Delhi", price: "₹1,20,000", image: engagementVenue },
  { name: "Blush & Gold Venue", location: "Mumbai", price: "₹1,50,000", image: engagementVenue },
  { name: "Floral Dream Mandap", location: "Jaipur", price: "₹95,000", image: gardenWedding },
  { name: "Pink Petal Gardens", location: "Bangalore", price: "₹1,10,000", image: engagementVenue },
];

const anniversaryVenues = [
  { name: "Candle-lit Paradise", location: "Goa", price: "₹80,000", image: anniversaryVenue },
  { name: "Golden Years Banquet", location: "Udaipur", price: "₹1,80,000", image: palaceWedding },
  { name: "Rose Petal Terrace", location: "Jaipur", price: "₹65,000", image: anniversaryVenue },
  { name: "Eternal Love Hall", location: "Mumbai", price: "₹1,20,000", image: anniversaryVenue },
];

const EngagementAnniversarySection = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--wine-3)) 0%, hsl(var(--blush-6)) 50%, hsl(var(--champagne-8)) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, hsl(var(--wine-4) / 0.4) 0%, transparent 45%), radial-gradient(ellipse at 70% 40%, hsl(var(--champagne-9) / 0.3) 0%, transparent 40%)",
        }}
      />
      <FloatingPetals count={8} color="rose" />
      <CornerRose position="top-left" />
      <CornerRose position="bottom-right" />
      <div className="absolute left-0 right-0 top-0">
        <HangingGarland variant="rose" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Engagement Venues */}
        <MandalaDecor size={80} position="center" />
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Gem className="h-5 w-5 text-champagne" />
            <p className="font-accent text-2xl text-champagne">New Beginnings</p>
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Engagement Venues
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Romantic settings for your ring ceremony and engagement celebrations
          </p>
        </motion.div>
        <FloralDivider variant="gold" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {engagementVenues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <VenueCard venue={{...v, type: "Engagement"}} variant="overlay" />
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10 flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <button className="btn-luxury flex items-center gap-2 px-8 py-3 text-sm">
            View All Engagement Venues <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Anniversary Venues */}
        <div className="mt-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="h-5 w-5 fill-champagne text-champagne" />
              <p className="font-accent text-2xl text-champagne">Celebrate Love</p>
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
              Anniversary Venues
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Celebrate years of togetherness with candlelit dinners and romantic settings
            </p>
          </motion.div>
          <FloralDivider variant="wine" />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
            {anniversaryVenues.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <VenueCard venue={{...v, type: "Anniversary"}} variant="horizontal" />
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-10 flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <button className="btn-luxury flex items-center gap-2 px-8 py-3 text-sm">
              View All Anniversary Venues <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementAnniversarySection;
