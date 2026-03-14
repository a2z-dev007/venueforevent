"use client";

import React, { useRef } from "react";
import InfoPageLayout from "@/components/common/InfoPageLayout";
import {
  SectionWrapper,
  ContentBlock,
  SimpleChecklist,
  StepGrid,
  OrnateTitle,
  SubTitle,
  Tilt,
} from "@/components/common/InfoComponents";
import {
  Heart,
  ShieldCheck,
  Building2,
  Zap,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  History,
} from "lucide-react";
import brandStoryHero from "@/assets/brand-story-hero.png";
import { motion, useScroll, useTransform } from "framer-motion";
import SideFloral from "@/components/pages-components/home/SideFloral";
import Link from "next/link";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } };
const stagger = (i: number) => ({ transition: { delay: i * 0.08 + 0.2 } });

export default function BrandStoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 0.15], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2], [0.4, 1]);

  return (
    <InfoPageLayout
      heroTitle="Brand Story"
      heroSubtitle="VenueForEvent.com"
      heroImage={brandStoryHero.src}
      heroDescription="Where Every Celebration Finds Its Perfect Beginning"
      hideWave={true}
    >
      <div ref={containerRef} className="relative">
        {/* Opening section – screenshot-style: title + florals left/right */}
        <section className="relative bg-[hsl(var(--ivory))] pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
          <SideFloral side="left" className="top-8 md:top-12 opacity-90" />
          <SideFloral side="right" className="top-8 md:top-12 opacity-90" />

          <motion.div
            style={{ y, opacity }}
            className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-accent text-2xl md:text-3xl text-wine mb-6"
            >
              Every Event Begins With a Dream
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-12 md:mb-16"
            >
              Every unforgettable event begins quietly — with a vision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-4 text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto"
            >
              <p>A bride imagining her wedding venue glowing under soft lights.</p>
              <p>A founder planning a corporate event that inspires innovation.</p>
              <p>A family searching for the perfect banquet hall to celebrate a milestone birthday.</p>
              <p>A global team coordinating a conference venue that reflects their ambition.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-14"
            >
              <Link
                href="#our-work"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-wine/30 bg-white/80 text-wine font-heading font-semibold text-lg hover:bg-wine hover:text-white hover:border-wine transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                See Our Work
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Quote block – full width */}
        <section id="our-work" className="relative bg-dark-accent py-20 md:py-28">
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-heading text-champagne italic leading-relaxed">
              Before the invitations are sent, before the décor is installed, before the first guest arrives — there is a search. A search for the right space. The right atmosphere. The right partners. That search is often overwhelming. And that is why VenueForEvent.com was created.
            </p>
          </motion.div>
        </section>

        {/* The Gap We Saw – creative two-column with scroll reveal */}
        <SectionWrapper variant="white" className="py-24 md:py-32 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem]">
          <SideFloral side="left" className="top-4 opacity-40" />
          <SideFloral side="right" className="top-4 opacity-40" />
          <div className="relative z-10">
            <motion.h2
              {...fadeUp}
              className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
            >
              The Gap We Saw
            </motion.h2>
            <motion.p {...fadeUp} className="text-center text-wine font-accent text-xl mb-16">
              Fragmentation to Unification
            </motion.p>
            <motion.p
              {...fadeUp}
              className="text-xl md:text-2xl text-muted-foreground text-center leading-relaxed italic max-w-4xl mx-auto mb-16"
            >
              The event industry in India is vibrant, emotional, and deeply rooted in culture. From grand destination wedding celebrations to high-impact business events, from elegant luxury hotels to open-air party lawns, the diversity of spaces is extraordinary. Yet the discovery process remained fragmented.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div {...fadeUp} {...stagger(0)} className="group">
                <Tilt>
                  <div className="p-10 md:p-12 rounded-[3rem] bg-ivory/70 border border-champagne/20 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <SimpleChecklist
                      columns={1}
                      items={[
                        "Hosts spent hours browsing multiple platforms.",
                        "Venue owners struggled with visibility.",
                        "Event planners faced pricing confusion.",
                        "Service providers competed without clarity.",
                      ]}
                    />
                  </div>
                </Tilt>
              </motion.div>
              <motion.div {...fadeUp} {...stagger(1)} className="group">
                <Tilt>
                  <div className="p-10 md:p-12 rounded-[3rem] bg-wine/5 border border-wine/15 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
                      Finding reliable event venues and trusted event services required endless calls, scattered information, and uncertainty. We believed it could be better. We believed event booking should feel as seamless as the celebration itself.
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Birth of a Smarter Event Marketplace */}
        <SectionWrapper
          variant="ivory"
          withDecorations
          className="py-24 md:py-32 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]"
        >
          <OrnateTitle title="The Birth of a Smarter Event Marketplace" accent="A Unified Ecosystem" />
          <ContentBlock align="center" width="full">
            <p className="text-2xl leading-relaxed text-muted-foreground mb-12 italic">
              VenueForEvent.com was built with a clear purpose: To simplify venue discovery and bring structure, transparency, and trust into the event planning journey.
            </p>
            <p className="text-xl text-wine font-bold mb-8">We envisioned a modern event marketplace where:</p>
            <SimpleChecklist
              columns={2}
              items={[
                "Wedding venues and corporate event spaces are easily discoverable.",
                "Banquet halls, farmhouses, and exhibition venues are presented with clarity.",
                "Event vendors and professional event partners are accessible in one trusted ecosystem.",
                "Hosts can compare, evaluate, and connect confidently.",
              ]}
            />
          </ContentBlock>
          <motion.div {...fadeUp} className="mt-16">
            <StepGrid
              steps={[
                { title: "Technology", desc: "Technology was our foundation.", icon: Zap },
                { title: "Trust", desc: "Trust was our promise.", icon: ShieldCheck },
                { title: "Community", desc: "Community was our goal.", icon: Users },
              ]}
            />
          </motion.div>
        </SectionWrapper>

        {/* Our Mission – parallax section */}
        <SectionWrapper
          variant="white"
          className="py-28 md:py-36 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem]"
          parallaxImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
        >
          <OrnateTitle title="Our Mission" accent="Transforming Discovery" />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <motion.p {...fadeUp} className="text-2xl md:text-3xl font-heading text-wine italic leading-relaxed">
              Our mission is simple yet powerful: To connect people with the right celebration spaces and event service providers through a transparent, efficient, and professional digital platform.
            </motion.p>
            <p className="text-xl text-muted-foreground italic">We aim to transform the way India discovers:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
              <SimpleChecklist
                columns={1}
                items={[
                  "Wedding planning solutions",
                  "Corporate meetings spaces",
                  "Networking events venues",
                  "Reception venues",
                  "Birthday party venues",
                  "Product launch venues",
                  "Social event spaces",
                ]}
              />
            </div>
            <motion.p {...fadeUp} className="text-xl text-muted-foreground font-medium italic pt-8">
              We are not just listing properties. We are building meaningful connections.
            </motion.p>
          </div>
        </SectionWrapper>

        {/* Emotion – dark section with cards */}
        <SectionWrapper
          variant="dark"
          className="py-28 md:py-36 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem]"
          withDecorations
        >
          <OrnateTitle title="The Emotion Behind Every Celebration" accent="Moments That Matter" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "A wedding venue",
                text: "A wedding venue is not just a location — it becomes the backdrop of vows, laughter, and lifelong promises.",
                icon: Heart,
              },
              {
                title: "A conference venue",
                text: "A conference venue is not just a hall — it becomes a space where ideas are born, strategies are shaped, and partnerships are formed.",
                icon: TrendingUp,
              },
              {
                title: "An anniversary venue",
                text: "An anniversary venue is not just décor and seating — it is a celebration of time, love, and shared journeys.",
                icon: Sparkles,
              },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} {...stagger(i)} className="group">
                <Tilt>
                  <div className="p-10 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="h-16 w-16 rounded-2xl bg-white/10 text-champagne flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h4 className="font-heading text-xl font-bold mb-4 text-champagne">{item.title}</h4>
                    <p className="text-lg text-white/70 leading-relaxed italic">{item.text}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="mt-16 text-center text-xl text-white/80 italic max-w-3xl mx-auto">
            At VenueForEvent.com, we understand this emotional depth. That is why we approach event hosting and venue booking with care, responsibility, and respect for the significance of every occasion.
          </motion.p>
        </SectionWrapper>

        {/* For the Dreamers and the Doers – side florals again */}
        <section className="relative bg-[hsl(var(--ivory))] py-24 md:py-32 overflow-hidden">
          <SideFloral side="left" className="top-12 opacity-70" />
          <SideFloral side="right" className="top-12 opacity-70" />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <OrnateTitle title="For the Dreamers and the Doers" accent="Two Communities, One Vision" />
            <motion.p {...fadeUp} className="text-center text-xl text-muted-foreground italic mb-16 max-w-2xl mx-auto">
              We built VenueForEvent.com for two equally important communities.
            </motion.p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              <motion.div {...fadeUp} {...stagger(0)} className="group">
                <Tilt>
                  <div className="p-12 md:p-16 rounded-[3rem] bg-white border border-champagne/10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    <SubTitle className="text-wine flex items-center gap-4">
                      <Users className="h-8 w-8" /> For Event Hosts
                    </SubTitle>
                    <p className="text-muted-foreground italic mb-8 leading-relaxed">
                      We help individuals, families, corporations, and planners:
                    </p>
                    <SimpleChecklist
                      columns={1}
                      items={[
                        "Discover premium venues and affordable venues alike",
                        "Compare amenities, capacity, and location",
                        "Connect directly with decision-makers",
                        "Explore complete event solutions",
                        "Simplify event coordination",
                      ]}
                    />
                    <p className="mt-8 text-muted-foreground italic leading-relaxed">
                      Whether it is a destination wedding, a corporate event, a product launch, or a private celebration — we aim to make venue search intuitive and stress-free. You deserve clarity. You deserve efficiency. You deserve confidence.
                    </p>
                  </div>
                </Tilt>
              </motion.div>
              <motion.div {...fadeUp} {...stagger(1)} className="group">
                <Tilt>
                  <div className="p-12 md:p-16 rounded-[3rem] bg-dark-accent text-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-white/10">
                    <SubTitle className="text-champagne m-0 flex items-center gap-4">
                      <Building2 className="h-8 w-8" /> For Venue Owners & Service Providers
                    </SubTitle>
                    <p className="text-white/80 italic mb-8 leading-relaxed">
                      Behind every remarkable event venue stands a passionate team. From boutique resorts and luxury hotels to large-scale banquet halls and party lawns, venue owners invest heavily in hospitality, design, and guest experience. Yet visibility in a competitive hospitality marketplace is challenging.
                    </p>
                    <p className="text-champagne font-medium mb-4">VenueForEvent.com supports:</p>
                    <SimpleChecklist
                      columns={1}
                      items={[
                        "Venue listings India",
                        "Event service providers",
                        "Caterers",
                        "Event decorators",
                        "Wedding photographers",
                        "Audio visual services professionals",
                        "Event management companies",
                      ]}
                    />
                    <p className="mt-8 text-white/80 italic leading-relaxed">
                      We offer digital exposure, structured presentation, and genuine event leads to help businesses grow sustainably. Your space deserves recognition. Your services deserve the right audience.
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Building Trust */}
        <SectionWrapper
          variant="white"
          className="py-24 md:py-32 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem]"
          parallaxImage="https://images.unsplash.com/photo-1540575861501-7ce0e1d1aa2b?q=80&w=2070&auto=format&fit=crop"
        >
          <OrnateTitle title="Building Trust in the Event Industry" accent="Foundation of Every Celebration" />
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <motion.p {...fadeUp} className="text-xl text-muted-foreground italic leading-relaxed text-center">
              Trust is the foundation of every successful celebration. Hosts trust venues with their most meaningful occasions. Businesses trust event planners with brand reputation. Families trust service providers with cherished memories.
            </motion.p>
            <motion.div {...fadeUp}>
              <Tilt>
                <div className="p-12 md:p-16 rounded-[3rem] bg-wine/10 border border-wine/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <p className="text-xl font-heading text-wine mb-8">VenueForEvent.com is committed to strengthening this trust by:</p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Encouraging verified listings",
                      "Promoting transparent communication",
                      "Supporting professional standards",
                      "Creating a trusted venue network",
                    ]}
                  />
                  <p className="mt-10 text-muted-foreground italic text-lg">
                    We are continuously refining our event technology to ensure smoother interactions, faster responses, and clearer information. Because when planning becomes easier, creativity flourishes.
                  </p>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Technology + Transparency – gradient */}
        <SectionWrapper variant="gradient" className="py-24 md:py-32 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div {...fadeUp} {...stagger(0)}>
              <ContentBlock title="Technology With a Human Heart" accent="Empower, Not Complicate" width="full">
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                  We believe technology should empower, not complicate. Our digital event platform is designed to simplify: Venue comparison, Inquiry management, Event packages exploration, Vendor connections, Hospitality platform engagement.
                </p>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  But behind the interface is a deeply human mission — to support people during moments that truly matter. From large MICE events to intimate gatherings, from exhibition venues to celebration spaces, every listing represents someone's dream and someone's business. We treat both with equal respect.
                </p>
              </ContentBlock>
            </motion.div>
            <motion.div {...fadeUp} {...stagger(1)}>
              <ContentBlock title="Transparency as Our Standard" accent="Clarity Builds Confidence" width="full">
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                  We encourage detailed descriptions, accurate images, and realistic expectations. We understand that event planning services require clarity in: Capacity, Facilities, Location, Accessibility, Infrastructure.
                </p>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  By promoting organized information, we help reduce uncertainty and enable informed decision-making. A smoother process means a more joyful experience.
                </p>
              </ContentBlock>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Vision + Why We Exist + Community + Promise + Journey */}
        <SectionWrapper variant="ivory" className="py-24 md:py-32 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem]" withDecorations>
          <OrnateTitle title="Our Vision for the Future" accent="The Road Ahead" />
          <div className="max-w-4xl mx-auto space-y-10">
            <motion.p {...fadeUp} className="text-xl text-muted-foreground italic leading-relaxed text-center">
              We envision VenueForEvent.com becoming India's most reliable event booking platform — a comprehensive ecosystem that unites: Event venues, Event vendors, Professional event partners, Business growth platform solutions, Hospitality innovators.
            </motion.p>
            <motion.p {...fadeUp} className="text-xl text-muted-foreground italic leading-relaxed text-center">
              Our long-term vision includes expanding into more cities, empowering more venue owners, and continuously upgrading our event coordination platform to meet evolving expectations. As the event industry grows, so will we — responsibly, sustainably, and with integrity.
            </motion.p>
          </div>
        </SectionWrapper>

        <SectionWrapper variant="white" className="py-24 md:py-32 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem]">
          <OrnateTitle title="Why We Exist" accent="Purpose" />
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <motion.p {...fadeUp} className="text-2xl text-wine font-heading italic leading-relaxed">
              Because celebrations define life. They mark beginnings, achievements, partnerships, growth, and love.
            </motion.p>
            <SimpleChecklist
              columns={1}
              items={[
                "Because businesses need inspiring spaces for corporate meetings and networking events.",
                "Because families deserve joyful and well-organized social event spaces.",
                "Because professionals in the hospitality industry deserve visibility and opportunity.",
              ]}
            />
            <motion.p {...fadeUp} className="text-xl text-muted-foreground italic">
              We exist to bring all of them together — under one trusted digital roof.
            </motion.p>
          </div>

          <motion.div {...fadeUp} className="mt-24">
            <OrnateTitle title="A Community, Not Just a Platform" accent="Growing Together" />
            <Tilt>
              <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-[3rem] bg-ivory/70 border border-champagne/20 shadow-xl">
                <p className="text-xl text-muted-foreground italic mb-8 leading-relaxed text-center">
                  VenueForEvent.com is more than an online venue directory. It is a growing community of: Event professionals, Hospitality leaders, Creative planners, Passionate venue owners, Ambitious entrepreneurs, Families celebrating milestones.
                </p>
                <p className="text-xl text-wine font-heading italic text-center leading-relaxed">
                  Each listing is a story. Each inquiry is a possibility. Each confirmed booking is a memory in the making.
                </p>
              </div>
            </Tilt>
          </motion.div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeUp} {...stagger(0)} className="group">
              <Tilt>
                <div className="p-10 rounded-[3rem] bg-white border border-champagne/10 h-full shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="mb-8 h-16 w-16 rounded-2xl bg-ivory text-wine flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-all duration-500 shadow-inner">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">Our Promise</h3>
                  <p className="text-sm text-muted-foreground mb-4 italic">We promise to:</p>
                  <SimpleChecklist
                    columns={1}
                    items={[
                      "Uphold professionalism",
                      "Support transparency",
                      "Encourage responsible partnerships",
                      "Strengthen the event industry India ecosystem",
                      "Deliver reliable event booking services",
                    ]}
                  />
                  <p className="mt-6 text-sm text-muted-foreground italic">We promise to remain committed to quality, innovation, and integrity.</p>
                </div>
              </Tilt>
            </motion.div>
            <motion.div {...fadeUp} {...stagger(1)} className="group">
              <Tilt>
                <div className="p-10 rounded-[3rem] bg-white border border-champagne/10 h-full shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="mb-8 h-16 w-16 rounded-2xl bg-ivory text-wine flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-all duration-500 shadow-inner">
                    <History className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">The Journey Ahead</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    Our journey has only begun. As we continue expanding our hospitality marketplace and enhancing our digital infrastructure, our commitment remains clear: To make venue discovery smarter. To make event planning simpler. To make partnerships stronger. Because behind every successful event is the right space — and behind every right space should be the right platform.
                  </p>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Final – Where Every Celebration Begins */}
        <SectionWrapper
          variant="dark"
          className="py-28 md:py-36 -mt-1 rounded-t-[3rem] md:rounded-t-[4rem]"
          withDecorations
          id="final-branding"
        >
          <SideFloral side="left" variant="light" className="top-8 opacity-50" />
          <SideFloral side="right" variant="light" className="top-8 opacity-50" />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
            <OrnateTitle title="Where Every Celebration Begins" accent="Heart of the Marketplace" />
            <motion.p {...fadeUp} className="text-2xl md:text-3xl text-white/90 italic leading-relaxed">
              VenueForEvent.com was built on belief. It grows on trust. It thrives on relationships. And it exists for one reason:
            </motion.p>
            <motion.p {...fadeUp} className="text-2xl md:text-3xl font-heading text-champagne leading-relaxed">
              To ensure that when you imagine your perfect event — finding the perfect venue is the easiest part.
            </motion.p>
            <div className="pt-12 border-t border-white/10">
              <h4 className="font-heading text-4xl md:text-5xl font-heavy text-white uppercase tracking-[0.2em] mb-4">
                VenueForEvent.com
              </h4>
              <p className="font-heading text-xl md:text-2xl text-champagne italic">
                Connecting Dreams with Spaces. Creating Moments that Matter.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </InfoPageLayout>
  );
}
