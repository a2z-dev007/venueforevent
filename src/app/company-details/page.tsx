"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  SimpleChecklist,
  OrnateTitle,
  SubTitle,
  StepGrid,
  HighlightCard,
  Tilt,
  HighlightedQuote,
  AlternatingGrid,
} from "@/components/common/InfoComponents";
import {
  ShieldCheck,
  Lock,
  FileText,
  Heart,
  Briefcase,
  Zap,
  Eye,
  Users,
  Building2,
  Landmark,
  MapPin,
  Star,
  Globe,
  TrendingUp,
  Rocket,
  Shield,
  Activity,
  CheckCircle2,
  Layout,
  Search,
  MessageSquare,
  Compass,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import companyDetailsHero from "@/assets/company-details-hero.png";
import corporateBg from "@/assets/banquet-hall.jpg";
import socialBg from "@/assets/palace-wedding.jpg";
import parallax1 from "@/assets/celebration.jpg";
import parallax2 from "@/assets/hero-venue.jpg";
import parallax3 from "@/assets/celebration-sparklers.jpg";

export default function CompanyDetailsPage() {
  return (
    <InfoPageLayout
      heroTitle="Company Details"
      heroSubtitle="VenueForEvent.com"
      heroImage={companyDetailsHero.src}
      heroDescription="Empowering Events Across India — Weddings, Corporate Gatherings & Experiences."
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
          accent="Welcome to VenueForEvent.com"
        >
          <p className="text-xl md:text-3xl leading-relaxed text-wine font-heading mb-10 italic lg:max-w-5xl xl:max-w-6xl mx-auto">
            Welcome to VenueForEvent.com, a smart, transparent, and scalable
            event venue discovery & booking platform designed to revolutionize
            how individuals, families, event planners, and corporate teams find
            the perfect space.
          </p>
          <div className="prose prose-xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto text-center italic space-y-8">
            <p>
              Whether it’s a royal palace wedding in Rajasthan, a luxury
              marriage garden in Mussoorie, a seminar hall in New Delhi, or a
              corporate offsite resort in Kerala, we connect dreams with the
              right space.
            </p>
            <p>
              Our parent company,{" "}
              <span className="text-wine font-bold">
                Homocation Asia Pvt. Ltd.
              </span>
              , is the legal entity behind VenueForEvent.com—bringing
              credibility, business discipline, and long-term vision to the
              brand.
            </p>
          </div>
        </ContentBlock>

        <Tilt className="mt-20">
          <div className="bg-white/60 backdrop-blur-xl px-6 py-10 md:p-20 rounded-[2.5rem] md:rounded-[5rem] border border-white/40 shadow-luxury relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-wine/5 rounded-full blur-[100px] group-hover:bg-wine/10 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
              <div className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 rounded-[2rem] md:rounded-[2.5rem] bg-wine text-white flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Building2 className="h-10 w-10 md:h-12 md:w-12" />
              </div>
              <div className="text-lg md:text-2xl font-medium italic text-foreground/90 leading-snug">
                "VenueForEvent.com brings together social and corporate event
                requirements on one intuitive, SEO-optimised platform, backed by
                real technology and real hospitality expertise."
              </div>
            </div>
          </div>
        </Tilt>
      </SectionWrapper>

      {/* Corporate Overview Section */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="Corporate Overview"
          accent="Legal Identity & Structure"
        />

        <div className="mb-24">
          <StepGrid
            steps={[
              {
                title: "Legal Entity",
                desc: "Homocation Asia Private Limited",
                icon: Landmark,
              },
              { title: "Brand", desc: "VenueForEvent.com", icon: Star },
              {
                title: "CIN",
                desc: "U55101DL2024PTC435007",
                icon: FileText,
              },
              {
                title: "Status",
                desc: "Active Private Limited Company (Incorporated: 05 Aug 2024)",
                icon: Activity,
              },
              {
                title: "Nature of Business",
                desc: "Event venue platform, hospitality tech, event services marketplace",
                icon: Briefcase,
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="bg-ivory/50 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-champagne/20 shadow-inner relative h-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="absolute top-10 right-10 text-champagne/10 hidden md:block">
                  <MapPin size={100} />
                </div>
                <h4 className="font-heading text-2xl font-bold mb-6 text-wine">
                  Registered Office
                </h4>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground relative z-10 italic">
                  Plot No-18, D Block, Qutub Vihar Phase-1, Sector 19, South
                  West Delhi – 110071, India. Responsible for governing our
                  pan-India operations with discipline and transparency.
                </p>
              </div>
            </Tilt>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="bg-wine/5 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-wine/10 shadow-inner relative h-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="absolute top-10 right-10 text-wine/10 hidden md:block">
                  <TrendingUp size={100} />
                </div>
                <h4 className="font-heading text-2xl font-bold mb-6 text-wine">
                  Brand Mission
                </h4>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground relative z-10 italic">
                  Dedicated to revolutionizing event discovery across South Asia
                  through structured metadata, high-performance technology, and
                  a customer-first approach.
                </p>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Identity & Core Markets (Gradient) */}
      <SectionWrapper
        variant="gradient"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Our Identity" accent="Social & Corporate Synergy" />
        <AlternatingGrid
          items={[
            {
              title: "Social Celebrations – Our Emotional Core",
              icon: Heart,
              text: (
                <div className="space-y-6">
                  <p className="text-xl italic leading-relaxed">
                    Lifetime celebrations deserve the perfect backdrop. From
                    grand destination weddings to intimate family milestones.
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Destination weddings & engagement parties",
                      "Mehendi & sangeet ceremonies",
                      "Intimate weddings & grand receptions",
                      "Themed celebration venues across India",
                    ]}
                  />
                  <div className="pt-6 border-t border-wine/10 text-xl font-heading text-foreground italic leading-snug">
                    "We transform venue searching from a transaction into a
                    dream exploration."
                  </div>
                </div>
              ),
              image: socialBg.src,
            },
            {
              title: "Corporate Excellence – Structured Results",
              icon: Briefcase,
              text: (
                <div className="space-y-6">
                  <p className="text-xl italic leading-relaxed">
                    Precision, technology, and curated data to support
                    high-impact business gatherings.
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Conferences & MICE programs",
                      "Product launches & seminars",
                      "Team-building & corporate retreats",
                      "Gala dinners & annual corporate events",
                    ]}
                  />
                  <div className="pt-6 border-t border-wine/10 text-muted-foreground italic text-lg leading-relaxed">
                    Delivering scalable execution for professional event
                    requirements.
                  </div>
                </div>
              ),
              image: corporateBg.src,
            },
          ]}
        />

        <div className="mt-24 bg-white/40 backdrop-blur-md p-8 md:p-16 rounded-[3.5rem] md:rounded-[5rem] border border-wine/10 text-center">
          <h4 className="font-heading text-2xl md:text-3xl text-wine font-bold mb-10">
            Serving Key Destinations Across India
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
            <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-champagne/10">
              <SubTitle className="text-wine text-lg">
                Hill & Destination Cities
              </SubTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  "Mussoorie",
                  "Shimla",
                  "Manali",
                  "Nainital",
                  "Srinagar",
                  "Gulmarg",
                  "Dalhousie",
                  "Munnar",
                  "Coorg",
                  "Ooty",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-bold px-3 py-1 bg-ivory rounded-full text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-champagne/10">
              <SubTitle className="text-wine text-lg">
                Metros & Commercial Hubs
              </SubTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  "New Delhi",
                  "Mumbai",
                  "Bengaluru",
                  "Chandigarh",
                  "Amritsar",
                  "Dehradun",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-bold px-3 py-1 bg-ivory rounded-full text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-champagne/10">
              <SubTitle className="text-wine text-lg">
                States with Diversified Demand
              </SubTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  "Rajasthan",
                  "Goa",
                  "Kerala",
                  "Uttarakhand",
                  "Himachal Pradesh",
                  "Maharashtra",
                  "Karnataka",
                  "Tamil Nadu",
                  "Punjab",
                  "Haryana",
                  "Uttar Pradesh",
                  "Gujarat",
                  "West Bengal",
                  "Andhra Pradesh",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-bold px-3 py-1 bg-ivory rounded-full text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What We Do Section */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="What We Do" accent="Platform Capabilities" />
        <ContentBlock align="center" width="medium">
          <p className="text-xl md:text-2xl text-muted-foreground italic mb-16 text-center">
            VenueForEvent.com functions as a comprehensive venue discovery,
            comparison, and booking platform with technology and UX designed to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Verified Listings",
                desc: "Offer verified venue listings for social and corporate events.",
                icon: CheckCircle2,
              },
              {
                title: "Rich Filtering",
                desc: "Integrate rich filters & comparison tools for better decision-making.",
                icon: Search,
              },
              {
                title: "Detailed Profiles",
                desc: "Provide detailed venue profiles including capacity, packages, and pricing.",
                icon: Layout,
              },
              {
                title: "Direct Connection",
                desc: "Connect users directly with venues and partners seamlessly.",
                icon: MessageSquare,
              },
              {
                title: "Curated Proposals",
                desc: "Facilitate curated responses & proposals based on event requirements.",
                icon: FileText,
              },
              {
                title: "Guided Support",
                desc: "Support site visits, virtual tours, and guided decision support.",
                icon: Compass,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[3rem] bg-ivory/30 border border-champagne/10 text-center"
              >
                <div className="h-14 w-14 rounded-2xl bg-white text-wine flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="font-heading font-bold text-wine mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xl font-heading text-wine italic max-w-3xl mx-auto">
            "We go beyond simple listings — we help planners make confident
            decisions faster, saving hours of research and negotiation."
          </p>
        </ContentBlock>
      </SectionWrapper>

      {/* Vision & Mission Section */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax1.src}
        sideDecorations
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 h-full flex flex-col"
          >
            <ContentBlock
              title="Our Mission"
              accent="The Purpose"
              width="full"
              align="mobile-center"
              className="flex-1 flex flex-col"
            >
              <div className="space-y-8">
                <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground mb-8 italic text-center lg:text-left">
                  To simplify venue discovery and event planning across India
                  and South Asia through a technology-driven, transparent, and
                  user-centric marketplace.
                </p>
                <SimpleChecklist
                  items={[
                    "Make event planning frictionless with data-led insights.",
                    "Empower clients to evaluate multiple professional venues.",
                    "Provide technology that drives better outcomes for users.",
                  ]}
                />
              </div>
            </ContentBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 h-full flex flex-col"
          >
            <ContentBlock
              title="Our Vision"
              accent="The Future"
              width="full"
              align="mobile-center"
              className="flex-1 flex flex-col"
            >
              <div className="h-full flex flex-col justify-center bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-wine/10">
                <p className="text-lg md:text-2xl leading-relaxed text-wine mb-0 italic text-center lg:text-left font-heading font-medium">
                  To become India's most trusted and user-centric event venue
                  discovery platform — unifying weddings, celebrations,
                  corporate MICE, and experiential bookings under one ecosystem.
                </p>
              </div>
            </ContentBlock>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Why We Exist (Dark) */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
        sideDecorations
      >
        <OrnateTitle
          title="Why VenueForEvent.com Exists"
          accent="Solving Real-World Problems"
          variant="dark"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 items-stretch">
          {[
            {
              title: "Solve Complexity",
              icon: Zap,
              desc: "Planning events today still involves juggling emails, phone calls, and spreadsheets. We simplify that with intuitive tools.",
            },
            {
              title: "Bring Transparency",
              icon: Eye,
              desc: "We show clear pricing ranges, capacities, visuals, and service details so decision-making is grounded in facts.",
            },
            {
              title: "Connect with Trust",
              icon: ShieldCheck,
              desc: "All venues are verified before listing — giving users, planners, and corporate clients peace of mind.",
            },
            {
              title: "Social + Corporate",
              icon: Briefcase,
              desc: "We uniquely combine both worlds — from wedding venues to product launch spaces, all in one platform.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-full"
            >
              <Tilt className="h-full">
                <div className="p-8 lg:px-6 lg:py-10 xl:p-10 rounded-[3.5rem] md:rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden h-full flex flex-col items-center text-center">
                  <div className="absolute top-6 right-8 text-7xl font-black text-white/5 select-none transition-colors group-hover:text-white/10">
                    {i + 1}
                  </div>
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-[2rem] md:rounded-3xl bg-white/10 text-champagne flex items-center justify-center mb-8 lg:mb-10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <v.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <h4 className="font-heading text-xl xl:text-2xl font-bold mb-4 md:mb-6 text-white leading-tight">
                    {v.title}
                  </h4>
                  <p className="text-sm lg:text-[15px] xl:text-base text-white/70 leading-relaxed italic">
                    {v.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Commitment to Partners */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="Our Commitment to Partners"
          accent="Partner-Centric Ecosystem"
        />
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-xl md:text-2xl text-muted-foreground italic mb-12 text-center">
            We work with venue owners, planners, decorators, caterers, and
            service providers by providing:
          </p>
          <div className="w-full">
            <SimpleChecklist
              columns={2}
              items={[
                "Lead generation support for higher conversion",
                "Enhanced listing visibility across the platform",
                "Marketing insights and advanced analytics",
                "Technology tools to manage booking inquiries",
                "Feedback loops for continuous service improvement",
              ]}
            />
          </div>
          <p className="mt-12 text-center text-lg text-muted-foreground font-medium opacity-70 italic border-l-4 border-wine/20 pl-6">
            This partner-centric ecosystem strengthens services across social
            and corporate segments alike.
          </p>
        </div>
      </SectionWrapper>

      {/* Operational Ecosystem (Ivory) */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
        parallaxImage={parallax2.src}
      >
        <OrnateTitle
          title="Operational Ecosystem"
          accent="Backed by Homocation Asia"
        />
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <p className="text-2xl text-muted-foreground italic leading-relaxed">
                VenueForEvent.com is part of the operational ecosystem built by{" "}
                <span className="text-wine font-bold">
                  Homocation Asia Pvt. Ltd.
                </span>
                , the company also behind Spodia.com.
              </p>
              <div className="space-y-6">
                <p className="font-bold text-wine italic text-xl">
                  Parent company philosophy:
                </p>
                <SimpleChecklist
                  columns={1}
                  items={[
                    "Sustainable alliances with hospitality stakeholders",
                    "Technology-first platforms designed for scale",
                    "Clear processes, measured performance, and governance",
                  ]}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <Tilt>
                <div className="p-10 md:p-16 rounded-[4rem] bg-dark-accent text-white shadow-luxury relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-wine opacity-10 blur-[80px] rounded-full" />
                  <Globe className="h-20 w-20 text-champagne mb-8 mx-auto lg:mx-0" />
                  <p className="text-lg md:text-xl font-medium italic text-champagne-light leading-relaxed">
                    This foundation ensures VenueForEvent.com isn't just a
                    concept — it's a technology business built with governance,
                    strategic focus, and long-term viability.
                  </p>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Trust & Safety (White) */}
      <SectionWrapper
        variant="white"
        withDecorations
        sideDecorations
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle title="Trust & Safety" accent="Our Four Pillars" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Verified Partners",
              desc: "Every venue undergoes a vetting process before it's listed on our platform.",
              icon: Shield,
            },
            {
              title: "Data Privacy",
              desc: "User data is protected with industry-standard security measures and encryption.",
              icon: Lock,
            },
            {
              title: "Transparent Info",
              desc: "Key details are displayed clearly — no hidden pricing, no surprises during booking.",
              icon: FileText,
            },
            {
              title: "Dedicated Support",
              desc: "Multi-channel support via email, phone, and WhatsApp for quick and reliable responses.",
              icon: Users,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[3rem] bg-ivory shadow-soft text-center hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="h-14 w-14 rounded-2xl bg-white text-wine flex items-center justify-center mx-auto mb-6 shadow-sm">
                <item.icon className="h-7 w-7" />
              </div>
              <p className="font-heading font-bold text-wine text-lg mb-3">
                {item.title}
              </p>
              <p className="text-sm text-muted-foreground italic leading-relaxed flex-grow">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <HighlightedQuote>
            "Trust is the currency of celebrations. We ensure every connection
            made on our platform is grounded in safety and reliability."
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Contact & Support (Ivory) */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
      >
        <OrnateTitle title="Contact & Support" accent="Get in Touch" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Tilt className="h-full">
            <div className="p-10 md:p-14 rounded-[3.5rem] bg-white border border-champagne/20 h-full flex flex-col items-center text-center justify-center shadow-sm hover:shadow-xl transition-all">
              <div className="h-16 w-16 rounded-3xl bg-ivory text-wine flex items-center justify-center mb-10 shadow-inner mx-auto">
                <Building2 className="h-8 w-8" />
              </div>
              <h4 className="font-heading text-2xl font-bold mb-6 text-wine">
                Head Office
              </h4>
              <address className="not-italic text-lg text-muted-foreground leading-relaxed mb-8">
                Plot No-18, D Block, Qutub Vihar Phase-1,
                <br />
                Sector 19, South West Delhi – 110071, India
              </address>
              <div className="flex items-center justify-center gap-4 text-wine font-bold group">
                <Globe className="h-5 w-5" />
                <span className="group-hover:translate-x-2 transition-transform">
                  www.venueforevent.com
                </span>
              </div>
            </div>
          </Tilt>
          <Tilt className="h-full">
            <div className="p-10 md:p-12 rounded-[3.5rem] bg-dark-accent text-white h-full flex flex-col items-center text-center justify-center relative overflow-hidden shadow-luxury">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users size={100} />
              </div>
              <h4 className="font-heading text-xl md:text-2xl font-bold mb-8 text-champagne leading-tight">
                Communication Channels
              </h4>
              <div className="space-y-6 w-full">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5 text-champagne" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 mb-1">
                      General Support
                    </p>
                    <p className="text-base md:text-lg font-medium">
                      support@venueforevent.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Star className="h-5 w-5 text-champagne" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 mb-1">
                      Partnerships
                    </p>
                    <p className="text-base md:text-lg font-medium">
                      partners@venueforevent.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-5 w-5 text-champagne" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 mb-1">
                      Investor Relations
                    </p>
                    <p className="text-base md:text-lg font-medium">
                      investors@venueforevent.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Legal & Growth Section */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
        parallaxImage={parallax3.src}
      >
        <div className="max-w-6xl mx-auto space-y-32">
          <div>
            <OrnateTitle title="Legal & Compliance" accent="Accountability" />
            <ContentBlock align="center" width="medium">
              <div className="flex flex-col md:flex-row items-center gap-10 bg-ivory/50 p-10 rounded-[3rem] border border-champagne/20">
                <Scale className="h-16 w-16 text-wine shrink-0" />
                <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed text-center md:text-left">
                  VenueForEvent.com operates under standard Indian corporate
                  law, with Homocation Asia Pvt. Ltd. registered with the
                  Ministry of Corporate Affairs. All usage terms and privacy
                  policies are clearly stated in our legal documents, ensuring
                  accountability and user protection.
                </p>
              </div>
            </ContentBlock>
          </div>

          <div>
            <OrnateTitle title="Growth & Future" accent="Our Roadmap" />
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <p className="text-2xl text-muted-foreground italic leading-relaxed">
                We’re committed to expanding our partner venues across top
                wedding destinations and corporate hubs, integrating enhanced
                AI-driven recommendations, and building multi-lingual regional
                experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-12">
                {[
                  { icon: Rocket, title: "SAARC Expansion" },
                  { icon: Activity, title: "AI Discovery" },
                  { icon: Globe, title: "Hotel Networks" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="h-20 w-20 rounded-full bg-wine/5 text-wine flex items-center justify-center shadow-lg border border-wine/10 bg-white group hover:bg-wine hover:text-white transition-all">
                      <item.icon className="h-10 w-10" />
                    </div>
                    <p className="font-heading font-bold text-wine text-lg">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final Take (Dark) */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] lg:min-h-[70vh] flex items-center"
        withDecorations
      >
        <div className="w-full text-center space-y-12">
          <OrnateTitle
            title="The Future of Celebration"
            accent="Final Take"
            variant="dark"
          />
          <div className="max-w-6xl mx-auto space-y-10">
            <p className="text-xl md:text-3xl font-heading text-white/90 italic leading-relaxed tracking-wide">
              "VenueForEvent.com isn&apos;t just a listing platform — it&apos;s
              a hub for celebration, business engagement, and milestone
              creation."
            </p>
            <p className="text-lg md:text-2xl text-champagne/80 italic max-w-4xl mx-auto leading-relaxed">
              From the best banquet halls in Amritsar to seminar venues with
              accommodation in Shimla, from heritage fort weddings in Rajasthan
              to executive boardroom rentals in Bengaluru, we connect dreams
              with the right space.
            </p>
            <div className="h-px w-32 bg-champagne mx-auto opacity-30" />
            <p className="text-2xl md:text-5xl font-heading font-bold text-champagne drop-shadow-luxury leading-tight">
              Your event deserves clarity.
              <br />
              Your planning deserves simplicity.
              <br />
              Your choice deserves confidence.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="pt-10"
            >
              <p className="text-champagne-gold font-accent text-3xl md:text-6xl">
                Welcome to VenueForEvent.com
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
