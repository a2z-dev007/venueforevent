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
  Camera,
  Music,
  UserCheck
} from "lucide-react";
import brandStoryHero from "@/assets/brand-story-hero.png";

export default function BrandStoryPage() {
  return (
    <InfoPageLayout 
      heroTitle="Brand Story"
      heroSubtitle="Where Every Celebration Finds Its Beginning"
      heroImage={brandStoryHero.src}
      heroDescription="Every unforgettable event begins quietly — with a vision. VenueForEvent.com was built to simplify venue discovery and bring structure, transparency, and trust into the event planning journey."
    >
      {/* Intro Section */}
      <SectionWrapper withDecorations variant="ivory">
        <ContentBlock align="center" accent="Every Event Begins With a Dream">
          <p className="text-2xl leading-relaxed text-muted-foreground font-medium italic">
            Every unforgettable event begins quietly — with a vision.
          </p>
        </ContentBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-6">
           {[
             { title: "The Bride", desc: "Imagining her wedding venue glowing under soft lights.", icon: Heart },
             { title: "The Founder", desc: "Planning a corporate event that inspires innovation.", icon: TrendingUp },
             { title: "The Family", desc: "Searching for the perfect hall to celebrate a milestone.", icon: Users },
             { title: "The Team", desc: "Coordinating a conference that reflects their ambition.", icon: Globe }
           ].map((item, i) => (
             <div key={i} className="p-8 rounded-[3rem] bg-white border border-champagne/10 shadow-sm hover:shadow-xl transition-all group text-center">
                <div className="h-12 w-12 rounded-2xl bg-ivory text-wine flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                   <item.icon className="h-6 w-6" />
                </div>
                <h4 className="font-heading text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed italic">{item.desc}</p>
             </div>
           ))}
        </div>

        <HighlightedQuote>
           Before the invitations are sent, before the décor is installed, before the first guest arrives — there is a search. A search for the right space. The right atmosphere. The right partners.
        </HighlightedQuote>
      </SectionWrapper>

      {/* The Gap Section */}
      <SectionWrapper variant="white">
        <OrnateTitle title="The Gap We Saw" accent="Fragmenation to Unification" />
        <AlternatingGrid items={[
          {
            title: "Diversity Meets Fragmenation",
            icon: ShieldCheck,
            text: (
               <div className="space-y-4">
                  <p>The event industry in India is vibrant, emotional, and deeply rooted in culture. From grand destination wedding celebrations to high-impact business events, the diversity of spaces is extraordinary.</p>
                  <p>Yet the discovery process remained fragmented. Finding reliable event venues and trusted event services required endless calls, scattered information, and uncertainty.</p>
                  <SimpleChecklist items={[
                    "Hours browsing multiple platforms",
                    "Venue owners struggling with visibility",
                    "Event planners facing pricing confusion",
                    "Service providers competing without clarity"
                  ]} />
               </div>
            ),
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "We Believed it Could be Better",
            icon: Zap,
            text: (
               <p className="text-xl italic font-heading text-wine leading-relaxed">
                  "We believed event booking should feel as seamless as the celebration itself."
               </p>
            ),
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
          }
        ]} />
      </SectionWrapper>

      {/* Birth Section */}
      <SectionWrapper variant="gradient" withDecorations>
        <ContentBlock title="The Birth of a Smarter Event Marketplace" accent="A Unified Ecosystem" align="center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12">
              <div className="space-y-6">
                 <p className="text-lg">VenueForEvent.com was built with a clear purpose: To simplify venue discovery and bring structure, transparency, and trust into the event planning journey.</p>
                 <SubTitle>We envisioned a modern marketplace where:</SubTitle>
                 <SimpleChecklist items={[
                    "Venues and corporate event spaces are discoverable",
                    "Banquet halls and party lawns are presented with clarity",
                    "Event vendors are accessible in one ecosystem",
                    "Hosts can compare, evaluate, and connect confidently"
                 ]} />
              </div>
              <StepGrid steps={[
                { title: "Technology", desc: "Technology was our foundation.", icon: Zap },
                { title: "Trust", desc: "Trust was our promise.", icon: ShieldCheck },
                { title: "Community", desc: "Community was our goal.", icon: Users }
              ]} />
           </div>
        </ContentBlock>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper variant="dark" withDecorations>
         <ContentBlock title="Our Mission" accent="Transforming Discovery" className="text-white">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2 space-y-8">
                  <p className="text-xl italic text-champagne drop-shadow-sm font-heading">"To connect people with the right celebration spaces and event service providers through a transparent, efficient, and professional digital platform."</p>
                  <p className="text-white/60">We aim to transform the way India discovers event solutions across social, corporate, and social gatherings.</p>
               </div>
               <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       "Wedding planning solutions", "Corporate meetings spaces", "Networking events venues", 
                       "Reception venues", "Birthday party venues", "Product launch venues", "Social event spaces"
                     ].map(item => (
                       <div key={item} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/80 text-xs font-bold hover:bg-white/10 hover:text-white transition-all">• {item}</div>
                     ))}
                  </div>
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Emotion Section */}
      <SectionWrapper variant="white" withDecorations>
         <OrnateTitle title="Technology With a Human Heart" accent="Emotion Behind Every Celebration" />
         <ContentBlock align="center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <div className="group text-center">
                  <div className="h-64 rounded-[3.5rem] overflow-hidden mb-6 relative">
                     <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Wedding" />
                     <div className="absolute inset-0 bg-wine/20 group-hover:bg-transparent transition-colors" />
                     <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white opacity-40 group-hover:scale-150 transition-all duration-700" />
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-3 italic text-wine">The Backdrop of Vows</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">A wedding venue is not just a location — it becomes the backdrop of vows, laughter, and lifelong promises.</p>
               </div>
               <div className="group text-center">
                  <div className="h-64 rounded-[3.5rem] overflow-hidden mb-6 relative">
                     <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Corporate" />
                     <div className="absolute inset-0 bg-dark-accent/20 group-hover:bg-transparent transition-colors" />
                     <TrendingUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white opacity-40 group-hover:scale-150 transition-all duration-700" />
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-3 italic text-wine">A Space for Ideas</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">A conference venue is not just a hall — it becomes a space where ideas are born and partnerships are formed.</p>
               </div>
               <div className="group text-center">
                  <div className="h-64 rounded-[3.5rem] overflow-hidden mb-6 relative">
                     <img src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2070&auto=format&fit=crop" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Anniversary" />
                     <div className="absolute inset-0 bg-champagne/20 group-hover:bg-transparent transition-colors" />
                     <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white opacity-40 group-hover:scale-150 transition-all duration-700" />
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-3 italic text-wine">Celebration of Time</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">An anniversary venue is a celebration of time, love, and shared journeys.</p>
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* For Dreamers Section */}
      <SectionWrapper variant="ivory" withDecorations>
         <ContentBlock align="center" title="For the Dreamers and the Doers" accent="Two Communities, One Vision" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="p-12 rounded-[4rem] bg-white border border-wine/10 shadow-2xl group flex flex-col items-center text-center">
               <Users className="h-12 w-12 text-wine mb-6 group-hover:scale-110 transition-transform" />
               <SubTitle className="text-wine underline decoration-wine/10 underline-offset-8">For Event Hosts</SubTitle>
               <p className="text-sm mb-8 leading-relaxed italic">Individuals, families, corporations, and planners. You deserve clarity, efficiency, and confidence.</p>
               <SimpleChecklist items={[
                  "Discover premium & affordable venues",
                  "Compare amenities, capacity, location",
                  "Connect directly with decision-makers",
                  "Explore complete event solutions",
                  "Simplify event coordination"
               ]} />
            </div>
            <div className="p-12 rounded-[4rem] bg-dark-accent text-white shadow-2xl group flex flex-col items-center text-center">
               <Building2 className="h-12 w-12 text-champagne mb-6 group-hover:scale-110 transition-transform" />
               <SubTitle className="text-champagne underline decoration-champagne/10 underline-offset-8">For Venue Owners</SubTitle>
               <p className="text-sm mb-8 leading-relaxed italic text-white/60">Supporting venues, caterers, decorators, and planners with digital exposure and structured presentation.</p>
               <SimpleChecklist items={[
                  "Venue listings across India",
                  "Event service providers access",
                  "Verified caterers & decorators",
                  "Wedding photographers visibility",
                   "Growth through genuine leads"
               ]} />
            </div>
         </div>
      </SectionWrapper>

      {/* Trust Section */}
      <SectionWrapper variant="white">
         <AlternatingGrid items={[
           {
             title: "Building Trust in the Industry",
             icon: ShieldCheck,
             text: (
                <div className="space-y-4">
                   <p>Clarity builds confidence. VenueForEvent.com is committed to: verified listings, transparent communication, and supporting professional standards.</p>
                   <p className="text-sm italic">"When planning becomes easier, creativity flourishes."</p>
                </div>
             ),
             image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
           }
         ]} />
      </SectionWrapper>

      {/* Vision & Promise */}
      <SectionWrapper variant="gradient" withDecorations>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="p-12 rounded-[3.5rem] bg-white/40 backdrop-blur-md border border-wine/5 shadow-sm text-center">
               <Eye className="h-10 w-10 text-wine mx-auto mb-6" />
               <SubTitle>Future Vision</SubTitle>
               <p className="text-xs text-muted-foreground leading-relaxed italic">Expanding into more cities, empowering more venue owners, and continuously upgrading our event coordination platform to meet evolving expectations.</p>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-wine text-white shadow-2xl text-center lg:translate-y-[-20px]">
               <Award className="h-10 w-10 text-champagne mx-auto mb-6" />
               <SubTitle className="text-champagne">Our Promise</SubTitle>
               <p className="text-xs text-white/80 leading-relaxed italic mb-6">Uphold professionalism, support transparency, and deliver reliable event booking services.</p>
               <hr className="border-white/10 mb-6" />
               <p className="text-[10px] uppercase font-bold tracking-widest text-champagne">Innovation • Integrity • Quality</p>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-white/40 backdrop-blur-md border border-wine/5 shadow-sm text-center">
               <History className="h-10 w-10 text-wine mx-auto mb-6" />
               <SubTitle>The Journey Ahead</SubTitle>
               <p className="text-xs text-muted-foreground leading-relaxed italic">Our journey has only begun. We continue expanding our marketplace and enhancing our digital infrastructure for a smarter discovery.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* Final Sections */}
      <SectionWrapper variant="transparent" withDecorations>
         <div className="space-y-16 py-12">
            <div className="text-center space-y-8">
               <p className="text-lg italic opacity-70">Because behind every successful event is the right space — and behind every right space should be the right platform.</p>
               <h4 className="font-heading text-5xl font-black text-wine uppercase tracking-[0.3em] font-heading drop-shadow-sm">Connecting Dreams with Spaces.</h4>
               <p className="font-accent text-3xl text-wine opacity-60">VenueForEvent.com</p>
            </div>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
