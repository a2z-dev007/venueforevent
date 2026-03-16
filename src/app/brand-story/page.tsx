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
import parallax1 from "@/assets/celebration.jpg";
import parallax2 from "@/assets/banquet-hall.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import SideFloral from "@/components/pages-components/home/SideFloral";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};
const stagger = (i: number) => ({ transition: { delay: i * 0.08 + 0.2 } });

export default function BrandStoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
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
        <SectionWrapper
          variant="ivory"
          className="pt-12 md:pt-24 pb-16 md:pb-24 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        >
          <SideFloral side="left" className="top-8 md:top-12 opacity-90" />
          <SideFloral side="right" className="top-8 md:top-12 opacity-90" />

          <motion.div
            style={{ y, opacity }}
            className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center"
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
              <p>
                A bride imagining her wedding venue glowing under soft lights.
              </p>
              <p>
                A founder planning a corporate event that inspires innovation.
              </p>
              <p>
                A family searching for the perfect banquet hall to celebrate a
                milestone birthday.
              </p>
              <p>
                A global team coordinating a conference venue that reflects
                their ambition.
              </p>
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
        </SectionWrapper>

        <SectionWrapper
          variant="dark"
          id="our-work"
          className="relative pt-16 pb-24 md:pt-20 md:pb-32 -mt-10 md:-mt-16 z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
        >
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto px-4 md:px-6 text-center"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-heading text-champagne leading-relaxed">
              Before the invitations are sent, before the décor is installed,
              before the first guest arrives — there is a search. A search for
              the right space. The right atmosphere. The right partners. That
              search is often overwhelming. And that is why VenueForEvent.com
              was created.
            </p>
          </motion.div>
        </SectionWrapper>

        {/* The Gap We Saw – creative two-column with scroll reveal */}
        <SectionWrapper
          variant="white"
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        >
          <SideFloral side="left" className="top-4 opacity-40" />
          <SideFloral side="right" className="top-4 opacity-40" />
          <div className="relative z-10">
            <motion.h2
              {...fadeUp}
              className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
            >
              The Gap We Saw
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="text-center text-wine font-accent text-xl mb-16"
            >
              Fragmentation to Unification
            </motion.p>
            <motion.p
              {...fadeUp}
              className="text-xl md:text-2xl text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto mb-16"
            >
              The event industry in India is vibrant, emotional, and deeply
              rooted in culture. From grand destination wedding celebrations to
              high-impact business events, from elegant luxury hotels to
              open-air party lawns, the diversity of spaces is extraordinary.
              Yet the discovery process remained fragmented.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div {...fadeUp} {...stagger(0)} className="group h-full">
                <Tilt className="h-full">
                  <div className="px-5 py-8 md:p-12 rounded-[3rem] bg-ivory/70 border border-champagne/20 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
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
              <motion.div {...fadeUp} {...stagger(1)} className="group h-full">
                <Tilt className="h-full">
                  <div className="px-5 py-8 md:p-12 rounded-[3rem] bg-wine/5 border border-wine/15 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <p className="text-lg md:text-lg leading-relaxed text-muted-foreground italic">
                      Finding reliable event venues and trusted event services
                      required endless calls, scattered information, and
                      uncertainty. We believed it could be better. We believed
                      event booking should feel as seamless as the celebration
                      itself.
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
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
        >
          <OrnateTitle
            title="The Birth of a Smarter Event Marketplace"
            accent="A Unified Ecosystem"
          />

          <div className="max-w-5xl mx-auto px-4 md:px-6 mb-20">
            <motion.p
              {...fadeUp}
              className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-center mb-16"
            >
              VenueForEvent.com was built with a clear purpose: To{" "}
              <span className="text-wine font-semibold ">
                simplify venue discovery
              </span>{" "}
              and bring structure, transparency, and trust into the event
              planning journey.
            </motion.p>

            <motion.div
              {...fadeUp}
              className="relative pt-14 pb-16 px-4 md:p-16 rounded-[4rem] bg-white border border-champagne/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden group"
            >
              {/* Themed background accents */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-wine/5 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-wine/10 transition-all duration-1000" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-champagne/10 rounded-full blur-[100px] -ml-40 -mb-40 group-hover:bg-champagne/20 transition-all duration-1000" />

              <div className="relative z-10">
                <div className="flex flex-col items-center mb-12 text-center">
                  <div className="h-12 w-12 rounded-2xl bg-ivory text-wine flex items-center justify-center mb-6 shadow-sm border border-champagne/10 group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-wine">
                    We envisioned a modern event marketplace where:
                  </h3>
                  <div className="h-1 w-20 bg-wine/10 rounded-full mt-6" />
                </div>

                <SimpleChecklist
                  columns={2}
                  items={[
                    "Wedding venues and corporate event spaces are easily discoverable.",
                    "Banquet halls, farmhouses, and exhibition venues are presented with clarity.",
                    "Event vendors and professional event partners are accessible in one trusted ecosystem.",
                    "Hosts can compare, evaluate, and connect confidently.",
                  ]}
                />
              </div>
            </motion.div>
          </div>
          <motion.div {...fadeUp} className="mt-16">
            <StepGrid
              steps={[
                {
                  title: "Technology",
                  desc: "Technology was our foundation.",
                  icon: Zap,
                },
                {
                  title: "Trust",
                  desc: "Trust was our promise.",
                  icon: ShieldCheck,
                },
                {
                  title: "Community",
                  desc: "Community was our goal.",
                  icon: Users,
                },
              ]}
            />
          </motion.div>
        </SectionWrapper>

        {/* Our Mission – parallax section */}
        <SectionWrapper
          variant="white"
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
          parallaxImage={parallax1.src}
        >
          <OrnateTitle title="Our Mission" accent="Transforming Discovery" />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <motion.p
              {...fadeUp}
              className="text-2xl md:text-3xl font-heading text-wine leading-relaxed"
            >
              Our mission is simple yet powerful: To connect people with the
              right celebration spaces and event service providers through a
              transparent, efficient, and professional digital platform.
            </motion.p>
            <p className="text-xl text-muted-foreground italic">
              We aim to transform the way India discovers:
            </p>
            <div className="max-w-3xl mx-auto px-4">
              <SimpleChecklist
                columns={2}
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
            <motion.p
              {...fadeUp}
              className="text-xl text-muted-foreground font-medium italic pt-8"
            >
              We are not just listing properties. We are building meaningful
              connections.
            </motion.p>
          </div>
        </SectionWrapper>

        {/* Emotion – dark section with cards */}
        <SectionWrapper
          variant="dark"
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
          withDecorations
        >
          <OrnateTitle
            title="The Emotion Behind Every Celebration"
            accent="Moments That Matter"
            variant="dark"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
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
                <Tilt className="h-full">
                  <div className="p-6 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 h-full flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="h-16 w-16 rounded-2xl bg-white/10 text-champagne flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h4 className="font-heading text-xl font-bold mb-4 text-champagne">
                      {item.title}
                    </h4>
                    <p className="text-lg text-white/70 leading-relaxed italic">
                      {item.text}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
          <motion.p
            {...fadeUp}
            className="mt-16 text-center text-xl text-white/80 max-w-3xl mx-auto"
          >
            At VenueForEvent.com, we understand this emotional depth. That is
            why we approach event hosting and venue booking with care,
            responsibility, and respect for the significance of every occasion.
          </motion.p>
        </SectionWrapper>

        {/* For the Dreamers and the Doers – side florals again */}
        <SectionWrapper
          variant="ivory"
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          <SideFloral side="left" className="top-12 opacity-70" />
          <SideFloral side="right" className="top-12 opacity-70" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
            <OrnateTitle
              title="For the Dreamers and the Doers"
              accent="Two Communities, One Vision"
            />
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.p
                {...fadeUp}
                className="text-xl text-muted-foreground italic"
              >
                We built VenueForEvent.com for two equally important
                communities.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              <motion.div {...fadeUp} {...stagger(0)} className="group">
                <Tilt className="h-full">
                  <div className="pt-10 pb-16 px-6 md:p-14 rounded-[3.5rem] bg-white border border-champagne/10 shadow-luxury hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-wine/5 rounded-full blur-3xl pointer-events-none" />
                    <SubTitle className="text-wine flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 md:gap-6 mb-8 text-center sm:text-left">
                      <div className="p-3 md:p-4 rounded-2xl bg-ivory border border-champagne/20 shrink-0">
                        <Users className="h-8 w-8 md:h-10 md:w-10" />
                      </div>
                      <span className="text-2xl md:text-3xl lg:text-4xl leading-tight">For Event Hosts</span>
                    </SubTitle>
                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-0 sm:border-l-2 border-wine/20 pl-0 sm:pl-6 text-center sm:text-left">
                      We help individuals, families, corporations, and planners
                      discover clarity in the chaos of event planning.
                    </p>
                    <div className="bg-ivory/30 p-6 md:p-8 rounded-3xl border border-champagne/10 mb-10">
                      <p className="text-wine/80 font-bold text-xs uppercase tracking-widest mb-6 px-1 text-center sm:text-left">
                        VenueForEvent.com provides:
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
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed text-sm text-center sm:text-left">
                      Whether it is a destination wedding, a corporate event, or
                      a private celebration — we aim to make venue search
                      intuitive and stress-free.{" "}
                      <span className="text-wine font-bold">
                        You deserve confidence in every choice.
                      </span>
                    </p>
                  </div>
                </Tilt>
              </motion.div>

              <motion.div {...fadeUp} {...stagger(1)} className="group">
                <Tilt className="h-full">
                  <div className="pt-10 pb-16 px-6 md:p-14 rounded-[3.5rem] bg-dark-accent text-white shadow-luxury hover:shadow-2xl transition-all duration-500 h-full border border-white/10 relative overflow-hidden">
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-wine/20 rounded-full blur-[100px] pointer-events-none" />
                    <SubTitle className="text-champagne flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 md:gap-6 mb-8 text-center sm:text-left">
                      <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                        <Building2 className="h-8 w-8 md:h-10 md:w-10" />
                      </div>
                      <span className="text-2xl md:text-3xl lg:text-4xl leading-tight">For Venue Owners</span>
                    </SubTitle>
                    <p className="text-lg text-white/70 mb-10 leading-relaxed border-l-0 sm:border-l-2 border-champagne/30 pl-0 sm:pl-6 text-center sm:text-left">
                      Visibility in a competitive hospitality marketplace is
                      challenging. We bridge the gap between excellence and
                      discovery.
                    </p>
                    <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/5 mb-10">
                      <p className="text-champagne font-bold text-xs uppercase tracking-widest mb-6 px-1 text-center sm:text-left">
                        VenueForEvent.com supports:
                      </p>
                      <SimpleChecklist
                        variant="dark"
                        columns={1}
                        items={[
                          "Venue listings across India",
                          "Event service providers & Caterers",
                          "Event decorators & Designers",
                          "Wedding photographers & Media",
                          "Audio visual & Tech professionals",
                          "Full-scale management companies",
                        ]}
                      />
                    </div>
                    <p className="text-white/60 italic leading-relaxed text-sm text-center sm:text-left">
                      From palace weddings to high-tech boardroom meetings — we
                      provide the stage.{" "}
                      <span className="text-champagne font-bold">
                        Your venue, our platform, endless possibilities.
                      </span>
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Building Trust */}
        <SectionWrapper
          variant="white"
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
          parallaxImage={parallax2.src}
          withDecorations
        >
          <OrnateTitle
            title="Building Trust in the Event Industry"
            accent="Foundation of Every Celebration"
          />
          <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-16 relative z-10">
            <motion.p
              {...fadeUp}
              className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed text-center max-w-4xl mx-auto"
            >
              Trust is the foundation of every successful celebration. Hosts
              trust venues with their most meaningful occasions. Businesses
              trust event planners with brand reputation. Families trust service
              providers with cherished memories.
            </motion.p>

            <motion.div {...fadeUp}>
              <Tilt className="h-full">
                <div className="pt-14 pb-16 px-4 md:p-16 rounded-[4rem] bg-white/70 backdrop-blur-xl border border-wine/10 shadow-luxury hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-wine/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-champagne/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

                  <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="lg:w-1/2 space-y-8">
                      <h3 className="text-3xl md:text-5xl font-heading font-bold text-wine leading-tight">
                        Strengthening the{" "}
                        <span className="text-champagne-gold">
                          Bonds of Trust
                        </span>
                      </h3>
                      <div className="w-20 h-1 bg-champagne/40 rounded-full" />
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        VenueForEvent.com is more than a platform — it's a
                        commitment to integrity. We understand that every
                        inquiry represents a dream, and we've built our
                        ecosystem to protect that vision.
                      </p>
                    </div>

                    <div className="lg:w-1/2 bg-ivory/40 p-6 md:p-12 rounded-[3.5rem] border border-champagne/20 shadow-inner w-full">
                      <SimpleChecklist
                        columns={1}
                        items={[
                          "Encouraging verified and detailed listings",
                          "Promoting transparent, direct communication",
                          "Supporting the highest professional standards",
                          "Creating an elite, trusted venue network",
                        ]}
                      />
                    </div>
                  </div>

                  <div className="mt-16 pt-12 border-t border-wine/10 text-center relative z-10">
                    <p className="text-xl md:text-3xl font-heading text-wine italic max-w-4xl mx-auto leading-relaxed">
                      "When planning becomes easier, creativity flourishes."
                    </p>
                    <p className="mt-6 text-muted-foreground italic text-lg max-w-2xl mx-auto">
                      We are continuously refining our event technology to
                      ensure smoother interactions, faster responses, and
                      clearer information for everyone involved.
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Technology + Transparency – gradient */}
        <SectionWrapper
          variant="gradient"
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto px-4 md:px-6">
            <motion.div {...fadeUp} {...stagger(0)}>
              <ContentBlock
                title="Technology With a Human Heart"
                accent="Empower, Not Complicate"
                width="full"
              >
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                  We believe technology should empower, not complicate. Our
                  digital event platform is designed to simplify: Venue
                  comparison, Inquiry management, Event packages exploration,
                  Vendor connections, Hospitality platform engagement.
                </p>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  But behind the interface is a deeply human mission — to
                  support people during moments that truly matter. From large
                  MICE events to intimate gatherings, from exhibition venues to
                  celebration spaces, every listing represents someone's dream
                  and someone's business. We treat both with equal respect.
                </p>
              </ContentBlock>
            </motion.div>
            <motion.div {...fadeUp} {...stagger(1)}>
              <ContentBlock
                title="Transparency as Our Standard"
                accent="Clarity Builds Confidence"
                width="full"
              >
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                  We encourage detailed descriptions, accurate images, and
                  realistic expectations. We understand that event planning
                  services require clarity in: Capacity, Facilities, Location,
                  Accessibility, Infrastructure.
                </p>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  By promoting organized information, we help reduce uncertainty
                  and enable informed decision-making. A smoother process means
                  a more joyful experience.
                </p>
              </ContentBlock>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Vision + Why We Exist + Community + Promise + Journey */}
        <SectionWrapper
          variant="ivory"
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.15)]"
          withDecorations
        >
          <OrnateTitle
            title="Our Vision for the Future"
            accent="The Road Ahead"
          />
          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10">
            <motion.p
              {...fadeUp}
              className="text-xl text-muted-foreground italic leading-relaxed text-center"
            >
              We envision VenueForEvent.com becoming India's most reliable event
              booking platform — a comprehensive ecosystem that unites: Event
              venues, Event vendors, Professional event partners, Business
              growth platform solutions, Hospitality innovators.
            </motion.p>
            <motion.p
              {...fadeUp}
              className="text-xl text-muted-foreground italic leading-relaxed text-center"
            >
              Our long-term vision includes expanding into more cities,
              empowering more venue owners, and continuously upgrading our event
              coordination platform to meet evolving expectations. As the event
              industry grows, so will we — responsibly, sustainably, and with
              integrity.
            </motion.p>
          </div>
        </SectionWrapper>

        <SectionWrapper
          variant="white"
          className="py-24 md:py-32 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
          withDecorations
        >
          <OrnateTitle title="Why We Exist" accent="Purpose" />
          <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-20 relative">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <motion.p
                {...fadeUp}
                className="text-3xl md:text-5xl text-wine font-heading leading-tight"
              >
                "Because celebrations define life. They mark beginnings,
                achievements, partnerships, growth, and love."
              </motion.p>
              <div className="h-1.5 w-24 bg-champagne/30 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  text: "Businesses need inspiring spaces for corporate meetings, high-stakes networking, and global vision-sharing.",
                  bg: "bg-ivory/40",
                },
                {
                  icon: Heart,
                  text: "Families deserve joyful, well-organized social event spaces where the only focus is on celebrating love and milestones.",
                  bg: "bg-wine/5",
                },
                {
                  icon: Award,
                  text: "Professionals in the hospitality industry deserve the visibility and opportunities that reflect their excellence and passion.",
                  bg: "bg-ivory/40",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  {...stagger(i)}
                  className="group"
                >
                  <Tilt className="h-full">
                    <div
                      className={cn(
                        "p-6 md:p-12 rounded-[3.5rem] border border-champagne/10 h-full flex flex-col items-center text-center md:items-start md:text-left hover:bg-white hover:border-wine/20 transition-all duration-500 shadow-soft hover:shadow-luxury relative overflow-hidden",
                        item.bg,
                      )}
                    >
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-wine/5 rounded-full blur-2xl group-hover:bg-wine/10 transition-all duration-700" />
                      <div className="h-20 w-20 rounded-3xl bg-white text-wine flex items-center justify-center mb-10 group-hover:bg-wine group-hover:text-white transition-all duration-500 shadow-[var(--shadow-soft)] border border-champagne/10 relative z-10">
                        <item.icon size={40} />
                      </div>
                      <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed relative z-10">
                        {item.text}
                      </p>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp} className="text-center pt-8 px-2 md:px-4">
              <div className="flex md:inline-flex items-center justify-center gap-4 px-4 md:px-8 py-5 rounded-[2rem] md:rounded-full bg-ivory/80 border border-champagne/20 text-lg md:text-2xl text-muted-foreground font-heading shadow-inner w-full md:w-auto">
                <Sparkles size={24} className="text-champagne shrink-0" />
                <span>
                  We exist to bring all of them together — under one trusted
                  digital roof.
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-20 md:mt-32 mb-16 md:mb-24">
            <OrnateTitle
              title="A Community, Not Just a Platform"
              accent="Growing Together"
            />
            <Tilt>
              <div className="max-w-4xl mx-auto pt-12 pb-14 px-6 md:p-16 rounded-[3rem] bg-ivory/70 border border-champagne/20 shadow-xl">
                <p className="text-xl text-muted-foreground italic mb-8 leading-relaxed text-center">
                  VenueForEvent.com is more than an online venue directory. It
                  is a growing community of: Event professionals, Hospitality
                  leaders, Creative planners, Passionate venue owners, Ambitious
                  entrepreneurs, Families celebrating milestones.
                </p>
                <p className="text-xl text-wine font-heading italic text-center leading-relaxed">
                  Each listing is a story. Each inquiry is a possibility. Each
                  confirmed booking is a memory in the making.
                </p>
              </div>
            </Tilt>
          </motion.div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeUp} {...stagger(0)} className="group">
              <Tilt>
                <div className="pt-12 pb-14 px-6 md:p-10 rounded-[3rem] bg-white border border-champagne/10 h-full shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-start text-left">
                  <div className="mb-8 h-16 w-16 rounded-2xl bg-ivory text-wine flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-all duration-500 shadow-inner">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
                    Our Promise
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    We promise to:
                  </p>
                  <div className="w-full">
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
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground italic">
                    We promise to remain committed to quality, innovation, and
                    integrity.
                  </p>
                </div>
              </Tilt>
            </motion.div>
            <motion.div {...fadeUp} {...stagger(1)} className="group">
              <Tilt>
                <div className="pt-12 pb-14 px-6 md:p-10 rounded-[3rem] bg-white border border-champagne/10 h-full shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-start text-left">
                  <div className="mb-8 h-16 w-16 rounded-2xl bg-ivory text-wine flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-all duration-500 shadow-inner">
                    <History className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
                    The Journey Ahead
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    Our journey has only begun. As we continue expanding our
                    hospitality marketplace and enhancing our digital
                    infrastructure, our commitment remains clear: To make venue
                    discovery smarter. To make event planning simpler. To make
                    partnerships stronger. Because behind every successful event
                    is the right space — and behind every right space should be
                    the right platform.
                  </p>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Final – Where Every Celebration Begins */}
        <SectionWrapper
          variant="dark"
          className="py-28 md:py-36 -mt-10 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
          withDecorations
          id="final-branding"
        >
          <SideFloral
            side="left"
            variant="light"
            className="top-8 opacity-50"
          />
          <SideFloral
            side="right"
            variant="light"
            className="top-8 opacity-50"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center space-y-12">
            <OrnateTitle
              title="Where Every Celebration Begins"
              accent="Heart of the Marketplace"
              variant="dark"
            />
            <motion.p
              {...fadeUp}
              className="text-lg md:text-3xl text-white/90 italic leading-relaxed"
            >
              VenueForEvent.com was built on belief. It grows on trust. It
              thrives on relationships. And it exists for one reason:
            </motion.p>
            <motion.p
              {...fadeUp}
              className="text-lg md:text-3xl font-heading text-champagne leading-relaxed"
            >
              To ensure that when you imagine your perfect event — finding the
              perfect venue is the easiest part.
            </motion.p>
            <div className="pt-12 border-t border-white/10">
              <h4 className="font-heading text-xl md:text-5xl font-heavy text-white uppercase tracking-widest md:tracking-[0.2em] mb-4">
                VenueForEvent.com
              </h4>
              <p className="font-heading text-base md:text-2xl text-champagne italic">
                Connecting Dreams with Spaces. Creating Moments that Matter.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </InfoPageLayout>
  );
}
