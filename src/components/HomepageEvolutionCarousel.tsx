import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import desk2021 from "@/assets/cricinfo-desk-2021.jpg";
import mobile2021 from "@/assets/cricinfo-mobile-2021.jpg";
import desk2023 from "@/assets/cricinfo-desk-2023.jpg";
import mobile2023 from "@/assets/cricinfo-mobile-2023.jpg";
import desk2026 from "@/assets/cricinfo-desk-2026.jpg";
import mobile2026 from "@/assets/cricinfo-mobile-2026.jpg";

const slides = [
  { year: "2026", era: "Current", desktop: desk2026, mobile: mobile2026 },
  { year: "2023", era: "Refresh", desktop: desk2023, mobile: mobile2023 },
  { year: "2021", era: "First era", desktop: desk2021, mobile: mobile2021 },
];

const HomepageEvolutionCarousel = () => {
  const [active, setActive] = useState(0);

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
            className="absolute left-3 md:left-[-24px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-foreground/90 backdrop-blur-sm text-background flex items-center justify-center hover:bg-foreground transition-colors shadow-xl"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        )}
        {active < slides.length - 1 && (
          <button
            onClick={next}
            className="absolute right-3 md:right-[-24px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-foreground/90 backdrop-blur-sm text-background flex items-center justify-center hover:bg-foreground transition-colors shadow-xl"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-muted/50 rounded-2xl p-5 md:p-8 pb-0 flex gap-6 overflow-hidden border border-border/50"
            style={{ height: "540px" }}
          >
            {/* Desktop Mockup */}
            <div className="flex-1 min-w-0 flex flex-col h-full">
              {/* Browser Chrome — modern minimal */}
              <div className="bg-card rounded-t-xl border border-border border-b-0 shrink-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 h-7 bg-muted/60 rounded-lg flex items-center px-3 gap-2">
                    <svg className="w-3 h-3 text-muted-foreground/40" viewBox="0 0 12 12" fill="none">
                      <rect x="2" y="5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1"/>
                      <path d="M4 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    <span className="text-[0.6875rem] text-muted-foreground/60 font-mono tracking-wide">espncricinfo.com</span>
                  </div>
                </div>
              </div>
              {/* Screen */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden border border-border border-t-0 rounded-b-xl bg-background min-h-0 scrollbar-thin scrollbar-thumb-border">
                <img src={slide.desktop} alt={`Cricinfo ${slide.year} desktop`} className="w-full h-auto block" />
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="w-[150px] md:w-[170px] shrink-0 flex-col h-full hidden md:flex">
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
          <div className="absolute top-[5px] left-0 right-0 h-px bg-border" />
          <div
            className="absolute top-[5px] left-0 h-px bg-foreground transition-all duration-500 ease-out"
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
                    ? "bg-foreground border-foreground scale-[1.6]"
                    : i < active
                    ? "bg-foreground border-foreground"
                    : "bg-background border-border"
                }`}
              />
              <span
                className={`transition-all duration-300 tracking-tight ${
                  i === active
                    ? "text-foreground text-xl font-semibold"
                    : i < active
                    ? "text-muted-foreground text-base"
                    : "text-muted-foreground/50 text-base"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.year}
              </span>
              <span
                className={`text-[0.5625rem] tracking-[0.14em] uppercase mt-1 font-mono transition-colors ${
                  i === active ? "text-muted-foreground" : "text-muted-foreground/30"
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
