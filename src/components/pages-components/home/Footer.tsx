import { Heart, Sparkles, Phone, Mail, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import FloralDivider from "./FloralDivider";
import RangoliBorder from "./RangoliBorder";
import CornerRose from "./CornerRose";
import FloatingPetals from "./FloatingPetals";

const footerSections = {
  "Venue Types": [
    "Wedding Venues",
    "Birthday Party Halls",
    "Banquet Halls",
    "Engagement Venues",
    "Anniversary Venues",
    "Corporate Events",
  ],
  "Celebration Tips": [
    "Budget Planning Guide",
    "Guest List Management",
    "Vendor Checklist",
    "Wedding Timeline",
    "Seating Arrangements",
    "Invitation Etiquette",
  ],
  "Theme Ideas": [
    "Royal Rajasthani",
    "Pastel Garden",
    "Bollywood Glam",
    "Rustic Bohemian",
    "Beach Tropical",
    "Vintage Romance",
  ],
  "Inspiration": [
    "Decor Themes",
    "Bridal Entry Options",
    "Per-Plate Costs",
    "DJ & Sangeet Night",
    "Birthday Packages",
    "Real Celebrations",
  ],
};

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--champagne-1)) 0%, hsl(var(--champagne-11)) 100%)",
      }}
    >
      {/* Corner roses */}
      <CornerRose position="top-left" />
      <CornerRose position="top-right" />
      <CornerRose position="bottom-left" />
      <CornerRose position="bottom-right" />
      <FloatingPetals count={8} color="rose" />

      {/* Decorative vine borders */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 opacity-30">
        <svg viewBox="0 0 60 800" fill="none" className="h-full w-full" preserveAspectRatio="none">
          <path d="M30 0 C30 100, 10 150, 30 200 C50 250, 10 300, 30 400 C50 500, 10 550, 30 600 C50 650, 30 750, 30 800" stroke="hsl(var(--champagne-10))" strokeWidth="1.5" fill="none"/>
          <circle cx="30" cy="200" r="8" fill="hsl(var(--wine-6))" opacity="0.5"/>
          <circle cx="25" cy="195" r="5" fill="hsl(var(--wine-7))" opacity="0.6"/>
          <circle cx="35" cy="195" r="5" fill="hsl(var(--wine-7))" opacity="0.6"/>
          <circle cx="30" cy="190" r="4" fill="hsl(var(--wine-8))" opacity="0.7"/>
          <ellipse cx="18" cy="210" rx="8" ry="4" fill="hsl(var(--sage-1))" opacity="0.3" transform="rotate(-30 18 210)"/>
          <ellipse cx="42" cy="210" rx="8" ry="4" fill="hsl(var(--sage-1))" opacity="0.3" transform="rotate(30 42 210)"/>
          <circle cx="30" cy="500" r="8" fill="hsl(var(--wine-6))" opacity="0.5"/>
          <circle cx="25" cy="495" r="5" fill="hsl(var(--wine-7))" opacity="0.6"/>
          <circle cx="35" cy="495" r="5" fill="hsl(var(--wine-7))" opacity="0.6"/>
          <circle cx="30" cy="490" r="4" fill="hsl(var(--wine-8))" opacity="0.7"/>
          <ellipse cx="18" cy="510" rx="8" ry="4" fill="hsl(var(--sage-1))" opacity="0.3" transform="rotate(-30 18 510)"/>
          <ellipse cx="42" cy="510" rx="8" ry="4" fill="hsl(var(--sage-1))" opacity="0.3" transform="rotate(30 42 510)"/>
          <ellipse cx="15" cy="100" rx="10" ry="5" fill="hsl(var(--sage-1))" opacity="0.25" transform="rotate(-45 15 100)"/>
          <ellipse cx="45" cy="350" rx="10" ry="5" fill="hsl(var(--sage-1))" opacity="0.25" transform="rotate(45 45 350)"/>
          <ellipse cx="15" cy="650" rx="10" ry="5" fill="hsl(var(--sage-1))" opacity="0.25" transform="rotate(-45 15 650)"/>
        </svg>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 opacity-30">
        <svg viewBox="0 0 60 800" fill="none" className="h-full w-full" preserveAspectRatio="none">
          <path d="M30 0 C30 100, 50 150, 30 200 C10 250, 50 300, 30 400 C10 500, 50 550, 30 600 C10 650, 30 750, 30 800" stroke="hsl(var(--champagne-10))" strokeWidth="1.5" fill="none"/>
          <circle cx="30" cy="250" r="8" fill="hsl(var(--wine-6))" opacity="0.5"/>
          <circle cx="25" cy="245" r="5" fill="hsl(var(--wine-7))" opacity="0.6"/>
          <circle cx="35" cy="245" r="5" fill="hsl(var(--wine-7))" opacity="0.6"/>
          <circle cx="30" cy="240" r="4" fill="hsl(var(--wine-8))" opacity="0.7"/>
          <ellipse cx="18" cy="260" rx="8" ry="4" fill="hsl(var(--sage-1))" opacity="0.3" transform="rotate(-30 18 260)"/>
          <ellipse cx="42" cy="260" rx="8" ry="4" fill="hsl(var(--sage-1))" opacity="0.3" transform="rotate(30 42 260)"/>
          <circle cx="30" cy="550" r="8" fill="hsl(var(--wine-6))" opacity="0.5"/>
          <circle cx="25" cy="545" r="5" fill="hsl(var(--wine-7))" opacity="0.6"/>
          <circle cx="35" cy="545" r="5" fill="hsl(var(--wine-7))" opacity="0.6"/>
          <ellipse cx="18" cy="560" rx="8" ry="4" fill="hsl(var(--sage-1))" opacity="0.3" transform="rotate(-30 18 560)"/>
          <ellipse cx="42" cy="560" rx="8" ry="4" fill="hsl(var(--sage-1))" opacity="0.3" transform="rotate(30 42 560)"/>
          <ellipse cx="45" cy="100" rx="10" ry="5" fill="hsl(var(--sage-1))" opacity="0.25" transform="rotate(45 45 100)"/>
          <ellipse cx="15" cy="400" rx="10" ry="5" fill="hsl(var(--sage-1))" opacity="0.25" transform="rotate(-45 15 400)"/>
        </svg>
      </div>

      {/* Top decorative border */}
      <div className="section-px pt-12">
        <div className="mx-auto max-w-7xl">
          <RangoliBorder />
          <FloralDivider variant="gold" />
        </div>
      </div>

      {/* Emotional tagline */}
      <div className="mt-8 mb-10 text-center section-px">
        <p className="font-accent text-3xl text-champagne md:text-4xl">
          Every celebration is a memory forever
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          We believe every family deserves a beautiful venue for life's most precious moments
        </p>
      </div>

      {/* Main footer content */}
      <div className="section-px pb-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-champagne/15 bg-card p-8 shadow-[var(--shadow-soft)] md:p-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <span className="font-accent text-3xl text-champagne">Venue</span>
                <span className="font-heading text-sm font-semibold tracking-wider text-foreground">
                  FOR EVENT
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                India's most loved venue discovery platform. From dream weddings to joyful birthdays — we make every celebration special.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/20 text-muted-foreground transition-all hover:border-champagne hover:bg-champagne/10 hover:text-champagne"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="mt-5 space-y-2.5">
                <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-champagne transition-colors">
                  <Phone className="h-3.5 w-3.5 text-champagne" /> +91 12345 67890
                </a>
                <a href="mailto:hello@venueforevent.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-champagne transition-colors">
                  <Mail className="h-3.5 w-3.5 text-champagne" /> hello@venueforevent.com
                </a>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-champagne" /> Mumbai, India
                </p>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-foreground">
                  <Sparkles className="h-3 w-3 text-champagne" />
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-wine"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-champagne/15 section-px py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 VenueForEvent. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-wine transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-wine transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-wine transition-colors">Refund Policy</a>
          </div>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="h-3 w-3 fill-wine text-wine" /> for celebrations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
