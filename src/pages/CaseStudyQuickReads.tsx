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
  ExploreMore,
} from "@/components/ds";
import { animation, layout, spacing, type as t, surface } from "@/lib/tokens";
import QuickReadsProblemVisual from "@/components/QuickReadsProblemVisual";
import QuickReadsScreensVisual from "@/components/QuickReadsScreensVisual";

const fade = animation.fade;

const CaseStudyQuickReads = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <NavCaseStudy period="2024" />

      {/* HERO */}
      <CaseStudyHero
        headline="Quick Reads: getting"
        headlineAccent="80% of casual users"
        headlineEnd="into cricinfo's long-form writing"
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
            className="border-l-2 border-border pl-6 md:pl-8"
          >
            <p className={`${t.label} text-muted-foreground mb-8`}>The starting point</p>

            <div className="mb-12">
              <h2
                className="text-[clamp(1.25rem,2.5vw,1.875rem)] font-normal tracking-[-0.02em] leading-[1.15] mb-3"
                style={{ fontFamily: t.displayFont }}
              >
                25 years of great writing. Most users never finishing it.
              </h2>
              <p className="text-[0.9375rem] text-muted-foreground max-w-2xl leading-[1.65]">
                Not because they didn't want depth — they wanted a reason to trust it before committing.
              </p>
            </div>

            <div>
              <h2
                className="text-[clamp(1.25rem,2.5vw,1.875rem)] font-normal tracking-[-0.02em] leading-[1.15] mb-3"
                style={{ fontFamily: t.displayFont }}
              >
                Losing to Inshorts and Instagram.
              </h2>
              <p className="text-[0.9375rem] text-muted-foreground max-w-2xl leading-[1.65]">
                While cricinfo held 25 years of editorial trust, mobile-first users were getting their cricket news
                elsewhere — <span className="text-foreground font-medium">20–30% completion</span>,{" "}
                <span className="text-foreground font-medium">70–80% bounce</span> — before a reading habit ever formed.
              </p>
            </div>
          </motion.div>

          <div className="mt-16">
            <QuickReadsProblemVisual />
            <p className="text-center text-xs text-muted-foreground/80 mt-4 tracking-wide">
              ESPN Cricinfo App · News Feed · 2024
            </p>
          </div>
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
            className="bg-[hsl(220,18%,12%)] p-12 md:rounded-l-xl"
          >
            <p className={`${t.labelSm} text-background/85 mb-5`}>The state we were in</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.1] text-background/80"
              style={{ fontFamily: t.displayFont }}
            >
              High traffic from loyal, long-time readers was masking a real problem — casual and newer users weren't
              returning long enough to become loyal ones. Completion and return rates for this segment were quietly
              falling behind strong topline numbers.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["CASUAL-USER DROP-OFF", "FALLING RETURN RATE"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/65"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
                MASKED BY LOYAL-READER VOLUME
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
              Turn casual visitors into <em className="text-primary italic">engaged readers</em> — by giving them a
              lighter entry point into the editorial depth cricinfo is known for.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Higher content engagement", "Longer sessions", "Gateway to long-form"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/65"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
                Without compromising editorial integrity
              </span>
            </div>
          </motion.div>
        </div>
      </DarkSection>

      {/* 03 — PROCESS & RESEARCH */}
      <Section label="Process & Research">
        <Prose>
          {/* <h2>Users don't dislike reading. They dislike wasting time.</h2> */}
          <p>
            User surveys, prototype testing with casual and mid-tier users, competitive analysis (Inshorts, social
            formats), and behavioral analytics. The goal was to understand why users were bouncing — not just that they
            were.
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
            <p className="text-2xl md:text-3xl font-normal leading-[1.1]" style={{ fontFamily: t.displayFont }}>
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
              <span className="text-primary italic">waste time on something they're unsure about</span>. A summary helps
              them decide.
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
            className="flex items-end justify-between gap-8 mb-6 pb-6 border-b border-border"
          >
            <div>
              <h3
                className="text-2xl md:text-3xl font-normal tracking-[-0.015em] leading-[1.15]"
                style={{ fontFamily: t.displayFont }}
              >
                What we found
              </h3>
            </div>
          </motion.div>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "\u00a0Casual users weren't reading long-form",
                desc: "Only ~5% of casual users completed full articles. The length and depth built for loyal readers wasn't landing with everyone else.",
                tag: "Reframed the brief",
              },
              {
                num: "02",
                title: "Three personas, one surface, conflicting needs",
                desc: "Casual users wanted speed. Content consumers wanted stories. Loyal readers wanted depth. No single format could serve all three as-is.",
                tag: "Strategic tension",
              },
              {
                num: "03",
                title: "Speed was going to competitors, not Cricinfo",
                desc: "Inshorts and Instagram already owned short-form news. Users who chose Cricinfo did so for cricket-specific depth and trust — but that same trust was at risk if Cricinfo didn't offer a faster option too.",
                tag: "Competitive edge",
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

      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>DESIGN SOLUTION</SectionLabel>
        </div>

        <div className={`${layout.container} mx-auto  !max-w-3xl`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-16 "
          >
            <h2 className={`${t.h2} mb-4`}>Quick Reads: a 100–120 word summary</h2>
            <p className="text-muted-foreground text-md leading-relaxed">
              Quick Reads didn't exist before this — it's a new 100–120 word summary that sits above every long-form
              article, giving casual users a fast way in without touching the original writing underneath.
              <br />
              <br />
              It's built as a decision layer, not a replacement. A short summary gives users enough to decide whether a
              story is worth their time — not enough to feel like they've already read it and move on.
            </p>

            <h2 className="">Design Strategy</h2>
            <p>
              Four principles shaped every decision — from the word count cap to the transition behaviour. The goal was
              to feel like cricinfo, just lighter.
            </p>
          </motion.div>
        </div>

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
              <p className="text-[0.8125rem] text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder screens */}
        <div className={`${layout.container} mx-auto`}>
          <p className={`${t.labelSm} text-muted-foreground mb-6`}>Key screens</p>
          <QuickReadsScreensVisual />
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <Section label="Design Decisions">
        <div className={`${layout.container} mx-auto !max-w-3xl`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-16"
          >
            <h2 className={`${t.h2} mb-4`}>Three tensions that shaped the feature</h2>
            <p className="text-muted-foreground text-md leading-relaxed">
              Every meaningful design decision on Quick Reads came from a real constraint.
            </p>
          </motion.div>

          {[
            {
              constraint:
                "Writing a summary took real editorial skill — not just fewer words, but a hook and an accurate read of the story",
              decision:
                "Quick Reads became a funnel step, not a dead end — one tap into the full article, whenever a reader wants it.",
              quote: '"If the summaries had felt generic, Cricinfo would\'ve felt like every other quick-news app"',
            },
            {
              constraint: "Casual users wanted speed. Loyal readers wanted depth. One surface had to serve both.",
              decision:
                "One swipe, two paths: casual users swipe up through summaries; loyal readers swipe across into the full article.",
              quote:
                '"Some loyal readers still skip the summaries entirely and go straight to the full article — that habit hasn\'t fully changed."',
            },
            {
              constraint: "Losing context mid-flow was a real risk — ads included.",
              decision: "Ads appear at a fixed interval, never mid-read, so the swipe-up flow stays uninterrupted.",
              quote: '"We only tested this with two of the five user types, not all five."',
            },
          ].map((block, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={idx}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 py-12 ${idx !== 0 ? "border-t border-border" : ""}`}
            >
              <div>
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>THE CONSTRAINT</p>
                <p className="text-md md:text-md font-bold leading-snug text-foreground">{block.constraint}</p>
              </div>
              <div>
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>THE DECISION</p>
                <p className="text-md md:text-md font-bold leading-snug text-foreground mb-6">{block.decision}</p>
                <p
                  className="text-base italic text-muted-foreground leading-relaxed"
                  style={{ fontFamily: t.displayFont }}
                >
                  {block.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
                className={`inline-block text-[0.625rem] font-mono tracking-[0.2em] uppercase text-primary bg-primary/10 border border-primary/20 rounded px-3 py-1.5 mb-4`}
              >
                Launch · 2024
              </span>
              <h2
                className="text-2xl md:text-3xl font-normal tracking-[-0.025em] text-background/90 leading-tight"
                style={{ fontFamily: t.displayFont }}
              >
                We didn't flip a switch.
                <br />
                <span className="text-primary italic">We watched it land.</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-[0.6562rem] font-mono tracking-[0.07em] text-[hsl(152,48%,50%)] bg-[hsl(152,48%,20%)]/10 border border-[hsl(152,48%,30%)]/20 rounded-full px-4 py-2 mt-1">
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
                  <span className="text-sm font-mono font-medium tracking-[0.1em] text-background/90">{phase.pct}</span>
                  <span className="text-[0.5625rem] font-mono tracking-[0.12em] uppercase text-background/85">
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
                    <p className="text-sm text-background/75 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <hr className="border-t border-background/[0.07] mb-8" />
            <div className="grid md:grid-cols-[1fr_140px] gap-10 items-center">
              <p className="text-sm text-background/80 leading-[1.85]">
                Quick Reads was the{" "}
                <strong className="text-background/90 font-bold">
                  first time cricinfo's editorial team shipped a product feature they didn't resist
                </strong>
                . Not because we forced buy-in — but because we made the case first. The data showed them what design
                already knew: users weren't rejecting their writing.{" "}
                <strong className="text-background/90 font-bold">They just needed a lighter door into it.</strong>
              </p>
              <div className="text-center md:border-l md:border-background/[0.07] md:pl-9">
                <p
                  className="text-5xl font-extrabold tracking-tight leading-none text-background/90"
                  style={{ fontFamily: t.displayFont }}
                >
                  3<span className="text-primary">×</span>
                </p>
                <p className="text-[0.5312rem] font-mono tracking-[0.18em] uppercase text-background/85 leading-relaxed mt-1.5">
                  Rollout
                  <br />
                  phases hit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — IMPACT */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark} border-t border-b border-background/10`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>IMPACT</SectionLabel>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-sm text-background/75 leading-relaxed mb-8"
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
                  <p className="text-sm font-medium text-background/90 mb-2">{card.title}</p>
                  <p className="text-xs text-background/75 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/*   <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-0.5 bg-[hsl(220,10%,6%)] rounded-b-xl p-5"
          >
            <p className="text-xs italic text-background/85 leading-relaxed">
              Honest note: Scroll depth and transition targets are the strongest validated signals. Broader
              persona-level behavioural data was limited by the testing scope — something I'd invest in differently on a
              revisit.
            </p>
          </motion.div> */}
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
        quote="The goal was never to make reading faster. It was to make it"
        quoteAccent="easier to start."
        quoteEnd=""
        meta="ESPN Cricinfo · Quick Reads · iOS & Android · 2024"
      />

      {/* EXPLORE MORE */}
      <ExploreMore currentSlug="quick-reads" />
    </div>
  );
};

export default CaseStudyQuickReads;
