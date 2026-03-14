"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  SimpleChecklist,
  OrnateTitle,
  SubTitle,
} from "@/components/common/InfoComponents";
import { Building2, Heart, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";
import investorHero from "@/assets/investor-hero.png";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function InvestorRelationsPage() {
  return (
    <InfoPageLayout
      heroTitle="Investor Relations"
      heroSubtitle="VenueForEvent.com"
      heroImage={investorHero.src}
      heroDescription="Building India's Most Trusted Event Venue Discovery Platform. Welcome to the Investor Relations page of VenueForEvent.com — a rapidly growing event venue discovery and booking platform transforming how India plans weddings, corporate events, MICE programs, conferences, and destination celebrations."
    >
      <SectionWrapper variant="ivory" withDecorations>
        <ContentBlock align="center" width="full">
          <p className="text-xl text-muted-foreground italic max-w-4xl mx-auto">
            From best wedding venues in Mussoorie to conference halls in New Delhi, from destination wedding resorts in Goa to corporate offsite resorts in Uttarakhand, VenueForEvent.com is building the infrastructure that connects demand with curated, verified supply across India&apos;s booming event economy. We invite strategic investors, hospitality groups, technology partners, and long-term stakeholders to explore the opportunity behind this scalable, tech-enabled platform.
          </p>
        </ContentBlock>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="1. Corporate Structure & Governance" accent="Homocation Asia Pvt. Ltd." />
        <p className="text-center text-muted-foreground italic mb-10">VenueForEvent.com operates under Homocation Asia Pvt. Ltd., a legally registered Indian private limited company and the parent entity behind the hospitality platform Spodia.com.</p>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <SubTitle className="text-wine">Company Overview</SubTitle>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Legal Entity:</strong> Homocation Asia Private Limited</li>
              <li><strong className="text-foreground">Brand:</strong> VenueForEvent.com</li>
              <li><strong className="text-foreground">Incorporation:</strong> 05 August 2024</li>
              <li><strong className="text-foreground">Registered Office:</strong> South West Delhi – 110071, India</li>
              <li><strong className="text-foreground">Nature of Business:</strong> Event venue marketplace, hospitality technology platform, corporate event infrastructure</li>
            </ul>
            <p className="mt-6 font-heading text-wine italic">The company operates with a structured governance model, defined operational processes, and a scalable digital-first framework. We are building long-term value — not short-term hype.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations className="section-bg-premium">
        <OrnateTitle title="2. Market Opportunity" accent="Wedding & MICE" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/20 shadow-soft">
            <SubTitle className="text-wine flex items-center gap-2"><Heart className="h-6 w-6" /> 🎉 The Wedding Economy</SubTitle>
            <p className="text-muted-foreground italic mb-6">India hosts millions of weddings annually. The demand for: Destination wedding resorts in Rajasthan • Luxury marriage gardens in Jaipur • Royal palace wedding venues in Udaipur • Beach resort for wedding in Goa • Intimate wedding venues in Ooty • Forest wedding venues in Uttarakhand — continues to grow due to rising disposable income, destination preferences, and experiential celebration trends.</p>
            <p className="text-sm text-muted-foreground italic">Destination wedding cost in Mussoorie, Shimla, Manali, and Kerala has steadily increased due to demand-supply imbalance — signaling opportunity for structured marketplace optimization.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-dark-accent text-white shadow-luxury border border-champagne/10">
            <SubTitle className="text-champagne flex items-center gap-2"><Briefcase className="h-6 w-6" /> 🏢 The Corporate & MICE Sector</SubTitle>
            <p className="text-white/80 italic mb-6">Corporate India is rapidly expanding demand for: Conference halls in New Delhi • Business meeting rooms in Mumbai • MICE event venues in Bengaluru • Corporate wellness retreats in Kerala • Residential conference packages in Himachal Pradesh • Product launch venues in Mumbai • Exhibition centers in Delhi NCR • Executive boardroom rentals in Bengaluru • Gala dinner venues in Chandigarh.</p>
            <p className="text-sm text-champagne/90 italic">The hybrid workforce model has increased interest in: Workation resorts in Uttarakhand • Team building activities in Rishikesh • Annual corporate retreat in Goa. India&apos;s MICE and corporate event market remains fragmented, with limited digital aggregation — creating strong disruption potential.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="3. The Problem We Solve" accent="Fragmentation" />
        <p className="text-center text-muted-foreground italic mb-8 max-w-3xl mx-auto">Event venue booking in India is still largely: Phone-call driven • Unstructured • Price-opaque • Time-consuming • Fragmented across cities. Planners searching for: Best banquet halls in Chandigarh • Seminar halls for rent in Dehradun • Heritage fort wedding in Rajasthan • Networking event venues in Mumbai — often navigate inconsistent information and slow responses. VenueForEvent.com centralizes discovery, comparison, filtering, and inquiry management — improving efficiency for both clients and venue partners.</p>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="4. Business Model" accent="Multi-channel revenue" />
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">1️⃣ Lead Generation Model</p>
            <p className="text-sm text-muted-foreground italic">Venues pay for verified, qualified inquiries.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">2️⃣ Premium Listing & Visibility</p>
            <p className="text-sm text-muted-foreground italic">Featured placement for: 5 star wedding hotels in Manali • Luxury hotels for corporate events in Mumbai • Convention centers in New Delhi • Destination wedding resorts in Goa.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">3️⃣ Commission-Based Booking Model</p>
            <p className="text-sm text-muted-foreground italic">Revenue share on confirmed bookings for weddings, conferences, and MICE events.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">4️⃣ Vendor & Service Marketplace</p>
            <p className="text-sm text-muted-foreground italic">Add-on services include: Top wedding planners in Rajasthan • Professional event planners in Bengaluru • Wedding catering services in Chandigarh • Dealers meet organizers in Delhi.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">5️⃣ Corporate Partnerships</p>
            <p className="text-sm text-muted-foreground italic">Annual tie-ups with companies for bulk booking needs.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="5. Geographic Expansion Strategy" accent="Focus markets" />
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <p className="font-bold text-foreground">Current focus markets include:</p>
          <p className="text-muted-foreground italic"><strong className="text-wine">Tier 1 Metros:</strong> New Delhi, Mumbai, Bengaluru</p>
          <p className="text-muted-foreground italic"><strong className="text-wine">High-Demand Wedding Destinations:</strong> Goa, Rajasthan, Kerala, Uttarakhand, Himachal Pradesh</p>
          <p className="text-muted-foreground italic"><strong className="text-wine">Hill & Premium Locations:</strong> Mussoorie, Shimla, Manali, Nainital, Srinagar, Gulmarg, Dalhousie, Coorg, Ooty</p>
          <p className="text-muted-foreground italic"><strong className="text-wine">Emerging Corporate Cities:</strong> Chandigarh, Dehradun, Amritsar, Karnal</p>
          <p className="mt-8 text-sm text-muted-foreground italic">We aim to expand inventory density and improve SEO dominance in: Destination wedding cost in Goa • Corporate offsite resorts in Uttarakhand • Large capacity auditoriums in Delhi • Seminar venues with accommodation in Shimla • Product launch venues in Mumbai.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="6. Competitive Advantage" accent="Why us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { title: "✅ Dual Focus: Social + Corporate", desc: "Most platforms focus on either weddings or corporate events. We combine both." },
            { title: "✅ Technology + Hospitality", desc: "Backed by hospitality expertise under Homocation Asia Pvt. Ltd." },
            { title: "✅ SEO & Organic Growth Engine", desc: "Structured city-specific pages targeting: Best wedding venues in Mussoorie, Conference halls in New Delhi, Intimate wedding venues in Shimla, Corporate wellness retreats in Kerala." },
            { title: "✅ Verified Inventory Model", desc: "Quality control ensures trust." },
            { title: "✅ Scalable Architecture", desc: "Designed for state-level and pan-India expansion." },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} className="p-8 rounded-[2.5rem] bg-white border border-champagne/20 shadow-soft">
              <p className="font-heading font-bold text-wine mb-2">{item.title}</p>
              <p className="text-sm text-muted-foreground italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="7. Growth Strategy" accent="Roadmap" />
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">Phase 1 – Inventory Expansion</p>
            <p className="text-sm text-muted-foreground italic">Aggressive onboarding across Rajasthan, Goa, Kerala, Himachal Pradesh, Maharashtra, Karnataka.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">Phase 2 – Brand Visibility</p>
            <p className="text-sm text-muted-foreground italic">Digital performance marketing, content dominance, organic SEO authority.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">Phase 3 – Corporate Acquisition</p>
            <p className="text-sm text-muted-foreground italic">Direct outreach to HR leaders for: Annual corporate retreat in Uttarakhand • MICE event venues in Mumbai • Seminar halls for rent in Delhi.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-2">Phase 4 – Technology Enhancements</p>
            <p className="text-sm text-muted-foreground italic">AI-driven recommendations • Automated quotation management • Vendor dashboard systems.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="8. Risk Mitigation" accent="How we mitigate" />
        <p className="text-center text-muted-foreground italic max-w-3xl mx-auto">We mitigate risks through: Multi-city diversification • Balanced wedding & corporate demand • Recurring corporate relationships • Vendor quality control • Digital marketing dominance • Operational standardization.</p>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="9. Transparency & Governance" accent="Reporting" />
        <p className="text-center text-muted-foreground italic max-w-3xl mx-auto">We maintain: Structured financial reporting • Legal compliance • Partner agreements • Transparent commission models • Secure data handling systems. Investor communications are available upon request.</p>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="10. Why Invest Now?" accent="Timing" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-4">📈 Early-Stage Expansion</p>
            <p className="text-sm text-muted-foreground italic">Inventory and demand scaling simultaneously.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-4">📊 Growing Wedding & MICE Economy</p>
            <p className="text-sm text-muted-foreground italic">High transaction value industry.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-4">🌍 Pan-India Scalability</p>
            <p className="text-sm text-muted-foreground italic">From beach resort for wedding in Goa to conference halls in Delhi.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-4">💼 Cross-Selling Potential</p>
            <p className="text-sm text-muted-foreground italic">Wedding → Honeymoon • Corporate Conference → Annual Retreat • Venue → Vendor Services.</p>
          </div>
        </div>
        <p className="mt-10 text-center font-heading text-wine font-bold">🚀 Technology-Driven Efficiency — Reduced acquisition cost over time.</p>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="11. Long-Term Vision" accent="Where we're headed" />
        <p className="text-center text-muted-foreground italic max-w-3xl mx-auto mb-10">To become India&apos;s most trusted, tech-enabled platform for: Weddings • Destination celebrations • Corporate conferences • MICE events • Workations & retreats. A centralized ecosystem connecting venues, vendors, planners, and clients.</p>
      </SectionWrapper>

      <SectionWrapper variant="dark" withDecorations className="section-bg-dark">
        <OrnateTitle title="Investor Communication" accent="Get in touch" variant="dark" />
        <p className="text-center text-white/80 italic mb-8">For investment inquiries, strategic discussions, or partnership exploration:</p>
        <div className="max-w-md mx-auto text-center space-y-4">
          <a href="mailto:investors@venueforevent.com" className="inline-flex items-center gap-2 text-champagne font-bold text-lg hover:underline"><Mail className="h-6 w-6" /> investors@venueforevent.com</a>
          <p className="text-white/80 text-sm">📞 +91-XXXXXXXXXX</p>
        </div>
        <p className="mt-10 text-center text-white/60 text-sm italic">All investor discussions are confidential and governed under standard NDA practices.</p>
        <p className="mt-12 text-center text-lg text-white/90 italic max-w-3xl mx-auto">VenueForEvent.com is positioned at the intersection of hospitality, technology, and India&apos;s expanding celebration economy. From royal palace weddings in Rajasthan to executive boardroom rentals in Bengaluru, from destination wedding resorts in Goa to corporate offsite resorts in Uttarakhand, we are building infrastructure that powers meaningful gatherings. We are not just listing venues. We are building an event ecosystem. If you believe in scalable marketplaces, high-value industries, and long-term brand equity — this is the time to engage. Let&apos;s build India&apos;s leading event venue platform — together.</p>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
