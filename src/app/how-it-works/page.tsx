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
  Search, 
  Filter, 
  FileText, 
  ArrowLeftRight, 
  Send, 
  Eye, 
  CheckCircle2, 
  PlusCircle, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  Building2, 
  Briefcase, 
  Globe, 
  Zap, 
  Star, 
  Heart,
  Mail,
  Users,
  MapPin,
  Clock,
  Layout,
  Handshake
} from "lucide-react";
import howItWorksHero from "@/assets/how-it-works-hero.png";

export default function HowItWorksPage() {
  return (
    <InfoPageLayout 
      heroTitle="How It Works"
      heroSubtitle="Discover, Compare, and Book with Ease"
      heroImage={howItWorksHero.src}
      heroDescription="Planning a perfect event — whether a destination wedding in Goa or a corporate offsite in Himachal — can feel overwhelming. VenueForEvent.com simplifies this journey, guiding you from initial ideas to final booking."
    >
      {/* Introduction Section */}
      <SectionWrapper withDecorations variant="ivory">
        <ContentBlock align="center" accent="Planning Reinvented">
          <p className="text-xl leading-relaxed text-muted-foreground font-medium italic">
            We combine technology, expertise, and a curated network of venues to help you make the best decisions — whether your focus is luxury wedding venues, heritage palace weddings, conference halls, corporate retreats, or large-scale events.
          </p>
        </ContentBlock>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="p-10 rounded-[4rem] bg-white border border-wine/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wine opacity-5 blur-3xl rounded-full" />
              <div className="h-12 w-12 rounded-2xl bg-ivory text-wine flex items-center justify-center mb-6">
                 <Heart className="h-6 w-6" />
              </div>
              <SubTitle className="text-wine">For Social & Wedding Events</SubTitle>
              <p className="text-sm italic text-muted-foreground leading-relaxed">Royal palace weddings in Jaipur, luxury marriage gardens in Chandigarh, forest venues in Uttarakhand, or beach resorts in Kerala.</p>
           </div>
           <div className="p-10 rounded-[4rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 blur-3xl rounded-full" />
              <div className="h-12 w-12 rounded-2xl bg-white/10 text-champagne flex items-center justify-center mb-6">
                 <Briefcase className="h-6 w-6" />
              </div>
              <SubTitle className="text-champagne">For Corporate & MICE Events</SubTitle>
              <p className="text-sm italic text-white/50 leading-relaxed">Conferences, seminar halls, offsite resorts, exhibition centers, training rooms, and gala dinner venues with technical precision.</p>
           </div>
        </div>
      </SectionWrapper>

      {/* Steps 1 & 2 */}
      <SectionWrapper variant="white" withDecorations>
        <AlternatingGrid items={[
          {
            title: "Step 1 – Explore Our Curated Venue Listings",
            icon: Search,
            text: (
               <div className="space-y-6">
                  <p>Over 1.5 lakh verified venues across India and South Asia (Nepal, Bhutan, Sri Lanka, Thailand, etc.). Detailed profiles with high-quality photos, videos, and 360° views ensure transparency.</p>
                  <SimpleChecklist items={[
                    "HD photos and 360° tours",
                    "Event configurations and capacities",
                    "Wedding pkg including pricing",
                    "Special services (caterers & decorators)"
                  ]} />
               </div>
            ),
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"
          },
          {
            title: "Step 2 – Filter & Shortlist Your Venues",
            icon: Filter,
            text: (
               <div className="space-y-6">
                  <p>VenueForEvent.com allows you to filter based on location, budget, capacity, amenities, and event type. Our AI-assisted suggestion system recommends the top 10 best-matched venues.</p>
                  <SimpleChecklist items={[
                    "Location-based filtering",
                    "Budget & Capacity matching",
                    "Special amenity tracking (AV, pool, beach)",
                    "Shortlist 3–5 venues effortlessly"
                  ]} />
               </div>
            ),
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          }
        ]} />
      </SectionWrapper>

      {/* Steps 3 & 4 */}
      <SectionWrapper variant="ivory">
        <AlternatingGrid items={[
          {
            title: "Step 3 – Detailed Venue Profiles",
            icon: FileText,
            text: (
               <div className="space-y-6">
                  <p>Explore seating plans, facilities (catering, AV), and special features. Downloadable proposals and multiple menu options for ease of evaluation.</p>
                  <SimpleChecklist items={[
                    "Riverside spots in Rishikesh",
                    "Luxury villas in Coorg",
                    "Seminar halls in Bengaluru",
                    "Conference centers in New Delhi"
                  ]} />
               </div>
            ),
            image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Step 4 – Compare & Evaluate Options",
            icon: ArrowLeftRight,
            text: (
               <div className="space-y-6">
                  <p>Side-by-side comparison of pricing, inclusions, guest capacity, and vendor support before sending inquiries. Decision-making is data-driven yet simple.</p>
                  <p className="text-xl italic font-heading text-wine leading-relaxed">Compare Side-by-Side: Capacity, Pricing, Layout.</p>
               </div>
            ),
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
          }
        ]} />
      </SectionWrapper>

      {/* Step 5 */}
      <SectionWrapper variant="gradient" withDecorations>
         <ContentBlock title="Step 5 – Send Inquiry & Get Curated Responses" accent="The Human Connect" align="center">
            <HighlightedQuote>
               Within 24 working hours, our dedicated specialists analyze your needs and provide customized proposals from your shortlisted venues. 
            </HighlightedQuote>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Fill the Form", desc: "Name, Email, Event Type, City, Dates, Guest Count.", icon: FileText },
                 { title: "Specialist Review", desc: "Our team analyzes your specific needs and goals.", icon: Users },
                 { title: "Custom Props", desc: "Get customized proposals from the best-fit venues.", icon: Star },
                 { title: "24h Response", desc: "Fast, reliable, and professional communication.", icon: Zap }
               ].map((step, i) => (
                 <div key={i} className="p-8 rounded-[3rem] bg-white border border-champagne/10 shadow-sm text-center group hover:shadow-xl transition-all">
                    <div className="h-10 w-10 text-wine mx-auto mb-4 group-hover:scale-110 transition-transform"><step.icon className="h-full w-full" /></div>
                    <h4 className="font-heading text-sm font-bold mb-2">{step.title}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed italic">{step.desc}</p>
                 </div>
               ))}
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Steps 6 & 7 & 8 */}
      <SectionWrapper variant="white">
         <OrnateTitle title="Finalizing Your Dream Event" accent="Visit, Book & Expand" />
         <div className="space-y-12">
            <StepGrid steps={[
              { title: "Step 6 – Evaluate Proposals", desc: "Compare pricing and schedule venue site visits with expert advice.", icon: Eye },
              { title: "Step 7 – Book Your Venue", desc: "Confirm directly through the platform and receive official confirmation.", icon: CheckCircle2 },
              { title: "Step 8 – Additional Services", desc: "Value-added services including menus, proposals, and sharing tools.", icon: PlusCircle }
            ]} />
         </div>
      </SectionWrapper>

      {/* Support Section */}
      <SectionWrapper variant="dark" withDecorations>
         <ContentBlock align="center" title="Step 9 – Dedicated Support & Communication" accent="Expert Guidance" className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12 w-full">
               <div className="space-y-6">
                  <p className="text-lg opacity-80 italic">Planning a celebrate can be stressful. We ensure every event is memorable and flawless through a dedicated support network.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                     {[
                       { dept: "General", email: "support@venueforevent.com", phone: "+91-8800842084", icon: Mail },
                       { dept: "Wedding", email: "weddings@venueforevent.com", phone: "+91-7399888844", icon: Heart },
                       { dept: "Corporate", email: "corporate@venueforevent.com", phone: "+91-8800842084", icon: Briefcase },
                       { dept: "Partners", email: "partners@venueforevent.com", phone: "+91-7399888855", icon: Handshake }
                     ].map((item, i) => (
                       <div key={i} className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                          <item.icon className="h-6 w-6 text-champagne mb-4 group-hover:scale-110 transition-transform" />
                          <h4 className="font-heading text-lg font-bold text-white mb-2">{item.dept}</h4>
                          <p className="text-xs text-white/50 mb-1">{item.email}</p>
                          <p className="text-xs text-champagne font-bold tracking-widest">{item.phone}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="space-y-8">
                  <SubTitle className="text-champagne mb-6">Regional Offices</SubTitle>
                  <div className="space-y-6">
                     {[
                       { city: "New Delhi", addr: "Samta Enclave, Qutub Vihar, Dwarka – 110071", icon: Building2 },
                       { city: "Bengaluru", addr: "BEML Layout, Tubarahalli, Whitefield – 560066", icon: MapPin },
                       { city: "Assam", addr: "Purna Saikia Complex, Sonapur, Kamrup – 782402", icon: Globe },
                       { city: "Kolkata", addr: "Panchanantala, Panchpara, Howrah – 711317", icon: MapPin }
                     ].map((off, j) => (
                       <div key={j} className="flex items-start gap-4 p-4 mb-2">
                          <off.icon className="mt-1 h-5 w-5 text-champagne shrink-0" />
                          <div>
                             <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">{off.city}</h4>
                             <p className="text-xs text-white/40 leading-relaxed italic">{off.addr}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </ContentBlock>
      </SectionWrapper>

      {/* Why it Works Best */}
      <SectionWrapper variant="white">
         <OrnateTitle title="Step 10 – Why It Works Best" accent="Unmatched Quality & Verified Listings" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              "Verified venues – No spam, no fake listings",
              "Curated recommendations – Tailored to you",
              "Expert guidance – Specialists for every event",
              "Multi-city coverage – Mussoorie to Mumbai",
              "Fast response – Within 24 working hours",
              "Value-added services – Menus, proposals, packages"
            ].map((reason, k) => (
              <div key={k} className="p-10 rounded-[4rem] bg-ivory border border-champagne/10 shadow-sm flex items-center gap-6 group hover:translate-y-[-10px] transition-all duration-500">
                 <div className="h-12 w-12 rounded-2xl bg-white shadow-inner flex items-center justify-center text-wine group-hover:bg-wine group-hover:text-white transition-all">
                    <CheckCircle2 className="h-6 w-6" />
                 </div>
                 <p className="text-sm font-bold leading-tight">{reason}</p>
              </div>
            ))}
         </div>

         <div className="text-center space-y-8">
            <p className="font-accent text-3xl text-wine opacity-60">"Your dream venue is now one conversation away."</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
               <div className="flex items-center gap-3 px-10 py-5 rounded-full bg-wine text-white font-heavy uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform cursor-pointer">
                  Get Started Today
               </div>
               <div className="flex items-center gap-3 text-wine font-bold text-lg hover:gap-5 transition-all cursor-pointer">
                  <PhoneCall className="h-5 w-5" /> +91-8800842084
               </div>
            </div>
         </div>
      </SectionWrapper>

    </InfoPageLayout>
  );
}
