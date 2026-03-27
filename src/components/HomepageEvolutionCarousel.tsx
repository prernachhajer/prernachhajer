import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import desk2021 from "@/assets/cricinfo-desk-2021.jpg";
import mobile2021 from "@/assets/cricinfo-mobile-2021.jpg";
import desk2023 from "@/assets/cricinfo-desk-2023.jpg";
import mobile2023 from "@/assets/cricinfo-mobile-2023.jpg";
import desk2026 from "@/assets/cricinfo-desk-2026.jpg";
import mobile2026 from "@/assets/cricinfo-mobile-2026.jpg";

const slides = [
  { year: "2021", era: "First era", desktop: desk2021, mobile: mobile2021 },
  { year: "2023", era: "Refresh", desktop: desk2023, mobile: mobile2023 },
  { year: "2026", era: "Current", desktop: desk2026, mobile: mobile2026 },
];

const HomepageEvolutionCarousel = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(slides.length - 1, a + 1));

  const slide = slides[active];

  return (
    <div className="mt-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex items-end justify-between">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.year}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-background/90" style={{ fontFamily: "var(--font-display)" }}>
                {slide.year}
              </p>
              <p className="text-xs tracking-widest uppercase text-background/40 mt-1">
                Mobile & Desktop
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="text-xs tracking-wider text-background/30 font-mono">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
      </div>

      {/* Device Stage */}
      <div className="max-w-5xl mx-auto relative">
        {/* Arrow buttons */}
        {active > 0 && (
          <button
            onClick={prev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
        )}
        {active < slides.length - 1 && (
          <button
            onClick={next}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[hsl(220,18%,18%)] border border-background/10 rounded-2xl p-5 md:p-7 pb-0 flex gap-5 overflow-hidden"
            style={{ height: "560px" }}
          >
            {/* Desktop Mockup */}
            <div className="flex-1 min-w-0 flex flex-col h-full">
              <div className="inline-flex items-center gap-1.5 bg-background/10 border border-background/10 rounded-full px-3 py-1 mb-2.5 self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-background/30" />
                <span className="text-[10px] tracking-widest uppercase text-background/50 font-mono">Desktop</span>
              </div>
              {/* Browser Chrome */}
              <div className="bg-background rounded-t-lg border border-border/30 border-b-0 px-3.5 pt-2.5 pb-0 shrink-0">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 h-5 bg-muted/30 border border-border/50 rounded flex items-center px-2.5 gap-1.5">
                    <svg className="w-2 h-2 opacity-40" viewBox="0 0 8 8" fill="none">
                      <rect x="1" y="3.5" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="0.8"/>
                      <path d="M2.5 3.5V2.5a1.5 1.5 0 013 0v1" stroke="currentColor" strokeWidth="0.8"/>
                    </svg>
                    <span className="text-[9px] text-muted-foreground font-mono">espncricinfo.com</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="text-[9px] font-mono text-foreground bg-background border border-border/50 border-b-0 rounded-t px-3 py-1">Home</div>
                  <div className="text-[9px] font-mono text-muted-foreground bg-muted/30 border border-border/50 border-b-0 rounded-t px-3 py-1">Scores</div>
                </div>
              </div>
              {/* Screen */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden border border-border/30 border-t-0 rounded-b-lg bg-background min-h-0 scrollbar-thin">
                <img src={slide.desktop} alt={`Cricinfo homepage ${slide.year} desktop`} className="w-full h-auto block" />
              </div>
            </div>

            {/* Gutter */}
            <div className="w-px bg-background/10 self-stretch shrink-0 hidden md:block" />

            {/* Mobile Mockup */}
            <div className="w-[140px] md:w-[158px] shrink-0 flex-col h-full hidden md:flex">
              <div className="inline-flex items-center gap-1.5 bg-background/10 border border-background/10 rounded-full px-3 py-1 mb-2.5 self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-background/30" />
                <span className="text-[10px] tracking-widest uppercase text-background/50 font-mono">Mobile</span>
              </div>
              {/* Phone Shell */}
              <div className="flex-1 min-h-0 bg-[#1A1A1A] rounded-[28px] p-2.5 flex flex-col relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.22)]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[18px] bg-[#1A1A1A] rounded-b-xl z-[2] flex items-center justify-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a] border border-[#333]" />
                  <div className="w-[18px] h-[3px] bg-[#2a2a2a] rounded" />
                </div>
                {/* Screen */}
                <div className="flex-1 min-h-0 rounded-[20px] overflow-y-auto overflow-x-hidden bg-background mt-1.5 scrollbar-none">
                  <img src={slide.mobile} alt={`Cricinfo homepage ${slide.year} mobile`} className="w-full h-auto block" />
                </div>
                {/* Home bar */}
                <div className="h-1 bg-[#333] rounded-full w-2/5 mx-auto mt-2 mb-0.5" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="flex items-center relative">
          {/* Track */}
          <div className="absolute top-[10px] left-0 right-0 h-px bg-background/15" />
          <div
            className="absolute top-[10px] left-0 h-px bg-background/60 transition-all duration-500 ease-out"
            style={{ width: `${(active / (slides.length - 1)) * 100}%` }}
          />
          {slides.map((s, i) => (
            <button
              key={s.year}
              onClick={() => setActive(i)}
              className="flex-1 flex flex-col items-center relative z-[2] pt-0 cursor-pointer group"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full border-2 mb-3 transition-all duration-300 ${
                  i === active
                    ? "bg-background border-background scale-150"
                    : i < active
                    ? "bg-background/60 border-background/60"
                    : "bg-transparent border-background/20"
                }`}
              />
              <span
                className={`transition-all duration-300 ${
                  i === active
                    ? "text-background/90 text-xl font-medium"
                    : i < active
                    ? "text-background/40 text-base"
                    : "text-background/25 text-base"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.year}
              </span>
              <span
                className={`text-[9px] tracking-widest uppercase mt-1 font-mono transition-colors ${
                  i === active ? "text-background/40" : "text-background/20"
                }`}
              >
                {s.era}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageEvolutionCarousel;
