// ─────────────────────────────────────────────
// CASE STUDY — Quick Reads (ESPN Cricinfo App)
// Uses shared design system: @/lib/tokens + @/components/ds
// ─────────────────────────────────────────────

import { motion } from "framer-motion";
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
} from "@/components/ds";
import { animation, layout, spacing, type as t, surface } from "@/lib/tokens";
import QuickReadsProblemVisual from "@/components/QuickReadsProblemVisual";
import QuickReadsScreensVisual from "@/components/QuickReadsScreensVisual";

const fade = animation.fade;

// ─── Placeholder phone frame component ───────
const PhonePlaceholder = ({ label }: { label: string }) => (
  <div
    className="w-full max-w-[210px] bg-[#0D0D0D] rounded-[32px] p-[7px] relative mx-auto"
    style={{
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.06) inset, 0 24px 56px rgba(0,0,0,0.22), 0 4px 10px rgba(0,0,0,0.14)",
    }}
  >
    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-9 h-1.5 bg-[#1C1C1C] rounded-full z-[2]" />
    <div
      className="rounded-[26px] overflow-hidden bg-muted/30 flex items-center justify-center"
      style={{ aspectRatio: "9/19.5" }}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
          <span className="text-muted-foreground/40 text-lg">◻</span>
        </div>
        <p className="text-[9px] font-mono tracking-wide text-muted-foreground/40 leading-relaxed">
          {label}
        </p>
      </div>
    </div>
  </div>
);

// ─── Placeholder browser mockup ──────────────
const BrowserPlaceholder = ({ label }: { label: string }) => (
  <div
    className="rounded-xl overflow-hidden border border-border/50 bg-card"
    style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}
  >
    <div className="bg-muted/40 border-b border-border px-4 py-3 flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 h-7 bg-muted/60 rounded-lg flex items-center px-3">
        <span className="text-[11px] text-muted-foreground/60 font-mono tracking-wide">
          espncricinfo.com · app
        </span>
      </div>
    </div>
    <div className="bg-muted/20 flex items-center justify-center" style={{ height: "320px" }}>
      <div className="flex flex-col items-center gap-3 text-center px-6">
        <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
          <span className="text-muted-foreground/40 text-xl">◻</span>
        </div>
        <p className="text-xs font-mono tracking-wide text-muted-foreground/40 leading-relaxed max-w-[200px]">
          {label}
        </p>
      </div>
    </div>
  </div>
);

const CaseStudyQuickReads = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <NavCaseStudy period="2024" />

      {/* HERO */}
      <CaseStudyHero
        headline="We gave users a reason"
        headlineAccent="to care"
        headlineEnd="before asking them to read."
        tags={["Cricinfo App", "Quick Reads", "Design Lead", "iOS & Android", "2024"]}
      />

      {/* THE STARTING POINT */}
      <section className={`${spacing.sectionGap} ${layout.px}`}>
        <div className={`${layout.container} mx-auto`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className={`${t.labelSm} text-muted-foreground mb-4`}>The starting point</p>
            <h2
              className="text-2xl md:text-3xl font-normal tracking-[-0.025em] mb-3"
              style={{ fontFamily: t.displayFont }}
            >
              25 years of great writing. Most users never finishing it.
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              Cricinfo's editorial legacy is unmatched. But mobile-first users — especially younger ones — were getting their cricket news from Inshorts and Instagram. Only 20–30% of users engaged with full-length articles.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className="bg-muted/50 rounded-2xl p-5 md:p-8 pb-6 flex flex-col md:flex-row gap-6 border border-border/50"
          >
            <div className="flex-1">
              <BrowserPlaceholder label="Long-form article feed · before Quick Reads · placeholder" />
            </div>
            <div className="flex flex-col gap-4 justify-center md:w-[200px]">
              <div className="bg-card border border-border/50 rounded-xl p-4">
                <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/50 mb-1">
                  Article completion
                </p>
                <p
                  className="text-4xl font-bold leading-none text-foreground"
                  style={{ fontFamily: t.displayFont }}
                >
                  20–30%
                </p>
                <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                  of users read full articles
                </p>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4">
                <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/50 mb-1">
                  The gap
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  70–80% bounced before forming a reading habit
                </p>
              </div>
            </div>
          </motion.div>
          <p className="text-center text-xs text-muted-foreground/50 mt-4 tracking-wide">
            ESPN Cricinfo App · News Feed · 2024
          </p>
        </div>
      </section>

      {/* 01 — PROBLEM */}
      <DarkSection label="01 — Problem">
        <div className="grid md:grid-cols-2 gap-0.5">
          {/* State */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-[hsl(220,18%,12%)] p-12 md:rounded-l-xl"
          >
            <p className={`${t.labelSm} text-background/20 mb-5`}>The state we were in</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.1] text-background/50"
              style={{ fontFamily: t.displayFont }}
            >
              Younger, mobile-first users were leaving. Not because they disliked cricket — but because the format didn't fit the way they consumed information.
            </p>
            <p className="text-sm text-background/40 mt-5 leading-relaxed">
              High traffic from loyal users masked a growing gap with casual and newer audiences.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Low article completion", "Short attention windows", "Format mismatch"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/30"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary">
                Losing to Inshorts & Instagram
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
              Turn casual visitors into{" "}
              <em className="text-primary italic">engaged readers</em> — by giving them a lighter entry point into the editorial depth cricinfo is known for.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Higher content engagement", "Longer sessions", "Gateway to long-form"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/30"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary">
                Without compromising editorial integrity
              </span>
            </div>
          </motion.div>
        </div>
      </DarkSection>

      {/* 02 — IMPACT */}
      <section
        className={`${spacing.sectionGap} ${layout.px} ${surface.dark} border-t border-background/10`}
      >
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>02 — Impact</SectionLabel>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-sm text-background/40 leading-relaxed mb-8"
          >
            Rolled out 10% → 20% → 100%. We tracked adoption, scroll depth, and transition behaviour across every phase.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-0.5">
            {[
              {
                label: "Scroll depth · News section",
                num: "✓",
                title: "Hit target benchmarks by full rollout",
                desc: "Scroll depth and time spent in the news section both reached targets by end of the 100% rollout — the primary signal that Quick Reads was creating sustained engagement.",
              },
              {
                label: "Summary → full article transition",
                num: "↑",
                title: "Gateway hypothesis validated",
                desc: "The summary-to-full-article transition rate met our engagement goal. Users weren't just reading summaries and leaving — they were using them as a decision layer before going deeper.",
              },
              {
                label: "Rollout adoption rate",
                num: "3×",
                title: "Tracked ahead of expectations",
                desc: "Adoption tracked ahead of forecasts across all three rollout phases. Ad integration completed without a measurable drop in satisfaction signals.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.num + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`bg-[hsl(220,18%,12%)] p-10 flex flex-col justify-between ${
                  i === 0 ? "md:rounded-l-xl" : ""
                } ${i === 2 ? "md:rounded-r-xl" : ""}`}
              >
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-medium text-background/20 mb-3">
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
                  <p className="text-sm font-medium text-background/70 mb-2">{card.title}</p>
                  <p className="text-xs text-background/40 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-0.5 bg-[hsl(220,10%,6%)] rounded-b-xl p-5"
          >
            <p className="text-xs italic text-background/20 leading-relaxed">
              Honest note: Scroll depth and transition targets are the strongest validated signals. Broader persona-level behavioural data was limited by the testing scope — something I'd invest in differently on a revisit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 03 — PROCESS & RESEARCH */}
      <Section label="03 — Process & Research">
        <Prose>
          <h2>Users don't dislike reading. They dislike wasting time.</h2>
          <p>
            User surveys, prototype testing with casual and mid-tier users, competitive analysis (Inshorts, social formats), and behavioral analytics. The goal was to understand why users were bouncing — not just that they were.
          </p>
        </Prose>

        {/* Assumption vs Reality */}
        <div className={`${layout.container} mx-auto mt-12 grid md:grid-cols-2 gap-0.5`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-secondary p-12 rounded-l-xl flex flex-col justify-center"
          >
            <p className={`${t.labelSm} text-muted-foreground mb-4`}>The assumption</p>
            <p
              className="text-2xl md:text-3xl font-normal leading-[1.1]"
              style={{ fontFamily: t.displayFont }}
            >
              Users don't want to <span className="text-primary italic">read long articles</span>.
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
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">The reality</p>
            <p
              className="text-2xl md:text-3xl font-normal leading-[1.1] text-white"
              style={{ fontFamily: t.displayFont }}
            >
              Users don't want to{" "}
              <span className="text-primary italic">waste time on something they're unsure about</span>. A summary helps them decide.
            </p>
          </motion.div>
        </div>

        {/* Findings Grid */}
        <div className={`${layout.container} mx-auto mt-0.5 grid md:grid-cols-2 gap-0.5`}>
          {[
            {
              num: "Finding 01",
              title: "The summary is a decision layer, not a replacement",
              desc: "Users weren't opposed to long-form — they wanted confidence before committing. A 100–120 word summary gave them enough context to choose, not enough to feel satisfied and leave.",
              tag: "Reframed the brief",
            },
            {
              num: "Finding 02",
              title: "Three personas, one surface — with conflicting needs",
              desc: "Casual users wanted speed. Content consumers wanted stories. Loyal readers wanted depth. Any solution had to serve all three without forcing a choice. Quick Reads needed to be a gateway, not a gate.",
              tag: "Strategic tension",
            },
            {
              num: "Finding 03",
              title: "Competitors had speed. Cricinfo had credibility.",
              desc: "Inshorts and Instagram already offered short-form news. Users who chose cricinfo did so for cricket-specific depth and trust. Summaries had to carry that credibility — not dilute it.",
              tag: "Competitive edge",
            },
            {
              num: "Finding 04",
              title: "State management was a UX problem, not just an engineering one",
              desc: "Users switching between summary and full article — or returning to the feed after reading — needed continuity. Losing context mid-flow was a real drop-off risk.",
              tag: "UX critical",
            },
          ].map((insight, i) => {
            const corners = ["", "", "md:rounded-bl-xl", "md:rounded-br-xl"];
            return (
              <motion.div
                key={insight.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`bg-card p-10 ${corners[i] || ""}`}
              >
                <p className={`${t.labelSm} text-primary mb-4`}>{insight.num}</p>
                <h4 className="font-semibold text-base mb-3 tracking-tight">{insight.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{insight.desc}</p>
                <span
                  className={`${t.labelSm} px-3 py-1 rounded-full border border-primary/20 text-primary`}
                >
                  {insight.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 04 — DESIGN STRATEGY */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>04 — Design Strategy</SectionLabel>
        </div>
        <Prose>
          <h2>Speed-first. But never at the cost of credibility.</h2>
          <p>
            Four principles shaped every decision — from the word count cap to the transition behaviour. The goal was to feel like cricinfo, just lighter.
          </p>
        </Prose>

        {/* Principles */}
        <div className={`${layout.container} mx-auto mt-10 grid md:grid-cols-4 gap-3 mb-12`}>
          {[
            {
              icon: "⟶",
              title: "Speed-first",
              desc: "100–120 words max. Scannable layout. No padding content. If it doesn't help the user decide, it doesn't belong.",
            },
            {
              icon: "◉",
              title: "Readability",
              desc: "Clear type hierarchy, generous spacing, minimal visual noise. The summary competes with native social feeds — it has to feel effortless.",
            },
            {
              icon: "⇄",
              title: "Fluid navigation",
              desc: "Tap to full article and back, without losing context. State is preserved. The summary and full article are one surface, not two.",
            },
            {
              icon: "◈",
              title: "System consistency",
              desc: "Existing components from the design system — filters, headings, share interactions. Quick Reads is part of cricinfo, not a product bolted onto it.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
              className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col"
            >
              <div className="w-9 h-9 rounded-[9px] bg-secondary flex items-center justify-center text-sm mb-4">
                {p.icon}
              </div>
              <h4 className="font-semibold text-sm mb-2 tracking-tight">{p.title}</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder screens */}
        <div className={`${layout.container} mx-auto`}>
          <p className={`${t.labelSm} text-muted-foreground mb-6`}>Key screens</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Summary card · Feed view · placeholder" },
              { label: "Summary → full article transition · placeholder" },
              { label: '"Already read" state · placeholder' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="flex flex-col items-center gap-4"
              >
                <PhonePlaceholder label={s.label} />
                <p className="text-xs text-muted-foreground/50 text-center font-mono tracking-wide">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — DESIGN DECISIONS */}
      <Section label="05 — Design Decisions">
        <Prose>
          <h2>Three tensions that shaped the feature</h2>
          <p>
            Every meaningful design decision on Quick Reads came from a real constraint. These are the three that defined the outcome most.
          </p>
        </Prose>
        {[
          {
            constraint: {
              title: "Editorial workload vs. competitive positioning",
              desc: "Writing 100–120 word summaries for every article doubled the editorial team's effort. At the same time, Inshorts already offered short-form cricket news — so the summaries had to be meaningfully different, not just shorter.",
            },
            decision: {
              label: "The decision · Editorial collaboration",
              title: "Make the case before asking for the effort.",
              desc: "I showed the editorial team the behavioural data and framed Quick Reads as a funnel — not a replacement. Summaries would drive more users into the long-form writing they'd spent years building. By launch, they owned the summary voice and wrote the style guide.",
              badge: "✓ Editorially owned by launch",
            },
            tradeoff: {
              label: "The trade-off",
              title: '"Depth carried the credibility."',
              desc: "Cricket-specific editorial trust is what differentiates cricinfo from Inshorts. Summaries that didn't carry that voice would have been indistinguishable from competitors. That risk was real — and it's why editorial buy-in wasn't optional.",
            },
          },
          {
            constraint: {
              title: "Multiple personas, one surface",
              desc: "Casual users wanted quick updates. Loyal readers still preferred long-form. A feature that served one group at the expense of the other would damage retention more than it fixed it.",
            },
            decision: {
              label: "The decision · Product framing",
              title: "Frame it as a gateway, not a replacement.",
              desc: "Quick Reads was designed as an entry point into long-form — not a standalone format. The summary card UI always made the full article one tap away. Editorial richness was never hidden; it was preceded.",
              badge: "✓ Validated by transition rate",
            },
            tradeoff: {
              label: "The trade-off",
              title: '"Some loyal readers still resisted."',
              desc: "A small segment of power users felt the feed felt 'lighter' after the rollout. We maintained long-form as the default for high-intent entry points — but the tension between depth and speed is ongoing.",
            },
          },
          {
            constraint: {
              title: "State handling and ad placement",
              desc: "Users switching between summary and full article — or returning to the feed — needed continuity. Separately, ads were a monetization requirement, but poorly placed they would break the very flow we were trying to build.",
            },
            decision: {
              label: "The decision · Engineering & monetisation",
              title: "Solve continuity early. Place ads predictably.",
              desc: "Early shared prototypes with engineering kept state transitions from becoming late-stage blockers. Read states were tracked to avoid repetition. Ads were placed at predictable intervals — not injected into reading flow — so the hierarchy stayed intact.",
              badge: "✓ No measurable satisfaction drop",
            },
            tradeoff: {
              label: "The trade-off",
              title: '"Testing coverage was narrower than ideal."',
              desc: "Due to timeline constraints, we tested with a limited segment and didn't validate across all five user personas. In hindsight, broader early-stage testing would have surfaced edge cases in state handling sooner.",
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
              <div className="bg-card p-10">
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>The constraint</p>
                <h4 className="font-semibold text-base mb-3">{block.constraint.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {block.constraint.desc}
                </p>
              </div>
              <div className="bg-secondary p-10">
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>{block.decision.label}</p>
                <h4 className="font-semibold text-base mb-3">{block.decision.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.decision.desc}</p>
                <p className="text-xs font-medium text-primary mt-4">{block.decision.badge}</p>
              </div>
              <div className="bg-foreground text-background p-10">
                <p className={`${t.labelSm} text-background/20 mb-4`}>{block.tradeoff.label}</p>
                <h4
                  className="text-lg italic text-background/70 mb-3 leading-snug"
                  style={{ fontFamily: t.displayFont }}
                >
                  {block.tradeoff.title}
                </h4>
                <p className="text-xs text-background/40 leading-relaxed">{block.tradeoff.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Section>

      {/* ROLLOUT */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark}`}>
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
                className={`inline-block text-[10px] font-mono tracking-[0.2em] uppercase text-primary bg-primary/10 border border-primary/20 rounded px-3 py-1.5 mb-4`}
              >
                Launch · 2024
              </span>
              <h2
                className="text-2xl md:text-3xl font-normal tracking-[-0.025em] text-background/90 leading-tight"
                style={{ fontFamily: t.displayFont }}
              >
                We didn't flip a switch.<br />
                <span className="text-primary italic">We watched it land.</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-mono tracking-[0.07em] text-[hsl(152,48%,50%)] bg-[hsl(152,48%,20%)]/10 border border-[hsl(152,48%,30%)]/20 rounded-full px-4 py-2 mt-1">
              ✓ All targets met by full rollout
            </span>
          </motion.div>

          {/* Rollout phases */}
          <div className="flex flex-col gap-8 mb-12">
            {[
              {
                phase: "Phase 01",
                pct: "10%",
                title: "Soft launch",
                desc: "Narrow rollout to monitor adoption and scroll behaviour in a controlled cohort. Validated that summary cards were being read and tapped through — not ignored.",
              },
              {
                phase: "Phase 02",
                pct: "20%",
                title: "Expanded rollout",
                desc: "Broader cohort introduced. Transition rates confirmed the gateway pattern was holding. Ad performance monitored alongside engagement — no meaningful tension detected.",
              },
              {
                phase: "Phase 03",
                pct: "100%",
                title: "Full rollout",
                desc: "All targets hit. Scroll depth, time-on-section, and summary-to-article transition rate all met benchmarks. Adoption tracked ahead of forecast across every phase.",
              },
            ].map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="grid grid-cols-[80px_1fr] gap-6 items-start"
              >
                <div className="pt-4 flex flex-col items-center gap-2.5">
                  <span className="text-sm font-mono font-medium tracking-[0.1em] text-background/90">
                    {phase.pct}
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.12em] uppercase text-background/20">
                    {phase.phase}
                  </span>
                  {i < 2 && (
                    <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-background/10 to-transparent" />
                  )}
                </div>
                <div
                  className="rounded-xl overflow-hidden border border-background/[0.07] bg-[hsl(220,15%,11%)]"
                  style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
                >
                  <div className="bg-[hsl(220,14%,13%)] border-b border-background/[0.07] px-5 py-4">
                    <h4 className="text-sm font-medium text-background/80">{phase.title}</h4>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-background/40 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <hr className="border-t border-background/[0.07] mb-8" />
            <div className="grid md:grid-cols-[1fr_140px] gap-10 items-center">
              <p className="text-sm text-background/50 leading-[1.85]">
                Quick Reads was the{" "}
                <strong className="text-background/90 font-bold">
                  first time cricinfo's editorial team shipped a product feature they didn't resist
                </strong>
                . Not because we forced buy-in — but because we made the case first. The data showed them what design already knew: users weren't rejecting their writing.{" "}
                <strong className="text-background/90 font-bold">
                  They just needed a lighter door into it.
                </strong>
              </p>
              <div className="text-center md:border-l md:border-background/[0.07] md:pl-9">
                <p
                  className="text-5xl font-extrabold tracking-tight leading-none text-background/90"
                  style={{ fontFamily: t.displayFont }}
                >
                  3<span className="text-primary">×</span>
                </p>
                <p className="text-[8.5px] font-mono tracking-[0.18em] uppercase text-background/20 leading-relaxed mt-1.5">
                  Rollout<br />phases hit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
          To get users to commit to something deep, first give them a reason to care.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Make the case before asking for the effort. The editorial team resisted at first — reasonably. Showing them the data reframed the conversation. <em>Collaboration doesn't start with alignment. It starts with honesty.</em>",
            "A small entry point can unlock a large behaviour change. Quick Reads wasn't a major redesign — it was a 100-word card. But it changed what users did next. <em>The hook matters more than the depth.</em>",
            "Design and engineering decisions made late become UX problems at launch. State handling and transition continuity were only smooth because we resolved them early, together. <em>Async reviews aren't a shortcut — they're insurance.</em>",
            "Testing scope shapes confidence, not just data. We shipped with limited persona coverage and it worked. But I'd make different choices next time. <em>Knowing where your blind spots are is its own form of design thinking.</em>",
          ].map((text, i) => (
            <LearningCard key={i} index={i}>
              {text}
            </LearningCard>
          ))}
        </div>
      </DarkSection>

      {/* CLOSING */}
      <ClosingSection
        quote="The goal was never to make cricket faster. It was to make it"
        quoteAccent="easier to start."
        quoteEnd=""
        meta="ESPN Cricinfo · Quick Reads · iOS & Android · 2024"
      />
    </div>
  );
};

export default CaseStudyQuickReads;
