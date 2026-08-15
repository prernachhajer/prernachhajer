import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: number;
  fit?: "cover" | "contain";
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  aspectRatio = 1920 / 1372,
  fit = "cover",
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl border border-border/30 cursor-col-resize select-none"
      style={{ aspectRatio, backgroundColor: "#f5f6f7" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image (full width behind) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className={`absolute inset-0 w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} object-center`}
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className={`absolute inset-0 h-full ${fit === "contain" ? "object-contain object-center" : "object-cover object-left"}`}
          style={{ width: containerRef.current?.offsetWidth ?? "100%", maxWidth: "none" }}
          draggable={false}
        />

      </div>


      {/* Divider line — more visible */}
      <div
        className="absolute top-0 bottom-0 z-10 bg-background shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_0_20px_rgba(0,0,0,0.15)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)", width: "4px" }}
      />

      {/* Handle — more visible */}
      <div
        className="absolute top-1/2 z-20 w-11 h-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background border-2 border-foreground/20 shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.25)] flex items-center justify-center"
        style={{ left: `${position}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
          <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 z-10 font-mono text-[0.625rem] tracking-[0.1em] uppercase bg-background/80 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 z-10 font-mono text-[0.625rem] tracking-[0.1em] uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-full shadow-sm">
        {afterLabel}
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
