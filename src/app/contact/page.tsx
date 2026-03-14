"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  SimpleChecklist,
  SubTitle,
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
} from "lucide-react";
import { motion } from "framer-motion";
import contactHero from "@/assets/contact-hero.png";
import Link from "next/link";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function ContactPage() {
  return (
    <InfoPageLayout
      heroTitle="Contact Us"
      heroSubtitle="One Conversation. The Perfect Venue."
      heroImage={contactHero.src}
      heroDescription="Planning an event — whether it's a royal palace wedding in Rajasthan, a destination wedding in Goa, a conference in New Delhi, or a gala dinner in Mumbai — begins with clarity. That clarity starts here."
    >
      {/* Intro */}
      <SectionWrapper variant="ivory" withDecorations className="section-bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p {...fadeUp} className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
            At VenueForEvent.com, we specialize in connecting individuals, families, event planners, corporations, and enterprises with verified venues across India and emerging destinations — including Mussoorie, Shimla, Manali, Nainital, Srinagar, Gulmarg, Munnar, Coorg, Ooty, Bengaluru, Chandigarh, Rishikesh, Dehradun, Jim Corbett (Ramnagar), Amritsar, Karnal, Kerala, Maharashtra, Uttarakhand, Tamil Nadu, Karnataka, Punjab, Gujarat, West Bengal, Jammu & Kashmir, Andhra Pradesh, and more.
          </motion.p>
          <motion.p {...fadeUp} className="mt-8 text-lg text-muted-foreground italic">
            Whether you&apos;re searching for: Best wedding venues in Goa • Luxury marriage gardens in Chandigarh • Intimate wedding venues in Mussoorie • Riverside wedding spots in Rishikesh • 5 star wedding hotels in Mumbai • Conference halls in New Delhi • Business meeting rooms in Bengaluru • Corporate offsite resorts in Himachal Pradesh • Convention centers in Maharashtra • Tech-ready conference spaces in Hyderabad
          </motion.p>
          <motion.p {...fadeUp} className="mt-10 text-2xl font-heading font-bold text-wine">
            You don&apos;t need 500 results. You need the right venue. And that&apos;s what we help you find.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Why Contact Us */}
      <SectionWrapper variant="white" withDecorations>
        <ContentBlock align="center" title="Why Contact Us Instead of Just Browsing?" accent="Clarity Over Noise">
          <p className="text-lg text-muted-foreground italic mb-10">
            Because planning events is not just about pictures — it&apos;s about:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Budget alignment", "Guest capacity accuracy", "Availability confirmation", "Location accessibility", "Vendor coordination", "Technical readiness", "Negotiation support", "Timeline execution"].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-4 rounded-2xl glass-premium border border-champagne/10">
                <CheckCircle2 className="h-5 w-5 text-champagne shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-xl font-heading text-wine italic">A single conversation with our specialists can save weeks of research.</p>
        </ContentBlock>
      </SectionWrapper>

      {/* Choose Event Type + Form */}
      <SectionWrapper variant="gradient" withDecorations className="section-bg-premium">
        <ContentBlock align="center" title="Choose Your Event Type" accent="We route to the right team">
          <p className="text-muted-foreground italic mb-8">When you contact us, simply select:</p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="px-8 py-4 rounded-full border-2 border-wine/30 bg-white/80 shadow-soft font-heading font-bold text-wine flex items-center gap-2">
              <Heart className="h-5 w-5" /> Wedding / Social Event
            </div>
            <div className="px-8 py-4 rounded-full border-2 border-wine/30 bg-white/80 shadow-soft font-heading font-bold text-wine flex items-center gap-2">
              <Briefcase className="h-5 w-5" /> Corporate / MICE Event
            </div>
          </div>

          <SubTitle className="text-wine text-center">📋 Universal Event Inquiry Form</SubTitle>
          <p className="text-lg font-heading text-foreground mb-8 text-center">Tell Us About Your Event</p>

          <motion.div {...fadeUp} id="form" className="max-w-2xl mx-auto">
            <div className="glass-premium rounded-[3rem] p-8 md:p-12 shadow-luxury space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="Email@domain.com" className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Mobile Number</label>
                <input type="tel" placeholder="+91" className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Event Type</label>
                <select className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground appearance-none cursor-pointer">
                  <option>Wedding, Reception, Sangeet, Engagement, Conference, Offsite, Seminar, Launch, Retreat, Exhibition, etc.</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Preferred City / Destination</label>
                  <input type="text" placeholder="e.g. Goa, Mumbai" className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Event Date(s)</label>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Estimated Guest Count</label>
                  <input type="text" placeholder="e.g. 150" className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Budget Range</label>
                  <input type="text" placeholder="e.g. 5-10 Lakhs" className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Residential Required? (Yes/No)</label>
                <input type="text" placeholder="Yes or No" className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Special Requirements / Notes</label>
                <textarea rows={4} placeholder="Any specific needs..." className="w-full px-5 py-3 rounded-2xl bg-background/50 border border-border focus:border-wine outline-none transition-all text-foreground placeholder:text-muted-foreground/50 resize-none" />
              </div>
              <button type="button" className="w-full btn-luxury btn-shimmer flex items-center justify-center gap-3 group py-5">
                🔴 Submit Inquiry Now <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-sm text-muted-foreground">
                ✔ Response within 24 working hours • ✔ Curated venue recommendations • ✔ No spam. No irrelevant calls.
              </p>
            </div>
          </motion.div>
        </ContentBlock>
      </SectionWrapper>

      {/* Wedding vs Corporate */}
      <SectionWrapper variant="ivory" withDecorations>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/20 shadow-soft hover:shadow-luxury transition-all duration-500">
            <SubTitle className="text-wine flex items-center gap-2"><Heart className="h-6 w-6" /> 💍 If You&apos;re Planning a Wedding or Social Celebration</SubTitle>
            <p className="text-muted-foreground italic mb-6">Your wedding is emotional. It&apos;s once in a lifetime. Whether you&apos;re dreaming of:</p>
            <SimpleChecklist columns={1} items={["Destination wedding resorts in Goa", "Heritage fort wedding in Rajasthan", "Mountain wedding in Manali", "Lake view wedding in Nainital", "Forest wedding venues in Uttarakhand", "Beach resort for wedding in Kerala", "Outdoor wedding lawns in Dehradun", "Engagement party venues in Mumbai", "Mehendi and Sangeet venues in Chandigarh", "Farmhouse for wedding in Karnal"]} />
            <p className="mt-6 font-bold text-foreground mb-4">We help you compare options based on:</p>
            <SimpleChecklist columns={1} items={["Guest count", "Budget", "Decor flexibility", "Catering services", "Accommodation inventory", "Photography & pre-wedding shoot locations", "All-inclusive wedding packages"]} />
            <p className="mt-6 text-sm text-muted-foreground italic">You don&apos;t need to stress about destination wedding cost in Jaipur or comparing banquet halls in Delhi — we assist step by step.</p>
            <p className="mt-8 font-heading text-wine font-bold">📞 Prefer to talk immediately?</p>
            <p className="text-lg font-bold text-foreground">Call: +91-8800842084 • WhatsApp: +91-7399888844</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-dark-accent text-white shadow-luxury border border-champagne/10">
            <SubTitle className="text-champagne flex items-center gap-2"><Briefcase className="h-6 w-6" /> 🏢 If You&apos;re Planning a Corporate Event</SubTitle>
            <p className="text-white/80 italic mb-6">Corporate events require precision. We assist companies organizing:</p>
            <SimpleChecklist columns={1} items={["Annual corporate retreats in Uttarakhand", "Product launch venues in Mumbai", "Training room hire in Bengaluru", "Dealers meet organizers in Chandigarh", "Executive boardroom rentals in New Delhi", "Exhibition centers in Gujarat", "Gala dinner venues in Kerala", "Residential conference packages in Maharashtra", "Networking event venues in Pune", "Large capacity auditoriums in Hyderabad"]} />
            <p className="mt-6 font-bold text-champagne mb-4">Our team supports:</p>
            <SimpleChecklist columns={1} items={["Capacity verification", "AV & technical layout", "Breakout rooms", "Corporate pricing negotiation", "Room block planning", "On-site coordination"]} />
            <p className="mt-8 font-heading text-champagne font-bold">📧 Corporate Desk: corporate@venueforevent.com</p>
            <p className="text-lg font-bold">📞 Direct Support: +91-8800842084</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Why People Trust + Offices */}
      <SectionWrapper variant="white" withDecorations>
        <ContentBlock align="center" title="⚡ Why People Trust VenueForEvent.com" accent="Governance & Scale">
          <p className="text-muted-foreground italic mb-8">We operate under Homocation Asia Private Limited, the parent company behind the hospitality ecosystem including Spodia. This gives us:</p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["✔ Established operational systems", "✔ Multi-city office presence", "✔ Technology infrastructure", "✔ Dedicated support teams", "✔ Professional governance"].map((item, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-ivory border border-champagne/20 text-sm font-medium text-foreground">{item}</span>
            ))}
          </div>
          <p className="text-lg font-heading text-wine italic mb-12">We are not a random listing website — we are an organized event venue discovery platform.</p>

          <SubTitle className="text-wine text-center mb-10">📍 Our Offices</SubTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/10">
              <h4 className="font-heading text-xl font-bold text-wine mb-4 flex items-center gap-2"><MapPin className="h-5 w-5" /> Head Office – New Delhi</h4>
              <p className="font-bold text-foreground">Homocation Asia Private Limited</p>
              <p className="text-sm text-muted-foreground mt-1">Samta Enclave, Near Mother Dairy, Qutub Vihar, Phase 1, Sector 19, Dwarka, New Delhi – 110071, India</p>
              <p className="mt-4 font-bold text-wine">📞 +91-8800842084 • 📲 +91-7399888844</p>
            </div>
            <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/10">
              <h4 className="font-heading text-xl font-bold text-wine mb-4 flex items-center gap-2"><Building2 className="h-5 w-5" /> Bengaluru Office – Karnataka</h4>
              <p className="text-sm text-muted-foreground">#590-10/1, 1st Cross, BEML Layout, Tubarahalli, Whitefield, Bengaluru, Karnataka – 560066, India</p>
            </div>
            <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/10">
              <h4 className="font-heading text-xl font-bold text-wine mb-4 flex items-center gap-2"><MapPin className="h-5 w-5" /> North East Office – Assam</h4>
              <p className="text-sm text-muted-foreground">Purna Saikia Complex, NH-37, Sonapur, Kamrup (Metro), Assam – 782402, India</p>
            </div>
            <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/10">
              <h4 className="font-heading text-xl font-bold text-wine mb-4 flex items-center gap-2"><MapPin className="h-5 w-5" /> Kolkata Office – West Bengal</h4>
              <p className="text-sm text-muted-foreground">Panchanantala, Panchpara, LP-494/55, Howrah, West Bengal – 711317, India</p>
            </div>
          </div>
        </ContentBlock>
      </SectionWrapper>

      {/* Email Channels */}
      <SectionWrapper variant="gradient" withDecorations>
        <ContentBlock align="center" title="📩 Dedicated Email Channels" accent="For faster routing">
          <p className="text-muted-foreground italic mb-10">Please contact the relevant department:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            {[
              { label: "General Event Support", email: "support@venueforevent.com" },
              { label: "Corporate Events & MICE", email: "corporate@venueforevent.com" },
              { label: "Wedding & Social Planning", email: "weddings@venueforevent.com" },
              { label: "Venue Listing & Partnerships", email: "partners@venueforevent.com" },
              { label: "Investor Relations", email: "investors@venueforevent.com" },
              { label: "Media & Press", email: "media@venueforevent.com" },
              { label: "Careers & HR", email: "careers@venueforevent.com" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/60 border border-champagne/20 hover:shadow-gold transition-all group">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                <a href={`mailto:${item.email}`} className="text-sm font-bold text-wine group-hover:underline">{item.email}</a>
              </div>
            ))}
          </div>
        </ContentBlock>
      </SectionWrapper>

      {/* Prime Dates + Privacy + What Happens */}
      <SectionWrapper variant="ivory" withDecorations>
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div {...fadeUp}>
            <SubTitle className="text-wine text-center">⏳ Prime Dates Fill Quickly</SubTitle>
            <p className="text-muted-foreground italic text-center">Wedding season (October–February) and peak corporate quarters (Q3 & Q4) experience high venue demand in cities like: Mumbai, New Delhi, Bengaluru, Chandigarh, Goa, Jaipur, Mussoorie, Rishikesh.</p>
            <p className="text-center font-bold text-foreground mt-4">If your event is within 3–6 months, early inquiry improves availability and negotiation leverage.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/10 shadow-soft">
            <SubTitle className="text-wine flex items-center gap-2"><ShieldCheck className="h-6 w-6" /> 🔒 Your Privacy & Data Security</SubTitle>
            <SimpleChecklist columns={1} items={["We do not sell your data.", "We do not spam.", "We do not auto-share without permission.", "All data is handled under Homocation Asia Pvt. Ltd. compliance."]} />
          </motion.div>
          <motion.div {...fadeUp}>
            <SubTitle className="text-wine text-center">🧠 What Happens After You Contact Us?</SubTitle>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-center max-w-md mx-auto">
              <li>You submit inquiry</li>
              <li>We acknowledge</li>
              <li>Specialist reviews requirements</li>
              <li>Curated venue shortlist shared</li>
              <li>You connect directly with venues</li>
              <li>Optional follow-up assistance</li>
            </ol>
            <p className="text-center font-heading text-wine italic mt-6">Simple. Professional. Efficient.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper variant="dark" withDecorations className="section-bg-dark">
        <ContentBlock align="center" title="Final Call to Action" accent="Your event deserves the right venue" className="text-white">
          <p className="text-white/90 italic mb-10">Whether it&apos;s: A royal wedding in Rajasthan • A beach ceremony in Goa • A mountain celebration in Manali • A leadership summit in New Delhi • A corporate offsite in Himachal Pradesh • A gala dinner in Mumbai</p>
          <p className="text-2xl font-heading text-champagne mb-12">Your event deserves the right venue.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#form" className="btn-luxury btn-shimmer inline-flex items-center gap-2">🔴 Submit Your Inquiry Now</Link>
            <a href="tel:+918800842084" className="btn-outline-luxury inline-flex items-center gap-2 text-white border-white/50 hover:bg-white/10">📞 Call Us</a>
            <a href="https://wa.me/918800842084" className="btn-outline-luxury inline-flex items-center gap-2 text-white border-white/50 hover:bg-white/10">📲 WhatsApp Us</a>
            <a href="mailto:support@venueforevent.com" className="btn-outline-luxury inline-flex items-center gap-2 text-white border-white/50 hover:bg-white/10">📧 Email Us</a>
          </div>
          <p className="mt-10 text-champagne font-bold">We respond within 24 working hours.</p>
        </ContentBlock>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
