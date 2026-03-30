// ─────────────────────────────────────────────
// BLOG — Building a Design System Over the Years
// Uses shared design system: @/lib/tokens + @/components/ds
// ─────────────────────────────────────────────

import { motion } from "framer-motion";
import { NavCaseStudy } from "@/components/ds";
import { animation, layout, surface, type as t } from "@/lib/tokens";

const fade = animation.fade;

const chapters = [
  {
    num: "01",
    label: "Engineering–Design Gap",
    heading: "Our first challenge wasn't visual. It was interpretational.",
    body: [
      "Engineering had their system. Design was building another layer. The gap wasn't effort — it was shared understanding.",
      "We had to align on three things: what system are we building, how will it be consumed, and what is flexible versus fixed. None of those answers were obvious. None of them were in the documentation.",
    ],
    learning: "A design system fails if engineers don't see it as their system too.",
  },
  {
    num: "02",
    label: "Product–Design Value Gap",
    heading: "Design systems take time. Their ROI is long-term.",
    body: [
      "The second challenge was with product. Design systems don't ship features immediately. Explaining why we needed time to build infrastructure — not just UI — was hard.",
      "The conversation that mattered wasn't about components. It was about velocity, consistency, and what it costs not to build shared infrastructure. The design system was a business decision wrapped in a design proposal.",
    ],
    learning: "You must communicate a design system as a business enabler, not a design exercise.",
  },
  {
    num: "03",
    label: "Evolving With Figma",
    heading: "When we started, Figma itself was evolving.",
    body: [
      "We moved from bulky component libraries to variants, properties, and smarter structures. What once required dozens of components became a single scalable one.",
      "Each step forced a rebuild of something we thought was done. Tooling decisions aren't one-time choices — they're commitments you renegotiate as the tool matures around you.",
    ],
    learning: "Your tooling maturity directly shapes your system maturity. If your tools evolve, your system must too.",
  },
  {
    num: "04",
    label: "Token & Mode Limitations",
    heading: "We were stuck between an older plugin and Figma's native capabilities.",
    body: [
      "Our mode system was constrained. We could only support two modes due to plugin limitations. This forced us to rethink how we structured tokens, whether to depend on plugins at all, and how future-proof our system really was.",
      "The fix wasn't technical — it was architectural. Every external dependency becomes a constraint you'll negotiate with later.",
    ],
    learning: "Every external dependency becomes future technical debt.",
  },
  {
    num: "05",
    label: "Icon & Typography Overhaul",
    heading: "The hardest evolution wasn't structural. It was identity.",
    body: [
      "We rebuilt the icon library, optimised visual consistency, updated the font family, and propagated changes across components and files. Changing typography at scale is not cosmetic — it touches hierarchy, spacing, layout, and perception.",
      "Visual identity shifts are organisational shifts. They require planning, not just execution. Every file, every team, every surface needs to be accounted for before you pull the trigger.",
    ],
    learning: "Visual identity shifts are organisational shifts. They require planning, not just execution.",
  },
];

const beliefs = [
  { accent: "A design system is infrastructure,", rest: " not UI." },
  { accent: "Alignment is harder", rest: " than component creation." },
  { accent: "Tooling decisions", rest: " shape long-term flexibility." },
  { accent: "Identity changes", rest: " are system-level decisions." },
  { accent: "Governance matters", rest: " more than documentation." },
];

const BlogDesignSystem = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavCaseStudy period="2019 — 2024" />

      {/* ── HERO ── */}
      <header className={`${layout.container} mx-auto ${layout.px} pt-28 pb-16 md:pt-36 md:pb-20`}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <p className={`${t.labelSm} text-muted-foreground mb-8`}>Design Systems · 5 Years</p>
          <h1
            className={`${t.h2} max-w-3xl mb-8`}
            style={{ fontFamily: t.displayFont }}
          >
            What building a design system{" "}
            <span className="text-primary italic">over the years</span>{" "}
            really taught me.
          </h1>
          <p className="text-muted-foreground text-base leading-[1.8] max-w-xl">
            A design system is never just about components. It's about alignment, evolution, and
            constant recalibration. These are the five real problems we faced — and what they
            taught me.
          </p>
        </motion.div>
      </header>

      <div className={`${layout.container} mx-auto ${layout.px}`}>
        <hr className="border-t border-border/50" />
      </div>

      {/* ── CHAPTERS ── */}
      <main className={`${layout.container} mx-auto ${layout.px}`}>
        {chapters.map((ch, i) => (
          <motion.section
            key={ch.num}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className={`py-16 md:py-20 ${i < chapters.length - 1 ? "border-b border-border/50" : ""}`}
          >
            <p className={`${t.labelSm} text-muted-foreground mb-6`}>
              {ch.num} — {ch.label}
            </p>
            <h2
              className="text-2xl md:text-3xl font-normal tracking-[-0.025em] mb-6 leading-[1.15]"
              style={{ fontFamily: t.displayFont }}
            >
              {ch.heading}
            </h2>
            <div className="space-y-4 text-[15px] text-foreground/70 leading-[1.85]">
              {ch.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>

            <div className={`mt-10 ${surface.dark} rounded-xl p-8`}>
              <p className={`${t.labelSm} text-background/25 mb-4`}>What I learned</p>
              <p
                className="text-base leading-[1.7] text-background/80"
                style={{ fontFamily: t.displayFont }}
              >
                {ch.learning}
              </p>
            </div>
          </motion.section>
        ))}
      </main>

      {/* ── LETTING GO ── */}
      <section className={`${surface.darkCard} py-20 md:py-28 mt-4`}>
        <div className={`${layout.container} mx-auto ${layout.px}`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className={`${t.labelSm} text-background/20 mb-10`}>And then — letting go</p>
            <p
              className="text-2xl md:text-3xl font-normal tracking-[-0.025em] leading-[1.2] text-background/80 mb-8"
              style={{ fontFamily: t.displayFont }}
            >
              Eventually, the system stabilises. You document it. You hand it over. You move from{" "}
              <span className="text-primary italic">builder to custodian</span>.
            </p>
            <p className="text-[15px] text-background/40 leading-[1.85] max-w-xl">
              That transition is quiet but important. A design system is never finished. It just
              enters a new phase of ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT I BELIEVE NOW ── */}
      <section className={`${surface.darkCardAlt} py-20 md:py-28`}>
        <div className={`${layout.container} mx-auto ${layout.px}`}>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className={`${t.labelSm} text-background/20 mb-10`}
          >
            What I believe now
          </motion.p>
          <div className="space-y-6">
            {beliefs.map((line, i) => (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={i}
                className="text-xl md:text-2xl font-normal leading-[1.2] tracking-[-0.02em] text-background/25"
                style={{ fontFamily: t.displayFont }}
              >
                <span className="text-background/80">{line.accent}</span>
                {line.rest}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="py-28 md:py-40 text-center">
        <div className={`${layout.container} mx-auto ${layout.px}`}>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className={`${t.labelSm} text-muted-foreground mb-10`}
          >
            Design Systems · 2019 — 2024
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            custom={1}
            className="text-3xl md:text-5xl font-normal tracking-[-0.03em] leading-[1.1]"
            style={{ fontFamily: t.displayFont }}
          >
            I stopped thinking like a UI designer —{" "}
            <span className="text-primary italic">and started thinking</span>{" "}
            like a systems designer.
          </motion.h2>
        </div>
      </section>
    </div>
  );
};

export default BlogDesignSystem;
