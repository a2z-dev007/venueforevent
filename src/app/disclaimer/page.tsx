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
  AlertTriangle, 
  ShieldAlert, 
  FileText, 
  Globe, 
  UserX, 
  SearchX, 
  Link2, 
  ZapOff, 
  History, 
  Mail, 
  PhoneCall,
  Info
} from "lucide-react";
import heroVenue from "@/assets/hero-venue.jpg";

export default function DisclaimerPage() {
  return (
    <InfoPageLayout 
      heroTitle="Disclaimer"
      heroSubtitle="Legal Notice & Disclosures"
      heroImage={heroVenue.src}
      heroDescription="This Disclaimer governs your use of VenueForEvent.com. By accessing our platform, you accept this disclaimer in full."
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
                 This Disclaimer governs your use of VenueForEvent.com (“Platform”), owned and operated by Homocation Asia Pvt. Ltd. By using our platform, you accept this Disclaimer in full.
              </p>
           </ContentBlock>
           <p className="mt-6 text-sm italic font-bold text-wine">If you do not agree, please discontinue use of the Website immediately.</p>
        </div>
      </SectionWrapper>

      {/* Platform Role & Advice */}
      <SectionWrapper variant="white">
         <div className="max-w-4xl mx-auto space-y-12">
            <OrnateTitle title="1. Platform Role & Nature" accent="Digital Facilitation" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 group">
                  <div className="h-12 w-12 rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-inner group-hover:bg-wine group-hover:text-white transition-all">
                     <Globe className="h-6 w-6" />
                  </div>
                  <SubTitle className="text-wine">1. Platform Role</SubTitle>
                  <p className="text-xs text-muted-foreground mb-6 italic">VenueForEvent.com is an online marketplace connecting users with independent providers.</p>
                  <SimpleChecklist items={[
                    "Acting solely as a facilitator",
                    "No ownership of venues",
                    "No management of listed spaces",
                    "No direct event services provided",
                    "Transactions occur between 3rd parties"
                  ]} />
               </div>
               <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 group">
                  <div className="h-12 w-12 rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-inner group-hover:bg-wine group-hover:text-white transition-all">
                     <UserX className="h-6 w-6" />
                  </div>
                  <SubTitle className="text-wine">2. No Professional Advice</SubTitle>
                  <p className="text-xs text-muted-foreground mb-6 italic">Information provided is for general informational purposes only.</p>
                  <SimpleChecklist items={[
                    "No legal or financial advice",
                    "No planning consultancy",
                    "No professional guarantees",
                    "Independent verification required",
                    "Seek professional advice before decisions"
                  ]} />
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Accuracy & Warranties */}
      <SectionWrapper variant="gradient" withDecorations>
         <div className="max-w-4xl mx-auto space-y-12">
            <OrnateTitle title="3. Accuracy & Warranties" accent="Information Standards" />
            
            <div className="p-10 md:p-16 rounded-[4rem] bg-white border border-wine/10 shadow-2xl space-y-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <SubTitle className="text-wine">Accuracy of Info</SubTitle>
                     <p className="text-xs text-muted-foreground italic mb-4">Venue details are provided by third-party partners. We do not guarantee:</p>
                     <SimpleChecklist items={[
                        "Completeness or Accuracy",
                        "Reliability or Availability",
                        "Pricing validity & Descriptions",
                        "Finalizing requires independent confirmation"
                     ]} />
                  </div>
                  <div className="space-y-6">
                     <SubTitle className="text-wine">No Warranties</SubTitle>
                     <p className="text-xs text-muted-foreground italic mb-4">Platform is provided on an “as-is” basis without express or implied warranties:</p>
                     <SimpleChecklist items={[
                        "Website availability or uptime",
                        "Uninterrupted operation",
                        "Accuracy of platform content",
                        "Security of data transmission",
                        "Suitability for particular purpose"
                     ]} />
                  </div>
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Liability Limitation */}
      <SectionWrapper variant="white">
         <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-16 rounded-[4rem] bg-wine text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 blur-3xl rounded-full" />
               <div className="flex items-center gap-4 mb-6">
                  <ShieldAlert className="h-10 w-10 text-champagne" />
                  <SubTitle className="text-champagne m-0">5. Limitation of Liability</SubTitle>
               </div>
               <p className="text-sm text-white/70 leading-relaxed italic mb-8">To the maximum extent permitted by law, Homocation Asia and VenueForEvent.com shall not be liable for service failures by venues, booking disputes, or injury occurring at events. Users engage with vendors at their own risk.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "No liability for vendor failures",
                    "No liability for booking disputes",
                    "No liability for event injuries",
                    "No liability for profit loss"
                  ].map(item => (
                    <div key={item} className="flex gap-4 items-center group/item">
                       <AlertTriangle className="h-4 w-4 text-champagne group-hover/item:scale-110 transition-transform" />
                       <p className="text-xs font-bold text-white/80">{item}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* External Factors */}
      <SectionWrapper variant="ivory" withDecorations>
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3.5rem] bg-white border border-champagne/10 group">
               <Link2 className="h-8 w-8 text-wine mb-6 group-hover:scale-110 transition-transform" />
               <SubTitle className="text-wine">6. Third-Party Links</SubTitle>
               <p className="text-xs text-muted-foreground leading-relaxed italic">We do not control or endorse third-party content, privacy practices, or transactions. Access is at your own discretion and risk.</p>
            </div>
            <div className="p-10 rounded-[3.5rem] bg-white border border-champagne/10 group">
               <ZapOff className="h-8 w-8 text-wine mb-6 group-hover:scale-110 transition-transform" />
               <SubTitle className="text-wine">7. Force Majeure</SubTitle>
               <p className="text-xs text-muted-foreground leading-relaxed italic">No responsibility for disruptions caused by natural disasters, government regulations, or acts of God beyond our control.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper variant="white">
         <div className="max-w-3xl mx-auto p-12 rounded-[4rem] bg-ivory border border-champagne/10 text-center space-y-4">
            <SubTitle className="text-wine">8. Testimonials & Reviews</SubTitle>
            <p className="text-sm text-muted-foreground italic leading-relaxed">Reviews reflect individual experiences. We do not guarantee similar results or experiences for all users. Perspectives are subjective.</p>
         </div>
      </SectionWrapper>

      {/* Final Section */}
      <SectionWrapper variant="gradient" withDecorations>
         <div className="max-w-3xl mx-auto text-center space-y-12">
            <OrnateTitle title="Legal Inquiries" accent="Disclaimer Questions" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 rounded-[3rem] bg-white shadow-lg border border-wine/5 group hover:bg-wine hover:text-white transition-all cursor-pointer">
                  <Mail className="h-8 w-8 text-wine mx-auto mb-4 group-hover:text-white transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Legal Team</p>
                  <p className="font-bold">legal@venueforevent.com</p>
               </div>
               <div className="p-8 rounded-[3rem] bg-white shadow-lg border border-wine/5 group hover:bg-wine hover:text-white transition-all cursor-pointer">
                  <PhoneCall className="h-8 w-8 text-wine mx-auto mb-4 group-hover:text-white transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Business Support</p>
                  <p className="font-bold">+91-8800842084</p>
               </div>
            </div>
            
            <div className="space-y-4 pt-12">
               <h4 className="font-heading text-4xl font-black text-wine uppercase tracking-[0.3em] opacity-10">Clarity & Confidence.</h4>
               <p className="font-accent text-2xl text-wine opacity-60">VenueForEvent.com</p>
               <p className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground/30 italic">By using this platform, you acknowledge reading and understanding this disclaimer.</p>
            </div>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
