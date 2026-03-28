import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HomepageEvolutionCarousel from "@/components/HomepageEvolutionCarousel";
import desk2021 from "@/assets/cricinfo-desk-2021.jpg";
import mobile2021 from "@/assets/cricinfo-mobile-2021.jpg";
import hsbScreen2021 from "@/assets/hsb-screen-1.jpg";
import hsbScreen2023 from "@/assets/hsb-screen-2.jpg";
import hsbScreen2026 from "@/assets/hsb-screen-3.jpg";
import nextPhone1 from "@/assets/next-direction-phone-1.jpg";
import nextPhone2 from "@/assets/next-direction-phone-2.jpg";
import nextPhone3 from "@/assets/next-direction-phone-3.jpg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const CaseStudyCricinfo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </button>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">2021 — 2026</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        <motion.div initial="hidden" animate="visible" variants={fade} className="flex items-center gap-3 mb-12">
          <span className="w-7 h-px bg-muted-foreground" />
          <span className="text-xs tracking-[0.14em] uppercase text-muted-foreground">Case Study</span>
          <span className="w-7 h-px bg-muted-foreground" />
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fade} custom={1}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl"
          style={{ fontFamily: "var(--font-display)" }}>
          In five years, we got <span className="text-primary italic">two chances</span> to work on this page.
        </motion.h1>
        <motion.div initial="hidden" animate="visible" variants={fade} custom={2}
          className="mt-14 flex gap-8 flex-wrap justify-center text-xs tracking-widest uppercase text-muted-foreground">
          {["Cricinfo", "Homepage Redesign", "Senior Designer → Lead", "10M+ Users", "2021 — 2026"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fade} custom={3}
          className="mt-20 flex flex-col items-center gap-3 text-xs tracking-widest uppercase text-muted-foreground">
          <span>Scroll</span>
          <span className="w-px h-10 bg-muted-foreground/50 animate-bounce" />
        </motion.div>
      </section>

      {/* THE STARTING POINT — 2021 */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground mb-4">The starting point</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
              This is what we inherited.
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              A feed-driven homepage built for volume, not clarity. Everything lived in a single scroll &mdash; scores, articles, promos &mdash; with no separation of intent.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
            className="bg-muted/50 rounded-2xl p-5 md:p-8 pb-0 flex gap-6 overflow-hidden border border-border/50"
            style={{ height: "540px" }}>
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
                    <span className="text-[11px] text-muted-foreground/60 font-mono tracking-wide">espncricinfo.com</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto overflow-x-hidden border border-border border-t-0 rounded-b-xl bg-background min-h-0 scrollbar-thin scrollbar-thumb-border">
                <img src={desk2021} alt="Cricinfo 2021 desktop homepage" className="w-full h-auto block" />
              </div>
            </div>
            {/* Mobile */}
            <div className="w-[150px] md:w-[170px] shrink-0 flex-col h-full hidden md:flex">
              <div className="flex-1 min-h-0 bg-[#0a0a0a] rounded-[32px] p-[6px] flex flex-col relative"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.25)" }}>
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[52px] h-[16px] bg-[#0a0a0a] rounded-full z-[2]" />
                <div className="flex-1 min-h-0 rounded-[26px] overflow-y-auto overflow-x-hidden bg-background mt-0 scrollbar-none">
                  <img src={mobile2021} alt="Cricinfo 2021 mobile homepage" className="w-full h-auto block" />
                </div>
                <div className="h-[4px] bg-white/20 rounded-full w-[36%] mx-auto mt-[6px] mb-[4px]" />
              </div>
            </div>
          </motion.div>
          <p className="text-center text-xs text-muted-foreground/50 mt-4 tracking-wide">Cricinfo Homepage &middot; 2021</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>01 — Problem</SectionLabel>
          <div className="grid md:grid-cols-2 gap-0.5">
            {/* State */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="bg-[hsl(220,18%,12%)] p-12 md:rounded-l-xl">
              <p className="text-[10px] tracking-[0.16em] uppercase font-medium text-background/20 mb-5">The state we were in</p>
              <p className="text-xl md:text-2xl font-bold leading-tight text-background/50" style={{ fontFamily: "var(--font-display)" }}>
                10M+ users. A homepage that worked as a feed. Users arrived for matches — and left. No habit. No reason to return.
              </p>
              <p className="text-sm text-background/40 mt-5 leading-relaxed">This meant high traffic, but low retention and weak long-term engagement.</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Chronological feed", "No structure", "Articles dominated"].map(t => (
                  <span key={t} className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/30">{t}</span>
                ))}
                <span className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary">High bounce between matches</span>
              </div>
            </motion.div>
            {/* Goal */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="bg-[hsl(220,18%,16%)] p-12 md:rounded-r-xl">
              <p className="text-[10px] tracking-[0.16em] uppercase font-medium text-primary mb-5">What success looks like</p>
              <p className="text-xl md:text-2xl font-bold leading-tight text-background/90" style={{ fontFamily: "var(--font-display)" }}>
                Turn the homepage from a <em className="text-primary italic">match-time utility</em> into a <em className="text-primary italic">daily destination</em> — structured, welcoming, and worth returning to.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Time on homepage", "Repeat visits", "Casual users engage"].map(t => (
                  <span key={t} className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-background/5 text-background/30">{t}</span>
                ))}
                <span className="text-[11px] tracking-wide uppercase font-medium px-3 py-1 rounded bg-primary/12 text-primary">Habit, not just utility</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 — IMPACT */}
      <section className="py-24 px-6 bg-foreground text-background border-t border-background/10">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>02 — Impact</SectionLabel>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="text-sm text-background/40 leading-relaxed mb-8">
            To validate the shift from utility → habit, we tracked engagement, system efficiency, and repeat behaviour.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-0.5">
            {[
              { label: "Session duration · Live matches", num: "+22%", title: "Users stayed longer during peak traffic", desc: "The strongest quantified signal. Live match sessions — historically the quickest — extended meaningfully after the structured redesign." },
              { label: "Design system efficiency", num: "3×", title: "Component reuse across the product", desc: "Faster builds, less debt, consistent iterations across three years. The only concrete system metric — and it held across all three versions." },
              { label: "Engagement & conversion", num: "↑", title: "Casual users started returning between matches", desc: "Repeat visits from casual users increased. Homepage also became an app conversion surface — users discovering depth followed through to download." },
            ].map((card, i) => (
              <motion.div key={card.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-[hsl(220,18%,12%)] p-10 flex flex-col justify-between ${i === 0 ? "md:rounded-l-xl" : ""} ${i === 2 ? "md:rounded-r-xl" : ""}`}>
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-medium text-background/20 mb-3">{card.label}</p>
                  <p className="text-5xl md:text-6xl font-bold text-primary leading-none mb-4" style={{ fontFamily: "var(--font-display)" }}>{card.num}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-background/70 mb-2">{card.title}</p>
                  <p className="text-xs text-background/40 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="mt-0.5 bg-[hsl(220,10%,6%)] rounded-b-xl p-5 flex items-center gap-4">
            <p className="text-xs italic text-background/20 leading-relaxed">Honest caveat: +22% and 3× are the strongest quantified signals. Repeat visit and conversion trends are directional — real, but not yet tightened for formal reporting.</p>
          </motion.div>
        </div>
      </section>

      {/* 03 — PROCESS & RESEARCH */}
      <Section label="03 — Process & Research">
        <Prose>
          <h2>From assumptions to actual behaviour</h2>
          <p>Multi-method study: analytics (click, scroll, navigation), user interviews, surveys, usability testing, and editorial workflow analysis. The goal was to understand what the homepage was actually doing — not what we assumed it was doing.</p>
        </Prose>

        {/* Assumption vs Reality */}
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-0.5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="bg-secondary p-12 rounded-l-xl flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">The assumption</p>
            <p className="text-2xl md:text-3xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Users come for <span className="text-primary italic">content</span>.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
            className="bg-[hsl(152,48%,20%)] p-12 rounded-r-xl flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">The reality</p>
            <p className="text-2xl md:text-3xl font-bold leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              Users come for <span className="text-primary italic">matches</span>. Everything else is secondary.
            </p>
          </motion.div>
        </div>

        {/* Insights Grid */}
        <div className="max-w-5xl mx-auto mt-0.5 grid md:grid-cols-2 gap-0.5">
          {[
            { num: "Finding 01", title: "Live matches are the true entry point", desc: "Users arrived to check scores, understand context, and navigate quickly. If live context wasn't immediate, they dropped off. The homepage is a navigation layer for live sport — not a content destination.", tag: "Reframed the brief" },
            { num: "Finding 02", title: "Complexity peaked at the worst moment", desc: "During live matches — peak traffic — competing modules, weak hierarchy, and high density created cognitive overload exactly when speed mattered most.", tag: "UX critical" },
            { num: "Finding 03", title: "Three user types, one surface", desc: "Casual users wanted quick updates. Content consumers wanted stories. Power users wanted stats. Serving all three from one layout made personalisation critical — but hard to prioritise.", tag: "Strategic tension" },
            { num: "Finding 04", title: "Scalability was a system problem", desc: "Non-modular architecture made every new tournament or content type a high-effort rebuild. The problem wasn't content — it was system design bottlenecking every redesign before it started.", tag: "Root cause" },
          ].map((insight, i) => {
            const corners = ["", "", "md:rounded-bl-xl", "md:rounded-br-xl"];
            return (
              <motion.div key={insight.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-card p-10 ${corners[i] || ""}`}>
                <p className="text-xs tracking-widest uppercase text-primary mb-4 font-medium">{insight.num}</p>
                <h4 className="font-semibold text-base mb-3">{insight.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.desc}</p>
                <Badge variant="secondary" className="mt-4 text-xs bg-primary/10 text-primary border-0">{insight.tag}</Badge>
              </motion.div>
            );
          })}
        </div>

        {/* My Contribution */}
        <div className="max-w-3xl mx-auto mt-16">
          <SectionLabel>My contribution</SectionLabel>
          <div className="grid gap-0.5">
            {[
              { num: "01", title: "Originated the feed → structured system shift", desc: "The core strategic call. I led the shift from feed → structured system — defining clear zones, modular components, and shared layout logic that scaled across formats, tournaments, and teams. The impact wasn't just visual: faster builds, less debt, consistent iterations across three years." },
              { num: "02", title: "Made the case before making the design", desc: "Stakeholders, product, editorial — none of them saw the problem. Traffic was fine. Nothing looked broken. I built the research argument for a ceiling we hadn't hit yet. It landed. That's the part I'm most proud of — not the layout, but getting the problem recognised." },
              { num: "03", title: "Held the line on what already worked", desc: "The live score strip (HSB) was the highest-utility surface on the page. Across all three redesigns, we protected it from scope creep. It remained the strongest engagement anchor every time. Knowing what not to redesign is as important as knowing what to change." },
            ].map((item, i) => (
              <motion.div key={item.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-card p-10 grid grid-cols-[48px_1fr] gap-8 border-b border-border last:border-b-0 ${i === 0 ? "rounded-t-xl" : ""} ${i === 2 ? "rounded-b-xl" : ""}`}>
                <p className="text-2xl text-primary" style={{ fontFamily: "var(--font-display)" }}>{item.num}</p>
                <div>
                  <h3 className="font-semibold text-base mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* USER BEHAVIOUR */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>User behaviour · Homepage</SectionLabel>
          <div className="grid md:grid-cols-2 gap-4">
            {/* 2021 Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-3xl text-primary font-bold" style={{ fontFamily: "var(--font-display)" }}>2021</p>
                <span className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-full bg-primary/10 text-primary">Feed-first</span>
              </div>
              {/* Messy pile visualization */}
              <div className="relative h-44 mb-5 overflow-hidden">
                {[
                  { left: 14, top: 20, w: 148, h: 36, rotate: -4, opacity: 0.9, label: "Match report" },
                  { left: 8, top: 50, w: 160, h: 36, rotate: -1, opacity: 0.85, label: "Breaking news" },
                  { left: 20, top: 82, w: 130, h: 32, rotate: 5, opacity: 0.75, label: "Player stats" },
                  { left: 4, top: 110, w: 150, h: 36, rotate: -3, opacity: 0.8, label: "Another article" },
                  { left: 22, top: 140, w: 110, h: 30, rotate: 2, opacity: 0.65, label: "Live score" },
                ].map((c, i) => (
                  <motion.div key={i}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    className="absolute bg-secondary rounded"
                    style={{ left: c.left, top: c.top, width: c.w, height: c.h, transform: `rotate(${c.rotate}deg)`, opacity: c.opacity }}>
                    <span className="absolute left-2 top-2 text-[10px] font-medium text-muted-foreground tracking-wide">{c.label}</span>
                  </motion.div>
                ))}
                <svg className="absolute right-0 top-0 w-20 h-44" viewBox="0 0 80 180">
                  <path d="M40 20 C60 40, 20 70, 50 100 C70 120, 30 140, 45 165" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
                  <circle cx="40" cy="20" r="5" fill="hsl(var(--primary))" opacity="0.7"/>
                  <text x="40" y="18" textAnchor="middle" fontSize="10" fill="hsl(var(--primary))" opacity="0.8">user</text>
                  <polygon points="42,162 48,172 36,172" fill="hsl(var(--primary))" opacity="0.5"/>
                </svg>
              </div>
              {/* Behaviour steps */}
              <div className="flex flex-col gap-2 border-t border-border pt-4">
                {[
                  { bold: "Opens app.", rest: "Sees an undifferentiated scroll of articles.", opacity: 1 },
                  { bold: "Scans down.", rest: "Nothing feels organised. No clear entry point.", opacity: 0.6 },
                  { bold: "Checks score or leaves.", rest: "No reason to explore further.", opacity: 0.35 },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" style={{ opacity: step.opacity }} />
                    <p className="text-xs text-muted-foreground leading-relaxed"><span className="font-medium text-foreground">{step.bold}</span> {step.rest}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs italic text-primary leading-relaxed">"The feed worked for no one in particular."</p>
              </div>
            </motion.div>

            {/* 2023 Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-3xl text-[hsl(152,48%,20%)] font-bold" style={{ fontFamily: "var(--font-display)" }}>2023</p>
                <span className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-full bg-[hsl(152,48%,20%)]/10 text-[hsl(152,48%,20%)]">Structured</span>
              </div>
              {/* Organized shelf visualization */}
              <div className="relative h-44 mb-5 overflow-hidden">
                {/* Score strip */}
                <div className="absolute left-0 top-0 right-0 h-8 bg-[hsl(152,48%,20%)] rounded-md flex items-center px-3">
                  <span className="text-[10px] font-medium text-white/90 tracking-wide">Live score</span>
                  <div className="ml-auto w-14 h-1.5 bg-white/25 rounded-full" />
                </div>
                {/* Top stories */}
                <div className="absolute left-0 top-10 right-0 h-14 bg-secondary rounded-md p-2">
                  <p className="text-[9px] font-medium text-muted-foreground tracking-widest uppercase mb-1">Top stories</p>
                  <div className="flex gap-1.5">
                    <div className="flex-1 h-4 bg-muted rounded" />
                    <div className="flex-1 h-4 bg-muted rounded" />
                    <div className="w-10 h-4 bg-muted rounded opacity-50" />
                  </div>
                </div>
                {/* In-depth */}
                <div className="absolute left-0 top-[104px] right-0 h-10 bg-secondary rounded-md p-1.5">
                  <p className="text-[9px] font-medium text-muted-foreground tracking-widest uppercase mb-1">In-depth</p>
                  <div className="w-[70%] h-3 bg-muted rounded" />
                </div>
                {/* Playlists */}
                <div className="absolute left-0 top-[152px] right-0 h-7 bg-secondary rounded-md px-3 flex items-center gap-1.5">
                  <p className="text-[9px] font-medium text-muted-foreground tracking-widest uppercase">Playlists</p>
                  <div className="flex-1 h-2 bg-muted rounded opacity-60" />
                </div>
                {/* Straight user path */}
                <svg className="absolute right-2 top-0 w-6 h-44" viewBox="0 0 24 180">
                  <line x1="12" y1="16" x2="12" y2="164" stroke="hsl(152,48%,20%)" strokeWidth="1.5" opacity="0.5"/>
                  <circle cx="12" cy="16" r="5" fill="hsl(152,48%,20%)" opacity="0.8"/>
                  <polygon points="12,168 16,158 8,158" fill="hsl(152,48%,20%)" opacity="0.6"/>
                  <circle cx="12" cy="55" r="3" fill="hsl(152,48%,20%)" opacity="0.4"/>
                  <circle cx="12" cy="110" r="3" fill="hsl(152,48%,20%)" opacity="0.4"/>
                </svg>
              </div>
              {/* Behaviour steps */}
              <div className="flex flex-col gap-2 border-t border-border pt-4">
                {[
                  { bold: "Opens app.", rest: "Score anchored at the top — no hunting required.", opacity: 1 },
                  { bold: "Orients instantly.", rest: "Clear zones — they know where to look.", opacity: 0.6 },
                  { bold: "Goes deeper.", rest: "Structure gives them a reason to return.", opacity: 0.35 },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[hsl(152,48%,20%)] shrink-0 mt-1.5" style={{ opacity: step.opacity }} />
                    <p className="text-xs text-muted-foreground leading-relaxed"><span className="font-medium text-foreground">{step.bold}</span> {step.rest}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-[hsl(152,48%,20%)]/5 rounded-lg">
                <p className="text-xs italic text-[hsl(152,48%,20%)] leading-relaxed">"Users built a mental map. That predictability created habit."</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom contrast bar */}
          <div className="mt-3 grid md:grid-cols-2 gap-4">
            <div className="flex gap-4 p-3 px-4 border border-border rounded-lg">
              <div className="text-center">
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">Entry</p>
                <p className="text-xs font-medium text-primary">Scroll → guess</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">Return</p>
                <p className="text-xs font-medium text-primary">Low — nothing anchors</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 px-4 border border-border rounded-lg">
              <div className="text-center">
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">Entry</p>
                <p className="text-xs font-medium text-[hsl(152,48%,20%)]">Score → zone → content</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">Return</p>
                <p className="text-xs font-medium text-[hsl(152,48%,20%)]">High — map is predictable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — BEFORE VS AFTER (Honest Audit) */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>04 — Before vs After</SectionLabel>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                year: "2021", title: "Feed-first · Before",
                dimensions: [
                  { label: "Ease of finding", pct: 35, color: "muted", text: "Works for power users.", desc: "Casual users found no entry points, no hierarchy — overwhelming on first visit." },
                  { label: "Speed of scanning content", pct: 22, color: "muted", text: "Chronological feed only.", desc: "No thematic grouping. Hard to rediscover content. Articles dominated everything." },
                  { label: "Scalability for new tournaments", pct: 18, color: "muted", text: "Non-modular.", desc: "Every tournament = manual rebuild. High effort, inconsistent output, slow team velocity." },
                ],
              },
              {
                year: "2023", title: "Structured · The leap",
                dimensions: [
                  { label: "Ease of finding", pct: 62, color: "accent", text: "Clear hierarchy introduced.", desc: "Top Stories, In-Depth, Playlists. Better for casual users. Still too dense." },
                  { label: "Speed of scanning content", pct: 55, color: "accent", text: "Structured zones.", desc: "Better content discovery. Dark mode added. But too many items per section." },
                  { label: "Scalability for new tournaments", pct: 82, color: "good", text: "Modular system.", desc: "3× component reuse. Faster builds, consistent iterations across the team." },
                ],
              },
              {
                year: "2026", title: "Simplified · After",
                dimensions: [
                  { label: "Ease of finding", pct: 86, color: "good", text: "Cleaner mobile experience.", desc: "Reduced density, shorter scroll, breathing room. Users find what they need faster." },
                  { label: "Speed of scanning content", pct: 84, color: "good", text: "Mental map is clear.", desc: "Users know where things live. Findability improved — especially for casual users." },
                  { label: "Scalability for new tournaments", pct: 82, color: "good", text: "Structure held.", desc: "Low-performing sections removed. Same system, less noise. Personalisation still pending." },
                ],
              },
            ].map((card, i) => (
              <motion.div key={card.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className="bg-[hsl(220,18%,12%)] rounded-xl overflow-hidden">
                <div className="p-7 border-b border-background/10">
                  <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>{card.year}</p>
                  <p className="text-[11px] tracking-widest uppercase text-background/40 font-medium">{card.title}</p>
                </div>
                <div className="p-7 space-y-6">
                  {card.dimensions.map((dim) => (
                    <div key={dim.label}>
                      <p className="text-[10px] tracking-widest uppercase text-background/20 font-medium mb-2">{dim.label}</p>
                      <div className="h-1 bg-background/5 rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${dim.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                          className={`h-full rounded-full ${dim.color === "muted" ? "bg-background/20" : dim.color === "good" ? "bg-[hsl(152,48%,35%)]" : "bg-primary"}`}
                        />
                      </div>
                      <p className="text-xs text-background/40 leading-relaxed"><span className="text-background/70 font-medium">{dim.text}</span> {dim.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOMEPAGE EVOLUTION CAROUSEL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <HomepageEvolutionCarousel />
        </div>
      </section>

      {/* 05 — OUTCOME */}
      <section className="py-24 px-6 bg-foreground text-background border-t border-background/10">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>05 — Outcome</SectionLabel>
          {/* Lead block */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="bg-[hsl(220,10%,6%)] rounded-t-xl p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-background/90 mb-3 leading-tight" style={{ fontFamily: "var(--font-display)" }}>The numbers moved — here's why.</h3>
              <p className="text-sm text-background/40 leading-relaxed">The +22% session uplift didn't come from adding more content. It came from reducing friction: clearer hierarchy, less density, faster access to what users actually came for. Structure created the conditions for longer stays — not more features.</p>
            </div>
            <div className="shrink-0 text-center">
              <p className="text-6xl md:text-7xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>+22%</p>
              <p className="text-[10px] tracking-widest uppercase text-background/20 font-medium mt-2">Session duration · Live matches</p>
            </div>
          </motion.div>
          {/* Outcome cards */}
          <div className="mt-0.5 grid md:grid-cols-2 gap-0.5">
            {[
              { label: "Casual users", title: "Built a reason to come back", desc: "Structure gave casual users legible entry points for the first time. They weren't overwhelmed by the feed — they could find what mattered quickly. Repeat visits followed because the page became predictable and worth opening." },
              { label: "System efficiency", number: "3×", title: "Faster builds across three years", desc: "Modular components meant the team wasn't rebuilding from scratch for every new tournament. Design debt dropped. Iteration speed increased. The system outlasted both redesigns — which is the real measure of whether it worked." },
              { label: "Conversion", title: "Depth surfaced, downloads followed", desc: "When users could actually find the stats, analysis, and data-rich content — instead of it getting buried in a feed — they followed through to the app. The content was always there. Structure made it discoverable." },
              { label: "Findability", title: "Users built a mental map of the product", desc: "Knowing where things live reduces the cognitive load of every visit. That predictability is what turns a utility into a habit. The feed never gave users that — structure did." },
            ].map((card, i) => (
              <motion.div key={card.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-[hsl(220,18%,12%)] p-10 ${i === 2 ? "md:rounded-bl-xl" : ""} ${i === 3 ? "md:rounded-br-xl" : ""}`}>
                <p className="text-[10px] tracking-widest uppercase text-background/20 font-medium mb-3">{card.label}</p>
                {card.number && <p className="text-4xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>{card.number}</p>}
                <h4 className="font-medium text-background/80 mb-2">{card.title}</h4>
                <p className="text-xs text-background/40 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — DECISIONS, CONSTRAINTS & TRADE-OFFS */}
      <Section label="06 — Decisions, Constraints & Trade-offs">
        <Prose>
          <h2>The decisions that didn't have clean answers</h2>
          <p>Each call was shaped by a real constraint — organisational, technical, or structural. What we decided, why it was hard, and what we gave up.</p>
        </Prose>

        {[
          {
            constraint: { title: "Editorial politics vs user clarity", desc: "Top modules carried a minimum of 7–10+ items because editorial stakeholders depended on homepage placement. Every item removed had a team behind it. Reducing density was an organisational negotiation, not a design call." },
            decision: { label: "The decision · 2023", title: "Remove the feed. Introduce a modular structured system.", desc: "The chronological feed was removed entirely. Replaced with clear zones, shared layout logic, scalable components. Not a conservative optimisation — a structural break. The new structure was right. The problem it created was density: organised, but overfilled.", badge: "✓ Shipped 2023" },
            tradeoff: { label: "The trade-off", title: "“Structure without curation is just organised chaos.”", desc: "Moving to zones sacrificed editorial spontaneity. Content had to fit the structure — not the other way around. That discipline took time to build, and the organisation felt it." },
          },
          {
            constraint: { title: "One surface, three intent modes", desc: "Users came needing different things: quick score checks, deep reads, casual browsing between matches. Everything lived in the same layout, with no separation of intent. Designing for one mode risked failing the other two." },
            decision: { label: "The decision · 2026", title: "Reduce density. Prioritise speed.", desc: "During peak traffic, density was the problem. Modules trimmed, low-performing sections removed, breathing room added. The architecture from 2023 didn't change — the calibration did. Same system, less noise.", badge: "✓ Shipped 2026" },
            tradeoff: { label: "Still unresolved", title: "“We understood the consumption mode gap. We didn't fully close it.”", desc: "The distinction between quick updates and deep reading was clear early. The feed-to-structure shift helped — but the homepage still doesn't explicitly separate fast consumption from slow. A real gap, not a spin." },
          },
          {
            constraint: { title: "The instinct to touch everything", desc: "In any redesign, the default is to rebuild what's broken and improve what isn't. The live score strip was the highest-performing surface on the page. Leaving it untouched across three versions required active justification every time." },
            decision: { label: "The decision · 2021–2026", title: "Don't redesign the live score strip.", desc: "The HSB was retained and improved incrementally — never rebuilt from scratch. Across all three redesigns, it remained the strongest engagement anchor on the page. Knowing what not to redesign is as important as knowing what to change.", badge: "✓ Sustained 2021–2026" },
            tradeoff: { label: "The trade-off", title: "“Restraint is a design decision.”", desc: "Visual coherence between the HSB and the redesigned lower page was never fully resolved. What we kept was proven, trusted, and performing. That was worth more than consistency." },
          },
        ].map((block, idx) => (
          <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={idx}
            className={`max-w-5xl mx-auto ${idx === 0 ? "mt-12" : "mt-0.5"}`}>
            <div className="grid md:grid-cols-3 gap-0.5 rounded-xl overflow-hidden">
              {/* Constraint */}
              <div className="bg-card p-10">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium mb-4">The constraint</p>
                <h4 className="font-semibold text-base mb-3">{block.constraint.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.constraint.desc}</p>
              </div>
              {/* Decision */}
              <div className="bg-secondary p-10">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium mb-4">{block.decision.label}</p>
                <h4 className="font-semibold text-base mb-3">{block.decision.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.decision.desc}</p>
                <p className="text-xs font-medium text-primary mt-4">{block.decision.badge}</p>
              </div>
              {/* Trade-off */}
              <div className="bg-foreground text-background p-10">
                <p className="text-[10px] tracking-widest uppercase text-background/20 font-medium mb-4">{block.tradeoff.label}</p>
                <h4 className="text-lg italic text-background/70 mb-3 leading-snug" style={{ fontFamily: "var(--font-display)" }}>{block.tradeoff.title}</h4>
                <p className="text-xs text-background/40 leading-relaxed">{block.tradeoff.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Section>

      {/* HSB EVOLUTION — Don't redesign the live score strip */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-[10px] font-mono tracking-[0.2em] uppercase text-primary bg-primary/10 border border-primary/20 rounded px-3 py-1.5 mb-4">
                The Decision &middot; 2021&ndash;2026
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-background/90 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Don&rsquo;t redesign the<br /><span className="text-primary italic">live score strip.</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-mono tracking-[0.07em] text-[hsl(152,48%,50%)] bg-[hsl(152,48%,20%)]/10 border border-[hsl(152,48%,30%)]/20 rounded-full px-4 py-2 mt-1">
              ✓ Sustained 2021&ndash;2026
            </span>
          </motion.div>

          {/* Stacked screens */}
          <div className="flex flex-col gap-8 mb-12">
            {[
              { year: "2021", sub: "HSV", img: hsbScreen2021, caption: "The original score strip — highest engagement surface on the page. Retained as-is." },
              { year: "2023", sub: "Refresh", img: hsbScreen2023, caption: "Structural redesign around the strip. Everything changed — except this." },
              { year: "2026", sub: "Current", img: hsbScreen2026, caption: "Third iteration. Same strip. Still the strongest anchor." },
            ].map((screen, i) => (
              <motion.div key={screen.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className="grid grid-cols-[80px_1fr] gap-6 items-start">
                {/* Year label + line */}
                <div className="pt-4 flex flex-col items-center gap-2.5">
                  <span className="text-sm font-mono font-medium tracking-[0.1em] text-background/90">{screen.year}</span>
                  <span className="text-[9px] font-mono tracking-[0.12em] uppercase text-background/20">{screen.sub}</span>
                  {i < 2 && <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-background/10 to-transparent" />}
                </div>
                {/* Browser card */}
                <div className="rounded-xl overflow-hidden border border-background/[0.07] bg-[hsl(220,15%,11%)]" style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.5)" }}>
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

          {/* Narrative */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <hr className="border-t border-background/[0.07] mb-8" />
            <div className="grid md:grid-cols-[1fr_140px] gap-10 items-center">
              <p className="text-sm text-background/50 leading-[1.85]">
                The live score strip was the <strong className="text-background/90 font-bold">highest-performing surface</strong> on the homepage. Across three redesigns, it was the one thing we chose not to rebuild. Not because we couldn&rsquo;t improve it — but because <strong className="text-background/90 font-bold">its familiarity was its strength</strong>. Users trusted it. It anchored every visit. Restraint, here, was a design decision.
              </p>
              <div className="text-center md:border-l md:border-background/[0.07] md:pl-9">
                <p className="text-5xl font-extrabold tracking-tight leading-none text-background/90" style={{ fontFamily: "var(--font-display)" }}>
                  3<span className="text-primary">&times;</span>
                </p>
                <p className="text-[8.5px] font-mono tracking-[0.18em] uppercase text-background/20 leading-relaxed mt-1.5">
                  Versions<br />Same strip
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
          <p>Three sequentially dependent phases that reimagine how fans discover, consume, and personalise cricket content.</p>
        </Prose>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-4">
          {[
            { icon: "◎", title: "Short-form content", desc: "Quick updates, lightweight reads, bite-sized moments — a reason to return between matches. The foundation everything else depends on.", status: "In progress", active: true, phone: nextPhone1 },
            { icon: "⊞", title: "Hybrid homepage", desc: "Structure for depth, feed for speed. Viable once short-form has volume to sustain a feed. The two are sequentially dependent.", status: "Planned", active: false, phone: nextPhone2 },
            { icon: "◈", title: "Personalisation", desc: "On the roadmap since 2021. Infrastructure exists. User need is real. It hasn't shipped because it hasn't been the business priority — an organisational problem, not a design one.", status: "Sequencing", active: false, phone: nextPhone3 },
          ].map((card, i) => (
            <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
              className="bg-card border border-border/50 rounded-2xl p-7 flex flex-col">
              <div className="w-10 h-10 rounded-[10px] bg-secondary flex items-center justify-center text-base mb-5">{card.icon}</div>
              <h4 className="font-semibold text-base mb-2 tracking-tight">{card.title}</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">{card.desc}</p>
              {/* Phone mockup */}
              <div className="flex justify-center flex-1 items-end mb-5">
                <div className="w-[74%] max-w-[210px] bg-[#0D0D0D] rounded-[32px] p-[7px] relative"
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 24px 56px rgba(0,0,0,0.22), 0 4px 10px rgba(0,0,0,0.14)" }}>
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-9 h-1.5 bg-[#1C1C1C] rounded-full z-[2]" />
                  <div className="rounded-[26px] overflow-hidden bg-background" style={{ aspectRatio: "9/19.5" }}>
                    <img src={card.phone} alt={`${card.title} concept`} className="w-full h-full object-cover object-top block" />
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className={`text-xs w-fit ${card.active ? "bg-[hsl(152,48%,90%)] text-[hsl(152,48%,20%)] border-transparent" : "border border-border/50"}`}>
                {card.status}
              </Badge>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="max-w-5xl mx-auto mt-6">
          <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-2xl">
            <strong className="text-muted-foreground font-medium">Note:</strong> These three phases are sequentially dependent. Short-form content unlocks hybrid feed viability. Hybrid feed unlocks personalisation at scale. The order matters.
          </p>
        </motion.div>
      </Section>

      {/* LEARNINGS */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>What I learned</SectionLabel>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-background/90 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
            Five years on one surface teaches you things a project never could.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Make the case before making the design. Research gave the problem language. Without that, the 2023 redesign doesn't happen — not because the idea was wrong, but because the <em>problem wasn't visible yet</em>.",
              "Restraint is a design decision. Not redesigning the HSB across three versions was as deliberate as anything we shipped. <em>What not to redesign</em> matters as much as what to change.",
              "Design at scale is the <em>ongoing negotiation</em> between what users need, what the business wants, and what the system can support. The layout is the last part of that — not the first.",
              "A homepage is never finished. Not because the work is incomplete, but because users keep changing, the product keeps growing, and the <em>habit you're trying to build</em> takes longer than any single redesign.",
            ].map((text, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className="bg-[hsl(220,18%,14%)] rounded-xl border border-background/10 p-12">
                <p className="text-lg italic text-background/70 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}
                  dangerouslySetInnerHTML={{ __html: `"${text}"` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 px-6 text-center">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="text-2xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto mb-12 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          The goal was never to ship a homepage. It was to change <span className="text-primary italic">what people do</span> when they open one.
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
          className="text-xs tracking-widest uppercase text-muted-foreground">
          Cricinfo · Homepage Redesign · 2021 — 2026
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2} className="mt-12">
          <Button onClick={() => navigate("/")} variant="outline" size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

/* ─── Helper Components ─── */

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionLabel>{label}</SectionLabel>
    </div>
    {children}
  </section>
);

const SectionLabel = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
    className={`text-sm md:text-base font-semibold tracking-[0.12em] uppercase mb-12 max-w-5xl mx-auto ${dark ? "text-background/70" : "text-foreground/70"}`}
    style={{ fontFamily: "var(--font-display)" }}>
    <span className={`inline-block w-6 h-[2px] mr-3 align-middle ${dark ? "bg-primary/70" : "bg-primary"}`} />
    {children}
  </motion.div>
);

const Prose = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
    className="max-w-3xl mx-auto [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-6 [&_h2]:leading-tight [&_h3]:text-xs [&_h3]:tracking-widest [&_h3]:uppercase [&_h3]:text-muted-foreground [&_h3]:font-medium [&_h3]:mb-4 [&_h3]:mt-12 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-5 [&_p:last-child]:mb-0"
    style={{ fontFamily: "var(--font-display)" }}>
    {children}
  </motion.div>
);

export default CaseStudyCricinfo;
