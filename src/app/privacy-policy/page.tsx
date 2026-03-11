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
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Globe, 
  Bell, 
  Mail, 
  PhoneCall,
  History,
  FileText,
  CheckCircle2,
  MessageSquare,
  MapPin
} from "lucide-react";
import heroVenue from "@/assets/hero-venue.jpg";

export default function PrivacyPolicyPage() {
  return (
    <InfoPageLayout 
      heroTitle="Privacy Policy"
      heroSubtitle="Your Data, Protected"
      heroImage={heroVenue.src}
      heroDescription="At VenueForEvent.com, we value your trust. This policy explains how we collect, use, and protect your information when you use our platform."
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
                 This Privacy Policy explains how VenueForEvent.com (“Platform”, “Website”, “we”, “our”, “us”), owned and operated by Homocation Asia Pvt. Ltd., collects, uses, discloses, and protects your information.
              </p>
           </ContentBlock>
           <p className="mt-6 text-sm italic font-bold text-wine">By using the Platform, you agree to the practices described in this Privacy Policy.</p>
        </div>
      </SectionWrapper>

      {/* Information Collection */}
      <SectionWrapper variant="white">
         <div className="max-w-4xl mx-auto space-y-12">
            <OrnateTitle title="1. Information We Collect" accent="Transparency First" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 group">
                  <div className="h-12 w-12 rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-inner group-hover:bg-wine group-hover:text-white transition-all">
                     <UserCheck className="h-6 w-6" />
                  </div>
                  <SubTitle className="text-wine">1.1 Information You Provide</SubTitle>
                  <p className="text-xs text-muted-foreground mb-6 italic">When you submit an inquiry, register, or list a venue/service.</p>
                  <SimpleChecklist items={[
                    "Full name & Email address",
                    "Phone number & Business name",
                    "Event details (date, budget, location)",
                    "Billing information (if applicable)",
                    "Voluntary voluntary information"
                  ]} />
               </div>
               <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 group">
                  <div className="h-12 w-12 rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-inner group-hover:bg-wine group-hover:text-white transition-all">
                     <Database className="h-6 w-6" />
                  </div>
                  <SubTitle className="text-wine">1.2 Automatically Collected</SubTitle>
                  <p className="text-xs text-muted-foreground mb-6 italic">Collected to improve user experience and maintain security.</p>
                  <SimpleChecklist items={[
                    "IP address & Browser type",
                    "Device & Operating system",
                    "Pages visited & Referring URLs",
                    "Date and time of visit"
                  ]} />
               </div>
            </div>

            <div className="p-10 rounded-[3.5rem] bg-white border border-wine/5 shadow-sm group">
               <div className="flex items-center gap-4 mb-4">
                  <Eye className="h-6 w-6 text-wine" />
                  <SubTitle className="text-wine m-0">1.3 Cookies & Tracking</SubTitle>
               </div>
               <p className="text-sm text-muted-foreground leading-relaxed italic">We use cookies to remember preferences, analyze traffic, and improve functionality. You may disable cookies through browser settings, though some features may be affected.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* Usage & Sharing */}
      <SectionWrapper variant="gradient" withDecorations>
         <div className="max-w-4xl mx-auto space-y-12">
            <OrnateTitle title="2. How We Use & Share Information" accent="Data Governance" />
            
            <div className="p-10 md:p-16 rounded-[4rem] bg-white border border-wine/10 shadow-2xl space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <SubTitle className="text-wine">Data Usage</SubTitle>
                     <SimpleChecklist items={[
                        "Respond to inquiries & connect with venues",
                        "Manage user accounts",
                        "Improve platform performance",
                        "Communicate important updates",
                        "Prevent fraud or misuse"
                     ]} />
                     <p className="text-xs font-black uppercase tracking-widest text-wine/40 italic">We do not sell your personal information.</p>
                  </div>
                  <div className="space-y-6">
                     <SubTitle className="text-wine">Information Sharing</SubTitle>
                     <p className="text-xs text-muted-foreground italic mb-4">Details are shared only when necessary:</p>
                     <SimpleChecklist items={[
                        "With Venue Owners & Service Providers",
                        "With trusted Service Providers (Hosting, Analytics)",
                        "For Legal Requirements or Court orders"
                     ]} />
                  </div>
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Security & Retention */}
      <SectionWrapper variant="white">
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3.5rem] bg-dark-accent text-white shadow-2xl group">
               <Lock className="h-10 w-10 text-champagne mb-6 group-hover:scale-110 transition-transform" />
               <SubTitle className="text-champagne">4. Data Security</SubTitle>
               <p className="text-sm text-white/50 leading-relaxed italic">We implement reasonable technical measures to safeguard your information. However, no method of online transmission is completely secure; we cannot guarantee absolute security.</p>
            </div>
            <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 group">
               <Database className="h-10 w-10 text-wine mb-6 group-hover:scale-110 transition-transform" />
               <SubTitle className="text-wine">5. Data Retention</SubTitle>
               <p className="text-sm text-muted-foreground leading-relaxed italic">We retain information only as long as necessary to fulfill purposes, comply with legal obligations, and resolve disputes. Inactive data is securely deleted.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* Rights & Links */}
      <SectionWrapper variant="ivory" withDecorations>
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <SubTitle className="text-wine">6. Your Rights</SubTitle>
                  <p className="text-sm text-muted-foreground italic">You may have the right to:</p>
                  <div className="space-y-3">
                     {[
                       "Access your personal information",
                       "Request correction of inaccurate data",
                       "Request deletion of your data",
                       "Withdraw consent or opt out"
                     ].map(r => (
                        <div key={r} className="flex gap-4 items-center">
                           <CheckCircle2 className="h-4 w-4 text-wine" />
                           <p className="text-xs font-bold opacity-70">{r}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="space-y-6">
                  <SubTitle className="text-wine">7. Third-Party Links</SubTitle>
                  <p className="text-sm text-muted-foreground italic">Our platform contains links to third-party websites. We are not responsible for their privacy practices. Review their policies before sharing data.</p>
               </div>
            </div>

            <div className="p-10 rounded-[3.5rem] bg-white border border-wine/5 shadow-sm">
               <div className="flex items-center gap-4 mb-4">
                  <Bell className="h-6 w-6 text-wine" />
                  <SubTitle className="text-wine m-0">10. Changes & Updates</SubTitle>
               </div>
               <p className="text-sm text-muted-foreground italic leading-relaxed">We update this policy from time to time. Continued use of the platform after changes constitutes acceptance of the revised policy. Check the "Last Updated" date regularly.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* Children's Privacy */}
      <SectionWrapper variant="white">
         <div className="max-w-3xl mx-auto p-12 rounded-[4rem] bg-ivory border border-champagne/10 text-center space-y-4">
            <SubTitle className="text-wine">8. Children's Privacy</SubTitle>
            <p className="text-sm text-muted-foreground italic leading-relaxed">VenueForEvent.com is not intended for individuals under 18. We do not knowingly collect personal info from minors. If found, we take appropriate steps to delete it.</p>
         </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper variant="gradient" withDecorations>
         <div className="max-w-3xl mx-auto text-center space-y-12">
            <OrnateTitle title="Contact Information" accent="Privacy & Data Concerns" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 rounded-[3rem] bg-white shadow-lg border border-wine/5 group hover:bg-wine hover:text-white transition-all cursor-pointer">
                  <Mail className="h-8 w-8 text-wine mx-auto mb-4 group-hover:text-white transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Email Privacy Team</p>
                  <p className="font-bold">privacy@venueforevent.com</p>
               </div>
               <div className="p-8 rounded-[3rem] bg-white shadow-lg border border-wine/5 group hover:bg-wine hover:text-white transition-all cursor-pointer">
                  <PhoneCall className="h-8 w-8 text-wine mx-auto mb-4 group-hover:text-white transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Business Support</p>
                  <p className="font-bold">+91-8800842084</p>
               </div>
            </div>
            
            <div className="space-y-4 pt-8">
               <h4 className="font-heading text-4xl font-black text-wine uppercase tracking-[0.3em] opacity-10">Protecting Your Events.</h4>
               <p className="font-accent text-2xl text-wine opacity-60">VenueForEvent.com</p>
               <p className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground/30 italic">By using this platform, you acknowledge you have read and understood this policy.</p>
            </div>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
