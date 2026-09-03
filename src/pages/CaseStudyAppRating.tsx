// ─────────────────────────────────────────────
// CASE STUDY — App Rating Turnaround (3.4 → 4.5)
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
import UserFeedbackSummary from "@/components/UserFeedbackSummary";

const fade = animation.fade;

// ── Small building blocks (tokens only) ───────
const Placeholder = ({ label, className = "" }: { label: string; className?: string }) => (
  <div
    className={`${radius.cardSm} border border-dashed border-border flex items-center justify-center text-center p-6 bg-secondary/50 ${className}`}
  >
    <p className={`${t.labelSm} text-muted-foreground`}>{label}</p>
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 items-start">
    <span className="text-primary font-medium leading-relaxed">—</span>
    <span className="flex-1 text-sm md:text-base leading-relaxed text-muted-foreground">{children}</span>
  </li>
);

const TradeOff = ({ children }: { children: React.ReactNode }) => (
  <div className={`${radius.cardSm} border border-dashed border-primary/60 p-5 md:p-6 mt-6`}>
    <p className={`${t.labelSm} text-primary mb-2.5`}>Trade-off, named honestly</p>
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
    className={`${isFirst ? "pt-0" : "pt-12 md:pt-14"} pb-12 md:pb-14 border-b border-border last:border-b-0`}
  >
    <p className={`${t.labelSm} text-muted-foreground`}>{eyebrow}</p>
    <h3 className={`${t.h3} mt-3`} style={{ fontFamily: t.displayFont }}>
      {title}
    </h3>
    <div className="mt-6 md:mt-8">{children}</div>
  </motion.div>
);

const CaseStudyAppRating = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavCaseStudy period="2023 — 2024" />

      {/* ── HERO ───────────────────────────── */}
      <section className={`pt-24 md:pt-28 pb-8 ${layout.px}`}>
        <div className={`${layout.containerWide} w-full mx-auto text-center`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            className={`flex items-center justify-center gap-4 ${t.labelSm} text-muted-foreground mb-10 md:mb-12`}
          >
            <span className="w-5 h-px bg-muted-foreground/70" />
            <span>ESPNcricinfo · Case Study</span>
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
            <span className="py-4">App Rating</span>
            <span className="px-2 text-primary italic font-medium">Turnaround</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={2}
            className="flex flex-wrap gap-3 justify-center mt-10 md:mt-12"
          >
            {["Lead Product Designer", "Several months", "iOS & Android", "10M+ users"].map((chip) => (
              <span
                key={chip}
                className={`${t.labelSm} px-4 py-2 rounded-full border border-border bg-secondary text-muted-foreground`}
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/*       <motion.dl
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={3}
            className="grid md:grid-cols-3 border-y border-border mt-12 md:mt-14 text-center max-w-5xl mx-auto"
          >
            {[
              { label: "App Store rating", value: "3.4 → 4.5", note: "Across 10M+ users", accent: true },
              { label: "App size", value: "−30%", note: "Font + layout architecture" },
              { label: "Time spent", value: "+50%", note: "Per user, on app" },
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
            className={`${t.bodyLg} text-muted-foreground max-w-2xl mx-auto mt-12`}
          >
            Our app rating had dropped to 3.4 — bad enough that it became the team's single priority. This is the story
            of turning that number around: not one broken feature, but dozens of small failures that added up.
          </motion.p>

          {/*   <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-16 md:mt-20"
          >
            <Placeholder label="Visual — rating trajectory over the turnaround period" className="h-56 md:h-72" />
          </motion.div> */}
        </div>
      </section>

      {/* ── PROBLEM ────────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Problem</SectionLabel>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <h2 className={t.h2} style={{ fontFamily: t.displayFont }}>
                The app had become harder to use than it needed to be.
              </h2>
              <p className={`${t.bodyLg} text-muted-foreground mt-5`}>
                As Cricinfo grew, the experience accumulated friction: cluttered screens, slow performance, buggy video,
                intrusive ads, and difficult navigation.
              </p>
            </motion.div>

            <div className="mt-12 md:mt-14">
              <p className={`${t.labelSm} text-muted-foreground mb-6`}>Problem, broken down</p>
              <ul className="flex flex-col gap-4">
                <Bullet>
                  <strong className="text-foreground font-semibold">Business problem:&nbsp;</strong>
                  Rating dropped to 3.4. The app wasn't failing in one place, small issues were adding up.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground font-semibold">User problem:&nbsp;</strong>
                  Clutter, slow performance, buggy video and poor notifications made the app feel heavier than the
                  alternatives.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground font-semibold">Band-aid:&nbsp;</strong>
                  We kept fixing individual issues without a clear view of the bigger problem.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground font-semibold">Strategy:&nbsp;</strong>
                  Start with real user signals, then use design to decide what to fix, remove or rebuild.
                </Bullet>
              </ul>
            </div>
          </div>

          <div className=" items-center max-w-3xl mx-auto mt-8 md:mt-8 border border-dashed rounded-xl">
            <UserFeedbackSummary />

            <div className="self-start flex flex-wrap gap-2 border-t mt-8 md:mt-8 px-8 py-8 pb-8">
              {[
                "Overwhelming / cluttered",
                "Buggy video playback",
                "Inflexible notifications",
                "Cluttered bottom nav",
                "Slow, laggy performance",
                "Live scores lag competitors",
                "High data consumption",
                "Losing younger audience",
              ].map((tag) => (
                <span
                  key={tag}
                  className={`${t.labelSm} h-7 px-4 py-2 leading-none rounded-full border border-border bg-secondary text-muted-foreground`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOVERY ──────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>DISCOVERY</SectionLabel>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className={`${t.h2} max-w-3xl`} style={{ fontFamily: t.displayFont }}>
              What users were telling us
            </h2>
            <p className={`${t.bodyLg} text-muted-foreground mt-5 max-w-3xl`}>
              We looked across Play Store, App Store and Twitter, collected first-party feedback through a dedicated
              in-app survey, and benchmarked the experience against Cricbuzz and Google Cricket Scores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                quote: "On Cricinfo it is like huge information is dumped… when we require only few things.",
                source: "User research participant",
                context: "Hyderabad",
              },
              {
                quote: "If Cricinfo sorts out their mobile app UI, Cricbuzz will probably be out of business.",
                source: "@TheStatsKid1523",
                context: "Twitter",
              },
              {
                quote: "What is this cluttered shit from ESPNcricinfo? So cluttered, don't even feel like using it.",
                source: "r/IndiaCricket",
                context: "Reddit",
              },
            ].map((q) => (
              <div key={q.source} className="relative rounded-xl border border-border  bg-white/60 p-6 pt-8">
                <span className="absolute top-3 left-4 text-5xl leading-none text-primary/30 font-serif select-none">
                  "
                </span>
                <p className="text-lg leading-relaxed text-foreground relative z-10">{q.quote}</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-sm font-medium text-foreground">{q.source}</p>
                  <p className={`${t.labelSm} text-muted-foreground`}>{q.context}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                quote: "On Cricinfo it is like huge information is dumped… when we require only few things.",
                source: "— User research participant, Hyderabad",
              },
              {
                quote: "If Cricinfo sorts out their mobile app UI, Cricbuzz will probably be out of business.",
                source: "— @TheStatsKid1523, Twitter",
              },
              {
                quote: "What is this cluttered shit from ESPNcricinfo? So cluttered, don't even feel like using it.",
                source: "— r/IndiaCricket",
              },
            ].map((q) => (
              <blockquote key={q.source} className={`pl-5 ${surface.accentLine}`}>
                <p className="text-lg leading-relaxed">{q.quote}</p>
                <cite className={`${t.labelSm} text-muted-foreground mt-3 block not-italic`}>{q.source}</cite>
              </blockquote>
            ))}
          </div> */}

          <div className="grid grid-cols-2 md:grid-cols-4 border border-border rounded-xl mt-14 text-center">
            {[
              { n: "116", l: "Performance / load mentions" },
              { n: "34", l: "Cognitive load mentions" },
              { n: "20", l: "UI mentions" },
              { n: "6", l: "Clutter mentions" },
            ].map((item, i) => (
              <div key={item.l} className={`px-5 py-7 ${i > 0 ? "border-l border-border" : ""}`}>
                <p className="text-3xl md:text-4xl leading-none text-primary" style={{ fontFamily: t.displayFont }}>
                  {item.n}
                </p>
                <p className={`${t.labelSm} text-muted-foreground mt-3`}>{item.l}</p>
              </div>
            ))}
          </div>

          {/* Competitive */}

          <div className="max-w-5xl mx-auto mt-16 md:mt-20 pt-12 ">
            <div className="grid lg:grid-cols-1 gap-10 items-start">
              <div className={`overflow-hidden border border-border ${radius.cardSm}`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`bg-secondary ${t.labelSm} text-muted-foreground`}>
                      <th className="text-left font-medium p-3">USER NEED</th>
                      <th className="text-left font-medium p-3 w-[28%]">CRICINFO</th>
                      <th className="text-left font-medium p-3 w-[28%]">CRICBUZZ&nbsp;&nbsp;</th>
                      <th className="text-left font-medium p-3 w-[28%]">GOOGLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Find & navigate",
                        "Rich, but cluttered and hard to navigate",
                        "Simpler, easier to scan",
                        "Frictionless, minimal",
                        true,
                      ],
                      [
                        "Check scores quickly",
                        "Detailed, but feels slow",
                        "Fast & lightweight",
                        "Fastest / lowest friction",
                        true,
                      ],
                      [
                        "Follow a match",
                        "Deep commentary & data, but interaction can be frustrating",
                        "Simple, quick live updates",
                        "Clear, glanceable score",
                        true,
                      ],
                      [
                        "Explore cricket",
                        "Strongest depth — journalism, analysis, Statsguru",
                        "More lightweight content experience",
                        "Limited depth",
                        true,
                      ],
                      [
                        "Video & updates ",
                        "Rich library, but autoplay / playback issues",
                        "Better perceived video experience",
                        "Minimal interruptions",
                        true,
                      ],
                      [
                        "Ads & interruptions",
                        "High friction — ads, promotions, autoplay",
                        "Less intrusive",
                        "Minimal",
                        true,
                      ],

                      [
                        "Overall experience\n\n",
                        "Deepest, but overwhelming",
                        "Fast & simple",
                        "Fastest & most frictionless",
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
      </section>

      {/* ── REFRAME ────────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`max-w-3xl mx-auto  bg-[#15130f] p-8 rounded-xl`}>
          <SectionLabel>The Reframe</SectionLabel>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`${t.h3}   text-[#f4f1ea]`}
            style={{ fontFamily: t.displayFont }}
          >
            The rating wasn't the design problem. It was <span className="text-primary italic">the signal</span>. My
            role was to turn that complexity into a product that felt simpler — without making it less powerful.
          </motion.h3>
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
              We grouped the eight pain points into four areas, using one key question for each to decide what needed to
              change.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mt-16 md:mt-20 pt-12 ">
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
                        "Navigation",
                        "How might we cut destinations down to only what's relevant right now?",
                        "Home page decluttering, match page tab structure, bottom nav cleanup",

                        true,
                      ],
                      [
                        "Performance",
                        "How might we strip weight without stripping value?",
                        "Font system overhaul, FlatUI/layout architecture, load-on-tap",

                        true,
                      ],
                      [
                        "Interruptions",
                        "How might we stop the app from getting in its own way?g",
                        "Autoplay muted by default, ad clutter reduced, notifications made flexible",

                        true,
                      ],
                      [
                        "Interaction",
                        "How might we fix friction at the exact moment someone hits it?",
                        "Video playback fixes; commentary/match-status friction (lives in the Match Page case study)",

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
          <SectionLabel>The Decisions</SectionLabel>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-14 md:mb-16"
          >
            <h2 className={`${t.h2} max-w-3xl`} style={{ fontFamily: t.displayFont }}>
              What we changed and why
            </h2>
            <p className={`${t.bodyLg} text-muted-foreground mt-5 max-w-3xl`}>
              Each of these is a real trade-off, made on purpose, told as what we gave up and why, not as a features
              list.
            </p>
          </motion.div>

          <Block eyebrow="Decision 1 — Same information, less noise" title="Home page decluttering" isFirst>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <ul className="flex flex-col gap-4">
                  <Bullet>Featured articles cut from 7 to 5.</Bullet>
                  <Bullet>
                    Removed a redundant "In-Depth Stories" section — the same ~40 stories were repeating across three
                    modules for one match.
                  </Bullet>
                  <Bullet>Removed the filler "Top Players / Top Tournaments" section.</Bullet>
                  <Bullet>Rule: one featured-story module visible at a time.</Bullet>
                  <Bullet>Added a lightweight match-prediction game for engagement.</Bullet>
                </ul>
                <TradeOff>
                  We didn't rebuild the home page — a full redesign would have cost more time than the clutter actually
                  warranted, so this stayed a decluttering pass, not a rethink.
                </TradeOff>
              </div>
              <Placeholder label="Screenshot — home page, before / after" className="h-72 lg:h-80" />
            </div>
          </Block>

          <Block eyebrow="Decision 2 — Same clutter, one level deeper" title="Match page structure">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <ul className="flex flex-col gap-4">
                  <Bullet>Match pages had grown to 8–15 tabs with no governing structure.</Bullet>
                  <Bullet>
                    The full IA breakdown — match-state relevance, content snacking, navigation — lives in the Match
                    Page Experience case study.
                  </Bullet>
                </ul>
                <TradeOff>
                  This got its own case study rather than a summary here — the material was too deep to compress without
                  losing what made it work.
                </TradeOff>
              </div>
              <Placeholder label="Screenshot — match page tab count, before / after" className="h-72 lg:h-80" />
            </div>
          </Block>

          <Block eyebrow="Decision 3 — Fit the format to the content" title="Video & short-form content">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <ul className="flex flex-col gap-4">
                  <Bullet>Fixed buggy long-form playback; muted autoplay audio by default.</Bullet>
                  <Bullet>Added a playlist for continuous viewing.</Bullet>
                  <Bullet>
                    Introduced Quick Reads, short videos and Stories — for the ~80% of users who weren't reading full
                    articles at all.
                  </Bullet>
                </ul>
                <TradeOff>
                  Short-form wasn't a trend chase — highlights and reactions are inherently bite-sized, and forcing them
                  into a long-form frame was the actual mismatch.
                </TradeOff>
              </div>
              <Placeholder label="Screenshot — video playlist & Quick Reads / Stories UI" className="h-72 lg:h-80" />
            </div>
          </Block>

          <Block eyebrow="Decision 4 — Reliability first, then flexibility" title="Notifications & navigation">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>Stabilized notification reliability.</Bullet>
                <Bullet>Moved away from a one-size-fits-all model toward more flexible, less intrusive alerts.</Bullet>
                <Bullet>Simplified bottom navigation to cut down on competing entry points.</Bullet>
              </ul>
              <Placeholder
                label="Screenshot — notification settings & bottom nav, before / after"
                className="h-72 lg:h-80"
              />
            </div>
          </Block>

          <Block eyebrow="Decision 5 — A lower-effort way in" title="Lightweight engagement">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <ul className="flex flex-col gap-4">
                  <Bullet>
                    Live polls, fan ratings, in-app games and share — sitting alongside deep stats, not replacing them.
                  </Bullet>
                  <Bullet>Reduced ad clutter and standardized ad sizes for visual cohesion.</Bullet>
                </ul>
                <TradeOff>
                  The goal was never to dumb the product down — it was to give casual fans a way in that didn't require
                  expertise, without asking core fans to give up any depth.
                </TradeOff>
              </div>
              <Placeholder label="Screenshot — polls, fan ratings, in-app game UI" className="h-72 lg:h-80" />
            </div>
          </Block>

          <Block eyebrow="Alongside the design work" title="What engineering fixed in parallel">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  label: "Performance",
                  body: "Custom downloadable font swapped for native system fonts; nested layouts flattened into a linear rendering structure; live-score load speed fixed to close the gap with faster competitors.",
                },
                {
                  label: "Outcome",
                  body: "App size down 30%, tied directly to the font and layout changes — and a lighter, less cluttered feel as a side effect of a performance fix, not a design decision on its own.",
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
            Clarity is a design responsibility, not a subtraction exercise.
          </motion.h2>

          <ImpactPanel>
            <p className={`${t.labelSm} text-background/65 mb-6`}>The numbers</p>
            <div className={impactGrid}>
              {[
                { value: "3.4 → 4.5", label: "App Store rating" },
                { value: "10M+", label: "Users on the platform" },
                { value: "↑", label: "Downloads increased" },
                { value: "−30%", label: "App size" },
                { value: "+50%", label: "Time spent on app" },
                { value: "Sustained", label: "Post-launch iteration" },
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
            Not a one-time fix — we kept watching app behaviour for weeks after launch and iterated as new signal came
            in. The rating moved because dozens of small frustrations stopped happening at once.
          </p>
        </div>
      </section>

      {/* ── CLOSE ──────────────────────────── */}
      <ClosingSection
        quote="The rating wasn't the design problem, it was the signal. The work was turning that complexity into a product that felt simpler "
        quoteAccent={'without making it any less powerful."'}
        meta="App Rating Turnaround — Cricinfo · Prerna Chhajer, Lead Product Designer"
      />

      <ExploreMore currentSlug="app-rating" />
    </div>
  );
};

export default CaseStudyAppRating;
