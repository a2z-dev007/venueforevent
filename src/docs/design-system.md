# VenueForEvent Design System

A comprehensive design system for creating premium, emotional, and high-performance event discovery experiences.

## Core Visual Identity

### 🎨 Color Palette (HSL Based)
Our palette is rooted in luxury, tradition, and romance.

| Category | Token | HSL | Recommended Use |
| :--- | :--- | :--- | :--- |
| **Primary** | `--wine` | `345 75% 35%` | Main branding, primary buttons, accents |
| **Luxury** | `--champagne` | `38 75% 55%` | Gold accents, progress indicators, highlights |
| **Romantic** | `--blush` | `350 70% 85%` | Soft backgrounds, decorative elements |
| **Foundation** | `--ivory` | `35 40% 98%` | Global background, card backgrounds |
| **Contrast** | `--dark-2` | `340 25% 8%` | Hero overlays, dark mode elements |

### 🖋️ Typography
We use a three-tier typography system for hierarchy and emotional resonance.

- **Heading**: `var(--font-heading)` (Serif) - used for section titles and primary headers.
- **Body**: `var(--font-body)` (Sans-serif) - used for descriptions, UI labels, and long text.
- **Accent**: `var(--font-accent)` (Cursive/Script) - used for decorative subtitles ("Where dreams come true").

---

## Layout & Responsive Tokens

### 📏 Section Spacing (Section-Padding)
Maintain consistent vertical rhythm using the `section-padding` and `section-px` utility classes.

| Device | Token (X) | Token (Y) | Visual Impact |
| :--- | :--- | :--- | :--- |
| **Mobile** | `1.5rem` (24px) | `5rem` (80px) | Native app-like breathing room |
| **Tablet** | `3rem` (48px) | `6rem` (96px) | Balanced spacing |
| **Desktop** | `5rem` (80px) | `8rem` (128px) | Dramatic, premium gallery feel |

### 📱 Mobile Excellence (App-Like UI)
To make the website feel like a native mobile app:
1. **Full-Width Interactions**: Cards on mobile should often use the `featured` or `overlay` variants for immersive visuals.
2. **Glassmorphism**: Use `.glass-card` and `.glass-dark` for overlays to add depth.
3. **Bottom-Weighted Actions**: Place primary action buttons within thumb-reach (e.g., in `VenueCard` featured variant).
4. **Micro-Interactions**: Every tapable element should have a subtle scale or color transition.

---

## Component Standards

### 🏷️ Venue Cards
The `VenueCard` component is the core building block. Use the appropriate variant based on section priority:

- **Featured**: Large, immersive (Hero, Banquet Halls).
- **Overlay**: Content over image (Engagement, Categories).
- **Standard**: Grid-friendly overview (Secondary sections).
- **Horizontal**: List-view preferred (Search results).

### 📐 Glass Effects
- **Light Glass**: `.glass-card` (80% opacity, ivory base, 20px blur).
- **Dark Glass**: `.glass-dark` (60% opacity, dark base, 24px blur).

---

## Animation & Motion (GSAP + Framer)

### 🌀 Continuous Motion
- **MandalaDecor**: Slow infinite rotation (30s duration).
- **HangingGarland**: Subtle rotation sway (`yoyo: true`).
- **FloatingPetals**: Physics-based falling (random sway and rotation).

### 🖱️ Hover Effects
- **3D Tilt**: Apply to cards (`perspective: 1000`).
- **Smooth Expansion**: Use `transition-all duration-500` for ease-out scaling.

### 📜 Scroll Triggered
- **Entrance**: Staggered fade and rise (`y: 30`, `opacity: 0` -> `1`).
- **Drawing**: SVG path `strokeDashoffset` animations for floral dividers.

---

## Implementation Checklist

- [ ] Use `section-padding` for all main section wrappers.
- [ ] Ensure all SVGs use HSL variables (`hsl(var(--wine))`) for consistency.
- [ ] Check mobile view: Are buttons large enough? Is there enough horizontal padding?
- [ ] Apply `overflow-hidden` to cards with rounded corners to avoid layout bleed.
- [ ] Use `useGSAP` for all continuous or complex scroll-based animations.
