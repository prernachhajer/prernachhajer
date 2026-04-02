// ─────────────────────────────────────────────
// DESIGN SYSTEM COMPONENTS  (ds.tsx)
// Portfolio · Prerna Chhajer
// Reference: CaseStudyCricinfo.tsx
// ─────────────────────────────────────────────
// Usage: import { Nav, SectionLabel, Section, ... } from "@/components/ds"

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { animation, layout, nav, spacing, surface, type as t, radius } from "@/lib/tokens";

const fade = animation.fade;

// ─────────────────────────────────────────────
// NAV — Portfolio Home variant
// ─────────────────────────────────────────────
export const NavHome = ({ name = "Prerna Chhajer" }: { name?: string }) => {
  const navigate = useNavigate();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleNavClick = (id: string) => {
    if (id.startsWith("__navigate__")) {
      navigate(id.replace("__navigate__", ""));
    } else {
      scrollTo(id);
    }
  };

  return (
    <nav className={`${nav.base} ${nav.px}`}>
      <a
        href="#"
        className="text-base font-normal tracking-tight"
        style={{ fontFamily: t.displayFont }}
      >
        {name}
      </a>
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Work", id: "work" },
          { label: "About", id: "about" },
          { label: "Writing", id: "writing" },
          { label: "Resume", id: "__navigate__/resume" },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`${t.labelSm} text-muted-foreground hover:text-foreground transition-colors`}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("contact")}
          className="inline-flex items-center bg-foreground text-background px-5 py-2 rounded-full text-xs font-medium hover:bg-primary transition-all"
        >
          Let's Talk →
        </button>
      </div>
    </nav>
  );
};

// ─────────────────────────────────────────────
// NAV — Case Study variant (back button)
// ─────────────────────────────────────────────
export const NavCaseStudy = ({ period }: { period: string }) => {
  const navigate = useNavigate();
  return (
    <nav className={`${nav.base} ${nav.px}`}>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Portfolio
      </button>
      <span className={`${t.labelSm} text-muted-foreground`}>{period}</span>
    </nav>
  );
};

// ─────────────────────────────────────────────
// SECTION LABEL
// The mono uppercase label with leading line
// ─────────────────────────────────────────────
export const SectionLabel = ({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className={`flex items-center gap-3 ${t.label} ${spacing.labelBottom} ${layout.container} mx-auto ${
      dark ? "text-background/30" : "text-primary"
    }`}
  >
    <span className={`w-5 h-px ${dark ? "bg-background/30" : "bg-primary"}`} />
    {children}
  </motion.div>
);

// ─────────────────────────────────────────────
// SECTION — Light background wrapper
// ─────────────────────────────────────────────
export const Section = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <section className={`${spacing.sectionGap} ${layout.px}`}>
    <div className={`${layout.container} mx-auto`}>
      <SectionLabel>{label}</SectionLabel>
    </div>
    {children}
  </section>
);

// ─────────────────────────────────────────────
// DARK SECTION — The dark bg pattern from Cricinfo
// Used for Problem statements, key insights, learnings
// ─────────────────────────────────────────────
export const DarkSection = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark}`}>
    <div className={`${layout.container} mx-auto`}>
      <SectionLabel dark>{label}</SectionLabel>
      {children}
    </div>
  </section>
);

// ─────────────────────────────────────────────
// DARK TWO-COL — The two-column problem layout
// Pass an array of { label, content } objects
// ─────────────────────────────────────────────
export const DarkTwoCol = ({
  cols,
  footer,
}: {
  cols: { label: string; content: React.ReactNode }[];
  footer?: React.ReactNode;
}) => (
  <>
    <div className="grid md:grid-cols-2 gap-0.5">
      {cols.map((col, i) => (
        <motion.div
          key={col.label}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          custom={i}
          className={`${surface.darkCard} ${spacing.cardPad} ${
            i === 0 ? "md:rounded-l-xl" : "md:rounded-r-xl"
          }`}
        >
          <p className={`${t.labelSm} text-background/20 mb-5`}>{col.label}</p>
          <div className="text-xl md:text-2xl font-normal leading-[1.15] text-background/50" style={{ fontFamily: t.displayFont }}>
            {col.content}
          </div>
        </motion.div>
      ))}
    </div>
    {footer && (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        custom={2}
        className={`mt-0.5 ${surface.darkSubtle} md:rounded-b-xl ${spacing.cardPad}`}
      >
        {footer}
      </motion.div>
    )}
  </>
);

// ─────────────────────────────────────────────
// PROSE — Centered narrative text block
// ─────────────────────────────────────────────
export const Prose = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className={`max-w-3xl mx-auto 
      [&_h2]:${t.h2} [&_h2]:mb-6 [&_h2]:leading-[1.1]
      [&_h3]:text-xs [&_h3]:tracking-widest [&_h3]:uppercase [&_h3]:text-muted-foreground [&_h3]:font-medium [&_h3]:mb-4 [&_h3]:mt-12
      [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-5 [&_p:last-child]:mb-0`}
    style={{ fontFamily: t.displayFont }}
  >
    {children}
  </motion.div>
);

// ─────────────────────────────────────────────
// CONTEXT CARD — Light card for paired context panels
// ─────────────────────────────────────────────
export const ContextCard = ({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className={`bg-card ${spacing.cardPad} ${className}`}
  >
    <p className={`${t.labelSm} text-muted-foreground mb-4`}>{label}</p>
    <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
  </motion.div>
);

// ─────────────────────────────────────────────
// STAT CARD — Impact / metric highlight
// ─────────────────────────────────────────────
export const StatCard = ({
  number,
  label,
  desc,
  className = "",
}: {
  number?: string;
  label: string;
  desc: string;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className={`bg-card ${spacing.cardPad} ${className}`}
  >
    {number && (
      <p
        className="text-4xl font-bold text-primary mb-3"
        style={{ fontFamily: t.displayFont }}
      >
        {number}
      </p>
    )}
    <h4 className="font-semibold mb-3 tracking-tight">{label}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

// ─────────────────────────────────────────────
// PULL QUOTE — Dark italic quote block
// Used inside DarkSection for key insights
// ─────────────────────────────────────────────
export const PullQuote = ({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className={`${dark ? surface.darkSubtle : "bg-card border border-border/50"} ${radius.cardSm} ${spacing.cardPadLg} flex items-center gap-5`}
  >
    <div className="w-1 h-14 bg-primary/70 rounded-full shrink-0" />
    <p
      className={`text-xl italic leading-relaxed ${dark ? "text-background/60" : "text-muted-foreground"}`}
      style={{ fontFamily: t.displayFont }}
    >
      {children}
    </p>
  </motion.div>
);

// ─────────────────────────────────────────────
// LEARNING CARD — Quote-style insight card (dark bg)
// ─────────────────────────────────────────────
export const LearningCard = ({
  children,
  index = 0,
}: {
  children: string;
  index?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    custom={index}
    className={`${surface.darkCardAlt} ${radius.cardSm} border border-background/10 ${spacing.cardPadLg}`}
  >
    <p
      className="text-lg italic text-background/70 leading-relaxed"
      style={{ fontFamily: t.displayFont }}
      dangerouslySetInnerHTML={{ __html: `"${children}"` }}
    />
  </motion.div>
);

// ─────────────────────────────────────────────
// CASE STUDY HERO
// ─────────────────────────────────────────────
export const CaseStudyHero = ({
  headline,
  headlineAccent,
  headlineEnd,
  tags,
}: {
  headline: string;
  headlineAccent?: string;
  headlineEnd?: string;
  tags: string[];
}) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fade}
      className="flex items-center gap-3 mb-12"
    >
      <span className="w-7 h-px bg-muted-foreground" />
      <span className={`${t.labelSm} text-muted-foreground`}>Case Study</span>
      <span className="w-7 h-px bg-muted-foreground" />
    </motion.div>

    <motion.h1
      initial="hidden"
      animate="visible"
      variants={fade}
      custom={1}
      className={`${t.heroH1} max-w-4xl`}
      style={{ fontFamily: t.displayFont }}
    >
      {headline}{" "}
      {headlineAccent && (
        <span className="text-primary italic">{headlineAccent}</span>
      )}{" "}
      {headlineEnd}
    </motion.h1>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={fade}
      custom={2}
      className={`mt-14 flex gap-8 flex-wrap justify-center ${t.labelSm} text-muted-foreground`}
    >
      {tags.map((tag) => (
        <span key={tag} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {tag}
        </span>
      ))}
    </motion.div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={fade}
      custom={3}
      className={`mt-20 flex flex-col items-center gap-3 ${t.labelSm} text-muted-foreground`}
    >
      <span>Scroll</span>
      <span className="w-px h-10 bg-muted-foreground/50 animate-bounce" />
    </motion.div>
  </section>
);

// ─────────────────────────────────────────────
// IMAGE PLACEHOLDER — for images not yet uploaded
// ─────────────────────────────────────────────
export const ImagePlaceholder = ({
  label,
  aspectRatio = "16/9",
  height,
}: {
  label: string;
  aspectRatio?: string;
  height?: string;
}) => (
  <div
    className="w-full bg-muted/40 border border-border/50 rounded-xl flex flex-col items-center justify-center gap-3"
    style={{ aspectRatio: height ? undefined : aspectRatio, height }}
  >
    <div className="w-10 h-10 rounded-full border-2 border-dashed border-border flex items-center justify-center">
      <span className="text-lg text-muted-foreground/40">+</span>
    </div>
    <p className={`${t.labelSm} text-muted-foreground/40`}>{label}</p>
  </div>
);

// ─────────────────────────────────────────────
// CLOSING SECTION — Shared closing CTA
// ─────────────────────────────────────────────
export const ClosingSection = ({
  quote,
  quoteAccent,
  quoteEnd,
  meta,
}: {
  quote: string;
  quoteAccent?: string;
  quoteEnd?: string;
  meta: string;
}) => {
  const navigate = useNavigate();
  return (
    <section className={`${spacing.sectionGapLg} ${layout.px} text-center`}>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        className="text-2xl md:text-4xl font-normal tracking-[-0.025em] max-w-3xl mx-auto mb-12 leading-tight"
        style={{ fontFamily: t.displayFont }}
      >
        {quote}{" "}
        {quoteAccent && <span className="text-primary italic">{quoteAccent}</span>}{" "}
        {quoteEnd}
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        custom={1}
        className={`${t.labelSm} text-muted-foreground`}
      >
        {meta}
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        custom={2}
        className="mt-12"
      >
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-muted-foreground border border-border px-7 py-3 rounded-full text-[13px] hover:border-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-3 w-3" /> Back to Portfolio
        </button>
      </motion.div>
    </section>
  );
};

// ─────────────────────────────────────────────
// TAG PILL — Reusable tag / badge
// ─────────────────────────────────────────────
export const Tag = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "active" | "muted";
}) => {
  const styles = {
    default: "border border-border text-muted-foreground",
    active: "bg-[hsl(152,48%,90%)] text-[hsl(152,48%,20%)]",
    muted: "border border-border/50 text-muted-foreground/60",
  };
  return (
    <span
      className={`${t.labelSm} px-3.5 py-1.5 rounded-full w-fit ${styles[variant]}`}
    >
      {children}
    </span>
  );
};

// ─────────────────────────────────────────────
// EXPLORE MORE — Related case studies
// ─────────────────────────────────────────────
const allCaseStudies = [
  {
    slug: "cricinfo",
    title: "Cricinfo Homepage",
    description: "Redesigning the world's largest cricket platform homepage",
    tags: ["Product Design", "Web"],
    path: "/case-study/cricinfo",
  },
  {
    slug: "design-system",
    title: "Design System",
    description: "Building a unified design language for ESPN Cricinfo",
    tags: ["Systems", "Documentation"],
    path: "/case-study/design-system",
  },
  {
    slug: "quick-reads",
    title: "Quick Reads",
    description: "Optimizing content consumption for mobile-first users",
    tags: ["Mobile", "iOS & Android"],
    path: "/case-study/quick-reads",
  },
];

export const ExploreMore = ({ currentSlug }: { currentSlug: string }) => {
  const navigate = useNavigate();
  const others = allCaseStudies.filter((cs) => cs.slug !== currentSlug);

  return (
    <section className={`${spacing.sectionGap} ${layout.px}`}>
      <div className={`${layout.container} mx-auto`}>
        <SectionLabel>Explore More</SectionLabel>
        <div className="grid md:grid-cols-2 gap-4">
          {others.map((cs, i) => (
            <motion.button
              key={cs.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
              onClick={() => navigate(cs.path)}
              className={`bg-card border border-border/50 ${radius.cardSm} ${spacing.cardPad} text-left group hover:border-primary/30 transition-all hover:-translate-y-0.5`}
            >
              <p className={`${t.labelSm} text-muted-foreground/50 mb-4`}>
                {cs.tags.join(" · ")}
              </p>
              <h3
                className="text-xl font-normal tracking-tight mb-2 group-hover:text-primary transition-colors"
                style={{ fontFamily: t.displayFont }}
              >
                {cs.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {cs.description}
              </p>
              <span className={`${t.labelSm} text-primary flex items-center gap-2`}>
                Read Case Study <ArrowRight className="h-3 w-3" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
