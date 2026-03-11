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
  SubTitle
} from "@/components/common/InfoComponents";
import { 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Globe, 
  Target, 
  Zap, 
  Award, 
  Building2, 
  Briefcase, 
  PieChart, 
  ArrowUpRight, 
  Scale, 
  History,
  Mail,
  Users,
  Building,
  CheckCircle2,
  Gem,
  Rocket,
  Heart,
  Star,
  Handshake
} from "lucide-react";
import investorHero from "@/assets/investor-hero.png";

export default function InvestorRelationsPage() {
  return (
    <InfoPageLayout 
      heroTitle="Investor Relations"
      heroSubtitle="Building India’s Most Trusted Venue Platform"
      heroImage={investorHero.src}
      heroDescription="VenueForEvent.com is transforming how India plans weddings, corporate events, and destination celebrations. We invite strategic stakeholders to explore the scalable opportunity behind our tech-enabled platform."
    >
      {/* Intro Section */}
      <SectionWrapper withDecorations variant="ivory">
        <ContentBlock align="center" accent="Strategic Growth">
          <p className="text-xl leading-relaxed text-muted-foreground font-medium italic">
            Connecting demand with curated, verified supply across India’s booming event economy. From royal palace weddings in Rajasthan to executive boardroom rentals in Bengaluru, we are building infrastructure that powers meaningful gatherings.
          </p>
        </ContentBlock>
        
        <div className="mt-16">
           <StepGrid steps={[
             { title: "Market Growth", desc: "Booming wedding & corporate event sector.", icon: TrendingUp },
             { title: "Tech Enabled", desc: "Scalable digital-first framework.", icon: Zap },
             { title: "Governance", desc: "Structured model & operational precision.", icon: ShieldCheck },
             { title: "Dual Focus", desc: "Social celebrations + Corporate MICE.", icon: Target }
           ]} />
        </div>
      </SectionWrapper>

      {/* Governance Section */}
      <SectionWrapper variant="white">
         <OrnateTitle title="1. Corporate Structure & Governance" accent="Homocation Asia Pvt. Ltd." />
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <p className="text-lg leading-relaxed text-muted-foreground italic">VenueForEvent.com operates under Homocation Asia Pvt. Ltd., the parent entity behind the hospitality platform Spodia.com.</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: "Incorporation", value: "05 August 2024", icon: History },
                    { label: "Registered Office", value: "South West Delhi – 110071", icon: Building },
                    { label: "Nature of Business", value: "Event Arena & Marketplace", icon: Globe },
                    { label: "Brand Asset", value: "VenueForEvent.com", icon: Gem }
                  ].map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-[2.5rem] bg-ivory/50 border border-champagne/10">
                       <stat.icon className="h-5 w-5 text-wine mb-3" />
                       <h5 className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-1">{stat.label}</h5>
                       <p className="text-sm font-bold text-foreground">{stat.value}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="p-12 rounded-[4rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 blur-3xl rounded-full" />
               <SubTitle className="text-champagne mb-8 italic">Operating Principle</SubTitle>
               <p className="text-2xl font-heading leading-relaxed mb-6">"We are building long-term value — not short-term hype."</p>
               <p className="text-sm text-white/50 leading-relaxed">Operated with a structured governance model, defined operational processes, and a scalable digital-first framework.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* Market Opportunity */}
      <SectionWrapper variant="gradient" withDecorations>
         <ContentBlock title="2. Market Opportunity" accent="The Wedding & MICE Economy" align="center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 text-left">
               <div className="space-y-8">
                  <h4 className="font-heading text-2xl font-bold flex items-center gap-3 text-wine"><Heart className="h-6 w-6" /> The Wedding Economy</h4>
                  <p className="text-sm italic opacity-70 leading-relaxed">Rising disposable income and experiential trends are driving demand for destination weddings in Rajasthan, Goa, and Kerala.</p>
                  <SimpleChecklist items={[
                    "Destination wedding resorts in Rajasthan",
                    "Royal palace venues in Udaipur",
                    "Beach resort for wedding in Goa",
                    "Intimate wedding venues in Ooty",
                    "Forest wedding venues in Uttarakhand"
                  ]} />
               </div>
               <div className="space-y-8">
                  <h4 className="font-heading text-2xl font-bold flex items-center gap-3 text-dark-accent"><Briefcase className="h-6 w-6" /> Corporate & MICE</h4>
                  <p className="text-sm italic opacity-70 leading-relaxed">Fragmented market with limited digital aggregation. Disruption potential for conference halls and product launch venues.</p>
                  <SimpleChecklist items={[
                    "Conference halls in New Delhi",
                    "Business meeting rooms in Mumbai",
                    "MICE event venues in Bengaluru",
                    "Executive boardrooms in Bengaluru",
                    "Workation resorts in Rishikesh"
                  ]} />
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* The Problem & Business Model */}
      <SectionWrapper variant="white" withDecorations>
         <AlternatingGrid items={[
           {
             title: "3. The Problem We Solve",
             icon: Target,
             text: (
                <div className="space-y-6">
                   <p>Event venue booking in India is phone-call driven, price-opaque, and unstructured. Planners navigate inconsistent info and slow responses.</p>
                   <p className="italic font-heading text-wine text-lg">Centralizing discovery, comparison, and inquiry management for both clients and partners.</p>
                </div>
             ),
             image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
           },
           {
             title: "4. Business Model",
             icon: PieChart,
             text: (
                <div className="space-y-4">
                   <p>Multi-channel revenue strategy including Lead Gen, Premium Listings, Commission Booking, and a Vendor Marketplace.</p>
                   <SimpleChecklist items={[
                     "Lead Generation: Qualified inquiries",
                     "Premium Visibility for 5-star hotels",
                     "Commission share on confirmed bookings",
                     "Vendor Marketplace (Planners, Caterers)",
                     "Annual Corporate Partnerships"
                   ]} />
                </div>
             ),
             image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
           }
         ]} />
      </SectionWrapper>

      {/* Competitive Advantage */}
      <SectionWrapper variant="dark" withDecorations>
         <ContentBlock title="6. Competitive Advantage" accent="Why VenueForEvent?" className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {[
                 { title: "Verified Inventory", desc: "Quality control ensures trust and premium listings.", icon: ShieldCheck },
                 { title: "SEO Growth Engine", desc: "Targeting high-intent search for Mussoorie to Mumbai.", icon: TrendingUp },
                 { title: "Dual Focus", desc: "Combining Wed-Social and Corporate MICE sectors.", icon: Users },
                 { title: "Hospitality Backed", desc: "Rooted in industry expertise via Homocation Asia.", icon: Building2 },
                 { title: "Scalable Architecture", desc: "Designed for pan-India and South Asian dominance.", icon: Zap }
               ].map((adv, ai) => (
                 <div key={ai} className="group p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <adv.icon className="h-8 w-8 text-champagne mb-6 group-hover:scale-110 transition-transform" />
                    <h5 className="font-heading text-lg font-bold text-white mb-3">{adv.title}</h5>
                    <p className="text-xs text-white/50 leading-relaxed italic">{adv.desc}</p>
                 </div>
               ))}
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Roadmap Section */}
      <SectionWrapper variant="white">
         <OrnateTitle title="7. Growth Strategy & Roadmap" accent="Phased Expansion" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { phase: "Phase 1", title: "Inventory Expansion", desc: "Aggressive onboarding across Rajasthan, Goa, Kerala, and Himachal Pradesh.", icon: Rocket },
              { phase: "Phase 2", title: "Brand Visibility", desc: "Digital performance marketing and SEO authority dominance.", icon: Star },
              { phase: "Phase 3", title: "Corporate Acquisition", desc: "Direct outreach to HR leaders for annual MICE & retreats.", icon: Handshake },
              { phase: "Phase 4", title: "Tech Enhancements", desc: "AI recommendations and automated quotation management.", icon: Zap }
            ].map((p, pi) => (
               <div key={pi} className="flex gap-8 p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 hover:shadow-2xl transition-all group">
                  <div className="flex-shrink-0 h-16 w-16 rounded-[1.5rem] bg-white text-wine flex items-center justify-center font-black group-hover:scale-110 transition-transform shadow-inner">0{pi+1}</div>
                  <div>
                     <span className="text-[10px] uppercase font-black tracking-widest text-wine/40 mb-1 block">{p.phase}</span>
                     <h4 className="font-heading text-xl font-bold mb-3">{p.title}</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed italic">{p.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </SectionWrapper>

      {/* Why Invest Now */}
      <SectionWrapper variant="gradient" withDecorations>
         <ContentBlock align="center" title="10. Why Invest Now?" accent="Timing & Opportunity">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full text-left">
               <div className="p-12 rounded-[4rem] bg-white border border-wine/10 shadow-2xl space-y-8">
                  {[
                    "Early-Stage Expansion: Inventory and demand scaling.",
                    "Growing Wedding & MICE Economy: High transaction value.",
                    "Pan-India Scalability: Beach resorts to conference halls.",
                    "Cross-Selling Potential: Venues to Vendor services."
                  ].map((benefit, bi) => (
                    <div key={bi} className="flex gap-4 group">
                       <ArrowUpRight className="h-5 w-5 text-wine group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                       <p className="text-sm font-bold opacity-70 group-hover:opacity-100 transition-all">{benefit}</p>
                    </div>
                  ))}
               </div>
               <div className="space-y-8">
                  <HighlightedQuote>
                     VenueForEvent.com is building the event ecosystem of the future. A centralized hub connecting venues, vendors, planners, and clients.
                  </HighlightedQuote>
                  <p className="text-lg italic font-heading text-wine leading-relaxed">"If you believe in scalable marketplaces and high-value industries — this is the time to engage."</p>
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Final Section */}
      <SectionWrapper variant="dark" withDecorations>
         <div className="text-center space-y-12">
            <h4 className="font-heading text-4xl md:text-6xl font-black text-white uppercase tracking-[0.2em]">Let's Build Together.</h4>
            <ContentBlock align="center" className="text-white/60">
               <p className="text-sm italic">For investment inquiries, strategic discussions, or partnership exploration:</p>
            </ContentBlock>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
               <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center group hover:bg-white/10 transition-all cursor-pointer">
                  <Mail className="h-8 w-8 text-champagne mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-bold text-white">investors@venueforevent.com</p>
               </div>
            </div>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30 italic">All investor discussions are confidential and governed under standard NDA practices.</p>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
