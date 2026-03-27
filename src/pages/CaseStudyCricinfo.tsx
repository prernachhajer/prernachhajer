import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const CaseStudyCricinfo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </button>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">2021 — 2026</span>
        </div>
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
          In five years, we got <span className="text-primary italic">two chances</span> to work on this page.
        </motion.h1>
        <motion.div initial="hidden" animate="visible" variants={fade} custom={2}
          className="mt-14 flex gap-8 flex-wrap justify-center text-xs tracking-widest uppercase text-muted-foreground">
          {["Cricinfo", "Homepage Redesign", "Senior Designer → Lead", "10M+ Users"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fade} custom={3}
          className="mt-20 flex flex-col items-center gap-3 text-xs tracking-widest uppercase text-muted-foreground">
          <span>Scroll</span>
          <span className="w-px h-10 bg-muted-foreground/50 animate-bounce" />
        </motion.div>
      </section>

      {/* CONTEXT */}
      <Section label="Context">
        <Prose>
          <h2>From a growing product to a structured experience</h2>
          <p>Cricinfo serves 10M+ users across web and app. The homepage is the front door for most of them. By 2021, the platform was expanding rapidly — more matches, more formats, more real-time data, a growing volume of articles and videos, and a new design system rolling out across the product. But the homepage hadn't kept up.</p>
          <p>It was still a chronological feed. Articles dominated, videos were underrepresented, and content had no structure or grouping. For power users it worked. For casual users it didn't invite exploration.</p>
        </Prose>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-0.5">
          <ContextCard label="The problem" className="md:rounded-l-xl">
            The homepage functioned as a match-time utility — not a daily destination. Users arrived for matches and left. No habit. No reason to return.
          </ContextCard>
          <ContextCard label="The goal" className="md:rounded-r-xl">
            Make the homepage more structured, more welcoming, and more engaging — so users don't just land, but <em className="text-primary not-italic font-medium">stay and explore</em>.
          </ContextCard>
        </div>
      </Section>

      {/* AUDIT */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>The honest audit</SectionLabel>
          <div className="grid md:grid-cols-3 gap-0.5">
            {[
              {
                year: "2021", title: "Feed-first homepage", sub: "Reliable, but limited",
                items: ["Live score strip worked well", "Hero highlighted key story", "Rest of page = reverse chronological feed"],
                gaps: ["No structure across matches or themes", "Hard to rediscover content", "Over-indexed on articles", "Weak for casual users"],
              },
              {
                year: "2023", title: "Structured homepage", sub: "The biggest leap",
                items: ["Feed → modular system", "Introduced Top Stories, In-Depth, Playlists", "Added dark mode", "Introduced Storyteller (short-form)"],
                gaps: ["Too dense — too many items per section", "Structure without enough curation", "Same experience for all users"],
              },
              {
                year: "2026", title: "Simplified homepage", sub: "Cleaner, faster, more focused",
                items: ["Reduced density", "Removed low-performing sections", "Improved spacing and readability"],
                gaps: ["Structure largely unchanged from 2023", "Personalisation still missing"],
              },
            ].map((card, i) => (
              <motion.div key={card.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className="bg-foreground/90 p-10 first:rounded-l-xl last:rounded-r-xl">
                <p className="text-5xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-display)" }}>{card.year}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-5">{card.title}</p>
                <p className="text-sm font-medium text-background/80 mb-5">{card.sub}</p>
                <ul className="space-y-2 mb-6">
                  {card.items.map((item) => (
                    <li key={item} className="text-sm text-background/50 flex items-start gap-2.5 pb-2 border-b border-background/10">
                      <span className="text-primary text-xs mt-0.5 shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-background/10 my-5" />
                <p className="text-xs tracking-widest uppercase text-background/30 mb-3">Gaps</p>
                {card.gaps.map((gap) => (
                  <p key={gap} className="text-xs text-background/40 py-1">{gap}</p>
                ))}
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="mt-0.5 bg-foreground/90 rounded-b-xl p-9 flex items-center gap-5">
            <div className="w-1 h-14 bg-primary/70 rounded-full shrink-0" />
            <p className="text-lg italic text-background/50 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
              Each version improved the experience — but none shifted it from <span className="text-primary/80 not-italic">utility</span> to <span className="text-primary/80 not-italic">habit</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH */}
      <Section label="Research & Insights">
        <Prose>
          <h2>From assumptions to actual behaviour</h2>
          <p>We ran a multi-method study: analytics (click, scroll, navigation), interviews, surveys, usability testing, and editorial workflow analysis. The goal was to understand what the homepage was actually doing — versus what we assumed.</p>
        </Prose>

        {/* Assumption vs Reality */}
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-0.5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="bg-secondary p-12 rounded-l-xl flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">The assumption</p>
            <p className="text-2xl md:text-3xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Users come for <span className="text-primary italic">content</span>.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
            className="bg-[hsl(152,48%,20%)] p-12 rounded-r-xl flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">The reality</p>
            <p className="text-2xl md:text-3xl font-bold leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              Users come for <span className="text-primary italic">matches</span>. Everything else is secondary.
            </p>
          </motion.div>
        </div>

        {/* Insights Grid */}
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-0.5">
          {[
            { num: "01", title: "Live matches are the true entry point", desc: "Users came to check scores, understand match context, and navigate quickly. If live context wasn't immediate, they dropped off. The homepage isn't a content destination — it's a navigation layer for live sport.", tag: "High impact" },
            { num: "02", title: "Complexity peaked at the worst moment", desc: "During live matches — peak traffic — users faced competing modules, weak hierarchy, and high density. The result was cognitive overload at exactly the moment speed mattered most.", tag: "UX critical" },
            { num: "03", title: "Three user types, one surface", desc: "Casual users wanted quick updates. Content consumers wanted stories & analysis. Power users wanted stats & data. Speed vs depth. Simplicity vs richness. This made personalisation critical — but hard to prioritise.", tag: "Strategic" },
            { num: "04", title: "Scalability was a system problem", desc: "Non-modular architecture made every new tournament or content type a high-effort rebuild. The problem wasn't content — it was system design. Slower design and development were the symptom.", tag: "Systems" },
          ].map((insight, i) => {
            const corners = ["md:rounded-tl-xl", "md:rounded-tr-xl", "md:rounded-bl-xl", "md:rounded-br-xl"];
            return (
              <motion.div key={insight.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className={`bg-card p-10 ${corners[i] || ""}`}>
                <p className="text-lg text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>{insight.num}</p>
                <h4 className="font-semibold text-base mb-3">{insight.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.desc}</p>
                <Badge variant="secondary" className="mt-4 text-xs bg-primary/10 text-primary border-0">{insight.tag}</Badge>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* MY ROLE */}
      <Section label="My Role">
        <Prose>
          <h2>From the idea to the lead</h2>
          <p>The feed → structured system shift was my strategic idea. Everything built from there. In 2021 I joined as a senior designer. The 2023 redesign — the biggest change in the homepage's history — was a direction I originated and developed equally with my design lead. Research, interviews, UI, final designs. All of it together. The strategic call was mine.</p>
          <p>After it shipped, I became lead designer on the homepage. Post-Jio acquisition, I now work alongside Jio's design lead on what comes next.</p>
          <h3>The pushback that almost didn't happen</h3>
          <p>Stakeholders, product, editorial — none of them felt the homepage needed changing. Traffic was fine. Content was publishing. Nothing looked broken. The case I had to make wasn't "here's a better design." It was <em className="text-primary not-italic font-medium">"we're already hitting a ceiling you can't see yet."</em> Research made that argument. It landed. The redesign happened. That's the part I'm most proud of — not the layout, but getting the problem recognised in the first place.</p>
        </Prose>

        <div className="max-w-3xl mx-auto mt-12">
          {[
            { num: "01", title: "Shifted feed → structured system", desc: "The core strategic call. The homepage was a chronological feed with no hierarchy — content just accumulated. I defined a system with clear zones, modular components, and shared layout logic that could scale across formats, tournaments, and teams. The impact wasn't just visual. Faster builds, less design debt, consistent iterations across three years. The system did the work so the team didn't have to rebuild every time something changed." },
            { num: "02", title: "Held the line on what already worked", desc: "The live score strip (HSB) was the highest-utility surface on the page. The instinct in a redesign is to touch everything. We didn't touch this. We retained its position, improved clarity incrementally, and protected it from scope creep. That restraint paid off — it remained the strongest engagement anchor across all three versions. Knowing what not to redesign is as important as knowing what to change." },
            { num: "03", title: "Pushed for reduction — repeatedly", desc: "Every version needed less than it had. I pushed for removing low-value sections, reducing duplication, and creating breathing room. The 2026 version was the clearest win on this front. The honest constraint: content growth consistently outpaced removal. Editorial pressure, new tournaments, new formats — the homepage always had more competing for space than we could responsibly show. That tension never fully resolved." },
          ].map((item, i) => (
            <motion.div key={item.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
              className="py-10 border-b border-border grid grid-cols-[48px_1fr] gap-8 first:border-t">
              <p className="text-2xl text-primary" style={{ fontFamily: "var(--font-display)" }}>{item.num}</p>
              <div>
                <h3 className="font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TRADE-OFFS */}
      <Section label="Trade-offs & Constraints">
        <Prose>
          <h2>The decisions that didn't have clean answers</h2>
        </Prose>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-0.5">
          {[
            {
              title: "Content volume vs clarity",
              paras: [
                "This was the hardest tension across all three redesigns — and it came from a real organisational conflict, not just a design problem. Editorial wanted more content visible, more placement control, more surface area. That's a legitimate need — they're responsible for the work getting seen.",
                "Design was pushing the other way: less density, clearer hierarchy, a system that scaled without manual intervention every time a tournament launched. Both were right. Neither fully won.",
                "The 2023 redesign landed closer to editorial's side — structured, but dense. The 2026 version corrected toward clarity. But the underlying negotiation hasn't resolved.",
              ],
              lesson: "Content strategy and design system decisions can't be made in isolation. When they are, you get a five-year negotiation instead of a shared framework.",
            },
            {
              title: "Visibility vs cleanliness",
              paras: [
                "The instinct is always to show more above the fold. More matches, more stories, more context. Users might miss something if it's one scroll away.",
                "But during live matches — peak traffic, highest stakes — density became the problem. Users needed speed. The homepage was giving them complexity.",
                "We prioritised first-fold visibility for years. The 2026 reduction was the first time we genuinely pulled back. Early signals suggest it was the right call, but it took three versions to get there.",
              ],
              lesson: "The right call and the obvious call aren't always the same. Sometimes you need the data from the wrong version to make the case for the right one.",
            },
          ].map((card, i) => (
            <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
              className="bg-card p-10 first:rounded-l-xl last:rounded-r-xl">
              <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3>
              {card.paras.map((p, j) => (
                <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
              <div className="mt-6 p-4 bg-primary/5 border-l-2 border-primary rounded-r-md">
                <p className="text-sm italic text-foreground leading-relaxed">{card.lesson}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* OUTCOMES */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>Outcomes</SectionLabel>
          <div className="max-w-3xl mx-auto">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-background/90" style={{ fontFamily: "var(--font-display)" }}>
              Did the homepage move from utility to destination?
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
              className="text-background/50 leading-relaxed">
              The North Star metric was simple: time spent on the homepage. If the redesign worked, users wouldn't just land and bounce to a match. They'd stay, explore, and come back. The trends moved in the right direction.
            </motion.p>
          </div>

          {/* Hero Stat */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2}
            className="mt-12 bg-foreground/90 rounded-xl p-16 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,hsl(var(--primary)/0.12),transparent_70%)] pointer-events-none" />
            <p className="text-7xl md:text-8xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>+22%</p>
            <p className="text-sm text-background/40 max-w-[280px] mt-4">Session duration during live matches — the strongest quantified signal</p>
          </motion.div>

          {/* Outcome Cards */}
          <div className="mt-0.5 grid md:grid-cols-2 gap-0.5">
            {[
              { label: "Casual users", title: "Started engaging between matches", desc: "Previously, casual users landed, checked scores, left. After the structured redesign, repeat visits from this segment increased — the clearest signal that the homepage had become worth returning to." },
              { label: "System efficiency", number: "3×", title: "Component reuse across the system", desc: "Faster builds, less design debt, consistent iterations across three years. This one is concrete and held across all versions." },
              { label: "App downloads", title: "Homepage became a conversion surface", desc: "Users who discovered depth — stats, analysis, historical data — followed through to the app. Interest in data-rich content drove this more than expected." },
              { label: "Findability", title: "Improved meaningfully for all users", desc: "The shift from feed to structured layout gave users a clear mental map of the product. They knew where things lived. Reduced friction, increased confidence — especially for casual users." },
            ].map((card, i) => (
              <motion.div key={card.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className="bg-foreground/90 p-10">
                <p className="text-xs tracking-widest uppercase text-background/25 mb-3">{card.label}</p>
                {card.number && <p className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>{card.number}</p>}
                <h4 className="font-medium text-background/80 mb-2">{card.title}</h4>
                <p className="text-sm text-background/40 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT COMES NEXT */}
      <Section label="What comes next">
        <Prose>
          <h2>From match-driven visits to daily engagement</h2>
          <p>Today, users come around live matches. The next phase is about changing that behaviour. The real unlock isn't more structure — it's snackable content. Users who only visit during matches aren't disengaged. They just don't have a reason to come back between them.</p>
        </Prose>
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-0.5">
          {[
            { icon: "◎", title: "Short-form content", desc: "Quick updates, lightweight reads, bite-sized moments — giving users a reason to return between matches. This is the foundation everything else depends on.", status: "In progress", active: true },
            { icon: "⊞", title: "Hybrid homepage", desc: "Structure for depth, feed for speed. Becomes viable once short-form content has enough volume to sustain a feed. One depends on the other.", status: "Planned", active: false },
            { icon: "◈", title: "Personalisation", desc: "Still on the roadmap. It's been there across all three redesigns. The honest reason it hasn't shipped: it hasn't been the business priority. The infrastructure exists. The user need is real.", status: "Sequencing", active: false },
          ].map((card, i) => (
            <motion.div key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
              className="bg-card p-10 first:rounded-l-xl last:rounded-r-xl">
              <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-lg mb-5">{card.icon}</div>
              <h4 className="font-semibold mb-2">{card.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              <Badge variant="secondary" className={`mt-4 text-xs ${card.active ? "bg-[hsl(152,48%,20%)]/10 text-[hsl(152,48%,20%)]" : ""}`}>
                {card.status}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* LEARNINGS */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>What I learned</SectionLabel>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-background/90 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
            Five years on one surface teaches you things a project never could.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-0.5">
            {[
              "Make the case before making the design. The 2023 redesign almost didn't happen — not because the idea was wrong, but because the problem wasn't visible yet. Research gave it language. That's the work before the work.",
              "Restraint is a design decision. Not redesigning the HSB across three versions was as deliberate as anything we shipped. Knowing what not to redesign is as important as knowing what to change.",
              "Design at scale is the ongoing negotiation between what users need, what the business wants, and what the system can support. The layout is the last part of that — not the first.",
              "A homepage is never finished — not because the work is incomplete, but because the users keep changing, the product keeps growing, and the habit you're trying to build takes longer than any single redesign.",
            ].map((text, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={i}
                className="bg-foreground/90 p-12">
                <p className="text-lg italic text-background/70 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>"{text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 px-6 text-center">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="text-2xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto mb-12 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          The goal was never to ship a homepage. It was to change <span className="text-primary italic">what people do</span> when they open one.
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}
          className="text-xs tracking-widest uppercase text-muted-foreground">
          Cricinfo · Homepage Redesign · 2021 — 2026
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
    className={`flex items-center gap-3 text-xs tracking-[0.14em] uppercase mb-12 max-w-5xl mx-auto ${dark ? "text-background/30" : "text-muted-foreground"}`}>
    <span className={`w-5 h-px ${dark ? "bg-background/30" : "bg-muted-foreground"}`} />
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

const ContextCard = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
    className="bg-card p-10">
    <p className="text-xs tracking-widest uppercase text-muted-foreground font-medium mb-4">{label}</p>
    <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
  </motion.div>
);

export default CaseStudyCricinfo;
