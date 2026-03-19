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
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  Mail,
  Globe,
  Users,
  Search,
  Zap,
  Share2,
  Clock,
  ExternalLink,
  Smartphone,
  CalendarCheck,
  RefreshCcw,
  Scale,
  History,
  FileText,
} from "lucide-react";
import heroVenue from "@/assets/hero-venue.jpg";
import socialImg from "@/assets/palace-wedding.jpg";
import corporateImg from "@/assets/banquet-hall.jpg";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <InfoPageLayout
      heroTitle="Privacy Policy"
      heroSubtitle="VenueForEvent.com"
      heroImage={heroVenue.src}
      heroDescription="Protecting your information is our priority. This policy outlines how we handle your data with transparency and care."
      hideWave={true}
    >
      {/* Introduction Section */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="pt-12 md:pt-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <ContentBlock align="center" width="full" accent="Our Commitment to Privacy">
          <p className="text-3xl leading-relaxed text-wine font-heading mb-10 italic lg:max-w-5xl xl:max-w-6xl mx-auto">
            Your trust is the foundation of our platform. At VenueForEvent.com, we are committed to being transparent about how we collect, use, and safeguard your personal information.
          </p>
          <div className="prose prose-xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-none mx-auto text-center italic space-y-8">
            <p>
              This Privacy Policy explains how VenueForEvent.com (&quot;Platform&quot;, &quot;Website&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), owned and operated by{" "}
              <span className="text-wine font-bold">Homocation Asia Private Limited</span>, collects, uses, discloses, and protects your information when you access our services.
            </p>
            <p>
              By using the Platform, you agree to the practices described in this policy. We ensure that your data is handled in compliance with applicable laws while providing a seamless venue discovery experience.
            </p>
          </div>
        </ContentBlock>

        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <div className="bg-white/60 backdrop-blur-xl px-10 py-6 rounded-[2.5rem] border border-white/40 shadow-luxury flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-wine text-white flex items-center justify-center shadow-lg">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Effective Date</p>
              <p className="text-wine font-bold">March 20, 2024</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-xl px-10 py-6 rounded-[2.5rem] border border-white/40 shadow-luxury flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-dark-accent text-white flex items-center justify-center shadow-lg">
              <RefreshCcw className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Last Updated</p>
              <p className="text-dark-accent font-bold">March 19, 2026</p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <HighlightedQuote>
            Transparency is not just a policy — it is a value that guides every interaction on our celebration marketplace.
          </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Information We Collect */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Information We Collect" accent="Data Transparency" />
        <div className="mb-24 flex flex-wrap justify-center gap-8 items-stretch">
          {[
            {
              title: "Information You Provide",
              desc: "Collected when you submit inquiries, register accounts, or list services on our platform.",
              icon: UserCheck,
            },
            { 
              title: "Automatic Collection", 
              desc: "Device info, IP address, and browser analytics gathered during your visit.", 
              icon: Database 
            },
            {
              title: "Cookies & Tracking",
              desc: "Used to remember preferences, analyze traffic, and improve functionality.",
              icon: Search,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative w-full sm:w-[calc(50%-1rem)] xl:w-[calc(33%-1.5rem)] min-w-[300px] flex"
            >
              <Tilt className="h-full w-full">
                <div className="relative p-10 rounded-[3rem] bg-white border border-champagne/10 h-full shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <div className="relative z-10 flex flex-col items-center text-center text-foreground h-full">
                    <div className="h-20 w-20 rounded-full bg-white text-wine flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft border border-champagne/10 shrink-0">
                      <item.icon className="h-10 w-10" />
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <h4 className="font-heading text-lg sm:text-xl lg:text-lg font-bold text-foreground group-hover:text-wine transition-colors duration-300 px-2 leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed italic opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <Tilt className="h-full">
              <div className="bg-ivory/50 p-8 md:p-12 rounded-[3.5rem] md:rounded-[4rem] border border-champagne/20 shadow-inner relative h-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="absolute top-10 right-10 text-champagne/10 hidden md:block">
                  <UserCheck size={100} />
                </div>
                <SubTitle className="mb-6 relative z-10">Direct Information</SubTitle>
                <p className="text-lg leading-relaxed text-muted-foreground relative z-10 italic mb-8">
                  When you submit an inquiry, register an account, or contact us, we collect:
                </p>
                <SimpleChecklist
                  items={[
                    "Full name and contact details",
                    "Email address and phone number",
                    "Event details (date, budget, location)",
                    "Billing information (if applicable)",
                    "Company or Business name",
                    "Voluntary messages and feedback",
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
              <div className="bg-wine/5 p-8 md:p-12 rounded-[3.5rem] md:rounded-[4rem] border border-wine/10 shadow-inner relative h-full flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="absolute top-10 right-10 text-wine/10 hidden md:block">
                  <Zap size={100} />
                </div>
                <SubTitle className="mb-6 relative z-10">Technical Data</SubTitle>
                <p className="text-lg leading-relaxed text-muted-foreground relative z-10 italic mb-8">
                  We collect technical data to improve user experience and maintain platform security:
                </p>
                <SimpleChecklist
                  items={[
                    "IP address and Geolocation",
                    "Browser and OS information",
                    "Device type and specifications",
                    "Pages visited and Interaction time",
                    "Referring URLs and Click data",
                    "Cookies and pixel tags",
                  ]}
                />
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* How We Use */}
      <SectionWrapper
        variant="ivory"
        withDecorations
        sideDecorations
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <OrnateTitle title="How We Use Your Data" accent="Purpose & Growth" />
        <div className="prose prose-2xl text-muted-foreground max-w-5xl mx-auto text-center mb-20 italic">
          <p>
            Your information is used to facilitate seamless connections and enhance the overall venue discovery journey.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {[
            {
              title: "Service Fulfillment",
              desc: "Connecting you with your chosen venues.",
              icon: Zap,
            },
            {
              title: "Strategic Communication",
              desc: "Sending updates and responding to inquiries.",
              icon: Bell,
            },
            {
              title: "Account Security",
              desc: "Ensuring safe and personalized access.",
              icon: ShieldCheck,
            },
            {
              title: "Experience Analytics",
              desc: "Improving platform performance and UI.",
              icon: Eye,
            },
            {
              title: "Fraud Mitigation",
              desc: "Protecting users from misuse or fraud.",
              icon: Lock,
            },
            {
              title: "Legal Adherence",
              desc: "Complying with statutory requirements.",
              icon: Scale,
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

        <div className="mt-32 max-w-5xl mx-auto">
          <Tilt>
            <div className="px-6 py-12 md:p-24 rounded-[3rem] md:rounded-[5rem] bg-dark-accent text-white shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-wine opacity-20 blur-[150px] rounded-full group-hover:opacity-30 transition-all duration-1000" />
              <div className="relative z-10 text-center space-y-8">
                <p className="text-xl md:text-3xl font-heading text-champagne-gold italic">
                  An uncompromising stance on data integrity.
                </p>
                <h4 className="font-accent text-3xl md:text-6xl text-white drop-shadow-luxury leading-tight">
                  We do not sell your personal information to third parties.
                </h4>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionWrapper>

      {/* Sharing & Disclosure */}
      <SectionWrapper
        variant="white"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Information Sharing" accent="Accountability" />
        <AlternatingGrid
          items={[
            {
              title: "With Venue Partners",
              icon: Users,
              text: (
                <div className="space-y-6">
                  <p className="text-2xl italic leading-relaxed">
                    Facilitating direct communication for your events.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    If you submit an inquiry, your contact details and event requirements are shared with the specific venues or service providers you've expressed interest in. This allows them to provide accurate quotes and personalized assistance.
                  </p>
                  <div className="pt-6 border-t border-wine/10 text-dark-accent font-bold italic">
                    Your details are only shared with the partners you choose to engage with.
                  </div>
                </div>
              ),
              image: socialImg.src,
            },
            {
              title: "Trusted Service Providers",
              icon: Share2,
              text: (
                <div className="space-y-6">
                  <p className="text-2xl italic leading-relaxed">
                    Collaborating with specialized organizations.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    We engage third-party providers for hosting, analytics, technical support, and communication services. These partners are legally bound to uphold the confidentiality and security of any data they process on our behalf.
                  </p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Cloud Infrastructure Partners",
                      "Analytics & Insight Tools",
                      "Customer Support Systems",
                      "Payment Secure Gateways",
                    ]}
                  />
                </div>
              ),
              image: corporateImg.src,
            },
          ]}
        />
        
        <div className="mt-24 p-10 rounded-[3rem] bg-wine/5 border border-wine/10 text-center max-w-4xl mx-auto">
          <div className="h-14 w-14 mx-auto rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-sm">
            <Scale size={28} />
          </div>
          <h4 className="font-heading text-2xl font-bold text-wine mb-4">Legal Obligations</h4>
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            We may disclose information if required by applicable laws, court orders, or government authorities, or when we believe disclosure is necessary to protect our legal rights, property, or safety.
          </p>
        </div>
      </SectionWrapper>

      {/* Security & Retention */}
      <SectionWrapper
        variant="gradient"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <OrnateTitle title="Security & Retention" accent="Data Sovereignty" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-stretch">
          <HighlightCard
            icon={Lock}
            title="Data Security"
            content="We implement robust technical and organizational measures to safeguard your data. While no digital platform is entirely impenetrable, we follow industry best practices to prevent unauthorized access or loss."
          />
          <HighlightCard
            icon={History}
            title="Data Retention"
            content="We retain your personal information only for as long as necessary to fulfill service goals, comply with legal mandates, or resolve disputes. Following this, data is securely anonymized or permanently erased."
          />
        </div>
      </SectionWrapper>

      {/* Your Rights */}
      <SectionWrapper
        variant="white"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        sideDecorations
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 h-full flex flex-col"
          >
            <ContentBlock
              title="Your Rights"
              accent="Empowerment"
              width="full"
              align="mobile-center"
              className="flex-1 flex flex-col"
            >
              <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground mb-12 italic text-center lg:text-left">
                We believe in giving you complete control over your personal data. You have the right to manage your information at any time.
              </p>
              <SubTitle className="text-wine text-xl md:text-3xl text-center lg:text-left">
                Your Control Includes:
              </SubTitle>
              <SimpleChecklist
                items={[
                  "Accessing your personal data history",
                  "Requesting correction of inaccuracies",
                  "Requesting complete data erasure",
                  "Withdrawing previously given consent",
                  "Opting out of marketing updates",
                ]}
              />
              <p className="mt-12 text-base md:text-xl text-muted-foreground italic font-medium border-l-8 border-wine/20 pl-8 text-center lg:text-left">
                To exercise any of these rights, please contact our dedicated privacy unit using the information provided below.
              </p>
            </ContentBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Tilt className="w-full h-full">
              <div className="bg-wine/5 p-12 rounded-[4rem] border border-wine/10 relative overflow-hidden group h-full flex flex-col justify-center">
                <div className="absolute -top-10 -right-10 text-wine/5 group-hover:text-wine/10 transition-colors">
                  <ShieldCheck size={200} />
                </div>
                <div className="relative z-10 space-y-6 text-center lg:text-left">
                  <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-wine shadow-sm mx-auto lg:mx-0">
                    <UserCheck size={32} />
                  </div>
                  <h4 className="text-3xl font-heading text-wine font-bold">Privacy First Strategy</h4>
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    "Our architecture is designed with privacy-by-default, ensuring that your data remains your own throughout your journey with us."
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* General Policies */}
      <SectionWrapper
        variant="ivory"
        className="py-12 md:py-24 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        sideDecorations
      >
        <OrnateTitle title="General Policies" accent="Standards" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {[
            {
              title: "Third-Party Interaction",
              icon: ExternalLink,
              desc: "Links to external websites are provided for convenience. We do not govern their privacy standards or content.",
            },
            {
              title: "Children's Guard",
              icon: Smartphone,
              desc: "VenueForEvent.com is not intended for users under 18. We do not knowingly collect data from minors.",
            },
            {
              title: "Cross-Border Transfers",
              icon: Globe,
              desc: "Data may be processed internationally. Your use of this platform implies consent to these data movements.",
            },
            {
              title: "Evolution & Updates",
              icon: Bell,
              desc: "We may refine this policy as our platform grows. Updates will be visibly posted on this page.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-full p-8 rounded-[2.5rem] bg-white border border-champagne/20 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left group hover:shadow-xl transition-all">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-ivory text-wine flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-colors shadow-sm">
                  <item.icon size={24} />
                </div>
                <div>
                  <h5 className="font-heading text-xl font-bold mb-2">{item.title}</h5>
                  <p className="text-muted-foreground text-sm italic leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper
        variant="dark"
        className="py-16 md:py-32 pb-20 md:pb-40 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        withDecorations
        sideDecorations
      >
        <OrnateTitle title="Contact Us" accent="Dedicated Support" variant="dark" />
        <ContentBlock align="center" width="full">
          <p className="text-xl text-white/70 italic mb-16 max-w-3xl mx-auto">
            If you have any questions concerning this Privacy Policy or your personal data, our specialized privacy team is available to assist you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
            <Tilt className="h-full">
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 text-left space-y-8 h-full">
                <h4 className="font-heading text-2xl font-bold text-champagne">Corporate Identity</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-champagne shrink-0">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Homocation Asia Pvt. Ltd.</p>
                      <p className="text-white/50 text-sm">Parent Company & Operator</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-champagne shrink-0">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">South West Delhi – 110071</p>
                      <p className="text-white/50 text-sm">Registered Office, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>

            <Tilt className="h-full">
              <div className="p-10 rounded-[3rem] bg-wine/20 border border-wine/20 text-left space-y-8 h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-heading text-2xl font-bold text-white mb-8">Communication Channels</h4>
                  <a 
                    href="mailto:privacy@venueforevent.com" 
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-6 px-4 py-8 sm:p-8 rounded-[2.5rem] bg-white/5 hover:bg-white/10 transition-all border border-white/10 group mb-6 shadow-luxury w-full"
                  >
                    <div className="h-16 w-16 shrink-0 rounded-2xl bg-white text-wine flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                      <Mail size={32} />
                    </div>
                    <div className="text-center sm:text-left overflow-hidden w-full">
                      <p className="text-xs text-champagne-gold font-bold uppercase tracking-widest mb-2">Email Privacy Desk</p>
                      <p className="text-white font-heading font-bold text-[13px] min-[360px]:text-sm min-[390px]:text-base md:text-lg whitespace-nowrap">privacy@venueforevent.com</p>
                    </div>
                  </a>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-white/40 text-sm italic">Standard response time: 24-48 business hours.</p>
                </div>
              </div>
            </Tilt>
          </div>

          <p className="mt-24 text-center text-white/30 text-sm italic max-w-2xl mx-auto border-t border-white/5 pt-12">
            By using VenueForEvent.com, you acknowledge that you have read and understood this Privacy Policy. We hold the right to adjust this policy as required to stay compliant with global standards.
          </p>
        </ContentBlock>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
