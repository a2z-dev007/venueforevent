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
  ShieldCheck,
  Scale,
  UserCheck,
  FileText,
  AlertTriangle,
  CreditCard,
  Building2,
  Lock,
  Globe,
  Ban,
  Scale as Justice,
  Mail,
  Zap,
  Info,
  ExternalLink,
  RefreshCw,
  Clock,
  Handshake,
  CheckCircle2,
  Phone,
  MapPin,
  Building,
} from "lucide-react";
import aboutUsHero from "@/assets/about-us-hero.png";
import celebrationImg from "@/assets/celebration.jpg";
import venueImg from "@/assets/hero-venue.jpg";
import parallax1 from "@/assets/celebration.jpg";
import parallax2 from "@/assets/hero-venue.jpg";
import parallax3 from "@/assets/celebration-sparklers.jpg";
import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
  return (
    <InfoPageLayout
      heroTitle="Terms & Conditions"
      heroSubtitle="VenueForEvent.com"
      heroImage={aboutUsHero.src}
      heroDescription="Legal Clarity. Mutual Trust. Professional Excellence."
      hideWave={true}
      heroTitleClassName="whitespace-nowrap text-[7vw] sm:text-[6vw] lg:text-[5.5vw] xl:text-[90px] text-center mx-auto leading-none tracking-tighter"
      heroContentClassName="flex flex-col items-center justify-center text-center"
    >
      {/* Introduction Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="pt-12 md:pt-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <ContentBlock align="center" width="full" accent="Welcome to VenueForEvent.com">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-wine font-heading mb-10 italic lg:max-w-5xl xl:max-w-6xl mx-auto">
            These Terms & Conditions (“Terms”) govern your access to and use of
            VenueForEvent.com (“Platform”, “Website”, “we”, “our”, “us”), owned
            and operated by Homocation Asia Pvt. Ltd., a company incorporated
            under the laws of India.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground text-sm font-medium italic">
            <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-sm border border-champagne/20">
              <Clock className="h-4 w-4 text-wine" /> Effective Date: [Insert
              Date]
            </span>
            <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-sm border border-champagne/20">
              <RefreshCw className="h-4 w-4 text-wine" /> Last Updated: [Insert
              Date]
            </span>
          </div>
          <div className="prose prose-base sm:prose-lg md:prose-xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto text-center italic space-y-8">
            <p>
              By accessing, browsing, registering on, listing with, or otherwise
              using this Platform, you agree to be legally bound by these Terms.
              If you do not agree with any part of these Terms, you must
              discontinue use of the Platform immediately.
            </p>
          </div>
        </ContentBlock>

        <div className="mt-24">
          <HighlightedQuote>
            By using VenueForEvent.com, you acknowledge that you have read,
            understood, and agreed to these Terms & Conditions.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* 1. About the Platform Section */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="About the Platform" accent="Our Role & Purpose" />
        <div className="prose prose-base sm:prose-lg md:prose-xl lg:prose-2xl text-muted-foreground max-w-5xl mx-auto text-center mb-20 italic">
          <p>
            VenueForEvent.com is an online marketplace that enables users to:
          </p>
        </div>

        <div className="mb-24">
          <StepGrid
            steps={[
              {
                title: "Discovery",
                desc: "Discover and explore event venues",
                icon: Info,
              },
              {
                title: "Connections",
                desc: "Connect with venue owners and service providers",
                icon: Handshake,
              },
              {
                title: "Inquiries",
                desc: "Submit inquiries for weddings, social events, corporate events, conferences, and related services",
                icon: FileText,
              },
              {
                title: "Facilitation",
                desc: "The Platform acts solely as a facilitator between users and independent third-party venue owners and service providers.",
                icon: Zap,
              },
            ]}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <Tilt>
            <div className="bg-wine/5 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-wine/10 shadow-inner text-center">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
                VenueForEvent.com does not own, operate, manage, or control the
                venues or services listed on the Platform unless explicitly
                stated.
              </p>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* 2 & 3. Eligibility & User Accounts */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 h-full flex flex-col"
          >
            <ContentBlock
              title="Eligibility"
              accent="Who Can Use"
              width="full"
              align="mobile-center"
              className="flex-1 flex flex-col"
            >
              <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-muted-foreground mb-12 italic text-center lg:text-left">
                By using this Platform, you confirm that:
              </p>
              <div className="flex flex-col items-center lg:items-start w-full">
                <SimpleChecklist
                  items={[
                    "You are at least 18 years of age;",
                    "You are legally capable of entering into binding contracts;",
                    "Any information you provide is accurate and complete.",
                    "If you are using the Platform on behalf of an organization, you confirm that you are authorized to bind that organization to these Terms.",
                  ]}
                />
              </div>
            </ContentBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 h-full flex flex-col"
          >
            <ContentBlock
              title="User Accounts"
              accent="Registration"
              width="full"
              align="mobile-center"
              className="flex-1 flex flex-col"
            >
              <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-muted-foreground mb-12 italic text-center lg:text-left">
                Certain features may require account registration. You agree to:
              </p>
              <div className="flex flex-col items-center lg:items-start w-full">
                <SimpleChecklist
                  items={[
                    "Provide accurate, current, and complete information;",
                    "Maintain the confidentiality of your login credentials;",
                    "Accept responsibility for all activities conducted through your account.",
                  ]}
                />
              </div>
            </ContentBlock>
          </motion.div>
        </div>
        <p className="mt-16 text-center text-muted-foreground text-xl font-medium italic opacity-60 max-w-3xl mx-auto">
          We reserve the right to suspend or terminate accounts if we suspect
          false information, misuse, or violation of these Terms.
        </p>
      </SectionWrapper>

      {/* 4. Nature of Services Section */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax1.src}
        sideDecorations
      >
        <OrnateTitle title="Nature of Services" accent="Facilitation Only" />
        <div className="prose prose-base sm:prose-lg md:prose-xl lg:prose-2xl text-muted-foreground max-w-5xl mx-auto text-center mb-20 italic">
          <p>VenueForEvent.com:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {[
            {
              title: "Discovery Platform",
              desc: "Provides a digital platform for venue and service discovery;",
              icon: Globe,
            },
            {
              title: "Communication",
              desc: "Facilitates communication between users and third parties;",
              icon: Handshake,
            },
            {
              title: "Inquiry Management",
              desc: "May forward inquiries submitted through the Platform to relevant partners.",
              icon: Zap,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-full"
            >
              <Tilt className="h-full">
                <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[4rem] bg-white border border-champagne/10 shadow-sm hover:shadow-2xl transition-all text-center h-full">
                  <div className="h-20 w-20 mx-auto rounded-3xl bg-ivory text-wine flex items-center justify-center mb-8 group-hover:bg-wine group-hover:text-white transition-all transform group-hover:rotate-12">
                    <item.icon size={32} />
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-3 text-center">
                    {item.title}
                  </h4>
                  <p className="text-base opacity-60 italic font-medium text-center">
                    {item.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto text-center italic text-muted-foreground text-xl leading-relaxed">
          <p className="mb-8">
            We are not a party to any agreement entered into between users and
            venue owners or service providers.
          </p>
          <div className="p-8 rounded-[2rem] bg-dark-accent text-white border border-white/10 shadow-luxury">
            "All negotiations, contracts, payments, cancellations, and service
            terms are strictly between the user and the respective third party."
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Listings Section */}
      <SectionWrapper
        variant="ivory"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
      >
        <OrnateTitle
          title="Listings & Information Accuracy"
          accent="Third-Party Content"
        />
        <div className="prose prose-xl text-muted-foreground max-w-4xl mx-auto text-center mb-16 italic">
          <p>
            All venue and service information displayed on the Platform is
            provided by third-party partners. While we make reasonable efforts
            to maintain accurate and updated information, we do not guarantee:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-champagne/20 shadow-inner relative h-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="absolute top-10 right-10 text-champagne/10 hidden md:block">
                  <AlertTriangle size={100} />
                </div>
                <SubTitle className="text-wine flex items-center gap-2">
                  Disclaimers:
                </SubTitle>
                <SimpleChecklist
                  columns={1}
                  items={[
                    "Availability",
                    "Pricing accuracy",
                    "Service quality",
                    "Completeness of descriptions",
                    "Accuracy of images",
                  ]}
                />
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
              <div className="bg-wine/5 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-wine/10 shadow-inner relative h-full flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
                <div className="absolute top-10 right-10 text-wine/10 hidden md:block">
                  <UserCheck size={100} />
                </div>
                <p className="text-lg md:text-2xl font-heading text-wine leading-relaxed italic relative z-10">
                  "Users are responsible for independently verifying all
                  information before making any booking or financial
                  commitment."
                </p>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 6 & 7. Booking & Partner Responsibilities */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax2.src}
        sideDecorations
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="p-8 lg:p-10 xl:p-16 rounded-[3.5rem] md:rounded-[5rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden h-full flex flex-col border border-white/10 items-center justify-center text-center sm:items-start sm:text-left sm:justify-start">
                <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-wine opacity-10 blur-3xl rounded-full" />
                <h4 className="font-heading text-[13px] min-[360px]:text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold text-champagne mb-8 md:mb-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 md:gap-6 whitespace-nowrap">
                  <CreditCard className="h-8 w-8 md:h-10 md:w-10 shrink-0" />{" "}
                  Booking & Payments
                </h4>
                <div className="prose prose-lg text-white/80 italic mb-12 space-y-6">
                  <p>
                    VenueForEvent.com does not process payments unless
                    explicitly stated in writing. Any payment, deposit, refund,
                    or cancellation policy is governed solely by the agreement
                    between the user and the venue or service provider.
                  </p>
                </div>
                <div className="space-y-6 border-t border-white/10 pt-10 opacity-80 italic text-base flex flex-col items-center text-center sm:items-start sm:text-left w-full">
                  <p className="font-bold text-champagne uppercase tracking-[0.2em] text-xs mb-6 text-center md:text-left">
                    We are not responsible for:
                  </p>
                  <SimpleChecklist
                    columns={1}
                    variant="dark"
                    items={[
                      "Booking disputes;",
                      "Refund claims;",
                      "Service deficiencies;",
                      "Event cancellations;",
                      "Contractual disagreements.",
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
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="px-6 py-10 lg:p-10 xl:p-16 rounded-[3rem] md:rounded-[5rem] bg-ivory/80 backdrop-blur-md border border-wine/10 shadow-2xl relative overflow-hidden h-full flex flex-col items-center text-center">
                <div className="absolute -top-10 -right-10 w-60 h-60 md:w-80 md:h-80 bg-champagne/10 blur-3xl rounded-full" />
                <h4 className="font-heading text-[13px] min-[360px]:text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold text-wine mb-8 md:mb-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 md:gap-6 whitespace-nowrap">
                  <Building2 className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0" />{" "}
                  Partner Responsibilities
                </h4>
                <div className="space-y-12 w-full">
                  <p className="text-lg italic text-muted-foreground font-medium text-center">
                    Venue owners and service providers listing on the Platform
                    agree to:
                  </p>
                  <div className="grid grid-cols-1 gap-4 text-left">
                    <SimpleChecklist
                      columns={1}
                      items={[
                        "Provide accurate and lawful information;",
                        "Maintain necessary licenses and approvals;",
                        "Deliver services as represented;",
                        "Communicate professionally with users.",
                      ]}
                    />
                  </div>
                  <div className="mt-8 px-6 py-8 rounded-[2rem] bg-white shadow-inner border border-wine/5 italic text-sm text-foreground/70 leading-relaxed text-center">
                    "We reserve the right to remove or suspend listings that:
                    Violate applicable laws; Contain misleading information;
                    Damage the integrity of the Platform."
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 8 & 9. IP & Prohibited Use */}
      <SectionWrapper
        variant="gradient"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <AlternatingGrid
          items={[
            {
              title: "Intellectual Property",
              icon: Lock,
              text: (
                <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                  <p className="text-lg sm:text-xl md:text-2xl italic leading-relaxed">
                    All content on VenueForEvent.com is the property of
                    Homocation Asia Pvt. Ltd. or its licensors and is protected
                    by applicable intellectual property laws.
                  </p>
                  <p className="font-bold text-wine italic text-lg sm:text-xl">
                    This includes but is not limited to:
                  </p>
                  <div className="grid grid-cols-3 gap-x-1 gap-y-6 w-full">
                    {[
                      "Text",
                      "Design",
                      "Layout",
                      "Logos",
                      "Graphics",
                      "Software",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-foreground/80"
                      >
                        <CheckCircle2 className="h-4 w-4 text-wine shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 border-t border-wine/10 text-lg sm:text-xl font-heading text-foreground italic leading-snug">
                    "No content may be copied, reproduced, modified, or
                    distributed without prior written permission. By submitting
                    content (including images and descriptions), partners grant
                    us a non-exclusive license to use such content for listing
                    and promotional purposes."
                  </div>
                </div>
              ),
              image: celebrationImg.src,
            },
            {
              title: "Prohibited Use",
              icon: Ban,
              text: (
                <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                  <p className="text-lg sm:text-xl md:text-2xl italic leading-relaxed">
                    Users agree not to:
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Submit false or fraudulent inquiries;",
                      "Post unlawful, defamatory, or misleading content;",
                      "Attempt unauthorized access to the Platform;",
                      "Use automated tools to scrape or extract data;",
                      "Interfere with the functionality or security of the Platform.",
                    ]}
                  />
                  <div className="pt-8 border-t border-wine/10 text-muted-foreground italic text-lg leading-relaxed">
                    Violation may result in suspension, termination, and
                    potential legal action.
                  </div>
                </div>
              ),
              image: venueImg.src,
            },
          ]}
        />
      </SectionWrapper>

      {/* 10. Limitation of Liability Section */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
        sideDecorations
      >
        <OrnateTitle
          title="Limitation of Liability"
          accent="To the maximum extent permitted by law"
          variant="dark"
        />
        <div className="max-w-5xl mx-auto space-y-16">
          <p className="text-2xl text-center text-white/80 italic leading-relaxed">
            VenueForEvent.com and Homocation Asia Pvt. Ltd. shall not be liable
            for:
          </p>
          <Tilt>
            <div className="px-6 py-12 md:p-24 rounded-[2.5rem] md:rounded-[5rem] bg-white/5 backdrop-blur-lg text-white shadow-luxury relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-wine opacity-20 blur-[150px] rounded-full group-hover:opacity-30 transition-all duration-1000" />
              <div className="relative z-10 text-center space-y-8 md:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                  <div className="p-8 rounded-[2rem] bg-white/10 border border-white/10 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="text-lg italic text-champagne-light mb-4 flex flex-col items-center md:flex-row md:items-center gap-3">
                      <Ban className="h-6 w-6" />
                      <span className="text-lg font-bold">Damages & Loss</span>
                    </div>
                    <p className="text-sm opacity-70 text-center md:text-left">
                      Indirect, incidental, or consequential damages; Loss of
                      profits, revenue, or business opportunities.
                    </p>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-white/10 border border-white/10 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="text-lg italic text-champagne-light mb-4 flex flex-col items-center md:flex-row md:items-center gap-3">
                      <AlertTriangle className="h-6 w-6" />
                      <span className="text-lg font-bold">External Factors</span>
                    </div>
                    <p className="text-sm opacity-70 text-center md:text-left">
                      Service failures by third-party partners; Any disputes
                      arising between users and venue owners or service
                      providers.
                    </p>
                  </div>
                </div>
                <div className="p-10 rounded-[2rem] bg-wine shadow-luxury">
                  <p className="text-xl md:text-3xl font-heading text-white italic drop-shadow-md">
                    "Our total liability, if any, shall not exceed the amount
                    directly paid to us for services (if applicable)."
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* 11 - 15 Grid Sections */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle
          title="Policy Framework"
          accent="Standard Operating Procedures"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {[
            {
              num: "",
              title: "Indemnification",
              icon: UserCheck,
              desc: "You agree to indemnify and hold harmless VenueForEvent.com and Homocation Asia Pvt. Ltd. from any claims, damages, losses, or liabilities arising out of: Your use of the Platform; Your violation of these Terms; Your breach of applicable laws; Any dispute between you and a third party.",
            },
            {
              num: "",
              title: "Privacy",
              icon: Lock,
              desc: "Use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, and safeguard personal information. By using the Platform, you consent to the collection and use of information in accordance with our Privacy Policy.",
            },
            {
              num: "",
              title: "Third-Party Links",
              icon: ExternalLink,
              desc: "The Platform may contain links to third-party websites. We are not responsible for: The content of third-party websites; Their privacy practices; Any transactions conducted on those platforms. Accessing third-party websites is at your own risk.",
            },
            {
              num: "",
              title: "Suspension & Termination",
              icon: Ban,
              desc: "We reserve the right to: Suspend or terminate access to the Platform; Remove listings or accounts; Restrict usage if we determine that a user or partner has violated these Terms or applicable laws.",
            },
            {
              num: "",
              title: "Modifications to Terms",
              icon: RefreshCw,
              desc: "We may update or modify these Terms at any time. Revised Terms will be posted on this page with an updated “Last Updated” date. Continued use of the Platform after such changes constitutes acceptance of the revised Terms.",
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
                <div className="p-8 lg:px-6 lg:py-10 xl:p-12 rounded-[3.5rem] md:rounded-[4rem] bg-ivory border border-champagne/20 hover:bg-white transition-all group relative overflow-hidden h-full flex flex-col items-center text-center">
                  <div className="absolute top-6 right-8 text-7xl font-black text-wine/5 select-none">
                    {v.num}
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-white text-wine flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-champagne/10">
                    <v.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-4 text-foreground leading-tight">
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

      {/* 16 & 17 Justice & Force Majeure */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        parallaxImage={parallax3.src}
        sideDecorations
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="p-8 lg:p-10 xl:p-16 rounded-[3.5rem] md:rounded-[5rem] bg-wine text-white shadow-2xl relative overflow-hidden h-full flex flex-col border border-white/10 items-center justify-center text-center sm:items-start sm:text-left sm:justify-start">
                <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Justice size={150} />
                </div>
                <h4 className="font-heading text-[13px] min-[360px]:text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold text-champagne mb-8 md:mb-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 md:gap-6 whitespace-nowrap">
                  <Justice className="h-8 w-8 md:h-10 md:w-10 shrink-0" />{" "}
                  Governing Law & Jurisdiction
                </h4>
                <p className="text-xl md:text-2xl italic text-white/90 leading-relaxed mb-8">
                  "These Terms shall be governed by and construed in accordance
                  with the laws of India."
                </p>
                <div className="p-8 rounded-[2rem] bg-white/10 border border-white/10 italic text-sm text-center sm:text-left">
                  Any disputes arising out of or related to these Terms shall be
                  subject to the exclusive jurisdiction of the courts located in{" "}
                  <span className="text-champagne font-bold">
                    New Delhi, India
                  </span>
                  .
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
              <div className="p-8 lg:p-10 xl:p-16 rounded-[3.5rem] md:rounded-[5rem] bg-ivory/80 backdrop-blur-md border border-wine/10 shadow-2xl relative overflow-hidden h-full flex flex-col items-center justify-center text-center sm:items-start sm:text-left sm:justify-start">
                <div className="absolute top-0 right-0 p-16 opacity-5">
                  <Zap size={150} />
                </div>
                <h4 className="font-heading text-[13px] min-[360px]:text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold text-wine mb-8 md:mb-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 md:gap-6 whitespace-nowrap">
                  <Zap className="h-8 w-8 md:h-10 md:w-10 shrink-0" /> Force
                  Majeure
                </h4>
                <p className="text-lg italic text-muted-foreground mb-12 text-center sm:text-left">
                  We shall not be held liable for failure or delay in
                  performance due to events beyond our reasonable control,
                  including but not limited to:
                </p>
                <div className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-4 w-full text-left">
                  {[
                    "Natural disasters;",
                    "Government restrictions;",
                    "Technical failures;",
                    "Acts of God;",
                    "Network disruptions.",
                  ].map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-3 text-sm font-bold text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 text-wine shrink-0" />{" "}
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 18. Contact Information Section */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
        sideDecorations
      >
        <OrnateTitle
          title="Contact Information"
          accent="Legal & Compliance"
          variant="dark"
        />
        <div className="max-w-4xl mx-auto">
          <Tilt>
            <div className="px-6 py-12 md:p-20 rounded-[3rem] md:rounded-[5rem] bg-white text-foreground text-center shadow-luxury relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-wine/5 rounded-full blur-[60px]" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-champagne/10 rounded-full blur-[60px]" />

              <div className="relative z-10 space-y-12">
                <p className="text-xl md:text-3xl font-heading italic text-muted-foreground">
                  For legal, compliance, or terms-related inquiries:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      title: "Company",
                      value: "Homocation Asia Pvt. Ltd.",
                      icon: Building,
                    },
                    {
                      title: "Registered Office",
                      value: "South West Delhi – 110071, India",
                      icon: MapPin,
                    },
                    {
                      title: "Email",
                      value: "legal@venueforevent.com",
                      icon: Mail,
                      isLink: true,
                    },
                    { title: "Phone", value: "+91-8800842084", icon: Phone },
                  ].map((contact, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-ivory text-wine flex items-center justify-center mb-4 shadow-inner">
                        <contact.icon className="h-6 w-6" />
                      </div>
                      <p className="text-xs uppercase tracking-widest text-wine/50 font-bold mb-2">
                        {contact.title}
                      </p>
                      {contact.isLink ? (
                        <a
                          href={`mailto:${contact.value}`}
                          className="text-sm font-bold hover:text-wine transition-colors underline underline-offset-4"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold">{contact.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>

          <div className="mt-20 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/60 text-lg italic max-w-2xl mx-auto"
            >
              "By using VenueForEvent.com, you acknowledge that you have read,
              understood, and agreed to these Terms & Conditions."
            </motion.p>
          </div>
        </div>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
