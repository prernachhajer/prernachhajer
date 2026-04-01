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
  { num: "10M+", label: "Users impacted" },
  { num: "200+", label: "Figma components built" },
];

const contactItems = [
  { label: "Email", value: "work.chhajer@gmail.com", href: "mailto:work.chhajer@gmail.com" },
  { label: "Location", value: "India · Remote-friendly" },
  { label: "LinkedIn", value: "prerna-chhajer", href: "https://www.linkedin.com/in/prerna-chhajer/" },
  { label: "Behance", value: "prerna_Chhajer", href: "https://www.behance.net/prerna_Chhajer" },
];

const skills = [
  "UX Research", "Interaction Design", "Design Systems", "Prototyping",
  "Information Architecture", "Heuristic Evaluation", "Visual Design",
  "Design Ops", "Mentorship", "Stakeholder Alignment",
];

const experienceData = [
  {
    company: "ProximityWorks · Bangalore / Remote",
    role: "Lead Product Designer — ESPNCricinfo",
    years: "2021 – Present",
    current: true,
    bullets: [
      <>Built ESPNCricinfo's design system from scratch and scaled it to <strong><span className="text-primary font-medium">200+ Figma files, 50+ components, 100+ variants</span></strong> — spanning web, iOS, Android, and dark mode over 4+ years.</>,
      <>Led a contested homepage redesign by championing casual users (80% of traffic); reduced bounce rates by <span className="text-primary font-medium">~20–30%</span> and improved returning user sessions by <span className="text-primary font-medium">~15%</span>.</>,
      "Unified design system cut feature rollout time from months to weeks across all platforms.",
      "Drove native app transition (hybrid → native), including Dynamic Island on iOS and pinning features on Android.",
      "Owned design ops end-to-end: ZeroHeight documentation, stakeholder reporting, and cross-team alignment within the ESPN/Disney org.",
      "Mentored junior designers; introduced AI-assisted UX workflows and ran heuristic review and critique sessions.",
    ],
  },
  {
    company: "Decimal · Gurgaon",
    role: "Lead Product Designer",
    years: "2019 – 2021",
    current: false,
    bullets: [
      <>Led design across two simultaneous products: <strong>Saarthi</strong> (fintech lending for field agents) and <strong>Vahana</strong> (no-code platform for UIs, workflows, and APIs).</>,
      <>Built both design systems from scratch — reduced screen design and dev handoff time by <span className="text-primary font-medium">~40%</span>.</>,
      <>Simplified the Saarthi loan journey through heuristic evaluation; reduced agent onboarding time by <span className="text-primary font-medium">~25%</span>.</>,
      "Delivered Vahana MVP in under 6 months, enabling early NBFC partnerships and product validation.",
      "First leadership role — managed and mentored a design team with no senior guidance above.",
    ],
  },
  {
    company: "FabHotels · Gurgaon",
    role: "Product Designer",
    years: "2017 – 2018",
    current: false,
    bullets: [
      <>Redesigned the full website and app — homepage, hotel listings, and checkout flows — reducing booking funnel drop-offs by <span className="text-primary font-medium">~15–20%</span>.</>,
      <>Used heatmaps, session recordings, and Google Analytics to drive iterative improvements; reduced redesign cycles by <span className="text-primary font-medium">~30%</span>.</>,
      "Conducted offline user interviews in malls to complement quantitative data with qualitative insight.",
      "Initiated FabHotels' first component library — early foundation for systematic design thinking.",
    ],
  },
  {
    company: "Cognizant · Gurgaon",
    role: "UX Designer → Hybrid UX/UI Designer",
    years: "2013 – 2016",
    current: false,
    bullets: [
      <>Worked across enterprise clients including <strong>American Express</strong> and Papa John's — delivering research, heuristic audits, task flows, and UI execution end-to-end.</>,
      "Designed PocketDash — an analytical dashboard for Amex marketers to track credit card offers, conversions, and campaign performance.",
      "Ran heuristic evaluation projects across multiple products; identified usability gaps and recommended targeted redesigns.",
      "Transitioned from a developer mindset to user-centred design — learning the full UX process in a global enterprise environment.",
    ],
  },
  {
    company: "DogSpot · Gurgaon",
    role: "UX/UI Designer",
    years: "2013 – 2014",
    current: false,
    bullets: [
      "Designed UX and UI for an early-stage e-commerce platform; first product role after transitioning from front-end development.",
      "Worked across web layouts, user flows, and visual design — building the foundation for future product design practice.",
    ],
  },
];

// ── COMPONENTS ────────────────────────────────

const SidebarHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-[10px] text-[11px] tracking-[0.1em] uppercase text-primary font-semibold mb-5">
    <span className="w-4 h-px bg-primary shrink-0" />
    {children}
  </div>
);

const SectionHeading = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div id={id} className="flex items-center gap-3 text-[11px] tracking-[0.1em] uppercase text-primary font-semibold pb-[18px] mb-11 border-b-[1.5px] border-border">
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
          <motion.div initial="hidden" animate="visible" variants={fade}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-[clamp(40px,5vw,60px)]">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.08em] uppercase text-primary font-medium mb-5">
                <span className="w-[22px] h-px bg-primary" />
                Résumé
              </div>
              <h1
                className="text-[clamp(40px,5.5vw,72px)] font-normal leading-[1] tracking-[-0.03em]"
                style={{ fontFamily: t.displayFont }}
              >
                12 years of <em className="italic text-muted-foreground">design,</em>
                <br />distilled.
              </h1>
            </div>
            <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
              <p className="text-base leading-[1.7] text-muted-foreground md:text-right">
                <strong className="text-foreground font-semibold block mb-0.5">Open to full-time roles.</strong>
                Based in India · Remote-friendly
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
          <motion.div initial="hidden" animate="visible" variants={fade} custom={1}
            className="flex items-center flex-wrap gap-y-6 pt-[clamp(28px,3.5vw,44px)] border-t border-border">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-px h-10 bg-border mx-[clamp(32px,4.5vw,64px)] hidden sm:block shrink-0" />}
                <div className="flex flex-col gap-1.5 pr-[clamp(32px,4.5vw,64px)] sm:pr-0">
                  <span className="text-[clamp(28px,3.2vw,42px)] font-normal tracking-[-0.03em] leading-none" style={{ fontFamily: t.displayFont }}>
                    {s.num}
                  </span>
                  <span className="text-xs tracking-[0.05em] uppercase text-muted-foreground font-medium">{s.label}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ── BODY ───────────────────────────────── */}
      <div className={wrapCls}>
        <motion.div initial="hidden" animate="visible" variants={fade} custom={2}
          className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-[clamp(48px,7vw,104px)] pt-[clamp(64px,8vw,100px)] pb-[clamp(80px,10vw,128px)] items-start">

          {/* ── SIDEBAR ──────────────────────────── */}
          <aside className="md:sticky md:top-20">
            {/* Contact */}
            <div className="mb-[52px]">
              <SidebarHeading>Contact</SidebarHeading>
              <div className="flex flex-col">
                {contactItems.map((item, i) => (
                  <div key={item.label} className={`flex flex-col gap-0.5 py-3.5 border-b border-border ${i === 0 ? "pt-0" : ""} ${i === contactItems.length - 1 ? "border-b-0 pb-0" : ""}`}>
                    <span className="text-[10px] tracking-[0.08em] uppercase text-muted-foreground font-medium">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors leading-[1.4]">
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
            <div>
              <SidebarHeading>Skills</SidebarHeading>
              <div className="flex flex-wrap gap-[7px]">
                {skills.map((skill) => (
                  <span key={skill} className="text-[13px] text-muted-foreground px-3.5 py-1.5 border border-border rounded-full leading-none hover:text-primary hover:border-primary/35 hover:bg-primary/[0.04] transition-all cursor-default">
                    {skill}
                  </span>
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
                <div key={exp.company} className={`pb-[52px] mb-[52px] border-b border-border ${i === experienceData.length - 1 ? "border-b-0 pb-0 mb-0" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-5 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="text-[clamp(20px,2.2vw,26px)] font-normal tracking-[-0.02em] leading-[1.1] flex items-center gap-[10px] mb-1.5" style={{ fontFamily: t.displayFont }}>
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
                      <li key={j} className="text-[15px] leading-[1.78] text-foreground/80 pl-[22px] relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-2 before:h-[1.5px] before:bg-primary">
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
                  <div className="text-[22px] font-normal tracking-[-0.015em] mb-1.5" style={{ fontFamily: t.displayFont }}>
                    B.E. in Computer Science
                  </div>
                  <div className="text-[15px] text-muted-foreground">MAIET, Jaipur</div>
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
          <span className="text-[13px] text-muted-foreground">© 2026 Prerna Chhajer</span>
          <nav className="flex gap-7">
            {["Work", "About", "Writing", "Résumé", "Email"].map((link) => (
              <a key={link} href={link === "Email" ? "mailto:work.chhajer@gmail.com" : link === "Résumé" ? "/resume" : `/#${link.toLowerCase()}`}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
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
