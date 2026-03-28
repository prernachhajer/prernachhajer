import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const caseStudies = [
  {
    num: "01 / 04",
    company: "ESPN Cricinfo",
    title: "Homepage Evolution",
    titleEm: "(2021–2026)",
    desc: "Five years of redesigning the world's most visited cricket homepage — twice. A story of iteration, user research, and what it means to design for 10M+ fans.",
    tags: ["Information Architecture", "Navigation", "Redesign"],
    thumbGradient: "bg-gradient-to-br from-[#131110] via-[#1e1a14] to-[#291a0e]",
    thumbWord: "Home",
    thumbWordLight: true,
    badgeNum: "2021–26",
    badgeLabel: "",
    impactNum: "5",
    impactLabel: "years of evolution",
    link: "/case-study/cricinfo",
  },
  {
    num: "02 / 04",
    company: "ESPN Cricinfo",
    title: "Building the",
    titleEm: "Backbone",
    desc: "How a single Figma library grew into a 170-file design system powering a global cricket platform — five phases, one team, and a complete Figma overhaul.",
    tags: ["Design System", "Systems Thinking", "Figma"],
    thumbGradient: "bg-gradient-to-br from-[#eae5dc] via-[#d6cfc4] to-[#c8bfb0]",
    thumbWord: "System",
    thumbWordLight: false,
    badgeNum: "170+",
    badgeLabel: "Files",
    impactNum: "100+",
    impactLabel: "component variants",
    link: "/case-study/design-system",
  },
  {
    num: "03 / 04",
    company: "ESPN Cricinfo",
    title: "Quick Reads —",
    titleEm: "Bite-sized Cricket",
    desc: "A new content format designed to pull users deeper into stories, faster. Increasing engagement through smart information architecture and editorial thinking.",
    tags: ["Feature Design", "Content Strategy", "Engagement"],
    thumbGradient: "bg-gradient-to-br from-[#0e1118] via-[#141d2a] to-[#1a2638]",
    thumbWord: "Quick",
    thumbWordLight: true,
    badgeNum: "↑",
    badgeLabel: "Engagement",
    impactNum: "↑",
    impactLabel: "time on content",
    link: "#",
  },
  {
    num: "04 / 04",
    company: "ESPN Cricinfo",
    title: "Match Page",
    titleEm: "Optimisation",
    desc: "Untangling an overloaded page so that 10M+ fans could find what they came for. Simplifying without losing depth — the hardest kind of design problem.",
    tags: ["Live Experience", "UX Optimisation", "Real-time UI"],
    thumbGradient: "bg-gradient-to-br from-[#e6e0d4] via-[#d0c8b8] to-[#bcb09c]",
    thumbWord: "Match",
    thumbWordLight: false,
    badgeNum: "10M+",
    badgeLabel: "Users",
    impactNum: "10M+",
    impactLabel: "daily users served",
    link: "#",
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

const blogPosts = [
  {
    featured: true,
    meta: "Mar 2026 · Featured",
    title: "What Building a Design System Over",
    titleEm: "Five Years",
    titleEnd: "Really Taught Me",
    excerpt: "A personal account of growing ESPNCricinfo's design system from a single library to 170+ files — the phases, the pivots, and what systems thinking actually feels like when you're living inside it.",
    gradient: "bg-gradient-to-br from-[#1a1410] to-primary",
    thumbWord: "System",
    status: null,
  },
  {
    featured: false,
    meta: "Coming soon",
    title: "Designing",
    titleEm: "with AI",
    titleEnd: "— What's Actually Changed",
    excerpt: "On learning to ship end-to-end with AI tools and what that means for the future of design craft.",
    gradient: "bg-gradient-to-br from-[#0e1520] to-[#1e3a5a]",
    thumbWord: "AI",
    status: "In progress",
  },
  {
    featured: false,
    meta: "Coming soon",
    title: "Designing for",
    titleEm: "10M Users",
    titleEnd: "a Day — What Scale Actually Changes",
    excerpt: "The decisions that look completely different when your choices affect millions of people every single day.",
    gradient: "bg-gradient-to-br from-[#1a1610] to-[#3d2e1a]",
    thumbWord: "Scale",
    status: "In progress",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 h-[60px] flex items-center justify-between px-6 md:px-14 bg-background/90 backdrop-blur-xl border-b border-border">
        <a href="#" className="text-base font-normal tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Prerna Chhajer
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Work", id: "work" },
            { label: "About", id: "about" },
            { label: "Writing", id: "writing" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs font-normal tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-xs tracking-[0.06em] uppercase bg-foreground text-background px-5 py-2 rounded-full hover:bg-primary transition-colors"
          >
            Say Hello
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen grid grid-rows-[1fr_auto] pt-[60px] pb-20 px-6 md:px-14 max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-end pb-14">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] uppercase text-primary border border-primary/20 rounded-full px-3.5 py-1.5">
              <span className="w-[5px] h-[5px] rounded-full bg-primary animate-pulse" />
              Open to full-time roles
            </span>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-[clamp(48px,7.5vw,112px)] font-normal leading-[0.97] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Designing products<br />
            that make <span className="italic text-primary">complexity</span><br />
            <span className="text-muted-foreground">feel simple.</span>
          </motion.h1>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end pt-12 border-t border-border mt-12"
          >
            <p className="text-base leading-[1.75] text-muted-foreground font-light max-w-[480px]">
              12 years across startups and global platforms —
              from building design systems to leading product design for{" "}
              <span className="font-medium text-foreground">10M+ users.</span>{" "}
              Now expanding into design with AI.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => scrollTo("work")}
                className="inline-flex items-center bg-foreground text-background px-7 py-3 rounded-full text-[13px] font-medium hover:bg-primary transition-all hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <button className="inline-flex items-center text-muted-foreground border border-border px-7 py-3 rounded-full text-[13px] hover:border-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="py-20 md:py-28 border-t border-border">
        <div className="px-6 md:px-14 max-w-[1200px] mx-auto mb-16 md:mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-primary mb-4">
                <span className="w-5 h-px bg-primary" />
                Selected Work
              </div>
              <h2 className="text-[clamp(32px,4vw,52px)] font-normal leading-[1.08] tracking-[-0.025em]" style={{ fontFamily: "var(--font-display)" }}>
                Case studies <em className="italic text-muted-foreground">worth reading</em>
              </h2>
            </div>
          </motion.div>
        </div>

        {caseStudies.map((cs, idx) => (
          <motion.div
            key={cs.num}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
            className="grid grid-cols-1 md:grid-cols-2 min-h-[480px] border-t border-border relative overflow-hidden group cursor-pointer hover:bg-secondary/50 transition-colors"
            onClick={() => cs.link !== "#" && navigate(cs.link)}
          >
            {/* Accent bar on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }} />

            {/* Text */}
            <div className="px-6 md:px-14 py-14 flex flex-col justify-between md:border-r border-border">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-[11px] text-muted-foreground tracking-[0.06em]">{cs.num}</span>
                  <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary">{cs.company}</span>
                </div>
                <h3 className="text-[clamp(28px,3vw,44px)] font-normal leading-[1.1] tracking-[-0.025em] mb-5" style={{ fontFamily: "var(--font-display)" }}>
                  {cs.title}<br /><em className="italic text-muted-foreground">{cs.titleEm}</em>
                </h3>
                <p className="text-sm leading-[1.75] text-muted-foreground font-light max-w-[380px] mb-8">{cs.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground px-3.5 py-1.5 border border-border rounded-full group-hover:text-primary group-hover:border-primary/25 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground border-b border-border pb-0.5 w-fit group-hover:text-primary group-hover:gap-3 group-hover:border-primary transition-all">
                Read case study <ArrowRight className="h-3 w-3" />
              </span>
            </div>

            {/* Visual */}
            <div className="p-6 md:p-10 flex flex-col justify-between">
              <div className={`flex-1 rounded-xl overflow-hidden relative flex items-center justify-center mb-6 ${cs.thumbGradient}`}>
                <div className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }} />
                <span
                  className={`relative z-[2] text-[clamp(40px,5.5vw,80px)] font-bold italic tracking-[-0.04em] select-none group-hover:scale-105 transition-transform ${
                    cs.thumbWordLight ? "text-white/[0.06]" : "text-foreground/[0.06]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cs.thumbWord}
                </span>
                <div className="absolute top-4 right-4 z-[3] bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3.5 py-1.5 flex items-baseline gap-1.5">
                  <span className="text-lg font-bold tracking-[-0.02em] text-primary" style={{ fontFamily: "var(--font-display)" }}>{cs.badgeNum}</span>
                  {cs.badgeLabel && <span className="font-mono text-[9px] tracking-[0.06em] uppercase text-muted-foreground">{cs.badgeLabel}</span>}
                </div>
              </div>
              <div className="flex items-baseline gap-3 pt-5 border-t border-border">
                <span className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.04em] leading-none" style={{ fontFamily: "var(--font-display)" }}>{cs.impactNum}</span>
                <span className="text-[13px] text-muted-foreground font-light italic">{cs.impactLabel}</span>
              </div>
            </div>

            {cs === caseStudies[caseStudies.length - 1] && <div className="absolute bottom-0 inset-x-0 h-px bg-border" />}
          </motion.div>
        ))}
      </section>

      {/* ABOUT — dark section */}
      <section id="about" className="bg-foreground text-background relative overflow-hidden py-20 md:py-28 px-6 md:px-14">
        {/* Watermark */}
        <span
          className="absolute -right-[5%] -bottom-[10%] text-[50vw] font-bold italic leading-[0.8] tracking-[-0.06em] text-background/[0.018] select-none pointer-events-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          PC
        </span>

        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-background/30 mb-16">
            <span className="w-5 h-px bg-background/30" />
            About me
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: headline + bio */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.025em] text-background mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Making sense of complexity,<br /><em className="italic text-background/35">one system at a time.</em>
              </h2>
              <p className="text-[15px] leading-[1.85] text-background/55 font-light mb-8">
                For 12 years, I've been designing products that millions of people use without thinking about. That's the goal — design so clear it disappears. I've moved from execution to ownership to leadership across startups and global platforms, building systems that make design work faster, smarter, and more human.
              </p>
              <div>
                <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-background/25 mb-4">Specialties</p>
                <div className="flex flex-wrap gap-2">
                  {["Design Systems", "Product Strategy", "Usability Frameworks", "Competitive Analysis", "AI-assisted Design"].map((s) => (
                    <span key={s} className="text-xs text-background/50 px-4 py-2 border border-background/10 rounded-full font-light hover:text-primary hover:border-primary/40 transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: beliefs + work card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="mb-10">
                {beliefs.map((b, i) => (
                  <div key={b.num} className={`grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-background/[0.07] ${i === beliefs.length - 1 ? "border-b border-background/[0.07]" : ""}`}>
                    <span className="font-mono text-[11px] tracking-[0.08em] text-background/25 pt-0.5">{b.num}</span>
                    <div>
                      <p className="text-lg font-normal tracking-[-0.02em] text-background/90 leading-[1.2] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        {b.headline} <em className="italic text-primary/80">{b.headlineEm}</em>
                      </p>
                      <p className="text-[13px] leading-[1.75] text-background/35 font-light">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Work card */}
              <div
                className="relative cursor-pointer group"
                onClick={() => scrollTo("contact")}
              >
                {/* Stacked cards behind */}
                <div className="absolute left-1.5 -right-1.5 h-full rounded-xl border border-background/[0.06] bg-background/[0.03] top-2 z-0 group-hover:translate-y-[3px] group-hover:rotate-[0.4deg] transition-transform" />
                <div className="absolute left-3 -right-3 h-full rounded-xl border border-background/[0.06] bg-background/[0.03] top-3.5 -z-[1] group-hover:translate-y-[5px] group-hover:rotate-[0.8deg] transition-transform" />

                <div className="relative z-[1] bg-background/[0.05] border border-background/10 rounded-xl px-6 py-5 flex items-center justify-between gap-4 group-hover:bg-background/[0.08] group-hover:border-primary/30 transition-all">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-background/25 mb-2">Currently at</p>
                    <p className="text-[22px] font-normal tracking-[-0.02em] text-background leading-[1.1] mb-1" style={{ fontFamily: "var(--font-display)" }}>Proximity Works</p>
                    <p className="text-xs text-background/35 font-light">Lead Product Designer · ESPNCricinfo</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-[11px] text-background/25 whitespace-nowrap">2021–Now</span>
                    <span className="text-lg text-primary/50 group-hover:translate-x-1 group-hover:text-primary transition-all">→</span>
                  </div>
                </div>
                <p className="font-mono text-[11px] tracking-[0.06em] text-background/20 text-center mt-5 group-hover:text-background/40 transition-colors">
                  + 4 more roles · tap to connect
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" className="py-20 md:py-28 px-6 md:px-14 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex justify-between items-end mb-14">
            <div>
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-primary mb-4">
                <span className="w-5 h-px bg-primary" />
                Writing
              </div>
              <h2 className="text-[clamp(32px,4vw,52px)] font-normal leading-[1.08] tracking-[-0.025em]" style={{ fontFamily: "var(--font-display)" }}>
                Design <em className="italic text-muted-foreground">insights</em>
              </h2>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div
                key={i}
                className={`bg-secondary border border-border rounded-xl p-8 flex gap-6 hover:bg-muted hover:-translate-y-1 hover:border-primary/20 transition-all group overflow-hidden ${
                  post.featured ? "md:col-span-2 flex-row items-start" : "flex-col"
                }`}
              >
                {/* Thumb */}
                <div
                  className={`rounded-lg flex items-center justify-center shrink-0 select-none ${post.gradient} ${
                    post.featured ? "w-full md:w-[220px] h-auto md:min-h-[180px] aspect-video md:aspect-auto" : "w-full aspect-video"
                  }`}
                >
                  <span className="text-white/[0.07] text-[clamp(22px,2.5vw,36px)] font-bold italic" style={{ fontFamily: "var(--font-display)" }}>
                    {post.thumbWord}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 gap-3">
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-primary">{post.meta}</span>
                  <p className="text-[clamp(16px,1.8vw,22px)] font-normal leading-[1.25] tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
                    {post.title} <em className="italic text-muted-foreground">{post.titleEm}</em> {post.titleEnd}
                  </p>
                  <p className="text-[13px] leading-[1.7] text-muted-foreground font-light">{post.excerpt}</p>
                  {post.status ? (
                    <span className="font-mono text-[11px] tracking-[0.06em] text-muted-foreground border border-border rounded-full px-3 py-1 w-fit mt-auto">
                      {post.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground border-b border-border pb-0.5 w-fit mt-2 group-hover:text-primary group-hover:gap-3 group-hover:border-primary transition-all">
                      Read article <ArrowRight className="h-3 w-3" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 px-6 md:px-14 bg-secondary border-t border-border relative overflow-hidden">
        {/* Watermark */}
        <span
          className="absolute bottom-[-12%] right-[3%] text-[clamp(120px,20vw,280px)] font-bold italic tracking-[-0.06em] leading-[0.85] select-none pointer-events-none"
          style={{ fontFamily: "var(--font-display)", WebkitTextStroke: "1px hsl(var(--foreground) / 0.05)", color: "transparent" }}
        >
          Prerna
        </span>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center relative z-[2]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-primary mb-4">
              <span className="w-5 h-px bg-primary" />
              Let's work together
            </div>
            <h2 className="text-[clamp(40px,5.5vw,76px)] font-normal leading-none tracking-[-0.03em]" style={{ fontFamily: "var(--font-display)" }}>
              Let's build<br />something<br /><em className="italic text-primary">worth using.</em>
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="flex flex-col items-start gap-5">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">Open to full-time roles</span>
            <a href="mailto:prerna@example.com" className="text-[clamp(18px,2.2vw,28px)] font-normal tracking-[-0.02em] border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              prerna@example.com
            </a>
            <a href="mailto:prerna@example.com" className="inline-flex items-center bg-foreground text-background px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary transition-all hover:-translate-y-0.5">
              Say Hello →
            </a>
            <div className="flex gap-6">
              {["LinkedIn", "Behance", "Email"].map((s) => (
                <a key={s} href={s === "Email" ? "mailto:prerna@example.com" : "#"} className="text-[13px] text-muted-foreground border-b border-transparent pb-0.5 hover:text-primary hover:border-primary transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground px-6 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-xs text-background/20 tracking-[0.04em]">© 2026 Prerna Chhajer</span>
        <div className="flex gap-6">
          {["Work", "About", "Writing", "LinkedIn", "Behance", "Email"].map((s) => (
            <a key={s} href="#" className="text-xs text-background/20 hover:text-primary transition-colors tracking-[0.04em]">
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Index;
