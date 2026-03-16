"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  SimpleChecklist,
  SubTitle,
  OrnateTitle,
  StepGrid,
  Tilt,
  HighlightCard,
  HighlightedQuote,
  AlternatingGrid,
} from "@/components/common/InfoComponents";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  ShieldCheck,
  Clock,
  MessageSquare,
  Heart,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Globe,
  Zap,
  Star,
  Users,
  Award,
  Sparkles,
  Calendar,
  Lock,
  Target,
  Handshake,
  TrendingUp,
  Landmark,
} from "lucide-react";
import MandalaDecor from "@/components/pages-components/home/MandalaDecor";
import { motion } from "framer-motion";
import contactHero from "@/assets/contact-hero.png";
import Link from "next/link";

export default function ContactPage() {
  return (
    <InfoPageLayout
      heroTitle="Contact Us"
      heroSubtitle="One Conversation. The Perfect Venue."
      heroImage={contactHero.src}
      heroDescription="Planning an event — whether it’s a royal palace wedding in Rajasthan, a destination wedding in Goa, a conference in New Delhi, a corporate offsite in Himachal Pradesh, or a gala dinner in Mumbai — begins with clarity. That clarity starts here."
      hideWave={true}
    >
      {/* Welcome / Intro Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="pt-12 md:pt-24 pb-20 md:pb-40 -mt-4 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <ContentBlock
          align="center"
          width="full"
          accent="Welcome to VenueForEvent.com"
        >
          <p className="text-2xl md:text-3xl leading-relaxed text-wine font-heading mb-12 text-center lg:max-w-5xl xl:max-w-6xl mx-auto italic">
            At VenueForEvent.com, we specialize in connecting individuals,
            families, event planners, corporations, and enterprises with
            verified venues across India and emerging destinations.
          </p>

          <div className="max-w-6xl mx-auto">
            <p className="font-bold text-wine mb-8 uppercase tracking-[0.2em] text-sm">
              📍 Nationwide Presence:
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
              {[
                "Mussoorie",
                "Shimla",
                "Manali",
                "Nainital",
                "Srinagar",
                "Gulmarg",
                "Munnar",
                "Coorg",
                "Ooty",
                "Bengaluru",
                "Chandigarh",
                "Rishikesh",
                "Dehradun",
                "Jim Corbett (Ramnagar)",
                "Amritsar",
                "Karnal",
                "Kerala",
                "Maharashtra",
                "Uttarakhand",
                "Tamil Nadu",
                "Karnataka",
                "Punjab",
                "Gujarat",
                "West Bengal",
                "Jammu & Kashmir",
                "Andhra Pradesh",
              ].map((city, idx) => (
                <motion.span
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(128, 0, 32, 0.05)",
                    borderColor: "rgba(128, 0, 32, 0.2)",
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  className="px-5 py-2.5 rounded-2xl bg-white border border-champagne/10 text-foreground font-medium shadow-sm cursor-default transition-colors hover:text-wine"
                >
                  {city}
                </motion.span>
              ))}
              <span className="px-5 py-2.5 rounded-2xl bg-ivory border border-wine/10 text-wine font-bold italic shadow-sm">
                & many more...
              </span>
            </div>
          </div>

          <div className="prose prose-xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto text-center italic space-y-8">
            <p className="font-bold text-wine not-italic">
              Whether you&apos;re searching for:
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 not-prose">
              {[
                "Best wedding venues in Goa",
                "Luxury marriage gardens in Chandigarh",
                "Intimate wedding venues in Mussoorie",
                "Riverside wedding spots in Rishikesh",
                "5 star wedding hotels in Mumbai",
                "Conference halls in New Delhi",
                "Business meeting rooms in Bengaluru",
                "Corporate offsite resorts in Himachal Pradesh",
                "Convention centers in Maharashtra",
                "Tech-ready conference spaces in Hyderabad",
              ].map((term) => (
                <span
                  key={term}
                  className="px-4 py-2 rounded-full bg-white/60 border border-wine/10 text-sm font-medium text-foreground italic"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </ContentBlock>

        <div className="mt-24">
          <HighlightedQuote>
            You don&apos;t need 500 results. You need the right venue. And
            that&apos;s what we help you find.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Why Contact Us Section */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Why Contact Us?" accent="Clarity Over Noise" />
        <div className="prose prose-2xl text-muted-foreground max-w-5xl mx-auto text-center mb-20 italic">
          <p>
            Because planning events is not just about pictures — it’s about:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-0">
          {[
            { title: "Budget alignment", icon: Target },
            { title: "Guest capacity accuracy", icon: Users },
            { title: "Availability confirmation", icon: Clock },
            { title: "Location accessibility", icon: MapPin },
            { title: "Vendor coordination", icon: Handshake },
            { title: "Technical readiness", icon: Zap },
            { title: "Negotiation support", icon: Award },
            { title: "Timeline execution", icon: TrendingUp },
          ].map((item, i) => {
            const Icon = item.icon || CheckCircle2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Tilt>
                  <div className="p-8 rounded-[2.5rem] bg-ivory/50 border border-champagne/10 shadow-sm hover:shadow-xl transition-all text-center h-full group">
                    <div className="h-16 w-16 mx-auto rounded-2xl bg-white text-wine flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all transform group-hover:rotate-12">
                      <Icon size={28} />
                    </div>
                    <h4 className="font-heading text-xl font-bold mb-2">
                      {item.title}
                    </h4>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-18 text-center">
          <p className="text-2xl md:text-3xl font-heading text-wine italic leading-relaxed max-w-4xl mx-auto">
            "A single conversation with our specialists can save weeks of
            research."
          </p>
        </div>
      </SectionWrapper>

      {/* Inquiry Form Section */}
      <SectionWrapper
        variant="gradient"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
        id="form"
      >
        <OrnateTitle
          title="Tell Us About Your Event"
          accent="Choose Your Event Type"
        />
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-10 py-6 rounded-3xl border-2 border-wine/20 bg-white shadow-luxury font-heading font-bold text-wine flex flex-col items-center gap-3 flex-1 text-center"
            >
              <Heart className="h-8 w-8" />
              <span className="text-xl">Wedding / Social Event</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-10 py-6 rounded-3xl border-2 border-wine/20 bg-white shadow-luxury font-heading font-bold text-wine flex flex-col items-center gap-3 flex-1 text-center"
            >
              <Briefcase className="h-8 w-8" />
              <span className="text-xl">Corporate / MICE Event</span>
            </motion.div>
          </div>
          <p className="text-center text-muted-foreground italic text-lg">
            Our system automatically routes your inquiry to the right expert
            team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] md:rounded-[4rem] py-12 px-6 md:p-16 border border-wine/10 relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-wine/5 rounded-full blur-[100px]" />

            <div className="space-y-8 relative z-10">
              <div className="text-center mb-10">
                <h3 className="font-heading text-3xl font-bold text-wine mb-2 flex items-center justify-center gap-3">
                  <Send className="h-6 w-6" /> Universal Event Inquiry Form
                </h3>
                <p className="text-muted-foreground italic">
                  Response within 24 working hours
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email@domain.com"
                    className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                    Event Type
                  </label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all appearance-none cursor-pointer">
                    <option>
                      Wedding, Reception, Sangeet, Engagement, Conference,
                      Offsite, Seminar, Launch, Retreat, Exhibition, etc.
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                    Preferred City / Destination
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Goa, Jaipur"
                    className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                    Event Date(s)
                  </label>
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                    Estimated Guest Count
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 200"
                    className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10-20 Lakhs"
                    className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                  Residential Required? (Yes/No)
                </label>
                <input
                  type="text"
                  placeholder="Yes or No"
                  className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] ml-2">
                  Special Requirements / Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Any specific needs..."
                  className="w-full px-6 py-4 rounded-2xl bg-ivory/50 border border-champagne/20 focus:border-wine/40 outline-none transition-all resize-none"
                />
              </div>

              <button className="w-full bg-wine text-white py-5 md:py-6 rounded-2xl font-heading text-base md:text-xl font-bold shadow-xl hover:bg-wine/90 transition-all flex items-center justify-center gap-3 group">
                Submit Inquiry Now{" "}
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center space-y-2 pt-4 border-t border-wine/10">
                <p className="text-xs md:text-sm font-medium text-foreground/70 flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-wine" /> Curated venue
                  recommendations
                </p>
                <p className="text-xs md:text-sm font-medium text-foreground/70 flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-wine" /> No spam. No
                  irrelevant calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Segment Details: Wedding vs Corporate */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <div className="space-y-32">
          {/* Wedding Segment */}
          <div className="max-w-6xl mx-auto w-full px-3 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="py-12 px-6 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-white border border-wine/10 shadow-sm relative overflow-hidden h-full flex flex-col w-full">
                  <SubTitle className="text-lg md:text-3xl text-wine mb-8 flex items-center gap-4 font-bold leading-tight">
                    💍 If You’re Planning a Wedding or Social Celebration
                  </SubTitle>
                  <p className="text-base md:text-xl italic text-muted-foreground mb-10 leading-relaxed">
                    Your wedding is emotional. It’s once in a lifetime. Whether
                    you’re dreaming of:
                  </p>
                  <div className="space-y-8 flex-grow">
                    <div>
                      <h4 className="font-bold text-foreground mb-4 uppercase tracking-widest text-xs">
                        Dream Destinations:
                      </h4>
                      <SimpleChecklist
                        columns={2}
                        items={[
                          "Destination wedding resorts in Goa",
                          "Heritage fort wedding in Rajasthan",
                          "Mountain wedding in Manali",
                          "Lake view wedding in Nainital",
                          "Forest wedding venues in Uttarakhand",
                          "Beach resort for wedding in Kerala",
                          "Outdoor wedding lawns in Dehradun",
                          "Engagement party venues in Mumbai",
                          "Mehendi and Sangeet venues in Chandigarh",
                          "Farmhouse for wedding in Karnal",
                        ]}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-4 uppercase tracking-widest text-xs">
                        We help you compare options based on:
                      </h4>
                      <SimpleChecklist
                        columns={2}
                        items={[
                          "Guest count",
                          "Budget",
                          "Decor flexibility",
                          "Catering services",
                          "Accommodation inventory",
                          "Photography & pre-wedding shoot locations",
                          "All-inclusive wedding packages",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-wine/10 italic text-muted-foreground">
                    <p>
                      You don’t need to stress about destination wedding cost in
                      Jaipur or comparing banquet halls in Delhi — we assist
                      step by step.
                    </p>
                    <p className="font-heading text-wine font-bold text-base md:text-xl mt-6 not-italic">
                      📞 Prefer to talk immediately?
                    </p>
                    <div className="space-y-2 not-italic">
                      <p className="text-sm md:text-lg font-bold text-foreground">
                        Call: +91-8800842084
                      </p>
                      <p className="text-sm md:text-lg font-bold text-foreground">
                        WhatsApp: +91-7399888844
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="py-12 px-6 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-dark-accent text-white shadow-luxury border border-white/10 relative overflow-hidden h-full flex flex-col w-full">
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Briefcase size={100} />
                  </div>
                  <SubTitle className="text-lg md:text-3xl text-champagne mb-8 flex items-center gap-4 font-bold leading-tight">
                    🏢 If You’re Planning a Corporate Event
                  </SubTitle>
                  <p className="text-white/80 italic text-sm md:text-lg mb-10 leading-relaxed">
                    Corporate events require precision. We assist companies
                    organizing:
                  </p>
                  <div className="space-y-8 flex-grow">
                    <div>
                      <h4 className="font-bold text-champagne mb-4 uppercase tracking-widest text-xs">
                        Space Focus:
                      </h4>
                      <SimpleChecklist
                        variant="dark"
                        columns={1}
                        items={[
                          "Annual corporate retreats in Uttarakhand",
                          "Product launch venues in Mumbai",
                          "Training room hire in Bengaluru",
                          "Dealers meet organizers in Chandigarh",
                          "Executive boardroom rentals in New Delhi",
                          "Exhibition centers in Gujarat",
                          "Gala dinner venues in Kerala",
                          "Residential conference packages in Maharashtra",
                          "Networking event venues in Pune",
                          "Large capacity auditoriums in Hyderabad",
                        ]}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-champagne mb-4 uppercase tracking-widest text-xs">
                        Our Support:
                      </h4>
                      <SimpleChecklist
                        variant="dark"
                        columns={1}
                        items={[
                          "Capacity verification",
                          "AV & technical layout",
                          "Breakout rooms",
                          "Corporate pricing negotiation",
                          "Room block planning",
                          "On-site coordination",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="font-heading text-champagne font-bold text-base md:text-xl mb-4">
                      📧 Corporate Desk: corporate@venueforevent.com
                    </p>
                    <p className="text-sm md:text-lg font-bold text-white">
                      📞 Direct Support: +91-8800842084
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Trust & Governance Section */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="Why People Trust VenueForEvent.com"
          accent="Strategy & Vision"
        />
        <ContentBlock align="center" width="medium">
          <p className="text-xl md:text-2xl text-muted-foreground italic mb-16 text-center">
            We operate under{" "}
            <span className="text-wine font-bold">
              Homocation Asia Private Limited
            </span>
            , the parent company behind the hospitality ecosystem including
            Spodia. This gives us:
          </p>
        </ContentBlock>

        <div className="mb-24">
          <StepGrid
            steps={[
              {
                title: "Operational Systems",
                desc: "Established systems for venue verification and inquiry routing.",
                icon: ShieldCheck,
              },
              {
                title: "Multi-City Presence",
                desc: "Offices in New Delhi, Bengaluru, Assam, and Kolkata.",
                icon: MapPin,
              },
              {
                title: "Tech Infrastructure",
                desc: "Scalable platform powered by the Spodia ecosystem.",
                icon: Zap,
              },
              {
                title: "Support Teams",
                desc: "Dedicated experts for social and corporate inquiries.",
                icon: Users,
              },
              {
                title: "Governance",
                desc: "Professional corporate governance and compliance.",
                icon: Landmark,
              },
            ]}
          />
        </div>

        <div className="text-center">
          <p className="text-xl font-heading text-wine italic">
            "We are not a random listing website — we are an organized event
            venue discovery platform."
          </p>
        </div>
      </SectionWrapper>

      {/* Offices Section */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
      >
        <OrnateTitle title="Our Offices" accent="Regional Presence" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-6 md:px-0">
          {[
            {
              city: "Head Office – New Delhi",
              name: "Homocation Asia Private Limited",
              address:
                "Samta Enclave, Near Mother Dairy, Qutub Vihar, Phase 1, Sector 19, Dwarka, New Delhi – 110071, India",
              contact: "+91-8800842084 • 📲 +91-7399888844",
              icon: Building2,
            },
            {
              city: "Bengaluru Office – Karnataka",
              address:
                "#590-10/1, 1st Cross, BEML Layout, Tubarahalli, Whitefield, Bengaluru, Karnataka – 560066, India",
              icon: MapPin,
            },
            {
              city: "Sonapur Office – Guwahati",
              address:
                "Purna Saikia Complex, NH-37, Sonapur, Kamrup (Metro), Assam – 782402, India",
              icon: MapPin,
            },
            {
              city: "Howrah Office – West Bengal",
              address:
                "Panchanantala, Panchpara, LP-494/55, Howrah, West Bengal – 711317, India",
              icon: MapPin,
            },
          ].map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Tilt className="h-full">
                <div className="p-8 md:p-10 rounded-[3rem] bg-white border border-wine/5 shadow-luxury hover:border-wine/20 transition-all h-full flex flex-col">
                  <div className="h-14 w-14 mx-auto rounded-2xl bg-ivory text-wine flex items-center justify-center mb-8 group-hover:bg-wine group-hover:text-white transition-all transform group-hover:rotate-12">
                    <office.icon size={28} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-4">
                    {office.city}
                  </h4>
                  {office.name && (
                    <p className="font-bold text-wine mb-2">{office.name}</p>
                  )}
                  <p className="text-muted-foreground italic leading-relaxed mb-6">
                    {office.address}
                  </p>
                  {office.contact && (
                    <p className="mt-auto pt-6 border-t border-wine/5 font-bold text-foreground">
                      📞 {office.contact}
                    </p>
                  )}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Email Channels */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Dedicated Support" accent="Faster Routing" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-0">
          {[
            {
              label: "General Event Support",
              email: "support@venueforevent.com",
            },
            {
              label: "Corporate Events & MICE",
              email: "corporate@venueforevent.com",
            },
            {
              label: "Wedding & Social Planning",
              email: "weddings@venueforevent.com",
            },
            {
              label: "Venue Listing & Partnerships",
              email: "partners@venueforevent.com",
            },
            {
              label: "Investor Relations",
              email: "investors@venueforevent.com",
            },
            { label: "Media & Press", email: "media@venueforevent.com" },
            { label: "Careers & HR", email: "careers@venueforevent.com" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Tilt>
                <div className="p-8 rounded-[2rem] bg-white border border-champagne/10 shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="h-12 w-12 mx-auto rounded-xl bg-ivory text-wine flex items-center justify-center mb-6">
                    <Mail size={20} />
                  </div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-lg font-bold text-wine hover:underline break-all"
                  >
                    {item.email}
                  </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Dates, Privacy, Process */}
      <SectionWrapper
        variant="gradient"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
      >
        <div className="max-w-6xl mx-auto space-y-24 px-6 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Tilt className="h-full">
                <div className="p-7 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-white border border-wine/10 shadow-luxury h-full">
                  <SubTitle className="text-2xl text-wine mb-6 flex items-center gap-3">
                    <Calendar className="h-6 w-6" /> ⏳ Prime Dates Fill Quickly
                  </SubTitle>
                  <p className="text-muted-foreground italic leading-relaxed mb-6">
                    Wedding season (October–February) and peak corporate
                    quarters (Q3 & Q4) experience high demand in cities like
                    Mumbai, Delhi, Bengaluru, Jaipur, and Goa.
                  </p>
                  <p className="font-bold text-foreground">
                    "If your event is within 3–6 months, early inquiry improves
                    availability and negotiation leverage."
                  </p>
                </div>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Tilt className="h-full">
                <div className="p-7 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-wine text-white shadow-luxury h-full">
                  <SubTitle className="text-2xl text-champagne mb-6 flex items-center gap-3">
                    <Lock className="h-6 w-6" /> 🔒 Privacy & Data Security
                  </SubTitle>
                  <SimpleChecklist
                    variant="dark"
                    columns={1}
                    items={[
                      "We do not sell your data.",
                      "We do not spam.",
                      "No auto-sharing without permission.",
                      "Handled under Homocation Asia Pvt. Ltd. compliance.",
                    ]}
                  />
                </div>
              </Tilt>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-12 md:p-20 rounded-[4rem] md:rounded-[5rem] bg-white/60 backdrop-blur-xl border border-wine/10 shadow-luxury text-center relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
              <MandalaDecor size={500} />
            </div>
            <SubTitle className="text-xl md:text-3xl text-wine mb-12">
              🧠 What Happens After You Contact Us?
            </SubTitle>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
              {[
                "You submit inquiry",
                "We acknowledge",
                "Specialist reviews requirements",
                "Curated venue shortlist shared",
                "You connect directly with venues",
                "Optional follow-up assistance",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-4 w-[140px] md:w-auto"
                >
                  <div className="h-14 w-14 rounded-full bg-wine text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {i + 1}
                  </div>
                  <span className="font-bold text-foreground italic text-sm md:text-base">
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-16 text-2xl font-heading text-wine italic">
              Simple. Professional. Efficient.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper
        variant="dark"
        className="py-24 md:py-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
        sideDecorations
      >
        <OrnateTitle
          title="Your event deserves the right venue"
          accent="Final Call to Action"
          variant="dark"
        />
        <ContentBlock align="center" width="medium" variant="dark">
          <p className="text-xl md:text-2xl text-white/80 italic mb-16 text-center leading-relaxed">
            Whether it’s: A royal wedding in Rajasthan • A beach ceremony in Goa
            • A mountain celebration in Manali • A leadership summit in New
            Delhi • A corporate offsite in Himachal Pradesh • A gala dinner in
            Mumbai
          </p>
          <p className="text-center text-3xl font-heading text-champagne mb-12">
            Your event deserves the right venue.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#form"
              className="px-10 py-5 rounded-2xl bg-white text-wine font-heading font-bold text-xl shadow-luxury hover:bg-champagne-light transition-all flex items-center gap-3"
            >
              🔴 Submit Your Inquiry Now
            </Link>
            <a
              href="tel:+918800842084"
              className="px-10 py-5 rounded-2xl border-2 border-white/20 text-white font-heading font-bold text-xl hover:bg-white/10 transition-all flex items-center gap-3"
            >
              📞 Call Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <a
              href="https://wa.me/918800842084"
              className="text-champagne font-bold hover:underline flex items-center gap-2"
            >
              📲 WhatsApp Us
            </a>
            <a
              href="mailto:support@venueforevent.com"
              className="text-champagne font-bold hover:underline flex items-center gap-2"
            >
              📧 Email Us
            </a>
          </div>

          <p className="mt-16 text-champagne/60 font-bold uppercase tracking-[0.3em] text-sm italic">
            We respond within 24 working hours
          </p>
        </ContentBlock>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
