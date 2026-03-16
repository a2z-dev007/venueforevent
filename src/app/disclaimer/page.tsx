"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  SimpleChecklist,
  OrnateTitle,
  SubTitle,
  Tilt,
  StepGrid,
  HighlightCard,
  HighlightedQuote,
} from "@/components/common/InfoComponents";
import {
  ShieldAlert,
  FileText,
  Link2,
  ZapOff,
  Mail,
  PhoneCall,
  MapPin,
  Building2,
  Scale,
  ShieldCheck,
  Eye,
  Zap,
  Star,
  Globe,
  MessageSquare,
  AlertCircle,
  FileSearch,
} from "lucide-react";
import heroVenue from "@/assets/hero-venue.jpg";
import parallax1 from "@/assets/celebration.jpg";
import parallax2 from "@/assets/hero-venue.jpg";
import parallax3 from "@/assets/celebration-sparklers.jpg";
import { motion } from "framer-motion";

export default function DisclaimerPage() {
  return (
    <InfoPageLayout
      heroTitle="Disclaimer"
      heroSubtitle="VenueForEvent.com"
      heroImage={heroVenue.src}
      heroDescription="This Disclaimer governs your use of VenueForEvent.com. By accessing or using this Platform, you accept this Disclaimer in full."
      hideWave={true}
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
          width="medium"
          accent="Legal Notice"
        >
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-wine/60 font-bold tracking-widest text-xs uppercase">
            <span>Effective Date: [Insert Date]</span>
            <span className="hidden md:block opacity-30">|</span>
            <span>Last Updated: [Insert Date]</span>
          </div>
          
          <p className="text-2xl md:text-3xl leading-relaxed text-wine font-heading mb-12 italic max-w-5xl mx-auto text-center">
            This Disclaimer governs your use of VenueForEvent.com (&quot;Platform&quot;, &quot;Website&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), owned and operated by Homocation Asia Pvt. Ltd.
          </p>
          
          <div className="prose prose-xl text-muted-foreground max-w-4xl mx-auto text-center italic space-y-8">
            <p>
              By accessing or using this Platform, you accept this Disclaimer in full. If you do not agree, please discontinue use of the Website.
            </p>
          </div>
        </ContentBlock>

        <Tilt className="mt-24">
          <div className="bg-white/60 backdrop-blur-xl px-6 py-10 md:p-20 rounded-[2.5rem] md:rounded-[5rem] border border-white/40 shadow-luxury relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-wine/5 rounded-full blur-[100px] group-hover:bg-wine/10 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
              <div className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 rounded-[2rem] md:rounded-[2.5rem] bg-wine text-white flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <ShieldCheck className="h-10 w-10 md:h-12 md:w-12" />
              </div>
              <div className="text-lg md:text-2xl font-medium italic text-foreground/90 leading-snug">
                "Our platform acts as a bridge between event planners and premium venues, ensuring transparency and efficiency in every connection."
              </div>
            </div>
          </div>
        </Tilt>
      </SectionWrapper>

      {/* 1. Platform Role & 2. No Professional Advice */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Facilitation & Guidance" accent="Our Position" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="bg-ivory/50 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-champagne/20 shadow-inner relative h-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="h-14 w-14 rounded-2xl bg-white text-wine flex items-center justify-center mb-8 shadow-sm">
                  <Globe className="h-7 w-7" />
                </div>
                <SubTitle className="text-wine mb-6">1. Platform Role</SubTitle>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    VenueForEvent.com is an online marketplace that connects users with independent venue owners and service providers for events such as weddings, corporate functions, social gatherings, conferences, and related occasions.
                  </p>
                  <p className="font-bold text-wine italic">We act solely as a facilitator and do not:</p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Own, operate, or manage listed venues",
                      "Provide event services directly (unless explicitly stated)",
                      "Enter into contracts on behalf of venues or service providers",
                    ]}
                  />
                  <p className="mt-4 text-muted-foreground italic leading-relaxed">
                    All bookings, negotiations, agreements, and transactions occur directly between users and third-party providers.
                  </p>
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
              <div className="bg-wine/5 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-wine/10 shadow-inner relative h-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="h-14 w-14 rounded-2xl bg-white text-wine flex items-center justify-center mb-8 shadow-sm">
                  <Scale className="h-7 w-7" />
                </div>
                <SubTitle className="text-wine mb-6">2. No Professional Advice</SubTitle>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    Information provided on the Platform is for general informational purposes only. We do not provide:
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Legal advice",
                      "Financial advice",
                      "Event planning consultancy",
                      "Professional guarantees",
                    ]}
                  />
                  <p className="mt-4 text-muted-foreground italic leading-relaxed">
                    Users should independently verify details and seek appropriate professional advice before making decisions.
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 3. Accuracy & 4. No Warranties (Background Image) */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        parallaxImage={parallax1.src}
        sideDecorations
      >
        <OrnateTitle title="Content & Guarantees" accent="Information Standards" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <HighlightCard
              icon={FileSearch}
              title="3. Accuracy of Information"
              content={
                <div className="space-y-4 text-left">
                  <p>
                    Venue details, pricing, availability, images, and descriptions are provided by third-party partners. While we strive to keep information updated and accurate, we do not guarantee:
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={["Completeness", "Accuracy", "Reliability", "Current availability", "Pricing validity"]}
                  />
                  <p className="text-xs pt-4 opacity-70">
                    Users are responsible for independently confirming all information before finalizing any booking.
                  </p>
                </div>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-full"
          >
            <HighlightCard
              icon={ShieldAlert}
              title="4. No Warranties"
              content={
                <div className="space-y-4 text-left">
                  <p>
                    The Platform is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. We make no warranties, express or implied, regarding:
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={["Availability of the Website", "Uninterrupted or error-free operation", "Accuracy of content", "Security of data transmission", "Suitability for a particular purpose"]}
                  />
                  <p className="text-xs pt-4 opacity-70">
                    We disclaim all warranties to the fullest extent permitted by law.
                  </p>
                </div>
              }
            />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 5. Limitation of Liability (Dark) */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
        sideDecorations
      >
        <OrnateTitle
          title="5. Limitation of Liability"
          accent="Legal Boundaries"
          variant="dark"
        />
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-12 text-center">
            To the maximum extent permitted by law, VenueForEvent.com and Homocation Asia Pvt. Ltd. shall not be liable for:
          </p>
          
          <div className="mb-16">
            <StepGrid
              steps={[
                { title: "Service Failures", desc: "By venues or vendors", icon: ZapOff },
                { title: "Transaction Issues", desc: "Booking disputes or cancellations", icon: AlertCircle },
                { title: "Safety & Damages", desc: "Losses or injuries at events", icon: ShieldAlert },
                { title: "Business Loss", desc: "Indirect or consequential damages", icon: Scale },
              ]}
            />
          </div>
          
          <div className="mt-12 p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-lg md:text-xl text-champagne-light italic text-center leading-relaxed">
              Users engage with third-party venues and service providers at their own risk. This includes all negotiations, site visits, and financial commitments made outside or through the platform tools.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. Third-Party Links & 7. External Factors */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax2.src}
        sideDecorations
      >
        <OrnateTitle title="External Dependencies" accent="Third-Party Factors" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <ContentBlock
              title="6. Third-Party Links"
              accent="External Navigation"
              width="full"
              align="mobile-center"
              titleClassName="md:text-3xl lg:min-h-[5rem]"
              className="flex-1 mb-0"
            >
              <div className="p-8 md:p-10 rounded-[3rem] bg-ivory/80 backdrop-blur-md border border-wine/10 shadow-sm space-y-6 flex-1">
                <p className="text-lg text-muted-foreground italic leading-relaxed text-left">
                  The Platform may contain links to third-party websites for convenience. We do not control or endorse such websites and are not responsible for:
                </p>
                <SimpleChecklist
                  columns={1}
                  items={["Their content", "Their privacy practices", "Any transactions made on those platforms"]}
                />
                <p className="text-base text-wine font-medium italic pt-4">
                  Access to third-party websites is at your own discretion.
                </p>
              </div>
            </ContentBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <ContentBlock
              title="7. External Factors & Force Majeure"
              accent="Unforeseen Events"
              width="full"
              align="mobile-center"
              titleClassName="md:text-3xl lg:min-h-[5rem]"
              className="flex-1 mb-0"
            >
              <div className="p-8 md:p-10 rounded-[3rem] bg-wine/5 backdrop-blur-md border border-wine/10 shadow-sm space-y-6 flex-1">
                <p className="text-lg text-muted-foreground italic leading-relaxed text-left">
                  We are not responsible for disruptions caused by events beyond our control, including but not limited to:
                </p>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-5">
                  {[
                    "Natural disasters",
                    "Government regulations",
                    "Network failures",
                    "Technical interruptions",
                    "Acts of God",
                  ].map((item, id) => (
                    <div
                      key={id}
                      className="flex items-start gap-3 text-sm md:text-base font-bold text-wine/70 text-left leading-normal"
                    >
                      <div className="h-1.5 w-1.5 bg-wine rounded-full mt-2 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ContentBlock>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 8. Testimonials & 9. Changes */}
      <SectionWrapper
        variant="ivory"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="text-center space-y-12">
            <OrnateTitle title="8. Testimonials & Reviews" accent="Public Opinions" />
            <div className="w-full">
              <Tilt>
                <div className="px-6 py-12 md:p-16 rounded-[3rem] md:rounded-[4rem] bg-white border border-champagne/20 shadow-xl">
                  <MessageSquare className="h-10 w-10 md:h-12 md:w-12 text-wine/20 mx-auto mb-8" />
                  <p className="text-base md:text-2xl text-muted-foreground italic leading-relaxed font-medium text-center">
                    &quot;Any testimonials, ratings, or reviews displayed on the Platform reflect individual experiences and opinions. We do not guarantee similar results or experiences for all users.&quot;
                  </p>
                </div>
              </Tilt>
            </div>
          </div>

          <div className="text-center space-y-12">
            <OrnateTitle title="9. Changes to This Disclaimer" accent="Platform Policy" />
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground italic leading-relaxed">
                We reserve the right to update or modify this Disclaimer at any time. Changes will be effective immediately upon posting on this page. Continued use of the Platform constitutes acceptance of any revisions.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. Contact Information */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        parallaxImage={parallax3.src}
        sideDecorations
      >
        <OrnateTitle title="10. Contact Information" accent="Legal Enquiries" />
        
        <div className="max-w-4xl mx-auto">
          <Tilt>
            <div className="relative p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] bg-dark-accent text-white shadow-luxury overflow-hidden group border border-white/10">
              <div className="absolute top-0 left-0 w-full h-full bg-wine/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <Building2 className="h-16 w-16 text-champagne mb-8" />
                <h4 className="font-heading text-2xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider">Homocation Asia Pvt. Ltd.</h4>
                <div className="h-px w-24 bg-champagne mb-10" />
                
                <div className="space-y-10 w-full max-w-2xl">
                  <div className="flex flex-col items-center gap-4">
                    <MapPin className="h-6 w-6 text-champagne shrink-0" />
                    <p className="text-lg md:text-xl text-champagne-light italic font-medium leading-relaxed">
                      Registered Office: Plot No 18, D Block, Qutub Vihar, Phase 1, Nr. Sector 19 Dwarks, South West Delhi – 110071, India
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                    <a href="mailto:legal@venueforevent.com" className="flex flex-col items-center gap-2 group/link">
                      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover/link:bg-wine/40 transition-all">
                        <Mail className="h-5 w-5 text-champagne" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-white/50">Email Us</span>
                      <span className="text-lg font-bold">legal@venueforevent.com</span>
                    </a>
                    
                    <a href="tel:+918800842084" className="flex flex-col items-center gap-2 group/link">
                      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover/link:bg-wine/40 transition-all">
                        <PhoneCall className="h-5 w-5 text-champagne" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-white/50">Call Us</span>
                      <span className="text-lg font-bold">+91-8800842084</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Final Acknowledgment */}
      <SectionWrapper
        variant="ivory"
        className="py-16 md:py-24 pb-24 md:pb-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
      >
        <div className="max-w-4xl mx-auto text-center">
          <HighlightedQuote>
            By using VenueForEvent.com, you acknowledge that you have read, understood, and agreed to this Disclaimer.
          </HighlightedQuote>
          <div className="mt-16 flex flex-col items-center gap-4">
            <Star className="h-8 w-8 text-wine/20" />
            <p className="font-heading text-xl md:text-5xl font-heavy text-wine uppercase tracking-[0.2em] opacity-30">
              VenueForEvent.com
            </p>
          </div>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
