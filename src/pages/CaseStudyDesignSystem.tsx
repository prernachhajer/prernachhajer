import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const CaseStudyDesignSystem = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 h-[60px] flex items-center justify-between px-6 md:px-14 bg-background/90 backdrop-blur-xl border-b border-border">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio
        </button>
        <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground">2021 — 2025</span>
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
          Building the backbone of a <span className="text-primary italic">global cricket platform</span>
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fade} custom={2}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          — and what five years of doing it actually felt like.
        </motion.p>
        <motion.div initial="hidden" animate="visible" variants={fade} custom={3}
          className="mt-14 flex gap-8 flex-wrap justify-center text-xs tracking-widest uppercase text-muted-foreground">
          {["Design System", "Senior Designer → Lead", "Web, iOS, Android", "2021 – 2025"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fade} custom={4}
          className="mt-20 flex flex-col items-center gap-3 text-xs tracking-widest uppercase text-muted-foreground">
          <span>Scroll</span>
          <span className="w-px h-10 bg-muted-foreground/50 animate-bounce" />
        </motion.div>
      </section>

      {/* WHERE IT STARTED */}
      <Section label="Where It Started">
        <Prose>
          <h2>From scattered patterns to shared infrastructure</h2>
          <p>In 2021, ESPN Cricinfo was scaling in every direction at once. New platforms, new features, growing design and engineering teams. We had a Figma component library — but it was inconsistent, undocumented, and not built for what was coming.</p>
          <p>Dark mode was on the roadmap. A dedicated native mobile app was being planned. Engineering was restructuring around Tailwind. And design was duplicating work across every platform with no shared foundation underneath it.</p>
          <p>We knew incremental fixes wouldn't hold. We needed to build infrastructure.</p>
        </Prose>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-0.5">
          <ContextCard label="The situation" className="md:rounded-l-xl">
            Inconsistent component library, no documentation, duplicated work across platforms. Figma files were growing but the system wasn't scaling with them.
          </ContextCard>
          <ContextCard label="The commitment" className="md:rounded-r-xl">
            Five years of building, simplifying, documenting, maintaining, and eventually putting the whole system through a test it had to <em className="text-primary not-italic font-medium">pass</em>.
          </ContextCard>
        </div>
      </Section>

      {/* PHASE 1 */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>Phase 1 — Convince, Align, Launch</SectionLabel>
          <div className="max-w-3xl mx-auto">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-background/90" style={{ fontFamily: "var(--font-display)" }}>
              Before we designed anything, we had to have hard conversations.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0.5 mt-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="bg-foreground/90 p-10 md:rounded-tl-xl">
              <p className="text-xs tracking-widest uppercase text-background/30 mb-4">Product pushback</p>
              <p className="text-sm text-background/60 leading-relaxed">
                Product didn't immediately see the value. The recurring question was straightforward and fair: why are we spending time on a design system instead of shipping features? Making the case required demonstrating value in small, concrete increments — not promises about long-term payoff.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="bg-foreground/90 p-10 md:rounded-tr-xl">
              <p className="text-xs tracking-widest uppercase text-background/30 mb-4">Engineering alignment</p>
              <p className="text-sm text-background/60 leading-relaxed">
                When engineers pushed back on naming conventions, spacing logic, line heights — I found it frustrating at first. They weren't arguing about details. They were protecting the system's integrity. Naming conventions that don't scale break everything downstream. Those early arguments made the foundation stronger.
              </p>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
            className="mt-0.5 bg-foreground/90 md:rounded-b-xl p-10">
            <p className="text-xs tracking-widest uppercase text-background/30 mb-4">The outcome</p>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              Within a few months we had shipped the initial system — core tokens for color, typography, and spacing mapped directly to Tailwind variables, and the first set of components ready for product teams to use.
            </p>
            <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-md">
              <p className="text-sm italic text-background/70 leading-relaxed">
                "The hardest part of building a design system isn't the design. It's earning the trust of the people who have to live inside it every day."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHASE 2 */}
      <Section label="Phase 2 — Rebuild Smarter">
        <Prose>
          <h2>Component properties changed what a single component could do</h2>
          <p>A year after launch, Figma released component properties. What previously required dozens of separate components to handle different states, sizes, and configurations could now live inside one well-structured component with properties exposed at the surface.</p>
          <p>We made the decision to rebuild rather than patch.</p>
          <p>We went through the entire library with fresh eyes. Simplified structures. Reduced variants that existed only because we didn't have a better option at the time. Rebuilt complex components from scratch using the new capabilities.</p>
        </Prose>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-0.5">
          {[
            { title: "Leaner system", desc: "Fewer components doing more work. Complex multi-component structures collapsed into single well-configured components." },
            { title: "Faster Figma", desc: "Performance improved significantly. Less file bloat, faster loading, smoother handoff workflows." },
            { title: "Less cognitive load", desc: "Designers spent less time choosing where to start. The library was easier to maintain and easier to hand off." },
          ].map((card, i) => {
            const corners = ["md:rounded-l-xl", "", "md:rounded-r-xl"];
            return (
              <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-card p-10 ${corners[i]}`}>
                <h4 className="font-semibold mb-3">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="max-w-5xl mx-auto mt-12 p-6 bg-card rounded-xl border-l-2 border-primary">
          <p className="text-sm italic text-foreground leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
            "Rebuilding good work to make it better requires a specific discipline. Most teams patch and move on. Going back in means accepting that the first version was right for its time — and this version needs to be right for now."
          </p>
        </motion.div>
      </Section>

      {/* PHASE 3 */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>Phase 3 — Make It Self-Sufficient</SectionLabel>
          <div className="max-w-3xl mx-auto">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-background/90" style={{ fontFamily: "var(--font-display)" }}>
              A system that requires a designer in the room to explain it hasn't fully worked yet.
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="text-background/50 leading-relaxed mb-8">
              After the rebuild, we invested seriously in documentation. Everything went into ZeroHeight — component usage, token reference, interaction states, guidelines for product and engineering.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-0.5 mt-12">
            {[
              { label: "Before", title: "Skepticism", desc: "\"Why are we doing this?\" — the question in planning sessions. Designers needed to be present to explain every component choice. Teams were dependent on institutional knowledge." },
              { label: "After", title: "Dependency", desc: "\"Is there a component for this?\" — the new question. Product managers checking the library before writing briefs. Developers building screens independently. New team members contributing within days." },
            ].map((card, i) => (
              <motion.div key={card.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-foreground/90 p-10 ${i === 0 ? "md:rounded-l-xl" : "md:rounded-r-xl"}`}>
                <p className="text-xs tracking-widest uppercase text-background/30 mb-4">{card.label}</p>
                <p className="text-2xl font-bold text-background/80 mb-3" style={{ fontFamily: "var(--font-display)" }}>{card.title}</p>
                <p className="text-sm text-background/50 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
            className="mt-0.5 bg-foreground/90 md:rounded-b-xl p-9 flex items-center gap-5">
            <div className="w-1 h-14 bg-primary/70 rounded-full shrink-0" />
            <p className="text-lg italic text-background/50 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
              "Documentation isn't the end of the process. It's what turns a component library into a shared language."
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHASE 4 */}
      <Section label="Phase 4 — Maintain, Reduce, Refine">
        <Prose>
          <h2>The quieter, more persistent discipline</h2>
          <p>Once a system is in active use, the work doesn't stop. It changes character. Features shipped. Teams grew. Edge cases appeared. A component that worked perfectly for three use cases didn't quite work for a fourth. A variant that made sense at launch was never actually used.</p>
        </Prose>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-0.5">
          {[
            { title: "Removed unused variants", desc: "Variants that weren't earning their place were cut. The library stayed lean instead of accumulating debt." },
            { title: "Simplified drifted components", desc: "Components that had grown complex over time — like the table component — were brought back to clarity." },
            { title: "Adjusted spacing & sizing", desc: "Where the system had more options than it needed, we reduced. Fewer choices, more consistency." },
            { title: "Treated it as a product", desc: "A system that isn't maintained becomes a system people work around. We gave it the same critical eye after launch as before." },
          ].map((card, i) => {
            const corners = ["md:rounded-tl-xl", "md:rounded-tr-xl", "md:rounded-bl-xl", "md:rounded-br-xl"];
            return (
              <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-card p-10 ${corners[i]}`}>
                <h4 className="font-semibold mb-3">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="max-w-5xl mx-auto mt-12 p-6 bg-card rounded-xl border-l-2 border-primary">
          <p className="text-sm italic text-foreground leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
            "Small decisions made consistently over time matter more than big decisions made occasionally."
          </p>
        </motion.div>
      </Section>

      {/* PHASE 5 — THE OVERHAUL */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>Phase 5 — The Overhaul</SectionLabel>
          <div className="max-w-3xl mx-auto">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-background/90" style={{ fontFamily: "var(--font-display)" }}>
              Three years later, we changed the visual identity of the entire system.
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="text-background/50 leading-relaxed mb-4">
              It started with a real user problem. Reading is central to what Cricinfo does — scores, commentary, articles, live match updates. The existing font wasn't serving that experience well enough. We also had a technical constraint: we needed to reduce overall app size, which meant we couldn't use a downloadable font family.
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
              className="text-background/50 leading-relaxed">
              We ran the process properly. Competitive analysis across major news and sports platforms. Five to six font families evaluated. Six to eight full explorations created across the key pages — homepage, match page live tab, match page score tab, match page commentary, and article.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-0.5 mt-12">
            {[
              { label: "Typography", title: "Complete font overhaul", desc: "Landed on a system font that solved the reading experience, reduced app size, and didn't require a download. Updated every token it touched — line heights, character spacing, font sizes, typographic hierarchy throughout." },
              { label: "Iconography", title: "Full icon library overhaul", desc: "Unified stroke weights, standardized grid alignment, every instance replaced across every component, every interactive state checked." },
            ].map((card, i) => (
              <motion.div key={card.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-foreground/90 p-10 ${i === 0 ? "md:rounded-tl-xl" : "md:rounded-tr-xl"}`}>
                <p className="text-xs tracking-widest uppercase text-background/30 mb-4">{card.label}</p>
                <h4 className="font-semibold text-background/80 mb-3">{card.title}</h4>
                <p className="text-sm text-background/50 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
            className="mt-0.5 bg-foreground/90 md:rounded-b-xl p-9 flex items-center gap-5">
            <div className="w-1 h-14 bg-primary/70 rounded-full shrink-0" />
            <p className="text-lg italic text-background/50 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
              "The real test of a design system isn't launch day. It's whether it can absorb a complete identity change three years later and keep working. Ours did."
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>What It Became</SectionLabel>
          <div className="grid md:grid-cols-2 gap-0.5">
            {[
              { number: "50%", title: "Faster design cycles", desc: "After system adoption, design velocity increased dramatically. Teams weren't rebuilding — they were assembling." },
              { title: "Independent teams", desc: "Product and engineering teams building independently with minimal design intervention. The system did the explaining." },
              { title: "Days, not weeks", desc: "New team members contributing within days of onboarding. The documentation and component structure made ramp-up almost immediate." },
              { title: "Foundation for everything", desc: "Dark mode, modular widgets, and mobile app launch all built on the system foundation. A complete visual identity overhaul executed without disrupting shipping velocity." },
            ].map((card, i) => {
              const corners = ["md:rounded-tl-xl", "md:rounded-tr-xl", "md:rounded-bl-xl", "md:rounded-br-xl"];
              return (
                <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                  className={`bg-card p-10 ${corners[i]}`}>
                  {card.number && <p className="text-4xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>{card.number}</p>}
                  <h4 className="font-semibold mb-3">{card.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOOKING BACK */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>Looking Back</SectionLabel>
          <div className="max-w-3xl mx-auto mb-12">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-background/90" style={{ fontFamily: "var(--font-display)" }}>
              I joined this project as a Senior Product Designer. I left it as someone who thinks differently about what design actually is.
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="text-background/50 leading-relaxed">
              The components are the visible part. What's underneath — the alignment conversations, the decisions about what not to build, the willingness to rebuild what was already working, the engineers who pushed back and were right — that's what made it last.
            </motion.p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
            className="bg-foreground/90 rounded-xl p-12 flex items-center gap-5">
            <div className="w-1 h-14 bg-primary/70 rounded-full shrink-0" />
            <p className="text-xl italic text-background/60 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
              "A design system is infrastructure. And infrastructure is only proven under pressure."
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Timeline</SectionLabel>
          <div className="grid grid-cols-5 gap-0.5">
            {[
              { year: "2021", label: "Foundation" },
              { year: "2022", label: "Rebuild" },
              { year: "2023", label: "Documentation & Adoption" },
              { year: "2024", label: "Refinement" },
              { year: "2025", label: "Overhaul & Maturity" },
            ].map((item, i) => (
              <motion.div key={item.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-card p-6 text-center ${i === 0 ? "rounded-l-xl" : ""} ${i === 4 ? "rounded-r-xl" : ""}`}>
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.year}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 px-6 text-center">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="text-2xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto mb-12 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          The goal was never to ship a component library. It was to build <span className="text-primary italic">shared language</span> that made everyone faster.
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
          className="text-xs tracking-widest uppercase text-muted-foreground">
          ESPN Cricinfo · Design System · 2021 — 2025
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

const ContextCard = ({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
    className={`bg-card p-10 ${className}`}>
    <p className="text-xs tracking-widest uppercase text-muted-foreground font-medium mb-4">{label}</p>
    <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
  </motion.div>
);

export default CaseStudyDesignSystem;
