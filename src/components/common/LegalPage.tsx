"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import { InfoSection } from "@/components/common/InfoComponents";
import { Shield, FileText, Scale } from "lucide-react";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  heroImage?: string;
}

export default function LegalPage({
  title,
  lastUpdated,
  effectiveDate,
  children,
  icon = <Shield className="h-5 w-5" />,
  heroImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
}: LegalPageProps) {
  return (
    <InfoPageLayout 
      heroTitle={title} 
      heroSubtitle="VenueForEvent Legal & Policies"
      heroImage={heroImage}
    >
      <section className="-mt-16 section-px relative z-20">
        <div className="mx-auto max-w-4xl p-8 rounded-[3rem] bg-dark-accent text-white shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-wine/10 rounded-full blur-3xl opacity-50" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="p-4 rounded-2xl bg-wine shadow-lg text-white">
               {icon}
            </div>
            <div>
               <h2 className="font-heading text-xl font-heavy text-champagne uppercase tracking-[0.15em]">{title}</h2>
               <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Homocation Asia Pvt. Ltd.</p>
            </div>
          </div>
          <div className="flex gap-10 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 relative z-10">
             <div>
                <p className="text-[9px] uppercase font-bold text-white/30 tracking-[0.2em] mb-1">Effective Date</p>
                <p className="text-xs font-bold text-white tracking-widest">{effectiveDate}</p>
             </div>
             <div>
                <p className="text-[9px] uppercase font-bold text-white/30 tracking-[0.2em] mb-1">Last Updated</p>
                <p className="text-xs font-bold text-white tracking-widest">{lastUpdated}</p>
             </div>
          </div>
        </div>
      </section>

      <InfoSection variant="glass" maxWidth="4xl" className="pb-12">
          <div className="legal-content prose-headings:font-heading prose-headings:text-foreground prose-headings:bold prose-p:text-sm prose-p:leading-relaxed prose-li:text-sm">
             {children}
          </div>
      </InfoSection>
      
      <section className="pb-24 section-px">
        <div className="mx-auto max-w-4xl p-10 rounded-[2.5rem] bg-ivory border border-champagne/10 text-center shadow-inner">
           <Scale className="h-8 w-8 text-wine mx-auto mb-4 opacity-70" />
           <p className="text-xs text-muted-foreground leading-relaxed italic max-w-2xl mx-auto">
             By using VenueForEvent.com, you acknowledge that you have read and understood these policies. If you have any questions regarding your personal data or legal terms, please reach out directly to our legal team at <span className="text-wine font-bold font-heading">legal@venueforevent.com</span>.
           </p>
        </div>
      </section>
    </InfoPageLayout>
  );
}

