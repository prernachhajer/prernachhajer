import { motion } from "framer-motion";
import { animation, type as t } from "@/lib/tokens";
import screen1 from "@/assets/quick-reads/screen-1.jpg";
import screen2 from "@/assets/quick-reads/screen-2.jpg";
import screen3 from "@/assets/quick-reads/screen-3.jpg";
import screen4 from "@/assets/quick-reads/screen-4.jpg";
import screen5 from "@/assets/quick-reads/screen-5.jpg";
import screen6 from "@/assets/quick-reads/screen-6.jpg";
import "@/styles/quick-reads-animations.css";

const fade = animation.fade;

const PhoneShell = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-full max-w-[300px] flex-shrink-0 bg-[#0E0E0E] rounded-[44px] p-[8px] relative"
    style={{
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.07) inset, 0 2px 0 rgba(255,255,255,0.04) inset, 0 40px 80px rgba(0,0,0,0.20), 0 12px 28px rgba(0,0,0,0.14)",
    }}
  >
    <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[48px] h-[10px] bg-[#0E0E0E] rounded-[5px] z-[5]" />
    <div className="rounded-[37px] overflow-hidden relative bg-white" style={{ aspectRatio: "9/19.5" }}>
      {children}
    </div>
  </div>
);

const RowCaption = ({ title, desc }: { title: string; desc: string }) => (
  <div className="text-center max-w-[420px]">
    <h4
      className="text-[1.375rem] font-normal tracking-[0.015em] text-foreground mb-2.5 leading-[1.2]"
      style={{ fontFamily: t.displayFont }}
    >
      {title}
    </h4>
    <p className="text-sm text-muted-foreground leading-[1.75] font-light">{desc}</p>
  </div>
);

const QuickReadsScreensVisual = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start justify-items-center">
    {/* COL 1 — Crossfade */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
      className="flex flex-col items-center gap-7 w-full max-w-[300px]"
    >
      <PhoneShell>
        <div className="absolute inset-0">
          <img src={screen1} className="qr-fade-screen-1 absolute inset-0 w-full h-full object-cover object-top" alt="Quick Reads feed view" />
          <img src={screen2} className="qr-fade-screen-2 absolute inset-0 w-full h-full object-cover object-top" alt="Quick Reads reading view" />
        </div>
        <div className="qr-swipe-hint absolute bottom-[50px] left-1/2 -translate-x-1/2 z-[6] flex flex-col items-center gap-[3px] pointer-events-none">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(26,26,24,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.2))" }}>
            <polyline points="18 15 12 9 6 15" />
            <polyline points="18 20 12 14 6 20" />
          </svg>
          <span className="text-[0.5625rem] font-medium text-foreground/75 tracking-[0.04em] whitespace-nowrap mt-[1px]">
            Swipe up for next story
          </span>
        </div>
      </PhoneShell>
      <RowCaption
        title="Feels lighter as you read"
        desc="The app steps back so the story can step forward. Chrome elements fade, distractions dissolve — all that remains is the story."
      />
    </motion.div>

    {/* COL 2 — Swipe left */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
      className="flex flex-col items-center gap-7 w-full max-w-[300px]"
    >
      <PhoneShell>
        <div className="qr-swipe-left-stack absolute top-0 left-0 w-[200%] h-full flex">
          <img src={screen3} className="w-1/2 h-full object-cover object-top flex-shrink-0" alt="Summary view" />
          <img src={screen4} className="w-1/2 h-full object-cover object-top flex-shrink-0" alt="Full article view" />
        </div>
      </PhoneShell>
      <RowCaption
        title="Curiosity, one swipe away"
        desc="When the summary earns it, the full story is right there. No new screen, no break in flow — just a gesture."
      />
    </motion.div>

    {/* COL 3 — Scroll */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
      className="flex flex-col items-center gap-7 w-full max-w-[300px]"
    >
      <PhoneShell>
        <div className="qr-scroll-stack absolute top-0 left-0 w-full h-[200%] flex flex-col">
          <img src={screen5} className="w-full h-1/2 object-cover object-top flex-shrink-0" alt="Current story" />
          <img src={screen6} className="w-full h-1/2 object-cover object-top flex-shrink-0" alt="Next story" />
        </div>
      </PhoneShell>
      <RowCaption
        title="Always something next"
        desc="One gesture and you're on to the next story. No dead ends, no going back to a feed — just forward momentum."
      />
    </motion.div>
  </div>
);

export default QuickReadsScreensVisual;
