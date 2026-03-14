import Link from "next/link";
import { Heart, Sparkles, Phone, Mail, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import FloralDivider from "./FloralDivider";
import RangoliBorder from "./RangoliBorder";
import CornerRose from "./CornerRose";
import FloatingPetals from "./FloatingPetals";

const footerLinkSections = [
  {
    title: "Venue Types",
    links: [
      { label: "Wedding Venues", href: "/" },
      { label: "Birthday Party Halls", href: "/" },
      { label: "Banquet Halls", href: "/" },
      { label: "Engagement Venues", href: "/" },
      { label: "Anniversary Venues", href: "/" },
      { label: "Corporate Events", href: "/" },
      { label: "Conference & MICE", href: "/" },
      { label: "Party Lawns", href: "/" },
      { label: "Destination Weddings", href: "/" },
      { label: "Gala Dinners", href: "/" },
    ],
  },
  {
    title: "Popular Destinations",
    links: [
      { label: "Mumbai", href: "/" },
      { label: "Delhi NCR", href: "/" },
      { label: "Goa", href: "/" },
      { label: "Bengaluru", href: "/" },
      { label: "Jaipur", href: "/" },
      { label: "Chandigarh", href: "/" },
      { label: "Mussoorie", href: "/" },
      { label: "Rishikesh", href: "/" },
      { label: "Udaipur", href: "/" },
      { label: "Kerala", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Brand Story", href: "/brand-story" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Career", href: "/career" },
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "List Your Service", href: "/list-your-service" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "Company Details", href: "/company-details" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden min-h-[320px]"
      style={{
        background: "linear-gradient(180deg, hsl(var(--champagne-1)) 0%, hsl(var(--blush-1)) 50%, hsl(var(--champagne-11)) 100%)",
      }}
    >
      <CornerRose position="top-left" />
      <CornerRose position="top-right" />
      <CornerRose position="bottom-left" />
      <CornerRose position="bottom-right" />
      <FloatingPetals count={6} color="rose" />

      {/* Decorative vines — hidden on very small screens to reduce clutter */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 opacity-15 md:opacity-25 hidden sm:block">
        <svg viewBox="0 0 60 800" fill="none" className="h-full w-full" preserveAspectRatio="none">
          <path d="M30 0 C30 100, 10 150, 30 200 C50 250, 10 300, 30 400 C50 500, 10 550, 30 600 C50 650, 30 750, 30 800" stroke="hsl(var(--champagne))" strokeWidth="1.5" fill="none"/>
          <circle cx="30" cy="200" r="5" fill="hsl(var(--wine) / 0.35)"/>
          <circle cx="30" cy="500" r="5" fill="hsl(var(--wine) / 0.35)"/>
        </svg>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 opacity-15 md:opacity-25 hidden sm:block">
        <svg viewBox="0 0 60 800" fill="none" className="h-full w-full" preserveAspectRatio="none">
          <path d="M30 0 C30 100, 50 150, 30 200 C10 250, 50 300, 30 400 C10 500, 50 550, 30 600 C10 650, 30 750, 30 800" stroke="hsl(var(--champagne))" strokeWidth="1.5" fill="none"/>
          <circle cx="30" cy="250" r="5" fill="hsl(var(--wine) / 0.35)"/>
          <circle cx="30" cy="550" r="5" fill="hsl(var(--wine) / 0.35)"/>
        </svg>
      </div>

      <div className="section-px pt-8 sm:pt-10 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <RangoliBorder />
          <FloralDivider variant="gold" />
        </div>
      </div>

      <div className="mt-4 sm:mt-6 mb-6 sm:mb-8 text-center section-px px-4 sm:px-6">
        <p className="font-accent text-xl sm:text-2xl md:text-3xl text-wine/90">
          Every celebration is a memory forever
        </p>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto px-2">
          India&apos;s most loved venue discovery platform. From dream weddings to joyful birthdays — we make every celebration special.
        </p>
      </div>

      {/* Main footer card — responsive grid */}
      <div className="section-px pb-8 sm:pb-10 px-4 sm:px-6">
        <div
          className="mx-auto max-w-7xl rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] lg:rounded-[2.5rem] border border-champagne/25 bg-card/90 backdrop-blur-md p-5 sm:p-6 md:p-8 lg:p-12 shadow-[var(--shadow-soft)] md:shadow-[var(--shadow-luxury)]"
          style={{ boxShadow: "var(--shadow-soft), 0 0 0 1px hsl(var(--champagne) / 0.08)" }}
        >
          {/* Responsive: 1 col mobile → 2 col sm → 3 col md → 6 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-8 lg:gap-10">
            {/* Brand + contact — full width on mobile, then 1 cell */}
            <div className="space-y-4 sm:space-y-5 text-center sm:text-left">
              <Link href="/" className="inline-block">
                <img src="/logo.png" alt="VenueForEvent" className="h-8 sm:h-9 w-auto mx-auto sm:mx-0" />
              </Link>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xs mx-auto sm:mx-0 sm:max-w-none">
                From dream weddings to corporate events — discover verified venues across India.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                {[
                  { Icon: Instagram, url: "#" },
                  { Icon: Facebook, url: "#" },
                  { Icon: Youtube, url: "#" },
                ].map(({ Icon, url }) => (
                  <a
                    key={url}
                    href={url}
                    aria-label={`Social link`}
                    className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-champagne/30 text-muted-foreground transition-all hover:border-champagne hover:bg-champagne/15 hover:text-champagne active:scale-95"
                  >
                    <Icon className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                  </a>
                ))}
              </div>
              <div className="space-y-2 pt-1 flex flex-col items-center sm:items-start">
                <a href="tel:+918800842084" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-wine transition-colors min-h-[44px] sm:min-h-0 justify-center sm:justify-start">
                  <Phone className="h-4 w-4 text-champagne shrink-0" /> +91-8800842084
                </a>
                <a href="mailto:support@venueforevent.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-wine transition-colors min-h-[44px] sm:min-h-0 justify-center sm:justify-start break-all">
                  <Mail className="h-4 w-4 text-champagne shrink-0" /> support@venueforevent.com
                </a>
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-champagne shrink-0 mt-0.5" />
                  <span>Head Office: New Delhi, India</span>
                </p>
              </div>
            </div>

            {/* Link sections — same responsive grid flow */}
            {footerLinkSections.map((section) => (
              <div key={section.title} className="text-center sm:text-left">
                <h4 className="mb-3 sm:mb-4 flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-champagne shrink-0" />
                  {section.title}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-wine hover:underline underline-offset-2 py-2 sm:py-1 block rounded-md active:bg-wine/5 sm:active:bg-transparent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — stacked on mobile */}
      <div className="border-t border-champagne/25 section-px py-4 sm:py-5 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-between sm:items-center text-center">
          <p className="text-xs text-muted-foreground order-2 sm:order-1">
            © {new Date().getFullYear()} VenueForEvent.com. All rights reserved. Homocation Asia Pvt. Ltd.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 order-1 sm:order-2" aria-label="Legal links">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-wine transition-colors py-1 min-h-[44px] flex items-center justify-center sm:min-h-0">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-muted-foreground hover:text-wine transition-colors py-1 min-h-[44px] flex items-center justify-center sm:min-h-0">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="text-xs text-muted-foreground hover:text-wine transition-colors py-1 min-h-[44px] flex items-center justify-center sm:min-h-0">
              Disclaimer
            </Link>
          </nav>
          <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground order-3">
            Made with <Heart className="h-3.5 w-3.5 fill-wine text-wine" /> for celebrations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
