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
import { Mail, Gavel, CreditCard, Building2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import celebration from "@/assets/celebration.jpg";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function TermsAndConditionsPage() {
  return (
    <InfoPageLayout
      heroTitle="Terms & Conditions"
      heroSubtitle="VenueForEvent.com"
      heroImage={celebration.src}
      heroDescription="These Terms & Conditions govern your access to and use of VenueForEvent.com. By accessing, browsing, registering on, listing with, or otherwise using this Platform, you agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of the Platform immediately."
    >
      <SectionWrapper variant="ivory" withDecorations>
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="flex flex-wrap gap-6 mb-8 text-muted-foreground text-sm">
            <span>Effective Date: [Insert Date]</span>
            <span>Last Updated: [Insert Date]</span>
          </motion.div>
          <ContentBlock align="left">
            <p className="text-muted-foreground leading-relaxed">
              These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of VenueForEvent.com (&quot;Platform&quot;, &quot;Website&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;), owned and operated by Homocation Asia Pvt. Ltd., a company incorporated under the laws of India. By accessing, browsing, registering on, listing with, or otherwise using this Platform, you agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of the Platform immediately.
            </p>
          </ContentBlock>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="1. About the Platform" accent="What we are" />
        <p className="text-muted-foreground italic mb-6 max-w-3xl mx-auto">VenueForEvent.com is an online marketplace that enables users to: Discover and explore event venues • Connect with venue owners and service providers • Submit inquiries for weddings, social events, corporate events, conferences, and related services. The Platform acts solely as a facilitator between users and independent third-party venue owners and service providers. VenueForEvent.com does not own, operate, manage, or control the venues or services listed on the Platform unless explicitly stated.</p>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="2. Eligibility" accent="Who can use" />
        <p className="text-muted-foreground italic mb-6 max-w-3xl mx-auto">By using this Platform, you confirm that: You are at least 18 years of age • You are legally capable of entering into binding contracts • Any information you provide is accurate and complete. If you are using the Platform on behalf of an organization, you confirm that you are authorized to bind that organization to these Terms.</p>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="3. User Accounts" accent="Registration" />
        <p className="text-muted-foreground italic mb-6 max-w-3xl mx-auto">Certain features may require account registration. You agree to: Provide accurate, current, and complete information • Maintain the confidentiality of your login credentials • Accept responsibility for all activities conducted through your account. We reserve the right to suspend or terminate accounts if we suspect false information, misuse, or violation of these Terms.</p>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="4. Nature of Services" accent="Facilitation only" />
        <p className="text-muted-foreground italic mb-6 max-w-3xl mx-auto">VenueForEvent.com: Provides a digital platform for venue and service discovery • Facilitates communication between users and third parties • May forward inquiries submitted through the Platform to relevant partners. We are not a party to any agreement entered into between users and venue owners or service providers. All negotiations, contracts, payments, cancellations, and service terms are strictly between the user and the respective third party.</p>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="5. Listings & Information Accuracy" accent="Third-party content" />
        <p className="text-muted-foreground italic mb-6 max-w-3xl mx-auto">All venue and service information displayed on the Platform is provided by third-party partners. While we make reasonable efforts to maintain accurate and updated information, we do not guarantee: Availability • Pricing accuracy • Service quality • Completeness of descriptions • Accuracy of images. Users are responsible for independently verifying all information before making any booking or financial commitment.</p>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="p-10 rounded-[2.5rem] bg-dark-accent text-white shadow-luxury">
            <CreditCard className="h-10 w-10 text-champagne mb-6" />
            <SubTitle className="text-champagne">6. Booking & Payments</SubTitle>
            <p className="text-white/80 text-sm leading-relaxed italic">VenueForEvent.com does not process payments unless explicitly stated in writing. Any payment, deposit, refund, or cancellation policy is governed solely by the agreement between the user and the venue or service provider. We are not responsible for: Booking disputes • Refund claims • Service deficiencies • Event cancellations • Contractual disagreements.</p>
          </motion.div>
          <motion.div {...fadeUp} className="p-10 rounded-[2.5rem] glass-premium border border-champagne/20">
            <Building2 className="h-10 w-10 text-wine mb-6" />
            <SubTitle className="text-wine">7. Partner Responsibilities</SubTitle>
            <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">Venue owners and service providers listing on the Platform agree to: Provide accurate and lawful information • Maintain necessary licenses and approvals • Deliver services as represented • Communicate professionally with users. We reserve the right to remove or suspend listings that: Violate applicable laws • Contain misleading information • Damage the integrity of the Platform.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <OrnateTitle title="8. Intellectual Property" accent="Ownership" />
        <p className="text-muted-foreground italic mb-6 max-w-3xl mx-auto">All content on VenueForEvent.com, including but not limited to: Text • Design • Layout • Logos • Graphics • Software — is the property of Homocation Asia Pvt. Ltd. or its licensors and is protected by applicable intellectual property laws. No content may be copied, reproduced, modified, or distributed without prior written permission. By submitting content (including images and descriptions), partners grant us a non-exclusive license to use such content for listing and promotional purposes.</p>
      </SectionWrapper>

      <SectionWrapper variant="gradient" withDecorations>
        <OrnateTitle title="9. Prohibited Use" accent="What you must not do" />
        <p className="text-muted-foreground italic mb-6 max-w-3xl mx-auto">Users agree not to: Submit false or fraudulent inquiries • Post unlawful, defamatory, or misleading content • Attempt unauthorized access to the Platform • Use automated tools to scrape or extract data • Interfere with the functionality or security of the Platform. Violation may result in suspension, termination, and potential legal action.</p>
      </SectionWrapper>

      <SectionWrapper variant="ivory" withDecorations>
        <motion.div {...fadeUp} className="max-w-3xl mx-auto p-10 rounded-[2.5rem] bg-wine text-white shadow-luxury">
          <AlertCircle className="h-10 w-10 text-champagne mb-6" />
          <SubTitle className="text-champagne">10. Limitation of Liability</SubTitle>
          <p className="text-white/90 text-sm leading-relaxed italic mb-6">To the maximum extent permitted by law: VenueForEvent.com and Homocation Asia Pvt. Ltd. shall not be liable for: Indirect, incidental, or consequential damages • Loss of profits, revenue, or business opportunities • Service failures by third-party partners • Any disputes arising between users and venue owners or service providers. Our total liability, if any, shall not exceed the amount directly paid to us for services (if applicable).</p>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper variant="white" withDecorations>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <SubTitle className="text-wine">11. Indemnification</SubTitle>
            <p className="text-muted-foreground italic">You agree to indemnify and hold harmless VenueForEvent.com and Homocation Asia Pvt. Ltd. from any claims, damages, losses, or liabilities arising out of: Your use of the Platform • Your violation of these Terms • Your breach of applicable laws • Any dispute between you and a third party.</p>
          </div>
          <div>
            <SubTitle className="text-wine">12. Privacy</SubTitle>
            <p className="text-muted-foreground italic">Use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, and safeguard personal information. By using the Platform, you consent to the collection and use of information in accordance with our Privacy Policy.</p>
          </div>
          <div>
            <SubTitle className="text-wine">13. Third-Party Links</SubTitle>
            <p className="text-muted-foreground italic">The Platform may contain links to third-party websites. We are not responsible for: The content of third-party websites • Their privacy practices • Any transactions conducted on those platforms. Accessing third-party websites is at your own risk.</p>
          </div>
          <div>
            <SubTitle className="text-wine">14. Suspension & Termination</SubTitle>
            <p className="text-muted-foreground italic">We reserve the right to: Suspend or terminate access to the Platform • Remove listings or accounts • Restrict usage — if we determine that a user or partner has violated these Terms or applicable laws.</p>
          </div>
          <div>
            <SubTitle className="text-wine">15. Modifications to Terms</SubTitle>
            <p className="text-muted-foreground italic">We may update or modify these Terms at any time. Revised Terms will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of the Platform after such changes constitutes acceptance of the revised Terms.</p>
          </div>
          <div>
            <SubTitle className="text-wine flex items-center gap-2"><Gavel className="h-5 w-5" /> 16. Governing Law & Jurisdiction</SubTitle>
            <p className="text-muted-foreground italic">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.</p>
          </div>
          <div>
            <SubTitle className="text-wine">17. Force Majeure</SubTitle>
            <p className="text-muted-foreground italic">We shall not be held liable for failure or delay in performance due to events beyond our reasonable control, including but not limited to: Natural disasters • Government restrictions • Technical failures • Acts of God • Network disruptions.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark" withDecorations className="section-bg-dark">
        <OrnateTitle title="18. Contact Information" accent="Legal & compliance" variant="dark" />
        <p className="text-center text-white/80 italic mb-8">For legal, compliance, or terms-related inquiries:</p>
        <div className="max-w-md mx-auto text-center space-y-4">
          <p className="font-heading text-champagne font-bold">Homocation Asia Pvt. Ltd.</p>
          <p className="text-white/80 text-sm">Registered Office: South West Delhi – 110071, India</p>
          <a href="mailto:legal@venueforevent.com" className="inline-flex items-center gap-2 text-champagne font-bold hover:underline"><Mail className="h-5 w-5" /> legal@venueforevent.com</a>
          <p className="text-white/80 text-sm">Phone: +91-8800842084</p>
        </div>
        <p className="mt-12 text-center text-white/70 italic">By using VenueForEvent.com, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
      </SectionWrapper>
    </InfoPageLayout>
  );
}
