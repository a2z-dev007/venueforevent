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
import { Mail, Phone, Lock, UserCheck, Database, Eye, Bell } from "lucide-react";
import { motion } from "framer-motion";
import heroVenue from "@/assets/hero-venue.jpg";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function PrivacyPolicyPage() {
  return (
    <InfoPageLayout
      heroTitle="Privacy Policy"
      heroSubtitle="VenueForEvent.com"
      heroImage={heroVenue.src}
      heroDescription="This Privacy Policy explains how VenueForEvent.com collects, uses, discloses, and protects your information when you access or use our Platform. By using the Platform, you agree to the practices described in this Privacy Policy."
    >
      <SectionWrapper variant="ivory" withDecorations>
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="flex flex-wrap gap-6 mb-8 text-muted-foreground text-sm">
            <span>Effective Date: [Insert Date]</span>
            <span>Last Updated: [Insert Date]</span>
          </motion.div>
          <ContentBlock align="left">
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains how VenueForEvent.com (&quot;Platform&quot;, &quot;Website&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), owned and operated by Homocation Asia Pvt. Ltd., collects, uses, discloses, and protects your information when you access or use our Platform. By using the Platform, you agree to the practices described in this Privacy Policy.
            </p>
          </ContentBlock>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="1. Information We Collect" accent="Transparency" />
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <SubTitle className="text-wine flex items-center gap-2"><UserCheck className="h-5 w-5" /> 1.1 Information You Provide</SubTitle>
            <p className="text-muted-foreground italic mb-4">When you: Submit an inquiry • Register an account • List a venue or service • Contact us • Subscribe to updates — we may collect:</p>
            <SimpleChecklist columns={2} items={["Full name", "Email address", "Phone number", "Company/Business name", "Event details (date, budget, location, requirements)", "Billing information (if applicable)", "Any other information you voluntarily provide"]} />
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <SubTitle className="text-wine flex items-center gap-2"><Database className="h-5 w-5" /> 1.2 Automatically Collected Information</SubTitle>
            <p className="text-muted-foreground italic mb-4">When you access the Platform, we may automatically collect: IP address • Browser type • Device information • Operating system • Pages visited • Date and time of visit • Referring URLs. This information helps us improve user experience and maintain security.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-[2.5rem] glass-premium border border-champagne/20">
            <SubTitle className="text-wine flex items-center gap-2"><Eye className="h-5 w-5" /> 1.3 Cookies & Tracking Technologies</SubTitle>
            <p className="text-muted-foreground leading-relaxed">We may use cookies and similar technologies to: Remember user preferences • Analyze website traffic • Improve platform functionality. You may disable cookies through your browser settings; however, some features of the Platform may not function properly.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="2. How We Use Your Information" accent="Purpose" />
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground italic mb-8">We use collected information to: Respond to inquiries and connect users with venues/service providers • Manage user accounts • Improve platform performance and user experience • Communicate important updates • Prevent fraud or misuse • Comply with legal obligations.</p>
          <p className="font-heading text-wine font-bold text-center">We do not sell your personal information to third parties.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="3. Information Sharing & Disclosure" accent="When we share" />
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-8 rounded-[2.5rem] bg-white border border-champagne/20">
            <p className="font-bold text-wine mb-2">3.1 With Venue Owners & Service Providers</p>
            <p className="text-sm text-muted-foreground italic">If you submit an inquiry, your details may be shared with relevant venues or service providers so they can contact you directly.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-white border border-champagne/20">
            <p className="font-bold text-wine mb-2">3.2 Service Providers</p>
            <p className="text-sm text-muted-foreground italic">We may engage trusted third-party service providers for: Website hosting • Analytics • Technical support • Communication services. These parties are obligated to maintain confidentiality.</p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-white border border-champagne/20">
            <p className="font-bold text-wine mb-2">3.3 Legal Requirements</p>
            <p className="text-sm text-muted-foreground italic">We may disclose information if required by: Applicable laws • Court orders • Government authorities — or to protect our legal rights.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="p-10 rounded-[2.5rem] bg-dark-accent text-white shadow-luxury">
            <Lock className="h-10 w-10 text-champagne mb-6" />
            <SubTitle className="text-champagne">4. Data Security</SubTitle>
            <p className="text-white/80 text-sm leading-relaxed italic">We implement reasonable technical and organizational measures to safeguard your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of online transmission or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[2.5rem] glass-premium border border-champagne/20">
            <Database className="h-10 w-10 text-wine mb-6" />
            <SubTitle className="text-wine">5. Data Retention</SubTitle>
            <p className="text-muted-foreground text-sm leading-relaxed italic">We retain personal information only for as long as necessary to: Fulfill the purposes outlined in this Policy • Comply with legal obligations • Resolve disputes • Enforce agreements. Once information is no longer required, it may be securely deleted or anonymized.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="6. Your Rights" accent="Your control" />
        <p className="text-center text-muted-foreground italic mb-8 max-w-3xl mx-auto">Depending on applicable law, you may have the right to: Access your personal information • Request correction of inaccurate data • Request deletion of your data • Withdraw consent (where applicable) • Opt out of marketing communications. To exercise your rights, please contact us using the details below.</p>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <SubTitle className="text-wine">7. Third-Party Links</SubTitle>
            <p className="text-muted-foreground italic">Our Platform may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review their privacy policies before sharing any information.</p>
          </div>
          <div>
            <SubTitle className="text-wine">8. Children&apos;s Privacy</SubTitle>
            <p className="text-muted-foreground italic">VenueForEvent.com is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that such information has been collected, we will take appropriate steps to delete it.</p>
          </div>
          <div>
            <SubTitle className="text-wine">9. International Data Transfers</SubTitle>
            <p className="text-muted-foreground italic">If you access the Platform from outside India, your information may be transferred to and processed in India or other jurisdictions where our service providers operate. By using the Platform, you consent to such transfers.</p>
          </div>
          <div>
            <SubTitle className="text-wine flex items-center gap-2"><Bell className="h-5 w-5" /> 10. Changes to This Privacy Policy</SubTitle>
            <p className="text-muted-foreground italic">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of the Platform after changes constitutes acceptance of the revised Policy.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark" withDecorations className="section-bg-dark">
        <OrnateTitle title="11. Contact Us" accent="Privacy & data concerns" variant="dark" />
        <p className="text-center text-white/80 italic mb-8">If you have questions regarding this Privacy Policy or your personal data, please contact:</p>
        <div className="max-w-md mx-auto text-center space-y-4">
          <p className="font-heading text-champagne font-bold">Homocation Asia Pvt. Ltd.</p>
          <p className="text-white/80 text-sm">Registered Office: South West Delhi – 110071, India</p>
          <a href="mailto:privacy@venueforevent.com" className="inline-flex items-center gap-2 text-champagne font-bold hover:underline"><Mail className="h-5 w-5" /> privacy@venueforevent.com</a>
          <p className="text-white/80 text-sm">Phone: +91-XXXXXXXXXX</p>
        </div>
        <p className="mt-12 text-center text-white/70 italic">By using VenueForEvent.com, you acknowledge that you have read and understood this Privacy Policy.</p>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
