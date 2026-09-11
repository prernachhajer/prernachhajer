import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NavCaseStudy } from "@/components/ds";
import { animation, layout, radius, surface, type as t } from "@/lib/tokens";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fade = animation.fade;

const situation = [
  "It was Cricinfo's deepest stats tool. Type in a player, a team, a date range, and it handed you exactly the record you were after; the kind of precision that fantasy cricket players, analysts, and cricket researchers relied on constantly. The people who knew about it loved it. The problem was almost nobody knew about it. StatsGuru lived on desktop, running on a stack that hadn't been touched in years, at a time when most of Cricinfo's audience had already moved to mobile. A tool this good was reaching a sliver of the people it could have helped.",
  "The deeper issue wasn't just visibility: it was structural. The old stack meant StatsGuru's data could be filtered and displayed, but never really queried. It was a one-way street: pick your filters, get your table, done. Nothing more could be built on top of it.",
];

const before = [
  "Filters only, no search",
  "One team at a time",
  "Desktop-only layout",
  "Query rebuilt from scratch each time",
];

const after = [
  "Search alongside filters",
  "Multi-team selection",
  "Mobile-first, rethought for a small screen",
  "Queries built and edited in place",
];

const StoryStatsGuru = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavCaseStudy period="Cricinfo · Product design" />

      {/* ── HERO ── */}
      <header className={`${layout.containerBlog} mx-auto ${layout.px} pt-28 pb-16 md:pt-36 md:pb-20`}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <p className={`${t.labelSm} text-muted-foreground mb-8`}>Cricinfo · Product design</p>
          <h1 className={`${t.h2Hero} max-w-[14ch] mb-8`} style={{ fontFamily: t.displayFont }}>
            The tool everyone needed <span className="text-primary italic">but almost no one found</span>
          </h1>
          <p className="text-muted-foreground text-[0.9375rem] leading-[1.8]">
            Product design lead · Foundation and mobile rebuild · StatsGuru
          </p>
        </motion.div>
      </header>

      <div className={`${layout.containerBlog} mx-auto ${layout.px}`}>
        <hr className="border-t border-border/50" />
      </div>

      <main className={`${layout.containerBlog} mx-auto ${layout.px}`}>
        {/* ── THE SITUATION ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="py-16 md:py-20 border-b border-border/50"
        >
          <p className={`${t.labelSm} text-primary mb-6`}>The situation</p>
          <p
            className="text-xl md:text-2xl font-normal tracking-[0.015em] leading-[1.35] mb-8"
            style={{ fontFamily: t.displayFont }}
          >
            There's a strange kind of problem in product design where the thing you build is genuinely excellent, and
            almost nobody uses it, not because it's bad, but because it's invisible. That was StatsGuru.
          </p>
          <div className="space-y-4 text-[0.9375rem] text-foreground/85 leading-[1.85]">
            {situation.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.section>

        {/* ── THE REBUILD ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="py-16 md:py-20"
        >
          <p className={`${t.labelSm} text-primary mb-6`}>The rebuild</p>
          <h2
            className="text-2xl md:text-3xl font-normal tracking-[0.015em] italic mb-6 leading-[1.15]"
            style={{ fontFamily: t.displayFont }}
          >
            Rebuilding where no one would see it
          </h2>
          <p className="text-[0.9375rem] text-foreground/85 leading-[1.85]">
            The rebuild started underneath, where no one would see it: a new stack and an API designed from the ground
            up to make the data properly accessible. Only once that was solid did the visible work begin.
          </p>

          {/* Before / After */}
          <div className={`mt-10 ${surface.card} ${radius.card} p-6 sm:p-8 md:p-10`}>
            <p className={`${t.labelSm} text-muted-foreground mb-8`}>What changed, once the foundation held</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[0.75rem] font-semibold tracking-[0.05em] uppercase text-muted-foreground mb-4">
                  Before
                </p>
                <ul className="space-y-0">
                  {before.map((item, i) => (
                    <li
                      key={item}
                      className={`text-[1.0625rem] py-3 text-foreground/70 ${
                        i > 0 ? "border-t border-border/50" : "pt-0"
                      }`}
                      style={{ fontFamily: t.displayFont }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:border-l md:border-border/50 md:pl-8 border-t border-border/50 pt-6 md:pt-0 md:border-t-0">
                <p className="text-[0.75rem] font-semibold tracking-[0.05em] uppercase text-muted-foreground mb-4">
                  After
                </p>
                <ul className="space-y-0">
                  {after.map((item, i) => (
                    <li
                      key={item}
                      className={`text-[1.0625rem] py-3 ${
                        i > 0 ? "border-t border-border/50" : "pt-0"
                      } ${i === 1 ? "text-primary font-medium" : "text-foreground/90"}`}
                      style={{ fontFamily: t.displayFont }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-10 text-[0.9375rem] text-foreground/85 leading-[1.85]">
            A mobile-first redesign, search added alongside the filters so a name alone was enough to start, and
            advanced search that let one keyword pull results across teams, players, tournaments, and matches at once, a
            capability that had only ever existed on desktop. For the power users still building twenty-filter queries,
            multi-team selection replaced the old one-team-at-a-time limit, and the whole process of building and
            editing a query got noticeably smoother. And because a rebuilt tool no one finds is still an invisible tool,
            a homepage callout gave StatsGuru a real shot at being discovered.
          </p>

          <div className="mt-10 bg-primary/10 rounded-2xl p-8 border border-primary/10">
            <p
              className="text-lg md:text-xl leading-[1.6] text-foreground/85 italic"
              style={{ fontFamily: t.displayFont }}
            >
              Nothing about the depth changed. What changed was who could reach it.
            </p>
          </div>
        </motion.section>
      </main>

      {/* ── READ MORE ── */}
      <section className="border-t border-border/50">
        <div className={`${layout.containerBlog} mx-auto ${layout.px} py-16 md:py-20`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className={`${t.labelSm} text-muted-foreground mb-6`}>Part two of this story</p>
            <div
              onClick={() => navigate("/story/cricgpt")}
              className="group cursor-pointer p-6 rounded-2xl border border-border/50 hover:bg-secondary/60 transition-all"
            >
              <p className={`${t.labelSm} text-muted-foreground mb-2`}>Cricinfo · AI layer</p>
              <h3
                className="text-xl md:text-2xl font-normal tracking-[0.015em] leading-[1.2] mb-3"
                style={{ fontFamily: t.displayFont }}
              >
                CricGPT: when the answer stops needing a form
              </h3>
              <span className="inline-flex items-center gap-2 text-[0.8125rem] text-muted-foreground group-hover:text-foreground transition-colors">
                Read story <ArrowRight className="h-3 w-3" />
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

export default StoryStatsGuru;

{
  /* ── STATS GURU SCREENS ── */
}
<section className="mt-16 md:mt-20 space-y-8">
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
    <img
      src="/images/Statsguru-Desktop.png"
      alt="StatsGuru desktop experience"
      className="w-full rounded-2xl border border-border/50"
    />

    <img
      src="/images/Statsguru-Mobile.png"
      alt="StatsGuru mobile experience"
      className="w-full rounded-2xl border border-border/50"
    />
  </motion.div>
</section>;
