// ─────────────────────────────────────────────
// CASE STUDY — Cricinfo Match Page Optimization
// Uses shared design system: @/lib/tokens + @/components/ds
// ─────────────────────────────────────────────

import { motion } from "framer-motion";
import matchTabsImg from "@/assets/match-page-tabs.png";
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
      <DarkSection label="01 — Problem">
        <div className="grid md:grid-cols-2 gap-0.5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`${surface.darkCard} ${spacing.cardPadLg} md:rounded-l-xl`}
          >
            <p className={`${t.labelSm} text-background/20 mb-5`}>The state we were in</p>
            <p
              className="text-xl md:text-2xl font-normal leading-[1.35] text-background/50"
              style={{ fontFamily: t.displayFont }}
            >
              12 tabs during a live match. 15 after it ended. Every new feature got its own tab. Nobody stepped back to look at the whole.
            </p>
            <p className="text-sm text-background/40 mt-5 leading-relaxed">
              Analytics confirmed what users were saying on the App Store and Twitter — core content was invisible, buried under a list no one could scroll through.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["12+ tabs live", "15 tabs post-match"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/30"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
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
              Help users find what they came for — <em className="text-primary italic">faster</em>, at every stage of a match — without removing a single feature.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Tab discoverability", "Content findability"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/30"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary border border-primary/30">
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

      {/* 02 — IMPACT */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark} border-t border-background/10`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>02 — Impact</SectionLabel>
          <div className="grid md:grid-cols-3 gap-0.5">
            {[
              {
                label: "Peak tab count · Post-match",
                num: "14→7",
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
            <p className="text-xs italic leading-relaxed text-muted-foreground">
              Honest caveat: tab count reduction is precise. Engagement and task completion improvements are directional — confirmed by the PM from analytics, but not tightened for formal reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 03 — INSIGHT */}
      <Section label="03 — Insight">
        <Prose>
          <h2>Two gaps, not one.</h2>
          <p>Looking at the analytics and user feedback, two distinct problems emerged — and they needed separate solutions.</p>
        </Prose>
        <div className={`${layout.container} mx-auto mt-10 grid md:grid-cols-3 gap-0.5`}>
          {[
            {
              num: "Finding 01",
              title: "Content needs change with match state",
              desc: "What a user wants pre-match — squads, preview, fantasy — is completely different from what they need live or post-match. One static tab structure served none of these moments well.",
            },
            {
              num: "Finding 02",
              title: "Users couldn't see what other tabs held",
              desc: "Even users on the right tab had no visibility into what other tabs contained. High-value content was being ignored not from lack of interest, but lack of discovery.",
            },
            {
              num: "Finding 03",
              title: "Peak complexity at the worst moment",
              desc: "12 tabs during a live match — when users are most time-pressured — is when they need the least friction. The page was hardest to use when it mattered most.",
            },
          ].map((insight, i) => {
            const corners = i === 0 ? "md:rounded-l-xl" : i === 2 ? "md:rounded-r-xl" : "";
            return (
              <motion.div
                key={insight.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className={`bg-card p-10 ${corners}`}
              >
                <p className={`${t.labelSm} text-primary mb-4`}>{insight.num}</p>
                <h4 className="font-semibold text-base mb-3 tracking-tight">{insight.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 04 — SOLUTION */}
      <section className={`${spacing.sectionGap} ${layout.px} ${surface.dark}`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel dark>04 — Solution</SectionLabel>

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
              Two solutions, one problem.
            </h2>
            <p className="text-sm text-background/40 leading-relaxed">
              First: redesign the tab structure around match states so users only see what's relevant. Second: bring content previews to where users already are, so they discover what they'd otherwise miss.
            </p>
          </motion.div>

          {/* Solution 1 — Match state-based tab structure */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-[10px] tracking-[0.14em] uppercase text-background/40 font-medium mb-4"
          >
            Solution 1 — Match state-based tab structure
          </motion.p>
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
                  "Media",
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
                  "Media",
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
                  <p className="text-[10px] tracking-widest uppercase font-medium text-background/20">
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
                        className={`text-xs py-2 border-b border-background/5 last:border-b-0 ${bold ? "text-background/60 font-medium" : "text-background/35"}`}
                      >
                        {text}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Groupings rationale */}
          <div className="grid md:grid-cols-2 gap-0.5 mt-10">
            {[
              {
                label: "Stats · MVP · Fantasy · Overs → one tab",
                title: "Group by user intent, not content type",
                desc: "A user asking \u201Chow did we get here?\u201D wants the over breakdown, dismissal stats, player ratings, and match report. That\u2019s one person, one intent. Four tabs for one intent is four too many.",
              },
              {
                label: "Live blog + Commentary → one tab, two sub-tabs",
                title: "Same user, different depth",
                desc: "Commentary is ball-by-ball and factual. Live blog is analytical. Different in form, identical in intent. A toggle inside the tab preserves both while eliminating one from the bar.",
              },
              {
                label: "Squad → Playing XI → Scorecard",
                title: "Progressive disclosure — the same data evolves",
                desc: "Pre-match it's the full squad. Post-toss it's the confirmed Playing XI. Live it's the Playing XI plus the second team's innings beginning to fill in. One tab that evolves, not separate tabs for each moment.",
              },
              {
                label: "News · Videos · Photos → Media",
                title: "One intent, one tab",
                desc: "All passive content consumption. Users in this mode are browsing, not looking for something specific. One grouped destination is cleaner than three separate ones.",
              },
            ].map((group, i) => {
              const corners = [
                "md:rounded-tl-xl",
                "md:rounded-tr-xl",
                "md:rounded-bl-xl",
                "md:rounded-br-xl",
              ];
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
                  <p className="text-[10px] tracking-widest uppercase font-medium text-background/20 mb-3">
                    {group.label}
                  </p>
                  <h4 className="text-sm font-medium text-background/70 mb-2">{group.title}</h4>
                  <p className="text-[13px] text-background/40 leading-relaxed">{group.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10">
            <ImagePlaceholder label="Before vs after — same match state (post-match), old 15-tab list vs new 7-tab structure" />
          </div>

          {/* Solution 2 — Cross-tab content snacking */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-[10px] tracking-[0.14em] uppercase text-background/40 font-medium mb-4 mt-16"
          >
            Solution 2 — Cross-tab content snacking
          </motion.p>
          <div className="grid md:grid-cols-2 gap-0.5">
            {[
              {
                where: "Summary tab — discovery hub",
                title: "Brought the best of every tab to one place",
                desc: "Report snippet with tap-through. MVP top 5 preview. Points table snapshot. News and video thumbnails. Fan rating banner post-match. Users on Summary discovered content without ever going looking.",
              },
              {
                where: "Live tab — inline commentary preview",
                title: "Last 20 balls surfaced where users already were",
                desc: "Instead of requiring a tab switch, we showed the last 20 balls inline on the Live tab. Users experienced commentary without needing to find the tab first.",
              },
              {
                where: "Scorecard — contextual media",
                title: "Wicket falls. Photo appears. Right there.",
                desc: "When a dismissal happened, a relevant photo or video appeared inline against that entry. Content tied to the moment — not sitting passively in a media tab users may never visit.",
              },
              {
                where: "Commentary — embedded key moments",
                title: "Photos and videos inside the ball itself",
                desc: "For significant moments — a wicket, a six — media was embedded directly inside the ball-by-ball entry. The feed became richer without a separate tab visit.",
              },
            ].map((snack, i) => {
              const corners = [
                "md:rounded-tl-xl",
                "md:rounded-tr-xl",
                "md:rounded-bl-xl",
                "md:rounded-br-xl",
              ];
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
                  <p className="text-[10px] tracking-widest uppercase font-medium text-background/20 mb-3">
                    {snack.where}
                  </p>
                  <h4 className="text-sm font-medium text-background/70 mb-2">{snack.title}</h4>
                  <p className="text-[13px] text-background/40 leading-relaxed">{snack.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — KEY DECISIONS */}
      <Section label="05 — Key Decisions">
        <Prose>
          <h2>The groupings that needed justification.</h2>
          <p>Not every merge was obvious. Each one required a clear reason — otherwise we were just moving tabs around, not solving anything.</p>
        </Prose>

        {[
          {
            question: {
              title: "Why combine Stats, MVP, Fantasy, and Overs?",
              desc: "These are four distinct content types. A purist would keep them separate.",
            },
            decision: {
              title: "Group by user intent, not content type.",
              desc: "The user asking \u201Chow did we get here?\u201D wants all four. That\u2019s one person, one intent. Four tabs for one intent is four too many.",
            },
            tradeoff: {
              title: "\u201CThe tab name can no longer describe everything inside it.\u201D",
              desc: "We accepted that — discoverability inside the tab is a design problem, not a naming problem.",
            },
          },
          {
            question: {
              title: "Why combine Live blog and Commentary into one tab?",
              desc: "They feel similar but they're different. Merging them risks muddying the experience.",
            },
            decision: {
              title: "Same user, different depth. One tab, two sub-tabs.",
              desc: "A user who wants ball-by-ball updates is the same user who wants analytical context. One tab with a toggle preserves both, eliminating one from the bar.",
            },
            tradeoff: {
              title: "\u201CAdding a sub-tab toggle adds interaction complexity.\u201D",
              desc: "Users now make two decisions — which tab, then which sub-tab. We accepted it — reducing the top-level bar was the bigger cognitive burden.",
            },
          },
          {
            question: {
              title: "Why does Scorecard now contain Playing XI?",
              desc: "Moving it inside Scorecard makes it harder to find — users looking for the lineup won't know where to go.",
            },
            decision: {
              title: "Progressive disclosure — the same data evolves.",
              desc: "Playing XI and the full scorecard are the same data at different stages of completeness. In the first innings, the second team's XI is already there — waiting to fill in. One tab, evolving.",
            },
            tradeoff: {
              title: "\u201CPlaying XI is no longer a first-class tab.\u201D",
              desc: "Users who came for the lineup now need one more tap. Pre-match the tab bar has space; live and post-match, reducing noise matters more.",
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
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>The question</p>
                <h4 className="font-semibold text-base mb-3">{block.question.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.question.desc}</p>
              </div>
              <div className="bg-secondary p-10">
                <p className={`${t.labelSm} text-muted-foreground mb-4`}>The decision</p>
                <h4 className="font-semibold text-base mb-3">{block.decision.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.decision.desc}</p>
                <p className="text-xs font-medium text-primary mt-4">✓ Shipped</p>
              </div>
              <div className="bg-foreground text-background p-10">
                <p className={`${t.labelSm} text-background/20 mb-4`}>The trade-off</p>
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
              <p className="text-[13px] text-background/40 leading-relaxed">
                The goal was never to remove features — it was to make them findable. Every feature that existed before the redesign still exists. The difference is that users can now reach them.
              </p>
            </div>
            <div className="shrink-0 text-center">
              <p
                className="text-6xl md:text-7xl font-normal text-primary leading-none"
                style={{ fontFamily: t.displayFont }}
              >
                15→7
              </p>
              <p className="text-[10px] tracking-widest uppercase font-medium text-background/20 mt-2">
                Peak tab count
              </p>
            </div>
          </motion.div>

          {/* Outcome grid */}
          <div className="grid md:grid-cols-2 gap-0.5">
            {[
              {
                label: "Findability",
                title: "Points table and Report became discoverable",
                desc: "Two of the most-sought pieces of content — consistently buried before — are now within reach.",
              },
              {
                label: "Previously invisible content",
                title: "Overs saw improved engagement",
                desc: "The content hadn't changed. Its position had.",
              },
              {
                label: "Discovery",
                title: "Summary became a genuine entry point",
                desc: "With content snacking, users on Summary discovered videos, reports, and stats they would never have found by browsing tabs alone.",
              },
              {
                label: "System",
                title: "A framework for every future feature",
                desc: "Match states give the team a clear answer for every future tab request. The page can now absorb new features without collapsing.",
              },
            ].map((card, i) => {
              const corners = [
                "",
                "",
                "md:rounded-bl-xl",
                "md:rounded-br-xl",
              ];
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
                  <p className="text-[10px] tracking-widest uppercase font-medium text-background/20 mb-2">
                    {card.label}
                  </p>
                  <h4 className="text-sm font-medium text-background/70 mb-2">{card.title}</h4>
                  <p className="text-[13px] text-background/40 leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
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
              className="text-sm text-background/40 leading-[1.75]"
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
