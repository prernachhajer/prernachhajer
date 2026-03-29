import { motion } from "framer-motion";
import { animation, type as t } from "@/lib/tokens";
import problem1 from "@/assets/quick-reads/problem-1.jpg";
import problem2 from "@/assets/quick-reads/problem-2.jpg";
import problem3 from "@/assets/quick-reads/problem-3.jpg";

const fade = animation.fade;

const PhoneShell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`w-full max-w-[280px] bg-[#0E0E0E] rounded-[40px] p-[7px] relative mx-auto transition-transform duration-300 hover:-translate-y-1.5 ${className}`}
    style={{
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.07) inset, 0 2px 0 rgba(255,255,255,0.04) inset, 0 32px 64px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)",
    }}
  >
    <div className="absolute top-[13px] left-1/2 -translate-x-1/2 w-[44px] h-[9px] bg-[#0E0E0E] rounded-[5px] z-[3]" />
    <div className="rounded-[34px] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
      {children}
    </div>
  </div>
);

const QuickReadsProblemVisual = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className="w-full"
  >
    {/* Phones row */}
    <div className="grid grid-cols-3 gap-5 items-end mb-10">
      {[problem1, problem2, problem3].map((src, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          custom={i}
          className={`flex flex-col items-center ${i === 1 ? "-translate-y-5" : ""}`}
        >
          <PhoneShell>
            <img
              src={src}
              alt={`Quick Reads problem screen ${i + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </PhoneShell>
        </motion.div>
      ))}
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr] border-t border-border pt-9 gap-y-8">
      {/* Stat 1 */}
      <div className="px-0 md:px-9 md:first:pl-0">
        <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground/60 mb-3">
          Article Completion
        </p>
        <p
          className="text-[64px] font-normal leading-[0.9] tracking-[-0.04em] text-primary mb-3.5"
          style={{ fontFamily: t.displayFont }}
        >
          20<span className="text-[32px] text-muted-foreground">–30%</span>
        </p>
        <p className="text-[13px] text-muted-foreground leading-[1.65]">
          of users read a full article from start to finish.
        </p>
      </div>

      {/* Divider */}
      <div className="hidden md:block bg-border self-stretch" />

      {/* Stat 2 */}
      <div className="px-0 md:px-9">
        <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground/60 mb-3">
          Drop-off Rate
        </p>
        <p
          className="text-[64px] font-normal leading-[0.9] tracking-[-0.04em] text-foreground mb-3.5"
          style={{ fontFamily: t.displayFont }}
        >
          70<span className="text-[32px] text-muted-foreground">–80%</span>
        </p>
        <p className="text-[13px] text-muted-foreground leading-[1.65]">
          bounced before reaching the end — never forming a reading habit.
        </p>
      </div>

      {/* Divider */}
      <div className="hidden md:block bg-border self-stretch" />

      {/* Insight */}
      <div className="px-0 md:px-9 md:last:pr-0">
        <div className="bg-foreground rounded-[14px] p-6 md:p-7">
          <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-background/25 mb-3">
            The insight
          </p>
          <p
            className="text-lg font-normal leading-[1.45] text-background/85 italic"
            style={{ fontFamily: t.displayFont }}
          >
            Users weren't rejecting the content — they dropped off before it could{" "}
            <em className="not-italic text-primary/85">earn their attention.</em>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default QuickReadsProblemVisual;
