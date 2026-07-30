// ─────────────────────────────────────────────
// CASE STUDY — Design System (Rebuilt)
// Uses shared design system: @/lib/tokens + @/components/ds
// Story arc mirrors CaseStudyCricinfo (reference page)
// Images: placeholders — swap with real assets when ready
// ─────────────────────────────────────────────

import { motion } from "framer-motion";
import fontExploration from "@/assets/font-exploration.png";
import {
  NavCaseStudy,
  CaseStudyHero,
  SectionLabel,
  Section,
  DarkSection,
  Prose,
  PullQuote,
  LearningCard,
  ClosingSection,
  ImagePlaceholder,
  ExploreMore,
} from "@/components/ds";
import { animation, layout, spacing, type as t, surface, radius } from "@/lib/tokens";
import { ExternalLink } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import componentOld from "@/assets/component-old.jpg";
import componentNew from "@/assets/component-new.jpg";
import dsOld from "@/assets/ds-old.jpg";
import dsNew from "@/assets/ds-new.jpg";
import zeroheightDoc from "@/assets/zeroheight-accordion.png";

const fade = animation.fade;

// Helper to remove numbers and prefixes from labels
const cleanLabel = (label: string) => {
  return typeof label === "string" ? label.replace(/^\d+\s*—\s*/, "").replace(/^PHASE\s*\d+:\s*/i, "") : label;
};

const CaseStudyDesignSystem = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <NavCaseStudy period="2021 — 2025" />

      {/* HERO */}
      <CaseStudyHero
        headline="Scaling a Design System for a"
        headlineAccent="global cricket platform"
        tags={["170 FIGMA FILES", "CROSS-FUNCTIONAL ADOPTION", "Web, iOS, Android", "2021 – 2025"]}
      />

      {/* THE STARTING POINT */}
      <section className={`${spacing.sectionGap} ${layout.px}`}>
        <div className={`${layout.container} mx-auto`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className={`${t.labelSm} text-muted-foreground mb-4`}>The starting point</p>
            <h2
              className="text-2xl md:text-3xl font-normal tracking-[-0.025em] mb-3"
              style={{ fontFamily: t.displayFont }}
            >
              This is what we inherited.
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              In 2021, ESPN Cricinfo was scaling in every direction at once. We had a Figma component library — but it
              was undocumented, and not built for what was coming. Dark mode, native mobile, Tailwind migration.
              Incremental fixes wouldn't hold.
            </p>
          </motion.div>

          {/* Cricinfo Figma Library before/after */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}>
            <BeforeAfterSlider beforeImage={dsOld} afterImage={dsNew} beforeLabel="Before" afterLabel="After" />
            <p className="text-center text-xs text-muted-foreground/80 mt-4 tracking-wide">
              Cricinfo Figma Library · 2021
            </p>
          </motion.div>
        </div>
      </section>

      {/* 01 — PROBLEM */}
      <DarkSection label="PROBLEM">
        <div className="grid md:grid-cols-2 gap-0.5">
          {/* State */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-[hsl(220,18%,12%)] p-12 md:rounded-l-xl"
          >
            <p className={`${t.labelSm} text-background/85 mb-5`}>The state we were in</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.1] text-background/80"
              style={{ fontFamily: t.displayFont }}
            >
              One component library. No documentation. No responsiveness. Two brands with competing philosophies and
              teams rebuilding the same patterns — over and over — with nothing shared underneath.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["No Scalable components", "No documentation", "Work duplicated across platforms"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/65"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
                System not scaling with the product
              </span>
            </div>
          </motion.div>
          {/* Goal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="bg-[hsl(220,18%,16%)] p-12 md:rounded-r-xl"
          >
            <p className={`${t.labelSm} text-primary mb-5`}>What success looks like</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.1] text-background/90"
              style={{ fontFamily: t.displayFont }}
            >
              Build <em className="text-primary italic">shared infrastructure</em> — not just a component library. A
              system that makes every team faster, every platform more consistent, and every new feature easier to ship.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Teams build independently", "Documentation as shared language", "Design velocity"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/65"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
                Infrastructure, not decoration
              </span>
            </div>
          </motion.div>
        </div>
      </DarkSection>

      {/* 03 — PROCESS: CONVINCE, ALIGN, LAUNCH */}
      <Section label="CONVINCE, ALIGN, LAUNCH">
        <Prose>
          <h2>Before we designed anything, we had to have hard conversations.</h2>
          <p>
            Product didn't immediately see the value. Engineering pushed back on naming conventions. Making the case
            required demonstrating value in small, concrete increments — not promises about long-term payoff.
          </p>
        </Prose>

        {/* Pushback vs Outcome */}
        <div className={`${layout.container} mx-auto mt-12 grid md:grid-cols-2 gap-0.5`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-secondary p-12 rounded-l-xl flex flex-col justify-center"
          >
            <p className={`${t.labelSm} text-muted-foreground mb-4`}>The pushback</p>
            <p className="text-2xl md:text-3xl font-normal leading-[1.1]" style={{ fontFamily: t.displayFont }}>
              "Why spend time on a <span className="text-primary italic">design system</span> instead of shipping
              features?"
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="bg-[hsl(152,48%,20%)] p-12 rounded-r-xl flex flex-col justify-center"
          >
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">The answer</p>
            <p
              className="text-2xl md:text-3xl font-normal leading-[1.1] text-white"
              style={{ fontFamily: t.displayFont }}
            >
              "Because every feature you ship <span className="text-primary italic">without it</span> costs more to
              change later."
            </p>
          </motion.div>
        </div>

        {/* Findings — separate sub-section */}
        <div className={`${layout.container} mx-auto mt-24 !max-w-3xl`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="flex items-end justify-between gap-8 mb-10 pb-6 border-b border-border"
          >
            <div>
              <h3
                className="text-2xl md:text-3xl font-normal tracking-[-0.015em] leading-[1.15]"
                style={{ fontFamily: t.displayFont }}
              >
                The friction, and what it took to launch
              </h3>
            </div>
          </motion.div>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "Small, visible wins built product trust",
                desc: "We made the case through small, visible wins — each one built trust. Concrete demos worked better than abstract arguments about long-term payoff.",
                tag: "CONVINCE",
              },
              {
                num: "02",
                title: "Engineering pushback made the system stronger",
                desc: "Engineers challenged naming conventions and spacing logic to protect downstream integrity. That pushback improved the foundation.",
                tag: "ALIGN",
              },
              {
                num: "03",
                title: "Mapping tokens to Tailwind aligned design and engineering",
                desc: "Core tokens for color, typography, and spacing mapped directly to Tailwind variables. After that, design and engineering worked from the same system.",
                tag: "TECHNICAL UNLOCK",
              },
              {
                num: "04",
                title: "Launch included direct walkthroughs with each team",
                desc: "We ran teams through the system directly — live walkthroughs, full documentation, hands-on sessions. Teams started building their own libraries on top of it almost immediately",
                tag: "LAUNCH",
              },
            ].map((insight, i) => (
              <motion.div
                key={insight.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[70px_1fr_220px] gap-x-8 gap-y-3 items-baseline py-8 border-b border-border/60 last:border-b-0 group"
              >
                <p
                  className="text-2xl md:text-3xl font-normal text-primary/70 tabular-nums"
                  style={{ fontFamily: t.displayFont }}
                >
                  {insight.num}
                </p>
                <div>
                  <h4
                    className="text-lg md:text-xl font-normal tracking-tight mb-2 leading-snug"
                    style={{ fontFamily: t.displayFont }}
                  >
                    {insight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{insight.desc}</p>
                </div>
                <div className="col-span-2 md:col-span-1 md:justify-self-end md:pt-1">
                  <span
                    className={`${t.labelSm} px-3 py-1.5 rounded-full border border-primary/25 text-primary whitespace-nowrap`}
                  >
                    {insight.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04 — REBUILD: PHASE 2 */}
      <DarkSection label="PHASE 2: REBUILD SMARTER">
        <div className="max-w-3xl mx-auto mb-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-3xl md:text-4xl font-normal mb-6 tracking-[-0.025em] text-background/90"
            style={{ fontFamily: t.displayFont }}
          >
            Component properties changed what a single component could do.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="text-background/80 leading-relaxed"
          >
            A year in, Figma's new component properties let dozens of separate components live inside one. We rebuilt
            rather than patched.
          </motion.p>
        </div>

        {/* What the rebuild produced */}
        <div className="grid md:grid-cols-3 gap-0.5">
          {[
            {
              title: "Leaner system",
              desc: "Multi-component structures collapsed into single, well-configured components.",
              corner: "md:rounded-l-xl",
            },
            {
              title: "Faster Figma",
              desc: "Better performance — less file bloat, faster loading, smoother handoffs.",
              corner: "",
            },
            {
              title: "Less cognitive load",
              desc: "Less time spent choosing where to start. Easier to maintain and hand off.",
              corner: "md:rounded-r-xl",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
              className={`bg-[hsl(220,18%,12%)] p-10 ${card.corner}`}
            >
              <h4 className="font-semibold text-background/80 mb-3">{card.title}</h4>
              <p className="text-sm text-background/75 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Image placeholder — before/after Figma */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          custom={3}
          className="mt-8"
        >
          <BeforeAfterSlider
            beforeImage={componentOld}
            afterImage={componentNew}
            beforeLabel="Before"
            afterLabel="After"
            aspectRatio={1920 / 1383}
            fit="contain"
          />
          <p className="text-center text-xs text-background/85 mt-4 tracking-wide">
            Component rebuild · 2022 — fewer files, more power
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          custom={4}
          className="mt-8"
        >
          <PullQuote dark>
            The first version was right for its time. This one needed to be right for now — that's why we rebuilt
            instead of patching.
          </PullQuote>
        </motion.div>
      </DarkSection>

      {/* 05 — DOCUMENTATION: PHASE 3 */}
      <Section label="PHASE 3: MAKE IT SELF-SUFFICIENT">
        <Prose>
          <h2>Documentation wasn't optional — the system needed to work without a designer in the room.</h2>
          <p>
            After the rebuild, we documented everything in ZeroHeight — usage, tokens, interaction states, and
            guidelines for product and engineering.
          </p>
        </Prose>

        {/* Before / After adoption */}
        <div className={`${layout.container} mx-auto mt-12 grid md:grid-cols-2 gap-0.5`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-secondary p-12 rounded-l-xl flex flex-col justify-center"
          >
            <p className={`${t.labelSm} text-muted-foreground mb-4`}>Before documentation</p>
            <p className="text-2xl md:text-3xl font-normal leading-[1.1]" style={{ fontFamily: t.displayFont }}>
              "Where do I even&nbsp;<span className="text-primary italic">find that?</span>"
            </p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Variants, sizes, usage — documented, but locked inside Figma. Useless to anyone who wasn't a designer
              opening the file.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="bg-[hsl(152,48%,20%)] p-12 rounded-r-xl flex flex-col justify-center"
          >
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">After documentation</p>
            <p
              className="text-2xl md:text-3xl font-normal leading-[1.1] text-white"
              style={{ fontFamily: t.displayFont }}
            >
              "Is there a component <span className="text-primary italic">for this?</span>"
            </p>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              PMs checking the library before writing briefs. Developers building screens independently. New members
              contributing within days.
            </p>
          </motion.div>
        </div>

        {/* Documentation screenshot placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className={`${layout.container} mx-auto mt-8`}
        >
          <div
            className="rounded-xl border border-border/30 overflow-hidden"
            style={{ minHeight: "580px", maxHeight: "580px", overflowY: "auto" }}
          >
            <img
              src={zeroheightDoc}
              alt="ZeroHeight documentation · component reference"
              className="w-full"
              draggable={false}
            />
          </div>
          <p className="text-center text-xs text-muted-foreground/80 mt-4 tracking-wide">
            ZeroHeight documentation · 2023
          </p>
        </motion.div>

        <a
          href="https://zeroheight.com/252be9de8/p/812fb5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground border border-border px-5 py-3 rounded-full text-sm font-medium hover:bg-primary transition-all mt-6"
        >
          Zeroheight Link <ExternalLink className="h-4 w-4" />
        </a>
      </Section>

      {/* REMOVE, SIMPLIFY, REDUCE, SUSTAIN */}
      <DarkSection label="REMOVE, SIMPLIFY, REDUCE, SUSTAIN">
        <div className="max-w-3xl mx-auto mb-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-3xl md:text-4xl font-normal mb-6 tracking-[-0.025em] text-background/90"
            style={{ fontFamily: t.displayFont }}
          >
            The quieter, more persistent discipline.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="text-background/80 leading-relaxed"
          >
            Once a system is in active use, edge cases appear and unused variants accumulate. A component that worked
            for three use cases doesn't quite work for a fourth.
          </motion.p>
        </div>

        <div className={`${layout.container} mx-auto mt-8 !max-w-3xl`}>
          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "Unused variants were quietly piling up",
                desc: "Variants that weren't earning their place were cut, keeping the library lean.",
                tag: "REMOVE",
              },
              {
                num: "02",
                title: "Simplified drifted components",
                desc: "Components that had grown complex over time — like the table component — were brought back to clarity.",
                tag: "SIMPLIFY",
              },
              {
                num: "03",
                title: "Adjusted spacing & sizing\u00a0",
                desc: "Where the system had more options than it needed, we reduced. Fewer choices, more consistency.",
                tag: "REDUCE",
              },
              {
                num: "04",
                title: "A system still needs attention after launch",
                desc: "A system that isn't maintained becomes a system people work around. We gave it the same critical eye after launch as before.",
                tag: "SUSTAIN",
              },
            ].map((insight, i) => (
              <motion.div
                key={insight.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[70px_1fr_220px] gap-x-8 gap-y-3 items-baseline py-8 border-b border-border/10 last:border-b-0 group"
              >
                <p
                  className="text-2xl md:text-3xl font-normal text-primary/70 tabular-nums"
                  style={{ fontFamily: t.displayFont }}
                >
                  {insight.num}
                </p>
                <div>
                  <h4
                    className="text-lg md:text-xl font-normal tracking-tight mb-2 leading-snug"
                    style={{ fontFamily: t.displayFont }}
                  >
                    {insight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{insight.desc}</p>
                </div>
                <div className="col-span-2 md:col-span-1 md:justify-self-end md:pt-1">
                  <span
                    className={`${t.labelSm} px-3 py-1.5 rounded-full border border-primary/25 text-primary whitespace-nowrap`}
                  >
                    {insight.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/*   <div className="grid md:grid-cols-2 gap-0.5">
          {[
            {
              title: "Removed unused variants",
              desc: "Variants that weren't earning their place were cut. The library stayed lean instead of accumulating debt.",
              corner: "md:rounded-tl-xl",
            },
            {
              title: "Simplified drifted components",
              desc: "Components that had grown complex over time — like the table component — were brought back to clarity.",
              corner: "md:rounded-tr-xl",
            },
            {
              title: "Adjusted spacing & sizing",
              desc: "Where the system had more options than it needed, we reduced. Fewer choices, more consistency.",
              corner: "md:rounded-bl-xl",
            },
            {
              title: "Treated it as a product",
              desc: "A system that isn't maintained becomes a system people work around. We gave it the same critical eye after launch as before.",
              corner: "md:rounded-br-xl",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
              className={`bg-[hsl(220,18%,12%)] p-10 ${card.corner}`}
            >
              <h4 className="font-semibold text-background/80 mb-3">{card.title}</h4>
              <p className="text-sm text-background/75 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div> */}

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="mt-8">
          <PullQuote dark>
            Small decisions made consistently over time matter more than big decisions made occasionally.
          </PullQuote>
        </motion.div>
      </DarkSection>

      {/* 07 — OVERHAUL: PHASE 5 */}
      <Section label="THE OVERHAUL">
        <div className={`${layout.container} mx-auto`}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`${t.h2} max-w-3xl mb-12`}
            style={{ fontFamily: t.displayFont }}
          >
            Three years later, we changed the visual identity of the entire system.
          </motion.h2>

          {/*    <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                label: "THE TRIGGER",
                text: "Reducing app size meant we could no longer ship a downloadable font family — so we needed a new typography approach that didn't rely on custom font files.",
              },
              {
                label: "THE PROCESS",
                text: "Competitive analysis across major news and sports platforms. Every option tested across four real page types — homepage, match page, commentary, article — not just previewed in isolation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`bg-card border border-border/50 ${radius.cardSm} ${spacing.cardPad}`}
              >
                <h3 className={`${t.label} text-primary mb-4`}>{item.label}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div> */}
        </div>

        {/* Typography + Iconography side by side */}
        <div className={`${layout.container} mx-auto mt-12 grid md:grid-cols-2 gap-4`}>
          {[
            {
              label: "TYPOGRAPHY",
              title: "Complete font overhaul",
              items: [
                "Custom font files were adding weight the app didn't need",
                "Switched to a system font — no font file to ship, smaller app size",
                "Faster rendering on every device, no download required",
                "Updated every token it touched: line heights, character spacing, font sizes, typographic hierarchy",
              ],
            },
            {
              label: "ICONOGRAPHY",
              title: "Full icon library overhaul",
              items: [
                "Existing icons were heavier than they needed to be — thick strokes, visually loud at small sizes",
                "Rebuilt lighter and more rounded, easier on the eye",
                "Unified stroke weights and standardized grid alignment",
                "Every instance replaced across every component, every interactive state checked",
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
              className={`bg-card border border-border/50 ${radius.cardSm} ${spacing.cardPad}`}
            >
              <p className={`${t.label} text-primary mb-4`}>{card.label}</p>
              <h4 className="text-2xl font-normal tracking-[-0.01em] mb-6">{card.title}</h4>
              <ul className="divide-y divide-border/40">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                    <span className={`${t.labelSm} text-muted-foreground/70 pt-1 tabular-nums shrink-0`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Font exploration placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className={`${layout.container} mx-auto mt-4`}
        >
          <img
            src={fontExploration}
            alt="Typography exploration showing font candidates side by side"
            className="w-full my-0 mx-0 px-[20px] py-[20px] border border-solid rounded-lg bg-[#2b2b2b]/[0.91]"
          />
          <p className="text-center text-xs text-muted-foreground/80 mt-4 tracking-wide">Font evaluation process</p>
        </motion.div>

        {/* The test this proved */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className={`${layout.container} mx-auto mt-8`}
        >
          <PullQuote>
            The real test of a design system isn't launch day. It's whether it can absorb a complete identity change
            three years later and keep working. Ours did.
          </PullQuote>
        </motion.div>
      </Section>

      {/* 08 — TIMELINE 
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>08 — Timeline</SectionLabel>
          <div className="grid grid-cols-5 gap-0.5">
            {[
              { year: "2021", label: "Foundation" },
              { year: "2022", label: "Rebuild" },
              { year: "2023", label: "Documentation & Adoption" },
              { year: "2024", label: "Refinement" },
              { year: "2025", label: "Overhaul & Maturity" },
            ].map((item, i) => (
              <motion.div key={item.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-card p-6 text-center ${i === 0 ? "rounded-l-xl" : ""} ${i === 4 ? "rounded-r-xl" : ""}`}>
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2" style={{ fontFamily: t.displayFont }}>{item.year}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 02 — IMPACT */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark} border-t border-background/10`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>IMPACT</SectionLabel>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-sm text-background/75 leading-relaxed mb-8"
          >
            Five years of building. The outcomes were felt across the entire product organisation.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-0.5">
            {[
              {
                label: "Design cycle speed",
                num: "50%",

                desc: "Teams assembled instead of rebuilding from scratch — a shift measurable within months of adoption.",
              },
              {
                label: "FIGMA FILES COVERAGE",
                num: "170+",

                desc: '170+ files across the product now pull from one shared foundation — up from one inconsistent library."',
              },
              {
                label: "Component coverage",
                num: "100+",
                desc: "Dark mode, modular widgets, and the native mobile app launch — all built on the system, without slowing shipping velocity.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`bg-[hsl(220,18%,12%)] p-10 flex flex-col ${i === 0 ? "md:rounded-l-xl" : ""} ${i === 2 ? "md:rounded-r-xl" : ""}`}
              >
                <div>
                  <p className="text-[0.625rem] tracking-widest uppercase font-medium text-background/70 mb-3">
                    {card.label}
                  </p>
                  <p
                    className="text-5xl md:text-6xl font-bold text-primary leading-none mb-4"
                    style={{ fontFamily: t.displayFont }}
                  >
                    {card.num}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-background/75 mb-2">{card.title}</p>
                  <p className="text-xs text-background/50 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className={`${surface.dark} ${layout.px}`}>
        <div className={`${layout.container} mx-auto`}>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-background/10" />
            <span className="text-[0.625rem] tracking-widest uppercase text-background/40">Impact · Learnings</span>
            <div className="flex-1 h-px bg-background/10" />
          </div>
        </div>
      </div>

      {/* LEARNINGS */}
      <DarkSection label="What I learned">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="text-3xl md:text-4xl font-normal mb-12 tracking-[-0.025em] text-background/90 max-w-3xl mx-auto"
          style={{ fontFamily: t.displayFont }}
        >
          I joined this project as a Senior Product Designer. I left it thinking differently about what design actually
          is.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "The visible components were the easy part. The alignment conversations and decisions about what not to build mattered more to the system's longevity.",
            "The 2025 identity overhaul put the system under real pressure for the first time — and it held.",
          ].map((text, i) => (
            <LearningCard key={i} index={i}>
              {text}
            </LearningCard>
          ))}
        </div>
      </DarkSection>

      {/* CLOSING */}
      <ClosingSection
        quote="The goal was never to ship a component library. It was to build"
        quoteAccent="shared language"
        quoteEnd="that made everyone faster."
        meta="ESPN Cricinfo · Design System · 2021 — 2025"
      />

      {/* EXPLORE MORE */}
      <ExploreMore currentSlug="design-system" />
    </div>
  );
};

export default CaseStudyDesignSystem;
