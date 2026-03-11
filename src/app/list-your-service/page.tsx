"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import { motion } from "framer-motion";
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
  Briefcase, 
  Rocket, 
  Users, 
  Target, 
  Zap, 
  Globe, 
  Heart, 
  TrendingUp, 
  Star, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  PlusCircle, 
  Image as ImageIcon, 
  Layout, 
  ShieldCheck, 
  Award,
  PhoneCall,
  MessageSquare,
  FileDown
} from "lucide-react";
import listServiceHero from "@/assets/list-service-hero.png";

export default function ListYourServicePage() {
  return (
    <InfoPageLayout 
      heroTitle="List Your Service"
      heroSubtitle="Get Discovered by Elite Clients"
      heroImage={listServiceHero.src}
      heroDescription="Are you a wedding planner, decorator, caterer, or corporate event manager? VenueForEvent.com is building India’s most trusted event ecosystem — connecting vendors with real booking decisions."
    >
      {/* Intro Section */}
      <SectionWrapper withDecorations variant="ivory">
        <ContentBlock align="center" accent="Grow Beyond Referrals">
          <p className="text-xl leading-relaxed text-muted-foreground font-medium italic">
            Whether it's top wedding planners in Rajasthan or corporate offsite retreats in Uttarakhand, your service deserves visibility where real booking decisions happen. Join India's massive and growing event economy.
          </p>
        </ContentBlock>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: "High-Intent Clients", desc: "Connect with wedding clients actively finalizing vendors.", icon: Heart },
             { title: "Corporate Access", desc: "Gain visibility with corporate decision-makers and HR heads.", icon: Briefcase },
             { title: "Multi-City Exposure", desc: "Expand your footprint across Rajasthan, Goa, Kerala, and more.", icon: Globe },
             { title: "Structured Leads", desc: "No random inquiries. Get detailed dates, budgets, and counts.", icon: Target }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -10 }}
               className="p-8 rounded-[3rem] bg-white border border-champagne/10 shadow-sm hover:shadow-2xl transition-all duration-500 group text-center"
             >
                <div className="h-12 w-12 rounded-2xl bg-ivory text-wine flex items-center justify-center mb-6 mx-auto group-hover:bg-wine group-hover:text-white transition-all">
                   <item.icon className="h-6 w-6" />
                </div>
                <h4 className="font-heading text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed italic">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </SectionWrapper>

      {/* Problem Solver */}
      <SectionWrapper variant="white" withDecorations>
         <OrnateTitle title="Solve Your Growth Challenges" accent="Unpredictable to Professional" />
         <ContentBlock align="center" subtitle="Most service providers struggle with unpredictable lead flow and no structured corporate exposure. VenueForEvent.com solves this.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12 max-w-5xl mx-auto">
               <div className="p-10 rounded-[4xl] bg-wine/5 border border-wine/10 space-y-6">
                  <SubTitle className="text-wine flex items-center gap-2 italic"><Zap className="h-5 w-5" /> Challenges Solved</SubTitle>
                  <SimpleChecklist items={[
                    "Unpredictable lead flow",
                    "Low-quality inquiries",
                    "Overdependence on referrals",
                    "Heavy competition on social media",
                    "No structured corporate exposure"
                  ]} />
               </div>
               <div className="p-10 rounded-[4xl] bg-dark-accent text-white shadow-2xl space-y-6">
                  <SubTitle className="text-champagne flex items-center gap-2 italic"><Star className="h-5 w-5" /> What We Offer</SubTitle>
                  <SimpleChecklist items={[
                    "High-intent wedding clients",
                    "Corporate decision-makers",
                    "Event planners & venue owners",
                    "Multi-city destination bookings"
                  ]} />
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Eligible Categories */}
      <SectionWrapper variant="gradient" withDecorations>
         <ContentBlock title="Who Should List?" accent="Verified Specialists Preferred" align="center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 text-left">
               <div className="space-y-8">
                  <h4 className="font-heading text-2xl font-bold flex items-center gap-3 text-wine"><Heart className="h-6 w-6" /> Wedding & Social</h4>
                  <p className="text-sm italic opacity-70">Perfect for professionals in Goa, Rajasthan, Kerala, Uttarakhand, and major metros.</p>
                  <div className="grid grid-cols-2 gap-2">
                     {[
                       "Wedding planners", "Theme decorators", "Floral designers", "Photographers", "Makeup artists", "Catering services", "Sound & production", "DJs & Artists"
                     ].map(cat => (
                       <span key={cat} className="px-3 py-2 rounded-xl bg-white/40 border border-wine/5 text-[10px] font-bold text-wine/80 uppercase tracking-widest leading-none flex items-center justify-center text-center">{cat}</span>
                     ))}
                  </div>
               </div>
               <div className="space-y-8">
                  <h4 className="font-heading text-2xl font-bold flex items-center gap-3 text-dark-accent"><Briefcase className="h-6 w-6" /> Corporate & MICE</h4>
                  <p className="text-sm italic opacity-70">Ideal for agencies supporting conference halls and product launch venues in Mumbai & Delhi.</p>
                  <div className="grid grid-cols-2 gap-2">
                     {[
                       "MICE agencies", "Production & AV", "Exhibition fabricators", "Team building", "Wellness facilitators", "Experiential marketing", "Launch planners", "Gala production"
                     ].map(cat => (
                       <span key={cat} className="px-3 py-2 rounded-xl bg-white/40 border border-dark-accent/5 text-[10px] font-bold text-dark-accent/80 uppercase tracking-widest leading-none flex items-center justify-center text-center">{cat}</span>
                     ))}
                  </div>
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="white">
         <AlternatingGrid items={[
           {
             title: "1. Verified Professional Profile",
             icon: Layout,
             text: (
                <div className="space-y-6">
                   <p>Your profile will include service categories, portfolio, client testimonials, and package ranges. Position yourself under high-intent search terms like "Top wedding planners in Rajasthan".</p>
                   <SimpleChecklist items={[
                     "Service categories", "Portfolio images & videos", "Cities & states covered", "Client testimonials", "Package range", "Event case studies"
                   ]} />
                </div>
             ),
             image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
           },
           {
             title: "2. Direct Access to Event Clients",
             icon: Users,
             text: (
                <div className="space-y-6">
                   <p>We connect you with clients planning destination weddings, conferences, workations, and gala dinners. Inquiries include guest count, budget, dates, and venue details.</p>
                   <p className="text-lg italic font-heading text-wine leading-relaxed">"No more vague 'Call for details' leads. Real data for real bookings."</p>
                </div>
             ),
             image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
           }
         ]} />
      </SectionWrapper>

      {/* Exposure & Credibility */}
      <SectionWrapper variant="ivory" withDecorations>
         <ContentBlock align="center" title="Exposure & Credibility" accent="Market Reach">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12 w-full">
               <div className="p-10 rounded-[3.5rem] bg-white border border-champagne/10 shadow-sm space-y-6">
                  <h4 className="font-heading text-2xl font-bold flex items-center gap-3 text-wine"><Globe className="h-6 w-6" /> Multi-City Footprint</h4>
                  <p className="text-sm italic opacity-70">Expand your circle beyond local networks. Gain visibility in Rajasthan, Goa, Kerala, Uttarakhand, Maharashtra, Karnataka, and Punjab.</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground bg-ivory p-4 rounded-2xl italic">"Whether you specialize in heritage fort weddings or tech-ready conference spaces, we help you gain visibility where demand already exists."</p>
               </div>
               <div className="p-10 rounded-[3.5rem] bg-dark-accent text-white shadow-2xl shadow-dark-accent/10 space-y-6">
                  <h4 className="font-heading text-2xl font-bold flex items-center gap-3 text-champagne"><ShieldCheck className="h-6 w-6" /> Brand Credibility</h4>
                  <p className="text-sm italic opacity-40">Being listed on a structured event platform builds authority and improves Google discoverability.</p>
                  <SimpleChecklist items={[
                    "Improves client trust", "Enhances Google SEO", "Strengthens corporate positioning", "Positions you as a verified pro", "Powered by Homocation Asia"
                  ]} />
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper variant="white">
         <OrnateTitle title="How It Works" accent="Simple Steps to Scaling" />
         <StepGrid steps={[
           { title: "Submit Details", desc: "Complete registration with portfolio and business name.", icon: PlusCircle },
           { title: "Verification", desc: "Our team evaluates service authenticity and quality.", icon: ShieldCheck },
           { title: "Optimization", desc: "We optimize your profile for organic SEO discovery.", icon: Zap },
           { title: "Start Receiving", desc: "Approved services become discoverable to high-intent clients.", icon: Rocket }
         ]} />
         <div className="mt-16 text-center italic text-sm opacity-50 max-w-2xl mx-auto">
            “Accurate portfolio details increase your chances of receiving premium leads.”
         </div>
      </SectionWrapper>

      {/* Join Now */}
      <SectionWrapper variant="gradient" withDecorations>
         <div className="space-y-16 py-12">
            <HighlightedQuote>
               "Peak seasons are booking fast. Clients are finalizing vendors months in advance. This is your opportunity to be visible during high-demand cycles."
            </HighlightedQuote>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "List Your Service", icon: Star, action: "Apply Now" },
                 { title: "Partnership Team", icon: PhoneCall, action: "Call Us" },
                 { title: "Quick Onboarding", icon: MessageSquare, action: "WhatsApp" },
                 { title: "Partner Brochure", icon: FileDown, action: "Download" }
               ].map((cta, ci) => (
                  <div key={ci} className="group p-8 rounded-[3rem] bg-white border border-wine/10 hover:bg-wine hover:text-white transition-all cursor-pointer shadow-sm text-center">
                     <cta.icon className="h-10 w-10 text-wine mx-auto mb-6 group-hover:text-white transition-colors group-hover:scale-110 transition-transform" />
                     <h5 className="font-heading text-lg font-bold mb-3">{cta.title}</h5>
                     <p className="text-[10px] uppercase font-black tracking-widest opacity-60 group-hover:opacity-100">{cta.action}</p>
                  </div>
               ))}
            </div>

            <div className="text-center space-y-8 pt-12">
               <h4 className="font-heading text-4xl font-black text-wine uppercase tracking-[0.2em] leading-none mb-4">Be Visible. Be Trusted. Be Booked.</h4>
               <p className="font-accent text-3xl text-wine opacity-60 italic">Join VenueForEvent.com today.</p>
            </div>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
