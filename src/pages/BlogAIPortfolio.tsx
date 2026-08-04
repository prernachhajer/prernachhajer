import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NavCaseStudy } from "@/components/ds";
import { animation, layout, surface, type as t } from "@/lib/tokens";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fade = animation.fade;

/* ── Data ── */

const stats = [
  { num: "0", label: "Portfolio before this" },
  { num: "2", label: "Weeks to ship" },
  { num: "100%", label: "Built with AI" },
];

const tools = [
  { name: "Claude", role: "Writing, layout, HTML, motion, visuals, PDF resume" },
  { name: "ChatGPT", role: "Research & writing support" },
  { name: "Lovable", role: "Site building & shipping" },
];

const shifts = [
  "I now explore multiple solution directions in parallel instead of committing early",
  "I treat content, layout, and interaction as systems that can evolve together",
  "I prototype ideas much earlier — often as working outputs, not static screens",
  "I focus more on decision-making and less on execution overhead",
];

const sections = [
  {
    heading: "The messy, honest beginning",
    paragraphs: [
      "Over the past year or so, I'd been quietly experimenting. A motion concept here. An image there. Some writing on ChatGPT. I tried free credits on tools I didn't fully understand. I tested, abandoned, came back. It wasn't a strategy — it was curiosity with no deadline.",
      "When I finally decided to build the portfolio, I didn't know if it would work. I didn't know if the credits would run out before I finished. I didn't know if the result would look generic or feel like mine. I just kept going, deciding on the go.",
    ],
    pullquote: "I just wanted to try, so I kept on trying — without thinking of any outcome.",
    closing: "That mindset, as uncomfortable as it felt, turned out to be exactly the right one.",
  },
  {
    heading: "The tools that made it happen",
    paragraphs: [
      "Claude was my thinking and building partner throughout. Case studies went through round after round of refinement. Layouts were shaped through conversation. HTML pages were generated, tweaked, and iterated until they felt right. The motion, the visuals, the PDF resume — all of it happened in collaboration with Claude.",
      "ChatGPT helped with research and writing support along the way — useful for exploring ideas quickly and comparing different angles before refining in Claude.",
      "For shipping, I used Lovable. I'd tried other site-builder tools but Lovable gave better results and — crucially — let me go from design to a live link without touching GitHub or a hosting dashboard. That part mattered. I didn't want the technical setup to become another reason to slow down.",
    ],
    showTools: true,
  },
  {
    heading: "The moment it clicked",
    paragraphs: [
      "Claude was my first real breakthrough. I already had the layout in my head — and Claude could actually bring it to life. I'd describe what I wanted, it would generate the HTML, and I could see the structure forming. It wasn't perfect on the first try. Nothing ever is. But it was close enough to get excited about.",
      "Then came the question of how to ship it. Lovable felt different from the other tools I'd tried — the output was better, more considered. And it let me go from design to a live link without any of the setup I'd been dreading.",
    ],
    pullquote: "That was my first win. And I thought — maybe this can actually happen.",
  },
  {
    heading: "What I was actually doing the whole time",
    paragraphs: [
      "People hear \"built with AI\" and sometimes assume the work just... appeared. It didn't. Every step involved decisions. Which tool for which task. When to accept the output and when to push back. How to refine a case study that sounded almost right but not quite. How to make visuals that felt like me, not like a template.",
      "I wasn't just prompting. I was directing, editing, comparing, and curating. My design instincts shaped every output. The AI was fast — but I was still the one deciding what good looked like.",
    ],
  },
  {
    heading: "What this changed about how I design",
    paragraphs: [
      "This wasn't just about building a portfolio faster. It fundamentally changed how I think about product design.",
    ],
    showShifts: true,
    closing: "AI didn't replace my design process. It compressed it — and expanded what I can explore within the same time.",
  },
  {
    heading: "What two weeks with AI opened up",
    paragraphs: [
      "I didn't start this with a plan. I started with some notes, a vague idea, and a curiosity I couldn't quite explain. I didn't know what I'd end up with — or if I'd end up with anything at all.",
      "But somewhere in those two weeks, something shifted. Not just because I had a portfolio at the end of it. But because I saw, firsthand, what becomes possible when you stop waiting for the right conditions and just start.",
      "The AI didn't do the work for me. It worked with me. And that collaboration — messy, iterative, sometimes surprising — opened up a way of creating I hadn't experienced before.",
    ],
    pullquote: "I'm not sure where it goes from here. But I know I want to keep going.",
    closing: "And honestly, that feeling — of something just opening up — might be the most valuable thing I built in those two weeks.",
  },
];

const BlogAIPortfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavCaseStudy period="2025" />

      {/* ── HERO ── */}
      <header className={`${layout.containerBlog} mx-auto ${layout.px} pt-28 pb-16 md:pt-36 md:pb-20`}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <p className={`${t.labelSm} text-muted-foreground mb-8`}>Portfolio · AI · Design Process</p>
          <h1
            className={`${t.h2} max-w-3xl mb-4`}
            style={{ fontFamily: t.displayFont }}
          >
            From zero to shipped: how I built my entire portfolio{" "}
            <span className="text-primary italic">with AI</span>
          </h1>
          <p className="text-muted-foreground text-base leading-[1.8] max-w-xl mt-6">
            I had no portfolio, no Framer skills, and no idea where to start. Two weeks later, it was
            live. Here's the honest story.
          </p>
        </motion.div>
      </header>

      {/* ── STATS ── */}
      <div className={`${layout.containerBlog} mx-auto ${layout.px}`}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="flex gap-3 mb-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex-1 bg-card rounded-2xl p-5 text-center border border-border/50">
              <p className="text-2xl md:text-3xl font-normal" style={{ fontFamily: t.displayFont }}>
                {s.num}
              </p>
              <p className="text-[0.6875rem] text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <hr className="border-t border-border/50" />
      </div>

      {/* ── BODY SECTIONS ── */}
      <main className={`${layout.containerBlog} mx-auto ${layout.px}`}>
        {sections.map((sec, i) => (
          <motion.section
            key={sec.heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`py-14 md:py-18 ${i < sections.length - 1 ? "border-b border-border/50" : ""}`}
          >
            <h2
              className="text-xl md:text-2xl font-normal tracking-normal mb-6 leading-[1.2]"
              style={{ fontFamily: t.displayFont }}
            >
              {sec.heading}
            </h2>

            <div className="space-y-5 text-[0.9375rem] text-foreground/85 leading-[1.85]">
              {sec.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>

            {/* Tool grid */}
            {sec.showTools && (
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">
                  Here's the full stack — every tool had a specific job:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-card border border-border/50 rounded-xl p-4"
                    >
                      <p className="text-[0.8125rem] font-medium text-foreground mb-1">{tool.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tool.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Shift list */}
            {sec.showShifts && (
              <ul className="mt-5 space-y-0 divide-y divide-border/50">
                {shifts.map((item, j) => (
                  <li key={j} className="text-[0.9375rem] text-foreground/85 leading-[1.85] py-3 pl-5 relative">
                    <span className="absolute left-0 text-muted-foreground">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Pull quote */}
            {sec.pullquote && (
              <div className={`mt-7 ${surface.accentLine} bg-card rounded-r-xl p-5`}>
                <p
                  className="text-[1.0625rem] italic text-foreground/80 leading-[1.7]"
                  style={{ fontFamily: t.displayFont }}
                >
                  "{sec.pullquote}"
                </p>
              </div>
            )}

            {/* Closing paragraph after quote */}
            {sec.closing && (
              <p className="mt-5 text-[0.9375rem] text-foreground/85 leading-[1.85]">{sec.closing}</p>
            )}
          </motion.section>
        ))}
      </main>

      {/* ── BYLINE / CLOSING ── */}
      <div className={`${layout.containerBlog} mx-auto ${layout.px}`}>
        <hr className="border-t border-border/50" />
      </div>
      <section className="py-20 md:py-28 text-center">
        <div className={`${layout.containerBlog} mx-auto ${layout.px}`}>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            Written by a designer exploring what it means to build with AI — not just use it.
          </motion.p>
        </div>
      </section>

      {/* ── READ MORE ── */}
      <section className="border-t border-border/50">
        <div className={`${layout.containerBlog} mx-auto ${layout.px} py-16 md:py-20`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className={`${t.labelSm} text-muted-foreground mb-6`}>Read More</p>
            <div
              onClick={() => navigate("/blog/design-system")}
              className="group cursor-pointer p-6 rounded-2xl border border-border/50 hover:bg-secondary/60 transition-all"
            >
              <p className={`${t.labelSm} text-muted-foreground mb-2`}>2019 — 2024 · Design Systems</p>
              <h3
                className="text-xl md:text-2xl font-normal tracking-normal leading-[1.2] mb-3"
                style={{ fontFamily: t.displayFont }}
              >
                What building a design system over the years really taught me
              </h3>
              <span className="inline-flex items-center gap-2 text-[0.8125rem] text-muted-foreground group-hover:text-foreground transition-colors">
                Read article <ArrowRight className="h-3 w-3" />
              </span>
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 text-muted-foreground border border-border px-7 py-3 rounded-full text-[0.8125rem] hover:border-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
              >
                <ArrowLeft className="h-3 w-3" /> Back to Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogAIPortfolio;
