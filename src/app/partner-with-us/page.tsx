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
  Handshake, 
  Rocket, 
  Users, 
  Target, 
  Zap, 
  Globe, 
  Heart, 
  TrendingUp, 
  Star, 
  Building2, 
  BarChart3, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  Settings, 
  PieChart,
  Mail,
  PhoneCall,
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import partnerHero from "@/assets/partner-hero.png";

export default function PartnerWithUsPage() {
  return (
    <InfoPageLayout 
      heroTitle="Partner With Us"
      heroSubtitle="Build India’s Powerful Event Ecosystem"
      heroImage={partnerHero.src}
      heroDescription="At VenueForEvent.com, we believe extraordinary events are never created alone. We’re building a structured, scalable, and trusted event marketplace across India — grow with us."
    >
      {/* Intro Section */}
      <SectionWrapper withDecorations variant="ivory">
        <ContentBlock align="center" accent="Strategic Alliances">
          <p className="text-xl leading-relaxed text-muted-foreground font-medium italic">
            Behind every royal palace wedding in Rajasthan and every corporate offsite resort in Uttarakhand — there is a network working in sync. We invite you to grow with our structured, scalable, and trusted marketplace.
          </p>
        </ContentBlock>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
           {[
             { name: "Venue Owners", icon: Building2 },
             { name: "Resort Chains", icon: Globe },
             { name: "Wedding Planners", icon: Heart },
             { name: "Corporate Agencies", icon: Briefcase },
             { name: "Tech Providers", icon: Zap }
           ].map((p, i) => (
             <div key={i} className="p-6 rounded-[2.5rem] bg-white border border-champagne/10 shadow-sm text-center group hover:shadow-xl transition-all">
                <p.icon className="h-8 w-8 text-wine mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-[10px] uppercase font-black tracking-widest leading-tight">{p.name}</h5>
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* Why Partner */}
      <SectionWrapper variant="white" withDecorations>
         <OrnateTitle title="Why Partner With Us?" accent="Access India’s Booming Event Economy" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <p className="text-lg leading-relaxed text-muted-foreground italic">India’s wedding and corporate event market is expanding rapidly across Goa, Rajasthan, Kerala, and major metros. Demand is rising for best wedding venues in Mussoorie and MICE event venues in Mumbai.</p>
               <HighlightedQuote>
                  We bring structure, technology, SEO visibility, and verified connections to a fragmented market.
               </HighlightedQuote>
            </div>
            <div className="p-10 rounded-[3.5rem] bg-ivory border border-champagne/10 shadow-inner space-y-8">
               <SubTitle className="text-wine">The Opportunity:</SubTitle>
               <SimpleChecklist items={[
                 "Increase qualified inquiries",
                 "Fill mid-week corporate slots",
                 "Promote all-inclusive wedding pkg",
                 "Improve digital discoverability",
                 "Access both wedding & corporate clients"
               ]} />
            </div>
         </div>
      </SectionWrapper>

      {/* Categories Section */}
      <SectionWrapper variant="gradient" withDecorations>
         <ContentBlock title="Partnership Categories" accent="Ways to Collaborate" align="center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full text-left">
               <div className="p-10 rounded-[4rem] bg-white border border-wine/10 shadow-sm space-y-6">
                  <div className="h-12 w-12 rounded-2xl bg-wine text-white flex items-center justify-center mb-6 shadow-lg">
                     <Building2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-heading text-xl font-bold">Venue Partners</h4>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">Heritage forts in Rajasthan, 5-star hotels in Manali, convention centers in Mumbai, and corporate resorts in Uttarakhand.</p>
                  <hr className="border-wine/5" />
                  <p className="text-xs font-black uppercase tracking-widest text-wine cursor-pointer hover:underline">List Your Venue</p>
               </div>
               <div className="p-10 rounded-[4rem] bg-dark-accent text-white shadow-2xl space-y-6">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 text-champagne flex items-center justify-center mb-6 shadow-lg">
                     <Users className="h-6 w-6" />
                  </div>
                  <h4 className="font-heading text-xl font-bold">Service Partners</h4>
                  <p className="text-xs text-white/50 italic leading-relaxed">Top wedding planners, theme decorators, catering services in Amritsar, and MICE exhibition partners in Mumbai.</p>
                  <hr className="border-white/10" />
                  <p className="text-xs font-black uppercase tracking-widest text-champagne cursor-pointer hover:underline">List Your Service</p>
               </div>
               <div className="p-10 rounded-[4rem] bg-white border border-wine/10 shadow-sm space-y-6">
                  <div className="h-12 w-12 rounded-2xl bg-ivory text-wine flex items-center justify-center mb-6 shadow-lg">
                     <Briefcase className="h-6 w-6" />
                  </div>
                  <h4 className="font-heading text-xl font-bold">Corporate Alliances</h4>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">Collaborating with HR and marketing agencies for annual retreats and large capacity product launch venues.</p>
                  <hr className="border-wine/5" />
                  <p className="text-xs font-black uppercase tracking-widest text-wine cursor-pointer hover:underline">Strategic Booking</p>
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Strategic Alliances & Tech */}
      <SectionWrapper variant="white">
         <AlternatingGrid items={[
           {
             title: "Strategic Hospitality Alliances",
             icon: Globe,
             text: (
                <div className="space-y-6">
                   <p>We welcome partnerships with resort chains, hotel groups, and DMCs to promote destination wedding cost packages in Goa and workation resorts in Uttarakhand.</p>
                   <SimpleChecklist items={[
                     "Resort chains & Hotel groups",
                     "Destination management companies",
                     "Regional tourism boards",
                     "Luxury property aggregators"
                   ]} />
                </div>
             ),
             image: "https://images.unsplash.com/photo-1540575861501-7ce0e1d1aa2b?q=80&w=2070&auto=format&fit=crop"
           },
           {
             title: "Technology & Integration Partners",
             icon: Settings,
             text: (
                <div className="space-y-6">
                   <p>We collaborate with CRM providers, event tech platforms, and AI-driven analytics to build a scalable tech-first ecosystem.</p>
                   <SimpleChecklist items={[
                     "CRM & Event tech platforms",
                     "AV & hybrid event solutions",
                     "Payment & booking integrations",
                     "AI-driven analytics providers"
                   ]} />
                </div>
             ),
             image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
           }
         ]} />
      </SectionWrapper>

      {/* Differentiators */}
      <SectionWrapper variant="ivory" withDecorations>
         <ContentBlock title="What Makes Us Different?" accent="The Competitive Edge" align="center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 text-left">
               {[
                 { title: "Dual Focus", icon: Target, desc: "Combining Wed-Social and Corporate MICE events. Doubling inventory utility and revenue potential." },
                 { title: "SEO Engine", icon: TrendingUp, desc: "High-visibility presence for searches like 'Best wedding venues in Nainital' or 'Conference halls in New Delhi'." },
                 { title: "Verified Network", icon: ShieldCheck, desc: "Building an ecosystem — not just a directory. Prioritizing quality and long-term collaboration." }
               ].map((diff, di) => (
                  <div key={di} className="group p-10 rounded-[3.5rem] bg-white border border-champagne/10 hover:shadow-2xl transition-all">
                     <div className="h-14 w-14 rounded-2xl bg-ivory text-wine flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-inner">
                        <diff.icon className="h-7 w-7" />
                     </div>
                     <h4 className="font-heading text-xl font-bold mb-4">{diff.title}</h4>
                     <p className="text-sm text-muted-foreground italic leading-relaxed">{diff.desc}</p>
                  </div>
               ))}
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* How Partnership Works */}
      <SectionWrapper variant="white">
         <OrnateTitle title="How Partnership Works" accent="From Connection to Growth" />
         <StepGrid steps={[
           { title: "Connect With Us", desc: "Submit your details through appropriate partnership pages.", icon: Handshake },
           { title: "Strategic Discussion", desc: "Understanding category, growth goals, and target segments.", icon: PieChart },
           { title: "Onboarding", desc: "Listing optimization, profile creation, and setup.", icon: Rocket },
           { title: "Growth & Visibility", desc: "Joint campaigns and capturing peak season demand.", icon: BarChart3 }
         ]} />
         <div className="mt-16 text-center italic text-sm opacity-50 max-w-2xl mx-auto">
            “Tell us about your business — our team will respond within 48 working hours.”
         </div>
      </SectionWrapper>

      {/* Investor & Growth */}
      <SectionWrapper variant="dark" withDecorations>
         <ContentBlock title="Investor & Growth Partnerships" accent="Homocation Asia Pvt. Ltd." className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <p className="text-xl italic text-champagne leading-relaxed font-heading">"India’s event industry presents high-value transaction potential. Grow with a structured governance model."</p>
                  <p className="text-sm text-white/50">Operating at the intersection of hospitality, technology, and India’s expanding celebration economy.</p>
               </div>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    "Strategic growth capital", "Regional expansion partners", "Hospitality ecosystem investors", "Technology collaboration"
                  ].map(item => (
                    <div key={item} className="flex gap-4 items-center group">
                       <CheckCircle2 className="h-4 w-4 text-champagne group-hover:scale-110 transition-transform" />
                       <p className="text-xs font-bold text-white/80">{item}</p>
                    </div>
                  ))}
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Final Section */}
      <SectionWrapper variant="white" withDecorations>
         <div className="space-y-16 py-12">
            <HighlightedQuote>
               "Peak bookings are happening months in advance. The earlier you partner, the stronger your visibility before high-demand cycles."
            </HighlightedQuote>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Email Partnership", icon: Mail, value: "partnerships@venueforevent.com" },
                 { title: "Partnership Team", icon: PhoneCall, value: "+91-8800842084" },
                 { title: "WhatsApp Us", icon: MessageSquare, value: "Quick Discussion" }
               ].map((cta, ci) => (
                  <div key={ci} className="group p-8 rounded-[3rem] bg-ivory border border-champagne/10 hover:bg-wine hover:text-white transition-all cursor-pointer shadow-sm text-center">
                     <cta.icon className="h-10 w-10 text-wine mx-auto mb-6 group-hover:text-white transition-colors group-hover:scale-110 transition-transform" />
                     <h5 className="font-heading text-lg font-bold mb-3">{cta.title}</h5>
                     <p className="text-[10px] uppercase font-black tracking-widest opacity-60 group-hover:opacity-100">{cta.value}</p>
                  </div>
               ))}
            </div>

            <div className="text-center space-y-8 pt-12">
               <h4 className="font-heading text-4xl font-black text-wine uppercase tracking-[0.2em] leading-none mb-4">Partner with us — and grow beyond boundaries.</h4>
               <p className="font-accent text-3xl text-wine opacity-60 italic">VenueForEvent.com</p>
               <p className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground/30 italic">We treat every partnership inquiry with confidentiality and strategic focus.</p>
            </div>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
