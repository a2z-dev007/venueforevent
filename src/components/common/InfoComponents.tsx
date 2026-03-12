"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LucideIcon, Sparkles } from "lucide-react";
import FloralDivider from "@/components/pages-components/home/FloralDivider";
import CornerRose from "@/components/pages-components/home/CornerRose";
import MandalaDecor from "@/components/pages-components/home/MandalaDecor";
import FloatingPetals from "@/components/pages-components/home/FloatingPetals";
import { cn } from "@/lib/utils";

/**
 * --- CORE ELEMENTS ---
 */

export function WaveDivider({
  position = "bottom",
  variant = "white",
  flip = false,
  isMultiWave = false,
}: {
  position?: "top" | "bottom";
  variant?: "white" | "ivory" | "dark" | "gradient" | "transparent";
  flip?: boolean;
  isMultiWave?: boolean;
}) {
  const colors = {
    white: "hsl(var(--background))",
    ivory: "hsl(var(--ivory))",
    dark: "hsl(var(--dark-2))",
    gradient: "hsl(var(--ivory))",
    transparent: "transparent",
  };

  const fillColor = colors[variant as keyof typeof colors] || colors.white;

  return (
    <div
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none",
        position === "top" ? "-top-[1px]" : "-bottom-[1px]",
        flip && "scale-x-[-1]",
      )}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn(
          "relative block w-full h-[60px] md:h-[120px]",
          position === "top" && "rotate-180",
        )}
      >
        {isMultiWave && (
          <>
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,12.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill={fillColor}
              opacity="0.3"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z"
              fill={fillColor}
              opacity="0.5"
            />
          </>
        )}
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,12.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function Tilt({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rX = (mouseY / (height / 2)) * -5;
    const rY = (mouseX / (width / 2)) * 5;
    setRotateX(rX);
    setRotateY(rY);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{ rotateX, rotateY, transformPerspective: 1000 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      <div
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/**
 * --- CORE WRAPPERS ---
 */

interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: "ivory" | "white" | "dark" | "gradient" | "transparent";
  waveVariant?: "ivory" | "white" | "dark" | "gradient" | "transparent";
  className?: string;
  withDecorations?: boolean;
  withWave?: "top" | "bottom" | "both" | "none";
  isMultiWave?: boolean;
  parallaxImage?: string;
  id?: string;
}

export const SectionWrapper = ({
  children,
  variant = "transparent",
  waveVariant,
  className,
  withDecorations = false,
  withWave = "none",
  isMultiWave = false,
  parallaxImage,
  id,
}: SectionWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const bgStyles = {
    ivory: "bg-[hsl(var(--ivory))]",
    white: "bg-white",
    dark: "bg-dark-accent text-white",
    gradient: "bg-gradient-to-b from-champagne/5 to-blush/10",
    transparent: "bg-transparent",
  };

  return (
    <section
      ref={containerRef}
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        bgStyles[variant],
        className,
      )}
    >
      {parallaxImage && (
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y }}
            className="absolute inset-0 h-[120%] -top-[10%]"
          >
            <img
              src={parallaxImage}
              alt=""
              className="h-full w-full object-cover opacity-20 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-background/80" />
          </motion.div>
        </div>
      )}

      {(withWave === "top" || withWave === "both") && (
        <WaveDivider
          position="top"
          variant={waveVariant || variant}
          isMultiWave={isMultiWave}
        />
      )}

      {withDecorations && (
        <>
          <FloatingPetals
            count={4}
            color={variant === "dark" ? "gold" : "rose"}
          />
          <CornerRose position="top-left" className="opacity-40" />
          <CornerRose position="bottom-right" className="opacity-40" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-5">
            <MandalaDecor size={600} />
          </div>
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>

      {(withWave === "bottom" || withWave === "both") && (
        <WaveDivider
          position="bottom"
          variant={waveVariant || variant}
          isMultiWave={isMultiWave}
        />
      )}
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

export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
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
  className,
}: ContentBlockProps) => {
  const alignStyles = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  const widthStyles = {
    prose: "max-w-3xl",
    medium: "max-w-5xl",
    full: "max-w-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col mb-12",
        alignStyles[align],
        widthStyles[width],
        className,
      )}
    >
      {accent && (
        <p className="font-accent text-2xl text-wine mb-2">{accent}</p>
      )}
      {title && (
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          {title}
        </h2>
      )}
      {subtitle && <p className="text-lg mb-8 italic opacity-80">{subtitle}</p>}
      <div className="w-full">{children}</div>
    </motion.div>
  );
};

/**
 * --- SPECIALIZED LAYOUTS ---
 */

export const AlternatingGrid = ({
  items,
}: {
  items: {
    title?: string;
    text: React.ReactNode;
    image?: string;
    icon?: LucideIcon;
  }[];
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
            i % 2 !== 0 && "lg:flex-row-reverse",
          )}
        >
          <div className="lg:w-1/2 space-y-6">
            {item.icon && (
              <div className="h-14 w-14 rounded-2xl bg-wine/5 text-wine flex items-center justify-center mb-6">
                <item.icon className="h-7 w-7" />
              </div>
            )}
            {item.title && (
              <h3 className="font-heading text-3xl font-bold">{item.title}</h3>
            )}
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              {item.text}
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <Tilt>
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
            </Tilt>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const OrnateTitle = ({
  title,
  accent,
}: {
  title: string;
  accent?: string;
}) => (
  <div className="mb-16 text-center">
    {accent && <p className="font-accent text-2xl text-wine mb-2">{accent}</p>}
    <h2 className="font-heading text-4xl md:text-6xl font-heavy text-foreground tracking-tight mb-8">
      {title}
    </h2>
    <FloralDivider variant="wine" />
  </div>
);

export const SimpleChecklist = ({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 1 | 2 | 3;
}) => (
  <ul
    className={cn(
      "grid gap-4",
      columns === 1
        ? "grid-cols-1"
        : columns === 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    )}
  >
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
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="leading-relaxed group-hover:text-wine transition-colors text-sm opacity-80 group-hover:opacity-100 font-medium">
          {item}
        </span>
      </motion.li>
    ))}
  </ul>
);

export const StepGrid = ({
  steps,
}: {
  steps: { title: string; desc: string; icon: LucideIcon }[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
    {steps.map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ y: -8 }}
        className="relative rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group"
      >
        <Tilt>
          <div className="relative p-10 rounded-[3rem] bg-white border border-champagne/10 h-full">
            <div className="absolute top-8 right-8 text-8xl font-black text-champagne/5 group-hover:text-wine/10 transition-colors pointer-events-none">
              0{i + 1}
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-3xl bg-white text-wine flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[var(--shadow-soft)] border border-champagne/10">
                <step.icon className="h-10 w-10" />
              </div>
              <h4 className="font-heading text-2xl font-bold mb-4">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed italic line-clamp-3 opacity-70 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </div>
          </div>
        </Tilt>
      </motion.div>
    ))}
  </div>
);

export const HighlightedQuote = ({
  children,
}: {
  children: React.ReactNode;
}) => (
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

export function InfoSection({
  title,
  icon,
  children,
  className,
  variant,
  maxWidth,
  align = "center",
}: any) {
  return (
    <SectionWrapper
      variant={
        variant === "ivory"
          ? "ivory"
          : variant === "glass"
            ? "gradient"
            : "transparent"
      }
      className={className}
      withDecorations={variant !== "transparent"}
    >
      <ContentBlock
        title={title}
        align={align}
        width={maxWidth === "4xl" ? "prose" : "medium"}
      >
        <div className="prose prose-lg text-muted-foreground max-w-none w-full">
          {children}
        </div>
      </ContentBlock>
    </SectionWrapper>
  );
}

export function CreativeList({ items }: { items: string[] }) {
  return <SimpleChecklist items={items} />;
}

export const HighlightCard = ({ icon: Icon, title, content }: any) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="relative rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group"
  >
    <Tilt>
      <div className="p-10 rounded-[3rem] bg-white border border-champagne/10 h-full">
        <div className="mb-8 h-16 w-16 rounded-2xl bg-ivory text-wine flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-all duration-500 shadow-inner">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          {content}
        </p>
      </div>
    </Tilt>
  </motion.div>
);

// Better Export Names
export const InfoBlock = ContentBlock;
export const InfoGrid = AlternatingGrid;
export const InfoChecklist = SimpleChecklist;
export const InfoSteps = StepGrid;
export const InfoTitle = OrnateTitle;
export const InfoHighlight = HighlightedQuote;
