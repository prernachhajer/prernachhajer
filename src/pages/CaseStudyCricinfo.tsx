// ─────────────────────────────────────────────
// CASE STUDY — Cricinfo Homepage (REFERENCE PAGE)
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

const CaseStudyCricinfo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <NavCaseStudy period="2021 — 2026" />

      {/* HERO */}
      <CaseStudyHero
        headline="In five years, we got"
        headlineAccent="two chances"
        headlineEnd="to work on this page."
        tags={["Cricinfo", "Homepage Redesign", "Senior Designer → Lead", "10M+ Users", "2021 — 2026"]}
      />

      {/* THE STARTING POINT — 2021 */}
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
                    <span className={`text-[11px] text-muted-foreground/60 font-mono tracking-wide`}>
                      espncricinfo.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto overflow-x-hidden border border-border border-t-0 rounded-b-xl bg-background min-h-0 scrollbar-thin scrollbar-thumb-border">
                <img src={desk2021} alt="Cricinfo 2021 desktop homepage" className="w-full h-auto block" />
              </div>
            </div>
            {/* Mobile */}
            <div className="w-[150px] md:w-[170px] shrink-0 flex-col h-full hidden md:flex">
              <div
                className="flex-1 min-h-0 bg-[#0a0a0a] rounded-[32px] p-[6px] flex flex-col relative"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.25)" }}
              >
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[52px] h-[16px] bg-[#0a0a0a] rounded-full z-[2]" />
                <div className="flex-1 min-h-0 rounded-[26px] overflow-y-auto overflow-x-hidden bg-background mt-0 scrollbar-none">
                  <img src={mobile2021} alt="Cricinfo 2021 mobile homepage" className="w-full h-auto block" />
                </div>
                <div className="h-[4px] bg-white/20 rounded-full w-[36%] mx-auto mt-[6px] mb-[4px]" />
              </div>
            </div>
          </motion.div>
          <p className="text-center text-xs text-muted-foreground/50 mt-4 tracking-wide">Cricinfo Homepage · 2021</p>
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
              10M+ users. A homepage that worked as a feed. Users arrived for matches — and left. No habit. No reason to
              return.
            </p>
            <p className="text-sm text-background/40 mt-5 leading-relaxed">
              This meant high traffic, but low retention and weak long-term engagement.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Chronological feed", "No structure", "Articles dominated"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/30"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary">
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
            className="bg-[hsl(220,18%,16%)] p-12 md:rounded-r-xl"
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
                  className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/30"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary">
                Habit, not just utility
              </span>
            </div>
          </motion.div>
        </div>
      </DarkSection>

      {/* 02 — IMPACT */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark} border-t border-background/10`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>02 — Impact</SectionLabel>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-sm text-background/40 leading-relaxed mb-8"
          >
            To validate the shift from utility → habit, we tracked engagement, system efficiency, and repeat behaviour.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-0.5">
            {[
              {
                label: "Session duration · Live matches",
                num: "+22%",
                title: "Users stayed longer during peak traffic",
                desc: "The strongest quantified signal. Live match sessions — historically the quickest — extended meaningfully after the structured redesign.",
              },
              {
                label: "Design system efficiency",
                num: "3×",
                title: "Component reuse across the product",
                desc: "Faster builds, less debt, consistent iterations across three years. The only concrete system metric — and it held across all three versions.",
              },
              {
                label: "Engagement & conversion",
                num: "↑",
                title: "Casual users started returning between matches",
                desc: "Repeat visits from casual users increased. Homepage also became an app conversion surface — users discovering depth followed through to download.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`bg-[hsl(220,18%,12%)] p-10 flex flex-col justify-between ${i === 0 ? "md:rounded-l-xl" : ""} ${i === 2 ? "md:rounded-r-xl" : ""}`}
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
            className="mt-0.5 bg-[hsl(220,10%,6%)] rounded-b-xl p-5 flex items-center gap-4"
          >
            <p className="text-xs italic leading-relaxed text-muted-foreground">
              Honest caveat: +22% and 3× are the strongest quantified signals. Repeat visit and conversion trends are
              directional — real, but not yet tightened for formal reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 03 — PROCESS & RESEARCH */}
      <Section label="03 — Process & Research">
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
            className="bg-secondary p-12 rounded-l-xl flex flex-col justify-center"
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
            className="bg-[hsl(152,48%,20%)] p-12 rounded-r-xl flex flex-col justify-center"
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

        {/* Insights Grid */}
        <div className={`${layout.container} mx-auto mt-0.5 grid md:grid-cols-2 gap-0.5`}>
          {[
            {
              num: "Finding 01",
              title: "Live matches are the true entry point",
              desc: "Users arrived to check scores, understand context, and navigate quickly. If live context wasn't immediate, they dropped off. The homepage is a navigation layer for live sport — not a content destination.",
              tag: "Reframed the brief",
            },
            {
              num: "Finding 02",
              title: "Complexity peaked at the worst moment",
              desc: "During live matches — peak traffic — competing modules, weak hierarchy, and high density created cognitive overload exactly when speed mattered most.",
              tag: "UX critical",
            },
            {
              num: "Finding 03",
              title: "Three user types, one surface",
              desc: "Casual users wanted quick updates. Content consumers wanted stories. Power users wanted stats. Serving all three from one layout made personalisation critical — but hard to prioritise.",
              tag: "Strategic tension",
            },
            {
              num: "Finding 04",
              title: "Scalability was a system problem",
              desc: "Non-modular architecture made every new tournament or content type a high-effort rebuild. The problem wasn't content — it was system design bottlenecking every redesign before it started.",
              tag: "Root cause",
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
                <span className={`${t.labelSm} px-3 py-1 rounded-full border border-primary/20 text-primary`}>
                  {insight.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 04 — DESIGN EVOLUTION — Carousel */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>04 — Design Evolution</SectionLabel>
        </div>
        <Prose>
          <h2>Three versions. Five years. One surface.</h2>
          <p>
            Each iteration was a response to real data — not a desire to redesign. The carousel below walks through what
            changed, what didn't, and why.
          </p>
        </Prose>

        <div className={`${layout.container} mx-auto mt-12`}>
          <HomepageEvolutionCarousel />
        </div>
      </section>

      {/* 05 — DESIGN DECISIONS (Constraint / Decision / Tradeoff) */}
      <Section label="05 — Design Decisions">
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
              label: "The decision · 2021–2026",
              title: "Don't redesign the live score strip.",
              desc: "The HSB was retained and improved incrementally — never rebuilt from scratch. Across all three redesigns, it remained the strongest engagement anchor on the page. Knowing what not to redesign is as important as knowing what to change.",
              badge: "✓ Sustained 2021–2026",
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
              <div className="bg-card p-10">
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>The constraint</p>
                <h4 className="font-semibold text-base mb-3">{block.constraint.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.constraint.desc}</p>
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

      {/* HSB EVOLUTION */}
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
                The Decision · 2021–2026
              </span>
              <h2
                className="text-2xl md:text-3xl font-normal tracking-[-0.025em] text-background/90 leading-tight"
                style={{ fontFamily: t.displayFont }}
              >
                Don't redesign the
                <br />
                <span className="text-primary italic">live score strip.</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-mono tracking-[0.07em] text-[hsl(152,48%,50%)] bg-[hsl(152,48%,20%)]/10 border border-[hsl(152,48%,30%)]/20 rounded-full px-4 py-2 mt-1">
              ✓ Sustained 2021–2026
            </span>
          </motion.div>

          <div className="flex flex-col gap-8 mb-12">
            {[
              {
                year: "2021",
                sub: "HSV",
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
                  <span className="text-sm font-mono font-medium tracking-[0.1em] text-background/90">
                    {screen.year}
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.12em] uppercase text-background/20">
                    {screen.sub}
                  </span>
                  {i < 2 && (
                    <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-background/10 to-transparent" />
                  )}
                </div>
                <div
                  className="rounded-xl overflow-hidden border border-background/[0.07] bg-[hsl(220,15%,11%)]"
                  style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
                >
                  <div className="bg-[hsl(220,14%,13%)] border-b border-background/[0.07] px-3.5 py-2.5 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                      <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                      <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 bg-[hsl(220,20%,8%)] border border-background/5 rounded-md px-3 py-1">
                      <span className="text-[9.5px] font-mono tracking-wide text-background/20">espncricinfo.com</span>
                    </div>
                  </div>
                  <img src={screen.img} alt={`Cricinfo ${screen.year} homepage`} className="w-full block" />
                  <div className="px-4 py-3 border-t border-background/[0.07] bg-[hsl(220,18%,8%)]">
                    <p className="text-xs text-background/40 font-medium leading-relaxed">{screen.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <hr className="border-t border-background/[0.07] mb-8" />
            <div className="grid md:grid-cols-[1fr_140px] gap-10 items-center">
              <p className="text-sm text-background/50 leading-[1.85]">
                The live score strip was the{" "}
                <strong className="text-background/90 font-bold">highest-performing surface</strong> on the homepage.
                Across three redesigns, it was the one thing we chose not to rebuild. Not because we couldn't improve it
                — but because <strong className="text-background/90 font-bold">its familiarity was its strength</strong>
                . Users trusted it. It anchored every visit. Restraint, here, was a design decision.
              </p>
              <div className="text-center md:border-l md:border-background/[0.07] md:pl-9">
                <p
                  className="text-5xl font-extrabold tracking-tight leading-none text-background/90"
                  style={{ fontFamily: t.displayFont }}
                >
                  3<span className="text-primary">×</span>
                </p>
                <p className="text-[8.5px] font-mono tracking-[0.18em] uppercase text-background/20 leading-relaxed mt-1.5">
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
              desc: "On the roadmap since 2021. Infrastructure exists. User need is real. It hasn't shipped because it hasn't been the business priority — an organisational problem, not a design one.",
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
              <h4 className="font-semibold text-base mb-2 tracking-tight">{card.title}</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">{card.desc}</p>
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
          <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-2xl">
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
          className="text-3xl md:text-4xl font-normal mb-12 tracking-[-0.025em] text-background/90 max-w-3xl mx-auto"
          style={{ fontFamily: t.displayFont }}
        >
          Five years on one surface teaches you things a project never could.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Make the case before making the design. Research gave the problem language. Without that, the 2023 redesign doesn't happen — not because the idea was wrong, but because the <em>problem wasn't visible yet</em>.",
            "Restraint is a design decision. Not redesigning the HSB across three versions was as deliberate as anything we shipped. <em>What not to redesign</em> matters as much as what to change.",
            "Design at scale is the <em>ongoing negotiation</em> between what users need, what the business wants, and what the system can support. The layout is the last part of that — not the first.",
            "A homepage is never finished. Not because the work is incomplete, but because users keep changing, the product keeps growing, and the <em>habit you're trying to build</em> takes longer than any single redesign.",
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
        meta="Cricinfo · Homepage Redesign · 2021 — 2026"
      />

      {/* EXPLORE MORE */}
      <ExploreMore currentSlug="cricinfo" />
    </div>
  );
};

export default CaseStudyCricinfo;
