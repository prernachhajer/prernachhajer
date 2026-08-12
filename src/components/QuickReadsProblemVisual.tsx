import { motion } from "framer-motion";
import { animation } from "@/lib/tokens";
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
    <div className="grid grid-cols-3 gap-2 sm:gap-5 items-end">
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

  </motion.div>
);

export default QuickReadsProblemVisual;
