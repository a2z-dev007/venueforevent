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
  Mail, 
  Smartphone, 
  PenTool, 
  Search,
  Award
} from "lucide-react";
import careersHero from "@/assets/careers-hero.png";

export default function CareersPage() {
  return (
    <InfoPageLayout 
      heroTitle="Careers"
      heroSubtitle="Build the Future of Event Discovery"
      heroImage={careersHero.src}
      heroDescription="At VenueForEvent.com, we’re not just building a venue listing platform. We’re building the infrastructure that powers weddings, corporate conferences, and once-in-a-lifetime moments across India."
    >
      {/* Who We Are */}
      <SectionWrapper withDecorations variant="ivory">
        <ContentBlock align="center" accent="Our Identity">
          <p className="text-xl leading-relaxed text-muted-foreground font-medium italic">
            From best wedding venues in Mussoorie to conference halls in New Delhi, we are connecting people to spaces where memories and milestones are created. If you believe in hospitality, technology, innovation, and growth — you’ll feel at home here.
          </p>
        </ContentBlock>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
              <SubTitle className="text-wine">A Marketplace Serving:</SubTitle>
              <SimpleChecklist items={[
                 "Weddings & social celebrations",
                 "Destination weddings",
                 "Corporate events & seminars",
                 "MICE event venues",
                 "Conferences & exhibitions",
                 "Team building retreats"
              ]} />
              <p className="text-sm italic opacity-60">Operating across New Delhi, Mumbai, Bengaluru, Goa, Rajasthan, Kerala, and major hill destinations.</p>
           </div>
           <div className="p-12 rounded-[4rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 blur-3xl rounded-full" />
              <SubTitle className="text-champagne mb-8">Hospitality Expertise</SubTitle>
              <p className="text-lg leading-relaxed mb-6">"We’re not a random startup experimenting. We’re building a long-term ecosystem backed by Homocation Asia Pvt. Ltd."</p>
              <SimpleChecklist items={["Industry knowledge", "Strong relationships", "Operational credibility", "Scalable foundation"]} />
           </div>
        </div>
      </SectionWrapper>

      {/* Why Work With Us */}
      <SectionWrapper variant="white" withDecorations>
         <OrnateTitle title="Why Work With Us?" accent="Execution Over Excuses" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "High-Growth Industry", 
                desc: "India’s wedding and corporate market is expanding rapidly. Work in an industry with emotional impact and economic scale.", 
                icon: TrendingUp 
              },
              { 
                title: "Hospitality + Tech", 
                desc: "Combine operations, digital marketing, UX design, and event logistics. Your work directly impacts real bookings.", 
                icon: Zap 
              },
              { 
                title: "Ownership Mindset", 
                desc: "We believe in execution over excuses, and results over noise. Real impact for those who want real responsibility.", 
                icon: Target 
              }
            ].map((reason, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-ivory border border-champagne/10 hover:shadow-2xl transition-all group">
                 <div className="h-14 w-14 rounded-2xl bg-white text-wine flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <reason.icon className="h-7 w-7" />
                 </div>
                 <h4 className="font-heading text-xl font-bold mb-4">{reason.title}</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed italic">{reason.desc}</p>
              </div>
            ))}
         </div>
      </SectionWrapper>

      {/* Current Openings */}
      <SectionWrapper variant="gradient" withDecorations id="openings">
         <ContentBlock title="Current Openings" accent="Join the Phase" align="center">
            <p className="text-sm italic opacity-60 mb-12">We update roles based on expansion into new cities and verticals.</p>
            
            <div className="space-y-10 w-full max-w-5xl mx-auto">
               {[
                 { 
                   title: "Business Development Manager – Event Venues", 
                   locations: "New Delhi / Mumbai / Bengaluru / Goa / Rajasthan",
                   icon: Building2,
                   tags: ["Hospitality Sales", "Hotel Sales", "Market Entry"]
                 },
                 { 
                   title: "Corporate Sales Manager – MICE & Conferences", 
                   locations: "Mumbai / New Delhi / Bengaluru", 
                   icon: Briefcase,
                   tags: ["Strategic Sales", "Corporate CRM", "MICE"]
                 },
                 { 
                   title: "Digital Marketing & SEO Specialist", 
                   locations: "Remote / Hybrid", 
                   icon: Search,
                   tags: ["Keywords", "Technical SEO", "Growth"]
                 },
                 { 
                   title: "Content Writer – Events & Hospitality", 
                   locations: "Remote", 
                   icon: PenTool,
                   tags: ["Storytelling", "Copywriting", "Branding"]
                 },
                 { 
                   title: "Operations & Venue Support Executive", 
                   locations: "Mussoorie / Dehradun / Chandigarh / Mumbai", 
                   icon: Users,
                   tags: ["Onboarding", "Site Visits", "Vendor Exp"]
                 }
               ].map((job, ji) => (
                  <motion.div 
                    key={ji} 
                    whileHover={{ scale: 1.01, y: -5 }}
                    className="p-10 rounded-[4rem] bg-white border border-wine/5 shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row justify-between items-center gap-8 group"
                  >
                     <div className="flex gap-6 items-center">
                        <div className="h-14 w-14 rounded-2xl bg-ivory text-wine flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-all">
                           <job.icon className="h-7 w-7" />
                        </div>
                        <div>
                           <h4 className="font-heading text-xl font-bold mb-2">{job.title}</h4>
                           <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" /> {job.locations}
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                        {job.tags.map(tag => (
                          <span key={tag} className="px-4 py-2 rounded-full bg-champagne/5 text-[10px] uppercase font-black tracking-widest text-wine border border-champagne/10">{tag}</span>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* What We Look For */}
      <SectionWrapper variant="white">
         <AlternatingGrid items={[
           {
             title: "What We Look For",
             icon: Award,
             text: (
                <div className="space-y-6">
                   <p className="text-lg italic font-heading text-wine leading-relaxed">"We don’t just hire resumes. We hire mindset."</p>
                   <p>You should be execution-driven, detail-oriented, hospitality-sensitive, and calm under pressure.</p>
                   <SimpleChecklist items={[
                     "Execution-driven", "Detail-oriented", "Hospitality-sensitive", "Growth-focused", "Calm under pressure"
                   ]} />
                   <p className="text-sm opacity-60">If you understand the emotion of a royal palace wedding AND the ROI of a corporate conference hall — you’ll excel here.</p>
                </div>
             ),
             image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
           }
         ]} />
      </SectionWrapper>

      {/* Work Culture */}
      <SectionWrapper variant="dark" withDecorations>
         <ContentBlock title="Our Work Culture" accent="Results Over Noise" className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Transparent", desc: "No hidden agendas. No confusing report structures.", icon: Globe },
                 { title: "Performance", desc: "Growth depends on results — not office politics.", icon: Star },
                 { title: "Multi-City", desc: "Work on projects across Goa, Rajasthan, and more.", icon: MapPin },
                 { title: "Real Impact", desc: "Your work impacts real bookings for weddings and MICE.", icon: Target }
               ].map((c, ci) => (
                  <div key={ci} className="p-8 rounded-[3rem] bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-all">
                     <c.icon className="h-8 w-8 text-champagne mx-auto mb-4 group-hover:scale-110 transition-transform" />
                     <h5 className="font-heading text-lg font-bold text-white mb-2">{c.title}</h5>
                     <p className="text-[10px] text-white/40 leading-relaxed italic">{c.desc}</p>
                  </div>
               ))}
            </div>
         </ContentBlock>
      </SectionWrapper>

       {/* Why Now & Apply */}
       <SectionWrapper variant="white">
          <div className="space-y-24">
             <HighlightedQuote>
                Join early. Grow faster. This is a growth phase. Join our celebrate family and build India's leading event platform.
             </HighlightedQuote>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                   <SubTitle className="text-wine">Ready to Apply?</SubTitle>
                   <p className="text-lg leading-relaxed italic text-muted-foreground">"We review every application personally. Shortlisted candidates are contacted within 7 working days."</p>
                   <div className="space-y-4">
                      <div className="p-8 rounded-[3rem] bg-ivory border border-champagne/10 flex items-center gap-6 group">
                         <Mail className="h-10 w-10 text-wine" />
                         <div>
                            <p className="text-xs font-black uppercase tracking-widest text-wine/40">Email Application</p>
                            <p className="font-bold text-foreground">careers@venueforevent.com</p>
                         </div>
                      </div>
                      <div className="p-8 rounded-[3rem] bg-ivory border border-champagne/10 flex items-center gap-6 group">
                         <Smartphone className="h-10 w-10 text-wine" />
                         <div>
                            <p className="text-xs font-black uppercase tracking-widest text-wine/40">WhatsApp Us</p>
                            <p className="font-bold text-foreground">+91-8800842084</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="p-12 rounded-[4rem] bg-dark-accent text-white shadow-2xl space-y-8">
                   <SubTitle className="text-champagne">For Ambitious Professionals Only</SubTitle>
                   <p className="text-sm opacity-60 leading-relaxed italic">"If you want 9-to-5 without ownership, this may not be your place. If you want fast growth and real responsibility — Welcome to VenueForEvent.com."</p>
                   <hr className="border-white/10" />
                   <div className="grid grid-cols-1 gap-4">
                      {[
                        "Fast-paced growth", "Industry impact", "Direct decision-making", "Real responsibility"
                      ].map(item => (
                        <div key={item} className="flex gap-4 items-center group">
                           <Rocket className="h-4 w-4 text-champagne group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform" />
                           <p className="text-xs font-bold text-white/80">{item}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="text-center space-y-8 py-12">
                <h4 className="font-heading text-4xl md:text-6xl font-black text-wine uppercase tracking-[0.2em] opacity-10 leading-none">Apply Today. Growth Starts Here.</h4>
                <p className="font-accent text-3xl text-champagne">Let's Build Together.</p>
             </div>
          </div>
       </SectionWrapper>
    </InfoPageLayout>
  );
}
