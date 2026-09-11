import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NavCaseStudy } from "@/components/ds";
import { animation, layout, radius, surface, type as t } from "@/lib/tokens";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AskCricinfo from "@/assets/Askcricinfo.png";

const fade = animation.fade;

const StoryCricGPT = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavCaseStudy period="Cricinfo · Product design" />

      {/* ── HERO ── */}
      <header className={`${layout.containerBlog} mx-auto ${layout.px} pt-28 pb-16 md:pt-36 md:pb-20`}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <p className={`${t.labelSm} text-muted-foreground mb-8`}>Cricinfo · Product design</p>
          <h1 className={`${t.h2Hero} max-w-[14ch] mb-8`} style={{ fontFamily: t.displayFont }}>
            Ask Cricinfo: When the answer <span className="text-primary italic">stops needing a form</span>
          </h1>
          <p className="text-muted-foreground text-[0.9375rem] leading-[1.8]">
            Product design · AI layer over StatsGuru's data · Led and designed by Prerna
          </p>
        </motion.div>
      </header>

      <div className={`${layout.containerBlog} mx-auto ${layout.px}`}>
        <hr className="border-t border-border/50" />
      </div>

      <main className={`${layout.containerBlog} mx-auto ${layout.px}`}>
        {/* ── THE OPPORTUNITY ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="py-16 md:py-20 border-b border-border/50"
        >
          <p className={`${t.labelSm} text-primary mb-6`}>The opportunity</p>
          <p
            className="text-xl md:text-2xl font-normal tracking-[0.015em] leading-[1.35] mb-8"
            style={{ fontFamily: t.displayFont }}
          >
            Even after StatsGuru could be found and searched, one wall was still standing: you had to know what to ask
            for, and how to ask for it. That's a fair trade for a researcher. It's a dead end for a casual fan who just
            wants to know what happened in today's match and why it mattered.
          </p>
          <p className="text-[0.9375rem] text-foreground/85 leading-[1.85]">
            Ask Cricinfo was built to take that wall down. Instead of filters, a plain-language question. Instead of
            knowing which fields to select, just ask, the same way you'd ask a friend who happened to know everything
            about cricket.
          </p>
        </motion.section>

        {/* ── THE FOUNDATION ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="py-16 md:py-20"
        >
          <p className={`${t.labelSm} text-primary mb-6`}>The foundation</p>
          <h2
            className="text-2xl md:text-3xl font-normal tracking-[0.015em] italic mb-6 leading-[1.15]"
            style={{ fontFamily: t.displayFont }}
          >
            Standing on ground already built
          </h2>
          <p className="text-[0.9375rem] text-foreground/85 leading-[1.85]">
            Underneath, Ask Cricinfo drew on the same data StatsGuru had spent its rebuild making queryable. That wasn't
            a coincidence; Ask Cricinfo couldn't have existed without it. The data had to be queryable before it could
            be conversational. The two phases were never parallel tracks. One was the ground the other stood on.
          </p>

          {/* Exchange */}
          <div className={`mt-10 ${surface.card} ${radius.card} p-6 sm:p-8 md:p-10`}>
            <p className={`${t.labelSm} text-muted-foreground mb-8`}>
              A filter query, and the same thing asked plainly
            </p>
            <div className="space-y-6">
              <div>
                <p className={`${t.labelSm} text-muted-foreground mb-2`}>Filter query</p>
                <p className="font-mono text-[0.8125rem] leading-[1.8] text-foreground/70">
                  Team: India · Opponent: Australia · Format: ODI · Date range: 2015–2025 · Sort: Runs
                </p>
              </div>
              <div className="border-t border-border/50 pt-6">
                <p className={`${t.labelSm} text-muted-foreground mb-2`}>Asked plainly</p>
                <p
                  className="text-lg md:text-xl leading-[1.5] text-foreground/90"
                  style={{ fontFamily: t.displayFont }}
                >
                  "How has India batted against Australia in ODIs over the{" "}
                  <span className="text-primary">last decade</span>?"
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-[0.9375rem] text-foreground/85 leading-[1.85]">
            What made this project interesting wasn't the AI layer itself; it was watching who it actually reached. A
            casual fan checking in during a big match. A team loyalist who wanted updates without hunting for them. A
            returning visitor for whom Cricinfo had started to feel the same on every visit. None of these people were
            ever going to open a twenty-filter query screen. All of them could ask a question.
          </p>

             <section className="mt-16 md:mt-20  max-w-5xl max-w-[1040px] mx-auto mx-[-150px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="space-y-10"
            >
              {/* Mobile */}
              <div className="flex justify-center">
                <img src={AskCricinfo} alt="StatsGuru mobile experience" className="w-full" />
              </div>

       
          </section>

          <div className="mt-10 bg-primary/10 rounded-2xl p-8 border border-primary/10">
            <p
              className="text-lg md:text-xl leading-[1.6] text-foreground/85 italic"
              style={{ fontFamily: t.displayFont }}
            >
              For the first time, StatsGuru's depth wasn't gated behind knowing how to use it.
            </p>
          </div>
        </motion.section>
      </main>

      {/* ── READ MORE ── */}
      <section className="border-t border-border/50">
        <div className={`${layout.containerBlog} mx-auto ${layout.px} py-16 md:py-20`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <p className={`${t.labelSm} text-muted-foreground mb-6`}>Part one of this story</p>
            <div
              onClick={() => navigate("/story/statsguru")}
              className="group cursor-pointer p-6 rounded-2xl border border-border/50 hover:bg-secondary/60 transition-all"
            >
              <p className={`${t.labelSm} text-muted-foreground mb-2`}>Cricinfo · Foundation + mobile</p>
              <h3
                className="text-xl md:text-2xl font-normal tracking-[0.015em] leading-[1.2] mb-3"
                style={{ fontFamily: t.displayFont }}
              >
                StatsGuru: the tool everyone needed but almost no one found
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

export default StoryCricGPT;
