"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  SimpleChecklist,
  StepGrid,
  OrnateTitle,
  SubTitle,
} from "@/components/common/InfoComponents";
import {
  Handshake,
  Building2,
  Users,
  Briefcase,
  Globe,
  Settings,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import partnerHero from "@/assets/partner-hero.png";
import Link from "next/link";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function PartnerWithUsPage() {
  return (
    <InfoPageLayout
      heroTitle="Partner With Us"
      heroSubtitle="VenueForEvent.com"
      heroImage={partnerHero.src}
      heroDescription="Let's Build India's Most Powerful Event Ecosystem — Together. At VenueForEvent.com, we believe extraordinary events are never created alone. Behind every royal palace wedding in Rajasthan, every beach resort wedding in Goa, every conference hall in New Delhi, and every corporate offsite resort in Uttarakhand — there is a network of venues, planners, hospitality brands, technology partners, and service experts working in sync."
    >
      {/* Intro */}
      <SectionWrapper variant="ivory" withDecorations>
        <ContentBlock align="center" width="full">
          <p className="text-xl text-muted-foreground italic mb-8">
            We&apos;re building a structured, scalable, and trusted event marketplace across India — and we invite you to grow with us. Whether you&apos;re a: Venue owner • Resort chain • Wedding planner • Corporate event agency • Production company • Hospitality brand • Technology provider • Investor • Strategic distribution partner — there&apos;s an opportunity to collaborate.
          </p>
        </ContentBlock>
      </SectionWrapper>

      {/* Why Partner */}
      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="Why Partner With VenueForEvent.com?" accent="India's event market" />
        <p className="text-center text-muted-foreground italic mb-8 max-w-3xl mx-auto">
          India&apos;s wedding and corporate event market is expanding rapidly across destinations like: Mussoorie, Shimla, Manali, Nainital • Goa, Rajasthan, Kerala • Mumbai, New Delhi, Bengaluru • Chandigarh, Amritsar, Dehradun • Himachal Pradesh, Uttarakhand, Maharashtra.
        </p>
        <p className="text-center font-bold text-foreground mb-6">Demand is rising for:</p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
          {["Best wedding venues in Mussoorie", "Destination wedding resorts in Goa", "Luxury marriage gardens in Jaipur", "Forest wedding venues in Uttarakhand", "Conference halls in New Delhi", "MICE event venues in Mumbai", "Corporate wellness retreats in Kerala", "Executive boardroom rentals in Bengaluru", "Product launch venues in Mumbai"].map((item, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-ivory border border-champagne/20 text-xs font-medium text-foreground">{item}</span>
          ))}
        </div>
        <p className="text-center font-heading text-wine italic">But the market remains fragmented. We bring structure, technology, SEO visibility, and verified connections.</p>
      </SectionWrapper>

      {/* Partnership Categories */}
      <SectionWrapper variant="gradient" withDecorations className="section-bg-premium">
        <OrnateTitle title="Partnership Categories" accent="Ways to collaborate" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/20 shadow-soft">
            <div className="h-14 w-14 rounded-2xl bg-wine/10 text-wine flex items-center justify-center mb-6"><Building2 className="h-7 w-7" /></div>
            <SubTitle className="text-wine">🏰 Venue Partners</SubTitle>
            <p className="text-sm text-muted-foreground italic mb-4">Own or manage: Heritage fort wedding venues in Rajasthan • 5 star wedding hotels in Manali • Luxury villas for weddings in Coorg • Banquet halls in Chandigarh • Convention centers in Mumbai • Seminar venues with accommodation in Shimla • Gala dinner venues in Bengaluru • Corporate offsite resorts in Uttarakhand.</p>
            <SimpleChecklist columns={1} items={["✔ Increase qualified inquiries", "✔ Fill mid-week corporate slots", "✔ Promote all-inclusive wedding packages", "✔ Improve digital discoverability", "✔ Access both wedding & corporate clients"]} />
            <Link href="/list-your-service" className="inline-block mt-6 text-wine font-bold text-sm hover:underline">👉 Visit: List Your Venue</Link>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-dark-accent text-white shadow-luxury border border-champagne/10">
            <div className="h-14 w-14 rounded-2xl bg-white/10 text-champagne flex items-center justify-center mb-6"><Users className="h-7 w-7" /></div>
            <SubTitle className="text-champagne">🎉 Service & Vendor Partners</SubTitle>
            <p className="text-sm text-white/80 italic mb-4">If you provide: Top wedding planners in Rajasthan • Theme wedding decorators in Chandigarh • Wedding catering services in Amritsar • Best wedding photographers in Punjab • Corporate event management in Maharashtra • Dealers meet organizers in New Delhi • Team building activities in Rishikesh • Exhibition production in Mumbai — we connect you with high-intent clients.</p>
            <Link href="/list-your-service" className="inline-block mt-6 text-champagne font-bold text-sm hover:underline">👉 Visit: List Your Service</Link>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/20 shadow-soft">
            <div className="h-14 w-14 rounded-2xl bg-wine/10 text-wine flex items-center justify-center mb-6"><Briefcase className="h-7 w-7" /></div>
            <SubTitle className="text-wine">🏢 Corporate & Enterprise Partnerships</SubTitle>
            <p className="text-sm text-muted-foreground italic mb-4">We collaborate with: HR departments • Corporate travel managers • Event procurement teams • Marketing & brand activation agencies. Supporting needs like: Annual corporate retreat in Himachal Pradesh • Residential conference packages in Kerala • Business meeting rooms in Mumbai • Large capacity auditoriums in New Delhi • Networking event venues in Bengaluru. We can create structured booking partnerships and preferred venue programs.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <SubTitle className="text-wine flex items-center gap-2"><Globe className="h-6 w-6" /> 🤝 Strategic Hospitality Alliances</SubTitle>
            <p className="text-sm text-muted-foreground italic mb-4">We welcome partnerships with: Resort chains • Hotel groups • Destination management companies • Regional tourism boards • Luxury property aggregators. Together, we can promote: Destination wedding cost packages in Goa • Royal palace weddings in Rajasthan • Riverside wedding spots in Rishikesh • Workation resorts in Uttarakhand • Tech-ready conference spaces in Bengaluru.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <SubTitle className="text-wine flex items-center gap-2"><Settings className="h-6 w-6" /> 💻 Technology & Integration Partners</SubTitle>
            <p className="text-sm text-muted-foreground italic mb-4">We are building a scalable tech-first ecosystem. We collaborate with: CRM providers • Event tech platforms • AV & hybrid event solutions • Payment & booking integrations • AI-driven analytics providers. If your technology supports event execution, let&apos;s explore synergy.</p>
          </motion.div>
        </div>
        <motion.div {...fadeUp} className="mt-12 p-10 rounded-[3rem] bg-dark-accent text-white shadow-luxury border border-champagne/10 max-w-3xl mx-auto text-center">
          <SubTitle className="text-champagne">📈 Investor & Growth Partnerships</SubTitle>
          <p className="text-white/90 italic mb-4">VenueForEvent.com operates under Homocation Asia Pvt. Ltd., bringing structured governance and hospitality experience. We are open to: Strategic growth capital • Regional expansion partners • Hospitality ecosystem investors • Technology collaboration.</p>
          <p className="text-sm text-white/80">India&apos;s event industry — especially destination weddings and MICE — presents high-value transaction potential. From beach resort weddings in Kerala to conference halls in New Delhi, we are building scalable infrastructure.</p>
        </motion.div>
      </SectionWrapper>

      {/* What Makes Us Different */}
      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="What Makes Us Different?" accent="Three pillars" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/20 shadow-soft text-center">
            <p className="font-heading text-2xl font-bold text-wine mb-4">1️⃣ Dual Focus: Weddings + Corporate</p>
            <p className="text-sm text-muted-foreground italic">Most platforms specialize in either weddings or conferences. We combine 💍 Social celebrations and 🏢 Corporate & MICE events. This doubles inventory utility and revenue potential.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/20 shadow-soft text-center">
            <p className="font-heading text-2xl font-bold text-wine mb-4">2️⃣ SEO & Organic Demand Engine</p>
            <p className="text-sm text-muted-foreground italic mb-4">We build high-visibility digital presence for searches like: Best wedding venues in Nainital • Destination wedding resorts in Goa • Corporate offsite resorts in Uttarakhand • Conference halls in New Delhi • Product launch venues in Mumbai.</p>
            <p className="text-sm font-medium text-foreground">This drives inbound inquiries without overdependence on paid ads.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/20 shadow-soft text-center">
            <p className="font-heading text-2xl font-bold text-wine mb-4">3️⃣ Structured & Verified Network</p>
            <p className="text-sm text-muted-foreground italic">We prioritize: ✔ Quality over quantity • ✔ Verified partnerships • ✔ Transparent communication • ✔ Long-term collaboration. We are building an ecosystem — not a listing directory.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* How Partnership Works */}
      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="How Partnership Works" accent="From connection to growth" />
        <StepGrid steps={[
          { title: "Step 1: Connect With Us", desc: "Submit your details through the appropriate partnership page or contact form. Tell us about your business — our team will respond within 48 working hours.", icon: Handshake },
          { title: "Step 2: Strategic Discussion", desc: "We understand: Your service category • Cities of operation • Growth goals • Target client segment.", icon: Users },
          { title: "Step 3: Onboarding & Integration", desc: "Depending on partnership type: Venue listing optimization • Service provider profile creation • Corporate agreement structuring • Strategic alliance announcement • Technical integration setup.", icon: Building2 },
          { title: "Step 4: Growth & Visibility", desc: "We collaborate to: Improve booking conversion • Expand city coverage • Launch joint campaigns • Capture peak wedding & corporate season demand.", icon: CheckCircle2 },
        ]} />
      </SectionWrapper>

      {/* Cities & Why Partner Now */}
      <SectionWrapper variant="gradient" withDecorations>
        <ContentBlock align="center" title="Cities & States We Actively Expand In" accent="Pan-India presence">
          <p className="text-muted-foreground italic mb-6">We are aggressively building presence in:</p>
          <div className="max-w-3xl mx-auto text-left space-y-4">
            <p className="font-bold text-foreground"><strong className="text-wine">Hill Stations & Destinations:</strong> Mussoorie, Shimla, Manali, Srinagar, Gulmarg, Nainital, Dalhousie, Munnar, Coorg, Ooty</p>
            <p className="font-bold text-foreground"><strong className="text-wine">Metros & Corporate Hubs:</strong> New Delhi, Mumbai, Bengaluru, Chandigarh, Amritsar, Dehradun</p>
            <p className="font-bold text-foreground"><strong className="text-wine">High-Demand States:</strong> Rajasthan, Goa, Kerala, Uttarakhand, Himachal Pradesh, Maharashtra, Karnataka, Tamil Nadu, Punjab, Haryana, Uttar Pradesh, Gujarat, West Bengal, Andhra Pradesh</p>
          </div>
          <p className="mt-12 font-heading text-wine font-bold">Why Partner Now?</p>
          <p className="text-muted-foreground italic mt-4">Peak bookings are happening months in advance for: Destination wedding resorts in Goa • Heritage fort weddings in Rajasthan • Corporate wellness retreats in Kerala • Convention centers in Mumbai • Seminar halls for rent in New Delhi. The earlier you partner, the stronger your visibility before high-demand cycles.</p>
        </ContentBlock>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper variant="dark" withDecorations className="section-bg-dark">
        <ContentBlock align="center" title="Let's Build Together" accent="If you believe in" className="text-white">
          <p className="text-white/90 italic mb-10">If you believe in: ✔ Professional growth • ✔ Transparent collaboration • ✔ Scalable digital distribution • ✔ Hospitality excellence • ✔ Long-term brand equity — then VenueForEvent.com is your ecosystem.</p>
          <p className="text-2xl font-heading text-champagne font-bold mb-12">🚀 Start the Conversation</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:partnerships@venueforevent.com" className="btn-luxury btn-shimmer inline-flex items-center gap-2">📧 partnerships@venueforevent.com</a>
            <a href="tel:+918800842084" className="btn-outline-luxury inline-flex items-center gap-2 text-white border-white/50 hover:bg-white/10">📞 +91-8800842084</a>
            <a href="https://wa.me/918800842084" className="btn-outline-luxury inline-flex items-center gap-2 text-white border-white/50 hover:bg-white/10">💬 WhatsApp Us for Quick Discussion</a>
          </div>
          <p className="mt-10 text-sm text-white/60 italic">We treat every partnership inquiry with confidentiality and strategic focus.</p>
          <p className="mt-8 text-lg text-white/80 italic">From royal palace weddings in Rajasthan to corporate conferences in New Delhi, from beach resort celebrations in Goa to executive boardroom rentals in Bengaluru — we are building the future of event discovery in India. Partner with us — and grow beyond boundaries.</p>
        </ContentBlock>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
