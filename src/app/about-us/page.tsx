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
  Target,
  Eye,
  Award,
  ShieldCheck,
  Globe,
  MapPin,
  Building2,
  Zap,
  Sparkles,
  Users,
  TrendingUp,
  Star,
  Briefcase,
  History,
  Rocket,
  Landmark,
  Mountain,
  Trees,
  CheckCircle2,
  Package,
  Layers,
  Search,
  Leaf,
  Palmtree,
  Handshake,
  ArrowRight,
} from "lucide-react";
import aboutUsHero from "@/assets/about-us-hero.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutUsPage() {
  return (
    <InfoPageLayout
      heroTitle="About Us"
      heroSubtitle="VenueForEvent.com"
      heroImage={aboutUsHero.src}
      heroDescription="Celebrations. Connections. Possibilities."
      hideWave={true}
    >
      {/* Welcome Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        className="pt-24 pb-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <ContentBlock align="center" accent="Welcome to VenueForEvent.com">
          <p className="text-3xl leading-relaxed text-wine font-heading mb-10 italic">
            Every unforgettable celebration begins with a space. A space where
            vows are exchanged. A space where ideas are launched. A space where
            families reunite, teams collaborate, and milestones are remembered
            for a lifetime.
          </p>
          <div className="prose prose-xl text-muted-foreground max-w-4xl mx-auto text-center italic space-y-8">
            <p>
              VenueForEvent.com was created to simplify one of the most
              important decisions in event planning — choosing the right venue.
            </p>
            <p>
              Whether someone is searching for the best wedding venues in
              Mussoorie, comparing conference halls in New Delhi, exploring a
              beach resort for wedding in Goa, or planning a corporate offsite
              in Himachal Pradesh, our platform connects people to curated
              venues across India and expanding South Asian destinations.
            </p>
          </div>
        </ContentBlock>

        <Tilt className="mt-20">
          <div className="bg-white/60 backdrop-blur-xl p-12 md:p-20 rounded-[5rem] border border-white/40 shadow-luxury relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-wine/5 rounded-full blur-[100px] group-hover:bg-wine/10 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="h-24 w-24 flex-shrink-0 rounded-[2.5rem] bg-wine text-white flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Building2 className="h-12 w-12" />
              </div>
              <div className="text-xl md:text-2xl font-medium leading-relaxed italic text-foreground/90 leading-snug">
                "We are proud to be a part of Spodia, and operated under our
                parent company,{" "}
                <span className="text-wine font-bold">
                  Homocation Asia Private Limited
                </span>
                , a technology-driven organization building scalable platforms
                in hospitality and events."
              </div>
            </div>
          </div>
        </Tilt>

        <div className="mt-24">
          <HighlightedQuote>
            VenueForEvent.com is more than a listing portal. It is a celebration
            marketplace — built for emotion, powered by technology, and designed
            for growth.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Company Overview Section */}
      <SectionWrapper variant="white" className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <OrnateTitle title="Company Overview" accent="Legal & Structure" />
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
                title: "Group Platform",
                desc: "Spodia (Hospitality & Travel Ecosystem)",
                icon: Globe,
              },
              {
                title: "Industry",
                desc: "Event Technology, Venue Marketplace, Hospitality",
                icon: Briefcase,
              },
              {
                title: "Geographic Focus",
                desc: "India, Nepal, Bhutan, Bangladesh, Sri Lanka, Thailand, Indonesia, Vietnam",
                icon: MapPin,
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Tilt>
              <div className="bg-ivory/50 p-12 rounded-[4rem] border border-champagne/20 shadow-inner relative h-full">
                <div className="absolute top-10 right-10 text-champagne/10">
                  <History size={100} />
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground relative z-10 italic">
                  Homocation Asia Private Limited was founded with the vision of
                  creating integrated digital ecosystems in hospitality and
                  event discovery. Through Spodia, we built a strong foundation
                  in hotel listings, travel booking infrastructure, and scalable
                  technology platforms.
                </p>
              </div>
            </Tilt>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Tilt>
              <div className="bg-wine/5 p-12 rounded-[4rem] border border-wine/10 shadow-inner relative h-full">
                <div className="absolute top-10 right-10 text-wine/10">
                  <TrendingUp size={100} />
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground relative z-10 italic">
                  VenueForEvent.com extends that foundation into the rapidly
                  growing social and corporate events industry — a
                  multi-billion-dollar sector across India and neighboring
                  countries.
                </p>
              </div>
            </Tilt>
          </motion.div>
        </div>

        <div className="mt-32">
          <SubTitle className="text-center mb-16 text-4xl">
            Our platform bridges:
          </SubTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <HighlightCard
              icon={Heart}
              title="Social Celebrations (65% focus)"
              content="Dedicated to life's most precious emotional events, from grand weddings to intimate family gatherings."
            />
            <HighlightCard
              icon={Briefcase}
              title="Corporate & MICE Events (35% focus)"
              content="Strategic business gatherings, technology-ready conferences, and professional corporate retreats."
            />
          </div>
          <p className="mt-16 text-center text-muted-foreground text-xl font-medium italic opacity-60">
            This balanced approach allows us to serve both emotional life events
            and strategic business gatherings.
          </p>
        </div>
      </SectionWrapper>

      {/* Our Story */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        id="story"
      >
        <OrnateTitle title="Our Story" accent="A Journey of Vision" />
        <div className="prose prose-2xl text-muted-foreground max-w-5xl mx-auto text-center mb-20 italic">
          <p>
            India’s wedding and event industry is one of the largest in the
            world. From royal palace weddings in Rajasthan to intimate wedding
            venues in Nainital, from luxury villas for weddings in Coorg to
            heritage fort weddings in Himachal Pradesh, celebrations here are
            grand, diverse, and culturally rich.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Executive Boardrooms",
              desc: "Rentals in Mumbai",
              icon: Building2,
            },
            {
              title: "Tech-Ready Spaces",
              desc: "Conference spaces in Bengaluru",
              icon: Zap,
            },
            {
              title: "Convention Centers",
              desc: "In Chandigarh",
              icon: Landmark,
            },
            {
              title: "Seminar Halls",
              desc: "For rent in New Delhi",
              icon: Users,
            },
            {
              title: "Wellness Retreats",
              desc: "Corporate retreats in Kerala",
              icon: Leaf,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Tilt>
                <div className="p-10 rounded-[4rem] bg-white border border-champagne/10 shadow-sm hover:shadow-2xl transition-all text-center h-full">
                  <div className="h-20 w-20 mx-auto rounded-3xl bg-ivory text-wine flex items-center justify-center mb-8 group-hover:bg-wine group-hover:text-white transition-all transform group-hover:rotate-12">
                    <item.icon size={32} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-3">
                    {item.title}
                  </h4>
                  <p className="text-base opacity-60 italic font-medium">
                    {item.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 max-w-5xl mx-auto space-y-16">
          <p className="text-2xl text-center text-muted-foreground italic leading-relaxed">
            Despite the scale of the industry, venue discovery remained
            fragmented, inconsistent, and often confusing. We saw an
            opportunity.
          </p>
          <Tilt>
            <div className="p-16 md:p-24 rounded-[5rem] bg-dark-accent text-white shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-wine opacity-20 blur-[150px] rounded-full group-hover:opacity-30 transition-all duration-1000" />
              <div className="relative z-10 text-center space-y-12">
                <p className="text-3xl md:text-4xl font-heading text-champagne-gold leading-relaxed">
                  By leveraging Spodia’s hospitality technology backbone, we
                  envisioned a unified, structured, inquiry-driven venue
                  marketplace — where individuals, families, and corporations
                  can explore, compare, and connect with venues seamlessly.
                </p>
                <h4 className="font-accent text-5xl md:text-7xl text-white drop-shadow-luxury">
                  That vision became VenueForEvent.com.
                </h4>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper
        variant="white"
        className="py-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <ContentBlock title="Our Mission" accent="The Purpose" width="full">
              <p className="text-2xl leading-relaxed text-muted-foreground mb-12 italic">
                To simplify venue discovery and event planning across India and
                South Asia through a technology-driven, transparent, and
                user-centric marketplace.
              </p>
              <SubTitle className="text-wine text-3xl">
                We aim to empower:
              </SubTitle>
              <SimpleChecklist
                items={[
                  "Couples planning destination weddings",
                  "Families organizing milestone celebrations",
                  "Corporates hosting conferences and MICE events",
                  "Event professionals seeking structured venue access",
                ]}
              />
              <p className="mt-12 text-xl text-muted-foreground italic font-medium border-l-8 border-wine/20 pl-8">
                From searching for destination wedding cost in Jaipur to booking
                business meeting rooms in Mumbai, our mission is to make the
                process effortless and inspiring.
              </p>
            </ContentBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <ContentBlock title="Our Vision" accent="The Future" width="full">
              <p className="text-2xl leading-relaxed text-muted-foreground mb-12 italic">
                To become South Asia’s most trusted and scalable venue
                marketplace — known for quality listings, transparent
                communication, and premium user experience.
              </p>
              <SubTitle className="text-wine text-3xl">
                We envision a future where:
              </SubTitle>
              <SimpleChecklist
                items={[
                  "A bride can easily compare outdoor wedding lawns in Dehradun",
                  "A CEO can shortlist large capacity auditoriums in Bengaluru",
                  "A startup can plan a product launch venue in New Delhi",
                  "A family can explore riverside wedding spots in Rishikesh",
                ]}
              />
              <p className="mt-12 text-xl text-muted-foreground italic font-medium border-l-8 border-wine/20 pl-8">
                All within one intelligent platform.
              </p>
            </ContentBlock>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper
        variant="dark"
        className="py-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
      >
        <OrnateTitle title="Our Core Values" accent="The Pillars of Trust" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              num: "01",
              title: "Transparency",
              icon: ShieldCheck,
              desc: "We believe trust is the foundation of every successful event. Clear communication, structured information, and honest representation guide everything we do.",
            },
            {
              num: "02",
              title: "Empowerment",
              icon: Zap,
              desc: "We empower users to make informed decisions — whether they’re choosing all-inclusive wedding packages in Goa or comparing residential conference packages in Maharashtra.",
            },
            {
              num: "03",
              title: "Quality Over Quantity",
              icon: Award,
              desc: "We prioritize curated listings with structured information, high-quality visuals, and organized data — from 5 star wedding hotels in Srinagar to seminar venues with accommodation in Hyderabad.",
            },
            {
              num: "04",
              title: "Innovation",
              icon: Sparkles,
              desc: "Backed by Spodia’s technology ecosystem, we continuously enhance UI, UX, search intelligence, and inquiry management.",
            },
            {
              num: "05",
              title: "Inclusion",
              icon: Users,
              desc: "We celebrate India’s diversity — from traditional wedding venues in Uttar Pradesh to forest wedding venues in Uttarakhand, from gala dinner venues in Chandigarh to workation resorts in Kerala.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Tilt>
                <div className="p-12 rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden h-full">
                  <div className="absolute -top-6 -right-6 text-9xl font-black text-white/5 select-none transition-colors group-hover:text-white/10">
                    {v.num}
                  </div>
                  <div className="h-20 w-20 rounded-3xl bg-white/10 text-champagne flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <v.icon className="h-10 w-10" />
                  </div>
                  <h4 className="font-heading text-3xl font-bold mb-6 text-white">
                    {v.title}
                  </h4>
                  <p className="text-lg text-white/70 leading-relaxed italic">
                    {v.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Geographic Strength */}
      <SectionWrapper
        variant="white"
        className="py-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
      >
        <OrnateTitle
          title="Our Geographic Strength"
          accent="India's Diverse Canvas"
        />
        <div className="prose prose-2xl text-muted-foreground mx-auto text-center mb-24 italic">
          <p>India’s geography defines its celebration style.</p>
        </div>

        <div className="space-y-32">
          {/* Section 1: Hill Stations */}
          <div className="space-y-16">
            <Tilt>
              <div className="bg-wine/5 backdrop-blur-md p-16 md:p-24 rounded-[5rem] border border-wine/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Mountain size={150} />
                </div>
                <h4 className="font-heading text-4xl font-bold text-wine mb-12 flex items-center gap-6">
                  <Mountain className="h-10 w-10" /> Hill Stations & Scenic
                  Destinations
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
                    <motion.div
                      key={city}
                      whileHover={{ y: -10, scale: 1.1 }}
                      className="py-6 px-4 rounded-[2rem] bg-white border border-champagne/20 text-center text-base font-bold shadow-sm hover:text-wine hover:shadow-2xl transition-all cursor-default"
                    >
                      {city}
                    </motion.div>
                  ))}
                </div>
                <p className="mt-16 text-2xl text-muted-foreground italic font-medium leading-relaxed max-w-5xl">
                  Imagine planning a pre-wedding shoot location in Manali,
                  hosting a ceremony in a luxury villa for wedding in Coorg, or
                  choosing an intimate wedding venue in Dalhousie. We bring
                  these destinations closer to users through structured
                  discovery.
                </p>
              </div>
            </Tilt>
          </div>

          {/* Section 2: Metros */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Tilt>
                <div className="p-16 rounded-[5rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden h-full border border-white/10">
                  <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-wine opacity-10 blur-3xl rounded-full" />
                  <h4 className="font-heading text-4xl font-bold text-champagne mb-12 flex items-center gap-6">
                    <Building2 className="h-10 w-10" /> Metros & Emerging Cities
                  </h4>
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    {[
                      "New Delhi",
                      "Mumbai",
                      "Bengaluru",
                      "Chandigarh",
                      "Amritsar",
                      "Rishikesh",
                      "Dehradun",
                      "Jim Corbett (Ramnagar)",
                      "Karnal",
                    ].map((c) => (
                      <span
                        key={c}
                        className="text-lg font-bold text-white/80 hover:text-champagne transition-colors flex items-center gap-3"
                      >
                        <span className="h-1.5 w-1.5 bg-champagne rounded-full" />{" "}
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-6 border-t border-white/10 pt-10 opacity-80 italic text-base">
                    <p className="font-bold text-champagne uppercase tracking-[0.2em] text-xs mb-6">
                      Celebration & Corporate Focus:
                    </p>
                    <SimpleChecklist
                      columns={1}
                      items={[
                        "Best banquet halls in Mumbai",
                        "Engagement party venues in Chandigarh",
                        "Mehendi venues in Amritsar",
                        "Conference halls in New Delhi",
                        "Training room hire in Bengaluru",
                        "Networking venues in Mumbai",
                      ]}
                    />
                  </div>
                </div>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Tilt>
                <div className="p-16 rounded-[5rem] bg-ivory/80 backdrop-blur-md border border-wine/10 shadow-2xl relative overflow-hidden h-full">
                  <div className="absolute -top-10 -right-10 w-80 h-80 bg-champagne/10 blur-3xl rounded-full" />
                  <h4 className="font-heading text-4xl font-bold text-wine mb-12 flex items-center gap-6">
                    <Globe className="h-10 w-10" /> State-Wide Coverage
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10">
                    {[
                      "Rajasthan",
                      "Goa",
                      "Kerala",
                      "Uttarakhand",
                      "Himachal Pradesh",
                      "Maharashtra",
                      "Karnataka",
                      "Tamil Nadu",
                      "Uttar Pradesh",
                      "Punjab",
                      "Gujarat",
                      "West Bengal",
                      "Jammu & Kashmir",
                      "Andhra Pradesh",
                      "Haryana",
                    ].map((s) => (
                      <div
                        key={s}
                        className="flex items-center gap-4 text-base font-bold text-muted-foreground group/item hover:text-wine transition-colors"
                      >
                        <div className="h-3 w-3 bg-wine/20 rounded-full group-hover/item:bg-wine group-hover/item:scale-150 transition-all" />{" "}
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="mt-16 p-10 rounded-[3rem] bg-white shadow-inner border border-wine/5 italic text-muted-foreground text-lg font-medium leading-relaxed">
                    "From destination wedding resorts in Kerala to corporate
                    offsite resorts in Himachal Pradesh, we combine regional
                    diversity with structured discovery."
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Social & Corporate Core */}
      <SectionWrapper variant="gradient" className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <AlternatingGrid
          items={[
            {
              title: "Social Celebrations – Our Emotional Core",
              icon: Heart,
              text: (
                <div className="space-y-8">
                  <p className="text-2xl italic leading-relaxed">
                    Indian weddings are immersive experiences. They involve
                    décor, catering, photography, logistics, rituals, and
                    hospitality.
                  </p>
                  <p className="font-bold text-wine italic text-xl">
                    We help families explore:
                  </p>
                  <SimpleChecklist
                    columns={2}
                    items={[
                      "Luxury marriage gardens in Jaipur",
                      "Theme wedding decorators in New Delhi",
                      "Wedding catering services in Mumbai",
                      "Best wedding photographers in Punjab",
                      "Farmhouse for wedding in Dehradun",
                      "Budget-friendly weddings in Uttarakhand",
                    ]}
                  />
                  <div className="pt-8 border-t border-wine/10 text-2xl font-heading text-foreground italic leading-snug">
                    "We understand that searching for the perfect venue is not
                    just a transaction — it’s a dream."
                  </div>
                </div>
              ),
              image:
                "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Corporate & MICE – Structured Excellence",
              icon: Briefcase,
              text: (
                <div className="space-y-8">
                  <p className="text-2xl italic leading-relaxed">
                    Corporate events demand precision.
                  </p>
                  <p className="font-bold text-wine italic text-xl">
                    Businesses use our platform for:
                  </p>
                  <SimpleChecklist
                    columns={2}
                    items={[
                      "MICE event venues in Bengaluru",
                      "Dealers meet organizers in Mumbai",
                      "Award ceremony venues in Chandigarh",
                      "Exhibition centers in New Delhi",
                      "Professional event planners in Hyderabad",
                      "Corporate event management in Maharashtra",
                    ]}
                  />
                  <div className="pt-8 border-t border-wine/10 text-muted-foreground italic text-lg leading-relaxed">
                    We combine technology with curated venue data to support
                    scalable event execution.
                  </div>
                </div>
              ),
              image:
                "https://images.unsplash.com/photo-1540575861501-7ce0e1d1aa2b?q=80&w=2070&auto=format&fit=crop",
            },
          ]}
        />
      </SectionWrapper>

      {/* Tech & Platform Strength */}
      <SectionWrapper
        variant="white"
        className="py-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      >
        <OrnateTitle
          title="Technology & Platform Strength"
          accent="Driven by Innovation"
        />
        <div className="max-w-5xl mx-auto text-center mb-24 px-6">
          <p className="text-2xl text-muted-foreground italic leading-relaxed">
            Built under{" "}
            <span className="text-wine font-bold">
              Homocation Asia Private Limited
            </span>{" "}
            and powered by Spodia’s technology expertise, VenueForEvent.com
            benefits from:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: "Scalable Architecture", icon: Layers },
            { title: "Structured Database Systems", icon: Package },
            { title: "SEO-Optimized Dynamic Pages", icon: Search },
            { title: "Advanced Inquiry Routing", icon: Zap },
            { title: "High-Performance Frontend", icon: Rocket },
          ].map((tech, i) => (
            <motion.div key={i} className="group">
              <Tilt>
                <div className="p-12 rounded-[4rem] bg-ivory/60 backdrop-blur-md border border-champagne/20 flex flex-col items-center text-center h-full hover:bg-white transition-all">
                  <div className="h-20 w-20 mb-8 rounded-3xl bg-white text-wine flex items-center justify-center shadow-lg group-hover:bg-wine group-hover:text-white transition-all duration-500">
                    <tech.icon size={40} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold leading-snug">
                    {tech.title}
                  </h4>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <Tilt className="mt-32">
          <div className="p-16 md:p-24 rounded-[5rem] bg-wine text-white text-center shadow-[0_50px_100px_rgba(var(--wine),0.3)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex items-center justify-center">
              <Globe size={600} />
            </div>
            <p className="text-3xl font-heading mb-16 italic">
              Our focus is to ensure seamless discovery whether someone searches
              for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Destination wedding resorts in Goa",
                "Executive boardroom rentals in Mumbai",
                "Seminar halls for rent in Bengaluru",
                "Best wedding venues in Shimla",
              ].map((query) => (
                <div
                  key={query}
                  className="py-6 px-4 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 text-base font-bold text-champagne-gold italic"
                >
                  "{query}"
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </SectionWrapper>

      {/* Social Responsibility */}
      <SectionWrapper
        variant="ivory"
        className="py-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        withDecorations
      >
        <OrnateTitle
          title="Our Social Responsibility"
          accent="Responsible Growth"
        />
        <div className="max-w-5xl mx-auto text-center mb-24">
          <p className="text-2xl text-muted-foreground italic leading-relaxed">
            Celebrations bring people together. As a platform serving
            communities across India and South Asia, we believe in responsible
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <HighlightCard
            icon={Leaf}
            title="Sustainable Event Promotion"
            content={
              <div className="space-y-6 text-left">
                <p className="text-xl text-muted-foreground font-medium">
                  We encourage:
                </p>
                <SimpleChecklist
                  items={[
                    "Eco-friendly décor options",
                    "Responsible waste management",
                    "Local vendor empowerment",
                    "Community employment generation",
                  ]}
                />
              </div>
            }
          />
          <HighlightCard
            icon={Users}
            title="Supporting Local Economies"
            content={
              <div className="pt-6 text-left">
                <p className="text-xl text-muted-foreground italic leading-relaxed">
                  By listing venues in emerging cities like Karnal, Jim Corbett
                  (Ramnagar), Rishikesh, and Dehradun, we help drive economic
                  activity to growing destinations.
                </p>
              </div>
            }
          />
        </div>

        <Tilt className="mt-24">
          <div className="bg-white p-16 md:p-24 rounded-[5rem] border border-champagne/20 shadow-luxury">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="h-32 w-32 rounded-full bg-wine/5 flex items-center justify-center text-wine shadow-inner">
                <Handshake size={64} />
              </div>
              <div className="flex-1 space-y-8">
                <h4 className="font-heading text-4xl font-bold">
                  Empowering Venue Partners
                </h4>
                <p className="text-xl text-muted-foreground italic">
                  We don’t just serve users — we empower venues. Our platform
                  helps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Banquet halls increase visibility",
                    "Resorts receive targeted inquiries",
                    "Hotels showcase conference infrastructure",
                    "Boutique properties gain digital presence",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 text-base font-bold text-wine/80"
                    >
                      <div className="h-2 w-2 bg-wine rounded-full" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-16 text-center text-base font-medium italic text-muted-foreground pt-12 border-t border-wine/5">
              From intimate wedding venues in Mussoorie to tech-ready conference
              spaces in Mumbai, we provide structured digital growth
              opportunities.
            </p>
          </div>
        </Tilt>
      </SectionWrapper>

      {/* Why Investors Believe */}
      <SectionWrapper variant="white" className="py-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <OrnateTitle
          title="Why Investors Believe"
          accent="The Future of Discovery"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="group">
            <Tilt>
              <div className="relative rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
                <div className="absolute inset-0 bg-wine/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                  className="w-full h-auto"
                  alt="Business analysis"
                />
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-[3rem] text-white">
                  <p className="font-accent text-3xl">Strategic Growth</p>
                  <p className="text-sm font-medium opacity-80 mt-2">
                    Positioned at the intersection of Tech & Hospitality.
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="space-y-16">
            <p className="text-2xl text-muted-foreground italic leading-relaxed">
              The wedding and corporate event industry in India continues to
              grow rapidly. Key drivers include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Rising disposable income",
                "Destination wedding trend",
                "Corporate expansion",
                "Experiential event demand",
                "Digital discovery shift",
              ].map((driver, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-[2rem] bg-ivory border border-champagne/20 group hover:bg-wine hover:text-white transition-all cursor-default"
                >
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                    <TrendingUp className="text-wine group-hover:text-white transition-colors h-6 w-6" />
                  </div>
                  <span className="font-bold text-base">{driver}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Tilt className="mt-32">
          <div className="p-20 md:p-32 rounded-[6rem] bg-dark-accent text-white shadow-3xl relative overflow-hidden isolate border border-white/10">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 -z-10 bg-[radial-gradient(circle_at_top_right,var(--wine)_0%,transparent_70%)]" />
            <p className="text-4xl font-heading text-center italic text-champagne mb-20 leading-snug">
              VenueForEvent.com operates at the intersection of:
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              {[
                "Hospitality",
                "Event Technology",
                "Digital Marketplace",
                "Regional Expansion",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-12 py-8 rounded-[3rem] bg-white/5 border border-white/20 text-2xl font-bold italic tracking-wide group hover:bg-champagne transition-all duration-500"
                >
                  {item}
                </motion.div>
              ))}
            </div>
            <p className="mt-20 text-center text-xl text-white/60 italic max-w-5xl mx-auto border-t border-white/10 pt-16 leading-relaxed">
              "Backed by{" "}
              <span className="text-champagne-gold font-bold">
                Homocation Asia Private Limited
              </span>{" "}
              and integrated with Spodia’s ecosystem, we are positioned for
              scalable multi-country growth."
            </p>
          </div>
        </Tilt>
      </SectionWrapper>

      {/* Looking Ahead & Final Word */}
      <FinalBrandingSection />
    </InfoPageLayout>
  );
}

function FinalBrandingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <SectionWrapper
      variant="dark"
      className="py-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
      parallaxImage="https://images.unsplash.com/photo-1519225495810-758445bf0042?q=80&w=2070&auto=format&fit=crop"
      id="final-branding"
    >
      <div
        ref={containerRef}
        className="text-center space-y-16 max-w-6xl mx-auto px-6"
      >
        <OrnateTitle title="Looking Ahead" accent="The Roadmap to Scale" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-32">
          {[
            {
              title: "Scale Listings",
              desc: "Expand to 1.5L+ curated venue listings",
              icon: Layers,
            },
            {
              title: "Market Depth",
              desc: "Strengthen presence in metro and tier-2 cities",
              icon: MapPin,
            },
            {
              title: "Intelligence",
              desc: "Enhance AI-driven search filters",
              icon: Zap,
            },
            {
              title: "Efficiency",
              desc: "Improve inquiry conversion systems",
              icon: TrendingUp,
            },
            {
              title: "Ecosystem",
              desc: "Build strong venue-partner ecosystems",
              icon: Handshake,
            },
          ].map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Tilt>
                <div className="p-8 rounded-[2.5rem] bg-white border border-champagne/20 flex flex-col items-center text-center group transition-all duration-500 h-full hover:bg-wine hover:text-white">
                  <div className="h-12 w-12 rounded-full bg-wine/5 text-wine flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <goal.icon size={24} />
                  </div>
                  <h5 className="font-heading text-lg font-heavy mb-2 transition-colors">
                    {goal.title}
                  </h5>
                  <p className="text-xs font-medium opacity-60 transition-all group-hover:opacity-90">
                    {goal.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <div className="space-y-16 relative py-20">
          <p className="text-xl md:text-2xl text-champagne font-heading italic leading-relaxed max-w-4xl mx-auto">
            From heritage fort weddings in Rajasthan to large capacity
            auditoriums in New Delhi, from beach resort weddings in Goa to
            corporate wellness retreats in Kerala, our goal is clear:
          </p>
          <motion.h4
            style={{ scale, opacity, y }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-heading font-heavy tracking-tighter uppercase leading-[0.9] text-white"
          >
            Make venue discovery simple, premium, and scalable.
          </motion.h4>

          <div className="pt-32">
            <OrnateTitle title="Final Word" accent="Heart of the Marketplace" />
            <div className="space-y-16">
              <HighlightedQuote>
                VenueForEvent.com is not just about venues. It is about
                beginnings. It is about partnerships. It is about memories.
              </HighlightedQuote>
              <p className="text-xl md:text-3xl italic text-white/80 leading-relaxed max-w-5xl mx-auto">
                Whether you are planning your wedding in Nainital, organizing a
                seminar in Mumbai, hosting a gala dinner in Chandigarh, or
                exploring a destination wedding in Kerala — we are here to
                simplify the journey.
              </p>

              <div className="py-24 flex flex-col items-center group relative isolate">
                <div className="absolute -inset-24 bg-wine/20 blur-[120px] rounded-full -z-10 group-hover:bg-wine/30 transition-all duration-1000" />

                <motion.div style={{ scale }} className="text-center space-y-6">
                  <h4 className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-[10vw] font-black text-white uppercase tracking-[0.2em] mb-4 drop-shadow-luxury whitespace-nowrap">
                    VenueForEvent.com
                  </h4>
                  <p className="font-heading text-xl sm:text-3xl md:text-4xl font-bold opacity-50 uppercase tracking-[0.6em] text-white">
                    A Part of Spodia
                  </p>
                  <p className="font-heading text-sm sm:text-lg md:text-xl font-medium opacity-40 mt-4 italic text-white">
                    Powered by Homocation Asia Private Limited
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-accent text-3xl md:text-6xl text-champagne mt-24 drop-shadow-luxury"
                >
                  And we are just getting started.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
