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
  Heart,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  Phone,
  MessageSquare,
  FileDown,
  Star,
  Users,
  Zap,
  Award,
  Globe,
  TrendingUp,
  Target,
  Search,
  Building2,
  MapPin,
} from "lucide-react";
import listServiceHero from "@/assets/list-service-hero.png";
import socialImg from "@/assets/palace-wedding.jpg";
import corporateImg from "@/assets/banquet-hall.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ListYourServicePage() {
  return (
    <InfoPageLayout
      heroTitle="List Your Service"
      heroSubtitle="VenueForEvent.com"
      heroImage={listServiceHero.src}
      heroDescription="Get Discovered by Clients Planning Weddings, Corporate Events & Destination Celebrations Across India"
      hideWave={true}
      heroTitleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap"
    >
      {/* Intro Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="pt-12 md:pt-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <ContentBlock
          align="center"
          width="full"
          accent="Join India's Top Event Ecosystem"
        >
          <p className="text-2xl md:text-3xl leading-relaxed text-wine font-heading mb-10 italic lg:max-w-5xl xl:max-w-6xl mx-auto">
            Are you a wedding planner, event decorator, caterer, photographer,
            production agency, corporate event manager, or experiential service
            provider?
          </p>
          <div className="prose prose-xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto text-center italic space-y-8">
            <p>
              VenueForEvent.com is building India’s most trusted event ecosystem
              — connecting venues, vendors, planners, and corporate buyers on
              one powerful platform.
            </p>
          </div>
        </ContentBlock>

        <Tilt className="mt-20">
          <div className="bg-white/60 backdrop-blur-xl px-6 py-10 md:p-20 rounded-[2.5rem] md:rounded-[5rem] border border-white/40 shadow-luxury relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-wine/5 rounded-full blur-[100px] group-hover:bg-wine/10 transition-all duration-700" />
            <div className="relative z-10 space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
                <div className="h-24 w-24 md:h-28 md:w-28 flex-shrink-0 rounded-[2.5rem] bg-wine text-white flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                  <Target className="h-12 w-12 md:h-14 md:w-14" />
                </div>
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-wine/10 text-wine text-xs font-bold uppercase tracking-widest">
                    The Visibility Advantage
                  </span>
                  <p className="text-xl md:text-3xl font-heading font-medium italic text-foreground/90 leading-tight">
                    "Your service deserves visibility where real booking
                    decisions happen."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {[
                  "Top wedding planners in Rajasthan",
                  "Professional event planners in Bengaluru",
                  "Wedding catering services in Chandigarh",
                  "Best wedding photographers in Punjab",
                  "Corporate event management in Maharashtra",
                  "Dealers meet organizers in New Delhi",
                  "Team building activities in Rishikesh",
                  "MICE event production partners in Mumbai",
                ].map((query, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group/tag relative p-6 rounded-[2rem] bg-white border border-wine/5 shadow-soft hover:shadow-luxury transition-all duration-500 flex items-center justify-center text-center overflow-hidden h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-wine/5 to-transparent opacity-0 group-hover/tag:opacity-100 transition-opacity" />
                    <span className="relative z-10 text-[11px] md:text-sm font-bold text-wine italic leading-tight">
                      "{query}"
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Tilt>

        <div className="mt-24">
          <HighlightedQuote>
            VenueForEvent.com connects you with real event planners actively
            finalizing vendors. We don’t send random inquiries.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Why List Section */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="Why List Your Service?"
          accent="India's Event Economy"
        />
        <div className="mb-24 prose prose-2xl text-muted-foreground max-w-5xl mx-auto text-center italic">
          <p>
            India’s event economy is massive and growing — from destination
            weddings in Goa to corporate offsite retreats in Uttarakhand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="bg-white p-6 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-champagne-gold/10 shadow-luxury relative h-full flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="absolute top-10 right-10 text-wine/10 hidden md:block">
                  <TrendingUp size={100} />
                </div>
                <div className="relative z-10 space-y-6 w-full">
                  <h4 className="text-xl md:text-2xl font-heading font-bold text-wine">
                    The Struggles
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Unpredictable lead flow",
                      "Low-quality inquiries",
                      "Overdependence on referrals",
                      "Heavy competition on social media",
                      "No structured corporate exposure",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 italic text-base md:text-lg text-muted-foreground text-left"
                      >
                        <div className="h-1.5 w-1.5 bg-wine rounded-full mt-2.5 shrink-0" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <div className="bg-wine/5 p-6 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-wine/10 shadow-inner relative h-full flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="absolute top-10 right-10 text-wine/10 hidden md:block">
                  <Target size={100} />
                </div>
                <div className="relative z-10 space-y-6 w-full">
                  <h4 className="text-xl md:text-2xl font-heading font-bold text-wine">
                    The Solution
                  </h4>
                  <p className="text-base md:text-xl leading-relaxed text-muted-foreground italic font-medium">
                    VenueForEvent.com solves this by connecting you with:
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "High-intent wedding clients",
                      "Corporate decision-makers",
                      "Event planners & venue owners",
                      "Multi-city destination bookings",
                    ]}
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Who Should List */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle
          title="Who Should List?"
          accent="Verified Service Providers"
        />
        <div className="max-w-5xl mx-auto text-center mb-20 px-6">
          <p className="text-xl md:text-3xl leading-relaxed text-muted-foreground italic font-medium">
            "We onboard verified service providers across both social and
            corporate event categories — ensuring high-quality connections for
            every celebration."
          </p>
        </div>

        <AlternatingGrid
          items={[
            {
              title: "💍 Wedding & Social Event Services",
              icon: Heart,
              text: (
                <div className="space-y-8">
                  <div className="p-8 rounded-[2rem] bg-wine/5 border border-wine/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                      <Heart size={80} />
                    </div>
                    <p className="text-lg lg:text-[17px] xl:text-xl italic leading-relaxed text-foreground relative z-10">
                      Perfect for professionals working in: Destination wedding
                      resorts in Goa, Luxury marriage gardens in Jaipur, Royal
                      palace wedding venues in Rajasthan, and more.
                    </p>
                  </div>
                  <SubTitle className="text-wine text-lg md:text-xl lg:text-[19px] xl:text-2xl">
                    Eligible Categories:
                  </SubTitle>
                  <SimpleChecklist
                    columns={2}
                    items={[
                      "Wedding planners",
                      "Theme wedding decorators",
                      "Floral designers",
                      "Photographers & cinematographers",
                      "Bridal makeup artists",
                      "Wedding catering services",
                      "Sound & light production",
                      "Entertainment artists & DJs",
                      "Pre-wedding shoot specialists",
                    ]}
                  />
                  <div className="pt-8 border-t border-wine/10 text-lg xl:text-xl font-heading text-foreground italic leading-snug">
                    "Clients searching for 'destination wedding cost in
                    Mussoorie' often need complete vendor solutions."
                  </div>
                </div>
              ),
              image: socialImg.src,
            },
            {
              title: "🏢 Corporate & MICE Services",
              icon: Briefcase,
              text: (
                <div className="space-y-8">
                  <div className="p-8 rounded-[2rem] bg-dark-accent/5 border border-dark-accent/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                      <Briefcase size={80} />
                    </div>
                    <p className="text-lg lg:text-[17px] xl:text-xl italic leading-relaxed text-foreground relative z-10">
                      Ideal for professionals supporting: Conference halls in
                      New Delhi, Business meeting rooms in Mumbai, MICE event
                      venues in Bengaluru, and corporate offsite resorts.
                    </p>
                  </div>
                  <SubTitle className="text-wine text-lg md:text-xl lg:text-[19px] xl:text-2xl">
                    Eligible Categories:
                  </SubTitle>
                  <SimpleChecklist
                    columns={2}
                    items={[
                      "Corporate event management agencies",
                      "Production & AV companies",
                      "Exhibition & stall fabricators",
                      "Team building activity organizers",
                      "Corporate wellness retreat facilitators",
                      "Branding & experiential marketing agencies",
                      "Product launch planners",
                      "Award ceremony production teams",
                    ]}
                  />
                  <div className="pt-8 border-t border-wine/10 text-muted-foreground italic text-lg leading-relaxed">
                    If a company is booking an annual corporate retreat in
                    Himachal Pradesh or a product launch venue in Mumbai, they
                    also need experienced service providers.
                  </div>
                </div>
              ),
              image: corporateImg.src,
            },
          ]}
        />
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="What You Get as a Service Partner"
          accent="Growth & Credibility"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-12 items-stretch">
          {[
            {
              title: "Verified Professional Profile",
              icon: ShieldCheck,
              desc: "Your profile will include: Service categories, Portfolio images & videos, Cities & states covered, Client testimonials, Package range, Specialization highlights, and Past event case studies.",
            },
            {
              title: "Direct Access to Event Clients",
              icon: Zap,
              desc: "We connect you with clients planning: Destination weddings, Intimate celebrations, Corporate conferences, Workation retreats, Product launches, Gala dinners, Dealers meets, and Wellness retreats.",
            },
            {
              title: "Multi-City Exposure",
              icon: Globe,
              desc: "Whether you operate in Rajasthan, Goa, Kerala, Uttarakhand, Himachal Pradesh, Maharashtra, Karnataka, Tamil Nadu, Punjab, Haryana, Gujarat, or West Bengal — we help expand your footprint.",
            },
            {
              title: "Increased Brand Credibility",
              icon: Award,
              desc: "Being listed builds authority, improves client trust, enhances Google discoverability, strengthens corporate positioning, and positions you as a verified professional.",
            },
            {
              title: "Structured Inquiry Details",
              icon: Target,
              desc: "All inquiries include structured details like: Event type, Guest count, Budget range, Event dates, and Venue location. No more vague 'Call for details' leads.",
            },
            {
              title: "Verified Onboarding",
              icon: Rocket,
              desc: "VenueForEvent.com operates under Homocation Asia Pvt. Ltd., ensuring structured onboarding and professional alignment for all our partners.",
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
                <div className="p-8 lg:px-6 lg:py-10 xl:p-12 rounded-[3.5rem] md:rounded-[4rem] bg-ivory/30 border border-wine/5 hover:bg-wine/5 transition-all group relative overflow-hidden h-full flex flex-col items-center text-center">
                  <div className="absolute top-6 right-8 text-7xl font-black text-wine/5 select-none transition-colors group-hover:text-wine/10">
                    {i + 1}
                  </div>
                  <div className="h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 rounded-[2rem] md:rounded-3xl bg-white text-wine flex items-center justify-center mb-8 lg:mb-10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <v.icon className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />
                  </div>
                  <h4 className="font-heading text-2xl xl:text-3xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
                    {v.title}
                  </h4>
                  <p className="text-sm lg:text-[15px] xl:text-lg text-muted-foreground leading-relaxed italic">
                    {v.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper
        variant="ivory"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="How It Works" accent="Simple Steps to Success" />
        <div className="mb-24">
          <StepGrid
            steps={[
              {
                title: "Submit Details",
                desc: "Complete our registration form with business name, category, portfolio samples, and pricing range.",
                icon: FileDown,
              },
              {
                title: "Verification",
                desc: "Our team evaluates service authenticity, experience, and portfolio quality to maintain high standards.",
                icon: ShieldCheck,
              },
              {
                title: "Optimization",
                desc: "We optimize your profile for keywords and location-based discovery to increase organic potential.",
                icon: Zap,
              },
              {
                title: "Receive Inquiries",
                desc: "Once approved, start receiving structured, high-intent inquiries from families and corporate teams.",
                icon: MessageSquare,
              },
            ]}
          />
        </div>

        <div className="mt-24 max-w-5xl mx-auto text-center space-y-12">
          <p className="text-2xl text-muted-foreground italic leading-relaxed">
            "Accurate portfolio details increase your chances of receiving
            premium leads."
          </p>
          <Tilt>
            <div className="px-6 py-12 md:p-24 rounded-[2.5rem] md:rounded-[5rem] bg-dark-accent text-white shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-wine opacity-20 blur-[150px] rounded-full group-hover:opacity-30 transition-all duration-1000" />
              <div className="relative z-10 text-center space-y-8 md:space-y-12">
                <p className="text-xl md:text-3xl font-heading text-champagne-gold leading-relaxed">
                  We optimize your profile for keywords such as: Best wedding
                  photographers in Punjab, Team building activities in
                  Rishikesh, Corporate event management in Maharashtra, and
                  more.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Wedding Planner",
                    "Decorator",
                    "Caterer",
                    "Photographer",
                    "AV Production",
                    "Event Manager",
                  ].map((cat) => (
                    <span
                      key={cat}
                      className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-bold text-champagne"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Partnership Models */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Partnership Models" accent="Flexible Options" />
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-2xl text-muted-foreground italic leading-relaxed">
            We offer flexible models including:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Lead-based performance plans", icon: TrendingUp },
            { title: "Featured listing visibility", icon: Star },
            { title: "City-specific promotional packages", icon: MapPin },
            { title: "Annual service partner plans", icon: Building2 },
          ].map((model, i) => (
            <motion.div key={i} className="group h-full">
              <Tilt className="h-full">
                <div className="p-8 rounded-[2.5rem] bg-ivory/50 border border-champagne/20 flex flex-col items-center text-center h-full hover:bg-white transition-all shadow-sm hover:shadow-xl">
                  <div className="h-16 w-16 mb-6 rounded-2xl bg-white text-wine flex items-center justify-center shadow-lg group-hover:bg-wine group-hover:text-white transition-all">
                    <model.icon size={32} />
                  </div>
                  <h4 className="font-heading text-lg font-bold leading-snug">
                    {model.title}
                  </h4>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center text-wine text-2xl font-heading italic">
          "Our goal is long-term partnership, not short-term listing."
        </p>
      </SectionWrapper>

      {/* Why Join Now + FAQ */}
      <SectionWrapper
        variant="ivory"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
      >
        <OrnateTitle title="Why Join Now?" accent="Peak Seasons are Here" />
        <div className="prose prose-2xl text-muted-foreground max-w-5xl mx-auto text-center mb-24 italic">
          <p>
            Peak seasons are booking fast across: Destination wedding resorts in
            Goa, Luxury villas for weddings in Coorg, Corporate offsite resorts
            in Uttarakhand, Exhibition centers in Mumbai, and Convention centers
            in New Delhi.
          </p>
          <p className="mt-8 text-wine font-bold text-3xl">
            Be visible during high-demand cycles.
          </p>
        </div>

        <div className="mt-32">
          <SubTitle className="text-center mb-16 text-4xl font-heading">
            Frequently Asked Questions
          </SubTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto px-4">
            {[
              {
                q: "Is there a listing fee?",
                a: "We offer flexible partnership structures depending on category and visibility. Contact our team for tailored plans.",
              },
              {
                q: "Do you work with freelancers?",
                a: "Yes — if verified and backed by a strong portfolio. We value quality and professionalism above all.",
              },
              {
                q: "Can I list services in multiple cities?",
                a: "Absolutely. Many partners operationally scale across Rajasthan, Goa, Kerala, Maharashtra, Karnataka, and Punjab.",
              },
              {
                q: "Do you support corporate-only vendors?",
                a: "Yes. We are actively expanding our MICE & corporate ecosystem to connect specialists with blue-chip clients.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <Tilt className="h-full">
                  <div className="p-10 rounded-[3rem] bg-white border border-champagne/10 h-full shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute bottom-6 right-6 text-wine opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:scale-110 pointer-events-none">
                      <MessageSquare size={100} strokeWidth={1} />
                    </div>
                    <h4 className="font-heading text-2xl font-bold mb-6 text-wine leading-tight relative z-10">
                      {faq.q}
                    </h4>
                    <p className="text-lg text-muted-foreground italic leading-relaxed relative z-10 font-medium">
                      {faq.a}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <HighlightedQuote>
            "Grow Beyond Referrals — If you’re serious about scaling your event
            business beyond word-of-mouth marketing, VenueForEvent.com is your
            growth platform."
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        sideDecorations
      >
        <OrnateTitle
          title="Take the Next Step"
          accent="Join VenueForEvent Today"
          variant="dark"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "List Your Service Now",
              icon: Star,
              href: "/contact",
              desc: "Get started instantly",
            },
            {
              title: "Call Our Team",
              icon: Phone,
              href: "tel:+918800842084",
              desc: "+91 88008 42084",
            },
            {
              title: "WhatsApp Us",
              icon: MessageSquare,
              href: "https://wa.me/918800842084",
              desc: "Quick Onboarding",
            },
            {
              title: "Download Brochure",
              icon: FileDown,
              href: "#",
              desc: "Partnership Guide",
            },
          ].map((cta, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link href={cta.href} className="block h-full">
                <Tilt className="h-full">
                  <div className="p-6 md:p-8 lg:p-6 xl:p-10 rounded-[3.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden h-full flex flex-col items-center text-center">
                    <div className="h-14 w-14 lg:h-16 lg:w-16 rounded-2xl bg-white/10 text-champagne flex items-center justify-center mb-6 lg:mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <cta.icon size={28} className="lg:hidden" />
                      <cta.icon size={32} className="hidden lg:block" />
                    </div>
                    <h4 className="font-heading text-lg lg:text-[17px] xl:text-2xl font-bold mb-2 text-white leading-tight">
                      {cta.title}
                    </h4>
                    <p className="text-xs lg:text-[13px] xl:text-sm text-white/50 italic">
                      {cta.desc}
                    </p>
                  </div>
                </Tilt>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto space-y-8">
          <p className="text-2xl md:text-4xl font-heading text-champagne-gold leading-tight italic">
            "India’s wedding and corporate event industry is expanding. Be
            visible. Be trusted. Be booked."
          </p>
          <p className="text-lg text-white/70 italic">
            Join VenueForEvent.com today and connect with clients who are ready
            to plan.
          </p>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
