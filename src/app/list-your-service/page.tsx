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
  Heart,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  Phone,
  MessageSquare,
  FileDown,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import listServiceHero from "@/assets/list-service-hero.png";
import Link from "next/link";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function ListYourServicePage() {
  return (
    <InfoPageLayout
      heroTitle="List Your Service"
      heroSubtitle="VenueForEvent.com"
      heroImage={listServiceHero.src}
      heroDescription="Get Discovered by Clients Planning Weddings, Corporate Events & Destination Celebrations Across India. Are you a wedding planner, event decorator, caterer, photographer, production agency, corporate event manager, or experiential service provider? VenueForEvent.com is building India's most trusted event ecosystem — connecting venues, vendors, planners, and corporate buyers on one powerful platform."
    >
      {/* Intro + If clients are searching */}
      <SectionWrapper variant="ivory" withDecorations>
        <ContentBlock align="center" width="full">
          <p className="text-lg text-muted-foreground italic mb-8">
            If clients are searching for: Top wedding planners in Rajasthan • Professional event planners in Bengaluru • Wedding catering services in Chandigarh • Best wedding photographers in Punjab • Corporate event management in Maharashtra • Dealers meet organizers in New Delhi • Team building activities in Rishikesh • MICE event production partners in Mumbai — your service deserves visibility where real booking decisions happen.
          </p>
        </ContentBlock>
      </SectionWrapper>

      {/* Why List */}
      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="Why List Your Service on VenueForEvent.com?" accent="India's event economy" />
        <p className="text-center text-muted-foreground italic mb-8 max-w-3xl mx-auto">
          India&apos;s event economy is massive and growing — from destination weddings in Goa to corporate offsite retreats in Uttarakhand. Yet most service providers struggle with: Unpredictable lead flow • Low-quality inquiries • Overdependence on referrals • Heavy competition on social media • No structured corporate exposure.
        </p>
        <p className="text-center font-heading text-wine font-bold mb-10">VenueForEvent.com solves this by connecting you with:</p>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {["✔ High-intent wedding clients", "✔ Corporate decision-makers", "✔ Event planners & venue owners", "✔ Multi-city destination bookings"].map((item, i) => (
            <span key={i} className="px-6 py-3 rounded-full bg-ivory border border-champagne/20 text-sm font-medium text-foreground shadow-soft">{item}</span>
          ))}
        </div>
        <p className="text-center text-muted-foreground italic mt-10">We don&apos;t send random inquiries. We connect you with real event planners actively finalizing vendors.</p>
      </SectionWrapper>

      {/* Who Should List */}
      <SectionWrapper variant="gradient" withDecorations className="section-bg-premium">
        <OrnateTitle title="Who Should List?" accent="Verified service providers" />
        <p className="text-center text-muted-foreground italic mb-12">We onboard verified service providers across both social and corporate event categories.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto text-left">
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-white border border-champagne/20 shadow-soft">
            <SubTitle className="text-wine flex items-center gap-2"><Heart className="h-6 w-6" /> 💍 Wedding & Social Event Services</SubTitle>
            <p className="text-sm text-muted-foreground italic mb-6">Perfect for professionals working in: Destination wedding resorts in Goa, Luxury marriage gardens in Jaipur, Royal palace wedding venues in Rajasthan, Intimate wedding venues in Ooty, Riverside wedding spots in Rishikesh, Forest wedding venues in Uttarakhand, 5 star wedding hotels in Manali, Engagement party venues in Chandigarh, Mehendi and sangeet venues in Amritsar.</p>
            <p className="font-bold text-foreground mb-3">Eligible Categories:</p>
            <SimpleChecklist columns={1} items={["Wedding planners", "Theme wedding decorators", "Floral designers", "Wedding photographers & cinematographers", "Bridal makeup artists", "Wedding catering services", "Sound & light production", "Entertainment artists & DJs", "Pre-wedding shoot specialists"]} />
            <p className="mt-6 text-sm text-muted-foreground italic">Clients searching for &quot;destination wedding cost in Mussoorie&quot; or &quot;best wedding venues in Nainital&quot; often need complete vendor solutions. That&apos;s where you come in.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[3rem] bg-dark-accent text-white shadow-luxury border border-champagne/10">
            <SubTitle className="text-champagne flex items-center gap-2"><Briefcase className="h-6 w-6" /> 🏢 Corporate & MICE Services</SubTitle>
            <p className="text-white/80 text-sm italic mb-6">Ideal for professionals supporting: Conference halls in New Delhi, Business meeting rooms in Mumbai, MICE event venues in Bengaluru, Corporate offsite resorts in Kerala, Exhibition centers in Delhi NCR, Seminar halls for rent in Dehradun, Executive boardroom rentals in Mumbai, Gala dinner venues in Chandigarh, Large capacity auditoriums in New Delhi.</p>
            <p className="font-bold text-champagne mb-3">Eligible Categories:</p>
            <SimpleChecklist columns={1} items={["Corporate event management agencies", "Production & AV companies", "Exhibition & stall fabricators", "Team building activity organizers", "Corporate wellness retreat facilitators", "Branding & experiential marketing agencies", "Product launch planners", "Award ceremony production teams"]} />
            <p className="mt-6 text-sm text-white/70 italic">If a company is booking an annual corporate retreat in Himachal Pradesh or a product launch venue in Mumbai, they also need experienced service providers.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="What You Get as a Service Partner" accent="Four pillars" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-heading text-wine font-bold mb-4">1️⃣ Verified Professional Profile</p>
            <p className="text-sm text-muted-foreground mb-4">Your profile will include: Service categories • Portfolio images & videos • Cities & states covered • Client testimonials • Package range • Specialization highlights • Past event case studies.</p>
            <p className="text-sm italic">You can position yourself under searches like: Top wedding planners in Rajasthan, Professional event planners in Bengaluru, Corporate event management in Maharashtra, Wedding catering services in Chandigarh.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-heading text-wine font-bold mb-4">2️⃣ Direct Access to Event Clients</p>
            <p className="text-sm text-muted-foreground mb-4">We connect you with clients planning: 💍 Destination weddings • 🎉 Intimate celebrations • 🏢 Corporate conferences • 🏖 Workation retreats • 🎤 Product launches • 🏆 Gala dinners • 📊 Dealers meets • 🌿 Corporate wellness retreats.</p>
            <p className="text-sm font-medium text-foreground">All inquiries include structured details like: Event type • Guest count • Budget range • Event dates • Venue location. No more vague &quot;Call for details&quot; leads.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-heading text-wine font-bold mb-4">3️⃣ Multi-City Exposure</p>
            <p className="text-sm text-muted-foreground mb-4">Whether you operate in Rajasthan, Goa, Kerala, Uttarakhand, Himachal Pradesh, Maharashtra, Karnataka, Tamil Nadu, Punjab, Haryana, Gujarat, West Bengal — we help expand your footprint beyond your local circle.</p>
            <p className="text-sm italic">If you specialize in Heritage fort weddings in Rajasthan, Beach resort weddings in Goa, Corporate offsite resorts in Uttarakhand, Tech-ready conference spaces in Bengaluru — we help you gain visibility where demand already exists.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <p className="font-heading text-wine font-bold mb-4">4️⃣ Increased Brand Credibility</p>
            <p className="text-sm text-muted-foreground mb-4">Being listed on a structured event platform: ✔ Builds authority • ✔ Improves client trust • ✔ Enhances Google discoverability • ✔ Strengthens corporate positioning • ✔ Positions you as a verified professional.</p>
            <p className="text-sm italic">VenueForEvent.com operates under Homocation Asia Pvt. Ltd., ensuring structured onboarding and professional alignment.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="How It Works" accent="Simple steps" />
        <StepGrid steps={[
          { title: "Step 1: Submit Your Service Details", desc: "Click 'List Your Service' and complete our registration form. Provide: Business name, Contact information, Cities served, Service categories, Portfolio samples, Pricing range, Past client references (optional but recommended).", icon: Rocket },
          { title: "Step 2: Verification & Review", desc: "Our team evaluates: ✔ Service authenticity • ✔ Professional experience • ✔ Event category fit • ✔ Portfolio quality. We maintain quality standards to protect client trust.", icon: ShieldCheck },
          { title: "Step 3: Profile Optimization", desc: "We optimize your profile for keywords such as: Best wedding photographers in Punjab, Team building activities in Rishikesh, Corporate event management in Maharashtra, Theme wedding decorators in Chandigarh, Dealers meet organizers in New Delhi. This increases organic discovery potential.", icon: Star },
          { title: "Step 4: Start Receiving Inquiries", desc: "Once approved, your service becomes discoverable to: Families planning destination wedding cost in Goa • Corporates booking conference halls in New Delhi • Brands organizing networking event venues in Mumbai • HR teams planning corporate wellness retreats in Kerala.", icon: CheckCircle2 },
        ]} />
        <p className="mt-10 text-center text-sm text-muted-foreground italic max-w-2xl mx-auto">Accurate portfolio details increase your chances of receiving premium leads.</p>
      </SectionWrapper>

      {/* Partnership Models */}
      <SectionWrapper variant="gradient" withDecorations>
        <ContentBlock align="center" title="Partnership Models" accent="Flexible options">
          <p className="text-muted-foreground italic mb-8">We offer flexible models including:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["✔ Lead-based performance plans", "✔ Featured listing visibility", "✔ City-specific promotional packages", "✔ Annual service partner plans"].map((item, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/80 border border-champagne/20 text-sm font-medium text-foreground shadow-soft">{item}</span>
            ))}
          </div>
          <p className="mt-10 font-heading text-wine italic">Our goal is long-term partnership, not short-term listing.</p>
        </ContentBlock>
      </SectionWrapper>

      {/* Why Join Now + FAQ */}
      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="Why Join Now?" accent="Peak seasons" />
        <p className="text-center text-muted-foreground italic mb-10 max-w-3xl mx-auto">
          Peak seasons are booking fast across: Destination wedding resorts in Goa • Luxury villas for weddings in Coorg • Corporate offsite resorts in Uttarakhand • Exhibition centers in Mumbai • Convention centers in New Delhi. Clients are finalizing vendors months in advance. This is your opportunity to be visible during high-demand cycles.
        </p>
        <SubTitle className="text-wine text-center mb-6">Frequently Asked Questions</SubTitle>
        <div className="max-w-2xl mx-auto space-y-6 text-left">
          <div className="p-6 rounded-2xl bg-white border border-champagne/10">
            <p className="font-bold text-foreground mb-2">Is there a listing fee?</p>
            <p className="text-sm text-muted-foreground italic">We offer flexible partnership structures depending on category and visibility.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-champagne/10">
            <p className="font-bold text-foreground mb-2">Do you work with freelancers?</p>
            <p className="text-sm text-muted-foreground italic">Yes — if verified and portfolio-backed.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-champagne/10">
            <p className="font-bold text-foreground mb-2">Can I list services in multiple cities?</p>
            <p className="text-sm text-muted-foreground italic">Absolutely. Many partners operate across Rajasthan, Goa, Kerala, Maharashtra, Karnataka, and Punjab.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-champagne/10">
            <p className="font-bold text-foreground mb-2">Do you support corporate-only vendors?</p>
            <p className="text-sm text-muted-foreground italic">Yes. We actively expand our MICE & corporate ecosystem.</p>
          </div>
        </div>
        <p className="mt-12 text-center font-heading text-wine font-bold max-w-2xl mx-auto">Grow Beyond Referrals — If you&apos;re serious about scaling your event business beyond word-of-mouth marketing, social media only leads, and seasonal dependency, then VenueForEvent.com is your growth platform.</p>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="dark" withDecorations className="section-bg-dark">
        <OrnateTitle title="🚀 Take the Next Step" accent="Get listed" variant="dark" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link href="/contact" className="p-8 rounded-[2.5rem] glass-premium-dark border border-champagne/20 text-center group hover:bg-white/10 transition-all">
            <Star className="h-10 w-10 text-champagne mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white mb-2">List Your Service Now</p>
          </Link>
          <a href="tel:+918800842084" className="p-8 rounded-[2.5rem] glass-premium-dark border border-champagne/20 text-center group hover:bg-white/10 transition-all">
            <Phone className="h-10 w-10 text-champagne mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white mb-2">Call Our Partnership Team</p>
          </a>
          <a href="https://wa.me/918800842084" className="p-8 rounded-[2.5rem] glass-premium-dark border border-champagne/20 text-center group hover:bg-white/10 transition-all">
            <MessageSquare className="h-10 w-10 text-champagne mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white mb-2">WhatsApp for Quick Onboarding</p>
          </a>
          <span className="p-8 rounded-[2.5rem] glass-premium-dark border border-champagne/20 text-center group">
            <FileDown className="h-10 w-10 text-champagne mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-heading font-bold text-white mb-2">Download Service Partnership Brochure</p>
          </span>
        </div>
        <p className="mt-12 text-center text-2xl font-heading text-champagne font-bold">India&apos;s wedding and corporate event industry is expanding. Be visible. Be trusted. Be booked.</p>
        <p className="mt-6 text-center text-white/80 italic">Join VenueForEvent.com today and connect with clients who are ready to plan.</p>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
