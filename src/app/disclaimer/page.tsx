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
} from "@/components/common/InfoComponents";
import {
  ShieldAlert,
  FileText,
  Link2,
  ZapOff,
  Mail,
  PhoneCall,
  MapPin,
} from "lucide-react";
import heroVenue from "@/assets/hero-venue.jpg";
import { motion } from "framer-motion";

export default function DisclaimerPage() {
  return (
    <InfoPageLayout
      heroTitle="Disclaimer"
      heroSubtitle="VenueForEvent.com"
      heroImage={heroVenue.src}
      heroDescription="This Disclaimer governs your use of VenueForEvent.com. By accessing or using this Platform, you accept this Disclaimer in full. If you do not agree, please discontinue use of the Website."
      hideWave={true}
    >
      {/* Intro + Effective Date */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        className="pt-24 pb-32 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
            <span className="text-sm uppercase font-bold tracking-widest">Effective Date: [Insert Date]</span>
            <span className="text-sm uppercase font-bold tracking-widest">Last Updated: [Insert Date]</span>
          </div>
          <ContentBlock align="left" accent="Legal Notice">
            <p className="text-lg leading-relaxed text-muted-foreground italic">
              This Disclaimer governs your use of VenueForEvent.com (&quot;Platform&quot;, &quot;Website&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), owned and operated by Homocation Asia Pvt. Ltd. By accessing or using this Platform, you accept this Disclaimer in full. If you do not agree, please discontinue use of the Website.
            </p>
          </ContentBlock>
        </div>
      </SectionWrapper>

      {/* 1. Platform Role */}
      <SectionWrapper variant="white" className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <OrnateTitle title="1. Platform Role" accent="Digital Facilitation" />
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-muted-foreground leading-relaxed italic">
            VenueForEvent.com is an online marketplace that connects users with independent venue owners and service providers for events such as weddings, corporate functions, social gatherings, conferences, and related occasions.
          </p>
          <p className="text-lg text-wine font-bold">We act solely as a facilitator and do not:</p>
          <SimpleChecklist
            columns={1}
            items={[
              "Own, operate, or manage listed venues",
              "Provide event services directly (unless explicitly stated)",
              "Enter into contracts on behalf of venues or service providers",
            ]}
          />
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            All bookings, negotiations, agreements, and transactions occur directly between users and third-party providers.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. No Professional Advice */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle title="2. No Professional Advice" accent="Informational Only" />
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-muted-foreground leading-relaxed italic">
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
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            Users should independently verify details and seek appropriate professional advice before making decisions.
          </p>
        </div>
      </SectionWrapper>

      {/* 3. Accuracy of Information & 4. No Warranties */}
      <SectionWrapper variant="white" className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Tilt>
              <div className="p-12 rounded-[4rem] bg-ivory/50 border border-champagne/20 shadow-inner h-full">
                <SubTitle className="text-wine flex items-center gap-3">
                  <FileText className="h-6 w-6" /> 3. Accuracy of Information
                </SubTitle>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  Venue details, pricing, availability, images, and descriptions are provided by third-party partners. While we strive to keep information updated and accurate, we do not guarantee:
                </p>
                <SimpleChecklist
                  columns={1}
                  items={[
                    "Completeness",
                    "Accuracy",
                    "Reliability",
                    "Current availability",
                    "Pricing validity",
                  ]}
                />
                <p className="mt-6 text-muted-foreground italic leading-relaxed text-sm">
                  Users are responsible for independently confirming all information before finalizing any booking.
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
              <div className="p-12 rounded-[4rem] bg-wine/5 border border-wine/10 shadow-inner h-full">
                <SubTitle className="text-wine flex items-center gap-3">
                  <ShieldAlert className="h-6 w-6" /> 4. No Warranties
                </SubTitle>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  The Platform is provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding:
                </p>
                <SimpleChecklist
                  columns={1}
                  items={[
                    "Availability of the Website",
                    "Uninterrupted or error-free operation",
                    "Accuracy of content",
                    "Security of data transmission",
                    "Suitability for a particular purpose",
                  ]}
                />
                <p className="mt-6 text-muted-foreground italic leading-relaxed text-sm">
                  We disclaim all warranties to the fullest extent permitted by law.
                </p>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 5. Limitation of Liability */}
      <SectionWrapper
        variant="dark"
        className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
      >
        <OrnateTitle title="5. Limitation of Liability" accent="Legal Limits" />
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-white/90 italic leading-relaxed mb-10">
            To the maximum extent permitted by law, VenueForEvent.com and Homocation Asia Pvt. Ltd. shall not be liable for:
          </p>
          <SimpleChecklist
            columns={1}
            items={[
              "Service failures by venues or vendors",
              "Booking disputes",
              "Cancellation issues",
              "Losses, damages, or injuries occurring at events",
              "Indirect, incidental, or consequential damages",
              "Loss of profits, revenue, or business opportunities",
            ]}
          />
          <p className="mt-10 text-lg text-champagne italic leading-relaxed">
            Users engage with third-party venues and service providers at their own risk.
          </p>
        </div>
      </SectionWrapper>

      {/* 6. Third-Party Links & 7. External Factors */}
      <SectionWrapper variant="ivory" className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]" withDecorations>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Tilt>
              <div className="p-12 rounded-[4rem] bg-white border border-champagne/10 shadow-lg h-full hover:shadow-xl transition-all">
                <SubTitle className="text-wine flex items-center gap-3">
                  <Link2 className="h-6 w-6" /> 6. Third-Party Links
                </SubTitle>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  The Platform may contain links to third-party websites for convenience. We do not control or endorse such websites and are not responsible for: Their content, Their privacy practices, Any transactions made on those platforms.
                </p>
                <p className="text-muted-foreground italic leading-relaxed text-sm">
                  Access to third-party websites is at your own discretion.
                </p>
              </div>
            </Tilt>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Tilt>
              <div className="p-12 rounded-[4rem] bg-white border border-champagne/10 shadow-lg h-full hover:shadow-xl transition-all">
                <SubTitle className="text-wine flex items-center gap-3">
                  <ZapOff className="h-6 w-6" /> 7. External Factors & Force Majeure
                </SubTitle>
                <p className="text-muted-foreground italic leading-relaxed">
                  We are not responsible for disruptions caused by events beyond our control, including but not limited to: Natural disasters, Government regulations, Network failures, Technical interruptions, Acts of God
                </p>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 8. Testimonials & Reviews */}
      <SectionWrapper variant="white" className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <OrnateTitle title="8. Testimonials & Reviews" accent="Individual Experiences" />
        <div className="max-w-3xl mx-auto">
          <Tilt>
            <div className="p-12 rounded-[4rem] bg-ivory/50 border border-champagne/20 shadow-inner text-center">
              <p className="text-xl text-muted-foreground italic leading-relaxed">
                Any testimonials, ratings, or reviews displayed on the Platform reflect individual experiences and opinions. We do not guarantee similar results or experiences for all users.
              </p>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* 9. Changes to This Disclaimer */}
      <SectionWrapper
        variant="gradient"
        className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        withDecorations
      >
        <OrnateTitle title="9. Changes to This Disclaimer" accent="Updates" />
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-muted-foreground italic leading-relaxed text-center">
            We reserve the right to update or modify this Disclaimer at any time. Changes will be effective immediately upon posting on this page. Continued use of the Platform constitutes acceptance of any revisions.
          </p>
        </div>
      </SectionWrapper>

      {/* 10. Contact Information */}
      <SectionWrapper
        variant="white"
        className="py-24 -mt-16 relative z-20 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
      >
        <OrnateTitle title="10. Contact Information" accent="Legal Inquiries" />
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground italic mb-10 text-center">For questions regarding this Disclaimer:</p>
          <Tilt>
            <div className="p-12 md:p-16 rounded-[4rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-wine/20 blur-3xl rounded-full" />
              <div className="relative z-10 space-y-8">
                <p className="font-heading text-xl text-champagne">Homocation Asia Pvt. Ltd.</p>
                <div className="flex items-start gap-4 text-white/90">
                  <MapPin className="h-6 w-6 flex-shrink-0 text-champagne mt-1" />
                  <p className="leading-relaxed">
                    Registered Office: Plot No 18, D Block, Qutub Vihar, Phase 1, Nr. Sector 19 Dwarks, South West Delhi – 110071, India
                  </p>
                </div>
                <div className="flex flex-wrap gap-8 pt-4">
                  <a href="mailto:legal@venueforevent.com" className="flex items-center gap-3 group hover:text-champagne transition-colors">
                    <Mail className="h-6 w-6" />
                    <span>Email: legal@venueforevent.com</span>
                  </a>
                  <a href="tel:+918800842084" className="flex items-center gap-3 group hover:text-champagne transition-colors">
                    <PhoneCall className="h-6 w-6" />
                    <span>Phone: +91-8800842084</span>
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Closing acknowledgment */}
      <SectionWrapper
        variant="dark"
        className="py-16 -mt-16 relative z-20 rounded-t-[4rem]"
        withDecorations
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-white/90 italic leading-relaxed">
            By using VenueForEvent.com, you acknowledge that you have read, understood, and agreed to this Disclaimer.
          </p>
          <p className="mt-8 font-heading text-2xl text-champagne uppercase tracking-widest">VenueForEvent.com</p>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
