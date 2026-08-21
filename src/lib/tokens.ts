// ─────────────────────────────────────────────
// DESIGN SYSTEM TOKENS
// Portfolio · Prerna Chhajer
// Reference: CaseStudyHomepage.tsx
// ─────────────────────────────────────────────
// Usage: import { spacing, type, animation } from "@/lib/tokens"

// ── Layout ───────────────────────────────────
export const layout = {
  // Unified container used on ALL pages
  container: "max-w-5xl mx-auto",
  containerWide: "max-w-[1360px] mx-auto",

  // Narrow container for long-form blog reading
  containerBlog: "max-w-[840px] mx-auto",
  // Horizontal padding — same on every page
  px: "px-6 md:px-14",
  // Vertical section rhythm — py-24 everywhere
  section: "py-24",
  sectionLg: "py-28",
} as const;

// ── Spacing ───────────────────────────────────
export const spacing = {
  sectionGap: "py-16 md:py-24",        // standard section top/bottom
  sectionGapLg: "py-20 md:py-28",      // closing / hero sections
  labelBottom: "mb-8 md:mb-12",        // below every SectionLabel
  headingBottom: "mb-6",               // below h2 in prose
  bodyBottom: "mb-5",                  // below body paragraphs
  cardPad: "p-6 sm:p-8 md:p-10",       // standard card internal padding
  cardPadLg: "p-7 sm:p-9 md:p-12",     // larger featured cards
} as const;


// ── Typography scale ──────────────────────────
export const type = {
  // Display headings
  heroH1: "text-4xl md:text-6xl lg:text-7xl font-normal tracking-[0.015em] leading-[1.1]",
  h2: "text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal tracking-[0.015em] leading-[1.1]",
  h2Lg: "text-3xl md:text-4xl font-normal tracking-[0.015em]",
  h2Hero: "text-[clamp(2.5rem,5.5vw,4.75rem)] font-normal leading-none tracking-[0.015em]",
  h3: "text-2xl md:text-3xl font-normal tracking-[0.015em] leading-tight",
  // Labels
  label: "font-mono text-[0.6875rem] tracking-[0.12em] uppercase",
  labelSm: "font-mono text-[0.6875rem] tracking-[0.08em] uppercase",
  // Body
  body: "text-sm leading-relaxed",
  bodyMd: "text-[0.8125rem] leading-[1.75]",
  bodyLg: "text-lg leading-relaxed",
  // Display font shorthand (apply via style prop)
  displayFont: "var(--font-display)",
} as const;

// ── Colors / surfaces ─────────────────────────
export const surface = {
  // Dark sections (Cricinfo problem pattern)
  dark: "bg-foreground text-background",
  darkCard: "bg-[hsl(220,18%,12%)]",
  darkCardAlt: "bg-[hsl(220,18%,14%)]",
  darkSubtle: "bg-foreground/90",
  // Light sections
  light: "bg-background text-foreground",
  card: "bg-card border border-border/50",
  secondary: "bg-secondary border border-border",
  muted: "bg-muted/50 border border-border/50",
  // Accent
  accentLine: "border-l-2 border-primary",
} as const;

// ── Animation variants ────────────────────────
// Single unified variant used on ALL pages
// (replaces separate `fade` + `fadeUp` definitions)
export const animation = {
  fade: {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  },
} as const;

// ── Border radius ─────────────────────────────
export const radius = {
  card: "rounded-2xl",
  cardSm: "rounded-xl",
  pill: "rounded-full",
  tag: "rounded-full",
} as const;

// ── Nav ───────────────────────────────────────
export const nav = {
  base: "fixed top-0 inset-x-0 z-50 h-[60px] flex items-center justify-between bg-background/90 backdrop-blur-xl border-b border-border",
  px: "px-6 md:px-14",
} as const;
