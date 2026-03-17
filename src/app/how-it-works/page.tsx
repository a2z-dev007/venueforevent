"use client";

import React from "react";
import { cn } from "@/lib/utils";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  AlternatingGrid,
  SimpleChecklist,
  StepGrid,
  OrnateTitle,
  SubTitle,
  HighlightCard,
  Tilt,
  HighlightedQuote,
} from "@/components/common/InfoComponents";
import {
  Search,
  Filter,
  FileText,
  Layout,
  Send,
  CheckCircle2,
  Calendar,
  CreditCard,
  PlusCircle,
  Headphones,
  Mail,
  Phone,
  Building2,
  MapPin,
  Globe,
  ArrowRight,
  Heart,
  Briefcase,
  Star,
  Zap,
} from "lucide-react";
import howItWorksHero from "@/assets/how-it-works-hero.png";
import socialImg from "@/assets/palace-wedding.jpg";
import corporateImg from "@/assets/banquet-hall.jpg";
import parallax1 from "@/assets/celebration.jpg";
import parallax2 from "@/assets/hero-venue.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <InfoPageLayout
      heroTitle="How It Works"
      heroSubtitle="VenueForEvent.com"
      heroImage={howItWorksHero.src}
      heroDescription="Discover, Compare, and Book the Perfect Venue with Ease"
      hideWave={true}
    >
      {/* Introduction Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="pt-12 md:pt-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <ContentBlock align="center" width="full" accent="Your Journey Starts Here">
          <p className="text-2xl md:text-3xl leading-relaxed text-wine font-heading mb-10 italic lg:max-w-5xl xl:max-w-6xl mx-auto">
            Planning a perfect event — whether a destination wedding in Goa, an intimate wedding in Mussoorie, a corporate offsite in Himachal Pradesh, or a product launch in Bengaluru — can feel overwhelming. VenueForEvent.com simplifies this journey, guiding you from initial ideas to final booking with a seamless, stress-free experience.
          </p>
          <div className="prose prose-xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto text-center italic space-y-8">
            <p>
              We combine technology, expertise, and a curated network of venues to help you make the best decisions — whether your focus is luxury wedding venues, heritage palace weddings, conference halls, corporate retreats, or large-scale events.
            </p>
            <p>
              Our platform is designed to serve both social events (weddings, receptions, engagement parties, mehendi ceremonies, intimate celebrations) and corporate events (conferences, offsites, workshops, product launches, seminars, MICE programs).
            </p>
          </div>
        </ContentBlock>
      </SectionWrapper>

      {/* Step 1 – Explore */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Step 1 – Explore Our Curated Venue Listings" accent="Discovery" />
        <div className="prose prose-2xl text-muted-foreground max-w-5xl mx-auto text-center mb-20 italic">
          <p>
            The first step in planning your event is finding the right venue. VenueForEvent.com offers over 1.5 lakh verified venues across India, Nepal, Bhutan, Bangladesh, Sri Lanka, Thailand, Indonesia, Vietnam, and more.
          </p>
        </div>

        <AlternatingGrid
          items={[
            {
              title: "For Social & Wedding Events",
              icon: Heart,
              text: (
                <div className="space-y-6">
                  <p className="text-xl italic">
                    Whether you are planning a royal palace wedding in Jaipur, a luxury marriage garden in Chandigarh, a forest wedding venue in Uttarakhand, or a beach resort wedding in Kerala, our platform provides:
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Detailed venue profiles with high-quality photos, videos, and 360° views",
                      "Event configurations and capacities for ceremonies and receptions",
                      "Wedding package options, including all-inclusive pricing",
                      "Special services like pre-wedding shoot locations, wedding photographers, and theme decorators",
                    ]}
                  />
                  <p className="text-sm text-muted-foreground italic border-t border-wine/10 pt-4">
                    Keywords naturally embedded: destination wedding cost in Jaipur, luxury marriage gardens in Chandigarh, heritage fort wedding in Rajasthan, outdoor wedding lawns in Dehradun, intimate wedding venues in Mussoorie, riverside wedding spots in Rishikesh, 5 star wedding hotels in Mumbai, forest wedding venues in Uttarakhand.
                  </p>
                </div>
              ),
              image: socialImg.src,
            },
            {
              title: "For Corporate & MICE Events",
              icon: Briefcase,
              text: (
                <div className="space-y-6">
                  <p className="text-xl italic">
                    For business events, we list conferences, seminar halls, corporate offsite resorts, exhibition centers, training rooms, and gala dinner venues. Our platform ensures:
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Accurate capacity and technical specifications",
                      "Availability of AV equipment and high-speed internet",
                      "Optional residential packages for retreats",
                      "Quick price estimates and corporate negotiation assistance",
                    ]}
                  />
                  <p className="text-sm text-muted-foreground italic border-t border-wine/10 pt-4">
                    Keywords: conference halls in New Delhi, business meeting rooms in Mumbai, corporate offsite resorts in Himachal Pradesh, executive boardroom rentals in Bengaluru, exhibition centers in Goa, residential conference packages in Maharashtra, gala dinner venues in Chandigarh.
                  </p>
                </div>
              ),
              image: corporateImg.src,
            },
          ]}
        />
      </SectionWrapper>

      {/* Step 2 – Filter */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle title="Step 2 – Filter & Shortlist Your Venues" accent="Precision" />
        <p className="text-lg md:text-xl lg:text-2xl text-center text-muted-foreground italic leading-relaxed max-w-4xl mx-auto mb-16 md:mb-20">
          Searching through thousands of venues can be overwhelming. VenueForEvent.com allows you to filter based on location, budget, capacity, amenities, event type, and availability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {[
            {
              title: "Location Filters",
              desc: "Select cities like Mussoorie, Shimla, Manali, Srinagar, Gulmarg, Nainital, Dalhousie, Munnar, Coorg, Ooty, New Delhi, Mumbai, Bengaluru, Chandigarh, Rishikesh, Dehradun, Jim Corbett (Ramnagar), Karnal, Jaipur, Goa, Kerala, Uttarakhand, Himachal Pradesh.",
              icon: MapPin,
            },
            {
              title: "Event Type",
              desc: "Weddings, Engagements, Receptions, Corporate Conferences, Seminars, Product Launches, Team Building, Gala Dinners, Offsites.",
              icon: Calendar,
            },
            {
              title: "Budget & Packages",
              desc: "Choose venues offering all-inclusive wedding packages, budget-friendly destination weddings, or luxury options.",
              icon: CreditCard,
            },
            {
              title: "Capacity & Layout",
              desc: "From intimate venues for 50 guests to large banquet halls and auditoriums for corporate events.",
              icon: Layout,
            },
            {
              title: "Special Amenities",
              desc: "AV equipment, catering services, accommodation, outdoor lawns, poolside venues, rooftop views, beach access, or heritage property.",
              icon: Star,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group h-full",
                i === 4 ? "md:col-span-2 xl:col-span-1 md:max-w-[50%] md:mx-auto xl:max-w-none xl:mx-0" : ""
              )}
            >
              <Tilt className="h-full">
                <div className="p-7 sm:p-8 lg:p-10 xl:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-white border border-champagne/10 shadow-sm hover:shadow-2xl transition-all text-center h-full flex flex-col items-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-ivory text-wine flex items-center justify-center mb-6 md:mb-8 group-hover:bg-wine group-hover:text-white transition-all transform group-hover:rotate-12">
                    <item.icon size={28} className="md:w-8 md:h-8" />
                  </div>
                  <h4 className="font-heading text-xl md:text-2xl font-bold mb-4 text-wine/90 uppercase tracking-wide">{item.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-32">
          <HighlightedQuote>
            Our AI-assisted suggestion system recommends the top 10 best-matched venues, ensuring efficiency and relevance.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Step 3 & 4 – Profiles & Compare */}
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
            <ContentBlock title="Step 3 – Detailed Venue Profiles" accent="Visual Insight" align="mobile-center" width="full">
              <p className="text-xl md:text-2xl italic leading-relaxed text-muted-foreground mb-8 text-center lg:text-left">
                Once you shortlist, explore each venue’s full profile. Each profile includes:
              </p>
              <SimpleChecklist
                items={[
                  "High-definition photos and video tours",
                  "Event layout & seating plans",
                  "Facilities & services – catering, decoration, AV support, parking, security",
                  "Packages and pricing – from traditional wedding venues in Delhi to corporate wellness retreats in Kerala",
                  "Special features – outdoor lawns, rooftop terraces, banquet halls, luxury rooms, heritage architecture",
                ]}
              />
              <p className="mt-8 text-sm italic text-muted-foreground text-center lg:text-left">
                Keywords used naturally: pre-wedding shoot locations in Manali, riverside wedding spots in Rishikesh, luxury villas for weddings in Coorg, seminar halls for rent in Bengaluru, conference halls in New Delhi, business meeting rooms in Mumbai.
              </p>
              <p className="mt-8 text-xl font-heading text-wine italic text-center lg:text-left">
                Each venue page also provides downloadable proposals, multiple menu options, and special package documents for ease of comparison.
              </p>
            </ContentBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <ContentBlock title="Step 4 – Compare & Evaluate Options" accent="Side-by-side" align="mobile-center" width="full">
              <p className="text-xl md:text-2xl italic leading-relaxed text-muted-foreground mb-8 text-center lg:text-left">
                Choosing the perfect venue involves comparing multiple options. VenueForEvent.com allows side-by-side comparisons on:
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {[
                  "Price and package inclusions",
                  "Guest capacity",
                  "Event layout & configuration flexibility",
                  "Location advantages & accessibility",
                  "Vendor support and in-house services",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-ivory border border-champagne/20 group hover:bg-wine hover:text-white transition-all cursor-default">
                    <CheckCircle2 className="text-wine group-hover:text-white h-6 w-6" />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl font-heading text-wine italic border-l-8 border-wine/20 pl-8 text-center lg:text-left">
                You can shortlist the top 3–5 venues before sending inquiries. This ensures decision-making is data-driven yet simple.
              </p>
            </ContentBlock>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Step 5 – Inquiry */}
      <SectionWrapper
        variant="gradient"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Step 5 – Send Inquiry & Get Curated Responses" accent="Action" />
        <div className="max-w-5xl mx-auto space-y-16">
          <Tilt>
            <div className="px-6 py-12 md:p-20 rounded-[2.5rem] md:rounded-[5rem] bg-dark-accent text-white shadow-luxury relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-wine opacity-20 blur-[150px] rounded-full" />
              <div className="relative z-10 space-y-8">
                <p className="text-xl md:text-2xl italic leading-relaxed text-center">
                  Once you finalize your shortlist:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-[2rem] bg-white/5 border border-white/20">
                    <p className="font-bold text-champagne mb-4">The Process</p>
                    <ul className="space-y-4 text-sm opacity-80 list-disc pl-5">
                      <li>Click "Send Inquiry"</li>
                      <li>Fill a simple form: Name, Email, Phone, Event Type, City, Dates, Guest Count, Budget, Special Requirements</li>
                      <li>Our dedicated specialists analyze your needs and contact venues to provide customized proposals</li>
                      <li>Within 24 working hours, you will receive curated responses from venues ready to host your event.</li>
                    </ul>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-white/5 border border-white/20">
                    <p className="font-bold text-champagne mb-4">Corporate Handling</p>
                    <ul className="space-y-4 text-sm opacity-80 list-disc pl-5">
                      <li>Customized technical requirements</li>
                      <li>AV support details</li>
                      <li>Breakout session rooms</li>
                      <li>Residential and non-residential packages</li>
                      <li>Catering and banquet options</li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-sm italic opacity-60">
                  Keywords: corporate offsite resorts in Himachal Pradesh, executive boardroom rentals in New Delhi, seminar venues with accommodation in Bengaluru, gala dinner venues in Mumbai, product launch venues in Hyderabad.
                </p>
                <div className="flex justify-center mt-10">
                  <Link href="/contact" className="px-8 md:px-10 py-3.5 md:py-4.5 text-sm md:text-base rounded-full bg-wine text-white font-bold hover:bg-wine-dark transition-all flex items-center justify-center gap-3 shadow-luxury hover:scale-105 active:scale-95 whitespace-nowrap">
                    Send Inquiry Now <Send className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Step 6 & 7 & 8 */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle title="Evaluate & Book" accent="Confirmation" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-32">
          <HighlightCard
            icon={Search}
            title="Step 6 – Evaluate Proposals & Site Visits"
            content={
              <div className="space-y-4 text-left">
                <p>After receiving proposals:</p>
                <SimpleChecklist
                  items={[
                    "Compare pricing, packages, and availability",
                    "Schedule venue site visits if required",
                    "Discuss event customization and décor",
                    "Confirm availability of preferred dates",
                  ]}
                />
                <p className="pt-4 border-t border-wine/5 opacity-70">Our team assists in scheduling visits and provides expert advice on which venue suits your requirements.</p>
              </div>
            }
          />
          <HighlightCard
            icon={CheckCircle2}
            title="Step 7 – Book Your Venue"
            content={
              <div className="space-y-4 text-left">
                <p>Once you finalize:</p>
                <SimpleChecklist
                  items={[
                    "Confirm the venue directly through the platform",
                    "Receive official proposal & booking confirmation",
                    "Make secure payments",
                    "Get support for vendor coordination",
                  ]}
                />
                <p className="pt-4 border-t border-wine/5 opacity-70">VenueForEvent.com ensures transparent communication and professional guidance for stress-free booking.</p>
              </div>
            }
          />
        </div>

        <OrnateTitle title="Step 8 – Additional Services" accent="Value Add" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            { title: "Venue Proposals", desc: "Compare multiple options", icon: FileText },
            { title: "Menu Options", desc: "Choose cuisine & catering", icon: Star },
            { title: "Special Packages", desc: "Luxury & budget discounts", icon: Zap },
            { title: "Share Venue", icon: Send, desc: "Invite friends & family" },
            { title: "Social Sharing", icon: PlusCircle, desc: "WhatsApp, Email & More" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group",
                i === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-[50%] sm:mx-auto lg:max-w-none lg:mx-0" : ""
              )}
            >
              <Tilt className="h-full">
                <div className="p-6 md:p-8 rounded-[2.5rem] bg-white border border-champagne/10 shadow-sm hover:shadow-xl flex flex-col items-center text-center group transition-all h-full">
                  <div className="h-12 w-12 rounded-full bg-champagne/10 text-wine flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-colors shrink-0">
                    <item.icon size={24} />
                  </div>
                  <h5 className="font-heading text-lg font-bold mb-2">{item.title}</h5>
                  <p className="text-sm italic opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        <p className="mt-16 text-center text-muted-foreground italic max-w-2xl mx-auto">
          Keywords: wedding catering services in Mumbai, theme wedding decorators in Jaipur, team building activities in Kerala, networking event venues in Bengaluru.
        </p>
      </SectionWrapper>

      {/* Step 9 – Support & Communication */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
        sideDecorations
      >
        <OrnateTitle title="Step 9 – Dedicated Support & Communication" accent="Expert Guidance" variant="dark" />
        
        <div className="mt-12 md:mt-24 mb-16 md:mb-32">
          {/* Mobile view: Contact row as cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden px-2">
            {[
              { label: "General Inquiry", email: "support@venueforevent.com", phone: "+91-8800842084" },
              { label: "Wedding / Social", email: "weddings@venueforevent.com", phone: "+91-7399888844" },
              { label: "Corporate / MICE", email: "corporate@venueforevent.com", phone: "+91-8800842084" },
              { label: "Venue Partnerships", email: "partners@venueforevent.com", phone: "+91-7399888855" },
              { label: "Investor Relations", email: "investors@venueforevent.com", phone: "+91-8800842084" },
              { label: "Media & Press", email: "media@venueforevent.com", phone: "+91-8800842084" }
            ].map((contact, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col gap-3">
                <div>
                  <p className="text-champagne text-xs uppercase tracking-widest mb-1 opacity-70">Department</p>
                  <p className="text-white font-bold text-lg">{contact.label}</p>
                </div>
                <div className="grid grid-cols-1 gap-3 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-champagne shrink-0" />
                    <span className="text-white/80 text-sm break-all font-medium">{contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-champagne shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{contact.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view: Classic table */}
          <div className="hidden md:block mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md scrollbar-hide">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/10 text-champagne">
                  <th className="p-6 font-heading">Department</th>
                  <th className="p-6 font-heading">Email</th>
                  <th className="p-6 font-heading">Phone</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-t border-white/5"><td className="p-6 font-bold">General Inquiry</td><td className="p-6">support@venueforevent.com</td><td className="p-6">+91-8800842084</td></tr>
                <tr className="border-t border-white/5"><td className="p-6 font-bold">Wedding / Social</td><td className="p-6">weddings@venueforevent.com</td><td className="p-6">+91-7399888844</td></tr>
                <tr className="border-t border-white/5"><td className="p-6 font-bold">Corporate / MICE</td><td className="p-6">corporate@venueforevent.com</td><td className="p-6">+91-8800842084</td></tr>
                <tr className="border-t border-white/5"><td className="p-6 font-bold">Venue Partnerships</td><td className="p-6">partners@venueforevent.com</td><td className="p-6">+91-7399888855</td></tr>
                <tr className="border-t border-white/5"><td className="p-6 font-bold">Investor Relations</td><td className="p-6">investors@venueforevent.com</td><td className="p-6">+91-8800842084</td></tr>
                <tr className="border-t border-white/5"><td className="p-6 font-bold">Media & Press</td><td className="p-6">media@venueforevent.com</td><td className="p-6">+91-8800842084</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {[
            { name: "Head Office – New Delhi", addr: "Samta Enclave, Near Mother Dairy, Qutub Vihar, Phase 1, Sector 19, Dwarka, New Delhi – 110071" },
            { name: "Bengaluru Office – Karnataka", addr: "#590-10/1, 1st Cross, BEML Layout, Tubarahalli, Whitefield, Bengaluru – 560066" },
            { name: "Assam Office – North East", addr: "Purna Saikia Complex, NH-37, Sonapur, Kamrup (Metro), Assam – 782402" },
            { name: "Kolkata Office – West Bengal", addr: "Panchanantala, Panchpara, LP-494/55, Howrah, West Bengal – 711317" },
          ].map((office, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-[2rem] bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
              <div className="h-12 w-12 rounded-xl bg-champagne/10 text-champagne flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <p className="font-bold text-champagne">{office.name}</p>
                <p className="text-sm italic opacity-70">{office.addr}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Step 10 – Why VenueForEvent.com Works Best */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Step 10 – Why VenueForEvent.com Works Best" accent="Strengths" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            "Verified venues – No spam, no fake listings",
            "Curated recommendations – Tailored to your budget",
            "Expert guidance – Wedding & corporate specialists",
            "Multi-city coverage – From Mussoorie to Mumbai",
            "Fast response – Within 24 working hours",
            "Value-added services – Menus, proposals, sharing options",
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 md:gap-6 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-ivory/50 border border-champagne/20 group hover:bg-wine hover:text-white transition-all cursor-default"
            >
              <div className="h-12 w-12 rounded-full bg-white text-wine flex items-center justify-center shadow-sm group-hover:bg-wine group-hover:text-white border border-wine/10 shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <span className="font-bold italic">{v}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm italic text-muted-foreground opacity-60">
          Keywords: best wedding venues in Goa, luxury villas for weddings in Coorg, riverside wedding spots in Rishikesh, destination wedding resorts in Rajasthan, conference halls in New Delhi, business meeting rooms in Mumbai, corporate wellness retreats in Kerala, seminar halls for rent in Bengaluru.
        </p>
      </SectionWrapper>

      {/* Step 11 – Final Words */}
      <LookingAheadSection />
      <FinalWordSection />
    </InfoPageLayout>
  );
}

function LookingAheadSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <SectionWrapper
      variant="ivory"
      className="py-32 pb-40 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      sideDecorations
    >
      <div ref={containerRef} className="text-center space-y-16 max-w-6xl mx-auto px-6">
        <OrnateTitle title="Step 11 – Final Words" accent="The Beginning" />
        <div className="space-y-10 prose prose-2xl mx-auto italic text-muted-foreground">
          <p>
            Planning a wedding, celebration, or corporate event can be stressful. VenueForEvent.com makes it simple, organized, and stress-free. We combine technology, verified venues, expert support, and curated recommendations to ensure every event is memorable and flawless.
          </p>
          <p className="text-wine font-bold text-xl md:text-2xl lg:text-3xl not-prose leading-relaxed">
            Your dream venue — whether a heritage palace wedding in Jaipur, a luxury beach resort in Goa, a forest wedding in Uttarakhand, or a corporate gala in Mumbai — is now one conversation away.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-16 md:mt-24">
          <Link href="/contact" className="w-full md:w-auto px-5 md:px-8 py-3.5 md:py-4 rounded-full bg-wine text-white font-bold text-xs md:text-sm hover:shadow-2xl transition-all text-center whitespace-nowrap">
            🔴 Get Started – Send Your Inquiry
          </Link>
          <a href="tel:+918800842084" className="w-full md:w-auto px-5 md:px-8 py-3.5 md:py-4 rounded-full border border-wine text-wine font-bold text-xs md:text-sm hover:bg-wine hover:text-white transition-all text-center whitespace-nowrap">
            📞 Call Us: +91-8800842084
          </a>
          <a href="https://wa.me/917399888844" className="w-full md:w-auto px-5 md:px-8 py-3.5 md:py-4 rounded-full border border-green-600 text-green-600 font-bold text-xs md:text-sm hover:bg-green-600 hover:text-white transition-all text-center whitespace-nowrap">
            📲 WhatsApp: +91-7399888844
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

function FinalWordSection() {
  return (
    <SectionWrapper
      variant="dark"
      className="py-32 pb-40 -mt-16 relative z-30 rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"
      sideDecorations
    >
      <div className="text-center space-y-16 max-w-6xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white shadow-xl border border-champagne/20 max-w-4xl mx-auto">
          <p className="text-lg md:text-2xl font-heading font-medium leading-relaxed italic text-foreground">
            <span className="text-wine font-bold not-italic">VenueForEvent.com</span> ensures every event is memorable and flawless. Your perfect venue, perfect event, and perfect experience begin here.
          </p>
        </div>

        <div className="py-20 flex flex-col items-center group relative isolate">
          <div className="absolute -inset-24 bg-white/5 blur-[100px] rounded-full -z-10" />
          <div className="text-center space-y-4 md:space-y-6 w-full px-4">
            <h4 className="font-heading text-[5.8vw] sm:text-5xl md:text-5xl lg:text-[4.2vw] font-black text-white uppercase tracking-wider md:tracking-[0.2em] mb-4">
              VenueForEvent.com
            </h4>
            <p className="font-heading text-base sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-[0.2em] md:tracking-[0.4em]">
              A Part of Spodia
            </p>
            <p className="font-heading text-xs sm:text-lg font-medium text-champagne-light mt-4 italic">
              Powered by Homocation Asia Private Limited
            </p>
          </div>
          <p className="font-accent text-3xl md:text-5xl text-champagne-light mt-20">
            And we are just getting started.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
