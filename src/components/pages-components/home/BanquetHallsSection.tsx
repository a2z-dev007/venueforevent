import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";
import CornerRose from "./CornerRose";
import MandalaDecor from "./MandalaDecor";
import FloatingPetals from "./FloatingPetals";
import banquetHall from "@/assets/banquet-hall.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gardenWedding from "@/assets/garden-wedding.jpg";
import palaceWedding from "@/assets/palace-wedding.jpg";
import { ArrowRight } from "lucide-react";
import { VenueCard } from "../../common/VenueCard";

const banquets = [
  { name: "The Imperial Ballroom", location: "Delhi", rating: 4.9, price: "₹2,50,000", image: banquetHall, type: "Indoor" },
  { 
    name: "Royal Garden Banquet", 
    location: "Jaipur", 
    rating: 4.8, 
    price: "₹3,80,000", 
    image: gardenWedding, 
    type: "Outdoor",
    description: "Cozy wooden chalet nestled in the Swiss Alps, offering a warm fireplace, scenic mountain views, and direct access to ski slopes.",
    badges: ["Guest Favorite", "4 Night Stay"]
  },
  { name: "Heritage Grand Hall", location: "Lucknow", rating: 5.0, price: "₹4,50,000", image: palaceWedding, type: "Heritage" },
  { name: "Crystal Ballroom", location: "Mumbai", rating: 4.7, price: "₹3,20,000", image: banquetHall, type: "Premium" },
  { 
    name: "Sunset Terrace Hall", 
    location: "Goa", 
    rating: 4.8, 
    price: "₹2,80,000", 
    image: gardenWedding, 
    type: "Rooftop",
    description: "Breathtaking venue overlooking the ocean, perfect for romantic sunset celebrations and grand evening parties.",
    badges: ["Top Rated", "Available Soon"]
  },
  { name: "Maharaja Hall", location: "Udaipur", rating: 4.9, price: "₹5,50,000", image: palaceWedding, type: "Royal" },
  { name: "Emerald Grand", location: "Bangalore", rating: 4.6, price: "₹2,20,000", image: banquetHall, type: "Modern" },
  { name: "Golden Celebration Hall", location: "Hyderabad", rating: 4.7, price: "₹2,90,000", image: gardenWedding, type: "Classic" },
];

const BanquetHallsSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.utils.toArray<HTMLElement>('.gsap-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 80 }, 
        {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "bottom 15%",
            scrub: 1.5,
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--blush-1)) 0%, hsl(var(--wine-1)) 50%, hsl(var(--champagne-1)) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 40% 30%, hsl(var(--wine-2) / 0.4) 0%, transparent 50%)",
        }}
      />
      <FloatingPetals count={5} color="rose" />
      <CornerRose position="top-right" />
      <CornerRose position="bottom-left" />

      <div className="relative mx-auto max-w-7xl">
        <MandalaDecor size={90} position="center" />
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-accent mb-2 text-2xl text-champagne">Grand Spaces</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Banquet Halls
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Elegant banquet halls for weddings, receptions, and grand celebrations
          </p>
        </motion.div>
        <FloralDivider variant="wine" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {banquets.map((b) => (
            <div className="gsap-card" key={b.name}>
              <VenueCard 
                venue={b} 
                variant="featured" 
              />
            </div>
          ))}
        </div>

        <motion.div className="mt-10 flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <button className="btn-luxury flex items-center gap-2 px-8 py-3 text-sm">
            View All Banquet Halls <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BanquetHallsSection;
