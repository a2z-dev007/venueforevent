import { motion } from "framer-motion";
import FloralDivider from "./FloralDivider";
import CornerRose from "./CornerRose";
import HangingGarland from "./HangingGarland";
import FloatingPetals from "./FloatingPetals";
import birthdayHall from "@/assets/birthday-hall.jpg";
import { Users, MapPin, ArrowRight } from "lucide-react";

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

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {halls.map((hall, i) => (
            <motion.div
              key={hall.name}
              className="venue-card group cursor-pointer overflow-hidden rounded-2xl border border-champagne/15 bg-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={hall.image.src} alt={hall.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/60 via-transparent to-transparent" />
                <div className="absolute left-2.5 top-2.5 rounded-full bg-wine px-2.5 py-0.5 text-[10px] font-medium text-wine-foreground md:text-xs md:px-3 md:py-1">
                  {hall.tag}
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground md:text-base line-clamp-1">{hall.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {hall.location}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-heading text-sm font-semibold text-wine md:text-base">{hall.price}</p>
                </div>
              </div>
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
