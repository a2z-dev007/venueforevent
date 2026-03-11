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
  Building2, // Added back
  Activity, // Added back
  Target, // Added back
  Zap, // Added back
  Star, // Added back
  Heart, // Added back
  Briefcase, // Added back
  Users, // Added back
  MapPin, // Added back
  Layers // Added back
} from "lucide-react";
import companyDetailsHero from "@/assets/company-details-hero.png";

export default function CompanyDetailsPage() {
  return (
    <InfoPageLayout 
      heroTitle="Company Details"
      heroSubtitle="Empowering Events Across India"
      heroImage={companyDetailsHero.src}
      heroDescription="VenueForEvent.com is a smart, transparent, and scalable event venue discovery & booking platform designed to revolutionize how individuals and corporate teams find the perfect space."
    >
      {/* Introduction Section */}
      <SectionWrapper withDecorations variant="ivory">
        <ContentBlock align="center" accent="Corporate Profile">
          <p className="text-xl leading-relaxed text-muted-foreground font-medium italic">
            VenueForEvent.com brings together social and corporate event requirements on one intuitive, SEO-optimized platform, backed by real technology and real hospitality expertise.
          </p>
        </ContentBlock>
        
        <HighlightedQuote>
           Our parent company, Homocation Asia Pvt. Ltd., is the legal entity behind VenueForEvent.com—bringing credibility, business discipline, and long-term vision to the brand.
        </HighlightedQuote>
      </SectionWrapper>

      {/* Corporate Overview Section */}
      <SectionWrapper variant="white" id="overview">
        <OrnateTitle title="Corporate Overview" accent="Legal & Operational Markers" />
        <div className="mb-16">
           <StepGrid steps={[
             { title: "Legal Entity", desc: "Homocation Asia Private Limited", icon: Building2 },
             { title: "Brand Identity", desc: "VenueForEvent.com", icon: Star },
             { title: "CIN", desc: "U55101DL2024PTC435007", icon: FileText },
             { title: "Incorporation", desc: "05 August 2024", icon: Activity },
             { title: "Business Nature", desc: "Hospitality Tech & Marketplace", icon: Globe },
             { title: "Status", desc: "Active Private Limited", icon: CheckCircle2 }
           ]} />
        </div>
        
        <div className="mx-auto max-w-4xl p-10 rounded-[3.5rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-wine opacity-10 blur-3xl rounded-full" />
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-champagne shrink-0">
                 <MapPin className="h-8 w-8" />
              </div>
              <div>
                 <h4 className="font-heading text-xl font-bold mb-2">Registered Office</h4>
                 <p className="text-sm text-white/60 leading-relaxed italic">Plot No-18, D Block, Qutub Vihar Phase-1, Sector 19, South West Delhi – 110071, India</p>
              </div>
           </div>
        </div>
      </SectionWrapper>

      {/* Our Identity */}
      <SectionWrapper variant="gradient" withDecorations>
         <ContentBlock title="Our Identity" accent="Purpose Driven" align="center">
            <p className="text-lg italic text-wine mb-12">"To make event planning simple, transparent, and seamless — whether it’s a lifetime celebration or a high-impact corporate event."</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
               <div className="space-y-6">
                  <h4 className="font-heading text-2xl font-bold flex items-center gap-3 text-wine"><Heart className="h-6 w-6" /> Social Events</h4>
                  <p className="text-sm opacity-70">Destination weddings, engagement parties, receptions, themed celebration venues.</p>
                  <SimpleChecklist items={[
                    "Destination weddings", "Engagement parties", "Mehendi & Sangeet", "Intimate weddings", "Receptions", "Themed celebrations"
                  ]} />
               </div>
               <div className="space-y-6">
                  <h4 className="font-heading text-2xl font-bold flex items-center gap-3 text-dark-accent"><Briefcase className="h-6 w-6" /> Corporate Events</h4>
                  <p className="text-sm opacity-70">Conferences, MICE programs, seminars, product launches, team-building retreats.</p>
                  <SimpleChecklist items={[
                    "Conferences & MICE", "Seminars & Workshops", "Product launches", "Team-building retreats", "Gala dinners", "Annual events"
                  ]} />
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper variant="white">
         <AlternatingGrid items={[
           {
             title: "What We Do",
             icon: Target,
             text: (
                <div className="space-y-6">
                   <p>VenueForEvent.com functions as a comprehensive venue discovery, comparison, and booking platform with technology designed to:</p>
                   <SimpleChecklist items={[
                     "Offer verified venue listings",
                     "Integrate rich filters & comparison tools",
                     "Provide detailed venue profiles (capacity, pkg)",
                     "Connect users directly with partners",
                     "Facilitate curated responses & proposals",
                     "Support site visits & virtual tours"
                   ]} />
                   <p className="text-sm italic font-bold text-wine">We go beyond simple listings — we help planners make confident decisions faster.</p>
                </div>
             )
           }
         ]} />
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper variant="dark" withDecorations>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
               <span className="font-accent text-3xl text-champagne">Vision</span>
               <h3 className="font-heading text-4xl font-bold text-white">To become India’s most trusted venue discovery platform.</h3>
               <p className="text-white/60 leading-relaxed italic">Unifying weddings, celebrations, corporate MICE, and experiential bookings under one ecosystem.</p>
            </div>
            <div className="space-y-8">
               <span className="font-accent text-3xl text-champagne">Mission</span>
               <div className="space-y-4">
                  {[
                    "Make event planning frictionless with data-led insights.",
                    "Empower clients to evaluate multiple professional venues.",
                    "Provide technology and support that drives better outcomes."
                  ].map((m, mi) => (
                    <div key={mi} className="flex gap-4 group">
                       <CheckCircle2 className="h-5 w-5 text-champagne group-hover:scale-110 transition-transform" />
                       <p className="text-sm text-white/80 font-medium">{m}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Why We Exist */}
      <SectionWrapper variant="ivory" withDecorations>
         <OrnateTitle title="Why VenueForEvent.com Exists" accent="Solving Real Challenges" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Solve Complexity", desc: "No more juggling emails, sheets, or endless threads. We simplify planning.", icon: Zap },
              { title: "Bring Transparency", desc: "Clear pricing ranges, capacities, visuals, and facts for decision making.", icon: Eye },
              { title: "Connect with Trust", icon: ShieldCheck, desc: "All venues are verified before listing — giving you peace of mind." },
              { title: "Social + Corporate", icon: Layers, desc: "We uniquely combine both worlds in one intuitive platform." }
            ].map((reason, ri) => (
               <div key={ri} className="p-8 rounded-[3rem] bg-white border border-champagne/10 text-center group hover:shadow-2xl transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-ivory text-wine flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all">
                     <reason.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold mb-3">{reason.title}</h4>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">{reason.desc}</p>
               </div>
            ))}
         </div>
      </SectionWrapper>

      {/* Partners & Commitment */}
      <SectionWrapper variant="white">
         <AlternatingGrid items={[
           {
             title: "Commitment to Partners",
             icon: Users,
             text: (
                <div className="space-y-6">
                   <p>We work with venue owners, planners, decorators, and caterers by providing:</p>
                   <SimpleChecklist items={[
                     "Lead generation support",
                     "Enhanced listing visibility",
                     "Marketing insights and analytics",
                     "Technology tools to manage bookings",
                     "Feedback loops for continuous improvement"
                   ]} />
                   <p className="text-sm italic opacity-70">This partner-centric ecosystem strengthens services across social and corporate segments alike.</p>
                </div>
             ),
             image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
           }
         ]} />
      </SectionWrapper>

      {/* Backed by Section */}
      <SectionWrapper variant="gradient" withDecorations>
         <ContentBlock align="center" title="Backed by Homocation Asia Pvt. Ltd." accent="Spodia Integration">
            <p className="text-lg italic text-muted-foreground mb-12">"Sustainable alliances with stakeholders. Technology-first platforms for scale. Clear processes and governance."</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Verified Partners", desc: "Every venue undergoes a vetting process before listing.", icon: ShieldCheck },
                 { title: "Data Privacy", desc: "User data is protected with industry-standard security measures.", icon: Lock },
                 { title: "Transparent Info", desc: "No hidden pricing, no surprises. Key details displayed clearly.", icon: FileText }
               ].map((pill, pi) => (
                 <div key={pi} className="p-8 rounded-[3rem] bg-white/60 backdrop-blur-md border border-wine/5 text-center shadow-sm group">
                    <pill.icon className="h-8 w-8 text-wine mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h5 className="font-heading text-lg font-bold mb-2">{pill.title}</h5>
                    <p className="text-xs text-muted-foreground italic">{pill.desc}</p>
                 </div>
               ))}
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Contact & Support */}
      <SectionWrapper variant="white">
         <div className="p-12 md:p-20 rounded-[4rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-wine opacity-10 blur-[120px] rounded-full" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="space-y-6 text-center md:text-left">
                  <h3 className="font-heading text-4xl font-bold text-champagne">Contact & Business Support</h3>
                  <p className="text-white/60 italic">Your event deserves clarity. Your planning deserves simplicity.</p>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 justify-center md:justify-start group/link cursor-pointer">
                        <Mail className="h-5 w-5 text-champagne group-hover/link:translate-x-1 transition-transform" />
                        <span className="text-sm font-bold">support@venueforevent.com</span>
                     </div>
                     <div className="flex items-center gap-4 justify-center md:justify-start group/link cursor-pointer">
                        <PhoneCall className="h-5 w-5 text-champagne group-hover/link:translate-x-1 transition-transform" />
                        <span className="text-sm font-bold">+91-8800842084</span>
                     </div>
                  </div>
               </div>
               <div className="h-px w-full md:h-32 md:w-px bg-white/10" />
               <div className="space-y-8 text-center md:text-right">
                  <div>
                     <p className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">Partnerships</p>
                     <p className="text-sm font-bold text-champagne">partners@venueforevent.com</p>
                  </div>
                  <div>
                     <p className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">Investor Relations</p>
                     <p className="text-sm font-bold text-champagne">investors@venueforevent.com</p>
                  </div>
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* Legal & Growth */}
      <SectionWrapper variant="transparent" withDecorations>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6">
               <SubTitle className="text-wine">Legal & Compliance</SubTitle>
               <p className="text-sm text-muted-foreground leading-relaxed italic">VenueForEvent.com operates under standard Indian corporate law. Registered with the Ministry of Corporate Affairs (Homocation Asia Pvt. Ltd.). All usage terms and privacy policies are clearly stated for user protection.</p>
            </div>
            <div className="space-y-6">
               <SubTitle className="text-wine">Growth & Future Direction</SubTitle>
               <SimpleChecklist items={[
                 "Partner expansion across wedding destinations",
                 "Enhanced AI-driven recommendations",
                 "Multi-lingual & regional experiences",
                 "Dedicated mobile experience"
               ]} />
            </div>
         </div>

         <div className="text-center space-y-8">
            <h4 className="font-heading text-4xl font-black text-wine uppercase tracking-[0.3em]">Welcome to the Future.</h4>
            <p className="font-accent text-3xl text-wine opacity-60">VenueForEvent.com</p>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
