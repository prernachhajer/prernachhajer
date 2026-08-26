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
import compact01Asset from "@/assets/Match_compact01.png.asset.json";
import compact02Asset from "@/assets/Match_compact02.png.asset.json";
import compact03Asset from "@/assets/Match_compact03.png.asset.json";
import compact04Asset from "@/assets/Match_compact04.png.asset.json";
import tabComparisonAsset from "@/assets/Tab_comparison.png.asset.json";
import scorecardMediaAsset from "@/assets/Scorecard-media.png.asset.json";
import commsMediaAsset from "@/assets/Comms-media.png.asset.json";
import liveContentAsset from "@/assets/Live-content.png.asset.json";
import summaryContentAsset from "@/assets/Summary-content.png.asset.json";

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
    <p className={`${t.labelSm} text-primary mb-2.5`}>Trade-off, named honestly</p>
    <p className="text-sm leading-relaxed text-foreground">{children}</p>
  </div>
);

const Block = ({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fade}
    className="pt-12 md:pt-14 border-t border-border"
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
            <span className="block">Match Page</span>
            <span className="block text-primary italic font-medium mt-2">Redesign</span>
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

          <motion.dl
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={3}
            className="grid md:grid-cols-3 border-y border-border mt-12 md:mt-14 text-center max-w-5xl mx-auto"
          >
            {[
              { label: "Tabs", value: "8–15 → 3–8", note: "Nearly halved", accent: true },
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
          </motion.dl>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={4}
            className={`${t.bodyLg} text-muted-foreground max-w-2xl mx-auto mt-12 md:mt-14`}
          >
            Cricinfo's match page is the core of the mobile experience, absorbing years of organic feature creep. This
            overhaul delivered structural improvements without removing the tools hardcore fans depend on daily.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-2xl mx-auto mt-16 md:mt-20"
          >
            <Figure src={`${IMG}/b33cd8dcbe619d4733b9b4438a9ece0eb5beebbc?placeholderIfAbsent=true`} caption="Before" />
            <Figure src={`${IMG}/9d4279da4da104fc3f87a258137aaaf20456ddab?placeholderIfAbsent=true`} caption="After" />
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ───────────────── */}
      <section className={`${layout.px} border-t border-border pt-10 pb-10 bg-secondary/40`}>
        <div className={` mx-auto  max-w-5xl`}>
          <SectionLabel>Project overview</SectionLabel>
          <dl className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { label: "My role", value: "Lead Product Designer, project lead" },
              { label: "Worked with", value: "Product Manager, Engineering" },
              { label: "Scope", value: "Reduce cognitive load, improve discovery, habit formation" },
              { label: "Platform", value: "iOS & Android" },
              { label: "Timeframe", value: "~6 months, phased rollout" },
              { label: "Rollout order", value: "Tabs → accordions → dropdown → surface preview → polls " },
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

      {/* ── TWO-MINUTE VERSION ─────────────── */}
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
      </section>

      {/* ── PROBLEM ────────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} max-w-3xl mx-auto`}>
          <div className={`max-w-3xl mx-auto`}>
            <SectionLabel>Problem</SectionLabel>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="max-w-3xl"
            >
              <h2 className={t.h2} style={{ fontFamily: t.displayFont }}>
                More tabs. More clutter. No structure to hold it.
              </h2>
              <p className={`${t.bodyLg} text-muted-foreground mt-5`}>
                Over time, individual feature releases piled onto the match page; more tabs added, more content packed
                into each screen - until it stopped feeling like a guide and started feeling like a dump.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-10 md:gap-14 items-start mt-16 md:mt-8 pt-4">
              <div className="mb-12">
                <p className={`${t.labelSm} text-muted-foreground mb-6`}>Problem, broken down</p>
                <ul className="flex flex-col gap-4">
                  <Bullet>
                    <strong className="text-foreground font-semibold">Business problem:&nbsp;</strong>
                    Organic features added under pressure without holistic IA oversight; the page grew both wider (more
                    tabs) and denser (more packed into each screen)
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Root cause:&nbsp;</strong>
                    Without a shared structure, every new feature had two options: a new tab, or more crammed onto an
                    existing one. Both became the default.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Band-aid:&nbsp;</strong>
                    Features kept landing as new tabs or squeezed rows; the fastest way to ship without disturbing what
                    already existed.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Strategy:&nbsp;</strong>
                    Consolidate structure around core tasks rather than departmental ownership; reducing both tab count
                    and on-screen density.
                  </Bullet>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 md:gap-5">
            {[
              { src: compact01Asset.url, alt: "Compact scorecard with dense innings rows" },
              { src: compact02Asset.url, alt: "Compact scorecard with crowded bowling table" },
              { src: compact03Asset.url, alt: "Compact live tab with stacked match metadata" },
              { src: compact04Asset.url, alt: "Compact live tab with dense score summary" },
            ].map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="w-full h-auto border border-border rounded-lg"
                loading="lazy"
              />
            ))}
          </div>

          {/* Evidence */}
          <div className="max-w-4xl mx-auto mt-16 md:mt-20 pt-12 border-t border-border">
            <p className={`${t.labelSm} text-muted-foreground`}>Evidence, in their own words</p>
            <h3 className={`${t.h3} mt-4`} style={{ fontFamily: t.displayFont }}>
              Users Feedback
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {[
                {
                  quote: "It takes forever to open the scorecard page, there's just too much stuff in my way.",
                  source: "— User audit #4",
                },
                {
                  quote:
                    "Cricinfo used to be simple. Now I have to scroll through 12 options just to find who is bowling.",
                  source: "— App Store review",
                },
              ].map((q) => (
                <blockquote key={q.source} className={`pl-5 ${surface.accentLine}`}>
                  <p className="text-lg leading-relaxed">{q.quote}</p>
                  <cite className={`${t.labelSm} text-muted-foreground mt-3 block not-italic`}>{q.source}</cite>
                </blockquote>
              ))}
            </div>
            <p className={`${t.bodyLg} text-muted-foreground mt-8 max-w-3xl`}>
              Test match scorecards are complex data layers. When users hit navigation delays and redundant filters,
              they perceive the page as sluggish even when load metrics are fine.
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
                      ["Ball-by-ball details", "Deep / nested", "Compact flat", false],
                      ["Overwise summaries", "Hidden tab", "Always visible", false],
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
                  Competing products carried comparable data volume, but our lack of a clean parent hierarchy forced
                  users to hunt for key indicators.
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
                        <th className="text-left font-medium p-3 w-[28%]"> Pain point</th>
                        <th className="text-left font-medium p-3 w-[28%]">Opportunity</th>
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
                          "Improve recommendations",
                          true,
                        ],
                        [
                          "Casual fan",
                          "Visits during major events",
                          "Experience can feel overwhelming",
                          "Simplify and guide",
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

      {/* ── DECISIONS ──────────────────────── */}
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <SectionLabel>The Principals</SectionLabel>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="grid lg:grid-cols-2 gap-10 items-start"
          >
            <div>
              <h2 className={t.h2} style={{ fontFamily: t.displayFont }}>
                Depth wasn't the problem. The absence of structure was.
              </h2>
              <p className={`${t.bodyLg} text-muted-foreground mt-5`}>
                Hardcore fans expect every statistic, commentary string and wagon wheel. So we targeted navigation
                hygiene and information priority instead of dropping features.
              </p>
            </div>
            <div className={`${radius.cardSm} border border-border ${surface.card} p-6 md:p-7`}>
              <p className={`${t.labelSm} text-muted-foreground`}>The rule, stated once</p>
              <p className="mt-3 text-base leading-relaxed">
                - Show previews, not everything at once; tap to go deeper
                <br />
                <br />
                - Combine what belongs together
                <br />
                <br />- Surface what matters instead of burying it
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className={`${spacing.sectionGap} ${layout.px} border-t border-border`}>
        <div className={`${layout.container} mx-auto`}>
          <div className="max-w-5xl">
            {" "}
            <SectionLabel>The decisions</SectionLabel>{" "}
          </div>
          <Block eyebrow="Decision 1 — Reduce the tab count" title="Fewer tabs, chosen by usage, not habit">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>Rigorous usage audit trimmed tab presence down to core tasks only.</Bullet>
                <Bullet>Points table retained a high-level entry but merged detailed stats into single hubs.</Bullet>
                <Bullet>Stats & Fantasy merged into structured modules, removing departmental silos.</Bullet>
              </ul>
              <TradeOff>
                A few loyal users filed tickets when their usual tabs disappeared — before adapting to the new layout.
              </TradeOff>
            </div>

            {/* Tab comparison */}
            <div className="max-w-3xl mt-16 md:mt-8 mb-20 pt-4">
              <img
                src={tabComparisonAsset.url}
                alt="Tab bar comparison: 14 tabs before, reduced to 8 after"
                className="w-full h-auto"
                loading="lazy"
              />
              <p className={`${t.labelSm} text-muted-foreground mb-6`}>Tab count, before and after</p>
            </div>
          </Block>

          <Block eyebrow="Decision 2 — Reveal, don't dump" title="Accordions that open where it matters">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>Scorecards structured in lazy-loading accordions, keeping the first fold light.</Bullet>
                <Bullet>Automatic prioritisation opens the live innings on load, others stay accessible.</Bullet>
                {/*<Bullet>Full commentary retains its dedicated tab without interfering with score aggregates.</Bullet> */}
              </ul>
              <TradeOff>
                Multi-innings comparison requires an extra tap to open parallel accordions, slightly shifting
                cross-innings tracking paths.
              </TradeOff>
            </div>
            <div className="max-w-3xl grid md:grid-cols-3 gap-8 mb-20 mt-12">
              <Figure src={`${IMG}/b4a70557db90af206cae295c594d2b7920134710?placeholderIfAbsent=true`} />
              <Figure src={`${IMG}/a0066809a8c80d59cbe8bb7fd31f13ba4ebc71b8?placeholderIfAbsent=true`} />
              <Figure src={`${IMG}/0198e4f44d0417348d80fa0364e535fd8eec2fd8?placeholderIfAbsent=true`} />
            </div>
          </Block>

          <Block eyebrow="Decision 3 — Surface a preview" title="You shouldn't have to leave a page to know it's there">
            <ul className="flex flex-col gap-4 max-w-3xl">
              <Bullet>Live summary screen displays a contextual commentary excerpt in real time.</Bullet>
              <Bullet>
                Each preview taps straight through to the full content, so nothing feels lost along the way.
              </Bullet>
            </ul>
            <div className="max-w-3xl grid md:grid-cols-2 gap-8 md:gap-10 mb-20 mt-12">
              <img
                src={liveContentAsset.url}
                alt="Live tab surfacing recent commentary preview"
                className="w-full h-auto"
                loading="lazy"
              />
              <img
                src={summaryContentAsset.url}
                alt="Summary tab surfacing videos and report previews"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </Block>

          <Block eyebrow="Decision 4 — Surface content where it's earned" title="Media, in context, not tucked away">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>Inline wicket photos appear directly inside ball-by-ball commentary.</Bullet>

                <Bullet>Tappable media cards open highlights without leaving the primary hub.</Bullet>
              </ul>
              <TradeOff>Heavier inline media required custom lazy-loading structures to protect performance.</TradeOff>
            </div>
            <div className="max-w-3xl grid md:grid-cols-2 gap-8 md:gap-10 mb-20 mt-12">
              <img
                src={scorecardMediaAsset.url}
                alt="Scorecard tab with inline videos and photos"
                className="w-full h-auto"
                loading="lazy"
              />
              <img
                src={commsMediaAsset.url}
                alt="Commentary tab with inline videos and photos"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </Block>

          <Block eyebrow="Decision 5 — Make it easy to move sideways" title="A dropdown and two buttons, not a maze">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <ul className="flex flex-col gap-4">
                <Bullet>An integrated dropdown jumps between active matches without leaving the scorecard.</Bullet>
                <Bullet>Prev/next shortcuts map adjacent game days smoothly.</Bullet>
                <Bullet>Reduced cognitive overload by removing deep-navigation drawers.</Bullet>
              </ul>
              <TradeOff>
                Aggressive cross-navigation bypasses traditional portal hubs, so we monitor drop-off on the home feed in
                analytics.
              </TradeOff>
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
                <div className="grid grid-cols-2 gap-6 mb-20 ">
                  <Figure src={`${IMG}/c1bfffa138b8a4e08c731274c2b743a6c720f60a?placeholderIfAbsent=true`} />
                  <Figure src={`${IMG}/6e44f8eb0f1c3c2b8590f26ff58f7689506c00e2?placeholderIfAbsent=true`} />
                </div>
                <p className={`${t.labelSm} text-muted-foreground mt-4 text-center`}>
                  Solution 2 — Optimising the app bar
                </p>
              </div>
            </div>
          </Block>

          <Block
            eyebrow="Decision 6 — Say no to the popular idea"
            title="Fully designed, evidenced against, never shipped"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className={`${t.labelSm} text-muted-foreground mb-6`}>Problem, broken down</p>
                <ul className="flex flex-col gap-4">
                  <Bullet>
                    <strong className="text-foreground font-semibold">Belief: </strong>
                    Editorial, product and stakeholders shared one instinct — people read at speed and want everything
                    comparable at a glance, so the page should be as compact as possible.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Built: </strong>
                    It got fully designed, ready to ship.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Evidence against: </strong>
                    Research said users preferred scanning minimal, digestible information over dense screens — shipping
                    this would have recreated the "information dump" complaint, more concentrated.
                  </Bullet>
                  <Bullet>
                    <strong className="text-foreground font-semibold">Killed: </strong>
                    An internal audit sealed it: running the compact design past the team surfaced the same complaint
                    users had made, this time from the people who'd pushed for it.
                  </Bullet>
                </ul>
                <div className="mt-8">
                  <TradeOff>
                    Killing this cost real design and engineering time already sunk into a fully built layout. That sunk
                    cost is exactly what makes not shipping it a harder call than it looks in hindsight.
                  </TradeOff>
                </div>
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
            eyebrow="Decision 7 — Add participation without re-cluttering"
            title="Polls and ratings, sitting beside the depth"
          >
            <ul className="flex flex-col gap-4 max-w-3xl">
              <Bullet>Active poll widgets integrated at logical pauses in commentary flows.</Bullet>
              <Bullet>Fan rating tools sit beside traditional stats without bloating layouts.</Bullet>
              <Bullet>Poll cards fold into summary zones cleanly.</Bullet>
            </ul>
            <div className="max-w-3xl grid md:grid-cols-3 gap-8 mt-12 mb-20">
              <Figure src={`${IMG}/4147a826e6b48a8ab02d34aded8c2e5ccfbb1cf6?placeholderIfAbsent=true`} />
              <Figure src={`${IMG}/ce0bad3c97dc9b8d83fbd1add40c5124c7ed7b92?placeholderIfAbsent=true`} />
              <Figure src={`${IMG}/2bdf528c1d0ce5fc2fd5792e6f94879b4f5c95b5?placeholderIfAbsent=true`} />
            </div>
          </Block>

          <Block eyebrow="Decision 8 — Hold the same line" title="The principle didn't stop at the design file">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  label: "Engineering",
                  body: "Tabs defer data loading until clicked rather than requesting heavy parallel loads on initial render.",
                },
                {
                  label: "Monetization",
                  body: "Held the line at two clean ad banners per viewport block, protecting content integrity.",
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
            Watching the new paths get used, not just the tab count drop.
          </motion.h2>

          <ImpactPanel>
            <p className={`${t.labelSm} text-background/65 mb-6`}>The numbers</p>
            <div className={impactGrid}>
              {[
                { value: "3.4 → 4.5", label: "App rating" },
                { value: "+50%", label: "Time on match page" },
                { value: "8–15 → 3–8", label: "Tab-taps-to-content" },
                { value: "Strong", label: "Polls & fan engagement" },
                { value: "~50% down", label: "Complaint sentiment" },
                { value: "0", label: "Features removed" },
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
            With the statistics in order, users reached the data they wanted in half the taps. The interface stopped
            generating friction, and store ratings followed.
          </p>
        </div>
      </section>

      {/* ── CLOSE ──────────────────────────── */}
      <ClosingSection
        quote="The obvious fix was to show more, faster — and for a while that's what almost everyone in the room believed, myself included, until the evidence said otherwise. The real fix was building a structure that could hold everything the product needed to say, and having the"
        quoteAccent="discipline to defend what deserved its own space."
        meta="Match Page Redesign — Cricinfo · Prerna Chhajer, Lead Product Designer"
      />

      <ExploreMore currentSlug="match-page" />
    </div>
  );
};

export default CaseStudyMatchPage;
