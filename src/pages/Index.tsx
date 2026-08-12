// ─────────────────────────────────────────────
// INDEX.TSX  (Portfolio Home)
// Uses shared design system: @/lib/tokens + @/components/ds
// Matches: index_5_fixed_4.html layout exactly
// ─────────────────────────────────────────────

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Linkedin, Users, Target, Rocket, Wand2 } from "lucide-react";
import { NavHome } from "@/components/ds";
import { Button } from "@/components/ui/button";
import { animation, layout, type as t, surface } from "@/lib/tokens";
import "@/styles/thumbnail-animations.css";

// Thumbnail images
import thumbHomepage from "@/assets/thumb-homepage-laptop.png.asset.json";
import thumbDesignSystem from "@/assets/thumb-ds-docs.png.asset.json";
import thumbQuickReads from "@/assets/thumb-quick-reads.png.asset.json";
import thumbMatchPage from "@/assets/match-page-thumb.png.asset.json";
import aboutPhoto from "@/assets/about-prerna.png";
import proximityLogo from "@/assets/company-logos/proximity.svg";
import americanExpressLogo from "@/assets/company-logos/american-express.png";
import cognizantLogo from "@/assets/company-logos/cognizant.png";
import espnCricinfoLogo from "@/assets/company-logos/espncricinfo.svg";
import fabHotelsLogo from "@/assets/company-logos/fabhotels.png";
import telstraLogo from "@/assets/company-logos/telstra.png";
import prudentialLogo from "@/assets/company-logos/prudential.webp";
import singtelOptusLogo from "@/assets/company-logos/singtel-optus.png";
import decimalLogo from "@/assets/company-logos/decimal.png";

// Tool logos (CDN asset pointers)
import figmaLogo from "@/assets/tool-logos/figma.png.asset.json";
import claudeLogo from "@/assets/tool-logos/claude2.png.asset.json";
import lovableLogo from "@/assets/tool-logos/lovable.svg.asset.json";
import granolaLogo from "@/assets/tool-logos/granola.png.asset.json";
import chatgptLogo from "@/assets/tool-logos/chatgpt.png.asset.json";
import notionLogo from "@/assets/tool-logos/notion.png.asset.json";
import gaLogo from "@/assets/tool-logos/ga2.png.asset.json";
import slackLogo from "@/assets/tool-logos/slack.png.asset.json";
import jiraLogo from "@/assets/tool-logos/jira.png.asset.json";
import mixpanelLogo from "@/assets/tool-logos/mixpanel.png.asset.json";
import zoomLogo from "@/assets/tool-logos/zoom.png.asset.json";
import miroLogo from "@/assets/tool-logos/miro.png.asset.json";
import zeroheightLogo from "@/assets/tool-logos/zeroheight.png.asset.json";

const fade = animation.fade;

const tools = [
  { name: "Figma", logo: figmaLogo.url },
  { name: "Claude", logo: claudeLogo.url },
  { name: "Lovable", logo: lovableLogo.url },
  { name: "Granola", logo: granolaLogo.url },
  { name: "ChatGPT", logo: chatgptLogo.url },
  { name: "Notion", logo: notionLogo.url },
  { name: "Google Analytics", logo: gaLogo.url },
  { name: "Slack", logo: slackLogo.url },
  { name: "Jira", logo: jiraLogo.url },
  { name: "Mixpanel", logo: mixpanelLogo.url },
  { name: "Zoom", logo: zoomLogo.url },
  { name: "Miro", logo: miroLogo.url },
  { name: "Zeroheight", logo: zeroheightLogo.url },
];

const strengths = [
  {
    icon: Users,
    title: "Mentoring designers",
    desc: "Set the quality bar through hands-on critique",
  },
  {
    icon: Target,
    title: "Stakeholder alignment",
    desc: "Turn ambiguity into decisions teams can rally behind",
  },
  {
    icon: Rocket,
    title: "0 to 1, then scaled",
    desc: "Shipped early concepts through to 10M+ user systems",
  },
  {
    icon: Wand2,
    title: "AI-augmented workflows",
    desc: "Design and prototype faster without losing craft",
  },
];

// ── DATA ──────────────────────────────────────

const caseStudies = [
  {
    num: "01 / 04",
    company: "ESPN Cricinfo",
    title: "Redesigning Cricket's Most-Visited Homepage for 10M+ Fans",
    titleEm: "",

    thumbType: "photo" as const,
    thumbImage: thumbHomepage.url,
    statNum: "5 yrs",
    statLabel: "of evolution",
    link: "/case-study/homepage",
  },
  {
    num: "02 / 04",
    company: "ESPN Cricinfo",
    title: "Scaling a Design System for a global cricket platform",
    titleEm: "",

    thumbType: "photo" as const,
    thumbImage: thumbDesignSystem.url,
    statNum: "170+",
    statLabel: "files in system",
    link: "/case-study/design-system",
  },

  {
    num: "03 / 04",
    company: "ESPN Cricinfo",
    title: "Simplifying an Overloaded Page for 10M+ Fans",
    titleEm: "",

    thumbType: "photo" as const,
    thumbImage: thumbMatchPage.url,
    statNum: "10M+",
    statLabel: "daily users",
    link: "/case-study/match-page",
  },

  {
    num: "04 / 04",
    company: "ESPN Cricinfo",
    title: "Bite-sized cricket content designed to increase reader engagement",
    titleEm: "",

    thumbType: "photo" as const,
    thumbImage: thumbQuickReads.url,
    statNum: "↑",
    statLabel: "engagement",
    link: "/case-study/quick-reads",
  },
];

const companies = [
  { name: "Proximity Works", logo: proximityLogo, slug: "proximity" },
  { name: "American Express", logo: americanExpressLogo, slug: "american-express" },
  { name: "Cognizant", logo: cognizantLogo, slug: "cognizant" },
  { name: "ESPNcricinfo", logo: espnCricinfoLogo, slug: "espncricinfo" },
  { name: "FabHotels", logo: fabHotelsLogo, slug: "fabhotels" },
  { name: "Telstra", logo: telstraLogo, slug: "telstra" },
  { name: "Prudential", logo: prudentialLogo, slug: "prudential" },
  { name: "Singtel Optus", logo: singtelOptusLogo, slug: "singtel-optus" },
  { name: "Decimal", logo: decimalLogo, slug: "decimal" },
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
      <section id="hero" className="pt-[20px] border-b border-border overflow-hidden">
        <div className={`${wrapCls} pt-16 pb-14 md:pt-12 md:mt-8 md:pb-20 lg:pt-12 lg:pb-24 w-full text-center`}>
          <motion.div initial="hidden" animate="visible" variants={fade} className="mb-7 md:mb-9">
            {/*    <span className="inline-flex items-center gap-2.5 text-[0.6875rem] tracking-[0.1em] uppercase text-primary border border-primary/25 rounded-full px-4 py-2">
            <span className="w-[6px] h-[6px] rounded-full bg-primary animate-pulse" />
              open to design lead roles
            </span> */}
          </motion.div>

          <div className="mx-auto max-w-[980px]">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fade}
              custom={1}
              className="text-[clamp(2.45rem,6.2vw,4.5rem)] font-semibold leading-[0.98] tracking-normal text-balance"
              style={{ fontFamily: t.displayFont }}
            >
              Defining teams & products that make <span className="text-primary">complexity</span> feel simple.
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fade}
              custom={2}
              className="mx-auto mt-8 max-w-[680px]"
            >
              <p className="text-[0.9375rem] md:text-[1.0625rem] leading-[1.65] text-muted-foreground font-normal">
                From 0-to-1 startups to a platform at 100M+ scale — I've built design systems, mentored teams, and
                shipped work that moved real numbers. Now applying that same rigor to AI-assisted design.
              </p>
              <div className="flex gap-3 flex-col sm:flex-row sm:justify-center mt-9">
                <Button
                  onClick={() => scrollTo("work")}
                  className="h-auto bg-foreground text-background px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary hover:-translate-y-0.5 transition-all"
                >
                  View my work →
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/resume")}
                  className="h-auto text-muted-foreground px-8 py-3.5 rounded-full text-sm hover:border-foreground hover:text-foreground hover:bg-background hover:-translate-y-0.5 transition-all"
                >
                  View resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          custom={3}
          className={`${wrapCls} grid grid-cols-1 sm:grid-cols-3 border-t border-border`}
        >
          {[
            ["3.4 → 4.5", "app rating"],
            ["100M+", "monthly traffic"],
            ["12 years", "building and leading design"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`py-8 md:py-11 text-center ${index > 0 ? "border-t sm:border-t-0 sm:border-l border-border" : ""}`}
            >
              <p
                className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-semibold leading-none tracking-normal"
                style={{ fontFamily: t.displayFont }}
              >
                {value}
              </p>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-muted-foreground mt-2">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── COMPANIES ────────────────────────────── */}
      <section
        aria-label="Companies I've worked with"
        className="companies-section border-b border-border bg-secondary/30 py-11 overflow-hidden"
      >
        <p className={`${wrapCls} ${t.labelSm} text-muted-foreground text-center mb-8 md:mb-10`}>
          Companies I've worked with
        </p>
        <div className="company-marquee">
          <div className="company-marquee-track">
            {[0, 1].map((set) => (
              <div key={set} className="company-marquee-set" aria-hidden={set === 1}>
                {companies.map((company) => (
                  <div key={`${set}-${company.name}`} className="company-logo-item">
                    <img
                      src={company.logo}
                      alt={set === 0 ? company.name : ""}
                      className={`company-logo-image company-logo-image--${company.slug}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────── */}
      <section id="work" className="border-t border-border">
        <div className={`${wrapCls} pt-[clamp(80px,10vw,140px)] pb-12`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <div className={`flex items-center gap-3 ${t.label} text-primary mb-[18px]`}>
              <span className="w-[22px] h-px bg-primary" />
              Recent Case studies
            </div>
            {/*     <h2
              className="text-[clamp(2.125rem,4.2vw,3.5rem)] font-normal leading-[1.06] tracking-[-0.005em]"
              style={{ fontFamily: t.displayFont }}
            >
              Case studies
            </h2>*/}
          </motion.div>
        </div>

        <div className={`${wrapCls} grid grid-cols-1 md:grid-cols-2 gap-4 pb-[clamp(80px,10vw,140px)]`}>
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
                className={`bg-secondary border border-border rounded-[20px] overflow-hidden relative group transition-all duration-300 flex flex-col ${
                  isComingSoon
                    ? "cursor-default"
                    : "cursor-pointer hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,14,13,0.1)]"
                }`}
                onClick={() => cs.link && navigate(cs.link)}
              >
                {/* Visual — top half */}
                <div className="relative overflow-hidden aspect-[16/10] w-full bg-secondary">
                  {cs.thumbImage && cs.thumbType === "photo" && (
                    <img
                      src={cs.thumbImage}
                      alt={`${cs.company} preview`}
                      className="absolute inset-0 w-full h-full object-cover z-[2] thumb-kenburns-center"
                    />
                  )}

                  {isComingSoon && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-[6px] flex flex-col items-center justify-center gap-3 z-10">
                      <span className="text-[0.6875rem] tracking-[0.1em] uppercase text-muted-foreground border border-border rounded-full px-5 py-2">
                        Coming Soon
                      </span>
                      <span
                        className="text-[clamp(1.375rem,2.5vw,2.25rem)] font-normal tracking-normal italic"
                        style={{ fontFamily: t.displayFont }}
                      >
                        In progress
                      </span>
                    </div>
                  )}
                </div>

                {/* Info — bottom half */}
                <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs tracking-[0.06em] uppercase text-muted-foreground`}>{cs.num}</span>
                      <span className={`text-xs tracking-[0.06em] uppercase text-primary`}>{cs.company}</span>
                    </div>
                    <h3
                      className="text-[clamp(1.225rem,2.2vw,1.65rem)] font-normal leading-[1.12] tracking-[-0.005em] mb-3"
                      style={{ fontFamily: t.displayFont }}
                    >
                      {cs.title}
                      <em className="italic text-muted-foreground">{cs.titleEm}</em>
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4 pt-5 border-t border-border">
                    <div>
                      <span
                        className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-[-0.02em] leading-none block"
                        style={{ fontFamily: t.displayFont }}
                      >
                        {cs.statNum}
                      </span>
                      <span className="text-xs text-muted-foreground italic">{cs.statLabel}</span>
                    </div>
                    {!isComingSoon && (
                      <button className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground bg-background border-[1.5px] border-border rounded-full px-6 py-3 shrink-0 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all">
                        Read case study
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-[3px] transition-transform" />
                      </button>
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
          className="absolute -right-[4%] -bottom-[8%] text-[48vw] font-bold italic leading-[0.8] tracking-[-0.04em] select-none pointer-events-none"
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
            className={`flex items-center gap-3 ${t.label} text-background/65 mb-16`}
          >
            <span className="w-[22px] h-px bg-background/30" />
            HOW I THINK
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[clamp(32px,4vw,96px)]">
            {/* Left: headline + bio */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="">
              {/*     <h2
                className="text-[clamp(1.5rem,4vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.005em] text-background mb-8"
                style={{ fontFamily: t.displayFont }}
              >
                Making sense of complexity,
                <br />
                <em className="italic text-background/65">one system at a time.</em>
              </h2>
              <p className="text-[0.9375rem] leading-[1.85] text-background/80 mb-8">
                For 12 years, I've been designing products that millions of people use without thinking about. That's
                the goal — design so clear it disappears. I've moved from execution to ownership to leadership across
                startups and global platforms, building systems that make design work faster, smarter, and more human.
              </p> */}

              {/* Beliefs */}
              <div className="mb-10">
                {beliefs.map((b, i) => (
                  <div key={b.num} className={`py-[22px] border-b border-background/[0.07] `}>
                    <div>
                      <p
                        className="text-lg font-normal tracking-normal text-background/90 leading-[1.2] mb-2"
                        style={{ fontFamily: t.displayFont }}
                      >
                        {b.headline} <em className="italic text-primary/80">{b.headlineEm}</em>
                      </p>
                      <p className="text-[0.8125rem] leading-[1.78] text-background/80">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className={`text-[0.625rem] tracking-[0.06em] uppercase text-background/65 mb-4`}>Specialties</p>
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
                    className="text-xs text-background/75 px-4 py-2 border border-background/10 rounded-full hover:text-primary hover:border-primary/40 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className={`text-[0.625rem] tracking-[0.06em] uppercase text-background/65 mb-4 mt-10`}>
                AVAILIBILITY
              </p>
              <div className="flex flex-wrap gap-2">
                {["Full Time", "Contract", "Worldwide", "Remote-friendly"].map((s) => (
                  <span
                    key={s}
                    className="text-xs text-background/75 px-4 py-2 border border-background/10 rounded-full hover:text-primary hover:border-primary/40 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: photo + beliefs */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}>
              <div className="mb-10 rounded-xl overflow-hidden">
                <img src={aboutPhoto} alt="Prerna Chhajer" className="w-full h-auto object-cover rounded-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ───────────────────────────── */}
      <section id="how-i-work" className="border-t border-border py-[clamp(96px,11vw,160px)]">
        <div className={`${layout.containerWide} px-6 md:px-14`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`flex items-center gap-3 ${t.label} text-primary mb-14`}
          >
            <span className="w-[22px] h-px bg-primary" />
            How I work
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-[clamp(32px,5vw,96px)]">
            {/* Tools */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <p className="text-xl text-muted-foreground mb-10" style={{ fontFamily: t.displayFont }}>
                Tools I reach for
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-9 gap-x-4">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-3 group" title={tool.name}>
                    {tool.logo ? (
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        loading="lazy"
                        className="h-8 w-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      <span className="h-8 w-8 flex items-center justify-center rounded-md border border-border text-[0.625rem] text-muted-foreground">
                        {tool.name.slice(0, 2)}
                      </span>
                    )}
                    <span className="text-[0.6875rem] text-muted-foreground text-center leading-tight">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What I bring */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}>
              <p className="text-xl text-muted-foreground mb-6" style={{ fontFamily: t.displayFont }}>
                What I bring to a team
              </p>
              <div>
                {strengths.map((s, i) => (
                  <div
                    key={s.title}
                    className={`flex items-start gap-5 py-6 border-t border-border ${
                      i === strengths.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <s.icon className="h-5 w-5 text-muted-foreground shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="text-base font-medium tracking-normal mb-1">{s.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
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
              BLOG
            </div>
            <h2
              className="text-[clamp(2.125rem,4.2vw,3.5rem)] font-normal leading-[1.06] tracking-[-0.005em]"
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
              className="p-7 md:p-10 cursor-pointer group hover:bg-secondary/60 transition-colors border-b md:border-b-0 md:border-r border-border"
              onClick={() => navigate("/blog/design-system")}
            >
              <span className={`${t.labelSm} text-muted-foreground`}>Mar 2026</span>
              <h3
                className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-normal leading-[1.18] tracking-normal mt-4 mb-4"
                style={{ fontFamily: t.displayFont }}
              >
                What Building a Design System Over <em className="italic text-muted-foreground">Five Years</em> Really
                Taught Me
              </h3>
              <p className="text-[0.8125rem] leading-[1.78] text-muted-foreground mb-6">
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
              className="p-7 md:p-10 cursor-pointer group hover:bg-secondary/60 transition-colors"
              onClick={() => navigate("/blog/ai-portfolio")}
            >
              <span className={`${t.labelSm} text-muted-foreground`}>Apr 2026</span>
              <h3
                className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-normal leading-[1.18] tracking-normal mt-4 mb-4"
                style={{ fontFamily: t.displayFont }}
              >
                From Zero to Shipped: How I Built My Entire Portfolio{" "}
                <em className="italic text-muted-foreground">with AI</em>
              </h3>
              <p className="text-[0.8125rem] leading-[1.78] text-muted-foreground mb-6">
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
            className="text-[clamp(2.25rem,5.5vw,5rem)] font-normal leading-[0.96] tracking-[-0.015em] text-background/90"
            style={{ fontFamily: t.displayFont }}
          >
            Let's{" "}
            <span
              className={`inline-block text-primary italic transition-all duration-[400ms] ${cycling ? "animate-[wordFlip_0.4s_cubic-bezier(0.16,1,0.3,1)]" : ""}`}
            >
              {cycleWord}
            </span>
            <br />
            <em className="italic text-background/65">something worth using.</em>
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
            <span className="text-[0.6875rem] tracking-[0.07em] uppercase text-background/65 block mb-3.5">Email</span>
            <a
              href="mailto:work.chhajer@gmail.com"
              className="text-[clamp(1rem,1.8vw,1.375rem)] font-normal tracking-normal text-background/90 border-b border-background/20 pb-0.5 hover:text-primary hover:border-primary transition-colors inline-block"
              style={{ fontFamily: t.displayFont }}
            >
              work.chhajer@gmail.com
            </a>
          </div>
          <div>
            <span className="text-[0.6875rem] tracking-[0.07em] uppercase text-background/65 block mb-3.5">
              Availability
            </span>
            <span className="text-[0.8125rem] text-background/80 leading-[1.6]">
              Open to full-time roles
              <br />
              Worldwide · Remote-friendly
            </span>
          </div>
          <div>
            <span className="text-[0.6875rem] tracking-[0.07em] uppercase text-background/65 block mb-3.5">Social</span>
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
                  className="inline-flex items-center gap-[7px] px-4 py-[9px] rounded-full border border-background/15 text-xs text-background/85 tracking-[0.02em] hover:border-primary hover:text-primary hover:bg-primary/[0.06] transition-all"
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
          <span className="text-[0.6875rem] text-background/65 tracking-[0.05em]">© 2026 Prerna Chhajer</span>
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
                className="text-[0.6875rem] text-background/65 tracking-[0.04em] hover:text-primary transition-colors"
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
