import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";


import desk2021 from "@/assets/cricinfo-desk-2021.jpg";
import mobile2021 from "@/assets/cricinfo-mobile-2021.jpg";
import desk2023 from "@/assets/cricinfo-desk-2023.jpg";
import mobile2023 from "@/assets/cricinfo-mobile-2023.jpg";
import desk2026 from "@/assets/cricinfo-desk-2026.jpg";
import mobile2026 from "@/assets/cricinfo-mobile-2026.jpg";

const slides = [
  { year: "2022", era: "First era", desktop: desk2021, mobile: mobile2021 },
  { year: "2023", era: "Refresh", desktop: desk2023, mobile: mobile2023 },
  { year: "2026", era: "Current", desktop: desk2026, mobile: mobile2026 },
];

const HomepageEvolutionCarousel = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(slides.length - 1, a + 1));

  const slide = slides[active];


  return (
    <div>
      {/* Device Stage */}
      <div className="relative">
        {/* Arrow buttons — minimal pill style */}
        {active > 0 && (
          <button
            onClick={prev}
            className="absolute left-3 md:left-[-24px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/95 backdrop-blur-sm text-foreground flex items-center justify-center hover:bg-background transition-colors shadow-xl"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        )}
        {active < slides.length - 1 && (
          <button
            onClick={next}
            className="absolute right-3 md:right-[-24px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/95 backdrop-blur-sm text-foreground flex items-center justify-center hover:bg-background transition-colors shadow-xl"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        )}

        {/* Expand */}
        <button
          onClick={() => setOpen(true)}
          aria-label="View full size"
          className="absolute right-3 top-3 z-20 h-9 px-3 gap-2 rounded-full bg-background/95 backdrop-blur-sm text-foreground flex items-center justify-center hover:bg-background transition-colors shadow-lg text-[0.6875rem] font-mono uppercase tracking-[0.1em]"
        >
          <Maximize2 className="h-3.5 w-3.5" /> Full size
        </button>

        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-background/[0.06] rounded-2xl p-5 md:p-8 pb-0 flex gap-6 overflow-hidden border border-background/15"
            style={{ height: "540px" }}
          >
            {/* Desktop Mockup */}
            <div className="flex-1 min-w-0 flex flex-col h-full">
              {/* Browser Chrome — modern minimal */}
              <div className="bg-background rounded-t-xl border border-background/20 border-b-0 shrink-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 h-7 bg-muted/60 rounded-lg flex items-center px-3 gap-2">
                    <svg className="w-3 h-3 text-muted-foreground/75" viewBox="0 0 12 12" fill="none">
                      <rect x="2" y="5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1"/>
                      <path d="M4 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    <span className="text-[0.6875rem] text-muted-foreground/85 font-mono tracking-wide">espncricinfo.com</span>
                  </div>
                </div>
              </div>
              {/* Screen */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden border border-background/20 border-t-0 rounded-b-xl bg-background min-h-0 scrollbar-thin scrollbar-thumb-border">
                <img src={slide.desktop} alt={`Cricinfo ${slide.year} desktop`} className="w-full h-auto block" />
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="w-[180px] md:w-[200px] aspect-[9/19.5] self-end shrink-0 flex-col hidden md:flex">
              {/* Phone Shell — modern flat */}
              <div className="flex-1 min-h-0 bg-[#0a0a0a] rounded-[32px] p-[6px] flex flex-col relative"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.25)" }}>
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[52px] h-[16px] bg-[#0a0a0a] rounded-full z-[2]" />
                {/* Screen */}
                <div className="flex-1 min-h-0 rounded-[26px] overflow-y-auto overflow-x-hidden bg-background mt-0 scrollbar-none">
                  <img src={slide.mobile} alt={`Cricinfo ${slide.year} mobile`} className="w-full h-auto block" />
                </div>
                {/* Home indicator */}
                <div className="h-[4px] bg-white/20 rounded-full w-[36%] mx-auto mt-[6px] mb-[4px]" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline */}
      <div className="mt-10">
        <div className="flex items-center relative">
          {/* Track */}
          <div className="absolute top-[5px] left-0 right-0 h-px bg-background/25" />
          <div
            className="absolute top-[5px] left-0 h-px bg-background transition-all duration-500 ease-out"
            style={{ width: `${(active / (slides.length - 1)) * 100}%` }}
          />
          {slides.map((s, i) => (
            <button
              key={s.year}
              onClick={() => setActive(i)}
              className="flex-1 flex flex-col items-center relative z-[2] cursor-pointer group"
            >
              <div
                className={`w-[10px] h-[10px] rounded-full border-2 mb-4 transition-all duration-300 ${
                  i === active
                    ? "bg-background border-background scale-[1.6]"
                    : i < active
                    ? "bg-background border-background"
                    : "bg-transparent border-background/40"
                }`}
              />
              <span
                className={`transition-all duration-300 tracking-[0.01em] ${
                  i === active
                    ? "text-background text-xl font-semibold"
                    : i < active
                    ? "text-background/75 text-base"
                    : "text-background/60 text-base"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.year}
              </span>
              <span
                className={`text-[0.5625rem] tracking-[0.14em] uppercase mt-1 font-mono transition-colors ${
                  i === active ? "text-background/70" : "text-background/50"
                }`}
              >
                {s.era}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Full size viewer */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[92vh] p-0 gap-0 overflow-hidden flex flex-col">
          {/* Year carousel on top */}
          <div className="shrink-0 border-b border-border px-6 py-4 flex items-center justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.year}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full transition-colors text-sm ${
                  i === active
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <span style={{ fontFamily: "var(--font-display)" }}>{s.year}</span>
                <span className="ml-2 font-mono text-[0.5625rem] uppercase tracking-[0.14em] opacity-80">
                  {s.era}
                </span>
              </button>
            ))}
          </div>

          {/* Full images */}
          <div className="flex-1 min-h-0 overflow-y-auto bg-muted/40 p-4 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
              <img
                src={slide.desktop}
                alt={`Cricinfo ${slide.year} desktop full view`}
                className="w-full lg:w-[70%] h-auto rounded-xl border border-border bg-background"
              />
              <img
                src={slide.mobile}
                alt={`Cricinfo ${slide.year} mobile full view`}
                className="w-full max-w-[280px] mx-auto lg:mx-0 lg:w-[24%] h-auto rounded-xl border border-border bg-background"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};


export default HomepageEvolutionCarousel;
