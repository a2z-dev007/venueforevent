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
import { Send, CheckCircle2, Heart, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import howItWorksHero from "@/assets/how-it-works-hero.png";
import Link from "next/link";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function HowItWorksPage() {
  return (
    <InfoPageLayout
      heroTitle="How It Works"
      heroSubtitle="VenueForEvent.com"
      heroImage={howItWorksHero.src}
      heroDescription="Discover, Compare, and Book the Perfect Venue with Ease. Planning a perfect event — whether a destination wedding in Goa, an intimate wedding in Mussoorie, a corporate offsite in Himachal Pradesh, or a product launch in Bengaluru — can feel overwhelming. VenueForEvent.com simplifies this journey, guiding you from initial ideas to final booking with a seamless, stress-free experience."
    >
      {/* Intro */}
      <SectionWrapper variant="ivory" withDecorations>
        <ContentBlock align="center" width="full">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic max-w-4xl mx-auto">
            We combine technology, expertise, and a curated network of venues to help you make the best decisions — whether your focus is luxury wedding venues, heritage palace weddings, conference halls, corporate retreats, or large-scale events.
          </p>
          <p className="mt-8 text-lg text-foreground font-medium max-w-3xl mx-auto">
            Our platform is designed to serve both social events (weddings, receptions, engagement parties, mehendi ceremonies, intimate celebrations) and corporate events (conferences, offsites, workshops, product launches, seminars, MICE programs).
          </p>
        </ContentBlock>
      </SectionWrapper>

      {/* Step 1 – Explore */}
      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="Step 1 – Explore Our Curated Venue Listings" accent="Your first step" />
        <p className="text-center text-muted-foreground italic mb-12 max-w-3xl mx-auto">
          The first step in planning your event is finding the right venue. VenueForEvent.com offers over 1.5 lakh verified venues across India, Nepal, Bhutan, Bangladesh, Sri Lanka, Thailand, Indonesia, Vietnam, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-ivory border border-champagne/20 shadow-soft hover:shadow-luxury transition-all">
            <div className="h-14 w-14 rounded-2xl bg-wine/10 text-wine flex items-center justify-center mb-6"><Heart className="h-7 w-7" /></div>
            <SubTitle className="text-wine">For Social & Wedding Events</SubTitle>
            <p className="text-muted-foreground italic mb-6">Whether you are planning a royal palace wedding in Jaipur, a luxury marriage garden in Chandigarh, a forest wedding venue in Uttarakhand, or a beach resort wedding in Kerala, our platform provides:</p>
            <SimpleChecklist columns={1} items={["Detailed venue profiles with high-quality photos, videos, and 360° views", "Event configurations and capacities for ceremonies and receptions", "Wedding package options, including all-inclusive pricing", "Special services like pre-wedding shoot locations, wedding photographers, and theme decorators"]} />
            <p className="mt-6 text-sm text-muted-foreground italic">Keywords naturally embedded: destination wedding cost in Jaipur, luxury marriage gardens in Chandigarh, heritage fort wedding in Rajasthan, outdoor wedding lawns in Dehradun, intimate wedding venues in Mussoorie, riverside wedding spots in Rishikesh, 5 star wedding hotels in Mumbai, forest wedding venues in Uttarakhand.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-dark-accent text-white shadow-luxury border border-champagne/10">
            <div className="h-14 w-14 rounded-2xl bg-white/10 text-champagne flex items-center justify-center mb-6"><Briefcase className="h-7 w-7" /></div>
            <SubTitle className="text-champagne">For Corporate & MICE Events</SubTitle>
            <p className="text-white/80 italic mb-6">For business events, we list conferences, seminar halls, corporate offsite resorts, exhibition centers, training rooms, and gala dinner venues. Our platform ensures:</p>
            <SimpleChecklist columns={1} items={["Accurate capacity and technical specifications", "Availability of AV equipment and high-speed internet", "Optional residential packages for retreats", "Quick price estimates and corporate negotiation assistance"]} />
            <p className="mt-6 text-sm text-champagne/90 italic">Keywords: conference halls in New Delhi, business meeting rooms in Mumbai, corporate offsite resorts in Himachal Pradesh, executive boardroom rentals in Bengaluru, exhibition centers in Goa, residential conference packages in Maharashtra, gala dinner venues in Chandigarh.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Step 2 – Filter */}
      <SectionWrapper variant="gradient" withDecorations className="section-bg-premium">
        <OrnateTitle title="Step 2 – Filter & Shortlist Your Venues" accent="Narrow down with ease" />
        <p className="text-center text-muted-foreground italic mb-10 max-w-3xl mx-auto">
          Searching through thousands of venues can be overwhelming. VenueForEvent.com allows you to filter based on location, budget, capacity, amenities, event type, and availability.
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-4">Location Filters</p>
            <p className="text-sm text-muted-foreground italic">Select cities like Mussoorie, Shimla, Manali, Srinagar, Gulmarg, Nainital, Dalhousie, Munnar, Coorg, Ooty, New Delhi, Mumbai, Bengaluru, Chandigarh, Rishikesh, Dehradun, Jim Corbett (Ramnagar), Karnal, Jaipur, Goa, Kerala, Uttarakhand, Himachal Pradesh.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-4">Event Type Filters</p>
            <p className="text-sm text-muted-foreground italic">Weddings, Engagements, Receptions, Corporate Conferences, Seminars, Product Launches, Team Building, Gala Dinners, Offsites.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-bold text-wine mb-4">Budget & Packages • Capacity & Layout • Special Amenities</p>
            <p className="text-sm text-muted-foreground italic">Choose venues offering all-inclusive wedding packages, budget-friendly destination weddings, or luxury options. From intimate venues for 50 guests to large banquet halls and auditoriums. AV equipment, catering services, accommodation, outdoor lawns, poolside venues, rooftop views, beach access, or heritage property.</p>
          </div>
          <p className="text-center font-heading text-wine font-bold">Our AI-assisted suggestion system recommends the top 10 best-matched venues, ensuring efficiency and relevance.</p>
        </div>
      </SectionWrapper>

      {/* Step 3 – Detailed Profiles */}
      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="Step 3 – Detailed Venue Profiles" accent="See the full picture" />
        <p className="text-center text-muted-foreground italic mb-10 max-w-3xl mx-auto">
          Once you shortlist, explore each venue&apos;s full profile. Each profile includes:
        </p>
        <div className="max-w-4xl mx-auto">
          <SimpleChecklist columns={2} items={["High-definition photos and video tours", "Event layout & seating plans", "Facilities & services – catering, decoration, AV support, parking, security", "Packages and pricing – from traditional wedding venues in Delhi to corporate wellness retreats in Kerala", "Special features – outdoor lawns, rooftop terraces, banquet halls, luxury rooms, heritage architecture"]} />
          <p className="mt-8 text-center text-sm text-muted-foreground italic">Keywords used naturally: pre-wedding shoot locations in Manali, riverside wedding spots in Rishikesh, luxury villas for weddings in Coorg, seminar halls for rent in Bengaluru, conference halls in New Delhi, business meeting rooms in Mumbai.</p>
          <p className="mt-6 text-center text-foreground font-medium">Each venue page also provides downloadable proposals, multiple menu options, and special package documents for ease of comparison.</p>
        </div>
      </SectionWrapper>

      {/* Step 4 – Compare */}
      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="Step 4 – Compare & Evaluate Options" accent="Side-by-side" />
        <p className="text-center text-muted-foreground italic mb-10 max-w-3xl mx-auto">
          Choosing the perfect venue involves comparing multiple options. VenueForEvent.com allows side-by-side comparisons on:
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {["Price and package inclusions", "Guest capacity", "Event layout & configuration flexibility", "Location advantages & accessibility", "Vendor support and in-house services"].map((item, i) => (
            <span key={i} className="px-6 py-3 rounded-full bg-ivory border border-champagne/20 text-sm font-medium text-foreground shadow-soft">{item}</span>
          ))}
        </div>
        <p className="mt-10 text-center font-heading text-wine italic">You can shortlist the top 3–5 venues before sending inquiries. This ensures decision-making is data-driven yet simple.</p>
      </SectionWrapper>

      {/* Step 5 – Send Inquiry */}
      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="Step 5 – Send Inquiry & Get Curated Responses" accent="The human connect" />
        <p className="text-center text-muted-foreground italic mb-8 max-w-3xl mx-auto">
          Once you finalize your shortlist: Click &quot;Send Inquiry&quot; • Fill a simple form: Name, Email, Phone, Event Type, City, Dates, Guest Count, Budget, Special Requirements • Our dedicated specialists analyze your needs and contact venues to provide customized proposals • Within 24 working hours, you will receive curated responses from venues ready to host your event.
        </p>
        <p className="text-center text-foreground font-medium mb-10">For corporate events, we also handle: Customized technical requirements • AV support details • Breakout session rooms • Residential and non-residential packages • Catering and banquet options.</p>
        <p className="text-center text-sm text-muted-foreground italic">Keywords: corporate offsite resorts in Himachal Pradesh, executive boardroom rentals in New Delhi, seminar venues with accommodation in Bengaluru, gala dinner venues in Mumbai, product launch venues in Hyderabad.</p>
        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-luxury btn-shimmer inline-flex items-center gap-2">Send Inquiry <Send className="h-5 w-5" /></Link>
        </div>
      </SectionWrapper>

      {/* Step 6 & 7 & 8 */}
      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="Step 6 – Evaluate Proposals & Schedule Site Visits" accent="Next steps" />
        <p className="text-center text-muted-foreground italic mb-12 max-w-3xl mx-auto">
          After receiving proposals: Compare pricing, packages, and availability • Schedule venue site visits if required • Discuss event customization, seating arrangements, and décor • Confirm availability of preferred dates. Our team assists in scheduling visits and provides expert advice on which venue suits your social or corporate requirements.
        </p>
        <OrnateTitle title="Step 7 – Book Your Venue" accent="Confirm with confidence" />
        <p className="text-center text-muted-foreground italic mb-12 max-w-3xl mx-auto">
          Once you finalize: Confirm the venue directly through the platform • Receive official proposal & booking confirmation • Make secure payments (if applicable) • Get support for vendor coordination, decor, catering, and technical services. VenueForEvent.com ensures transparent communication and professional guidance for stress-free booking.
        </p>
        <OrnateTitle title="Step 8 – Additional Services" accent="Value-added" />
        <p className="text-center text-muted-foreground italic mb-8 max-w-3xl mx-auto">
          We also provide value-added services to make your event memorable: Venue Proposals Download – Compare multiple options • Multiple Menu Options – Choose cuisine & catering plans • Special Packages & Discounts – Luxury & budget options • Share This Venue – Invite friends, family, or colleagues to view venues • Social Media Share Buttons – Share easily via WhatsApp, Email, LinkedIn, Facebook.
        </p>
        <p className="text-center text-sm text-muted-foreground italic">Keywords: wedding catering services in Mumbai, theme wedding decorators in Jaipur, team building activities in Kerala, networking event venues in Bengaluru.</p>
      </SectionWrapper>

      {/* Step 9 – Support & Offices */}
      <SectionWrapper variant="dark" withDecorations className="section-bg-dark">
        <OrnateTitle title="Step 9 – Dedicated Support & Communication" accent="Expert guidance" variant="dark" />
        <p className="text-center text-white/80 italic mb-10">Our specialist teams provide continuous support for Weddings & Social Events and Corporate & MICE Events.</p>
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-4 px-4 font-heading text-champagne">Department</th>
                <th className="py-4 px-4 font-heading text-champagne">Email</th>
                <th className="py-4 px-4 font-heading text-champagne">Phone</th>
              </tr>
            </thead>
            <tbody className="text-white/90 text-sm">
              <tr className="border-b border-white/10"><td className="py-3 px-4">General Inquiry</td><td className="py-3 px-4">support@venueforevent.com</td><td className="py-3 px-4">+91-8800842084</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 px-4">Wedding / Social</td><td className="py-3 px-4">weddings@venueforevent.com</td><td className="py-3 px-4">+91-7399888844</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 px-4">Corporate / MICE</td><td className="py-3 px-4">corporate@venueforevent.com</td><td className="py-3 px-4">+91-8800842084</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 px-4">Venue Partnerships</td><td className="py-3 px-4">partners@venueforevent.com</td><td className="py-3 px-4">+91-7399888855</td></tr>
              <tr className="border-b border-white/10"><td className="py-3 px-4">Investor Relations</td><td className="py-3 px-4">investors@venueforevent.com</td><td className="py-3 px-4">+91-8800842084</td></tr>
              <tr><td className="py-3 px-4">Media & Press</td><td className="py-3 px-4">media@venueforevent.com</td><td className="py-3 px-4">+91-8800842084</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-champagne font-bold mt-10">Our offices span across India for local and national support.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8 text-left text-sm text-white/80">
          <div><strong className="text-champagne">Head Office – New Delhi</strong><br />Samta Enclave, Near Mother Dairy, Qutub Vihar, Phase 1, Sector 19, Dwarka, New Delhi – 110071</div>
          <div><strong className="text-champagne">Bengaluru Office – Karnataka</strong><br />#590-10/1, 1st Cross, BEML Layout, Tubarahalli, Whitefield, Bengaluru – 560066</div>
          <div><strong className="text-champagne">Assam Office – North East</strong><br />Purna Saikia Complex, NH-37, Sonapur, Kamrup (Metro), Assam – 782402</div>
          <div><strong className="text-champagne">Kolkata Office – West Bengal</strong><br />Panchanantala, Panchpara, LP-494/55, Howrah, West Bengal – 711317</div>
        </div>
      </SectionWrapper>

      {/* Step 10 – Why it works */}
      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="Step 10 – Why VenueForEvent.com Works Best" accent="Unmatched quality" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Verified venues – No spam, no fake listings",
            "Curated recommendations – Tailored to your budget and preference",
            "Expert guidance – Wedding & corporate specialists",
            "Multi-city coverage – From Mussoorie to Mumbai, Goa to Bengaluru",
            "Fast response – Within 24 working hours",
            "Value-added services – Menus, proposals, packages, and sharing options",
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} className="p-8 rounded-[2.5rem] bg-ivory border border-champagne/20 shadow-soft flex items-center gap-4 group hover:shadow-luxury transition-all">
              <div className="h-12 w-12 rounded-xl bg-wine/10 text-wine flex items-center justify-center shrink-0 group-hover:bg-wine group-hover:text-white transition-all"><CheckCircle2 className="h-6 w-6" /></div>
              <p className="text-sm font-medium text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground italic max-w-2xl mx-auto">Keywords: best wedding venues in Goa, luxury villas for weddings in Coorg, riverside wedding spots in Rishikesh, destination wedding resorts in Rajasthan, conference halls in New Delhi, business meeting rooms in Mumbai, corporate wellness retreats in Kerala, seminar halls for rent in Bengaluru.</p>
      </SectionWrapper>

      {/* Step 11 – Final + CTA */}
      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="Step 11 – Final Words" accent="Your dream venue" />
        <p className="text-center text-lg text-muted-foreground italic max-w-3xl mx-auto mb-10">
          Planning a wedding, celebration, or corporate event can be stressful. VenueForEvent.com makes it simple, organized, and stress-free. We combine technology, verified venues, expert support, and curated recommendations to ensure every event is memorable and flawless.
        </p>
        <p className="text-center text-xl font-heading text-wine italic mb-12">
          Your dream venue — whether a heritage palace wedding in Jaipur, a luxury beach resort in Goa, a forest wedding in Uttarakhand, or a corporate gala in Mumbai — is now one conversation away.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/contact" className="btn-luxury btn-shimmer inline-flex items-center gap-2">🔴 Get Started Today – Send Your Inquiry</Link>
          <a href="tel:+918800842084" className="btn-outline-luxury inline-flex items-center gap-2">📞 Call Us Now +91-8800842084</a>
          <a href="https://wa.me/917399888844" className="btn-outline-luxury inline-flex items-center gap-2">📲 WhatsApp +91-7399888844</a>
        </div>
        <p className="mt-10 text-center font-heading text-wine font-bold">Your perfect venue, perfect event, and perfect experience begin here.</p>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
