// ─────────────────────────────────────────────
// INDEX.TSX  (Portfolio Home)
// Uses shared design system: @/lib/tokens + @/components/ds
// Matches: index_5_fixed_4.html layout exactly
// ─────────────────────────────────────────────

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Linkedin } from "lucide-react";
import { NavHome } from "@/components/ds";
import { animation, layout, type as t, surface } from "@/lib/tokens";
import "@/styles/thumbnail-animations.css";

// Thumbnail images
import thumbHomepage from "@/assets/thumb-homepage.png";
import thumbDesignSystem from "@/assets/thumb-design-system-new.jpg";
import thumbQuickReads from "@/assets/thumb-quick-reads.png";
import thumbMatchPage from "@/assets/match-page-thumb.png";
import cricinfoDesktop from "@/assets/cricinfo-desktop.jpg";
import cricinfoMobile from "@/assets/cricinfo-mobile.jpg";
import aboutPhoto from "@/assets/about-prerna.png";

const fade = animation.fade;

// ── DATA ──────────────────────────────────────

const caseStudies = [
  {
    num: "01 / 04",
    company: "ESPN Cricinfo",
    title: "Homepage Evolution",
    titleEm: "2021–2026",
    desc: "Five years of redesigning the world's most visited cricket homepage — twice. A story of iteration, user research, and what it means to design for 10M+ fans.",
    tags: ["Information Architecture", "Navigation", "Redesign"],
    thumbType: "cross-platform" as const,
    thumbImage: thumbHomepage,
    thumbDesktop: cricinfoDesktop,
    thumbMobile: cricinfoMobile,
    statNum: "5 yrs",
    statLabel: "of evolution",
    link: "/case-study/cricinfo",
  },
  {
    num: "02 / 04",
    company: "ESPN Cricinfo",
    title: "Building the",
    titleEm: "Backbone",
    desc: "How a single Figma library grew into a 170-file design system powering a global cricket platform — five phases, one team, and a complete Figma overhaul.",
    tags: ["Design System", "Systems Thinking", "Figma"],
    thumbType: "desktop" as const,
    thumbContain: true,
    thumbImage: thumbDesignSystem,
    statNum: "170+",
    statLabel: "files in system",
    link: "/case-study/design-system",
  },
  {
    num: "03 / 04",
    company: "ESPN Cricinfo",
    title: "Quick Reads —",
    titleEm: "Bite-sized Cricket",
    desc: "A new content format designed to pull users deeper into stories, faster. Increasing engagement through smart information architecture and editorial thinking.",
    tags: ["Feature Design", "Content Strategy", "Engagement"],
    thumbType: "mobile" as const,
    thumbImage: thumbQuickReads,
    statNum: "↑",
    statLabel: "engagement",
    link: "/case-study/quick-reads",
  },
  {
    num: "04 / 04",
    company: "ESPN Cricinfo",
    title: "Match Page",
    titleEm: "Optimisation",
    desc: "Untangling an overloaded page so that 10M+ fans could find what they came for. Simplifying without losing depth — the hardest kind of design problem.",
    tags: ["Live Experience", "UX Optimisation", "Real-time UI"],
    thumbType: "desktop" as const,
    thumbContain: true,
    thumbImage: thumbMatchPage,
    statNum: "10M+",
    statLabel: "daily users",
    link: "/case-study/match-page",
  },
];

const beliefs = [
  {
    num: "01",
    headline: "Good design",
    headlineEm: "reduces thinking.",
    body: "The best interface is the one users don't notice. If someone has to pause — even for a second — you've already lost them. I design to remove that pause.",
  },
  {
    num: "02",
    headline: "Speed is part",
    headlineEm: "of quality.",
    body: "Shipping a good thing late is still a failure. I move fast, learn from real users, and refine with data — not hypotheticals. Perfection is a process, not a prerequisite.",
  },
  {
    num: "03",
    headline: "Familiarity beats",
    headlineEm: "novelty at scale.",
    body: "When 10 million people use your product daily, a clever pattern that confuses 5% of them isn't clever at all. I design for the person who just wants to get the thing done.",
  },
];

// ── WORD CYCLE HOOK ───────────────────────────

const useWordCycle = (words: string[], interval = 2000) => {
  const [index, setIndex] = useState(0);
  const [cycling, setCycling] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setCycling(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setCycling(true);
      }, 50);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return { word: words[index], cycling };
};

// ── COMPONENT ─────────────────────────────────

const Index = () => {
  const navigate = useNavigate();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const { word: cycleWord, cycling } = useWordCycle(["build", "create", "design"]);

  const wrapCls = `${layout.containerWide} mx-auto ${layout.px}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavHome />

      {/* ── HERO ─────────────────────────────────── */}
      <section id="hero" className="min-h-screen flex flex-col pt-[60px]">
        <div className={`${wrapCls} pt-[clamp(80px,8vw,120px)] w-full`}>
          <motion.div initial="hidden" animate="visible" variants={fade} className="mb-14 md:mb-16">
            <span
              className={`inline-flex items-center gap-3 ${t.labelSm} text-primary border border-primary/25 rounded-full px-4 py-[7px]`}
            >
              <span className="w-[6px] h-[6px] rounded-full bg-primary animate-pulse" />
              Open to full-time roles
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={1}
            className="text-[clamp(52px,8vw,120px)] font-normal leading-[0.96] tracking-[-0.032em]"
            style={{ fontFamily: t.displayFont }}
          >
            Designing products
            <br />
            that make <span className="italic text-primary">complexity</span>
            <br />
            <span className="text-muted-foreground">feel simple.</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={2}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end pt-12 border-t border-border mt-[52px]"
          >
            <p className="text-[15px] leading-[1.8] text-muted-foreground font-light max-w-[480px]">
              12 years across startups and global platforms — from building design systems to leading product design for{" "}
              <span className="font-medium text-foreground">10M+ users.</span> Now expanding into design with AI.
            </p>
            <div className="flex gap-3 flex-wrap shrink-0">
              <button
                onClick={() => scrollTo("work")}
                className="inline-flex items-center gap-2 bg-foreground text-background px-9 py-4 rounded-full text-sm font-medium hover:bg-primary hover:-translate-y-0.5 transition-all"
              >
                View My Work →
              </button>
              <button
                onClick={() => navigate("/resume")}
                className="inline-flex items-center gap-2 text-muted-foreground border border-border px-9 py-4 rounded-full text-sm hover:border-foreground hover:text-foreground hover:-translate-y-0.5 transition-all"
              >
                View Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────── */}
      <section id="work" className="border-t border-border">
        <div className={`${wrapCls} pt-[clamp(80px,10vw,140px)] pb-12`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <div className={`flex items-center gap-3 ${t.label} text-primary mb-[18px]`}>
              <span className="w-[22px] h-px bg-primary" />
              Selected Work
            </div>
            <h2
              className="text-[clamp(34px,4.2vw,56px)] font-normal leading-[1.06] tracking-[-0.025em]"
              style={{ fontFamily: t.displayFont }}
            >
              Case studies <em className="italic text-muted-foreground">worth reading</em>
            </h2>
          </motion.div>
        </div>

        <div className={`${wrapCls} flex flex-col gap-4 pb-[clamp(80px,10vw,140px)]`}>
          {caseStudies.map((cs, idx) => {
            const isComingSoon = !cs.link;
            return (
              <motion.div
                key={cs.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={idx}
                className={`bg-secondary border border-border rounded-[20px] overflow-hidden relative group transition-all duration-300 ${
                  isComingSoon
                    ? "cursor-default"
                    : "cursor-pointer hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,14,13,0.1)]"
                }`}
                onClick={() => cs.link && navigate(cs.link)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                  {/* Info side */}
                  <div className="p-10 md:p-[52px_56px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className={`text-xs tracking-[0.06em] uppercase text-muted-foreground`}>{cs.num}</span>
                        <span className={`text-xs tracking-[0.06em] uppercase text-primary`}>{cs.company}</span>
                      </div>
                      <h3
                        className="text-[clamp(26px,2.8vw,42px)] font-normal leading-[1.08] tracking-[-0.025em] mb-4"
                        style={{ fontFamily: t.displayFont }}
                      >
                        {cs.title}
                        <br />
                        <em className="italic text-muted-foreground">{cs.titleEm}</em>
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs tracking-[0.05em] uppercase text-muted-foreground py-[5px] px-3 border border-border rounded-full group-hover:text-primary group-hover:border-primary/25 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm leading-[1.85] text-muted-foreground">{cs.desc}</p>
                    </div>
                    <div className="flex items-end justify-between gap-4 mt-8 pt-6 border-t border-border">
                      <div>
                        <span
                          className="text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.04em] leading-none block"
                          style={{ fontFamily: t.displayFont }}
                        >
                          {cs.statNum}
                        </span>
                        <span className="text-xs text-muted-foreground italic">{cs.statLabel}</span>
                      </div>
                      {!isComingSoon && (
                        <button className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground bg-background border-[1.5px] border-border rounded-full px-7 py-3.5 shrink-0 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all">
                          Read case study
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-[3px] transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Visual side — animated thumbnail */}
                  <div
                    className="relative overflow-hidden min-h-[220px] my-[0px] px-0 gap-0 flex items-end justify-end"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 80% at 10% 90%, hsl(12 60% 70% / 0.15) 0%, transparent 55%), radial-gradient(ellipse 60% 60% at 90% 10%, hsl(220 50% 75% / 0.15) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 80% 85%, hsl(12 40% 65% / 0.1) 0%, transparent 55%), linear-gradient(160deg, hsl(220 15% 14%) 0%, hsl(220 12% 20%) 50%, hsl(12 20% 25%) 100%)",
                    }}
                  >
                    {/* Glow orbs */}
                    <div
                      className="absolute w-[300px] h-[300px] rounded-full -bottom-[100px] -left-[40px]"
                      style={{ background: "radial-gradient(circle, hsl(12 60% 70% / 0.18) 0%, transparent 65%)" }}
                    />
                    <div
                      className="absolute w-[220px] h-[220px] rounded-full -top-[50px] -right-[40px]"
                      style={{ background: "radial-gradient(circle, hsl(220 50% 75% / 0.15) 0%, transparent 65%)" }}
                    />

                    {cs.thumbImage && cs.thumbType === "desktop" && cs.thumbContain && (
                      <img
                        src={cs.thumbImage}
                        alt={`${cs.company} preview`}
                        className="absolute inset-0 m-auto rounded-[12px] z-[2] object-contain thumb-kenburns max-h-[70%] max-w-[75%]"
                      />
                    )}

                    {cs.thumbImage && cs.thumbType === "desktop" && !cs.thumbContain && (
                      <div
                        className="absolute z-[2] top-[60px] bottom-0 left-[40px] right-[40px] rounded-[10px] rounded-b-none p-[2px] pb-0 px-[2px]"
                        style={{
                          boxShadow: "0 -10px 40px rgba(0,0,0,0.4), 0 0 20px hsl(12 80% 55% / 0.2)",
                        }}
                      >
                        <div className="w-full overflow-hidden rounded-[8px] rounded-b-none bg-background">
                          <img
                            src={cs.thumbImage}
                            alt={`${cs.company} preview`}
                            className="w-full block thumb-kenburns"
                          />
                        </div>
                      </div>
                    )}

                    {cs.thumbImage && cs.thumbType === "mobile" && (
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] w-[260px] md:w-[320px] rounded-[22px] rounded-b-none p-[2px] pb-0"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(40 20% 97%) 0%, hsl(12 60% 70%) 25%, hsl(12 80% 55%) 50%, hsl(220 50% 45%) 75%, hsl(12 50% 65%) 100%)",
                          boxShadow: "0 0 24px hsl(12 80% 55% / 0.25), 0 -10px 40px rgba(0,0,0,0.4)",
                        }}
                      >
                        <div className="w-full rounded-[20px] rounded-b-none overflow-hidden bg-background">
                          <img
                            src={cs.thumbImage}
                            alt={`${cs.company} preview`}
                            className="w-full block thumb-kenburns-center"
                          />
                        </div>
                      </div>
                    )}

                    {cs.thumbType === "cross-platform" && cs.thumbDesktop && cs.thumbMobile && (
                      <>
                        {/* Desktop — large, main screenshot */}
                        <div className="absolute inset-[60px] z-[1] flex items-center justify-center">
                          <div
                            className="inline-block rounded-[10px] overflow-hidden"
                            style={{
                              boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
                            }}
                          >
                            <img
                              src={cs.thumbDesktop}
                              alt={`${cs.company} desktop preview`}
                              className="max-w-full max-h-full block thumb-kenburns rounded-[10px]"
                            />
                          </div>
                        </div>

                        {/* Mobile — foreground, overlapping bottom-right */}
                        <div
                          className="absolute bottom-16 right-[16px] z-[3] w-[120px] md:w-[120px] rounded-[14px] rounded-b-14px p-[3px] pb-0 px-0 py-0"
                          style={{
                            background: "hsl(220 70% 50%)",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.18), 0 0 0 1px hsl(220 70% 50% / 0.3)",
                          }}
                        >
                          <div className="w-full rounded-[12px] rounded-b-12px overflow-hidden"></div>

                          <img
                            src={cs.thumbMobile}
                            alt={`${cs.company} mobile preview`}
                            className="w-full block thumb-kenburns-center rounded-[12px] rounded-b-12px"
                          />
                        </div>
                      </>
                    )}

                    {isComingSoon && (
                      <div className="absolute inset-0 bg-background/60 backdrop-blur-[6px] flex flex-col items-center justify-center gap-3 z-10">
                        <span className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground border border-border rounded-full px-5 py-2">
                          Coming Soon
                        </span>
                        <span
                          className="text-[clamp(22px,2.5vw,36px)] font-normal tracking-[-0.02em] italic"
                          style={{ fontFamily: t.displayFont }}
                        >
                          In progress
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── ABOUT (dark) ─────────────────────────── */}
      <section id="about" className={`${surface.dark} relative overflow-hidden py-[clamp(96px,11vw,160px)]`}>
        {/* Watermark */}
        <span
          className="absolute -right-[4%] -bottom-[8%] text-[48vw] font-bold italic leading-[0.8] tracking-[-0.06em] select-none pointer-events-none"
          style={{ fontFamily: t.displayFont, WebkitTextStroke: "1px rgba(250,249,247,0.015)", color: "transparent" }}
        >
          PC
        </span>

        <div className={`${wrapCls} relative z-[2]`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`flex items-center gap-3 ${t.label} text-background/30 mb-16`}
          >
            <span className="w-[22px] h-px bg-background/30" />
            About me
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[clamp(32px,4vw,56px)]">
            {/* Left: headline + bio */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="md:col-span-2">
              <h2
                className="text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.025em] text-background mb-8"
                style={{ fontFamily: t.displayFont }}
              >
                Making sense of complexity,
                <br />
                <em className="italic text-background/30">one system at a time.</em>
              </h2>
              <p className="text-[15px] leading-[1.85] text-background/50 mb-8">
                For 12 years, I've been designing products that millions of people use without thinking about. That's
                the goal — design so clear it disappears. I've moved from execution to ownership to leadership across
                startups and global platforms, building systems that make design work faster, smarter, and more human.
              </p>

              {/* Beliefs */}
              <div className="mb-10">
                {beliefs.map((b, i) => (
                  <div
                    key={b.num}
                    className={`py-[22px] border-t border-background/[0.07] ${i === beliefs.length - 1 ? "border-b border-background/[0.07]" : ""}`}
                  >
                    <div>
                      <p
                        className="text-lg font-normal tracking-[-0.02em] text-background/90 leading-[1.2] mb-2"
                        style={{ fontFamily: t.displayFont }}
                      >
                        {b.headline} <em className="italic text-primary/80">{b.headlineEm}</em>
                      </p>
                      <p className="text-[13px] leading-[1.78] text-background/55">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: photo + beliefs */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}>
              <div className="mb-10 rounded-xl overflow-hidden">
                <img src={aboutPhoto} alt="Prerna Chhajer" className="w-full h-auto object-cover rounded-xl" />
              </div>

              <p className={`text-[10px] tracking-[0.06em] uppercase text-background/25 mb-4`}>Specialties</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Design Systems",
                  "Product Strategy",
                  "Usability Frameworks",
                  "Competitive Analysis",
                  "AI-assisted Design",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs text-background/45 px-4 py-2 border border-background/10 rounded-full hover:text-primary hover:border-primary/40 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WRITING ──────────────────────────────── */}
      <section id="writing" className="border-t border-border py-[clamp(96px,11vw,160px)]">
        <div className={wrapCls}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mb-14"
          >
            <div className={`flex items-center gap-3 ${t.label} text-primary mb-[18px]`}>
              <span className="w-[22px] h-px bg-primary" />
              Writing
            </div>
            <h2
              className="text-[clamp(34px,4.2vw,56px)] font-normal leading-[1.06] tracking-[-0.025em]"
              style={{ fontFamily: t.displayFont }}
            >
              Design <em className="italic text-muted-foreground">thinking</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border rounded-[14px] overflow-hidden">
            {/* ── Design System article ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={1}
              className="p-10 cursor-pointer group hover:bg-secondary/60 transition-colors border-b md:border-b-0 md:border-r border-border"
              onClick={() => navigate("/blog/design-system")}
            >
              <span className={`${t.labelSm} text-muted-foreground`}>Mar 2026</span>
              <h3
                className="text-[clamp(20px,2.2vw,28px)] font-normal leading-[1.18] tracking-[-0.02em] mt-4 mb-4"
                style={{ fontFamily: t.displayFont }}
              >
                What Building a Design System Over <em className="italic text-muted-foreground">Five Years</em> Really
                Taught Me
              </h3>
              <p className="text-[13px] leading-[1.78] text-muted-foreground mb-6">
                Five years. Five hard problems. Engineering gaps, tooling shifts, and a full identity overhaul — why
                alignment matters more than components.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-primary transition-colors">
                Read article
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-[3px] transition-transform" />
              </span>
            </motion.div>

            {/* ── AI Portfolio article ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={2}
              className="p-10 cursor-pointer group hover:bg-secondary/60 transition-colors"
              onClick={() => navigate("/blog/ai-portfolio")}
            >
              <span className={`${t.labelSm} text-muted-foreground`}>Apr 2026</span>
              <h3
                className="text-[clamp(20px,2.2vw,28px)] font-normal leading-[1.18] tracking-[-0.02em] mt-4 mb-4"
                style={{ fontFamily: t.displayFont }}
              >
                From Zero to Shipped: How I Built My Entire Portfolio{" "}
                <em className="italic text-muted-foreground">with AI</em>
              </h3>
              <p className="text-[13px] leading-[1.78] text-muted-foreground mb-6">
                No portfolio, no Framer skills, no plan. Two weeks later it was live — built entirely with AI. The
                honest story of curiosity, tools, and what it changed.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-primary transition-colors">
                Read article
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-[3px] transition-transform" />
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT + FOOTER (unified dark) ──────── */}
      <section id="contact" className={`${surface.dark} relative overflow-hidden pt-[clamp(80px,10vw,140px)]`}>
        {/* Big headline */}
        <div className={`${wrapCls} mb-[clamp(48px,6vw,80px)]`}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-[clamp(36px,5.5vw,80px)] font-normal leading-[0.96] tracking-[-0.035em] text-background/90"
            style={{ fontFamily: t.displayFont }}
          >
            Let's{" "}
            <span
              className={`inline-block text-primary italic transition-all duration-[400ms] ${cycling ? "animate-[wordFlip_0.4s_cubic-bezier(0.16,1,0.3,1)]" : ""}`}
            >
              {cycleWord}
            </span>
            <br />
            <em className="italic text-background/30">something worth using.</em>
          </motion.h2>
        </div>

        {/* Three info columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className={`${wrapCls} grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-[clamp(48px,6vw,72px)]`}
        >
          <div>
            <span className="text-[11px] tracking-[0.07em] uppercase text-background/30 block mb-3.5">Email</span>
            <a
              href="mailto:work.chhajer@gmail.com"
              className="text-[clamp(16px,1.8vw,22px)] font-normal tracking-[-0.02em] text-background/90 border-b border-background/20 pb-0.5 hover:text-primary hover:border-primary transition-colors inline-block"
              style={{ fontFamily: t.displayFont }}
            >
              work.chhajer@gmail.com
            </a>
          </div>
          <div>
            <span className="text-[11px] tracking-[0.07em] uppercase text-background/30 block mb-3.5">
              Availability
            </span>
            <span className="text-[13px] text-background/50 leading-[1.6]">
              Open to full-time roles
              <br />
              Based in India · Remote-friendly
            </span>
          </div>
          <div>
            <span className="text-[11px] tracking-[0.07em] uppercase text-background/30 block mb-3.5">Social</span>
            <div className="flex gap-2.5 flex-wrap">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/prerna-chhajer/" },
                { label: "Behance", href: "https://www.behance.net/prerna_Chhajer" },
                { label: "Instagram", href: "https://www.instagram.com/_justatraveler/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[7px] px-4 py-[9px] rounded-full border border-background/15 text-xs text-background/60 tracking-[0.02em] hover:border-primary hover:text-primary hover:bg-primary/[0.06] transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-background/[0.08]" />

        {/* Bottom bar */}
        <div
          className={`${wrapCls} flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-[clamp(32px,4vw,48px)]`}
        >
          <span className="text-[11px] text-background/25 tracking-[0.05em]">© 2026 Prerna Chhajer</span>
          <nav className="flex gap-6">
            {[
              { label: "Work", action: () => scrollTo("work") },
              { label: "About", action: () => scrollTo("about") },
              { label: "Writing", action: () => scrollTo("writing") },
              { label: "Resume", action: () => navigate("/resume") },
              { label: "Email", action: () => (window.location.href = "mailto:work.chhajer@gmail.com") },
            ].map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-[11px] text-background/25 tracking-[0.04em] hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Giant name watermark — removed to avoid clutter, keeping contact clean */}
      </section>

      {/* Keyframe for word cycle */}
      <style>{`
        @keyframes wordFlip {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Index;
