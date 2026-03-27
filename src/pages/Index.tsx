import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, ExternalLink, Users, Zap, BarChart3, Layers, Code2, Target, TrendingUp, Sparkles, Vote, Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "var(--font-display)" }}>PC</span>
          <div className="hidden md:flex gap-6 text-sm text-muted-foreground">
            {["about", "work", "system", "leadership", "pov", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="hover:text-foreground transition-colors capitalize">
                {s === "pov" ? "POV" : s}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-primary font-medium mb-4 tracking-wide text-sm uppercase">Lead Product Designer</p>
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Prerna Chhajer
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
          >
            Designing scalable product systems that drive growth.
          </motion.p>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="text-base text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            I'm a product design leader with 12 years of experience building and scaling consumer and B2B platforms. I specialize in system thinking, experimentation, and high-performance UX. I move fast, ship early, and refine through data. Currently leading product design at ESPNcricinfo.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4} className="flex gap-4">
            <Button onClick={() => scrollTo("work")} size="lg">
              View Case Studies <ArrowDown className="ml-1 h-4 w-4" />
            </Button>
            <Button onClick={() => scrollTo("contact")} variant="outline" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WHAT I DO BEST */}
      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-14 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            What I Do Best
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: "Scalable Design Systems", desc: "Build component libraries and design tokens that improve team velocity across platforms." },
              { icon: TrendingUp, title: "High-Traffic Consumer UX", desc: "Transform content-heavy experiences into intuitive, high-engagement interfaces." },
              { icon: Target, title: "Reduce Cognitive Load", desc: "Simplify data-heavy platforms so users find what they need without friction." },
              { icon: Zap, title: "Engagement & Retention Loops", desc: "Design features that keep users coming back — polls, reactions, personalized content." },
              { icon: Code2, title: "Deep Eng Partnership", desc: "I speak code. I build with engineers, not over them. Shared ownership, shared wins." },
              { icon: Users, title: "Design Process at Scale", desc: "Establish repeatable design workflows in fast-scaling teams from zero." },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors group">
                <item.icon className="h-5 w-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-lg" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY: ESPNCRICINFO */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge variant="outline" className="mb-4 text-xs">Featured Case Study</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              ESPNcricinfo — Homepage Transformation
            </h2>
          </motion.div>

          {/* Problem */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="mt-12 p-6 rounded-lg border-l-4 border-primary bg-card">
            <h3 className="font-semibold mb-2 text-primary" style={{ fontFamily: "var(--font-display)" }}>Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              The homepage was news-heavy and not optimized for personalized engagement or content discovery.
            </p>
          </motion.div>

          {/* Constraints */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="mt-8">
            <h3 className="font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>Constraints</h3>
            <div className="flex flex-wrap gap-2">
              {["High daily traffic", "Multiple stakeholder teams", "Data-heavy ecosystem", "Legacy patterns"].map((c) => (
                <Badge key={c} variant="secondary" className="text-sm font-normal">{c}</Badge>
              ))}
            </div>
          </motion.div>

          {/* Strategy */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
            className="mt-8 p-8 rounded-lg bg-card border border-border">
            <h3 className="font-semibold mb-3 text-primary" style={{ fontFamily: "var(--font-display)" }}>Strategy</h3>
            <p className="text-lg text-foreground italic leading-relaxed">
              Shift from static news feed → dynamic, user-centric content system.
            </p>
          </motion.div>

          {/* Key Work */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="mt-8">
            <h3 className="font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>Key Work</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Personalized content modules",
                "Quick Read summaries",
                "Carousel + related story structure",
                "Engagement features (Like, Compare, Polls)",
                "IPL Auction data experience",
                "Series status surfaced upfront",
                "Flat UI exploration to reduce hierarchy depth",
                "Commentary improvements (font scale, embedded data, media)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-md bg-card border border-border">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Impact */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5} className="mt-12">
            <h3 className="font-semibold mb-6" style={{ fontFamily: "var(--font-display)" }}>Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { metric: "↑ 40%", label: "Engagement Rate" },
                { metric: "↓ 25%", label: "Bounce Rate" },
                { metric: "3x", label: "Content Discovery" },
                { metric: "↑ 60%", label: "Session Duration" },
              ].map((item) => (
                <div key={item.label} className="text-center p-6 rounded-lg bg-card border border-border">
                  <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.metric}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section id="system" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge variant="outline" className="mb-4 text-xs">2021–2025</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              ESPN Cricinfo Design System
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
              Unifying web and mobile platforms under a single scalable design system. I evolved from Senior Product Designer to Design System Lead, managing component audits, token creation, documentation, and developer alignment.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { num: "200+", label: "Figma Files" },
              { num: "40", label: "Core Components" },
              { num: "100+", label: "Variants" },
            ].map((s, i) => (
              <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="text-center p-8 rounded-lg border border-border bg-background">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYTICS & ENGAGEMENT */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-14 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Cricket Analytics & Engagement
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Fantasy Cricket Statistics", desc: "In-depth stats powering fantasy cricket decisions with real-time data integration." },
              { icon: Vote, title: "Match Prediction Polls", desc: "Interactive polls that involve fans in live match action, driving engagement loops." },
              { icon: Star, title: "Player & Team Ratings", desc: "Rating systems enabling fans to evaluate and share opinions, building community." },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-lg border border-border bg-card">
                <item.icon className="h-5 w-5 text-primary mb-4" />
                <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-14 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Leadership
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* 30% stat block */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-10 rounded-lg border border-border bg-background flex flex-col justify-center items-center text-center">
              <p className="text-6xl md:text-7xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>30%</p>
              <p className="text-muted-foreground">Improvement in quality benchmarks</p>
            </motion.div>

            {/* Other leadership points */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="space-y-4">
              {[
                { icon: Users, text: "Mentored designers across skill levels and project scopes" },
                { icon: Sparkles, text: "Established scalable workflows from zero" },
                { icon: Code2, text: "Deep collaboration philosophy with engineers — shared ownership, shared wins" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-background">
                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mantra */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="p-8 rounded-lg border border-primary/20 bg-background text-center">
            <p className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Ship fast <span className="text-primary">→</span> learn fast <span className="text-primary">→</span> refine fast
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESIGN POV */}
      <section id="pov" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-16 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Design Point of View
          </motion.h2>

          <div className="space-y-12">
            {[
              "Good product design reduces thinking.",
              "Speed is part of quality.",
              "Familiarity > novelty when scaling.",
            ].map((statement, i) => (
              <motion.p key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground/90"
                style={{ fontFamily: "var(--font-display)" }}>
                "{statement}"
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Let's Talk
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
              Looking for a design leader who ships fast and thinks in systems? I'd love to connect.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:prerna@example.com"><Mail className="mr-2 h-4 w-4" /> Email Me</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <span>© 2025 Prerna Chhajer</span>
          <span>Designed with intention.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
