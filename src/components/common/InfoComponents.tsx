"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, Sparkles } from "lucide-react";
import FloralDivider from "@/components/pages-components/home/FloralDivider";
import CornerRose from "@/components/pages-components/home/CornerRose";
import MandalaDecor from "@/components/pages-components/home/MandalaDecor";
import FloatingPetals from "@/components/pages-components/home/FloatingPetals";
import { cn } from "@/lib/utils";

/**
 * --- CORE WRAPPERS ---
 */

interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: "ivory" | "white" | "dark" | "gradient" | "transparent";
  className?: string;
  withDecorations?: boolean;
  id?: string;
}

export const SectionWrapper = ({
  children,
  variant = "transparent",
  className,
  withDecorations = false,
  id
}: SectionWrapperProps) => {
  const bgStyles = {
    ivory: "bg-[hsl(var(--ivory))]",
    white: "bg-white",
    dark: "bg-dark-accent text-white",
    gradient: "bg-gradient-to-b from-champagne/5 to-blush/10",
    transparent: "bg-transparent"
  };

  return (
    <section 
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        bgStyles[variant],
        className
      )}
    >
      {withDecorations && (
        <>
          <FloatingPetals count={4} color={variant === "dark" ? "gold" : "rose"} />
          <CornerRose position="top-left" className="opacity-40" />
          <CornerRose position="bottom-right" className="opacity-40" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-5">
             <MandalaDecor size={600} />
          </div>
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  accent?: string;
  children?: React.ReactNode;
  align?: "center" | "left" | "right";
  width?: "prose" | "full" | "medium";
  className?: string;
}

export const SubTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h3 className={cn("font-heading text-2xl font-bold mb-6", className)}>
    {children}
  </h3>
);

export const ContentBlock = ({
  title,
  subtitle,
  accent,
  children,
  align = "left",
  width = "prose",
  className
}: ContentBlockProps) => {
  const alignStyles = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right items-end"
  };

  const widthStyles = {
    prose: "max-w-3xl",
    medium: "max-w-5xl",
    full: "max-w-full"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("flex flex-col mb-12", alignStyles[align], widthStyles[width], className)}
    >
      {accent && <p className="font-accent text-2xl text-champagne mb-2">{accent}</p>}
      {title && (
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          {title}
        </h2>
      )}
      {subtitle && <p className="text-lg mb-8 italic opacity-80">{subtitle}</p>}
      <div className="w-full">
        {children}
      </div>
    </motion.div>
  );
};

/**
 * --- SPECIALIZED LAYOUTS ---
 */

export const AlternatingGrid = ({ 
  items 
}: { 
  items: { title?: string; text: React.ReactNode; image?: string; icon?: LucideIcon }[] 
}) => {
  return (
    <div className="space-y-24">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
            i % 2 !== 0 && "lg:flex-row-reverse"
          )}
        >
          <div className="lg:w-1/2 space-y-6">
            {item.icon && (
              <div className="h-14 w-14 rounded-2xl bg-wine/5 text-wine flex items-center justify-center mb-6">
                <item.icon className="h-7 w-7" />
              </div>
            )}
            {item.title && <h3 className="font-heading text-3xl font-bold">{item.title}</h3>}
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
               {item.text}
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-wine/10 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            {item.image ? (
               <img 
                src={item.image} 
                className="relative z-10 w-full rounded-[3rem] object-cover aspect-[4/3] shadow-2xl" 
                alt={item.title || "Section image"} 
              />
            ) : (
              <div className="relative z-10 w-full rounded-[3rem] aspect-[4/3] bg-champagne/5 border border-champagne/10 flex items-center justify-center opacity-50 shadow-2xl">
                 <MandalaDecor size={200} />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const OrnateTitle = ({ title, accent }: { title: string, accent?: string }) => (
  <div className="mb-16 text-center">
    {accent && <p className="font-accent text-2xl text-champagne mb-2">{accent}</p>}
    <h2 className="font-heading text-4xl md:text-6xl font-heavy text-foreground tracking-tight mb-8">
      {title}
    </h2>
    <FloralDivider variant="wine" />
  </div>
);

export const SimpleChecklist = ({ items, columns = 2 }: { items: string[], columns?: 1 | 2 | 3 }) => (
  <ul className={cn(
    "grid gap-4",
    columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  )}>
    {items.map((item, i) => (
      <motion.li 
        key={i}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="flex items-start gap-3 group"
      >
        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-champagne group-hover:bg-wine group-hover:text-white transition-all duration-300 shadow-sm border border-champagne/10">
           <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
           </svg>
        </div>
        <span className="leading-relaxed group-hover:text-wine transition-colors text-sm opacity-80 group-hover:opacity-100 font-medium">{item}</span>
      </motion.li>
    ))}
  </ul>
);

export const StepGrid = ({ steps }: { steps: { title: string; desc: string; icon: LucideIcon }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {steps.map((step, i) => (
       <motion.div
         key={i}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: i * 0.1 }}
         whileHover={{ y: -8 }}
         className="relative p-10 rounded-[3rem] bg-white border border-champagne/10 hover:shadow-2xl transition-all duration-500 group"
       >
          <div className="absolute top-8 right-8 text-8xl font-black text-champagne/5 group-hover:text-wine/10 transition-colors pointer-events-none">0{i+1}</div>
          <div className="relative z-10 flex flex-col items-center text-center">
             <div className="h-20 w-20 rounded-3xl bg-white text-wine flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[var(--shadow-soft)] border border-champagne/10">
                <step.icon className="h-10 w-10" />
             </div>
             <h4 className="font-heading text-2xl font-bold mb-4">{step.title}</h4>
             <p className="text-sm leading-relaxed italic line-clamp-3 opacity-70 group-hover:opacity-100 transition-opacity">{step.desc}</p>
          </div>
       </motion.div>
     ))}
  </div>
);

export const HighlightedQuote = ({ children }: { children: React.ReactNode }) => (
  <div className="p-10 md:p-16 rounded-[4rem] bg-dark-accent text-white shadow-2xl relative overflow-hidden group mb-12 text-center">
     <div className="absolute top-0 right-0 w-96 h-96 bg-wine opacity-10 blur-[100px] rounded-full group-hover:bg-wine/20 transition-all duration-1000" />
     <div className="relative z-10 text-xl md:text-3xl font-heading font-medium leading-relaxed italic text-champagne drop-shadow-md">
        "{children}"
     </div>
  </div>
);

/**
 * --- COMPATIBILITY WRAPPERS (To prevent breaks) ---
 */

export const InfoSection = ({ title, icon, children, className, variant, maxWidth, align = "center" }: any) => {
  return (
    <SectionWrapper 
      variant={variant === "ivory" ? "ivory" : variant === "glass" ? "gradient" : "transparent"} 
      className={className} 
      withDecorations={variant !== "transparent"}
    >
      <ContentBlock title={title} align={align} width={maxWidth === "4xl" ? "prose" : "medium"}>
        <div className="prose prose-lg text-muted-foreground max-w-none w-full">
          {children}
        </div>
      </ContentBlock>
    </SectionWrapper>
  );
};

export const CreativeList = ({ items }: { items: string[] }) => <SimpleChecklist items={items} />;

export const HighlightCard = ({ icon: Icon, title, content }: any) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="p-10 rounded-[3rem] bg-white border border-champagne/10 shadow-sm hover:shadow-2xl transition-all duration-500 group"
  >
    <div className="mb-8 h-16 w-16 rounded-2xl bg-ivory text-wine flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-all duration-500 shadow-inner">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="font-heading text-xl font-bold mb-4 text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed italic">{content}</p>
  </motion.div>
);

// Better Export Names
export const InfoBlock = ContentBlock;
export const InfoGrid = AlternatingGrid;
export const InfoChecklist = SimpleChecklist;
export const InfoSteps = StepGrid;
export const InfoTitle = OrnateTitle;
export const InfoHighlight = HighlightedQuote;
