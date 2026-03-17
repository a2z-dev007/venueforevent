"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  AlternatingGrid,
  SimpleChecklist,
  StepGrid,
  HighlightedQuote,
  OrnateTitle,
  SubTitle,
  HighlightCard,
  Tilt,
} from "@/components/common/InfoComponents";
import {
  Building2,
  Heart,
  Briefcase,
  Mail,
  ShieldCheck,
  TrendingUp,
  Globe,
  Star,
  Landmark,
  MapPin,
  Zap,
  Target,
  Award,
  Layers,
  Search,
  Rocket,
  Handshake,
  History,
  Phone,
  Eye,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import investorHero from "@/assets/investor-hero.png";
import socialImg from "@/assets/palace-wedding.jpg";
import corporateImg from "@/assets/banquet-hall.jpg";
import parallax1 from "@/assets/celebration.jpg";
import parallax2 from "@/assets/hero-venue.jpg";

export default function InvestorRelationsPage() {
  return (
    <InfoPageLayout
      heroTitle="Investor Relations"
      heroSubtitle="VenueForEvent.com"
      heroImage={investorHero.src}
      heroDescription="Building India’s Most Trusted Event Venue Discovery Platform."
      hideWave={true}
      heroTitleClassName="lg:text-6xl xl:text-7xl min-[1400px]:text-8xl whitespace-nowrap"
    >
      {/* Introduction Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="pt-12 md:pt-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <ContentBlock
          align="center"
          width="full"
          accent="Welcome to Investor Relations"
        >
          <p className="text-2xl leading-relaxed text-wine font-heading mb-10 italic lg:max-w-5xl xl:max-w-6xl mx-auto">
            VenueForEvent.com is a rapidly growing event venue discovery and
            booking platform transforming how India plans weddings, corporate
            events, MICE programs, conferences, and destination celebrations.
          </p>
          <div className="prose prose-xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto text-center italic space-y-8">
            <p>
              From best wedding venues in Mussoorie to conference halls in New
              Delhi, from destination wedding resorts in Goa to corporate
              offsite resorts in Uttarakhand, VenueForEvent.com is building the
              infrastructure that connects demand with curated, verified supply
              across India’s booming event economy.
            </p>
            <p>
              We invite strategic investors, hospitality groups, technology
              partners, and long-term stakeholders to explore the opportunity
              behind this scalable, tech-enabled platform.
            </p>
          </div>
        </ContentBlock>

        <Tilt className="mt-20">
          <div className="bg-white/60 backdrop-blur-xl px-6 py-10 md:p-20 rounded-[2.5rem] md:rounded-[5rem] border border-white/40 shadow-luxury relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-wine/5 rounded-full blur-[100px] group-hover:bg-wine/10 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
              <div className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 rounded-[2rem] md:rounded-[2.5rem] bg-wine text-white flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Target className="h-10 w-10 md:h-12 md:w-12" />
              </div>
              <div className="text-lg md:text-2xl font-medium italic text-foreground/90 leading-snug">
                "We are building long-term value — not short-term hype. Our goal
                is to create an event ecosystem that powers meaningful
                gatherings through technology and infrastructure."
              </div>
            </div>
          </div>
        </Tilt>
      </SectionWrapper>

      {/* Corporate Structure Section */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="Corporate Structure & Governance"
          accent="1. Legal Foundation"
        />
        <p className="text-center text-muted-foreground italic mb-16 max-w-3xl mx-auto">
          VenueForEvent.com operates under Homocation Asia Pvt. Ltd., a legally
          registered Indian private limited company and the parent entity behind
          the hospitality platform Spodia.com.
        </p>
        <div className="mb-24">
          <StepGrid
            steps={[
              {
                title: "Legal Entity",
                desc: "Homocation Asia Private Limited",
                icon: Landmark,
              },
              { title: "Brand", desc: "VenueForEvent.com", icon: Star },
              { title: "Incorporation", desc: "05 August 2024", icon: History },
              {
                title: "Registered Office",
                desc: "South West Delhi – 110071, India",
                icon: MapPin,
              },
              {
                title: "Nature of Business",
                desc: "Event venue marketplace, hospitality tech infrastructure",
                icon: Briefcase,
              },
            ]}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <HighlightedQuote>
            The company operates with a structured governance model, defined
            operational processes, and a scalable digital-first framework.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Market Opportunity Section */}
      <SectionWrapper
        variant="gradient"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
        parallaxImage={parallax1.src}
      >
        <OrnateTitle
          title="Market Opportunity"
          accent="2. Booming Event Economy"
        />

        <AlternatingGrid
          items={[
            {
              title: "🎉 The Wedding Economy",
              icon: Heart,
              text: (
                <div className="space-y-6">
                  <p className="text-xl italic">
                    India hosts millions of weddings annually. The demand for
                    destination wedding resorts in Rajasthan, luxury marriage
                    gardens in Jaipur, and beach resorts in Goa continues to
                    grow due to rising disposable income.
                  </p>
                  <p className="text-lg italic opacity-80">
                    Destination wedding costs in Mussoorie, Shimla, and Kerala
                    have steadily increased due to demand-supply imbalance —
                    signaling opportunity for structured marketplace
                    optimization.
                  </p>
                </div>
              ),
              image: socialImg.src,
            },
            {
              title: "🏢 The Corporate & MICE Sector",
              icon: Briefcase,
              text: (
                <div className="space-y-6">
                  <p className="text-xl italic">
                    Corporate India is rapidly expanding demand for conference
                    halls in New Delhi, MICE event venues in Bengaluru, and
                    product launch venues in Mumbai.
                  </p>
                  <p className="text-lg italic opacity-80">
                    The hybrid workforce model has increased interest in
                    workation resorts in Uttarakhand and team-building
                    activities in Rishikesh. India’s MICE market remains
                    fragmented, creating strong disruption potential.
                  </p>
                </div>
              ),
              image: corporateImg.src,
            },
          ]}
        />
      </SectionWrapper>

      {/* Problem We Solve Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle
          title="The Problem We Solve"
          accent="3. Fragmented Market"
        />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-2xl text-muted-foreground italic leading-relaxed">
            Event venue booking in India is still largely phone-call driven,
            unstructured, price-opaque, and time-consuming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3rem] bg-white border border-champagne/20 shadow-soft"
          >
            <SubTitle className="text-wine">The Friction</SubTitle>
            <SimpleChecklist
              columns={1}
              items={[
                "Inconsistent information & slow responses",
                "Navigating fragmented offerings across cities",
                "Complex discovery for niche requirements",
                "Lack of centralized comparison tools",
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3rem] bg-dark-accent text-white shadow-luxury"
          >
            <SubTitle className="text-champagne-gold">Our Solution</SubTitle>
            <p className="italic text-white/80 leading-relaxed mb-6">
              VenueForEvent.com centralizes discovery, comparison, filtering,
              and inquiry management — improving efficiency for both clients and
              venue partners.
            </p>
            <div className="h-1 lg:h-1 w-20 bg-champagne-gold mb-6" />
            <p className="text-white font-heading italic text-lg">
              Empowering planners searching for banquet halls in Chandigarh,
              fort weddings in Rajasthan, or networking venues in Mumbai.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Business Model Section */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Business Model" accent="4. Multi-Channel Revenue" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {[
            {
              title: "Lead Generation",
              desc: "Venues pay for verified, qualified inquiries to grow their booking pipeline.",
              icon: Zap,
            },
            {
              title: "Premium Listings",
              desc: "Featured placement for 5-star hotels and luxury convention centers.",
              icon: Award,
            },
            {
              title: "Booking Commission",
              desc: "Revenue share on confirmed bookings for weddings, conferences, and MICE events.",
              icon: TrendingUp,
            },
            {
              title: "Vendor Marketplace",
              desc: "Add-on services including top wedding planners and professional catering.",
              icon: Layers,
            },
            {
              title: "Corporate Tie-ups",
              desc: "Annual partnerships with companies for recurring bulk booking needs.",
              icon: Handshake,
            },
          ].map((item, i) => (
            <HighlightCard
              key={i}
              icon={item.icon}
              title={`${i + 1}️⃣ ${item.title}`}
              content={item.desc}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Geographic & Growth Strategy Section Combined for Flow */}
      <SectionWrapper
        variant="gradient"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax2.src}
        sideDecorations
      >
        <OrnateTitle title="Expansion & Growth" accent="5 & 7. Our Roadmap" />

        <div className="mb-24 px-6">
          <SubTitle className="text-center text-wine">
            Geographic Expansion Strategy
          </SubTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { label: "Tier 1 Metros", cities: "Delhi, Mumbai, Bengaluru" },
              { label: "Wedding Hubs", cities: "Goa, Rajasthan, Kerala" },
              { label: "Hill Stations", cities: "Mussoorie, Shimla, Manali" },
              {
                label: "Emerging Cities",
                cities: "Chandigarh, Dehradun, Amritsar",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white/80 backdrop-blur-md border border-champagne/20 text-center flex flex-col justify-center"
              >
                <p className="font-bold text-wine mb-1 md:mb-2 text-sm md:text-lg leading-tight">
                  {box.label}
                </p>
                <p className="text-[10px] md:text-xs italic text-muted-foreground leading-relaxed">
                  {box.cities}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <SubTitle className="text-center text-wine">
            Phased Growth Strategy
          </SubTitle>
          <StepGrid
            itemClassName="xl:w-[calc(25%-1.75rem)] xl:max-w-[300px]"
            steps={[
              {
                title: "Phase 1",
                desc: "Inventory Expansion across key states like Maharashtra and Goa.",
                icon: Rocket,
              },
              {
                title: "Phase 2",
                desc: "Brand Visibility through SEO dominance and performance marketing.",
                icon: Eye,
              },
              {
                title: "Phase 3",
                desc: "Corporate Acquisition targeting HR leaders for MICE events.",
                icon: Users,
              },
              {
                title: "Phase 4",
                desc: "Technology Enhancements with AI-driven recommendations.",
                icon: Zap,
              },
            ]}
          />
        </div>
      </SectionWrapper>

      {/* Competitive Advantage Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle title="Competitive Advantage" accent="6. Why We Win" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Dual Focus",
              desc: "Combining Social & Corporate event expertise on one platform.",
              icon: Target,
            },
            {
              title: "Hospitality Roots",
              desc: "Backed by hospitality expertise under Homocation Asia Pvt. Ltd.",
              icon: Building2,
            },
            {
              title: "SEO Authority",
              desc: "Structured city-specific engine targeting high-intent event keywords.",
              icon: Search,
            },
            {
              title: "Verified Inventory",
              desc: "Quality control and verification models ensuring user trust.",
              icon: ShieldCheck,
            },
            {
              title: "Scalable Tech",
              desc: "Architecture designed for pan-India and state-level density.",
              icon: Layers,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex"
            >
              <Tilt className="w-full">
                <div className="p-10 rounded-[3rem] bg-white border border-champagne/10 h-full flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all">
                  <div className="h-16 w-16 rounded-3xl bg-ivory text-wine flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-4">
                    {item.title}
                  </h4>
                  <p className="text-sm italic text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Risk Mitigation & Governance Section */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Risk & Transparency" accent="8 & 9. Governance" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          <div className="p-10 rounded-[3.5rem] bg-wine/5 border border-wine/10 flex flex-col">
            <SubTitle className="text-wine">Risk Mitigation</SubTitle>
            <SimpleChecklist
              columns={1}
              items={[
                "Multi-city geographic diversification",
                "Balanced demand (Wedding vs Corporate)",
                "Recurring corporate contract relationships",
                "Strict vendor quality control measures",
                "Operational standardization protocols",
              ]}
            />
          </div>
          <div className="p-10 rounded-[3.5rem] bg-champagne/5 border border-champagne/10 flex flex-col">
            <SubTitle className="text-foreground">
              Transparency & Reporting
            </SubTitle>
            <SimpleChecklist
              columns={1}
              items={[
                "Structured financial reporting systems",
                "Full legal and regulatory compliance",
                "Transparent partner and commission models",
                "Secure and compliant data handling",
                "Regular investor communication cycles",
              ]}
            />
          </div>
        </div>
        <p className="mt-12 text-center text-muted-foreground italic font-medium">
          Investor communications and detailed reports are available upon
          official request.
        </p>
      </SectionWrapper>

      {/* Why Invest Now Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        className="py-12 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle title="Why Invest Now?" accent="10. The Timing" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto px-6">
          {[
            {
              title: "Early-Stage Expansion",
              desc: "Inventory and demand scaling simultaneously across key regions.",
              icon: TrendingUp,
            },
            {
              title: "High-Value Industry",
              desc: "Operating in the lucrative Wedding & MICE economy with high transaction values.",
              icon: Star,
            },
            {
              title: "Pan-India Scalability",
              desc: "Proven model from beach resorts in Goa to conference halls in Delhi.",
              icon: Globe,
            },
            {
              title: "Cross-Selling Potential",
              desc: "Extending from venues to vendor services, honeymoons, and travel.",
              icon: Layers,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-champagne/20 flex flex-col items-center text-center gap-4 md:gap-6 shadow-sm"
            >
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-ivory text-wine flex items-center justify-center shrink-0 mb-2">
                <item.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <div>
                <p className="font-bold text-wine mb-2 text-lg md:text-xl">
                  {item.title}
                </p>
                <p className="text-xs md:text-sm italic text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-20 text-center px-6">
          <p className="text-xl md:text-2xl font-heading text-wine italic">
            🚀 Technology-Driven Efficiency — Reduced acquisition cost over
            time.
          </p>
        </div>
      </SectionWrapper>

      {/* Long-Term Vision Section */}
      <SectionWrapper
        variant="gradient"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
      >
        <OrnateTitle title="Long-Term Vision" accent="11. Our Future" />
        <div className="max-w-5xl mx-auto">
          <HighlightedQuote>
            To become India’s most trusted, tech-enabled platform for weddings,
            destination celebrations, corporate conferences, and MICE events — a
            centralized ecosystem connecting venues, vendors, planners, and
            clients.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        sideDecorations
      >
        <OrnateTitle
          title="Investor Communication"
          accent="Get in touch"
          variant="dark"
        />
        <div className="max-w-4xl mx-auto text-center space-y-12 px-6">
          <p className="text-xl md:text-2xl italic text-white/80 leading-relaxed">
            For investment inquiries, strategic discussions, or partnership
            exploration:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Tilt>
              <a
                href="mailto:investors@venueforevent.com"
                className="block p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group overflow-hidden"
              >
                <Mail className="h-10 w-10 md:h-12 md:w-12 text-champagne mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-champagne font-bold text-lg md:text-xl mb-1 md:mb-2">
                  Email Us
                </p>
                <p className="text-white/60 text-sm md:text-base break-words md:break-normal">
                  investors@venueforevent.com
                </p>
              </a>
            </Tilt>
            <Tilt>
              <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <Phone className="h-10 w-10 md:h-12 md:w-12 text-champagne mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-champagne font-bold text-lg md:text-xl mb-1 md:mb-2">
                  Call Us
                </p>
                <p className="text-white/60 text-sm md:text-base">
                  +91-XXXXXXXXXX
                </p>
              </div>
            </Tilt>
          </div>

          <p className="text-sm italic text-white/40 border-t border-white/10 pt-8">
            “All investor discussions are confidential and governed under
            standard NDA practices.”
          </p>

          <div className="pt-12 space-y-8">
            <p className="text-lg md:text-xl text-white/90 italic leading-relaxed">
              VenueForEvent.com is positioned at the intersection of
              hospitality, technology, and India’s expanding celebration
              economy. We are not just listing venues. We are building an event
              ecosystem.
            </p>
            <h4 className="font-accent text-3xl md:text-5xl text-champagne-gold">
              Let’s build India’s leading event venue platform — together.
            </h4>
          </div>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
