<<<<<<< Updated upstream
import Link from "next/link";
import { Heart, Sparkles, Phone, Mail, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
=======
import {
  Heart,
  Sparkles,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
} from "lucide-react";
>>>>>>> Stashed changes
import FloralDivider from "./FloralDivider";
import RangoliBorder from "./RangoliBorder";
import CornerRose from "./CornerRose";
import FloatingPetals from "./FloatingPetals";

<<<<<<< Updated upstream
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
=======
const footerSections = {
  "Venue Types": [
    { label: "Wedding Venues", href: "#" },
    { label: "Birthday Party Halls", href: "#" },
    { label: "Banquet Halls", href: "#" },
    { label: "Engagement Venues", href: "#" },
    { label: "Anniversary Venues", href: "#" },
    { label: "Corporate Events", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about-us" },
    { label: "Brand Story", href: "/brand-story" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Career", href: "/career" },
    { label: "Partner With Us", href: "/partner-with-us" },
    { label: "List Your Service", href: "/list-your-service" },
  ],
  Resources: [
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "Company Details", href: "/company-details" },
    { label: "Contact Us", href: "/contact" },
  ],
  Destinations: [
    { label: "Mussoorie", href: "#" },
    { label: "Goa", href: "#" },
    { label: "Manali", href: "#" },
    { label: "Shimla", href: "#" },
    { label: "Mumbai", href: "#" },
    { label: "New Delhi", href: "#" },
  ],
};
>>>>>>> Stashed changes

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden min-h-[320px]"
      style={{
<<<<<<< Updated upstream
        background: "linear-gradient(180deg, hsl(var(--champagne-1)) 0%, hsl(var(--blush-1)) 50%, hsl(var(--champagne-11)) 100%)",
=======
        background:
          "linear-gradient(180deg, hsl(var(--champagne-1)) 0%, hsl(var(--champagne-11)) 100%)",
>>>>>>> Stashed changes
      }}
    >
      <CornerRose position="top-left" />
      <CornerRose position="top-right" />
      <CornerRose position="bottom-left" />
      <CornerRose position="bottom-right" />
      <FloatingPetals count={6} color="rose" />

<<<<<<< Updated upstream
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
=======
      {/* Decorative vine borders */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 opacity-30">
        <svg
          viewBox="0 0 60 800"
          fill="none"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M30 0 C30 100, 10 150, 30 200 C50 250, 10 300, 30 400 C50 500, 10 550, 30 600 C50 650, 30 750, 30 800"
            stroke="hsl(var(--champagne-10))"
            strokeWidth="1.5"
            fill="none"
          />
          <circle
            cx="30"
            cy="200"
            r="8"
            fill="hsl(var(--wine-6))"
            opacity="0.5"
          />
          <circle
            cx="25"
            cy="195"
            r="5"
            fill="hsl(var(--wine-7))"
            opacity="0.6"
          />
          <circle
            cx="35"
            cy="195"
            r="5"
            fill="hsl(var(--wine-7))"
            opacity="0.6"
          />
          <circle
            cx="30"
            cy="190"
            r="4"
            fill="hsl(var(--wine-8))"
            opacity="0.7"
          />
          <ellipse
            cx="18"
            cy="210"
            rx="8"
            ry="4"
            fill="hsl(var(--sage-1))"
            opacity="0.3"
            transform="rotate(-30 18 210)"
          />
          <ellipse
            cx="42"
            cy="210"
            rx="8"
            ry="4"
            fill="hsl(var(--sage-1))"
            opacity="0.3"
            transform="rotate(30 42 210)"
          />
          <circle
            cx="30"
            cy="500"
            r="8"
            fill="hsl(var(--wine-6))"
            opacity="0.5"
          />
          <circle
            cx="25"
            cy="495"
            r="5"
            fill="hsl(var(--wine-7))"
            opacity="0.6"
          />
          <circle
            cx="35"
            cy="495"
            r="5"
            fill="hsl(var(--wine-7))"
            opacity="0.6"
          />
          <circle
            cx="30"
            cy="490"
            r="4"
            fill="hsl(var(--wine-8))"
            opacity="0.7"
          />
          <ellipse
            cx="18"
            cy="510"
            rx="8"
            ry="4"
            fill="hsl(var(--sage-1))"
            opacity="0.3"
            transform="rotate(-30 18 510)"
          />
          <ellipse
            cx="42"
            cy="510"
            rx="8"
            ry="4"
            fill="hsl(var(--sage-1))"
            opacity="0.3"
            transform="rotate(30 42 510)"
          />
          <ellipse
            cx="15"
            cy="100"
            rx="10"
            ry="5"
            fill="hsl(var(--sage-1))"
            opacity="0.25"
            transform="rotate(-45 15 100)"
          />
          <ellipse
            cx="45"
            cy="350"
            rx="10"
            ry="5"
            fill="hsl(var(--sage-1))"
            opacity="0.25"
            transform="rotate(45 45 350)"
          />
          <ellipse
            cx="15"
            cy="650"
            rx="10"
            ry="5"
            fill="hsl(var(--sage-1))"
            opacity="0.25"
            transform="rotate(-45 15 650)"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 opacity-30">
        <svg
          viewBox="0 0 60 800"
          fill="none"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M30 0 C30 100, 50 150, 30 200 C10 250, 50 300, 30 400 C10 500, 50 550, 30 600 C10 650, 30 750, 30 800"
            stroke="hsl(var(--champagne-10))"
            strokeWidth="1.5"
            fill="none"
          />
          <circle
            cx="30"
            cy="250"
            r="8"
            fill="hsl(var(--wine-6))"
            opacity="0.5"
          />
          <circle
            cx="25"
            cy="245"
            r="5"
            fill="hsl(var(--wine-7))"
            opacity="0.6"
          />
          <circle
            cx="35"
            cy="245"
            r="5"
            fill="hsl(var(--wine-7))"
            opacity="0.6"
          />
          <circle
            cx="30"
            cy="240"
            r="4"
            fill="hsl(var(--wine-8))"
            opacity="0.7"
          />
          <ellipse
            cx="18"
            cy="260"
            rx="8"
            ry="4"
            fill="hsl(var(--sage-1))"
            opacity="0.3"
            transform="rotate(-30 18 260)"
          />
          <ellipse
            cx="42"
            cy="260"
            rx="8"
            ry="4"
            fill="hsl(var(--sage-1))"
            opacity="0.3"
            transform="rotate(30 42 260)"
          />
          <circle
            cx="30"
            cy="550"
            r="8"
            fill="hsl(var(--wine-6))"
            opacity="0.5"
          />
          <circle
            cx="25"
            cy="545"
            r="5"
            fill="hsl(var(--wine-7))"
            opacity="0.6"
          />
          <circle
            cx="35"
            cy="545"
            r="5"
            fill="hsl(var(--wine-7))"
            opacity="0.6"
          />
          <ellipse
            cx="18"
            cy="560"
            rx="8"
            ry="4"
            fill="hsl(var(--sage-1))"
            opacity="0.3"
            transform="rotate(-30 18 560)"
          />
          <ellipse
            cx="42"
            cy="560"
            rx="8"
            ry="4"
            fill="hsl(var(--sage-1))"
            opacity="0.3"
            transform="rotate(30 42 560)"
          />
          <ellipse
            cx="45"
            cy="100"
            rx="10"
            ry="5"
            fill="hsl(var(--sage-1))"
            opacity="0.25"
            transform="rotate(45 45 100)"
          />
          <ellipse
            cx="15"
            cy="400"
            rx="10"
            ry="5"
            fill="hsl(var(--sage-1))"
            opacity="0.25"
            transform="rotate(-45 15 400)"
          />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
        <p className="mt-3 text-sm text-muted-foreground">
          We believe every family deserves a beautiful venue for life's most
          precious moments
        </p>
      </div>

      {/* Main footer content */}
      <div className="section-px pb-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-champagne/15 bg-card px-6 py-10 lg:px-6 lg:py-12 xl:p-12 shadow-[var(--shadow-soft)]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4 xl:gap-x-10">
            {/* Brand column */}
            <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="VenueFOR EVENT"
                  className="h-8 lg:h-9 xl:h-10 w-auto"
                />
              </div>
              <p className="mt-4 text-xs lg:text-[13px] xl:text-sm leading-relaxed text-muted-foreground max-w-sm">
                India's most loved venue discovery platform. From dream weddings
                to joyful birthdays — we make every celebration special.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title} className="text-center lg:text-left">
                <h4 className="mb-4 flex items-center justify-center lg:justify-start gap-1.5 text-xs lg:text-[13px] xl:text-sm font-semibold uppercase tracking-wider text-foreground whitespace-nowrap">
                  <Sparkles className="h-3 w-3 text-wine" />
                  {title}
                </h4>
                <ul className="space-y-2 lg:space-y-3">
                  {links.map((link) => (
>>>>>>> Stashed changes
                    <li key={link.label}>
                      <Link
                        href={link.href}
<<<<<<< Updated upstream
                        className="text-sm text-muted-foreground transition-colors hover:text-wine hover:underline underline-offset-2 py-2 sm:py-1 block rounded-md active:bg-wine/5 sm:active:bg-transparent"
=======
                        className="text-[11px] lg:text-[13px] xl:text-sm text-muted-foreground transition-all hover:text-wine hover:pl-1 whitespace-nowrap"
>>>>>>> Stashed changes
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social & Contact Bar */}
          <div className="mt-12 pt-8 border-t border-champagne/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center rounded-xl border border-champagne/20 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-wine hover:bg-wine hover:text-white hover:-translate-y-1 shadow-sm hover:shadow-luxury"
                >
                  <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10">
              <a
                href="tel:+918800842084"
                className="flex items-center gap-2 lg:gap-3 text-xs lg:text-[13px] xl:text-sm text-muted-foreground hover:text-wine transition-colors group/item whitespace-nowrap"
              >
                <div className="flex h-6 w-6 lg:h-7 lg:w-7 items-center justify-center rounded-lg bg-champagne/10 text-champagne group-hover/item:bg-wine group-hover/item:text-white transition-all shadow-sm">
                  <Phone className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                </div>
                <span className="font-medium tracking-wide">
                  +91 88008 42084
                </span>
              </a>
              <a
                href="mailto:hello@venueforevent.com"
                className="flex items-center gap-2 lg:gap-3 text-xs lg:text-[13px] xl:text-sm text-muted-foreground hover:text-wine transition-colors group/item whitespace-nowrap"
              >
                <div className="flex h-6 w-6 lg:h-7 lg:w-7 items-center justify-center rounded-lg bg-champagne/10 text-champagne group-hover/item:bg-wine group-hover/item:text-white transition-all shadow-sm">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium tracking-wide">
                  hello@venueforevent.com
                </span>
              </a>
              <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-[13px] xl:text-sm text-muted-foreground group/item whitespace-nowrap">
                <div className="flex h-6 w-6 lg:h-7 lg:w-7 items-center justify-center rounded-lg bg-champagne/10 text-champagne shadow-sm">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium tracking-wide">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — stacked on mobile */}
      <div className="border-t border-champagne/25 section-px py-4 sm:py-5 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-between sm:items-center text-center">
          <p className="text-xs text-muted-foreground order-2 sm:order-1">
            © {new Date().getFullYear()} VenueForEvent.com. All rights reserved. Homocation Asia Pvt. Ltd.
          </p>
<<<<<<< Updated upstream
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
=======
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a
              href="/privacy-policy"
              className="hover:text-wine transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="hover:text-wine transition-colors"
            >
              Terms & Conditions
            </a>
            <a href="/disclaimer" className="hover:text-wine transition-colors">
              Disclaimer
            </a>
          </div>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="h-3 w-3 fill-wine text-wine" /> for
            celebrations
>>>>>>> Stashed changes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
