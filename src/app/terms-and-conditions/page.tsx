"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import { 
  SectionWrapper, 
  ContentBlock, 
  SimpleChecklist, 
  OrnateTitle,
  SubTitle
} from "@/components/common/InfoComponents";
import { 
  Scale, 
  UserCheck, 
  FileText, 
  ShieldAlert, 
  CreditCard, 
  Building2, 
  Lock, 
  Gavel, 
  HelpCircle, 
  Mail, 
  PhoneCall,
  History,
  AlertCircle
} from "lucide-react";
import celebration from "@/assets/celebration.jpg";

export default function TermsAndConditionsPage() {
  return (
    <InfoPageLayout 
      heroTitle="Terms & Conditions"
      heroSubtitle="Your Agreement with Us"
      heroImage={celebration.src}
      heroDescription="These Terms & Conditions govern your access to and use of VenueForEvent.com. By using our platform, you agree to be legally bound by these terms."
    >
      {/* Intro Section */}
      <SectionWrapper withDecorations variant="ivory">
        <div className="max-w-3xl mx-auto p-10 md:p-16 rounded-[4rem] bg-white border border-champagne/10 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-wine opacity-5 blur-3xl rounded-full" />
           <div className="flex items-center gap-4 mb-8 text-wine/40">
              <History className="h-5 w-5" />
              <span className="text-[10px] uppercase font-black tracking-widest">Effective Date: 10 March 2026</span>
           </div>
           <ContentBlock align="left" accent="Homocation Asia Pvt. Ltd.">
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                 These Terms & Conditions (“Terms”) govern your access to VenueForEvent.com (“Platform”), owned and operated by Homocation Asia Pvt. Ltd., incorporated under the laws of India.
              </p>
           </ContentBlock>
           <p className="mt-6 text-sm italic font-bold text-wine">If you do not agree with any part of these Terms, you must discontinue use of the Platform immediately.</p>
        </div>
      </SectionWrapper>

      {/* About & Eligibility */}
      <SectionWrapper variant="white">
         <div className="max-w-4xl mx-auto space-y-12">
            <OrnateTitle title="1. About & Eligibility" accent="User Conduct" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 group">
                  <div className="h-12 w-12 rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-inner group-hover:bg-wine group-hover:text-white transition-all">
                     <HelpCircle className="h-6 w-6" />
                  </div>
                  <SubTitle className="text-wine">1. The Platform</SubTitle>
                  <p className="text-xs text-muted-foreground mb-6 italic">VenueForEvent.com is an online marketplace connecting users with venue owners and service providers.</p>
                  <SimpleChecklist items={[
                    "Discover and explore event venues",
                    "Connect with venue owners/providers",
                    "Submit inquiries for weddings & events",
                    "Act solely as a facilitator",
                    "No control over 3rd party venues"
                  ]} />
               </div>
               <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 group">
                  <div className="h-12 w-12 rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-inner group-hover:bg-wine group-hover:text-white transition-all">
                     <UserCheck className="h-6 w-6" />
                  </div>
                  <SubTitle className="text-wine">2. Eligibility</SubTitle>
                  <p className="text-xs text-muted-foreground mb-6 italic">By using this Platform, you confirm your legal capacity to enter contracts.</p>
                  <SimpleChecklist items={[
                    "At least 18 years of age",
                    "Legally capable of binding contracts",
                    "Accurate & complete info",
                    "Authorized representer (if org)"
                  ]} />
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Services & Listings */}
      <SectionWrapper variant="gradient" withDecorations>
         <div className="max-w-4xl mx-auto space-y-12">
            <OrnateTitle title="4. Services & Information" accent="Digital Facilitation" />
            
            <div className="p-10 md:p-16 rounded-[4rem] bg-white border border-wine/10 shadow-2xl space-y-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <SubTitle className="text-wine">Nature of Services</SubTitle>
                     <p className="text-xs text-muted-foreground italic mb-4">We provide a digital platform but are not party to agreements:</p>
                     <SimpleChecklist items={[
                        "Digital venue/service discovery",
                        "Facilitated 3rd party communication",
                        "Inquiry forwarding to partners",
                        "Not party to user-venue contracts",
                        "Negotiations are strictly private"
                     ]} />
                  </div>
                  <div className="space-y-6">
                     <SubTitle className="text-wine">Accruacy & Listing</SubTitle>
                     <p className="text-xs text-muted-foreground italic mb-4">Information is provided by partners. We do not guarantee:</p>
                     <SimpleChecklist items={[
                        "Pricing accuracy & availability",
                        "Service quality or descriptions",
                        "Completeness of images",
                        "Independent verification required"
                     ]} />
                  </div>
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Booking & Partners */}
      <SectionWrapper variant="white">
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3.5rem] bg-dark-accent text-white shadow-2xl group">
               <CreditCard className="h-10 w-10 text-champagne mb-6 group-hover:scale-110 transition-transform" />
               <SubTitle className="text-champagne">6. Booking & Payments</SubTitle>
               <p className="text-sm text-white/50 leading-relaxed italic">We do not process payments unless stated. Refunds, deposits, and cancellations are governed by your agreement with the venue provider.</p>
               <SimpleChecklist items={["No refund liability", "No booking dispute role"]} />
            </div>
            <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 group">
               <Building2 className="h-10 w-10 text-wine mb-6 group-hover:scale-110 transition-transform" />
               <SubTitle className="text-wine">7. Partner Duty</SubTitle>
               <p className="text-sm text-muted-foreground leading-relaxed italic">Partners must provide lawful info and maintain licenses. We reserve the right to remove misleading or unlawful listings immediately.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* IP & Use */}
      <SectionWrapper variant="ivory" withDecorations>
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <SubTitle className="text-wine">8. Intellectual Property</SubTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">All content (text, design, logos) is the property of Homocation Asia Pvt. Ltd. and protected by Indian laws. No reproduction without prior written permission.</p>
               </div>
               <div className="space-y-6">
                  <SubTitle className="text-wine">9. Prohibited Use</SubTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">Submission of false inquiries, scraping data, or interfering with security is strictly prohibited and subject to legal action.</p>
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Liability */}
      <SectionWrapper variant="white">
         <div className="max-w-4xl mx-auto p-12 rounded-[4rem] bg-wine text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 blur-3xl rounded-full" />
            <div className="flex items-center gap-4 mb-6">
               <AlertCircle className="h-8 w-8 text-champagne" />
               <SubTitle className="text-champagne m-0">10. Limitation of Liability</SubTitle>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic mb-8">To the maximum extent permitted by law, Homocation Asia and VenueForEvent.com shall not be liable for indirect damages, loss of profits, or 3rd party service failures. Our liability is capped at directly paid service amounts.</p>
            <div className="flex flex-wrap gap-4">
               {["No indirect damages", "No profit loss claims", "Limited total liability"].map(l => (
                  <span key={l} className="px-4 py-2 rounded-full bg-white/10 text-[10px] uppercase font-bold tracking-widest text-champagne/80"># {l}</span>
               ))}
            </div>
         </div>
      </SectionWrapper>

      {/* Governing Law */}
      <SectionWrapper variant="gradient" withDecorations>
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
               <div className="space-y-4">
                  <Gavel className="h-8 w-8 text-wine mx-auto md:mx-0" />
                  <SubTitle className="text-wine">16. Governing Law</SubTitle>
                  <p className="text-sm text-muted-foreground italic">Governed by the laws of India. Jurisdiction: New Delhi, India.</p>
               </div>
               <div className="space-y-4">
                  <Scale className="h-8 w-8 text-wine mx-auto md:mx-0" />
                  <SubTitle className="text-wine">11. Indemnification</SubTitle>
                  <p className="text-sm text-muted-foreground italic">You agree to hold us harmless from claims arising from your use or violation of terms.</p>
               </div>
            </div>

            <div className="p-10 rounded-[3.5rem] bg-white border border-wine/5 shadow-sm text-center">
               <SubTitle className="text-wine">17. Force Majeure</SubTitle>
               <p className="text-xs text-muted-foreground italic leading-relaxed">We are not liable for delays due to natural disasters, government restrictions, or technical failures beyond our control.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* Final Section */}
      <SectionWrapper variant="white">
         <div className="max-w-3xl mx-auto text-center space-y-12">
            <OrnateTitle title="Legal Contact" accent="Terms & Compliance Inquiries" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 rounded-[3rem] bg-ivory border border-champagne/10 group hover:bg-wine hover:text-white transition-all cursor-pointer">
                  <Mail className="h-8 w-8 text-wine mx-auto mb-4 group-hover:text-white transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Legal Team</p>
                  <p className="font-bold">legal@venueforevent.com</p>
               </div>
               <div className="p-8 rounded-[3rem] bg-ivory border border-champagne/10 group hover:bg-wine hover:text-white transition-all cursor-pointer">
                  <PhoneCall className="h-8 w-8 text-wine mx-auto mb-4 group-hover:text-white transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Business Support</p>
                  <p className="font-bold">+91-8800842084</p>
               </div>
            </div>
            
            <div className="space-y-4 pt-12">
               <h4 className="font-heading text-4xl font-black text-wine uppercase tracking-[0.3em] opacity-10">Agreements for Growth.</h4>
               <p className="font-accent text-2xl text-wine opacity-60">VenueForEvent.com</p>
               <p className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground/30 italic">By using our platform, you acknowledge reading and agreeing to these terms.</p>
            </div>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
