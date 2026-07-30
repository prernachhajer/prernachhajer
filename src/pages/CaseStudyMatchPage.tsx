// ─────────────────────────────────────────────
// CASE STUDY — Cricinfo Match Page Optimization
// Uses shared design system: @/lib/tokens + @/components/ds
// ─────────────────────────────────────────────

import { motion } from "framer-motion";
import matchTabsImg from "@/assets/match-page-tabs.png";
import matchSolutionImg from "@/assets/match-page-solution.png";
import matchSolution2Img from "@/assets/match-page-solution2.png";
import {
  NavCaseStudy,
  CaseStudyHero,
  SectionLabel,
  Section,
  DarkSection,
  Prose,
  LearningCard,
  ImagePlaceholder,
  ClosingSection,
  ExploreMore,
} from "@/components/ds";
import { animation, layout, spacing, type as t, surface, radius } from "@/lib/tokens";

const fade = animation.fade;

// Helper to remove numbers and prefixes from labels
const cleanLabel = (label: string) => {
  return typeof label === "string" ? label.replace(/^\d+\s*—\s*/, "").replace(/^PHASE\s*\d+:\s*/i, "") : label;
};

const CaseStudyMatchPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <NavCaseStudy period="2024 — 2025" />

      {/* HERO */}
      <CaseStudyHero
        headline="The match page had"
        headlineAccent="14 tabs."
        headlineEnd="Users couldn't find anything."
        tags={["Cricinfo", "Match Page Optimization", "Senior Designer", "Android & iOS"]}
        teams={["Sr. Product Designer", "Product Manager"]}
      />

      {/* 01 — PROBLEM */}
      <DarkSection label={cleanLabel("01 — Problem")}>
        <div className="grid md:grid-cols-2 gap-0.5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`${surface.darkCard} ${spacing.cardPadLg} md:rounded-l-xl`}
          >
            <p className={`${t.labelSm} text-background/85 mb-5`}>The state we were in</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.35] text-background/80"
              style={{ fontFamily: t.displayFont }}
            >
              12 tabs during a live match. 14 after it ended. Every new feature got its own tab. Nobody stepped back to
              look at the whole.
            </p>
            <p className="text-sm text-background/75 mt-5 leading-relaxed">
              Analytics confirmed what users were saying on the App Store and Twitter — core content was invisible,
              buried under a list no one could scroll through.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["12+ tabs live", "15 tabs post-match"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/65"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
                Core content buried
              </span>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            custom={1}
            className={`bg-[hsl(220,18%,16%)] ${spacing.cardPadLg} md:rounded-r-xl`}
          >
            <p className={`${t.labelSm} text-primary mb-5`}>What we were solving for</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.35] text-background/90"
              style={{ fontFamily: t.displayFont }}
            >
              Help users find what they came for — <em className="text-primary italic">faster</em>, at every stage of a
              match — without removing a single feature.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Tab discoverability", "Content findability"].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/65"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[0.6875rem] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
                Less friction, same depth
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="mt-10 rounded-xl overflow-hidden"
        >
          <img
            src={matchTabsImg}
            alt="Old match page showing 12 tabs during live match and 14 tabs post match"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </DarkSection>

      {/* 02 — IMPACT 
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark} border-t border-background/10`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>{cleanLabel("02 — Impact")}</SectionLabel>
          <div className="grid md:grid-cols-3 gap-0.5">
            {[
              {
                label: "Peak tab count · Post-match",
                num: "14→8",
                title: "More than halved — no features removed",
                desc: "Every tab that disappeared was merged into a logical group, not deleted.",
              },
              {
                label: "Content discovery",
                num: "↑",
                title: "Previously buried content got found",
                desc: "Overs and Report — invisible in the old structure — saw meaningful engagement improvement. Users could finally find them.",
              },
              {
                label: "Task completion",
                num: "↑",
                title: "Faster to reach what mattered",
                desc: "Points table, post-match report, overs breakdown — all faster. Fewer tabs meant less scrolling before finding the right one.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.num + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`${surface.darkCard} p-10 flex flex-col justify-between ${i === 0 ? "md:rounded-l-xl" : ""} ${i === 2 ? "md:rounded-r-xl" : ""}`}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-0.5 bg-[hsl(220,10%,6%)] rounded-b-xl p-5"
          >
            <p className="text-xs italic leading-relaxed text-muted-foreground">
              Honest caveat: tab count reduction is precise. Engagement and task completion improvements are directional
              — confirmed by the PM from analytics, but not tightened for formal reporting.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* 03 — INSIGHT */}
      <Section label={cleanLabel("03 — Insight")}>
        <Prose>
          {/*  <h2>Two gaps, not one.</h2> */}
          <p>
            Looking at the analytics and user feedback, two distinct problems emerged — and they needed separate
            solutions.
          </p>
        </Prose>
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
                className="text-2xl md:text-3xl font-normal tracking-[-0.015em] leading-[1.15]"
                style={{ fontFamily: t.displayFont }}
              >
                Three findings, two problems
              </h3>
            </div>
            <span className={`${t.labelSm} text-muted-foreground shrink-0 hidden md:block`}>03 findings</span>
          </motion.div>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "Content needs change with match state",
                desc: "What users want pre-match — squads, preview, fantasy — differs from what they need live or post-match. One static structure served none of these moments well.",
                tag: "TAB OVERLOAD",
              },
              {
                num: "02",
                title: "Users couldn't see what other tabs held",
                desc: "High-value content went ignored simply because it couldn't be seen.",
                tag: "Discovery gap",
              },
              {
                num: "03",
                title: "Peak complexity at the worst moment",
                desc: "12 tabs during a live match — exactly when users are most time-pressured and need the least friction.",
                tag: "TAB OVERLOAD",
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

      {/* 04 — SOLUTION */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark}`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>{cleanLabel("04 — Solution")}</SectionLabel>

          {/* Intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="max-w-3xl mx-auto mb-14"
          >
            <h2
              className="text-2xl md:text-3xl font-normal tracking-[-0.025em] mb-4 text-background/90 leading-tight"
              style={{ fontFamily: t.displayFont }}
            >
              Two gaps. Two fixes.
            </h2>
            <p className="text-sm text-background/75 leading-relaxed">
              Too many tabs → restructured around match state, so users see only what's relevant now. Buried content →
              cross-tab previews, so users discover other tabs without leaving the one they're on.
            </p>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-[0.625rem] tracking-[0.14em] uppercase text-background/75 font-medium mb-4"
          >
            Solution 1 — Match state-based tab structure
          </motion.p>

          {/* Solution 1 — Match state-based tab structure */}
          {/* <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-[0.625rem] tracking-[0.14em] uppercase text-background/75 font-medium mb-4"
          >
            Solution 1 — Match state-based tab structure
          </motion.p> */}
          <div className="grid md:grid-cols-4 gap-0.5">
            {[
              {
                name: "Pre-match",
                count: "6 tabs",
                tabs: [
                  "Summary",
                  "Preview",
                  { text: "Fantasy + Stats", bold: true },
                  "Squad",
                  "Table",
                  { text: "News + Photos + Videos", bold: true },
                ],
              },
              {
                name: "Toss",
                count: "7 tabs",
                tabs: [
                  "Summary",
                  "Preview",
                  { text: "Live blog + Commentary", bold: true },
                  { text: "Fantasy + Stats", bold: true },
                  "Table",
                  "News + Photos + Videos",
                  { text: "Playing XI", bold: true },
                ],
              },
              {
                name: "Live",
                count: "6 tabs",
                tabs: [
                  { text: "Live", bold: true },
                  { text: "Scorecard", bold: true },
                  { text: "Live blog + Commentary", bold: true },
                  { text: "Stats + Overs + Fantasy", bold: true },
                  "Table",
                  "News + Photos + Videos",
                ],
              },
              {
                name: "Post-match",
                count: "7 tabs",
                tabs: [
                  "Summary",
                  "Scorecard",
                  { text: "Live blog + Commentary", bold: true },
                  { text: "MVP + Fantasy + Stats + Overs", bold: true },
                  "Table",
                  "News + Photos + Videos",
                  { text: "Fan rating", bold: true },
                ],
              },
            ].map((state, i) => (
              <motion.div
                key={state.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`${surface.darkCard} overflow-hidden ${i === 0 ? "md:rounded-l-xl" : ""} ${i === 3 ? "md:rounded-r-xl" : ""}`}
              >
                <div className="px-7 pt-6 pb-4 border-b border-background/5">
                  <p
                    className="text-xl text-primary font-normal leading-none mb-1"
                    style={{ fontFamily: t.displayFont }}
                  >
                    {state.name}
                  </p>
                  <p className="text-[0.625rem] tracking-widest uppercase font-medium text-background/85">
                    {state.count}
                  </p>
                </div>
                <div className="px-7 py-5">
                  {state.tabs.map((tab, ti) => {
                    const text = typeof tab === "string" ? tab : tab.text;
                    const bold = typeof tab === "object" && tab.bold;
                    return (
                      <div
                        key={ti}
                        className={`text-xs py-2 border-b border-background/5 last:border-b-0 ${bold ? "text-background/85 font-medium" : "text-background/90"}`}
                      >
                        {text}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-10 overflow-hidden"
          >
            <img
              src={matchSolutionImg}
              alt="Four match states showing reduced tab counts — Pre-match 6 tabs, Live 6 tabs, Scorecard 6 tabs, Post-match 8 tabs"
              className="w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Groupings rationale */}
          <div className="grid md:grid-cols-2 gap-0.5 mt-10 mb-10">
            {[
              {
                title: "Group by what users want, not what we call it",
                desc: 'Users just wanted stats — they didn\'t care if it was labeled "Fantasy," "MVP," or "Overs." So we merged them into one tab.',
                label: "Stats · MVP · Fantasy · Overs → one tab",
              },
              {
                title: "Same user, different depth",
                desc: "Commentary and live blog readers are the same person wanting more or less detail. One toggle, not two tabs.",
                label: "Live blog + Commentary → one tab, two sub-tabs",
              },
              {
                title: "One tab that grows with the match",
                desc: "Squad, playing XI, and scorecard are one tab that updates as the match moves forward.",
                label: "Squad → Playing XI → Scorecard",
              },
              {
                title: "One intent, one tab",
                desc: "Browsing news, videos, and photos is one intent — so it's one destination.",
                label: "News · Videos · Photos → Media",
              },
            ].map((group, i) => {
              const corners = ["md:rounded-tl-xl", "md:rounded-tr-xl", "md:rounded-bl-xl", "md:rounded-br-xl"];
              return (
                <motion.div
                  key={group.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i}
                  className={`${surface.darkCard} p-9 ${corners[i]}`}
                >
                  <h4 className="text-sm font-medium text-background/90 mb-2">{group.title}</h4>
                  <p className="text-[0.8125rem] text-background/55 leading-relaxed">{group.desc}</p>
                  <p className="text-[0.625rem] tracking-widest uppercase font-medium text-background/85 mt-4 pt-4 border-t border-background/10">
                    {group.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-[0.625rem] tracking-[0.14em] uppercase text-background/75 font-medium mb-4 mt-16"
          >
            Trade-offs we accepted Tab names can no longer describe everything inside them The sub-tab toggle adds a
            step some users won't notice they need Playing XI is no longer a destination of its own
          </motion.p>

          {/* Solution 2 — Cross-tab content snacking */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-[0.625rem] tracking-[0.14em] uppercase text-background/75 font-medium mb-4 mt-16"
          >
            Solution 2 — Cross-tab content snacking
          </motion.p>
          <div className="grid md:grid-cols-2 gap-0.5">
            {[
              {
                where: "Summary tab — discovery hub",
                title: "Brought the best of every tab to one place",
                desc: "Report, MVP, points table, news, video, fan rating — all shown on Summary before users had to go looking.",
              },
              {
                where: "Live tab — inline commentary preview",
                title: "Commentary, right where users already are",
                desc: "No need to switch tabs — the last 20 balls of commentary show up inline on Live tab.",
              },
              {
                where: "Scorecard — contextual media",
                title: "Wicket falls. Photo appears. Right there.",
                desc: "Media appears on Scorecard tied to the moment — not buried in a tab users might never open.",
              },
              {
                where: "Commentary — embedded key moments",
                title: "Photos and videos inside the ball itself",
                desc: "A wicket or a six — photos and videos show up directly inside the commentary, no extra tap.",
              },
            ].map((snack, i) => {
              const corners = ["md:rounded-tl-xl", "md:rounded-tr-xl", "md:rounded-bl-xl", "md:rounded-br-xl"];
              return (
                <motion.div
                  key={snack.where}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i}
                  className={`${surface.darkCard} p-9 ${corners[i]}`}
                >
                  <h4 className="text-sm font-medium text-background/90 mb-2">{snack.title}</h4>
                  <p className="text-[0.8125rem] text-background/55 leading-relaxed">{snack.desc}</p>
                  <p className="text-[0.625rem] tracking-widest uppercase font-medium text-background/85 mt-4 pt-4 border-t border-background/10">
                    {snack.where}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-10 rounded-xl overflow-hidden"
          >
            <img
              src={matchSolution2Img}
              alt="Cross-tab content snacking — Summary, Live, Scorecard and Commentary views"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* KEY DECISIONS */}
      <Section label={cleanLabel("05 — Design Decisions")}>
        <Prose>
          <h2>The groupings that needed justification.</h2>
          <p>
            Not every merge was obvious. Each one required a clear reason — otherwise we were just moving tabs around,
            not solving anything.
          </p>
        </Prose>

        {[
          {
            question: {
              title: "Why combine Stats, MVP, Fantasy, and Overs?\u00a0",
              desc: "",
            },
            decision: {
              title: "Group by user intent, not content type.",
              desc: "That’s one person, one intent. Four tabs for one intent is four too many.",
            },
            tradeoff: {
              title: "Trade-off:",
              desc: "The tab name can no longer describe everything inside it.",
            },
          },
          {
            question: {
              title: "Why combine Live blog and Commentary into one tab?\u00a0",
              desc: "",
            },
            decision: {
              title: "Same user, different depth. One tab, two sub-tabs.",
              desc: "A user who wants ball-by-ball updates is the same user who wants analytical context.\u00a0",
            },
            tradeoff: {
              title: "Trade-off:",
              desc: "Adding a sub-tab toggle adds interaction complexity.",
            },
          },
          {
            question: {
              title: "Why does Scorecard now contain Playing XI?\u00a0",
              desc: "",
            },
            decision: {
              title: "Progressive disclosure — the same data evolves.",
              desc: "Playing XI becomes the scorecard as the match fills in - one tab, not two.",
            },
            tradeoff: {
              title: "Trade-off:",
              desc: "Playing XI is no longer a first-class tab.",
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
            className={`${layout.container} mx-auto ${idx === 0 ? "mt-12" : ""}   !max-w-3xl`}
          >
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 border-t border-border pt-8 pb-10">
              <div>
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>The question</p>
                <p className="text-xl md:text-1xl leading-snug tracking-[-0.01em]">
                  {block.question.title} {block.question.desc}
                </p>
              </div>
              <div>
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>The decision</p>
                <p className="text-xl md:text-1xl leading-snug tracking-[-0.01em] mb-6">
                  {block.decision.title} <span className="text-muted-foreground">{block.decision.desc}</span>
                </p>
                <p className="text-base italic text-muted-foreground leading-relaxed">
                  {block.tradeoff.title} {block.tradeoff.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className={`${layout.container} mx-auto border-t border-border`} />
      </Section>

      {/* 06 — OUTCOME */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark}`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>06 — Outcome</SectionLabel>

          {/* Lead stat */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-[hsl(220,10%,6%)] rounded-t-xl p-12 flex flex-col md:flex-row items-center gap-14 mb-0.5"
          >
            <div className="flex-1">
              <h3
                className="text-xl md:text-2xl font-normal text-background/90 leading-snug mb-3"
                style={{ fontFamily: t.displayFont }}
              >
                Fewer tabs. Better engagement. Same features.
              </h3>
              <p className="text-[0.8125rem] text-background/75 leading-relaxed">
                The goal was never to remove features — it was to make them findable. Every feature that existed before
                the redesign still exists. The difference is that users can now reach them.
              </p>
            </div>
            <div className="shrink-0 text-center">
              <p
                className="text-6xl md:text-7xl font-normal text-primary leading-none"
                style={{ fontFamily: t.displayFont }}
              >
                14→8
              </p>
              <p className="text-[0.625rem] tracking-widest uppercase font-medium text-background/85 mt-2">
                Peak tab count
              </p>
            </div>
          </motion.div>

          {/* Outcome grid */}
          <div className="grid md:grid-cols-2 gap-0.5 mt-10">
            {[
              {
                label: "Findability",
                title: "Points table and Report became discoverable",
                desc: "Two of the most-sought pieces of content, previously buried, now within reach.",
              },
              {
                label: "Previously invisible content",
                title: "Overs saw improved engagement",
                desc: "Same content, better position.",
              },
              {
                label: "Discovery",
                title: "Summary became a genuine entry point",
                desc: "Content snacking surfaced videos, reports, and stats users would've never found browsing tabs alone.",
              },
              {
                label: "System",
                title: "A framework for every future feature",
                desc: "Match states now answer every new tab request — the page can grow without collapsing again.",
              },
            ].map((card, i) => {
              const corners = ["", "", "md:rounded-bl-xl", "md:rounded-br-xl"];
              return (
                <motion.div
                  key={card.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i}
                  className={`${surface.darkCard} p-9 ${corners[i]}`}
                >
                  <h4 className="text-sm font-medium text-background/90 mb-2">{card.title}</h4>
                  <p className="text-[0.8125rem] text-background/55 leading-relaxed">{card.desc}</p>
                  <p className="text-[0.625rem] tracking-widest uppercase font-medium text-background/85 mt-4 pt-4 border-t border-background/10">
                    {card.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-0.5 bg-[hsl(220,10%,6%)] rounded-b-xl p-5"
          >
            <p className="text-xs italic leading-relaxed text-muted-foreground">
              Honest caveat: tab count reduction is precise. Engagement and task completion improvements are directional
              — confirmed by the PM from analytics, but not tightened for formal reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REFLECTION */}
      <DarkSection label="Reflection">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="text-2xl md:text-3xl font-normal mb-8 tracking-[-0.025em] text-background/90 max-w-3xl"
          style={{ fontFamily: t.displayFont }}
        >
          Design debt doesn't announce itself. It just gets heavier.
        </motion.h2>
        <div className="max-w-3xl space-y-4">
          {[
            "No single tab addition was wrong in isolation — each made sense at the time. The problem was the absence of a system to evaluate decisions against. The match state model became that system.",
            "Findability and discoverability are different problems. Navigation solves one. Content snacking solves the other. Both were needed — one without the other would have left users with fewer tabs but still missing content.",
            "The best outcome of this project wasn't the launch. It was that the team now has a framework for every feature request that comes next.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
              className="text-sm text-background/75 leading-[1.75]"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </DarkSection>

      {/* CLOSING */}
      <ClosingSection
        quote="The content was always there. We just made it"
        quoteAccent="possible to find."
        meta="Cricinfo · Match Page Optimization · Android & iOS"
      />

      {/* EXPLORE MORE */}
      <ExploreMore currentSlug="match-page" />
    </div>
  );
};

export default CaseStudyMatchPage;
