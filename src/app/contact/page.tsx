"use client";

import React from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import { InfoSection } from "@/components/common/InfoComponents";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  Globe,
  Star,
  Zap,
  ChevronRight
} from "lucide-react";
import contactHero from "@/assets/contact-hero.png";

export default function ContactPage() {
  const contactModes = [
     { title: "Customer Support", email: "support@venueforevent.com", desc: "General inquiries, booking assistance", icon: Mail },
     { title: "Venue Listings", email: "partnerships@venueforevent.com", desc: "List your venue, account management", icon: Building2 },
     { title: "Careers", email: "careers@venueforevent.com", desc: "Join our growing hospitality team", icon: Briefcase },
     { title: "Call Support", email: "+91-8800842084", desc: "Business development & direct help", icon: Phone }
  ];

  return (
    <InfoPageLayout 
      heroTitle="Connect with Us" 
      heroSubtitle="We’re Here to Help You Celebrate"
      heroImage={contactHero.src}
    >
      <InfoSection variant="ivory" maxWidth="5xl" className="-mt-16 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactModes.map((mode, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-wine/5 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
                 <div className="h-12 w-12 rounded-2xl bg-ivory text-wine flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <mode.icon className="h-6 w-6" />
                 </div>
                 <h4 className="font-heading text-xs font-heavy tracking-widest text-foreground/40 mb-2 uppercase">{mode.title}</h4>
                 <p className="text-sm font-heavy text-foreground mb-1">{mode.email}</p>
                 <p className="text-[10px] text-muted-foreground italic">{mode.desc}</p>
              </div>
            ))}
         </div>
      </InfoSection>

      <div className="bg-wine/5 py-12">
      <InfoSection title="Our Global Reach" icon={<Globe className="h-5 w-5" />} variant="transparent" maxWidth="5xl">
         <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
               <div className="p-8 rounded-[3rem] bg-white border border-wine/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-wine/5 rounded-full blur-2xl group-hover:bg-wine/10 transition-colors" />
                  <h4 className="font-heading text-2xl font-bold text-wine mb-4 flex items-center gap-2"><MapPin className="h-6 w-6" /> Corporate Office</h4>
                  <p className="text-sm text-foreground font-bold mb-2">Homocation Asia Private Limited</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">Plot No-18, D Block, Qutub Vihar Phase-1, Sector 19, South West Delhi – 110071, India</p>
               </div>
               <div className="p-8 rounded-[3rem] bg-dark-accent text-white shadow-xl flex items-center gap-6 group">
                  <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-champagne group-hover:scale-110 transition-transform duration-500">
                     <Clock className="h-7 w-7" />
                  </div>
                  <div>
                     <p className="text-[10px] uppercase font-heavy tracking-[0.2em] text-white/40 mb-1">Support Timings</p>
                     <p className="text-sm font-bold tracking-widest text-champagne">10:00 AM – 06:30 PM (Mon-Sat)</p>
                  </div>
               </div>
            </div>
            
            <div className="flex-1 w-full glass-card p-10 bg-white/80 border-champagne/20 shadow-2xl rounded-[4rem]">
               <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3"><Send className="h-5 w-5 text-wine" /> Send a Message</h3>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-[0.2em] ml-2">Full Name</label>
                        <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-3xl bg-ivory/50 border border-champagne/10 focus:border-wine outline-none transition-all placeholder:text-muted-foreground/30 text-sm font-medium" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-[0.2em] ml-2">Email Address</label>
                        <input type="email" placeholder="Email@domain.com" className="w-full px-6 py-4 rounded-3xl bg-ivory/50 border border-champagne/10 focus:border-wine outline-none transition-all placeholder:text-muted-foreground/30 text-sm font-medium" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-[0.2em] ml-2">Subject</label>
                     <select className="w-full px-6 py-4 rounded-3xl bg-ivory/50 border border-champagne/10 focus:border-wine outline-none transition-all text-sm font-medium appearance-none cursor-pointer">
                        <option>General Support</option>
                        <option>Partner Onboarding</option>
                        <option>MICE Inquiries</option>
                        <option>Investor Relations</option>
                        <option>Join the Team</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-[0.2em] ml-2">Your Vision</label>
                     <textarea rows={4} placeholder="How can we assist you?" className="w-full px-6 py-4 rounded-3xl bg-ivory/50 border border-champagne/10 focus:border-wine outline-none transition-all placeholder:text-muted-foreground/30 text-sm font-medium resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full btn-luxury py-5 font-heading text-sm font-black uppercase tracking-widest shadow-xl hover:shadow-wine/10 transition-all flex items-center justify-center gap-3 group">
                     Submit Message <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
            </div>
         </div>
      </InfoSection>
      </div>

      <InfoSection variant="glass" maxWidth="4xl" className="pb-24">
         <div className="text-center">
            <Star className="h-8 w-8 text-wine mx-auto mb-6 opacity-40" />
            <h4 className="font-heading text-2xl font-bold mb-4">Our Commitment</h4>
            <p className="text-sm text-muted-foreground leading-relaxed italic max-w-xl mx-auto">"We are committed to providing professional, prompt, and transparent communication across all channels. Your inquiries are important to us and are handled by the most relevant department within 24-48 hours."</p>
            
            <div className="mt-12 flex items-center justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
               <ShieldCheck className="h-10 w-10" />
               <Zap className="h-10 w-10" />
               <Globe className="h-10 w-10" />
            </div>
         </div>
      </InfoSection>
    </InfoPageLayout>
  );
}
