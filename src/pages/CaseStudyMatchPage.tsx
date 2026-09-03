// ─────────────────────────────────────────────
// CASE STUDY — Cricinfo Match Page Redesign
// Uses shared design system: @/lib/tokens + @/components/ds
// ─────────────────────────────────────────────

import { motion } from "framer-motion";
import {
  NavCaseStudy,
  SectionLabel,
  ClosingSection,
  ExploreMore,
  ImpactPanel,
  impactGrid,
  impactCell,
} from "@/components/ds";
import { animation, layout, spacing, type as t, surface, radius } from "@/lib/tokens";
import matchTabsImg from "@/assets/match-page-tabs.png";
import beforeAfterAsset from "@/assets/match-before-after.png";
import problemOverviewAsset from "@/assets/match-problem.png";
import tabComparisonAsset from "@/assets/Tab_comparison.png";
import scorecardMediaAsset from "@/assets/Scorecard-media.png";
import commsMediaAsset from "@/assets/Comms-media.png";
import liveContentAsset from "@/assets/Live-content.png";
import summaryContentAsset from "@/assets/Summary-content.png";

const fade = animation.fade;

const IMG = "https://api.builder.io/api/v1/image/assets/6a614af2da2f4e509e633c1014b6b75b";

// ── Small building blocks (tokens only) ───────
const Figure = ({ src, caption, ratio }: { src: string; caption?: string; ratio?: number }) => (
  <figure className="w-full">
    <img
      src={src}
      alt={caption ?? ""}
      loading="lazy"
      className={`w-full h-auto object-contain ${radius.cardSm}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    />
    {caption && <figcaption className={`${t.labelSm} text-muted-foreground mt-4 text-center`}>{caption}</figcaption>}
  </figure>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 items-start">
    <span className="text-primary font-medium leading-relaxed">—</span>
    <span className="flex-1 text-sm md:text-base leading-relaxed text-muted-foreground">{children}</span>
  </li>
);

const TradeOff = ({ children }: { children: React.ReactNode }) => (
  <div className={`${radius.cardSm} border border-dashed border-primary/60 p-5 md:p-6`}>
    <p className={`${t.labelSm} text-primary mb-2.5`}>TRADE-OFF</p>
    <p className="text-sm leading-relaxed text-foreground">{children}</p>
  </div>
);

const Block = ({
  eyebrow,
  title,
  isFirst,
  children,
}: {
  eyebrow: string;
  title: string;
  isFirst?: boolean;
  children: React.ReactNode;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fade}
    className={`${isFirst ? "pt-0" : "pt-12 md:pt-14"} border-b border-border last:border-b-0 `}
  >
    <p className={`${t.labelSm} text-muted-foreground`}>{eyebrow}</p>
    <h3 className={`${t.h3} mt-3`} style={{ fontFamily: t.displayFont }}>
      {title}
    </h3>
    <div className="mt-6 md:mt-8">{children}</div>
  </motion.div>
);

const CaseStudyMatchPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavCaseStudy period="2024 — 2025" />

      {/* ── HERO ───────────────────────────── */}
      <section className={`pt-24 md:pt-28 pb-8 ${layout.px}`}>
        <div className={`max-w-5xl w-full mx-auto text-center`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            className={`flex items-center justify-center gap-4 ${t.labelSm} text-muted-foreground mb-6 md:mb-6`}
          >
            <span className="w-5 h-px bg-muted-foreground/70" />
            {/*  <span>ESPNcricinfo · Case Study</span> */}
            <span className="py-4">2x Speed, 1/2 the Clutter:&nbsp;</span>
            <span className="w-5 h-px bg-muted-foreground/70" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={1}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold leading-[1.08] tracking-[0.015em]"
            style={{ fontFamily: t.displayFont }}
          >
            <span className="px-2 font-medium">Simplifying the Cricket </span>
            <span className="block text-primary italic font-medium mt-2">Match Page</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={2}
            className="flex flex-wrap gap-3 justify-center mt-10 md:mt-12"
          >
            {["Lead Product Designer", "~6 months", "iOS & Android"].map((chip) => (
              <span
                key={chip}
                className={`${t.labelSm} px-4 py-2 rounded-full border border-border bg-secondary text-muted-foreground`}
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/*   <motion.dl
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={3}
            className="grid md:grid-cols-3 border-y border-border mt-12 md:mt-14 text-center max-w-5xl mx-auto"
          >
            {[
              { label: "PAGE LOAD", value: "~2x Faster", note: "Nearly halved", accent: true },
              { label: "App rating", value: "3.4 → 4.5", note: "Play Store + App Store" },
              { label: "Time on page", value: "+50%", note: "Improved" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`px-5 py-6 ${i > 0 ? "border-t md:border-t-0 md:border-l border-border" : ""}`}
              >
                <dt className={`${t.labelSm} text-muted-foreground mb-2.5`}>{item.label}</dt>
                <dd
                  className={`text-3xl md:text-4xl leading-none ${item.accent ? "text-primary" : "text-foreground"}`}
                  style={{ fontFamily: t.displayFont }}
                >
                  {item.value}
                </dd>
                <p className="text-xs text-muted-foreground mt-2.5">{item.note}</p>
              </div>
            ))}
          </motion.dl> */}

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={4}
            className={`${t.bodyLg} text-muted-foreground max-w-2xl mx-auto mt-12 md:mt-12`}
          >
            Cricinfo's match page is the core of the mobile experience, but over time it became cluttered with too many
            features. This redesign simplified the structure while keeping the modules hardcore fans use daily.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="max-w-5xl mx-auto mt-16 md:mt-20"
          >
            <img
              src={beforeAfterAsset}
              alt="Match page before and after redesign, annotated with cognitive load issues and improvements"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ───────────────── */}
      <section className={`${layout.px} border-t border-border pt-10 pb-10 bg-secondary/40`}>
        <div className={` mx-auto  max-w-5xl`}>
          <SectionLabel>Project overview</SectionLabel>
          <dl className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { label: "My role", value: "Lead Product Designer, Project lead" },
              { label: "Worked with", value: "Product, Engineering" },
              { label: "Scope", value: "Reduce cognitive load, Improve discovery, Habit formation" },
              { label: "Platform", value: "iOS & Android" },
              { label: "Timeframe", value: "~6 months, phased rollout" },

              /*{ label: "Rollout order", value: "Tabs → accordions → dropdown → surface preview → polls " }, */
            ].map((item) => (
              <div key={item.label}>
                <dt className={`${t.labelSm} text-muted-foreground pb-2 border-b border-border`}>{item.label}</dt>
                <dd className="mt-3 text-lg md:text-lg leading-snug" style={{ fontFamily: t.displayFont }}>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── TWO-MINUTE VERSION ─────────────── 
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>Two-minute version</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Problem",
                body: "One problem, not five: years of feature-by-feature additions, compounded by a team bias toward compactness, left the page dense, cluttered, and hard to read.",
              },
              {
                label: "Approach",
                body: "Keep the depth and fix the one problem with structural decisions.",
              },
              {
                label: "Hardest call",
                body: "Killed a fully-designed compact layout after an internal audit reproduced the complaint.",
              },
              {
                label: "Outcome",
                body: "Cognitive load down, IA rebuilt — and the numbers moved with it: app rating 3.4 → 4.5, time on page +50%, tabs halved, without removing a feature.",
              },
            ].map((item) => (
              <div key={item.label} className="pt-4 border-t border-border">
                <p className={`${t.labelSm} text-muted-foreground`}>{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── PROBLEM ────────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} max-w-3xl mx-auto`}>
          <div className={`max-w-3xl mx-auto`}>
            <SectionLabel>Problem</SectionLabel>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="">
              <h2 className={t.h2} style={{ fontFamily: t.displayFont }}>
                More tabs. More clutter. No hierarchy.
              </h2>
              <p className={`${t.bodyLg} text-muted-foreground mt-5`}>
                Over time, more and more features were added to the match page. This led to more tabs, more content, and
                a page that became harder to navigate and understand.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-10 md:gap-14 items-start mt-16 md:mt-8 pt-4">
              <div className="mb-12">
                <p className={`${t.labelSm} text-muted-foreground mb-6`}>Problem, broken down</p>
                <ul className="flex flex-col gap-4">
                  <Bullet>
                    <strong className="text-foreground font-semibold">Business problem:&nbsp;</strong>
                    We were losing clients to competitors like Crex, Cricbuzz, and Google who offered faster, lighter
                    alternatives to the same information.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">User problem:&nbsp;</strong>
                    Too much information, packed with no clear hierarchy. Too much information, packed with no clear
                    hierarchy. The page was difficult to scan and navigate.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Design problem:&nbsp;</strong>
                    New features and data kept getting added without rethinking the overall structure. Stakeholder
                    requests often meant adding another tab or module, which made the page increasingly dense and harder
                    to use.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Band-aid:&nbsp;</strong>
                    Adding new tabs and squeezing content into existing modules was the quickest way to ship new
                    features without disrupting what was already there. Over time, this only added to the clutter.
                  </Bullet>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img
              src={problemOverviewAsset}
              alt="Four match page screens annotated with information overload, data overload, hard to discover and difficult to scan issues"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Evidence */}
          <div className="max-w-4xl mx-auto mt-16 md:mt-20 pt-12 border-t border-border">
            <p className={`${t.labelSm} text-muted-foreground`}>Evidence, in their own words</p>
            <h3 className={`${t.h3} mt-4`} style={{ fontFamily: t.displayFont }}>
              Users Reviews
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  quote: "On Cricinfo it is like huge information is dumped… when we require only few things",
                  source: "Twitter",
                },
                {
                  quote: "It takes forever to open the scorecard page, there's just too much stuff in my way.",
                  source: "User audit #4",
                },
                {
                  quote:
                    "Cricinfo used to be simple. Now I have to scroll through 12 options just to find who is bowling.",
                  source: "App Store review",
                },
              ].map((q) => (
                <div key={q.source} className="relative rounded-xl border border-border/60 bg-white p-6 pt-8 shadow-sm">
                  <span className="absolute top-3 left-4 text-5xl leading-none text-primary/30 font-serif select-none">
                    "
                  </span>
                  <p className="text-lg leading-relaxed text-foreground relative z-10">{q.quote}</p>
                  <cite
                    className={`${t.labelSm} text-muted-foreground mt-4 pt-3 border-t border-border block not-italic`}
                  >
                    {q.source}
                  </cite>
                </div>
              ))}
            </div>

            <p className={`${t.bodyLg} text-muted-foreground mt-8 max-w-3xl`}>
              A Test match scorecard could mean four full innings tables stacked on one page. The clutter wasn’t just a
              perception problem; it was built into the structure.
              <br />
              <br />
              Competitors like Cricbuzz and Google offered a simpler experience, even with less depth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-16 md:mt-20">
            <Figure src={`${IMG}/25afa1319339dd84885754dc0ca87f26559c3a99?placeholderIfAbsent=true`} />
            <Figure src={`${IMG}/da5c3a6c38198d9c29287724e06c29310bdd9121?placeholderIfAbsent=true`} />
          </div>

          {/* Competitive */}
          <div className="max-w-4xl mx-auto mt-16 md:mt-20 pt-12 border-t border-border">
            <p className={`${t.labelSm} text-muted-foreground mb-6`}>Cricinfo vs. Cricbuzz</p>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className={`overflow-hidden border border-border ${radius.cardSm}`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`bg-secondary ${t.labelSm} text-muted-foreground`}>
                      <th className="text-left font-medium p-3">Feature</th>
                      <th className="text-left font-medium p-3 w-[28%]">Cricinfo</th>
                      <th className="text-left font-medium p-3 w-[28%]">Cricbuzz</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Active tab count", "8 – 15", "4 – 6", true],
                      ["Ball-by-ball details", "Rich commentary, but slower", "Real-time, super-fast updates", false],
                      ["User Experience", "Clunky, dated interface", "Sleek, intuitive, especially mobile", false],
                      ["Layout density options", "None (one size)", "User selectable", true],
                    ].map(([feature, a, b, accent]) => (
                      <tr key={feature as string} className="border-t border-border">
                        <td className="p-3 text-foreground">{feature}</td>
                        <td className={`p-3 ${accent ? "text-primary" : "text-muted-foreground"}`}>{a}</td>
                        <td className="p-3 text-muted-foreground">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <blockquote className={`pl-5 ${surface.accentLine}`}>
                  <p className="text-lg leading-relaxed">
                    "We didn't just have to make Cricinfo cleaner, we had to beat the competitors' perception of speed."
                  </p>
                </blockquote>
                <p className={`${t.bodyLg} text-muted-foreground mt-6`}>
                  Users had started choosing different products for different needs: Cricbuzz for quick updates and
                  video, and Cricinfo, often on desktop, for stats and deeper content.
                  <br />
                  <br />
                  Speed and depth had effectively become two separate experiences.
                </p>
              </div>
            </div>

            {/* Users */}
            <div className="max-w-4xl mx-auto mt-16 md:mt-20 pt-12 border-t border-border">
              <p className={`${t.labelSm} text-muted-foreground mb-6`}>Who We Designed For</p>
              <div className="grid lg:grid-cols-1 gap-10 items-start">
                <div className={`overflow-hidden border border-border ${radius.cardSm}`}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className={`bg-secondary ${t.labelSm} text-muted-foreground`}>
                        <th className="text-left font-medium p-3">User segment</th>
                        <th className="text-left font-medium p-3 w-[28%]">Current behaviour</th>
                        <th className="text-left font-medium p-3 w-[28%]">OPPORTUNITY&nbsp;&nbsp;</th>
                        <th className="text-left font-medium p-3 w-[28%]">PAIN POINT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Live Match Follower ",
                          "Visits repeatedly during live games",
                          "Too much information to process quickly",
                          "Surface what matters most",
                          true,
                        ],
                        [
                          "Content consumer",
                          "Reads previews and analysis",
                          "Relevant content is hard to discover",
                          "Improve discovery",
                          true,
                        ],
                        [
                          "Casual fan",
                          "Visits during major events",
                          "Experience can feel overwhelming",
                          "Simplify and Habit forming",
                          true,
                        ],
                      ].map(([feature, a, b, opportunity, accent]) => (
                        <tr key={feature as string} className="border-t border-border">
                          <td className="p-3 text-foreground">{feature}</td>
                          <td className={`p-3 ${accent ? "text-primary" : "text-muted-foreground"}`}>{a}</td>
                          <td className="p-3 text-muted-foreground">{opportunity}</td>
                          <td className="p-3 text-muted-foreground">{b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <blockquote className={`pl-5 ${surface.accentLine}`}>
                    <p className="text-lg leading-relaxed">
                      <b>Success outcome:</b> more exploration, deeper engagement, and higher content consumption across
                      all segments.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strategy ──────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>DESIGN STRATEGY</SectionLabel>
          <h2 className={t.h2} style={{ fontFamily: t.displayFont }}>
            Depth wasn't the problem. The absence of structure was.
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="grid lg:grid-cols-2 gap-10 items-start"
          >
            <div>
              <p className={`${t.bodyLg} text-muted-foreground mt-5`}>
                Hardcore fans still wanted the depth, so we focused on better navigation and clearer priorities rather
                than removing features.
                {"\n\n"}
                <br />
                <br />
                The goal was to make the page easier to use without cutting content.
              </p>
            </div>
            <div className={`${radius.cardSm} border border-border ${surface.card} p-6 md:p-7`}>
              <p className={`${t.labelSm} text-muted-foreground`}>THE PRINCIPALS</p>
              <ul className="flex flex-col gap-4 mt-4">
                <Bullet>Show previews, not everything at once; tap to go deeper</Bullet>
                <Bullet>Combine what belongs together</Bullet>
                <Bullet>Surface what matters instead of burying it</Bullet>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW WE DECIDED ──────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`max-w-5xl mx-auto`}>
          <SectionLabel>HOW WE DECIDED</SectionLabel>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className={`${t.h2} max-w-3xl`} style={{ fontFamily: t.displayFont }}>
              Each problem led to a question that shaped the solution.
            </h2>
            <p className={`${t.bodyLg} text-muted-foreground mt-5 max-w-3xl`}>
              The two problems from the Insight- relevance and discoverability- broke down into four sharper questions. Each decision in the next section answers one of them directly.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mt-10 md:mt-10 pt-12 ">
            <p className={`${t.labelSm} text-muted-foreground mb-6`}>HOW MIGHT WE</p>
            <div className="grid lg:grid-cols-1 gap-10 items-start">
              <div className={`overflow-hidden border border-border ${radius.cardSm}`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`bg-secondary ${t.labelSm} text-muted-foreground`}>
                      <th className="text-left font-medium p-3 ">Category</th>
                      <th className="text-left font-medium p-3 w-[42%]">The question we asked</th>
                      <th className="text-left font-medium p-3 w-[42%]">Decisions that answer it &nbsp;&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Structure",
                        "How might we show only what's relevant to this exact moment in the match?",
                        "Reduced the tab count using usage data (points table vs. MVP); accordions that open to the currently relevant state, not day one",

                        true,
                      ],
                      [
                        "Discoverability",
                        "How might we surface the right content to people who don't know to look for it?",
                        "Commentary excerpt on the summary page with a tap-through to the full tab; content surfaced inline where it's earned — wicket photos, ball-scroller, report card",

                        true,
                      ],
                      [
                        "Navigation",
                        "How might we let people move sideways across matches without losing their place?",
                        "Recent-matches dropdown + prev/next, later consolidated into a \"more\" menu once the app bar itself got overloaded",

                        true,
                      ],
                      [
                        "Engagement",
                        "How might we open the page to more fans without re-cluttering it?",
                        "Polls and fan ratings as a lighter layer sitting beside the depth, not inside it",

                        true,
                      ],
                    ].map(([feature, a, b, accent]) => (
                      <tr key={feature as string} className="border-t border-border">
                        <td className="p-3 text-foreground">{feature}</td>
                        <td className={`p-3 ${accent ? "text-primary" : "text-muted-foreground"}`}>{a}</td>
                        <td className="p-3 text-muted-foreground">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DECISIONS ──────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <div className="max-w-5xl pb-0 mb-0">
            {/*   <SectionLabel className="!mb-0">The decisions</SectionLabel> */}

            <div
              className="flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.12em] uppercase mb-0 md:mb-0 max-w-5xl mx-auto text-primary"
              style={{ opacity: 1, transform: "none" }}
            >
              <span className="w-5 h-px bg-primary"></span> The decisions
            </div>
          </div>
          <Block eyebrow="Decision 1 — Reduce the tab count" title="Fewer tabs, based on usage, not habit">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>Usage audit: Kept only the tabs tied to core user tasks.</Bullet>
                <Bullet>
                  Points table: Kept as a top-level entry, while other stats like MVP, Overs moved into dedicated stats
                  tab.
                </Bullet>
                <Bullet>Stats & Fantasy: Brought into structured modules instead of separate sections.</Bullet>
              </ul>
              <TradeOff>
                Some loyal users initially missed their usual tabs and raised tickets, but most adapted to the new
                structure.
              </TradeOff>
            </div>

            {/* Tab comparison */}
            <div className="max-w-3xl mt-16 md:mt-8 mb-20 pt-4">
              <img
                src={tabComparisonAsset}
                alt="Tab bar comparison: 14 tabs before, reduced to 8 after"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </Block>

          <Block eyebrow="Decision 2 — Reveal, don't dump" title="Accordions that open what matters first">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>Scorecards: Used lazy-loading accordions to keep the first screen lighter.</Bullet>
                <Bullet>Live innings: Opened automatically, while other innings stayed accessible.</Bullet>
                {/*<Bullet>Full commentary retains its dedicated tab without interfering with score aggregates.</Bullet> */}
              </ul>
              <TradeOff>
                Comparing multiple innings takes an extra tap, making it harder to quickly scan and track players across
                innings.
              </TradeOff>
            </div>
            <div className="max-w-3xl grid md:grid-cols-3 gap-8 mb-20 mt-12">
              <Figure src={`${IMG}/b4a70557db90af206cae295c594d2b7920134710?placeholderIfAbsent=true`} />
              <Figure src={`${IMG}/a0066809a8c80d59cbe8bb7fd31f13ba4ebc71b8?placeholderIfAbsent=true`} />
              <Figure src={`${IMG}/0198e4f44d0417348d80fa0364e535fd8eec2fd8?placeholderIfAbsent=true`} />
            </div>
          </Block>

          <Block eyebrow="Decision 3 — Surface a preview" title="See what’s available without leaving the page">
            <ul className="flex flex-col gap-4 max-w-3xl">
              <Bullet>The live summary shows a short, contextual commentary preview.</Bullet>
              <Bullet>
                Each preview gives users a glimpse of what’s available, with a clear path to the full module.
              </Bullet>
            </ul>
            <div className="max-w-3xl grid md:grid-cols-2 gap-8 md:gap-10 mb-20 mt-12">
              <img
                src={liveContentAsset}
                alt="Live tab surfacing recent commentary preview"
                className="w-full h-auto"
                loading="lazy"
              />
              <img
                src={summaryContentAsset}
                alt="Summary tab surfacing videos and report previews"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </Block>

          <Block eyebrow="DECISION 4 — SURFACE CONTENT WHERE IT MATTERS" title="Media, right where you need it">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>Wicket photos appear directly in the scorecard and&nbsp; ball-by-ball commentary.</Bullet>

                <Bullet>Tappable media cards let users watch highlights without leaving the page</Bullet>
              </ul>
              <TradeOff>
                Inline media added page weight, so we needed custom lazy loading to keep performance fast.
              </TradeOff>
            </div>
            <div className="max-w-3xl grid md:grid-cols-2 gap-8 md:gap-10 mb-20 mt-12">
              <img
                src={scorecardMediaAsset}
                alt="Scorecard tab with inline videos and photos"
                className="w-full h-auto"
                loading="lazy"
              />
              <img
                src={commsMediaAsset}
                alt="Commentary tab with inline videos and photos"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </Block>

          <Block
            eyebrow="DECISION 5 — MAKE IT EASY TO MOVE BETWEEN MATCHES"
            title="Two dropdowns replace multiple actions"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>
                  An integrated dropdown lets users switch between active matches without leaving the scorecard.
                </Bullet>
                <Bullet>
                  We first tried prev/next arrows for nearby matches, but they added more clutter to the app bar.
                </Bullet>
                <Bullet>We replaced them with dropdowns showing matches by team or tournament.</Bullet>
              </ul>
              <TradeOff>Easy match-to-match navigation could reduce traffic to Home and Schedule.</TradeOff>
            </div>
            <div className="grid md:grid-cols-5 gap-8 md:gap-6 mt-12 mb-20 items-start">
              <Figure
                src={`${IMG}/84ade12a4cf127b2449f33fb67278fa4fc671e8a?placeholderIfAbsent=true`}
                caption="Before"
              />

              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                  <Figure src={`${IMG}/1adbf27d3a093c6c0ca9a7d33835d732947a0b5a?placeholderIfAbsent=true`} />
                  <Figure src={`${IMG}/fdc414a10f42a429829cef0c9651ba860156ba2f?placeholderIfAbsent=true`} />
                </div>
                <p className={`${t.labelSm} text-muted-foreground mt-4 text-center`}>Solution 1 — Dropdown</p>
              </div>
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-6 ">
                  <Figure src={`${IMG}/c1bfffa138b8a4e08c731274c2b743a6c720f60a?placeholderIfAbsent=true`} />
                  <Figure src={`${IMG}/6e44f8eb0f1c3c2b8590f26ff58f7689506c00e2?placeholderIfAbsent=true`} />
                </div>
                <p className={`${t.labelSm} text-muted-foreground mt-4 text-center`}>
                  Solution 2 — Optimising the app bar
                </p>
              </div>
            </div>
          </Block>

          <Block eyebrow="Decision 6 — Say no to the popular idea" title="Designed, tested, and ultimately dropped">
            <div className="grid lg:grid-cols-2 gap-28 items-start">
              <div>
                <p className={`${t.labelSm} text-muted-foreground mb-6`}>Problem, broken down</p>
                <ul className="flex flex-col gap-4">
                  <Bullet>
                    <strong className="text-foreground font-semibold">Belief: </strong>
                    Editorial, product, and stakeholders believed users wanted to compare more information at a glance,
                    so the page should be more compact.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Built: </strong>
                    It got fully designed, ready to ship.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Evidence against:&nbsp;</strong>
                    Secondary research showed users preferred smaller, easier-to-scan pieces of information over dense
                    screens.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Killed:&nbsp;</strong>
                    An internal review surfaced the same concerns users had raised. The compact design would have made
                    the information overload worse, so we didn’t ship it.
                  </Bullet>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-20">
                <Figure
                  src={`${IMG}/20ea59141deb456b7f0c0e3c876fc0e621ccc83c?placeholderIfAbsent=true`}
                  caption="Compact"
                />
                <Figure
                  src={`${IMG}/fb92aa37ca79742ee50465222724dda48f4092e3?placeholderIfAbsent=true`}
                  caption="Approved — live"
                />
              </div>
            </div>
          </Block>

          <Block
            eyebrow="DECISION 7 — ADD PARTICIPATION WITHOUT ADDING CLUTTER"
            title="Added Polls and ratings, without disrupting the experience"
          >
            <ul className="flex flex-col gap-4 max-w-3xl">
              <Bullet>Added polls and ratings to increase engagement.</Bullet>
              <Bullet>Placed active polls at natural breaks in the commentary.</Bullet>
              <Bullet>Kept fan ratings alongside news and media without adding visual clutter.</Bullet>
              <Bullet>Added poll cards into summary before and after match completion to keep the layout clean.</Bullet>
            </ul>
            <div className="max-w-3xl grid md:grid-cols-3 gap-8 mt-12 mb-20">
              <Figure src={`${IMG}/4147a826e6b48a8ab02d34aded8c2e5ccfbb1cf6?placeholderIfAbsent=true`} />
              <Figure src={`${IMG}/ce0bad3c97dc9b8d83fbd1add40c5124c7ed7b92?placeholderIfAbsent=true`} />
              <Figure src={`${IMG}/2bdf528c1d0ce5fc2fd5792e6f94879b4f5c95b5?placeholderIfAbsent=true`} />
            </div>
          </Block>

          <Block
            eyebrow="DECISION 8 — KEEP THE SAME PRINCIPLES IN BUILD"
            title="The design principles carried through to launch"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  label: "Engineering",
                  body: "Tabs load their data only when opened, avoiding unnecessary loading on the initial screen.",
                },
                {
                  label: "Monetization",
                  body: "Kept ads to two clean banners per viewport, so they didn’t overwhelm the content.",
                },
              ].map((item) => (
                <div key={item.label} className={`${radius.cardSm} ${surface.card} p-6`}>
                  <p className={`${t.labelSm} text-muted-foreground`}>{item.label}</p>
                  <p className="mt-3 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </section>

      {/* ── RESULTS ────────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>Results</SectionLabel>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`${t.h2} max-w-3xl`}
            style={{ fontFamily: t.displayFont }}
          >
            Measuring how people used the new structure
          </motion.h2>

          <ImpactPanel>
            <p className={`${t.labelSm} text-background/65 mb-6`}>The numbers</p>
            <div className={impactGrid}>
              {[
                { value: "3.4 → 4.5", label: "App rating" },
                { value: "+50%", label: "Time on match page" },
                { value: "8–15 → 3–8", label: "Tab-taps-to-content" },
                { value: "Strong", label: "Polls & fan engagement" },
                { value: "~2x faster", label: "PAGE LOAD" },
                { value: "+30%", label: "PAGE VIEWS" },
              ].map((s) => (
                <div key={s.label} className={`${impactCell} p-6 md:p-8`}>
                  <p
                    className="text-3xl md:text-4xl leading-none text-background"
                    style={{ fontFamily: t.displayFont }}
                  >
                    {s.value}
                  </p>
                  <p className={`${t.labelSm} text-background/65 mt-3`}>{s.label}</p>
                </div>
              ))}
            </div>
          </ImpactPanel>

          <p className={`${t.bodyLg} text-muted-foreground max-w-3xl`}>
            With the new structure, users reached the data they wanted in half the taps. The experience became easier to
            use, and store ratings improved.
          </p>
        </div>
      </section>

      {/* ── CLOSE ──────────────────────────── */}
      <ClosingSection
        quote="The easy fix was to add more. But the users and the data pointed to a different solution: structure that could handle everything."
        meta="Match Page Redesign — Cricinfo · Prerna Chhajer, Lead Product Designer"
      />

      <ExploreMore currentSlug="match-page" />
    </div>
  );
};

export default CaseStudyMatchPage;
