// ─────────────────────────────────────────────
// INDEX.TSX  (Portfolio Home)
// Uses shared design system: @/lib/tokens + @/components/ds
// ─────────────────────────────────────────────

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users, Target, Rocket, Wand2, ArrowUpRight, CornerDownRight } from "lucide-react";
//import { NavHome } from "@/components/ds";
import HeroDrop from "@/components/HeroDrop";
import { heroCompositions, photoCompositions, pickOne } from "@/lib/heroCompositions";
import { Button } from "@/components/ui/button";
import { animation, layout, type as t, surface } from "@/lib/tokens";
import "@/styles/thumbnail-animations.css";

// Thumbnail images
import thumbHomepage from "@/assets/thumb-homepage-laptop.png";
import thumbDesignSystem from "@/assets/thumb-ds-docs.png";
import thumbQuickReads from "@/assets/thumb-quick-reads.png";
import thumbMatchPage from "@/assets/match-page-thumb.png";
import aboutPhoto from "@/assets/about-prerna.png";
import heroPhoto1 from "@/assets/hero/hero-1.jpg";
import heroPhoto2 from "@/assets/hero/hero-2.jpg";
import heroPhoto3 from "@/assets/hero/hero-3.jpg";

// Company logos
import proximityLogo from "@/assets/company-logos/proximity.svg";
import americanExpressLogo from "@/assets/company-logos/american-express.png";
import cognizantLogo from "@/assets/company-logos/cognizant.png";
import espnCricinfoLogo from "@/assets/company-logos/espncricinfo.svg";
import fabHotelsLogo from "@/assets/company-logos/fabhotels.png";
import telstraLogo from "@/assets/company-logos/telstra.png";
import prudentialLogo from "@/assets/company-logos/prudential.webp";
import singtelOptusLogo from "@/assets/company-logos/singtel-optus.png";
import decimalLogo from "@/assets/company-logos/decimal.png";

// Tool logos
import figmaLogo from "@/assets/tool-logos/figma.png";
import claudeLogo from "@/assets/tool-logos/claude2.png";
import lovableLogo from "@/assets/tool-logos/lovable.svg";
import granolaLogo from "@/assets/tool-logos/granola.png";
import chatgptLogo from "@/assets/tool-logos/chatgpt.png";
import notionLogo from "@/assets/tool-logos/notion.png";
import gaLogo from "@/assets/tool-logos/ga2.png";
import slackLogo from "@/assets/tool-logos/slack.png";
import jiraLogo from "@/assets/tool-logos/jira.png";
import mixpanelLogo from "@/assets/tool-logos/mixpanel.png";
import zoomLogo from "@/assets/tool-logos/zoom.png";
import miroLogo from "@/assets/tool-logos/miro.png";
import zeroheightLogo from "@/assets/tool-logos/zeroheight.png";

const fade = animation.fade;

const heroPill =
  "inline-flex items-center bg-background border border-border rounded-xl px-6 py-3 text-[clamp(0.9375rem,1.4vw,1.25rem)] text-foreground whitespace-nowrap";

// ─────────────────────────────────────────────
// TOOLS
// ─────────────────────────────────────────────

const tools = [
  { name: "Figma", logo: figmaLogo },
  { name: "Claude", logo: claudeLogo },
  { name: "Lovable", logo: lovableLogo },
  { name: "Granola", logo: granolaLogo },
  { name: "ChatGPT", logo: chatgptLogo },
  { name: "Notion", logo: notionLogo },
  { name: "Google Analytics", logo: gaLogo },
  { name: "Slack", logo: slackLogo },
  { name: "Jira", logo: jiraLogo },
  { name: "Mixpanel", logo: mixpanelLogo },
  { name: "Zoom", logo: zoomLogo },
  { name: "Miro", logo: miroLogo },
  { name: "Zeroheight", logo: zeroheightLogo },
];

// ─────────────────────────────────────────────
// STRENGTHS
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// CASE STUDIES
// ─────────────────────────────────────────────

const caseStudies = [
  {
    num: "01 / 04",
    company: "ESPN Cricinfo",
    title: "Redesigning Cricket's Most-Visited Homepage for 10M+ Fans",
    titleEm: "",
    thumbType: "photo" as const,
    thumbImage: thumbHomepage,
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
    thumbImage: thumbDesignSystem,
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
    thumbImage: thumbMatchPage,
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
    thumbImage: thumbQuickReads,
    statNum: "↑",
    statLabel: "engagement",
    link: "/case-study/quick-reads",
  },
];

// ─────────────────────────────────────────────
// COMPANIES
// ─────────────────────────────────────────────

const companies = [
  {
    name: "Proximity Works",
    logo: proximityLogo,
    slug: "proximity",
  },
  {
    name: "American Express",
    logo: americanExpressLogo,
    slug: "american-express",
  },
  {
    name: "Cognizant",
    logo: cognizantLogo,
    slug: "cognizant",
  },
  {
    name: "ESPNcricinfo",
    logo: espnCricinfoLogo,
    slug: "espncricinfo",
  },
  {
    name: "FabHotels",
    logo: fabHotelsLogo,
    slug: "fabhotels",
  },
  {
    name: "Telstra",
    logo: telstraLogo,
    slug: "telstra",
  },
  {
    name: "Prudential",
    logo: prudentialLogo,
    slug: "prudential",
  },
  {
    name: "Singtel Optus",
    logo: singtelOptusLogo,
    slug: "singtel-optus",
  },
  {
    name: "Decimal",
    logo: decimalLogo,
    slug: "decimal",
  },
];

// ─────────────────────────────────────────────
// BELIEFS
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// WORD CYCLE
// ─────────────────────────────────────────────

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

  return {
    word: words[index],
    cycling,
  };
};

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

const Index = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const { word: cycleWord, cycling } = useWordCycle(["build", "create", "design"]);

  // Curated hero + photo-collage composition, chosen once per page load
  const comp = useMemo(() => pickOne(heroCompositions), []);
  const photoComp = useMemo(() => pickOne(photoCompositions), []);
  const heroPhotos = [
    { src: heroPhoto1, alt: "Danakil Depression sulfur pools, Ethiopia" },
    { src: heroPhoto2, alt: "Working remotely on a laptop from a wooden deck" },
    { src: heroPhoto3, alt: "Geothermal landscape at sunrise" },
  ];

  const wrapCls = `${layout.containerWide} mx-auto ${layout.px}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/*    <NavHome />

      ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}

      <section id="hero" className="pt-[20px] border-b border-border overflow-hidden">
        <div className={`${wrapCls} pt-8 md:pt-10 pb-12 md:pb-16 w-full`}>
          {/* Eyebrow + photo stack + pills */}
          <div className="relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fade}
              className="flex items-start justify-between gap-3 pt-3 md:pl-6 xl:pl-[0px]"
            >
              <div className="flex items-start gap-3">
                <CornerDownRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.09em] leading-[1.6] text-foreground">
                  Lead Product Designer
                  <br />
                  Based in India, working globally
                </p>
              </div>

              <a
                href="/prerna_chhajer_resume.pdf"
                download
                className="flex items-center gap-1.5 text-[0.75rem] md:text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors shrink-0"
              >
                <Download className="h-3.5 w-3.5" />
                Download Resume
              </a>
            </motion.div>

            {/* Photo collage + pills — composition chosen at random on each load */}
            <div className=" flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16">
              <HeroDrop
                variant="photos"
                target={comp.photos}
                heavy
                delay={0}
                from={380}
                className="w-[190px] sm:w-[230px] md:w-[270px] lg:w-[300px] shrink-0"
                style={{ order: comp.order.photos }}
              >
                <div className="relative w-full aspect-[1/1.45] overflow-hidden">
                  {photoComp.items.map((it, i) => (
                    <img
                      key={`${it.photo}-${i}`}
                      src={heroPhotos[it.photo].src}
                      alt={heroPhotos[it.photo].alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="absolute block object-cover"
                      style={{
                        top: it.top,
                        left: it.left,
                        width: it.width,
                        height: it.height,
                        zIndex: it.z,
                        transform: `rotate(${it.rotate}deg)`,
                      }}
                    />
                  ))}
                </div>
              </HeroDrop>
              {/* Pills — cluster A */}
              <div className="flex flex-col items-start gap-3" style={{ order: comp.order.clusterA }}>
                <HeroDrop variant="pillA" target={comp.tag1} delay={0.18}>
                  <span className={`${heroPill} text-[clamp(1.25rem,2.2vw,1.625rem)]`}>product designer</span>
                </HeroDrop>
                <HeroDrop variant="pillB" target={comp.tag2} delay={0.34} className="md:ml-20">
                  <span className={`${heroPill} text-[clamp(1.25rem,2.2vw,1.625rem)]`}>lead, 12 yrs</span>
                </HeroDrop>
              </div>
              {/* Pills — cluster B */}
              <div className="flex flex-col items-start gap-3" style={{ order: comp.order.clusterB }}>
                <div className="flex items-center gap-3">
                  <HeroDrop variant="pillC" target={comp.tag3} delay={0.5}>
                    <span className={`${heroPill} text-[clamp(1.25rem,2.2vw,1.625rem)]`}>traveler</span>
                  </HeroDrop>
                  <HeroDrop variant="arrow" target={comp.icon} delay={0.62} from={240}>
                    <button
                      onClick={() => scrollTo("work")}
                      aria-label="View my work"
                      className="h-12 w-12 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <ArrowRight className="h-5 w-5 rotate-90" />
                    </button>
                  </HeroDrop>
                </div>
                <HeroDrop variant="pillD" target={comp.tag4} delay={0.74} className="md:ml-20">
                  <span className={`${heroPill} text-[clamp(1.25rem,2.2vw,1.625rem)]`}>adventurer</span>
                </HeroDrop>
              </div>
            </div>
          </div>
        </div>

        {/* Giant wordmark — aligned with content */}
        <div className={` overflow-visible`}>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={3}
            className="px-8 lowercase font-normal leading-[0.9] tracking-[-0.01em] whitespace-nowrap justify-centre"
            style={{
              fontFamily: t.displayFont,
              fontSize: "calc(14.5vw - 16px)",
            }}
          >
            prerna chhajer
          </motion.h1>
        </div>

        <div className={`${wrapCls} pb-12 md:pb-16 w-full`}>
          {/* Two-column intro */}
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <motion.div initial="hidden" animate="visible" variants={fade} custom={4}>
              <p className="text-[0.9375rem] leading-[1.7] text-muted-foreground max-w-[34ch]">
                I do my best work when nothing's organized yet. 12 years of turning ambiguity into products people
                actually use.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
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

            <motion.div initial="hidden" animate="visible" variants={fade} custom={5} className="relative">
              <span
                aria-hidden
                className="absolute -top-4 -left-1 text-primary/50 text-3xl leading-none"
                style={{ fontFamily: t.displayFont }}
              >
                “
              </span>
              <p
                className="text-[clamp(1.125rem,1.9vw,1.5rem)] leading-[1.45] text-foreground"
                style={{ fontFamily: t.displayFont }}
              >
                From 0-to-1 startups to platforms at 100M+ scale — I've built design systems from scratch, mentored
                designers into leads, and shipped work that moved app ratings from 3.4 to 4.5. Now applying that same
                rigor to AI-assisted design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          COMPANIES
      ───────────────────────────────────────── */}

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

      {/* ─────────────────────────────────────────
          CASE STUDIES
      ───────────────────────────────────────── */}

      <section id="work" className="border-t border-border">
        <div className={`${wrapCls} pt-[clamp(80px,10vw,140px)] pb-12`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <div className={`flex items-center gap-3 ${t.label} text-primary mb-[18px]`}>
              <span className="w-[22px] h-px bg-primary" />
              Recent Case studies
            </div>
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
                onClick={() => {
                  if (cs.link) {
                    navigate(cs.link);
                  }
                }}
              >
                {/* Visual */}

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
                        className="text-[clamp(1.375rem,2.5vw,2.25rem)] font-normal tracking-[0.015em] italic"
                        style={{ fontFamily: t.displayFont }}
                      >
                        In progress
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}

                <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs tracking-[0.06em] uppercase text-muted-foreground">{cs.num}</span>

                      <span className="text-xs tracking-[0.06em] uppercase text-primary">{cs.company}</span>
                    </div>

                    <h3
                      className="text-[clamp(1.225rem,2.2vw,1.65rem)] font-normal leading-[1.12] tracking-[0.015em] mb-3"
                      style={{ fontFamily: t.displayFont }}
                    >
                      {cs.title}

                      <em className="italic text-muted-foreground">{cs.titleEm}</em>
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4 pt-5 border-t border-border">
                    <div>
                      <span
                        className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-[0.015em] leading-none block"
                        style={{ fontFamily: t.displayFont }}
                      >
                        {cs.statNum}
                      </span>

                      <span className="text-xs text-muted-foreground italic">{cs.statLabel}</span>
                    </div>

                    {!isComingSoon && (
                      <button
                        className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground bg-background border-[1.5px] border-border rounded-full px-6 py-3 shrink-0 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(cs.link);
                        }}
                      >
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

      {/* ─────────────────────────────────────────
          ABOUT
      ───────────────────────────────────────── */}

      <section id="about" className={`${surface.dark} relative overflow-hidden py-[clamp(96px,11vw,160px)]`}>
        <span
          className="absolute -right-[4%] -bottom-[8%] text-[48vw] font-bold italic leading-[0.8] tracking-[-0.04em] select-none pointer-events-none"
          style={{
            fontFamily: t.displayFont,
            WebkitTextStroke: "1px rgba(250,249,247,0.015)",
            color: "transparent",
          }}
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <div className="mb-10">
                {beliefs.map((b) => (
                  <div key={b.num} className="py-[22px] border-b border-background/[0.07]">
                    <div>
                      <p
                        className="text-lg font-normal tracking-[0.01em] text-background/90 leading-[1.2] mb-2"
                        style={{ fontFamily: t.displayFont }}
                      >
                        {b.headline} <em className="italic text-primary/80">{b.headlineEm}</em>
                      </p>

                      <p className="text-[0.8125rem] leading-[1.78] text-background/80">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[0.625rem] tracking-[0.06em] uppercase text-background/65 mb-4">Specialties</p>

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

              <p className="text-[0.625rem] tracking-[0.06em] uppercase text-background/65 mb-4 mt-10">AVAILIBILITY</p>

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

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}>
              <div className="mb-10 rounded-xl overflow-hidden">
                <img src={aboutPhoto} alt="Prerna Chhajer" className="w-full h-auto object-cover rounded-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          HOW I WORK
      ───────────────────────────────────────── */}

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
                      <p className="text-base font-medium tracking-[0.01em] mb-1">{s.title}</p>

                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          WRITING
      ───────────────────────────────────────── */}

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
              className="text-[clamp(2.125rem,4.2vw,3.5rem)] font-normal leading-[1.06] tracking-[0.015em]"
              style={{ fontFamily: t.displayFont }}
            >
              Design <em className="italic text-muted-foreground">thinking</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border rounded-[14px] overflow-hidden">
            {/* Design System */}

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
                className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-normal leading-[1.18] tracking-[0.015em] mt-4 mb-4"
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

            {/* AI Portfolio */}

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
                className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-normal leading-[1.18] tracking-[0.015em] mt-4 mb-4"
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

      {/* ─────────────────────────────────────────
          CONTACT + FOOTER
      ───────────────────────────────────────── */}

      <section id="contact" className={`${surface.dark} relative overflow-hidden pt-[clamp(80px,10vw,140px)]`}>
        <div className={`${wrapCls} mb-[clamp(48px,6vw,80px)]`}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-[clamp(2.25rem,5.5vw,5rem)] font-normal leading-[0.96] tracking-[0.015em] text-background/90"
            style={{ fontFamily: t.displayFont }}
          >
            Let's{" "}
            <span
              className={`inline-block text-primary italic transition-all duration-[400ms] ${
                cycling ? "animate-[wordFlip_0.4s_cubic-bezier(0.16,1,0.3,1)]" : ""
              }`}
            >
              {cycleWord}
            </span>
            <br />
            <em className="italic text-background/65">something worth using.</em>
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className={`${wrapCls} grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-[clamp(48px,6vw,72px)]`}
        >
          {/* Email */}

          <div>
            <span className="text-[0.6875rem] tracking-[0.07em] uppercase text-background/65 block mb-3.5">Email</span>

            <a
              href="mailto:work.chhajer@gmail.com"
              className="text-[clamp(1rem,1.8vw,1.375rem)] font-normal tracking-[0.01em] text-background/90 border-b border-background/20 pb-0.5 hover:text-primary hover:border-primary transition-colors inline-block"
              style={{ fontFamily: t.displayFont }}
            >
              work.chhajer@gmail.com
            </a>
          </div>

          {/* Availability */}

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

          {/* Social */}

          <div>
            <span className="text-[0.6875rem] tracking-[0.07em] uppercase text-background/65 block mb-3.5">Social</span>

            <div className="flex gap-2.5 flex-wrap">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/prerna-chhajer/",
                },
                {
                  label: "Behance",
                  href: "https://www.behance.net/prerna_Chhajer",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/_justatraveler/",
                },
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

        <div className="w-full h-px bg-background/[0.08]" />

        <div
          className={`${wrapCls} flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-[clamp(32px,4vw,48px)]`}
        >
          <span className="text-[0.6875rem] text-background/65 tracking-[0.05em]">© 2026 Prerna Chhajer</span>

          <nav className="flex gap-6">
            {[
              {
                label: "Work",
                action: () => scrollTo("work"),
              },
              {
                label: "About",
                action: () => scrollTo("about"),
              },
              {
                label: "Writing",
                action: () => scrollTo("writing"),
              },
              {
                label: "Resume",
                action: () => navigate("/resume"),
              },
              {
                label: "Email",
                action: () => (window.location.href = "mailto:work.chhajer@gmail.com"),
              },
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
      </section>

      {/* ─────────────────────────────────────────
          WORD CYCLE ANIMATION
      ───────────────────────────────────────── */}

      <style>{`
        @keyframes wordFlip {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
