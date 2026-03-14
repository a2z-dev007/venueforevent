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
import {
  ShieldCheck,
  Lock,
  FileText,
  Heart,
  Briefcase,
  Zap,
  Eye,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import companyDetailsHero from "@/assets/company-details-hero.png";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function CompanyDetailsPage() {
  return (
    <InfoPageLayout
      heroTitle="Company Details"
      heroSubtitle="VenueForEvent.com"
      heroImage={companyDetailsHero.src}
      heroDescription="Empowering Events Across India — Weddings, Corporate Gatherings & Experiences. Welcome to VenueForEvent.com, a smart, transparent, and scalable event venue discovery & booking platform designed to revolutionize how individuals, families, event planners, and corporate teams find the perfect space."
    >
      <SectionWrapper variant="ivory" withDecorations>
        <ContentBlock align="center" width="full">
          <p className="text-xl text-muted-foreground italic max-w-4xl mx-auto">
            VenueForEvent.com brings together social and corporate event requirements on one intuitive, SEO-optimised platform, backed by real technology and real hospitality expertise. Our parent company, Homocation Asia Pvt. Ltd., is the legal entity behind VenueForEvent.com—bringing credibility, business discipline, and long-term vision to the brand.
          </p>
        </ContentBlock>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="🏢 Corporate Overview" accent="Legal identity" />
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Company Name:</strong> Homocation Asia Private Limited</li>
              <li><strong className="text-foreground">Brand Name:</strong> VenueForEvent.com</li>
              <li><strong className="text-foreground">CIN:</strong> U55101DL2024PTC435007</li>
              <li><strong className="text-foreground">Date of Incorporation:</strong> 05 August 2024</li>
              <li><strong className="text-foreground">Registered Office:</strong> Plot No-18, D Block, Qutub Vihar Phase-1, Sector 19, South West Delhi – 110071, India</li>
              <li><strong className="text-foreground">Status:</strong> Active Private Limited Company</li>
              <li><strong className="text-foreground">Nature of Business:</strong> Event venue platform, hospitality tech, event services marketplace</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations className="section-bg-premium">
        <OrnateTitle title="🌟 Our Identity" accent="Purpose" />
        <p className="text-center text-muted-foreground italic max-w-3xl mx-auto mb-10">VenueForEvent.com is built with one clear purpose: To make event planning simple, transparent, and seamless — whether it&apos;s a lifetime celebration or a high-impact corporate event. We support:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] bg-white border border-champagne/20 shadow-soft">
            <SubTitle className="text-wine flex items-center gap-2"><Heart className="h-6 w-6" /> Social events</SubTitle>
            <p className="text-sm text-muted-foreground italic">Destination weddings, engagement parties, mehendi & sangeet, intimate weddings, receptions, themed celebration venues.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] bg-white border border-champagne/20 shadow-soft">
            <SubTitle className="text-wine flex items-center gap-2"><Briefcase className="h-6 w-6" /> Corporate events</SubTitle>
            <p className="text-sm text-muted-foreground italic">Conferences, MICE programs, seminars, product launches, team-building retreats, gala dinners, annual corporate events.</p>
          </motion.div>
        </div>
        <p className="text-center text-muted-foreground italic mt-10 max-w-3xl mx-auto">Across key destinations and cities including: Hill & destination cities: Mussoorie, Shimla, Manali, Nainital, Srinagar, Gulmarg, Dalhousie, Munnar, Coorg, Ooty • Metros & commercial centres: New Delhi, Mumbai, Bengaluru, Chandigarh, Amritsar, Dehradun • States with diversified event demand: Rajasthan, Goa, Kerala, Uttarakhand, Himachal Pradesh, Maharashtra, Karnataka, Tamil Nadu, Punjab, Haryana, Uttar Pradesh, Gujarat, West Bengal, Andhra Pradesh.</p>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="📌 What We Do" accent="Platform capabilities" />
        <p className="text-center text-muted-foreground italic mb-10 max-w-3xl mx-auto">VenueForEvent.com functions as a comprehensive venue discovery, comparison, and booking platform with technology and UX designed to:</p>
        <SimpleChecklist columns={2} items={["✔ Offer verified venue listings for social and corporate events", "✔ Integrate rich filters & comparison tools for better decision-making", "✔ Provide detailed venue profiles including capacity, packages, pricing ranges, and add-on services", "✔ Connect users directly with venues and partners", "✔ Facilitate curated responses & proposals based on event requirements", "✔ Support site visits, virtual tours, and guided decision support"]} />
        <p className="mt-10 text-center font-heading text-wine italic max-w-2xl mx-auto">We go beyond simple listings — we help planners make confident decisions faster, saving hours of research and negotiation.</p>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="🧠 Vision & Mission" accent="Where we're headed" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-dark-accent text-white shadow-luxury">
            <SubTitle className="text-champagne">Vision</SubTitle>
            <p className="text-white/90 leading-relaxed">To become India&apos;s most trusted and user-centric event venue discovery platform — unifying weddings, celebrations, corporate MICE, and experiential bookings under one ecosystem.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] glass-premium border border-champagne/20">
            <SubTitle className="text-wine">Mission</SubTitle>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Make event planning frictionless with data-led insights and clear visuals.</li>
              <li>Empower clients to evaluate multiple professional venues with confidence.</li>
              <li>Provide technology and support that drives better outcomes for users and partnered venues.</li>
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="🌐 Why VenueForEvent.com Exists" accent="Solve real problems" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { title: "🎉 Solve Complexity", desc: "Planning events today still involves juggling emails, phone calls, spreadsheets, and endless WhatsApp threads. We simplify that.", icon: Zap },
            { title: "📈 Bring Transparency", desc: "VenueForEvent.com shows clear pricing ranges, capacities, visuals, and service details so decision-making is grounded in facts.", icon: Eye },
            { title: "🤝 Connect with Trust", desc: "All venues are verified before listing — giving users, planners, and corporate clients peace of mind.", icon: ShieldCheck },
            { title: "💼 Blend Social + Corporate", desc: "We uniquely combine both worlds — from intimate wedding venues in Shimla to product launch venues in Mumbai, all in one platform.", icon: Briefcase },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} className="p-8 rounded-[2.5rem] bg-white border border-champagne/20 shadow-soft text-center">
              <item.icon className="h-10 w-10 text-wine mx-auto mb-4" />
              <p className="font-heading font-bold text-wine mb-2">{item.title}</p>
              <p className="text-sm text-muted-foreground italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="📊 Our Commitment to Partners" accent="Partner-centric" />
        <p className="text-center text-muted-foreground italic mb-10 max-w-3xl mx-auto">We work with venue owners, planners, decorators, caterers, and service providers by providing:</p>
        <SimpleChecklist columns={2} items={["Lead generation support", "Enhanced listing visibility", "Marketing insights and analytics", "Technology tools to manage bookings", "Feedback loops for continuous improvement"]} />
        <p className="mt-10 text-center text-muted-foreground italic max-w-2xl mx-auto">This partner-centric ecosystem strengthens services across social and corporate segments alike.</p>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="🚀 Backed by Homocation Asia Pvt. Ltd." accent="Spodia ecosystem" />
        <p className="text-center text-muted-foreground italic mb-10 max-w-3xl mx-auto">VenueForEvent.com is part of the operational ecosystem built by Homocation Asia Pvt. Ltd., the company also behind Spodia.com — a trusted hospitality marketplace that champions inclusive hotel, homestay, restaurant, spa, and event bookings. The parent company&apos;s philosophy emphasizes: Sustainable alliances with local and premium hospitality stakeholders • Technology-first platforms designed for scale • Clear processes, measured performance, and governance. This foundation ensures VenueForEvent.com isn&apos;t just a concept — it&apos;s a technology business built with governance, strategic focus, and long-term viability.</p>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="✔ Trust & Safety" accent="Four pillars" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { title: "🛡 Verified Partners", desc: "Every venue undergoes a vetting process before it's listed.", icon: ShieldCheck },
            { title: "🔐 Data Privacy", desc: "User data is protected with industry-standard security measures.", icon: Lock },
            { title: "📊 Transparent Info", desc: "All key details are displayed clearly — no hidden pricing, no surprises.", icon: FileText },
            { title: "🧑‍💼 Dedicated Support", desc: "Multi-channel support — email, phone, WhatsApp for quick responses.", icon: Users },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} className="p-8 rounded-[2.5rem] bg-white/80 border border-champagne/20 shadow-soft text-center">
              <item.icon className="h-10 w-10 text-wine mx-auto mb-4" />
              <p className="font-heading font-bold text-wine mb-2">{item.title}</p>
              <p className="text-sm text-muted-foreground italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="📍 Contact & Business Support" accent="Get in touch" />
        <div className="max-w-2xl mx-auto p-10 rounded-[3rem] glass-premium border border-champagne/20">
          <p className="font-heading text-wine font-bold mb-4">Head Office:</p>
          <p className="text-muted-foreground">Plot No-18, D Block, Qutub Vihar Phase-1, Sector 19, South West Delhi – 110071, India</p>
          <p className="mt-6 font-bold text-foreground">Website: www.venueforevent.com</p>
          <p className="mt-2">Email: support@venueforevent.com</p>
          <p className="mt-2">Business & Partnerships: partners@venueforevent.com</p>
          <p className="mt-2">Investor Relations: investors@venueforevent.com</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="📎 Legal & Compliance" accent="Accountability" />
        <p className="text-center text-muted-foreground italic max-w-3xl mx-auto">VenueForEvent.com operates under standard Indian corporate law, with Homocation Asia Pvt. Ltd. registered with the Ministry of Corporate Affairs. All usage terms and privacy policies are clearly stated in our Terms & Conditions and Privacy Policy, ensuring legal accountability and user protection.</p>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="📈 Growth & Future Direction" accent="Roadmap" />
        <p className="text-center text-muted-foreground italic mb-8 max-w-3xl mx-auto">We&apos;re committed to expanding: Partner venues across top wedding destinations and corporate hubs • Enhanced AI-driven recommendations • Multi-lingual & regional experiences • Dedicated mobile experience. Our roadmap includes expanding VenueForEvent.com&apos;s footprint across South Asia with hospitality partners and client communities.</p>
      </SectionWrapper>

      <SectionWrapper variant="dark" withDecorations className="section-bg-dark">
        <OrnateTitle title="🎯 Final Take" accent="VenueForEvent.com" variant="dark" />
        <p className="text-center text-white/90 italic max-w-3xl mx-auto mb-10">VenueForEvent.com isn&apos;t just a listing platform — it&apos;s a hub for celebration, business, engagement, and milestone creation. From the best banquet halls in Amritsar to seminar venues with accommodation in Shimla, from heritage fort weddings in Rajasthan to executive boardroom rentals in Bengaluru, we connect dreams with the right space.</p>
        <p className="text-center text-xl font-heading text-champagne font-bold">Your event deserves clarity. Your planning deserves simplicity. Your choice deserves confidence.</p>
        <p className="text-center text-champagne mt-8 font-heading text-2xl">Welcome to the future of event discovery — VenueForEvent.com.</p>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
