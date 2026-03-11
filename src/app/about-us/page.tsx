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
  Heart, 
  History, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Globe, 
  MapPin, 
  Building2, 
  Zap, 
  Sparkles,
  Users,
  TrendingUp,
  Handshake,
  Star,
  Briefcase
} from "lucide-react";
import aboutUsHero from "@/assets/about-us-hero.png";

export default function AboutUsPage() {
  return (
    <InfoPageLayout 
      heroTitle="About Us"
      heroSubtitle="Celebrations. Connections. Possibilities."
      heroImage={aboutUsHero.src}
      heroDescription="Every unforgettable celebration begins with a space. VenueForEvent.com was created to simplify one of the most important decisions in event planning — choosing the right venue."
    >
      {/* Welcome Section */}
      <SectionWrapper withDecorations variant="ivory">
        <ContentBlock align="center" accent="Welcome to VenueForEvent.com">
          <p className="text-xl leading-relaxed text-muted-foreground font-medium italic">
            Every unforgettable celebration begins with a space. A space where vows are exchanged. A space where ideas are launched. A space where families reunite, teams collaborate, and milestones are remembered for a lifetime.
          </p>
        </ContentBlock>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether someone is searching for the best wedding venues in Mussoorie, comparing conference halls in New Delhi, exploring a beach resort for wedding in Goa, or planning a corporate offsite in Himachal Pradesh, our platform connects people to curated venues across India and expanding South Asian destinations.
              </p>
              <div className="p-8 rounded-[3rem] bg-wine/5 border border-wine/10 italic text-sm text-wine font-bold">
                 We are proud to be a part of Spodia, and operated under our parent company, Homocation Asia Private Limited, a technology-driven organization building scalable platforms in hospitality and events.
              </div>
           </div>
           <HighlightedQuote>
              VenueForEvent.com is more than a listing portal. It is a celebration marketplace — built for emotion, powered by technology, and designed for growth.
           </HighlightedQuote>
        </div>
      </SectionWrapper>

      {/* Company Overview Section */}
      <SectionWrapper variant="white">
        <OrnateTitle title="Company Overview" accent="Legal & Structure" />
        <div className="mb-16">
           <StepGrid steps={[
             { title: "Legal Entity", desc: "Homocation Asia Private Limited", icon: Building2 },
             { title: "Brand Identity", desc: "VenueForEvent.com", icon: Star },
             { title: "Industry Focus", desc: "Event Tech, Marketplace, Hospitality", icon: Target }
           ]} />
        </div>
        <ContentBlock width="medium" className="bg-ivory p-12 rounded-[4rem] border border-champagne/10 shadow-inner">
           <p className="mb-8">Homocation Asia Private Limited was founded with the vision of creating integrated digital ecosystems in hospitality and event discovery. Through Spodia, we built a strong foundation in hotel listings, travel booking infrastructure, and scalable technology platforms.</p>
           <p>VenueForEvent.com extends that foundation into the rapidly growing social and corporate events industry — a multi-billion-dollar sector across India and neighboring countries.</p>
        </ContentBlock>
      </SectionWrapper>

      {/* Bridges Section */}
      <SectionWrapper variant="gradient" withDecorations>
        <AlternatingGrid items={[
          {
            title: "Social Celebrations (65%)",
            icon: Heart,
            text: "India’s wedding and event industry is one of the largest in the world. From royal palace weddings in Rajasthan to luxury villas for weddings in Coorg, celebrations here are grand, diverse, and culturally rich.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
          },
          {
            title: "Corporate & MICE (35%)",
            icon: TrendingUp,
            text: "Businesses require executive boardroom rentals in Mumbai, tech-ready conference spaces in Bengaluru, and corporate wellness retreats in Kerala. This balanced approach allows us to serve both emotional life events and strategic business gatherings.",
            image: "https://images.unsplash.com/photo-1540575861501-7ce0e1d1aa2b?q=80&w=2070&auto=format&fit=crop"
          }
        ]} />
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper variant="dark" withDecorations>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
           <ContentBlock title="Our Mission" accent="Purpose" className="text-white">
              <p className="mb-8 text-white/80">To simplify venue discovery and event planning across India and South Asia through a technology-driven, transparent, and user-centric marketplace.</p>
              <SubTitle className="text-champagne mb-4">We empower:</SubTitle>
              <SimpleChecklist items={[
                 "Couples planning destination weddings",
                 "Families organizing milestones",
                 "Corporates hosting MICE events",
                 "Event professionals seeking access"
              ]} />
           </ContentBlock>
           <ContentBlock title="Our Vision" accent="Future" className="text-white">
              <p className="mb-8 text-white/80">To become South Asia’s most trusted and scalable venue marketplace — known for quality listings, transparent communication, and premium user experience.</p>
              <SubTitle className="text-champagne mb-4">A future where searches for:</SubTitle>
              <SimpleChecklist items={[
                 "Outdoor wedding lawns in Dehradun",
                 "Auditoriums in Bengaluru",
                 "Product launch venues in Delhi",
                 "Riverside wedding spots in Rishikesh"
              ]} />
           </ContentBlock>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper variant="white">
        <OrnateTitle title="Our Core Values" accent="The Pillars of VenueForEvent" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {[
             { title: "Transparency", icon: ShieldCheck, desc: "Trust is the foundation. Clear communication and honest representation guide everything we do." },
             { title: "Empowerment", icon: Zap, desc: "We empower users to make informed decisions — from Goa packages to residential conference rentals." },
             { title: "Quality Over Quantity", icon: Award, desc: "Curated listings with structured data and high-quality visuals." },
             { title: "Innovation", icon: Sparkles, desc: "Continuously enhancing UI, UX, search intelligence, and inquiry management via Spodia ecosystem." },
             { title: "Inclusion", icon: Users, desc: "Celebrating India’s diversity — from forest venues to traditional wedding halls." }
           ].map((v, i) => (
             <div key={i} className="p-10 rounded-[3rem] bg-ivory border border-champagne/10 hover:shadow-2xl transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-wine/5 rounded-full blur-2xl group-hover:bg-wine/10 transition-colors" />
                <div className="h-14 w-14 rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all">
                   <v.icon className="h-7 w-7" />
                </div>
                <h4 className="font-heading text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">{v.desc}</p>
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* Geographic Strength */}
      <SectionWrapper variant="ivory" withDecorations>
        <OrnateTitle title="Our Geographic Strength" accent="India and Beyond" />
        <div className="space-y-16">
           <ContentBlock align="center" subtitle="India’s geography defines its celebration style. We bring these destinations closer through structured discovery.">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                 {["Mussoorie", "Shimla", "Manali", "Srinagar", "Gulmarg", "Nainital", "Dalhousie", "Munnar", "Coorg", "Ooty"].map(city => (
                   <div key={city} className="py-4 px-6 rounded-full bg-white border border-champagne/10 text-center text-sm font-bold shadow-sm hover:text-wine transition-colors">{city}</div>
                 ))}
              </div>
           </ContentBlock>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-12 rounded-[4rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-wine opacity-10 blur-3xl rounded-full" />
                 <h4 className="font-heading text-2xl font-bold text-champagne mb-8 flex items-center gap-3"><MapPin className="h-6 w-6" /> Metros & Emerging</h4>
                 <div className="flex flex-wrap gap-4 pr-12">
                    {["New Delhi", "Mumbai", "Bengaluru", "Chandigarh", "Amritsar", "Rishikesh", "Dehradun", "Jim Corbett", "Karnal"].map(c => (
                      <span key={c} className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-champagne transition-all">• {c}</span>
                    ))}
                 </div>
              </div>
              <div className="p-12 rounded-[4rem] bg-white border border-wine/10 shadow-2xl group">
                 <h4 className="font-heading text-2xl font-bold text-wine mb-8 flex items-center gap-3"><Globe className="h-6 w-6" /> State-Wide Coverage</h4>
                 <div className="grid grid-cols-2 gap-4">
                    {["Rajasthan", "Goa", "Kerala", "Uttarakhand", "Himachal Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Punjab", "Gujarat", "West Bengal", "J&K", "AP", "Haryana"].map(s => (
                      <div key={s} className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                         <div className="h-1 w-1 bg-wine rounded-full" /> {s}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>

      {/* Social & Corporate Core */}
      <SectionWrapper variant="white">
        <AlternatingGrid items={[
          {
            title: "Social Celebrations – Our Emotional Core",
            icon: Sparkles,
            text: (
               <div className="space-y-4">
                  <p>Searching for the perfect venue is not just a transaction — it’s a dream. We help families explore:</p>
                  <SimpleChecklist items={[
                    "Luxury marriage gardens in Jaipur",
                    "Theme decorators in New Delhi",
                    "Wedding caterers in Mumbai",
                    "Budget weddings in Uttarakhand"
                  ]} />
               </div>
            ),
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Corporate & MICE – Structured Excellence",
            icon: Briefcase,
            text: (
               <div className="space-y-4">
                  <p>Precision and technology combined for scalable event execution:</p>
                  <SimpleChecklist items={[
                    "MICE event venues in Bengaluru",
                    "Dealers meet organizers in Mumbai",
                    "Award ceremony venues in Chandigarh",
                    "Exhibition centers in New Delhi"
                  ]} />
               </div>
            ),
            image: "https://images.unsplash.com/photo-1505373633519-2f228d75a894?q=80&w=2070&auto=format&fit=crop"
          }
        ]} />
      </SectionWrapper>

      {/* Tech & Responsibility */}
      <SectionWrapper variant="gradient" withDecorations>
         <ContentBlock align="center" title="Technology & Responsibility" accent="Homocation Asia & Spodia Integration">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6 text-left">
                  <SubTitle>Platform Strength</SubTitle>
                  <p className="text-sm">Built under Homocation Asia Private Limited and powered by Spodia’s technology expertise, benefiting from scalable architecture, SEO dynamic pages, and advanced inquiry routing.</p>
                  <SimpleChecklist items={["Scalable architecture", "Structured database", "SEO-optimized", "Inquiry routing"]} />
               </div>
               <div className="space-y-6 text-left">
                  <SubTitle>Social Responsibility</SubTitle>
                  <p className="text-sm">We believe in responsible growth, supporting local economies in cities like Karnal and Jim Corbett, and encouraging eco-friendly décor and waste management.</p>
                  <SimpleChecklist items={["Eco-friendly décor", "Waste management", "Local vendor empowerment", "Community employment"]} />
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Why Investors Believe */}
      <SectionWrapper variant="dark" withDecorations>
         <ContentBlock title="Why Investors Believe" accent="Drive for Success" className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="space-y-4">
                  <SimpleChecklist items={[
                    "Rising disposable income",
                    "Destination wedding trend",
                    "Corporate expansion",
                    "Experiential event demand",
                    "Digital discovery shift"
                  ]} />
               </div>
               <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 italic text-xl text-champagne font-heading">
                  VenueForEvent.com operates at the intersection of Hospitality, Event Technology, Digital Marketplace, and Regional Expansion.
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Final Sections */}
      <SectionWrapper variant="white">
         <div className="space-y-24">
            <ContentBlock align="center" title="Looking Ahead" accent="Roadmap">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    "Expand to 1.5L+ curated venue listings",
                    "Strengthen presence in metro and tier-2 cities",
                    "Enhance AI-driven search filters",
                    "Improve inquiry conversion systems",
                    "Build strong venue-partner ecosystems"
                  ].map((goal, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] bg-ivory border border-champagne/10 flex flex-col items-center text-center shadow-sm">
                       <div className="h-10 w-10 rounded-full bg-wine text-white flex items-center justify-center mb-4 text-xs font-bold">{i+1}</div>
                       <p className="text-sm font-bold">{goal}</p>
                    </div>
                  ))}
               </div>
            </ContentBlock>

            <HighlightedQuote>
               VenueForEvent.com is not just about venues. It is about beginnings. It is about partnerships. It is about memories.
            </HighlightedQuote>

            <div className="text-center space-y-8">
               <p className="text-lg italic opacity-60">Organizing a wedding in Nainital, a seminar in Mumbai, or a gala in Chandigarh? We are here to simplify the journey.</p>
               <h4 className="font-heading text-4xl font-black text-wine uppercase tracking-[0.2em] animate-pulse">We are VenueForEvent.com</h4>
               <p className="font-accent text-2xl text-champagne">And we are just getting started.</p>
            </div>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
