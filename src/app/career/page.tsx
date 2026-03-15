"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionWrapper,
  Tilt,
  WaveDivider,
} from "@/components/common/InfoComponents";
import {
  Building2,
  Briefcase,
  Search,
  PenTool,
  Users,
  MapPin,
  Heart,
  Target,
  Zap,
  CheckCircle2,
  GraduationCap,
  Mail,
  Smartphone,
  ArrowRight,
  Sparkles,
  Award,
  Globe,
  TrendingUp,
  LineChart,
  ShieldCheck,
  Rocket,
  Star,
} from "lucide-react";
import careersHero from "@/assets/careers-hero.png";
import parallax1 from "@/assets/celebration.jpg";

export default function CareersPage() {
  return (
    <InfoPageLayout
      heroTitle="Careers"
      heroSubtitle="VenueForEvent.com"
      heroImage={careersHero.src}
      heroDescription="Build the Future of Event Discovery Across India"
      hideWave={true}
    >
      {/* 
        -------------------------------------------
        INTRO & WHO WE ARE 
        -------------------------------------------
      */}
      <SectionWrapper
        variant="ivory"
        withWave="none"
        className="pt-16 pb-24 md:pt-24 md:pb-32 -mt-16 relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto space-y-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-heading font-heavy text-wine leading-tight">
              At VenueForEvent.com, we’re not just building a venue listing
              platform.
            </h2>
            <p className="text-base sm:text-lg md:text-3xl text-foreground font-medium italic leading-relaxed">
              We’re building the infrastructure that powers weddings, corporate
              conferences, MICE programs, destination celebrations, product
              launches, gala dinners, and once-in-a-lifetime moments across
              India.
            </p>
            <p className="text-base md:text-xl text-muted-foreground italic leading-relaxed">
              From best wedding venues in Mussoorie to conference halls in New
              Delhi, from destination wedding resorts in Goa to corporate
              offsite resorts in Uttarakhand, we are connecting people to spaces
              where memories and milestones are created.
            </p>
            <div className="inline-block p-1 rounded-[2rem] md:rounded-full bg-gradient-to-r from-wine via-champagne to-wine bg-[length:200%_auto] animate-gradient">
              <div className="px-6 py-4 md:px-8 md:py-4 rounded-[2rem] md:rounded-full bg-ivory text-wine font-bold text-[11px] md:text-xl uppercase tracking-wider md:tracking-widest shadow-inner leading-relaxed">
                If you believe in hospitality, technology, innovation, and
                growth — you’ll feel at home here.
              </div>
            </div>
          </motion.div>

          <div className="mt-20 md:mt-40 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 text-center mb-8">
              <h3 className="text-3xl font-heading font-bold text-foreground">
                Who We Are
              </h3>
              <p className="text-muted-foreground mt-4 text-lg italic max-w-2xl mx-auto">
                VenueForEvent.com is an event venue discovery and booking
                platform serving:
              </p>
            </div>

            {/* Creative Grid System */}
            <Tilt className="lg:col-span-1 h-full">
              <div className="h-full bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-champagne/10 relative overflow-hidden group flex flex-col items-center text-center md:items-start md:text-left">
                <div className="absolute top-0 right-0 w-48 h-48 bg-wine/5 rounded-full blur-3xl group-hover:bg-wine/20 transition-all duration-700" />
                <Heart className="h-10 md:h-12 w-10 md:w-12 text-wine mb-6 md:mb-8 relative z-10 self-center md:self-start" />
                <ul className="space-y-3 md:space-y-4 relative z-10 w-full text-center md:text-left">
                  {[
                    "Weddings & social celebrations",
                    "Destination weddings",
                    "Engagement, mehendi & sangeet functions",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col md:flex-row gap-2 md:gap-3 text-foreground font-medium justify-center items-center md:justify-start md:items-start"
                    >
                      <CheckCircle2 className="h-5 w-5 text-champagne shrink-0" />{" "}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>

            <Tilt className="lg:col-span-1 h-full">
              <div className="h-full bg-dark-accent p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group flex flex-col items-center text-center md:items-start md:text-left">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_0%,transparent_100%)]" />
                <Briefcase className="h-10 md:h-12 w-10 md:w-12 text-champagne mb-6 md:mb-8 relative z-10 self-center md:self-start" />
                <ul className="space-y-3 md:space-y-4 relative z-10 w-full text-center md:text-left">
                  {[
                    "Corporate events & seminars",
                    "MICE event venues",
                    "Conferences & exhibitions",
                    "Team building retreats & workations",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col md:flex-row gap-2 md:gap-3 text-white/90 font-medium justify-center items-center md:justify-start md:items-start"
                    >
                      <Star className="h-5 w-5 text-champagne shrink-0" />{" "}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>

            <Tilt className="lg:col-span-1 h-full">
              <div className="h-full bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-champagne/10 relative overflow-hidden group flex flex-col items-center text-center md:items-start md:text-left">
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-champagne/10 rounded-full blur-3xl group-hover:bg-champagne/30 transition-all duration-700" />
                <Globe className="h-10 md:h-12 w-10 md:w-12 text-champagne-gold mb-6 md:mb-8 relative z-10 self-center md:self-start" />
                <p className="font-bold text-wine mb-4 relative z-10">
                  We operate across major destinations like:
                </p>
                <div className="flex flex-wrap gap-2 relative z-10 justify-start">
                  {[
                    "Mussoorie",
                    "Shimla",
                    "Manali",
                    "Nainital",
                    "New Delhi",
                    "Mumbai",
                    "Bengaluru",
                    "Chandigarh",
                    "Goa",
                    "Rajasthan",
                    "Kerala",
                    "Himachal Pradesh",
                    "Uttarakhand",
                    "Maharashtra",
                    "Punjab",
                    "Karnataka",
                  ].map((dest, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-ivory rounded-full text-[10px] md:text-xs font-bold text-muted-foreground border border-champagne/20"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>

            <div className="lg:col-span-3 mt-12 bg-white/60 backdrop-blur-xl border border-white p-4 md:p-12 rounded-[2rem] md:rounded-[4rem] text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <p className="text-xl font-bold text-wine mb-8">
                We help users discover:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Luxury marriage gardens in Jaipur",
                  "Royal palace wedding venues in Rajasthan",
                  "Riverside wedding spots in Rishikesh",
                  "5 star wedding hotels in Manali",
                  "Seminar halls for rent in Dehradun",
                  "Business meeting rooms in Mumbai",
                  "Gala dinner venues in Bengaluru",
                  "Corporate wellness retreats in Kerala",
                ].map((query, i) => (
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    key={i}
                    className="px-4 py-2 md:px-6 md:py-3 bg-white rounded-full text-sm md:text-base font-bold text-foreground border border-champagne/20 shadow-sm hover:shadow-lg hover:border-wine transition-all cursor-default"
                  >
                    "{query}"
                  </motion.div>
                ))}
              </div>
              <p className="mt-12 text-2xl font-accent text-muted-foreground">
                Every listing on our platform is designed to simplify
                decision-making and reduce stress for planners, families, and
                corporate teams.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
        -------------------------------------------
        EXPERTISE & HYBRID CULTURE
        -------------------------------------------
      */}
      <SectionWrapper
        variant="white"
        withWave="none"
        className="pt-16 pb-20 md:pt-24 md:pb-32 -mt-16 relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center mb-20 md:mb-32">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-heavy text-foreground text-center md:text-left">
                Backed by Hospitality Expertise
              </h2>
              <div className="w-20 h-1 bg-wine rounded-full mx-auto md:mx-0" />
              <p className="text-lg md:text-2xl text-muted-foreground italic leading-relaxed text-left">
                VenueForEvent.com is powered by Homocation Asia Pvt. Ltd., the
                parent company behind Spodia.com — a growing hospitality and
                corporate travel platform.
              </p>
              <div className="bg-ivory p-8 rounded-3xl border border-champagne/20 shadow-inner">
                <p className="font-bold text-wine mb-4 text-xl">
                  This gives us:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Deep hospitality industry knowledge",
                    "Strong hotel & venue relationships",
                    "Operational credibility",
                    "Scalable growth model",
                    "Investor-ready foundation",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-center text-sm font-bold text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-champagne" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xl font-bold bg-dark-accent text-white p-6 rounded-3xl inline-block shadow-2xl skew-x-0 md:skew-x-[-5deg] w-full md:w-auto">
                <span className="skew-x-0 md:skew-x-[5deg] block italic text-left">
                  We’re not a random startup experimenting with listings.
                  <br />
                  We’re building a long-term ecosystem.
                </span>
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-wine/20 to-champagne/20 blur-[100px] rounded-full" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="relative w-full max-w-md mx-auto aspect-square rounded-full border border-dashed border-wine/30 flex items-center justify-center p-8"
              >
                <div className="w-full h-full rounded-full border border-champagne flex items-center justify-center bg-white/50 backdrop-blur-md shadow-2xl">
                  <Building2 className="w-32 h-32 text-wine/50" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
        -------------------------------------------
        WHY WORK WITH US?
        -------------------------------------------
      */}
      <SectionWrapper
        variant="dark"
        withWave="none"
        className="py-20 md:py-32 -mt-16 relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-7xl font-heading font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-champagne to-transparent mx-auto" />
          </div>

          <div className="space-y-8">
            {/* Box 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center hover:bg-white/10 transition-colors group"
            >
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-champagne/20 flex items-center justify-center group-hover:scale-110 transition-transform self-center md:self-start">
                <TrendingUp className="h-10 w-10 md:h-16 md:w-16 text-champagne" />
              </div>
              <div className="w-full text-left">
                <h3 className="text-lg md:text-3xl font-heading font-bold text-white mb-4 md:mb-6">
                  1️⃣ Be Part of a High-Growth Industry
                </h3>
                <p className="text-base md:text-xl text-white/80 italic mb-4 md:mb-6">
                  India’s wedding and corporate event market is expanding
                  rapidly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-white/60 mb-4 md:mb-6">
                  <p>
                    • Destination wedding cost in Goa is rising due to demand.
                  </p>
                  <p>
                    • Corporate offsite resorts in Himachal Pradesh are booked
                    months in advance.
                  </p>
                  <p>
                    • Conference halls in New Delhi and Mumbai are seeing
                    year-round activity.
                  </p>
                  <p>
                    • Workation resorts in Kerala are growing post-pandemic.
                  </p>
                </div>
                <p className="text-lg md:text-xl text-champagne font-bold">
                  You’ll work in an industry with emotional impact and economic
                  scale.
                </p>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start md:items-center hover:bg-white/10 transition-colors group"
            >
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-wine/20 flex items-center justify-center group-hover:scale-110 transition-transform self-center md:self-start">
                <Zap className="h-10 w-10 md:h-16 md:w-16 text-wine" />
              </div>
              <div className="w-full text-center md:text-left">
                <h3 className="text-lg md:text-2xl font-heading font-bold text-white mb-4 md:mb-6">
                  2️⃣ Hybrid Culture:{" "}
                  <span className="xl:whitespace-nowrap">
                    Hospitality + Tech
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 bg-black/20 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 mb-4 md:mb-6">
                  <div>
                    <p className="text-champagne font-bold mb-3 md:mb-4 border-b border-champagne/20 pb-2 text-sm md:text-base">
                      We combine:
                    </p>
                    <ul className="space-y-1.5 md:space-y-2 text-white/70 text-xs md:text-sm">
                      <li>• Hospitality operations</li>
                      <li>• Digital marketing & SEO</li>
                      <li>• UX-driven platform design</li>
                      <li>• Corporate relationship management</li>
                      <li>• Event logistics understanding</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-champagne font-bold mb-3 md:mb-4 border-b border-champagne/20 pb-2 text-sm md:text-base">
                      Whether it’s:
                    </p>
                    <ul className="space-y-1.5 md:space-y-2 text-white/70 text-xs md:text-sm">
                      <li>
                        • Optimizing pages for “Best wedding venues in Nainital”
                      </li>
                      <li>
                        • Generating leads for “Product launch venues in Mumbai”
                      </li>
                      <li>• Curating “MICE event venues in Bengaluru”</li>
                      <li>
                        • Managing “Residential conference packages in
                        Uttarakhand”
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-white font-bold inline-block border-b-2 border-wine pb-1">
                  Your work directly impacts real bookings.
                </p>
              </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-wine to-dark-accent border border-wine/50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Target className="w-64 h-64" />
              </div>
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 flex items-center justify-center relative z-10 backdrop-blur-sm border border-white/20 self-center md:self-start">
                <Rocket className="h-10 w-10 md:h-16 md:w-16 text-white" />
              </div>
              <div className="relative z-10 w-full text-center md:text-left">
                <h3 className="text-lg md:text-3xl font-heading font-bold text-white mb-4 md:mb-6">
                  3️⃣ Ownership & Growth Mindset
                </h3>
                <p className="text-base md:text-lg text-white/80 font-bold mb-3 md:mb-4">
                  We believe in:
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                  {[
                    "✔ Ownership over micromanagement",
                    "✔ Execution over excuses",
                    "✔ Measured growth over hype",
                    "✔ Results over noise",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 text-white text-[10px] md:text-sm font-medium border border-white/20 backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="bg-black/30 p-4 md:p-6 rounded-xl md:rounded-2xl text-base md:text-xl text-champagne italic border-l-4 border-champagne">
                  If you want corporate bureaucracy, we’re not for you.
                  <br className="hidden md:block" />
                  If you want real impact, you’ll thrive here.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
        -------------------------------------------
        CURRENT OPENINGS
        -------------------------------------------
      */}
      <SectionWrapper
        variant="white"
        withWave="none"
        className="pt-20 pb-24 md:pt-32 md:pb-40 -mt-16 relative z-20 rounded-t-[3rem] md:rounded-t-[4rem]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-7xl font-heading font-heavy text-wine">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground italic">
              (We update roles based on expansion into new cities and
              verticals.)
            </p>
          </div>

          <div className="space-y-8">
            {/* Job 1 */}
            <div className="group relative bg-white border border-champagne/20 rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-wine/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-wine/5 to-transparent rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-duration-700 blur-[50px] pointer-events-none" />
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-ivory text-wine flex items-center justify-center shrink-0 border border-champagne/30 group-hover:scale-110 transition-transform group-hover:bg-wine group-hover:text-white mx-auto md:mx-0">
                  <Building2 className="w-10 h-10" />
                </div>
                <div className="flex-1 space-y-6 text-left w-full">
                  <div className="w-full flex flex-col items-start">
                    <h3 className="text-lg sm:text-3xl font-heading font-bold text-foreground mb-4 md:mb-2 text-center md:text-left">
                      🔹 Business Development Manager
                    </h3>
                    <div className="flex items-center gap-2 text-wine font-bold text-[10px] sm:text-sm bg-wine/5 px-3 py-1 md:px-4 md:py-1.5 rounded-full inline-flex border border-wine/10 mt-2 mx-auto md:mx-0">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" /> Locations: Delhi /
                      Mumbai / Bengaluru / Goa
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-champagne/20">
                    <div>
                      <p className="text-base md:text-lg font-bold text-foreground mb-3">
                        Build partnerships with:
                      </p>
                      <ul className="space-y-1.5 text-[11px] md:text-sm text-muted-foreground italic">
                        <li>• Luxury wedding hotels in Manali</li>
                        <li>• Destination wedding resorts in Goa</li>
                        <li>• Heritage fort wedding venues in Rajasthan</li>
                        <li>• Conference halls in New Delhi</li>
                        <li>• Convention centers in Mumbai</li>
                        <li>• Corporate offsite resorts in Uttarakhand</li>
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <p className="text-lg font-bold text-foreground mb-3">
                          Responsibilities
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✔ Onboard verified venues</li>
                          <li>✔ Negotiate commercial terms</li>
                          <li>✔ Build state-level partner networks</li>
                          <li>✔ Support MICE event venues growth</li>
                          <li>
                            ✔ Drive inventory for banquet halls in Chandigarh &
                            Dehradun
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-foreground mb-2">
                          Ideal Candidate
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Hospitality or hotel sales background. Corporate sales
                          or event management experience. Strong local market
                          understanding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="group relative bg-white border border-champagne/20 rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-wine/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-wine/5 to-transparent rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-duration-700 blur-[50px] pointer-events-none" />
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-ivory text-wine flex items-center justify-center shrink-0 border border-champagne/30 group-hover:scale-110 transition-transform group-hover:bg-wine group-hover:text-white mx-auto md:mx-0">
                  <Briefcase className="w-10 h-10" />
                </div>
                <div className="flex-1 space-y-6 text-left w-full">
                  <div className="w-full flex flex-col items-start">
                    <h3 className="text-lg sm:text-3xl font-heading font-bold text-foreground mb-4 md:mb-2 text-center md:text-left">
                      🔹 Corporate Sales Manager – MICE
                    </h3>
                    <div className="flex items-center gap-2 text-wine font-bold text-[10px] sm:text-sm bg-wine/5 px-3 py-1 md:px-4 md:py-1.5 rounded-full inline-flex border border-wine/10 mt-2 mx-auto md:mx-0">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" /> Locations: Mumbai / Delhi / Bengaluru
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-champagne/20">
                    <div>
                      <p className="text-base md:text-lg font-bold text-foreground mb-3">
                        Focus Areas
                      </p>
                      <ul className="space-y-1.5 text-[11px] md:text-sm text-muted-foreground italic">
                        <li>• Business meeting rooms in Mumbai</li>
                        <li>• Executive boardroom rentals in Bengaluru</li>
                        <li>• Seminar halls with accommodation in Shimla</li>
                        <li>• Exhibition centers in Mumbai</li>
                        <li>• Award ceremony venues in New Delhi</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground mb-3">
                        You Will:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          ✔ Connect with HR heads & corporate decision-makers
                        </li>
                        <li>✔ Build annual corporate retreat pipelines</li>
                        <li>
                          ✔ Close residential conference packages in Kerala
                        </li>
                        <li>✔ Manage dealers meet organizers in Chandigarh</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="group relative bg-white border border-champagne/20 rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-wine/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-champagne/10 to-transparent rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-duration-700 blur-[50px] pointer-events-none" />
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-ivory text-champagne-gold flex items-center justify-center shrink-0 border border-champagne/30 group-hover:scale-110 transition-transform group-hover:bg-champagne group-hover:text-white mx-auto md:mx-0">
                  <Search className="w-10 h-10" />
                </div>
                <div className="flex-1 space-y-6 text-left w-full">
                  <div className="w-full flex flex-col items-start">
                    <h3 className="text-lg sm:text-3xl font-heading font-bold text-foreground mb-4 md:mb-2 text-center md:text-left">
                      🔹 Digital Marketing & SEO
                    </h3>
                    <div className="flex items-center gap-2 text-champagne-gold font-bold text-[10px] sm:text-sm bg-champagne/5 px-3 py-1 md:px-4 md:py-1.5 rounded-full inline-flex border border-champagne/20 mt-2 mx-auto md:mx-0">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" /> Location: Remote / Hybrid
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-champagne/20">
                    <div>
                      <p className="text-lg font-bold text-foreground mb-3">
                        Aggressively expanding SEO for:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground italic">
                        <li>• Best wedding venues in Mussoorie</li>
                        <li>• Intimate wedding venues in Ooty</li>
                        <li>• Forest wedding venues in Uttarakhand</li>
                        <li>• Conference halls in New Delhi</li>
                        <li>• Product launch venues in Mumbai</li>
                        <li>• Tech-ready conference spaces in Bengaluru</li>
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <p className="text-lg font-bold text-foreground mb-3">
                          Skills Required
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "On-page SEO",
                            "Keyword strategy",
                            "Technical SEO",
                            "Conversion copywriting",
                            "Analytics & funnel optimization",
                          ].map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1 bg-ivory text-xs font-bold border border-champagne/30 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-wine to-champagne bg-clip-text text-transparent font-bold text-2xl italic pt-2">
                        If you can rank and convert — we want you.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 4 & 5 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative bg-white border border-champagne/20 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all overflow-hidden flex flex-col h-full items-start text-left">
                <div className="w-16 h-16 rounded-2xl bg-ivory text-wine flex items-center justify-center shrink-0 border border-champagne/30 mb-6 mx-auto md:mx-0">
                  <PenTool className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3 text-center w-full">
                  🔹 Content Writer
                </h3>
                <div className="mb-6 flex items-center gap-2 text-muted-foreground font-medium text-[10px] bg-ivory px-3 py-1 rounded-full border border-champagne/20 mx-auto md:mx-0">
                  <MapPin className="w-3 h-3" /> Location: Remote
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm mb-3">
                    Create high-conversion content around:
                  </p>
                  <ul className="space-y-2 text-xs md:text-sm text-muted-foreground italic mb-6">
                    <li>• Destination wedding cost in Goa</li>
                    <li>• Luxury villas for weddings in Coorg</li>
                    <li>• Traditional wedding venues in Amritsar</li>
                    <li>• Corporate event management in Maharashtra</li>
                    <li>• Team building activities in Rishikesh</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 md:pt-6 border-t border-champagne/20 text-wine font-bold italic text-sm md:text-base">
                  You’ll balance emotional storytelling with corporate
                  authority.
                </div>
              </div>

              <div className="group relative bg-white border border-champagne/20 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all overflow-hidden flex flex-col h-full items-start text-left">
                <div className="w-16 h-16 rounded-2xl bg-ivory text-wine flex items-center justify-center shrink-0 border border-champagne/30 mb-6 mx-auto md:mx-0">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3 text-center w-full">
                  🔹 Operations & Venue Support
                </h3>
                <div className="mb-6 flex items-center gap-2 text-muted-foreground font-medium text-[10px] bg-ivory px-3 py-1 rounded-full border border-champagne/20 mx-auto md:mx-0 text-center">
                  <MapPin className="w-3 h-3" /> Locations: Mussoorie / Dehradun
                  / Mumbai
                </div>
                <div className="flex-1 w-full text-center md:text-left">
                  <p className="font-bold text-sm mb-3">
                    Responsibilities include:
                  </p>
                  <ul className="space-y-2 text-xs md:text-sm text-muted-foreground mb-6">
                    <li>✔ Coordinating site visits</li>
                    <li>✔ Assisting with gala dinner venues</li>
                    <li>✔ Managing catering services</li>
                    <li>
                      ✔ Supporting seminar venues
                    </li>
                    <li>✔ Handling vendor onboarding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
        -------------------------------------------
        WHAT WE LOOK FOR (MINDSET)
        -------------------------------------------
      */}
      <SectionWrapper
        variant="ivory"
        withWave="none"
        className="py-20 md:py-32 relative z-20 rounded-t-[3rem] md:rounded-t-[4rem]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-wine rounded-[2.5rem] md:rounded-[4rem] text-white overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
              style={{ backgroundImage: `url(${parallax1.src})` }}
            />
            <div className="lg:w-1/2 py-12 px-6 md:p-24 relative z-10 flex flex-col justify-center items-center text-center md:items-start md:text-left border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-2xl md:text-7xl font-heading font-black mb-6 md:mb-8 leading-tight">
                What We Look For
              </h2>
              <p className="text-xl md:text-3xl font-accent text-champagne mb-8 md:mb-12">
                We hire mindset.
              </p>
              <p className="text-base md:text-lg font-bold mb-6">
                You should be:
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                {[
                  "Execution-driven",
                  "Detail-oriented",
                  "Hospitality-sensitive",
                  "Growth-focused",
                  "Calm under pressure",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] md:text-base font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 py-12 px-6 md:p-24 relative z-10 bg-dark-accent/40 flex flex-col justify-center items-center text-center md:items-start md:text-left">
              <p className="text-lg md:text-2xl font-bold mb-8 md:mb-10 text-champagne">
                If you understand both:
              </p>

              <div className="space-y-6 md:space-y-8 w-full">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-xl md:text-3xl shadow-inner border border-white/20">
                    💍
                  </div>
                  <p className="text-base md:text-2xl italic leading-relaxed text-center md:text-left">
                    The{" "}
                    <span className="text-champagne font-bold">emotion</span>{" "}
                    behind a royal palace wedding in Rajasthan
                  </p>
                </div>
                <div className="flex justify-center py-2 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <span className="relative z-10 bg-wine px-4 md:px-6 font-bold text-sm md:text-xl text-white tracking-widest bg-clip-padding">
                    AND
                  </span>
                </div>
                <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-6 items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-xl md:text-3xl shadow-inner border border-white/20">
                    📊
                  </div>
                  <p className="text-base md:text-2xl italic leading-relaxed text-center md:text-right w-full">
                    The <span className="text-champagne font-bold">ROI</span>{" "}
                    behind a corporate conference hall in New Delhi
                  </p>
                </div>
              </div>

              <p className="text-lg md:text-4xl font-heading font-black text-center mt-8 md:mt-12 bg-white text-wine py-3 md:py-4 px-8 md:px-12 rounded-full shadow-2xl hover:scale-105 transition-transform cursor-default">
                You’ll excel here.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
        -------------------------------------------
        WORK CULTURE & WHY NOW
        -------------------------------------------
      */}
      <SectionWrapper
        variant="white"
        withWave="none"
        className="pt-24 pb-16 md:pt-40 md:pb-20 -mt-16 relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-2xl md:text-7xl font-heading font-black text-foreground text-center">
              Our Work Culture
            </h2>
            <div className="w-24 h-1 bg-champagne rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              {
                title: "Transparent Communication",
                icon: Globe,
                desc: "No hidden agendas. No confusing reporting structures.",
              },
              {
                title: "Performance-Based Growth",
                icon: TrendingUp,
                desc: "Your growth depends on results — not politics.",
              },
              {
                title: "Multi-City Exposure",
                icon: MapPin,
                desc: "Work on projects across: Goa, Rajasthan, Uttarakhand, Himachal Pradesh, Maharashtra, Karnataka",
              },
              {
                title: "Real Impact",
                icon: Target,
                desc: "Your work played a role.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-ivory p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-champagne/20 text-center md:text-left hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-inner border border-champagne/10 mb-6 text-wine self-center md:self-start">
                  <c.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="font-heading font-bold text-sm sm:text-base md:text-xl mb-3 md:mb-4">
                   🔹 {c.title}
                </h4>
                <p className="text-muted-foreground italic text-[10px] sm:text-xs md:text-sm flex-1">
                  {c.desc}
                </p>
                {c.title === "Real Impact" && (
                  <div className="mt-6 text-left text-xs text-foreground bg-white p-4 rounded-2xl border border-champagne/20 space-y-2 shadow-inner">
                    <p>When someone books:</p>
                    <ul className="space-y-1 font-bold italic text-wine/80">
                      <li>• A farmhouse for wedding in Karnal</li>
                      <li>• A beach resort in Kerala</li>
                      <li>• A product launch venue in Mumbai</li>
                      <li>• A large capacity auditorium in New Delhi</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Why Now */}
          <div className="bg-dark-accent rounded-[2.5rem] md:rounded-[4rem] text-white p-6 md:p-20 relative overflow-hidden flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center border border-wine/20">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-wine opacity-20 blur-[100px] rounded-full pointer-events-none" />
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8 relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-6xl font-heading font-bold text-champagne">
                Why Now?
              </h3>
              <p className="text-lg md:text-xl">Peak seasons are booking fast across:</p>
              <ul className="space-y-3 md:space-y-4 text-sm md:text-lg italic text-white/80 inline-block text-left">
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-champagne" /> Destination
                  wedding resorts in Goa
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-champagne" /> Corporate
                  wellness retreats in Kerala
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-champagne" /> Luxury
                  marriage gardens in Jaipur
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-champagne" /> Networking
                  event venues in Bengaluru
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 space-y-6 md:space-y-8 relative z-10">
              <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-sm">
                <p className="text-xl md:text-2xl font-bold mb-4">
                  We’re expanding inventory, partnerships, and digital reach.
                </p>
                <p className="text-xl md:text-3xl font-heading text-champagne mb-6 md:mb-8">
                  This is a growth phase.
                </p>
                <p className="text-3xl md:text-5xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                  Join early.
                  <br />
                  Grow faster.
                </p>
              </div>
            </div>
          </div>

          {/* Life At VenueForEvent & Internships */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-wine/5 border border-wine/10 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 flex flex-col justify-center">
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-wine mb-6 md:mb-8">
                Life at VenueForEvent.com
              </h4>
              <p className="text-lg md:text-xl font-medium mb-4 md:mb-6">We celebrate:</p>
              <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                {[
                  "Team wins",
                  "Closed deals",
                  "Ranked keywords",
                  "Successfully executed conferences",
                  "Flawless wedding bookings",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 md:px-5 md:py-2 bg-white rounded-full text-[10px] md:text-sm font-bold shadow-sm border border-champagne/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xl md:text-2xl font-accent text-wine italic mt-auto">
                We work hard — but we work with purpose.
              </p>
            </div>

            <div className="bg-champagne/10 border border-champagne/20 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 relative overflow-hidden flex flex-col justify-center">
              <GraduationCap className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 text-champagne/20 rotate-[-15deg]" />
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 md:mb-8 relative z-10">
                Internship Opportunities
              </h4>
              <p className="font-bold mb-3 md:mb-4 relative z-10 text-base md:text-lg text-left">For students in:</p>
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8 relative z-10 justify-start">
                {[
                  "Hospitality management",
                  "Event management",
                  "Digital marketing",
                  "Business development",
                  "Content writing",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white rounded-md text-[10px] md:text-xs font-bold shadow-sm uppercase tracking-wider"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="bg-white/60 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white relative z-10 mt-auto shadow-inner text-left">
                <p className="font-bold text-xs md:text-sm mb-3 text-wine">
                  Get hands-on exposure to:
                </p>
                <ul className="text-[10px] md:text-xs space-y-1.5 md:space-y-2 italic font-medium text-muted-foreground">
                  <li>• Top wedding planners in Rajasthan</li>
                  <li>• Professional event planners in Bengaluru</li>
                  <li>• Corporate offsite resorts in Uttarakhand</li>
                  <li>• Destination wedding resorts in Kerala</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 
        -------------------------------------------
        READY TO APPLY & CLOSING
        -------------------------------------------
      */}
      <SectionWrapper
        variant="ivory"
        withWave="none"
        className="py-24 md:py-40 relative z-20 rounded-t-[4rem]"
      >
        <div className="max-w-7xl mx-auto px-0 md:px-6">
          <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-7xl font-heavy font-black text-wine">
              Ready to Apply?
            </h2>
            <p className="text-sm md:text-xl font-medium italic text-muted-foreground">
              “We review every application personally. Shortlisted candidates
              are contacted within 7 working days.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
            <a
              href="mailto:careers@venueforevent.com"
              className="group flex flex-col items-center justify-center p-6 md:p-12 bg-white rounded-[2.5rem] md:rounded-[4rem] border border-champagne/20 shadow-xl hover:shadow-2xl hover:border-wine hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-wine/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-wine transition-all duration-500">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-wine group-hover:text-white" />
              </div>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 md:mb-4">
                Email Your Resume
              </p>
              <p className="text-base md:text-2xl font-bold text-wine break-all text-center">
                careers@venueforevent.com
              </p>
              <p className="mt-4 text-xs bg-ivory px-4 py-2 rounded-full border border-champagne/30 text-muted-foreground font-medium italic group-hover:bg-wine group-hover:text-white group-hover:border-wine transition-colors">
                Subject Line: Role + City
              </p>
            </a>

            <a
              href="tel:+918800842084"
              className="group flex flex-col items-center justify-center p-6 md:p-12 bg-white rounded-[2.5rem] md:rounded-[4rem] border border-champagne/20 shadow-xl hover:shadow-2xl hover:border-champagne hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-champagne/20 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-champagne transition-all duration-500">
                <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-champagne-gold group-hover:text-white" />
              </div>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 md:mb-4">
                Or WhatsApp
              </p>
              <p className="text-xl md:text-4xl font-black text-champagne-gold">
                +91-8800842084
              </p>
              <p className="mt-4 text-xs bg-ivory px-4 py-2 rounded-full border border-champagne/30 text-muted-foreground font-medium italic opacity-0 group-hover:opacity-100 transition-opacity">
                Say Hi! 👋
              </p>
            </a>
          </div>

          {/* Grand Finale */}
          <div className="bg-dark-accent rounded-none md:rounded-[5rem] py-12 px-2 md:p-24 text-center relative overflow-hidden border-y md:border border-wine/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-wine/20 blur-xl pointer-events-none" />
            <div className="relative z-10 space-y-12 md:space-y-20">
              <div className="mb-10 md:mb-16 space-y-2 md:space-y-4">
                <p className="text-champagne font-black text-2xl md:text-4xl tracking-[0.3em] uppercase">
                  ONLY
                </p>
                <h3 className="text-sm md:text-2xl font-bold text-white/70 uppercase tracking-[0.2em] relative inline-block">
                  <span className="hidden md:block absolute top-1/2 -left-32 w-24 h-px bg-white/20" />
                  For Ambitious Professionals
                  <span className="hidden md:block absolute top-1/2 -right-32 w-24 h-px bg-white/20" />
                </h3>
              </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 text-left max-w-4xl mx-auto">
                  <div className="bg-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-4 md:p-10 opacity-70">
                    <p className="font-bold text-white mb-6 md:mb-6 text-base md:text-xl">
                      If you’re looking for:
                    </p>
                    <ul className="space-y-4 text-white/60 text-xs md:text-sm italic">
                      <li className="flex items-start gap-3">
                        <span className="shrink-0">❌</span>
                        <span>A comfortable 9-to-5 without ownership</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0">❌</span>
                        <span>Minimal accountability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0">❌</span>
                        <span>Fixed growth regardless of performance</span>
                      </li>
                    </ul>
                    <p className="mt-8 md:mt-8 font-bold text-red-400/80 text-lg md:text-xl border-t border-white/5 pt-6 md:pt-6">
                      This may not be your place.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-wine/20 to-transparent border border-wine/30 rounded-[2.5rem] md:rounded-[3rem] p-4 md:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(var(--wine),0.3)]">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-wine/30 blur-2xl rounded-full" />
                    <p className="font-bold text-white mb-6 md:mb-6 text-base md:text-xl relative z-10">
                      If you’re looking for:
                    </p>
                    <ul className="space-y-4 text-champagne font-bold text-sm md:text-lg relative z-10 shadow-sm">
                      <li className="flex items-start gap-3">
                        <span className="shrink-0">✅</span>
                        <span>Fast-paced growth</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0">✅</span>
                        <span>Industry impact</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0">✅</span>
                        <span>Decision-making exposure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0">✅</span>
                        <span>Real responsibility</span>
                      </li>
                    </ul>
                    <p className="mt-8 md:mt-8 font-bold text-white text-lg md:text-3xl border-t border-white/20 pt-6 md:pt-6 relative z-10 font-heading">
                      Welcome to VenueForEvent.com.
                    </p>
                  </div>
                </div>

              <div className="pt-8 md:pt-16 max-w-4xl mx-auto space-y-10 md:space-y-16">
                <h2 className="text-2xl md:text-6xl font-heading font-black text-white leading-tight">
                  Let’s Build India’s Leading Event Venue Platform — Together.
                </h2>

                <div className="text-base md:text-2xl text-white/70 font-accent leading-relaxed md:leading-loose space-y-6 md:space-y-2">
                  <p className="italic">Because every wedding deserves the perfect venue.</p>
                  <p className="italic">Because every conference deserves the right stage.</p>
                  <p className="italic">Because every celebration deserves the right space.</p>
                </div>

                <div className="flex justify-center">
                  <div className="inline-flex flex-col items-center justify-center w-56 h-56 md:w-auto md:h-auto md:px-12 md:py-6 rounded-full bg-champagne text-dark-accent p-8 text-center text-sm md:text-2xl font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(230,183,101,0.5)] hover:scale-105 hover:shadow-[0_0_60px_rgba(230,183,101,0.8)] transition-all cursor-default leading-tight">
                    Apply today. <br className="md:hidden" />
                    Growth starts <br className="md:hidden" />
                    here. 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
