// ─────────────────────────────────────────────
// CASE STUDY — Homepage (REFERENCE PAGE)
// Uses shared design system: @/lib/tokens + @/components/ds
// ─────────────────────────────────────────────

import { motion } from "framer-motion";
import {
  NavCaseStudy,
  SectionLabel,
  Section,
  DarkSection,
  Prose,
  PullQuote,
  LearningCard,
  ClosingSection,
  ExploreMore, ImpactPanel, impactGrid, impactCell } from "@/components/ds";
import { animation, layout, spacing, type as t, surface } from "@/lib/tokens";
import HomepageEvolutionCarousel from "@/components/HomepageEvolutionCarousel";
import desk2021 from "@/assets/cricinfo-desk-2021.jpg";
import mobile2021 from "@/assets/cricinfo-mobile-2021.jpg";
import hsbScreen2021 from "@/assets/hsb-screen-1.jpg";
import hsbScreen2023 from "@/assets/hsb-screen-2.jpg";
import hsbScreen2026 from "@/assets/hsb-screen-3.jpg";
import nextPhone1 from "@/assets/next-direction-phone-1.jpg";
import nextPhone2 from "@/assets/next-direction-phone-2.jpg";
import nextPhone3 from "@/assets/next-direction-phone-3.jpg";

const fade = animation.fade;

// Helper to remove numbers and prefixes from labels
const cleanLabel = (label: string) => {
  return typeof label === "string" ? label.replace(/^\d+\s*—\s*/, "").replace(/^PHASE\s*\d+:\s*/i, "") : label;
};

const CaseStudyHomepage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <NavCaseStudy period="2022 — 2026" />

      {/* HERO */}
      <section className=" pt-24 md:pt-28 pb-8 px-6 md:px-14 flex flex-col justify-center">
        <div className={`${layout.containerWide} w-full mx-auto text-center`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            className={`flex items-center justify-center gap-4 ${t.labelSm} text-muted-foreground mb-10 md:mb-12`}
          >
            <span className="w-5 h-px bg-muted-foreground/70" />
            <span>Case Study</span>
            <span className="w-5 h-px bg-muted-foreground/70" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={1}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold leading-[1.08] tracking-normal"
            style={{ fontFamily: t.displayFont }}
          >
            <span className="block">Why the Homepage</span>
            <span className="block text-primary italic font-medium mt-2">Needed to Change</span>
          </motion.h1>

          <motion.dl
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={2}
            className="grid md:grid-cols-3 border-y border-border mt-14 md:mt-16 text-center max-w-5xl mx-auto"
          >
            {[
              {
                label: "Client / Scope",
                value: (
                  <>
                    Cricinfo —<br />
                    Homepage Redesign
                  </>
                ),
              },
              {
                label: "Role / Worked With",
                value: (
                  <>
                    Lead, with Design Manager
                    <br />+ Product Manager
                  </>
                ),
              },
              {
                label: "Impact / Timeline",
                value: (
                  <>
                    10M+ users, 2022–
                    <br />
                    2026
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`px-5 py-5 md:py-6 ${index > 0 ? "border-t md:border-t-0 md:border-l border-border" : ""}`}
              >
                <dt className="text-[0.6875rem] md:text-xs font-medium uppercase text-muted-foreground mb-2.5">
                  {item.label}
                </dt>
                <dd className="text-base md:text-lg leading-snug">{item.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={3}
            className={`flex flex-col items-center gap-3 ${t.labelSm} text-muted-foreground mt-9 md:mt-11`}
          >
            <span>Scroll</span>
            <span className="w-px h-10 bg-muted-foreground/50 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* THE STARTING POINT — 2022 */}
      <section className={`${spacing.sectionGap} ${layout.px}`}>
        <div className={`${layout.container} mx-auto`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className={`${t.labelSm} text-muted-foreground mb-4`}>The starting point</p>
            <h2
              className="text-2xl md:text-3xl font-normal tracking-[0.015em] mb-3"
              style={{ fontFamily: t.displayFont }}
            >
              This is what we inherited.
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              A feed-driven homepage built for volume, not clarity. Everything lived in a single scroll — scores,
              articles, promos — with no separation of intent.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="bg-muted/50 rounded-2xl p-5 md:p-8 pb-0 flex gap-6 overflow-hidden border border-border/50"
            style={{ height: "540px" }}
          >
            {/* Desktop */}
            <div className="flex-1 min-w-0 flex flex-col h-full">
              <div className="bg-card rounded-t-xl border border-border border-b-0 shrink-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 h-7 bg-muted/60 rounded-lg flex items-center px-3 gap-2">
                    <span className={`text-[0.6875rem] text-muted-foreground/85 font-mono tracking-wide`}>
                      espncricinfo.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto overflow-x-hidden border border-border border-t-0 rounded-b-xl bg-background min-h-0 scrollbar-thin scrollbar-thumb-border">
                <img src={desk2021} alt="Cricinfo 2022 desktop homepage" className="w-full h-auto block" />
              </div>
            </div>
            {/* Mobile */}
            <div className="w-[190px] md:w-[210px] shrink-0 self-end aspect-[9/19.5] flex-col hidden md:flex">
              <div
                className="flex-1 min-h-0 bg-[#0a0a0a] rounded-[32px] p-[6px] flex flex-col relative"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.25)" }}
              >
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[52px] h-[16px] bg-[#0a0a0a] rounded-full z-[2]" />
                <div className="flex-1 min-h-0 rounded-[26px] overflow-y-auto overflow-x-hidden bg-background mt-0 scrollbar-none">
                  <img src={mobile2021} alt="Cricinfo 2022 mobile homepage" className="w-full h-auto block" />
                </div>
                <div className="h-[4px] bg-white/20 rounded-full w-[36%] mx-auto mt-[6px] mb-[4px]" />
              </div>
            </div>
          </motion.div>
          <p className="text-center text-xs text-muted-foreground/80 mt-4 tracking-wide">Cricinfo Homepage · 2022</p>
        </div>
      </section>

      {/* 01 — PROBLEM */}
      <DarkSection label="Problem">
        <div className="grid md:grid-cols-2 gap-0.5">
          {/* State */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-[hsl(220,18%,12%)] p-7 sm:p-9 md:p-12 md:rounded-l-xl"
          >
            <p className={`${t.labelSm} text-background/85 mb-5`}>The state we were in</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.1] text-background/80"
              style={{ fontFamily: t.displayFont }}
            >
              10M+ users. A homepage that worked as a feed. Users arrived for matches — and left. No habit. No reason to
              return.
            </p>
            <p className="text-sm text-background/75 mt-5 leading-relaxed">
              This meant high traffic, but low retention and weak long-term engagement.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Chronological feed", "No structure", "Articles dominated"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/65"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
                High bounce between matches
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
            className="bg-[hsl(220,18%,16%)] p-7 sm:p-9 md:p-12 md:rounded-r-xl"
          >
            <p className={`${t.labelSm} text-primary mb-5`}>What success looks like</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.1] text-background/90"
              style={{ fontFamily: t.displayFont }}
            >
              Turn the homepage from a <em className="text-primary italic">match-time utility</em> into a{" "}
              <em className="text-primary italic">daily destination</em> — structured, welcoming, and worth returning
              to.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Time on homepage", "Repeat visits", "Casual users engage"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/65"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
                Habit, not just utility
              </span>
            </div>
          </motion.div>
        </div>
      </DarkSection>

      {/* 03 — PROCESS & RESEARCH */}
      <Section label={cleanLabel("03 — Process & Research")}>
        <Prose>
          <h2>From assumptions to actual behaviour</h2>
          <p>
            Multi-method study: analytics (click, scroll, navigation), user interviews, surveys, usability testing, and
            editorial workflow analysis. The goal was to understand what the homepage was actually doing — not what we
            assumed it was doing.
          </p>
        </Prose>

        {/* Assumption vs Reality */}
        <div className={`${layout.container} mx-auto mt-12 grid md:grid-cols-2 gap-0.5`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-secondary p-7 sm:p-9 md:p-12 rounded-t-xl md:rounded-t-none md:rounded-l-xl flex flex-col justify-center"
          >
            <p className={`${t.labelSm} text-muted-foreground mb-4`}>The assumption</p>
            <p className="text-2xl md:text-3xl font-normal leading-[1.1]" style={{ fontFamily: t.displayFont }}>
              Users come for <span className="text-primary italic">content</span>.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="bg-[hsl(152,48%,20%)] p-7 sm:p-9 md:p-12 rounded-b-xl md:rounded-b-none md:rounded-r-xl flex flex-col justify-center"
          >
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">The reality</p>
            <p
              className="text-2xl md:text-3xl font-normal leading-[1.1] text-white"
              style={{ fontFamily: t.displayFont }}
            >
              Users come for <span className="text-primary italic">matches</span>. Everything else is secondary.
            </p>
          </motion.div>
        </div>

        {/* Findings — separate sub-section */}
        <div className={`${layout.container} mx-auto mt-16 !max-w-3xl`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="flex items-end justify-between gap-8 mb-10 pb-6 border-b border-border"
          >
            <div>
              <h3
                className="text-2xl md:text-2xl font-normal tracking-normal  leading-[1.15]"
                style={{ fontFamily: t.displayFont }}
              >
                What we found
              </h3>
            </div>
            <span className={`${t.labelSm} text-muted-foreground shrink-0 hidden md:block`}></span>
          </motion.div>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "The homepage was just the entry point to the match pages.",
                desc: "Users landed on the homepage, glanced at the scorecard, then moved straight to the match page. Nothing else on the homepage held their attention long enough to change that.",
                tag: "ENTRY POINT",
              },
              {
                num: "02",
                title: "Dense, oversized modules with no clear structure slowed users down",
                desc: "During live matches — peak traffic — the feed piled on previews, reports, stats, and highlights. Right when users needed speed, they had to wade through clutter to find what mattered.",
                tag: "COMPLEXITY",
              },
              {
                num: "03",
                title: "Three user types, one surface",
                desc: "With no structure, prioritizing content per user was hard — casual users wanted quick updates, content consumers wanted stories, power users wanted stats.\u00a0",
                tag: "Strategic tension",
              },
              {
                num: "04",
                title: "Scalability was a system problem",
                desc: "When something big was happening — a key moment during a live IPL match — the feed's lack of structure made it nearly impossible to surface what mattered most.\u00a0",
                tag: "Root cause",
              },
            ].map((insight, i) => (
              <motion.div
                key={insight.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[70px_1fr_220px] gap-x-8 gap-y-3 items-baseline py-8 border-b border-border/80 last:border-b-0 group"
              >
                <p
                  className="text-2xl md:text-2xl font-normal text-primary/70 tabular-nums"
                  style={{ fontFamily: t.displayFont }}
                >
                  {insight.num}
                </p>
                <div>
                  <h4
                    className="text-lg md:text-xl font-normal tracking-[0.01em] mb-2 leading-snug"
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

      {/* 04 — DESIGN EVOLUTION —
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>04 — Design Evolution</SectionLabel>
        </div> Carousel */}

      {/* MY CONTRIBUTION */}

      {/* DESIGN EVOLUTION — BEFORE VS AFTER */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark}`}>
        <div className={`${layout.container} mx-auto `}>
          <SectionLabel dark>DESIGN STRATEGY & SOLUTION</SectionLabel>

          {/* Strategic contribution  */}
          <div className={`${layout.container} mx-auto mt-16  !max-w-3xl`}>
            {/*     <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="flex items-end justify-between gap-8 mb-6 pb-6 "
            >
              <div>
                <h3
                  className="text-2xl md:text-2xl font-normal tracking-normal leading-[1.15]"
                  style={{ fontFamily: t.displayFont }}
                >
                  Design Solution
                </h3>
              </div>
              <span className={`${t.labelSm} text-muted-foreground shrink-0 hidden md:block`}></span>
            </motion.div> */}

            <div className="flex flex-col">
              {[
                {
                  num: "2022",
                  title: "Proposed and led the shift from feed to structured system",
                  desc: "I proposed moving away from the chronological feed and led the shift to a structured system — defining clear zones, modular components, and shared layout logic that could scale across formats and tournaments instead of being rebuilt each time.",
                },
                {
                  num: "2023",
                  title: "Refined with editorial and validated with product",
                  desc: "Worked closely with the editorial team to define how different content types should surface — match coverage, tournament coverage, and in-depth stories each needed their own placement and hierarchy. Their input shaped how the structure was organized; each iteration was then validated with Product before shipping.",
                },
                {
                  num: "2026",
                  title: "Team-wide simplification driven by user feedback",
                  desc: "Reviews were flagging the same issues repeatedly — too dense, cluttered, overwhelming, slow. That feedback drove a team-wide push to simplify: reducing density, adding whitespace, and clarifying typography within the system already in place.\u00a0",
                },
              ].map((insight, i) => (
                <motion.div
                  key={insight.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i}
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[70px_1fr] gap-x-8 gap-y-3 items-baseline py-4  group"
                >
                  <p
                    className="text-2xl md:text-2xl font-normal text-primary/70 tabular-nums"
                    style={{ fontFamily: t.displayFont }}
                  >
                    {insight.num}
                  </p>
                  <div>
                    <h4
                      className="text-lg md:text-xl font-normal tracking-[0.01em] mb-2 leading-snug"
                      style={{ fontFamily: t.displayFont }}
                    >
                      {insight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{insight.desc}</p>
                  </div>
                  <div className="col-span-2 md:col-span-1 md:justify-self-end md:pt-1"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Strategic contribution 
          <div className={`${layout.container} mx-auto mt-12 mb-16`}>
            <div className="flex flex-col gap-8 md:gap-10 px-6 md:px-[84px]">
              {[
                {
                  num: "2022",
                  title: "Proposed and led the shift from feed to structured system",
                  desc: "I proposed moving away from the chronological feed and led the shift to a structured system — defining clear zones, modular components, and shared layout logic that could scale across formats and tournaments instead of being rebuilt each time.",
                },
                {
                  num: "2023",
                  title: "Refined with editorial and validated with product",
                  desc: "Worked closely with the editorial team to define how different content types should surface — match coverage, tournament coverage, and in-depth stories each needed their own placement and hierarchy. Their input shaped how the structure was organized; each iteration was then validated with Product before shipping.",
                },
                {
                  num: "2026",
                  title: "Team-wide simplification driven by user feedback",
                  desc: "Reviews were flagging the same issues repeatedly — too dense, cluttered, overwhelming, slow. That feedback drove a team-wide push to simplify: reducing density, adding whitespace, and clarifying typography within the system already in place.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i}
                  className="flex gap-6 md:gap-8"
                >
                  <span className={`${t.label} text-primary shrink-0 pt-1`}>{item.num}</span>
                  <div>
                    <h3 className="font-semibold text-base mb-2 tracking-[0.01em]">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* Timeline */}

          <section className="mt-12 mb-16">
            {/*  <Prose>
          <h2>Three versions. Five years. One surface.</h2>
          <p>
            Each iteration was a response to real data — not a desire to redesign. The carousel below walks through what
            changed, what didn't, and why.
          </p>
        </Prose> */}

            <div className={`${layout.container} mx-auto mt-2`}>
              <HomepageEvolutionCarousel />
            </div>
          </section>

          {/* Year columns */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                year: "2022",
                title: "Feed-first · Before",
                dimensions: [
                  {
                    label: "Findability",
                    pct: 29,
                    variant: "muted" as const,
                    pointers: [
                      "Works for power users only",
                      "No entry point for casual users",
                      "Chronological feed, no hierarchy",
                    ],
                  },
                  {
                    label: "Scalability",
                    pct: 18,
                    variant: "muted" as const,
                    pointers: [
                      "Non-modular architecture",
                      "Every tournament = manual rebuild",
                      "High effort, inconsistent output",
                      "Hard to rediscover content",
                    ],
                  },
                ],
              },
              {
                year: "2023",
                title: "Structured · The leap",
                dimensions: [
                  {
                    label: "Findability",
                    pct: 59,
                    variant: "default" as const,
                    pointers: ["Clear hierarchy introduced", "Better for casual users", "Still too dense"],
                  },
                  {
                    label: "Scalability",
                    pct: 82,
                    variant: "good" as const,
                    pointers: ["Modular system,3× component reuse", "Faster builds", "Consistent iterations"],
                  },
                ],
              },
              {
                year: "2026",
                title: "Simplified · ",
                afterTitle: true,
                dimensions: [
                  {
                    label: "Findability",
                    pct: 85,
                    variant: "good" as const,
                    pointers: [
                      "Cleaner mobile experience",
                      "Reduced density, shorter scroll",
                      "Users know where things live",
                    ],
                  },
                  {
                    label: "Scalability",
                    pct: 82,
                    variant: "good" as const,
                    pointers: [
                      "Low-performing sections removed",
                      "Same modular system held",
                      "Personalisation pending",
                    ],
                  },
                ],
              },
            ].map((card, ci) => (
              <motion.div
                key={ci}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={ci}
                className="bg-[hsl(220,18%,12%)] rounded-2xl p-8 flex flex-col"
              >
                <div className="mb-6">
                  <span
                    className="text-2xl font-semibold text-background/90 tracking-[0.01em]"
                    style={{ fontFamily: t.displayFont }}
                  >
                    {card.year}
                  </span>
                  <p className={`${t.labelSm} text-muted-foreground mt-1`}>
                    {card.title}
                    {card.afterTitle && <span className="text-primary font-medium">After</span>}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  {card.dimensions.map((dim, di) => (
                    <div key={di}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[0.6875rem] font-mono tracking-[0.08em] uppercase text-background/75">
                          {dim.label}
                        </p>
                        <span className="text-[0.6875rem] font-mono tracking-[0.08em] uppercase text-background/75">
                          {dim.pct}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-background/10 mb-3 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            dim.variant === "good"
                              ? "bg-[#00976A]"
                              : dim.variant === "muted"
                                ? "bg-background/25"
                                : "bg-[#00976A]"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${dim.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: di * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {dim.pointers.map((pointer, pi) => (
                          <li key={pi} className="text-xs text-background/85 leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-background/50 mt-1.5 shrink-0" />
                            <span>{pointer}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  IMPACT */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark} border-t border-background/10`}>
        <div className={`${layout.container} mx-auto`}>
          <ImpactPanel>
          <SectionLabel dark>{cleanLabel("02 — Impact")}</SectionLabel>
          <div className={`${layout.container} mx-auto !max-w-3xl`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="text-md text-background/75 leading-relaxed mb-8  "
            >
              <Prose>
                <h2>Outcome</h2>
                <p>
                  80% of traffic is casual users
                  <br />
                  Homepage went from a match-day habit → a daily habit
                  <br />
                  Redesign turned occasional visitors into repeat visitors
                </p>
              </Prose>
            </motion.div>
          </div>
          <div className={impactGrid}>
            {[
              {
                label: "Bounce rate reduction",
                num: "~30%",

                desc: "Clear zones and surfaced content made the page easier to scan. That reduction in cognitive load brought bounce rates down significantly.",
              },
              {
                label: "Returning user sessions",
                num: "~15%",

                desc: "As the homepage added more to offer beyond live scores, casual users had more reason to come back — repeat visits increased.",
              },
              {
                label: "Design system efficiency",
                num: "3×",

                desc: "Modular components and shared layout logic scaled across formats, tournaments, and teams — resulting in faster builds and less technical debt over three years.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`${impactCell} p-6 sm:p-8 md:p-10 flex flex-col justify-between`}
              >
                <div>
                  <p className="text-[0.625rem] tracking-widest uppercase font-medium text-background/85 mb-3">
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
                  <p className="text-xs text-background/75 leading-relaxed ">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          </ImpactPanel>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      {/*   <Section label="05 — Design Decisions">
        <Prose>
          <h2>The decisions that defined the redesign</h2>
          <p>
            Every redesign produces moments where the right answer isn't obvious. These are the ones that shaped the
            outcome most.
          </p>
        </Prose>
        {[
          {
            constraint: {
              title: "Existing user expectations",
              desc: "10M+ users had built habits around the existing layout. Radical redesign risked alienating the audience the product depended on.",
            },
            decision: {
              label: "The decision · 2023 redesign",
              title: "Structure without disruption.",
              desc: "We introduced modular zones and stronger hierarchy without moving familiar touchpoints. New structure, familiar anchors — users adapted without noticing the shift.",
              badge: "✓ Validated by research",
            },
            tradeoff: {
              label: "The trade-off",
              title: "\u201CIncrementalism has a cost.\u201D",
              desc: "A more radical rethink might have unlocked faster habit-building. We'll never know. But the data supported the cautious call.",
            },
          },
          {
            constraint: {
              title: "The live score strip (HSB) is untouchable",
              desc: "Highest-performing surface on the page. Any change risked breaking the one thing users universally trusted.",
            },
            decision: {
              label: "The decision · 2022–2026",
              title: "Don't redesign the live score strip.",
              desc: "The HSB was retained and improved incrementally — never rebuilt from scratch. Across all three redesigns, it remained the strongest engagement anchor on the page. Knowing what not to redesign is as important as knowing what to change.",
              badge: "✓ Sustained 2022–2026",
            },
            tradeoff: {
              label: "The trade-off",
              title: "\u201CRestraint is a design decision.\u201D",
              desc: "Visual coherence between the HSB and the redesigned lower page was never fully resolved. What we kept was proven, trusted, and performing. That was worth more than consistency.",
            },
          },
        ].map((block, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={idx}
            className={`${layout.container} mx-auto ${idx === 0 ? "mt-12" : "mt-0.5"}`}
          >
            <div className="grid md:grid-cols-3 gap-0.5 rounded-xl overflow-hidden">
              <div className="bg-card p-6 sm:p-8 md:p-10">
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>The constraint</p>
                <h4 className="font-semibold text-base mb-3">{block.constraint.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.constraint.desc}</p>
              </div>
              <div className="bg-secondary p-6 sm:p-8 md:p-10">
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>{block.decision.label}</p>
                <h4 className="font-semibold text-base mb-3">{block.decision.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.decision.desc}</p>
                <p className="text-xs font-medium text-primary mt-4">{block.decision.badge}</p>
              </div>
              <div className="bg-foreground text-background p-6 sm:p-8 md:p-10">
                <p className={`${t.labelSm} text-background/85 mb-4`}>{block.tradeoff.label}</p>
                <h4
                  className="text-lg italic text-background/90 mb-3 leading-snug"
                  style={{ fontFamily: t.displayFont }}
                >
                  {block.tradeoff.title}
                </h4>
                <p className="text-xs text-background/75 leading-relaxed">{block.tradeoff.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Section>
*/}
      {/* HSB EVOLUTION */}
      <section className={`${spacing.sectionGap} ${layout.px} bg-background`}>
        <div className={`${layout.container} mx-auto`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12"
          >
            <div>
              <span
                className={`inline-block text-[0.625rem] font-mono tracking-[0.2em] uppercase text-primary bg-primary/10 border border-primary/20 rounded px-3 py-1.5 mb-4`}
              >
                THE DECISION · 2022–2026
              </span>
              <h2
                className="text-2xl md:text-3xl font-normal tracking-[0.015em] text-foreground leading-tight"
                style={{ fontFamily: t.displayFont }}
              >
                Don't redesign the
                <br />
                <span className="text-primary italic">live score strip.</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-[0.6562rem] font-mono tracking-[0.07em] text-[hsl(152,60%,32%)] bg-[hsl(152,60%,95%)] border border-[hsl(152,48%,80%)] rounded-full px-4 py-2 mt-1">
              ✓ Sustained 2022–2026
            </span>
          </motion.div>

          <div className="flex flex-col gap-8 mb-12">
            {[
              {
                year: "2022",
                sub: "HSB",
                img: hsbScreen2021,
                caption: "The original score strip — highest engagement surface on the page. Retained as-is.",
              },
              {
                year: "2023",
                sub: "Refresh",
                img: hsbScreen2023,
                caption: "Structural redesign around the strip. Everything changed — except this.",
              },
              {
                year: "2026",
                sub: "Current",
                img: hsbScreen2026,
                caption: "Third iteration. Same strip. Still the strongest anchor.",
              },
            ].map((screen, i) => (
              <motion.div
                key={screen.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="grid grid-cols-[80px_1fr] gap-6 items-start"
              >
                <div className="pt-4 flex flex-col items-center gap-2.5">
                  <span className="text-sm font-mono font-medium tracking-[0.1em] text-foreground">{screen.year}</span>
                  <span className="text-[0.5625rem] font-mono tracking-[0.12em] uppercase text-muted-foreground">
                    {screen.sub}
                  </span>
                  {i < 2 && <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-border to-transparent" />}
                </div>
                <div
                  className="rounded-xl overflow-hidden border border-border/60 bg-card"
                  style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}
                >
                  <div className="bg-muted border-b border-border/60 px-3.5 py-2.5 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                      <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                      <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 bg-background border border-border/50 rounded-md px-3 py-1">
                      <span className="text-[0.5938rem] font-mono tracking-wide text-muted-foreground">
                        espncricinfo.com
                      </span>
                    </div>
                  </div>
                  <img src={screen.img} alt={`Cricinfo ${screen.year} homepage`} className="w-full block" />
                  <div className="px-4 py-3 border-t border-border/60 bg-muted/50">
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">{screen.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <hr className="border-t border-border/60 mb-8" />
            <div className="grid md:grid-cols-[1fr_140px] gap-10 items-center">
              <p className="text-sm text-muted-foreground leading-[1.85]">
                The live score strip was the{" "}
                <strong className="text-foreground font-bold">highest-performing surface</strong> on the homepage.
                Across three redesigns, it was the one thing we chose not to rebuild. Not because we couldn't improve it
                — but because <strong className="text-foreground font-bold">its familiarity was its strength</strong>.
                Users trusted it. It anchored every visit. Restraint, here, was a design decision.
              </p>
              <div className="text-center md:border-l md:border-border/60 md:pl-9">
                <p
                  className="text-5xl font-extrabold tracking-[0.01em] leading-none text-foreground"
                  style={{ fontFamily: t.displayFont }}
                >
                  3<span className="text-primary">×</span>
                </p>
                <p className="text-[0.5312rem] font-mono tracking-[0.18em] uppercase text-muted-foreground leading-relaxed mt-1.5">
                  Versions
                  <br />
                  Same strip
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT COMES NEXT */}
      <Section label="What comes next">
        <Prose>
          <h2>What comes next</h2>
          <p>
            Three sequentially dependent phases that reimagine how fans discover, consume, and personalise cricket
            content.
          </p>
        </Prose>
        <div className={`${layout.container} mx-auto mt-12 grid md:grid-cols-3 gap-4`}>
          {[
            {
              icon: "◎",
              title: "Short-form content",
              desc: "Quick updates, lightweight reads, bite-sized moments — a reason to return between matches. The foundation everything else depends on.",
              status: "In progress",
              active: true,
              phone: nextPhone1,
            },
            {
              icon: "⊞",
              title: "Hybrid homepage",
              desc: "Structure for depth, feed for speed. Viable once short-form has volume to sustain a feed. The two are sequentially dependent.",
              status: "Planned",
              active: false,
              phone: nextPhone2,
            },
            {
              icon: "◈",
              title: "Personalisation",
              desc: "On the roadmap since 2022. Infrastructure exists. User need is real. It hasn't shipped because it hasn't been the business priority — an organisational problem, not a design one.",
              status: "Sequencing",
              active: false,
              phone: nextPhone3,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
              className="bg-card border border-border/50 rounded-2xl p-7 flex flex-col"
            >
              <div className="w-10 h-10 rounded-[10px] bg-secondary flex items-center justify-center text-base mb-5">
                {card.icon}
              </div>
              <h4 className="font-semibold text-base mb-2 tracking-[0.01em]">{card.title}</h4>
              <p className="text-[0.8125rem] text-muted-foreground leading-relaxed mb-5">{card.desc}</p>
              <div className="flex justify-center flex-1 items-end mb-5">
                <div
                  className="w-[74%] max-w-[210px] bg-[#0D0D0D] rounded-[32px] p-[7px] relative"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.06) inset, 0 24px 56px rgba(0,0,0,0.22), 0 4px 10px rgba(0,0,0,0.14)",
                  }}
                >
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-9 h-1.5 bg-[#1C1C1C] rounded-full z-[2]" />
                  <div className="rounded-[26px] overflow-hidden bg-background" style={{ aspectRatio: "9/19.5" }}>
                    <img
                      src={card.phone}
                      alt={`${card.title} concept`}
                      className="w-full h-full object-cover object-top block"
                    />
                  </div>
                </div>
              </div>
              <span
                className={`${t.labelSm} px-3.5 py-1.5 rounded-full w-fit ${card.active ? "bg-[hsl(152,48%,90%)] text-[hsl(152,48%,20%)]" : "border border-border text-muted-foreground"}`}
              >
                {card.status}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className={`${layout.container} mx-auto mt-6`}
        >
          <p className="text-xs text-muted-foreground/85 leading-relaxed max-w-2xl">
            <strong className="text-muted-foreground font-medium">Note:</strong> These three phases are sequentially
            dependent. Short-form content unlocks hybrid feed viability. Hybrid feed unlocks personalisation at scale.
            The order matters.
          </p>
        </motion.div>
      </Section>

      {/* LEARNINGS */}
      <DarkSection label="What I learned">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="text-3xl md:text-4xl font-normal mb-12 tracking-[0.015em] text-background/90 max-w-3xl mx-auto"
          style={{ fontFamily: t.displayFont }}
        >
          Five years on one surface teaches you things a project never could.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Make the case before making the design. Research gave the problem language. Without that, the 2023 redesign doesn't happen — not because the idea was wrong, but because the <em>problem wasn't visible yet</em>.",
            "Restraint is a design decision. Not redesigning the HSB across three versions was as deliberate as anything we shipped. <em>What not to redesign</em> matters as much as what to change.",
          ].map((text, i) => (
            <LearningCard key={i} index={i}>
              {text}
            </LearningCard>
          ))}
        </div>
      </DarkSection>

      {/* CLOSING */}
      <ClosingSection
        quote="The goal was never to ship a homepage. It was to change"
        quoteAccent="what people do"
        quoteEnd="when they open one."
        meta="CRICINFO · HOMEPAGE REDESIGN · 2022 — 2026"
      />

      {/* EXPLORE MORE */}
      <ExploreMore currentSlug="homepage" />
    </div>
  );
};

export default CaseStudyHomepage;
