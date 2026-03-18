"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  SimpleChecklist,
  StepGrid,
  HighlightedQuote,
  OrnateTitle,
  SubTitle,
  HighlightCard,
  Tilt,
} from "@/components/common/InfoComponents";
import {
  Handshake,
  Building2,
  Users,
  Briefcase,
  Globe,
  Settings,
  CheckCircle2,
  TrendingUp,
  Target,
  MapPin,
  Sparkles,
  Search,
  ShieldCheck,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Heart,
  Gem,
  Layout,
  Network,
  Hotel,
  Clapperboard,
  Monitor,
  Coins,
  Share2,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import partnerHero from "@/assets/partner-hero.png";
import Link from "next/link";

export default function PartnerWithUsPage() {
  return (
    <InfoPageLayout
      heroTitle="Partner With Us"
      heroSubtitle="VenueForEvent.com"
      heroImage={partnerHero.src}
      heroDescription="Let's Build India's Most Powerful Event Ecosystem — Together"
      hideWave={true}
    >
      {/* Welcome Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="pt-12 md:pt-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <ContentBlock
          align="center"
          width="full"
          accent="Collaboration. Growth. Excellence."
        >
          <p className="text-3xl leading-relaxed text-wine font-heading mb-10 italic lg:max-w-5xl xl:max-w-6xl mx-auto">
            At VenueForEvent.com, we believe extraordinary events are never
            created alone.
          </p>
          <div className="prose prose-xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto text-center italic space-y-8">
            <p className="">
              Behind every royal palace wedding in Rajasthan, every beach resort
              wedding in Goa, every conference hall in New Delhi, and every
              corporate offsite resort in Uttarakhand — there is a network of
              venues, planners, hospitality brands, technology partners, and
              service experts working in sync.
            </p>
            <p>
              We’re building a structured, scalable, and trusted event
              marketplace across India — and we invite you to grow with us.
            </p>
            <div className="pt-12 text-center">
              <p className="text-wine text-xs font-bold uppercase tracking-widest mb-10">
                Whether you’re a:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:max-w-6xl mx-auto">
                {[
                  { label: "Venue owner", icon: Building2 },
                  { label: "Resort chain", icon: Hotel },
                  { label: "Wedding planner", icon: Heart },
                  { label: "Corporate event agency", icon: Briefcase },
                  { label: "Production company", icon: Clapperboard },
                  { label: "Hospitality brand", icon: Award },
                  { label: "Technology provider", icon: Monitor },
                  { label: "Investor", icon: Coins },
                  { label: "Strategic distribution partner", icon: Share2 },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 bg-white border border-champagne/10 rounded-3xl shadow-sm hover:shadow-xl hover:bg-ivory/20 transition-all group"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-ivory group-hover:bg-wine group-hover:text-white text-wine flex items-center justify-center mb-4 transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <span className="text-[11px] md:text-xs font-bold text-wine/80 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="text-2xl font-heading text-wine italic mt-16 animate-pulse-slow">
                There’s an opportunity to collaborate.
              </p>
            </div>
          </div>
        </ContentBlock>

        <Tilt className="mt-20">
          <div className="bg-white/60 backdrop-blur-xl px-6 py-10 md:p-20 rounded-[2.5rem] md:rounded-[5rem] border border-white/40 shadow-luxury relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-wine/5 rounded-full blur-[100px] group-hover:bg-wine/10 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
              <div className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 rounded-[2rem] md:rounded-[2.5rem] bg-wine text-white flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Handshake className="h-10 w-10 md:h-12 md:w-12" />
              </div>
              <div className="text-lg md:text-2xl font-medium italic text-foreground/90 leading-snug">
                "We provide the platform, the technology, and the visibility.
                You provide the excellence. Together, we create India's most
                powerful event ecosystem."
              </div>
            </div>
          </div>
        </Tilt>
      </SectionWrapper>

      {/* Why Partner With Us */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="Why Partner With VenueForEvent.com?"
          accent="Industry Landscape"
        />

        <div className="max-w-5xl mx-auto text-center mb-16 px-6">
          <p className="text-2xl text-muted-foreground italic leading-relaxed">
            India’s wedding and corporate event market is expanding rapidly
            across destinations like:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Mussoorie, Shimla, Manali, Nainital",
              "Goa, Rajasthan, Kerala",
              "Mumbai, New Delhi, Bengaluru",
              "Chandigarh, Amritsar, Dehradun",
              "Himachal, Uttarakhand, Maharashtra",
            ].map((loc, i) => (
              <div
                key={i}
                className="p-6 bg-ivory/30 rounded-2xl border border-champagne/10 italic text-wine font-medium"
              >
                {loc}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-wine/5 p-10 md:p-16 rounded-[3rem] md:rounded-[5rem] border border-wine/10 mb-24">
          <h4 className="font-heading text-2xl font-bold text-center mb-10 text-wine">
            Demand is rising for:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Best wedding venues in Mussoorie",
              "Destination wedding resorts in Goa",
              "Luxury marriage gardens in Jaipur",
              "Forest wedding venues in Uttarakhand",
              "Conference halls in New Delhi",
              "MICE event venues in Mumbai",
              "Corporate wellness retreats in Kerala",
              "Executive boardroom rentals in Bengaluru",
              "Product launch venues in Mumbai",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-champagne/10 hover:border-wine/20 transition-all"
              >
                <Sparkles
                  size={14}
                  className="text-wine shrink-0 group-hover:rotate-12 transition-transform"
                />
                <span className="text-sm font-medium italic opacity-80">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center font-heading text-wine italic text-xl">
            But the market remains fragmented.
            <br />
            We bring structure, technology, SEO visibility, and verified
            connections.
          </p>
        </div>
      </SectionWrapper>

      {/* Partnership Categories */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle
          title="Partnership Categories"
          accent="Collaboration Models"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-12">
          {/* 🏰 Venue Partners */}
          <HighlightCard
            icon={Building2}
            title="🏰 Venue Partners"
            content={
              <div className="space-y-6 text-left">
                <p className="text-xs font-bold text-wine/60 uppercase tracking-widest">
                  Own or manage:
                </p>
                <ul className="grid grid-cols-1 gap-1 text-[11px] italic opacity-70">
                  <li>• Heritage fort wedding venues in Rajasthan</li>
                  <li>• 5 star wedding hotels in Manali</li>
                  <li>• Luxury villas for weddings in Coorg</li>
                  <li>• Banquet halls in Chandigarh</li>
                  <li>• Convention centers in Mumbai</li>
                  <li>• Seminar venues with accommodation in Shimla</li>
                  <li>• Gala dinner venues in Bengaluru</li>
                  <li>• Corporate offsite resorts in Uttarakhand</li>
                </ul>
                <p className="text-xs font-bold text-wine">We help you:</p>
                <SimpleChecklist
                  columns={1}
                  items={[
                    "Increase qualified inquiries",
                    "Fill mid-week corporate slots",
                    "Promote all-inclusive wedding packages",
                    "Improve digital discoverability",
                    "Access both wedding & corporate clients",
                  ]}
                />
                <Link
                  href="/list-your-service"
                  className="inline-flex items-center gap-2 mt-4 text-wine font-bold hover:underline transition-all"
                >
                  Visit: List Your Venue <ArrowRight size={14} />
                </Link>
              </div>
            }
          />

          {/* 🎉 Service & Vendor Partners */}
          <HighlightCard
            icon={Users}
            title="🎉 Service & Vendor Partners"
            content={
              <div className="space-y-6 text-left">
                <p className="text-xs font-bold text-wine/60 uppercase tracking-widest">
                  If you provide:
                </p>
                <ul className="grid grid-cols-1 gap-1 text-[11px] italic opacity-70">
                  <li>• Top wedding planners in Rajasthan</li>
                  <li>• Theme wedding decorators in Chandigarh</li>
                  <li>• Wedding catering services in Amritsar</li>
                  <li>• Best wedding photographers in Punjab</li>
                  <li>• Corporate event management in Maharashtra</li>
                  <li>• Dealers meet organizers in New Delhi</li>
                  <li>• Team building activities in Rishikesh</li>
                  <li>• Exhibition production in Mumbai</li>
                </ul>
                <p className="text-xs font-bold text-wine">
                  We connect you with high-intent clients.
                </p>
                <Link
                  href="/list-your-service"
                  className="inline-flex items-center gap-2 mt-4 text-wine font-bold hover:underline transition-all"
                >
                  Visit: List Your Service <ArrowRight size={14} />
                </Link>
              </div>
            }
          />

          {/* 🏢 Corporate & Enterprise Partnerships */}
          <HighlightCard
            icon={Briefcase}
            title="🏢 Corporate & Enterprise"
            content={
              <div className="space-y-6 text-left">
                <p className="text-xs font-bold text-wine/60 uppercase tracking-widest">
                  We collaborate with:
                </p>
                <ul className="text-[11px] italic opacity-70 mb-4 inline-flex flex-wrap gap-x-2">
                  <li>HR departments •</li>
                  <li>Corporate travel managers •</li>
                  <li>Event procurement teams •</li>
                  <li>Marketing & activation agencies</li>
                </ul>
                <p className="text-xs font-bold text-wine">
                  Supporting needs like:
                </p>
                <SimpleChecklist
                  columns={1}
                  items={[
                    "Annual corporate retreat in Himachal Pradesh",
                    "Residential conference packages in Kerala",
                    "Business meeting rooms in Mumbai",
                    "Large capacity auditoriums in New Delhi",
                    "Networking event venues in Bengaluru",
                  ]}
                />
                <p className="text-xs italic opacity-60 mt-4 leading-relaxed">
                  We can create structured booking partnerships and preferred
                  venue programs.
                </p>
              </div>
            }
          />

          {/* 🤝 Strategic Hospitality Alliances */}
          <HighlightCard
            icon={Globe}
            title="🤝 Strategic Hospitality"
            content={
              <div className="text-left space-y-4">
                <p className="text-xs font-bold text-wine/60 uppercase tracking-widest">
                  We welcome partnerships with:
                </p>
                <ul className="text-[11px] italic opacity-70">
                  <li>
                    Resort chains • Hotel groups • Destination management
                    companies • Regional tourism boards • Luxury property
                    aggregators
                  </li>
                </ul>
                <p className="text-xs font-bold text-wine">
                  Together, we can promote:
                </p>
                <SimpleChecklist
                  columns={1}
                  items={[
                    "Destination wedding cost packages in Goa",
                    "Royal palace weddings in Rajasthan",
                    "Riverside wedding spots in Rishikesh",
                    "Workation resorts in Uttarakhand",
                    "Tech-ready conference spaces in Bengaluru",
                  ]}
                />
              </div>
            }
          />

          {/* 💻 Technology & Integration Partners */}
          <HighlightCard
            icon={Settings}
            title="💻 Technology & Integration"
            content={
              <div className="text-left space-y-4">
                <p className="text-sm opacity-80 italic">
                  We are building a scalable tech-first ecosystem. We
                  collaborate with:
                </p>
                <SimpleChecklist
                  columns={1}
                  items={[
                    "CRM providers",
                    "Event tech platforms",
                    "AV & hybrid event solutions",
                    "Payment & booking integrations",
                    "AI-driven analytics providers",
                  ]}
                />
                <div className="pt-4 border-t border-champagne/10 italic text-xs opacity-60">
                  If your technology supports event execution, let’s explore
                  synergy.
                </div>
              </div>
            }
          />

          {/* 📈 Investor & Growth Partnerships */}
          <HighlightCard
            icon={TrendingUp}
            title="📈 Investor & Growth"
            content={
              <div className="text-left space-y-4">
                <p className="text-sm opacity-80 italic leading-relaxed">
                  VenueForEvent.com operates under Homocation Asia Pvt. Ltd.,
                  bringing structured governance and hospitality experience.
                </p>
                <p className="text-xs font-bold text-wine">We are open to:</p>
                <ul className="text-[11px] italic opacity-70">
                  <li>
                    Strategic growth capital • Regional expansion partners •
                    Hospitality ecosystem investors • Technology collaboration
                  </li>
                </ul>
                <div className="pt-4 border-t border-champagne/10 italic text-xs opacity-60 leading-relaxed">
                  India’s event industry — especially weddings and MICE —
                  presents high-value transaction potential.
                </div>
              </div>
            }
          />
        </div>

        <div className="mt-20">
          <HighlightedQuote>
            From beach resort weddings in Kerala to conference halls in New
            Delhi, we are building scalable infrastructure.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* What Makes Us Different? */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="What Makes Us Different?"
          accent="The Pillars of Growth"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {[
            {
              title: "1️⃣ Dual Focus",
              subtitle: "Weddings + Corporate",
              desc: "Most platforms specialize in either weddings or conferences. We combine social celebrations and MICE events to double inventory utility and revenue potential.",
              icon: Gem,
            },
            {
              title: "2️⃣ SEO demand",
              subtitle: "Organic Demand Engine",
              desc: "We build high-visibility digital presence for localized searches like 'Best wedding venues in Nainital', driving inquiries without overdependence on paid ads.",
              icon: Search,
            },
            {
              title: "3️⃣ Structured Network",
              subtitle: "Verified & Reliable",
              desc: "We prioritize quality, verified partnerships, and transparent communication. We are building an ecosystem — not a listing directory.",
              icon: ShieldCheck,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <Tilt>
                <div className="p-10 rounded-[3rem] bg-white border border-champagne/10 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col items-center">
                  <div className="h-16 w-16 rounded-3xl bg-ivory text-wine flex items-center justify-center mb-8 group-hover:bg-wine group-hover:text-white transition-all transform group-hover:rotate-12">
                    <item.icon size={32} />
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-2 whitespace-nowrap">
                    {item.title}
                  </h4>
                  <p className="text-wine text-xs font-bold uppercase tracking-widest mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-muted-foreground italic text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* How Partnership Works */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle
          title="How Partnership Works"
          accent="Simple Onboarding Process"
        />
        <div className="pt-8">
          <StepGrid
            steps={[
              {
                title: "Connect With Us",
                desc: "Submit your details. Our team will respond within 48 working hours.",
                icon: MessageCircle,
              },
              {
                title: "Strategic Discussion",
                desc: "We understand your service category, cities, growth goals, and target client segment.",
                icon: Users,
              },
              {
                title: "Onboarding & Integration",
                desc: "Venue optimization, profile creation, corporate agreements, or technical setup.",
                icon: Settings,
              },
              {
                title: "Growth & Visibility",
                desc: "Capture peak season demand, expand city coverage, and launch joint campaigns.",
                icon: CheckCircle2,
              },
            ]}
          />
        </div>
      </SectionWrapper>

      {/* Expansion Coverage */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Expansion Coverage" accent="Pan-India Network" />
        <div className="max-w-4xl mx-auto text-center mb-16 px-6">
          <p className="text-xl text-muted-foreground italic">
            We are aggressively building presence across India&apos;s most
            active event corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
          <div className="space-y-12">
            <div className="p-8 rounded-[3rem] bg-wine/5 border border-wine/10 flex flex-col items-center sm:items-start">
              <h4 className="font-heading text-lg sm:text-xl font-bold text-wine mb-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6" /> Hill Stations &
                Destinations
              </h4>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                {[
                  "Mussoorie",
                  "Shimla",
                  "Manali",
                  "Srinagar",
                  "Gulmarg",
                  "Nainital",
                  "Dalhousie",
                  "Munnar",
                  "Coorg",
                  "Ooty",
                ].map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 bg-white rounded-xl text-xs font-bold shadow-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-[3rem] bg-dark-accent text-white shadow-xl flex flex-col items-center sm:items-start">
              <h4 className="font-heading text-lg sm:text-xl font-bold text-champagne mb-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6" /> Metros &
                Corporate Hubs
              </h4>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                {[
                  "New Delhi",
                  "Mumbai",
                  "Bengaluru",
                  "Chandigarh",
                  "Amritsar",
                  "Dehradun",
                ].map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-xs font-bold border border-white/20"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-ivory/50 p-6 sm:p-10 rounded-[3rem] border border-champagne/20 h-full flex flex-col items-center sm:items-start">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-wine mb-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Globe className="h-5 w-5 sm:h-6 sm:w-6" /> High-Demand States
            </h4>
            <div className="flex flex-wrap justify-center sm:justify-start gap-y-4 gap-x-6">
              {[
                "Rajasthan",
                "Goa",
                "Kerala",
                "Uttarakhand",
                "Himachal",
                "Maharashtra",
                "Karnataka",
                "Tamil Nadu",
                "Punjab",
                "Haryana",
                "Uttar Pradesh",
                "Gujarat",
                "West Bengal",
                "Andhra Pradesh",
              ].map((state) => (
                <div
                  key={state}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <div className="h-1.5 w-1.5 bg-wine rounded-full group-hover:scale-150 transition-all" />
                  <span className="text-sm font-medium opacity-80 group-hover:opacity-100 group-hover:text-wine transition-all">
                    {state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Partner Now? */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-40 -mt-16 relative z-20 rounded-t-[4rem] shadow-luxury"
        sideDecorations
      >
        <OrnateTitle title="Why Partner Now?" accent="Timing is Everything" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
            <div className="w-full lg:w-3/5 text-left">
              <p className="text-lg md:text-xl text-muted-foreground italic mb-10">
                Peak bookings are happening months in advance for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Destination wedding resorts in Goa",
                  "Heritage fort weddings in Rajasthan",
                  "Corporate wellness retreats in Kerala",
                  "Convention centers in Mumbai",
                  "Seminar halls for rent in New Delhi",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-champagne/10 text-sm font-medium text-wine shadow-sm"
                  >
                    <CheckCircle2 size={16} /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <HighlightedQuote>
                The earlier you partner, the stronger your visibility before
                high-demand cycles.
              </HighlightedQuote>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Let's Build Together / Final CTA */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-40 -mt-16 relative z-30 rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"
        id="final-branding"
        sideDecorations
      >
        <div className="text-center space-y-16 max-w-6xl mx-auto px-6">
          <OrnateTitle
            title="Let's Build Together"
            accent="Ready to Grow?"
            variant="dark"
          />

          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white shadow-xl border border-champagne/20 max-w-4xl mx-auto">
            <div className="space-y-8">
              <p className="text-lg md:text-2xl font-heading font-medium leading-relaxed italic text-foreground text-center">
                If you believe in professional growth, transparent
                collaboration, and hospitality excellence, VenueForEvent.com is
                your ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 px-4 w-full">
                {[
                  "Growth",
                  "Transparency",
                  "Scalable Distribution",
                  "Hospitality Excellence",
                  "Long-term Equity",
                ].map((v) => (
                  <div
                    key={v}
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-ivory text-wine text-[10px] sm:text-xs font-bold shadow-sm border border-champagne/10 whitespace-nowrap w-fit"
                  >
                    <CheckCircle2 size={12} className="shrink-0" /> {v}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-12 space-y-12">
            <h4 className="font-heading text-3xl text-champagne font-bold">
              🚀 Start the Conversation
            </h4>
            <div className="flex flex-col items-center gap-4 px-2 sm:px-4">
              <a
                href="mailto:partnerships@venueforevent.com"
                className="flex flex-row items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-champagne text-dark-accent font-bold hover:scale-105 transition-all shadow-luxury text-xs sm:text-base w-fit max-w-full"
              >
                <Mail size={16} className="shrink-0" />{" "}
                <span className="truncate">partnerships@venueforevent.com</span>
              </a>
              <a
                href="tel:+918800842084"
                className="flex flex-row items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all text-sm sm:text-base w-fit"
              >
                <Phone size={16} className="shrink-0" />{" "}
                <span>+91-8800842084</span>
              </a>
              <a
                href="https://wa.me/918800842084"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-green-600/20 border border-green-500/30 text-white font-bold hover:bg-green-600/30 transition-all text-[11px] sm:text-base w-fit max-w-full"
              >
                <MessageCircle size={16} className="shrink-0" />
                <span className="whitespace-nowrap text-center">
                  WhatsApp Us for Quick Discussion
                </span>
              </a>
            </div>
            <p className="text-sm italic text-white/60">
              “We treat every partnership inquiry with confidentiality and
              strategic focus.”
            </p>
          </div>

          <div className="mt-10 sm:mt-20 relative py-12 sm:py-20 isolate">
            <div className="absolute -inset-24 bg-white/5 blur-[100px] rounded-full -z-10" />
            <div className="text-center w-full flex flex-col items-center space-y-8">
              <div className="space-y-6 w-full px-4 sm:px-12 max-w-6xl mx-auto">
                <h4 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black text-white uppercase tracking-tight sm:tracking-normal lg:tracking-[0.05em] 2xl:tracking-[0.1em] leading-tight break-keep">
                  VenueForEvent.com
                </h4>
                <p className="prose prose-sm sm:prose-base text-white/50 w-full max-w-none italic leading-relaxed">
                  From royal palace weddings in Rajasthan to corporate
                  conferences in New Delhi • From beach resort celebrations in
                  Goa to executive boardroom rentals in Bengaluru
                </p>
                <p className="font-heading text-lg sm:text-xl font-bold text-champagne italic leading-tight">
                  We are building the future of event discovery in India.
                </p>
                <p className="font-heading text-xl sm:text-2xl font-bold text-white italic pt-4 leading-snug">
                  Partner with us — and grow beyond boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
