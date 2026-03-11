import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";
import CornerRose from "./CornerRose";
import HangingGarland from "./HangingGarland";
import FloatingPetals from "./FloatingPetals";
import birthdayHall from "@/assets/birthday-hall.jpg";
import { Users, MapPin, ArrowRight } from "lucide-react";
import { VenueCard } from "../../common/VenueCard";

const halls = [
  { name: "The Grand Birthday Arena", location: "Mumbai", capacity: "50–200", price: "₹25,000", image: birthdayHall, tag: "Most Booked" },
  { name: "Funland Party Hall", location: "Delhi", capacity: "30–100", price: "₹18,000", image: birthdayHall, tag: "Kids Special" },
  { name: "Starlight Banquet", location: "Bangalore", capacity: "100–400", price: "₹45,000", image: birthdayHall, tag: "Premium" },
  { name: "Rainbow Party House", location: "Jaipur", capacity: "40–150", price: "₹22,000", image: birthdayHall, tag: "Family Fav" },
  { name: "Celebration Square", location: "Goa", capacity: "60–250", price: "₹35,000", image: birthdayHall, tag: "Beachside" },
  { name: "Happy Hours Hall", location: "Hyderabad", capacity: "50–200", price: "₹20,000", image: birthdayHall, tag: "Budget" },
  { name: "Sparkle & Shine", location: "Lucknow", capacity: "30–120", price: "₹15,000", image: birthdayHall, tag: "Themed" },
  { name: "Dreamland Venue", location: "Chennai", capacity: "80–300", price: "₹40,000", image: birthdayHall, tag: "Luxury" },
];

const BirthdayHallsSection = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--champagne-2)) 0%, hsl(var(--gold-1)) 50%, hsl(var(--champagne-3)) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 60% 20%, hsl(var(--gold-2) / 0.5) 0%, transparent 45%), radial-gradient(ellipse at 30% 80%, hsl(var(--champagne-4) / 0.4) 0%, transparent 40%)",
        }}
      />
      <FloatingPetals count={6} color="gold" />
      <CornerRose position="top-left" />
      <CornerRose position="bottom-right" />
      <div className="absolute left-0 right-0 top-0">
        <HangingGarland variant="marigold" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-accent mb-2 text-2xl text-champagne">Celebrate</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            Birthday Party Halls
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            From kids' themed parties to milestone celebrations — find the perfect hall
          </p>
        </motion.div>
        <FloralDivider variant="gold" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {halls.map((hall, i) => (
            <motion.div
              key={hall.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <VenueCard 
                venue={{
                  name: hall.name,
                  location: hall.location,
                  price: hall.price,
                  image: hall.image,
                  type: hall.tag
                }} 
                variant="standard" 
              />
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10 flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <button className="btn-luxury flex items-center gap-2 px-8 py-3 text-sm">
            View All Birthday Halls <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayHallsSection;
