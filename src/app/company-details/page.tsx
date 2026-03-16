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
  Mountain,
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
          <p className="text-3xl leading-relaxed text-wine font-heading mb-10 italic lg:max-w-5xl xl:max-w-6xl mx-auto">
            VenueForEvent.com is a smart, transparent, and scalable event venue
            discovery & booking platform designed to revolutionize how
            individuals, families, event planners, and corporate teams find the
            perfect space.
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
                Homocation Asia Private Limited
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
                title: "CIN / Status",
                desc: "U55101DL2024PTC435007 | Active Private Limited Company",
                icon: FileText,
              },
              {
                title: "Incorporation",
                desc: "05 August 2024",
                icon: Activity,
              },
              {
                title: "Industry",
                desc: "Event Technology, Venue Marketplace, Hospitality",
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

      {/* Identity & Core Markets */}
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
                  <p className="text-2xl italic leading-relaxed">
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
                  <div className="pt-6 border-t border-wine/10 text-2xl font-heading text-foreground italic leading-snug">
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
                  <p className="text-2xl italic leading-relaxed">
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
      </SectionWrapper>

      {/* Geography Strength */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax2.src}
        sideDecorations
      >
        <OrnateTitle
          title="Geographic strength"
          accent="India's Diverse Canvas"
        />
        <div className="prose prose-2xl text-muted-foreground mx-auto text-center mb-20 italic">
          <p>India’s geography defines its celebration style.</p>
        </div>

        <div className="space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Tilt className="h-full">
              <div className="p-8 md:p-12 rounded-[3.5rem] bg-wine/5 border border-wine/10 h-full flex flex-col items-center text-center">
                <Mountain className="h-12 w-12 text-wine mb-8" />
                <h4 className="font-heading text-2xl font-bold mb-6 text-wine">Hill & Destination</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Mussoorie", "Shimla", "Manali", "Nainital", "Srinagar", "Dalhousie", "Munnar", "Coorg"].map(c => (
                    <span key={c} className="px-3 py-1 bg-white rounded-full text-xs font-bold border border-champagne/20">{c}</span>
                  ))}
                </div>
              </div>
            </Tilt>
            <Tilt className="h-full">
              <div className="p-8 md:p-12 rounded-[3.5rem] bg-dark-accent text-white h-full flex flex-col items-center text-center">
                <Building2 className="h-12 w-12 text-champagne mb-8" />
                <h4 className="font-heading text-2xl font-bold mb-6 text-champagne">Metros & Hubs</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["New Delhi", "Mumbai", "Bengaluru", "Chandigarh", "Amritsar", "Dehradun", "Gurugram", "Noida"].map(c => (
                    <span key={c} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold border border-white/10">{c}</span>
                  ))}
                </div>
              </div>
            </Tilt>
            <Tilt className="h-full">
              <div className="p-8 md:p-12 rounded-[3.5rem] bg-ivory border border-champagne/20 h-full flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-wine mb-8" />
                <h4 className="font-heading text-2xl font-bold mb-6 text-wine">Key States</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Rajasthan", "Goa", "Kerala", "Uttarakhand", "Himachal", "Maharashtra", "Karnataka"].map(c => (
                    <span key={c} className="px-3 py-1 bg-white rounded-full text-xs font-bold border border-champagne/20">{c}</span>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="What We Do" accent="Platform Capabilities" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <HighlightCard
              key={i}
              icon={item.icon}
              title={item.title}
              content={item.desc}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax1.src}
        sideDecorations
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <ContentBlock
              title="Our Mission"
              accent="The Purpose"
              width="full"
              align="mobile-center"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-12 italic text-center lg:text-left">
                To simplify venue discovery and event planning across India and
                South Asia through a technology-driven, transparent, and
                user-centric marketplace.
              </p>
              <SimpleChecklist
                items={[
                  "Make event planning frictionless with data-led insights.",
                  "Empower clients to evaluate multiple professional venues.",
                  "Provide technology that drives better outcomes for users.",
                ]}
              />
            </ContentBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <ContentBlock
              title="Our Vision"
              accent="The Future"
              width="full"
              align="mobile-center"
            >
              <div className="bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-wine/10 h-full flex items-center">
                <p className="text-xl md:text-3xl leading-relaxed text-wine italic text-center lg:text-left font-heading">
                  To become India's most trusted and user-centric event venue
                  discovery platform — unifying weddings, celebrations,
                  corporate MICE, and experiential bookings under one ecosystem.
                </p>
              </div>
            </ContentBlock>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Why We Exist */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
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
                <div className="p-8 rounded-[3.5rem] md:rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden h-full flex flex-col items-center text-center">
                  <div className="absolute top-6 right-8 text-7xl font-black text-white/5 select-none transition-colors group-hover:text-white/10">
                    {i + 1}
                  </div>
                  <div className="h-20 w-20 rounded-3xl bg-white/10 text-champagne flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <v.icon size={40} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-6 text-white">
                    {v.title}
                  </h4>
                  <p className="text-base text-white/70 leading-relaxed italic">
                    {v.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Commitment & Ecosystem */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="Our Commitment"
          accent="Partner-Centric Ecosystem"
        />
        <div className="max-w-5xl mx-auto">
          <p className="text-2xl text-muted-foreground italic mb-12 text-center">
            We work with venue owners, planners, decorators, caterers, and
            service providers by providing:
          </p>
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

        <div className="mt-32 max-w-5xl mx-auto">
          <Tilt>
            <div className="p-10 md:p-20 rounded-[4rem] bg-dark-accent text-white shadow-luxury relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-wine opacity-10 blur-[80px] rounded-full" />
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="h-24 w-24 rounded-3xl bg-white/10 flex items-center justify-center shrink-0">
                  <Globe className="h-12 w-12 text-champagne" />
                </div>
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl font-bold text-champagne mb-4">operational ecosystem</h4>
                  <p className="text-xl italic text-champagne-light leading-relaxed">
                    VenueForEvent.com is part of the operational ecosystem built by{" "}
                    <span className="text-white font-bold">Homocation Asia Private Limited</span>, the company also behind Spodia.com. This foundation ensures it&apos;s a technology-driven organization building scalable platforms.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Trust & Safety */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
      >
        <OrnateTitle title="Trust & Safety" accent="Our Four Pillars" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              desc: "Key details are displayed clearly — no hidden pricing, no surprises.",
              icon: FileText,
            },
            {
              title: "Dedicated Support",
              desc: "Multi-channel support for quick and reliable responses via all channels.",
              icon: Users,
            },
          ].map((item, i) => (
            <HighlightCard
              key={i}
              icon={item.icon}
              title={item.title}
              content={item.desc}
            />
          ))}
        </div>
        <div className="mt-24">
          <HighlightedQuote>
            "Trust is the currency of celebrations. We ensure every connection
            made on our platform is grounded in safety and reliability."
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Contact & Support */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax3.src}
        sideDecorations
      >
        <OrnateTitle title="Contact & Support" accent="Get in Touch" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Tilt className="h-full">
            <div className="p-10 md:p-14 rounded-[3.5rem] bg-white border border-champagne/20 h-full flex flex-col items-center text-center justify-center shadow-lg group">
              <div className="h-20 w-20 rounded-3xl bg-ivory text-wine flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
                <Building2 size={40} />
              </div>
              <h4 className="font-heading text-2xl font-bold mb-6 text-wine">Head Office</h4>
              <address className="not-italic text-xl text-muted-foreground leading-relaxed mb-8">
                Plot No-18, D Block, Qutub Vihar Phase-1,
                <br />
                Sector 19, South West Delhi – 110071, India
              </address>
              <p className="font-bold text-wine text-lg">www.venueforevent.com</p>
            </div>
          </Tilt>
          <Tilt className="h-full">
            <div className="p-10 md:p-14 rounded-[3.5rem] bg-dark-accent text-white h-full flex flex-col items-center text-center justify-center relative shadow-luxury group">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users size={120} />
              </div>
              <h4 className="font-heading text-2xl font-bold mb-10 text-champagne">Communication Channels</h4>
              <div className="space-y-8 w-full">
                <div>
                  <p className="text-xs uppercase tracking-widest text-champagne/60 mb-2">Support</p>
                  <p className="text-xl font-bold">support@venueforevent.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-champagne/60 mb-2">Partnerships</p>
                  <p className="text-xl font-bold">partners@venueforevent.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-champagne/60 mb-2">Investors</p>
                  <p className="text-xl font-bold">investors@venueforevent.com</p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Final Section */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-24 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
        sideDecorations
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <OrnateTitle title="The Future of Celebration" accent="Final Take" variant="dark" />
          <p className="text-2xl md:text-4xl font-heading text-white italic leading-relaxed">
            "VenueForEvent.com isn&apos;t just a listing platform — it&apos;s a hub for celebration, business engagement, and milestone creation."
          </p>
          <div className="h-px w-32 bg-champagne mx-auto opacity-30" />
          <p className="text-champagne-gold font-accent text-2xl md:text-7xl">
            Welcome to VenueForEvent.com
          </p>
          <p className="text-xl md:text-2xl text-white/60 italic font-medium tracking-widest uppercase pt-8">
            A Part of Spodia
          </p>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
