// ─────────────────────────────────────────────
// RESUME PAGE
// Uses shared design system: @/lib/tokens + @/components/ds
// ─────────────────────────────────────────────

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { NavCaseStudy } from "@/components/ds";
import { animation, layout, type as t } from "@/lib/tokens";

const fade = animation.fade;

// ── DATA ──────────────────────────────────────

const stats = [
  { num: "12+", label: "Years experience" },
  { num: "100M+", label: "Users impacted" },
  { num: "200+", label: "Figma components built" },
];

const contactItems = [
  { label: "Email", value: "work.chhajer@gmail.com", href: "mailto:work.chhajer@gmail.com" },
  { label: "Phone", value: "+91-9560507848", href: "tel:+919560507848" },
  { label: "Location", value: "Worldwide · Remote-friendly" },
  { label: "LinkedIn", value: "prerna-chhajer", href: "https://www.linkedin.com/in/prerna-chhajer/" },
  { label: "Behance", value: "prerna_Chhajer", href: "https://www.behance.net/prerna_Chhajer" },
];

const skillCategories = [
  {
    heading: "Execution",
    items: [
      "UX Research",
      "Design Systems",
      "Interaction Design",
      "Prototyping",
      "Information Architecture",
      "Heuristic Evaluation",
      "Visual Design",
      "Design Ops",
    ],
  },
  { heading: "Strategy", items: ["Product Strategy", "Design Vision", "Roadmap Planning"] },
  {
    heading: "Leadership",
    items: [
      "Design Leadership",
      "Cross-functional Collaboration",
      "Design Critique",
      "Mentorship",
      "Stakeholder Alignment",
    ],
  },
  { heading: "Process", items: ["Agile / Scrum", "Design Thinking", "Workshop Facilitation"] },
  { heading: "Research", items: ["User Interviews", "Usability Testing", "Journey Mapping", "Competitive Analysis"] },
];

const toolCategories = [
  { heading: "Design", items: ["Figma", "Miro / FigJam", "ZeroHeight"] },
  { heading: "Research & Analytics", items: ["Hotjar", "Google Analytics", "VWO", "UserTesting", "UX Pilot"] },
  { heading: "AI", items: ["Claude", "ChatGPT", "Gemini", "Lovable", "Perplexity", "Pencil"] },
];

const experienceData = [
  {
    company: "Proximity Works · Remote",
    role: "Lead Product Designer — ESPNCricinfo",
    years: "2021 – Present · 4.5+ yrs",
    current: true,
    bullets: [
      <>
        Led designs for ESPNCricinfo's design system from scratch — scaling to{" "}
        <span className="text-primary font-medium">200+ Figma files, 50+ components</span> across web, iOS, Android, and
        dark mode.
      </>,
      <>
        Led homepage redesign championing casual users (80% of traffic); reduced bounce rates{" "}
        <span className="text-primary font-medium">~20–30%</span> and improved returning user sessions{" "}
        <span className="text-primary font-medium">~15%</span>.
      </>,
      <>
        Drove native app launch on iOS and Android (hybrid to native transition), including Dynamic Island and pinning
        features — contributed to app rating improving from{" "}
        <span className="text-primary font-medium">3.4–4.5</span>
      </>,
      "Owned design ops end-to-end: ZeroHeight documentation, stakeholder reporting, and cross-team alignment within the ESPN/Disney org.",
    ],
  },
  {
    company: "Decimal · Gurgaon",
    role: "Sr. Product Designer",
    years: "2019 – 2021",
    current: false,
    bullets: [
      <>
        Led design across two products — <strong>Saarthi</strong> (fintech lending for field agents) and{" "}
        <strong>Vahana</strong> (no-code platform for UIs, workflows, and APIs) — leading a 2-person team across both
      </>,
      <>
        Built both design systems from scratch — reduced screen design and dev handoff time by{" "}
        <span className="text-primary font-medium">~40%</span>.
      </>,
      "Delivered Vahana MVP in under 6 months, enabling early NBFC partnerships and product validation.",
    ],
  },
  {
    company: "FabHotels · Gurgaon",
    role: "Product Designer",
    years: "2018 – 2019",
    current: false,
    bullets: [
      <>
        Redesigned the hotel listing page and full checkout funnel — made pricing, discount placement, and tax display
        decisions to optimize for click-through and conversion; reduced booking funnel drop-offs{" "}
        <span className="text-primary font-medium">~15–20%</span>.
      </>,
      "Led usability testing and user research end-to-end, including on-road user interviews, heatmapping, and session recording analysis to pinpoint funnel breakdowns, synthesized into insight reports that shaped design decisions",
      "Contributed to FabHotels' first design system, initiated by the design manager",
    ],
  },
  {
    company: "Cognizant · Gurgaon",
    role: "UX/UI Designer",
    years: "2014 – 2018",
    current: false,
    bullets: [
      "Designed AI, AR, data science, and iBeacon-driven solutions for major brands including American Express, Telstra, Prudential, and Singtel Optus",
      "Designed PocketDash — an analytical dashboard for Amex marketers to track credit card offers, conversions, and campaign performance.",
      "Led heuristic evaluation and research-driven design for Papa John's, including a working-hours estimation and concept pitch; also designed employee and patient management tools and an in-house event app",
    ],
  },
  {
    company: "DogSpot · Gurgaon",
    role: "Web Designer",
    years: "2013 – 2014",
    current: false,
    bullets: [
      "Designed UX and UI for an early-stage e-commerce platform; first product role after transitioning from front-end development.",
    ],
  },
  {
    company: "Pyrumas · Bangalore",
    role: "Web Designer",
    years: "2012 – 2013",
    current: false,
    bullets: ["Designed solutions for clients as per requirements in Education, Travel, and Transport domains."],
  },
];

// ── COMPONENTS ────────────────────────────────

const SidebarHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-[10px] text-[0.6875rem] tracking-[0.1em] uppercase text-primary font-semibold mb-5">
    <span className="w-4 h-px bg-primary shrink-0" />
    {children}
  </div>
);

const SectionHeading = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div
    id={id}
    className="flex items-center gap-3 text-[0.6875rem] tracking-[0.1em] uppercase text-primary font-semibold pb-[18px] mb-11 border-b-[1.5px] border-border"
  >
    <span className="w-[18px] h-[1.5px] bg-primary shrink-0" />
    {children}
  </div>
);

// ── PAGE ──────────────────────────────────────

const Resume = () => {
  const wrapCls = `${layout.containerWide} mx-auto ${layout.px}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavCaseStudy period="Résumé" />

      {/* ── PAGE HEADER ────────────────────────── */}
      <header className="pt-[calc(60px+clamp(52px,8vw,96px))] pb-[clamp(52px,7vw,80px)] border-b border-border">
        <div className={wrapCls}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-[clamp(40px,5vw,60px)]"
          >
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.08em] uppercase text-primary font-medium mb-5">
                <span className="w-[22px] h-px bg-primary" />
                Résumé
              </div>
              <h1
                className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1] tracking-[-0.03em]"
                style={{ fontFamily: t.displayFont }}
              >
                12 years of <em className="italic text-muted-foreground">design,</em>
                <br />
                distilled.
              </h1>
            </div>
            <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
              <p className="text-base leading-[1.7] text-muted-foreground md:text-right">
                <strong className="text-foreground font-semibold block mb-0.5">Open to full-time roles.</strong>
                Worldwide · Remote-friendly
              </p>
              <a
                href="/prerna_chhajer_resume.pdf"
                download
                className="inline-flex items-center gap-[10px] bg-foreground text-background px-8 py-[15px] rounded-full text-sm font-medium hover:bg-primary hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,98,45,0.25)] transition-all whitespace-nowrap"
              >
                <Download className="w-[15px] h-[15px]" />
                Download PDF
              </a>
            </div>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            custom={1}
            className="flex items-center flex-wrap gap-y-6 pt-[clamp(28px,3.5vw,44px)] border-t border-border"
          >
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-px h-10 bg-border mx-[clamp(32px,4.5vw,64px)] hidden sm:block shrink-0" />}
                <div className="flex flex-col gap-1.5 pr-[clamp(32px,4.5vw,64px)] sm:pr-0">
                  <span
                    className="text-[clamp(1.75rem,3.2vw,2.625rem)] font-normal tracking-[-0.03em] leading-none"
                    style={{ fontFamily: t.displayFont }}
                  >
                    {s.num}
                  </span>
                  <span className="text-xs tracking-[0.05em] uppercase text-muted-foreground font-medium">
                    {s.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────── */}
      <div className={wrapCls}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          custom={2}
          className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-[clamp(48px,7vw,104px)] pt-[clamp(64px,8vw,100px)] pb-[clamp(80px,10vw,128px)] items-start"
        >
          {/* ── SIDEBAR ──────────────────────────── */}
          <aside className="md:sticky md:top-20">
            {/* Contact */}
            <div className="mb-[52px]">
              <SidebarHeading>Contact</SidebarHeading>
              <div className="flex flex-col">
                {contactItems.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex flex-col gap-0.5 py-3.5 border-b border-border ${i === 0 ? "pt-0" : ""} ${i === contactItems.length - 1 ? "border-b-0 pb-0" : ""}`}
                  >
                    <span className="text-[0.625rem] tracking-[0.08em] uppercase text-muted-foreground font-medium">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors leading-[1.4]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground leading-[1.4]">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-[52px]">
              <SidebarHeading>Skills</SidebarHeading>
              <div className="flex flex-col gap-5">
                {skillCategories.map((cat) => (
                  <div key={cat.heading}>
                    <span className="text-[0.625rem] tracking-[0.08em] uppercase text-muted-foreground font-medium mb-2 block">
                      {cat.heading}
                    </span>
                    <div className="flex flex-wrap gap-[7px]">
                      {cat.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-[0.8125rem] text-muted-foreground px-3.5 py-1.5 border border-border rounded-full leading-none hover:text-primary hover:border-primary/35 hover:bg-primary/[0.04] transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <SidebarHeading>Tools</SidebarHeading>
              <div className="flex flex-col gap-5">
                {toolCategories.map((cat) => (
                  <div key={cat.heading}>
                    <span className="text-[0.625rem] tracking-[0.08em] uppercase text-muted-foreground font-medium mb-2 block">
                      {cat.heading}
                    </span>
                    <div className="flex flex-wrap gap-[7px]">
                      {cat.items.map((tool) => (
                        <span
                          key={tool}
                          className="text-[0.8125rem] text-muted-foreground px-3.5 py-1.5 border border-border rounded-full leading-none hover:text-primary hover:border-primary/35 hover:bg-primary/[0.04] transition-all cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ── MAIN ─────────────────────────────── */}
          <main className="min-w-0">
            {/* Experience */}
            <section className="mb-[clamp(64px,8vw,96px)]">
              <SectionHeading id="exp-h">Experience</SectionHeading>
              {experienceData.map((exp, i) => (
                <div
                  key={exp.company}
                  className={`pb-[52px] mb-[52px] border-b border-border ${i === experienceData.length - 1 ? "border-b-0 pb-0 mb-0" : ""}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-5 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[clamp(1.25rem,2.2vw,1.625rem)] font-normal tracking-[-0.02em] leading-[1.1] flex items-center gap-[10px] mb-1.5"
                        style={{ fontFamily: t.displayFont }}
                      >
                        {exp.current && <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />}
                        {exp.company}
                      </div>
                      <div className="text-base text-muted-foreground">{exp.role}</div>
                    </div>
                    <span className="text-xs tracking-[0.06em] uppercase text-muted-foreground font-medium bg-secondary px-4 py-1.5 rounded-full shrink-0 self-start mt-1">
                      {exp.years}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3.5 list-none">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-[0.9375rem] leading-[1.78] text-foreground/80 pl-[22px] relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-2 before:h-[1.5px] before:bg-primary"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education */}
            <section>
              <SectionHeading id="edu-h">Education</SectionHeading>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 flex-wrap">
                <div>
                  <div
                    className="text-[1.375rem] font-normal tracking-[-0.015em] mb-1.5"
                    style={{ fontFamily: t.displayFont }}
                  >
                    B.Tech in Computer Science
                  </div>
                  <div className="text-[0.9375rem] text-muted-foreground">MAIET, Jaipur</div>
                </div>
                <span className="text-xs tracking-[0.06em] uppercase text-muted-foreground font-medium bg-secondary px-4 py-1.5 rounded-full shrink-0 self-start">
                  2008 – 2012
                </span>
              </div>
            </section>
          </main>
        </motion.div>
      </div>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer className="border-t border-border">
        <div className={`${wrapCls} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8`}>
          <span className="text-[0.8125rem] text-muted-foreground">© 2026 Prerna Chhajer</span>
          <nav className="flex gap-7">
            {["Work", "About", "Writing", "Résumé", "Email"].map((link) => (
              <a
                key={link}
                href={
                  link === "Email"
                    ? "mailto:work.chhajer@gmail.com"
                    : link === "Résumé"
                      ? "/resume"
                      : `/#${link.toLowerCase()}`
                }
                className="text-[0.8125rem] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
