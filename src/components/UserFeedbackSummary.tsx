const FEEDBACK_CATEGORIES = [
  {
    label: "Navigation",
    items: ["Too many destinations", "Cluttered hierarchy", "Hard to find things"],
  },
  {
    label: "Performance",
    items: ["Slow", "Heavy", "Alternatives feel faster"],
  },
  {
    label: "Interaction",
    items: ["Commentary scrolling", "Match status", "Mobile interactions"],
  },
  {
    label: "Content",
    items: ["Best journalism", "Deep analysis", "Statsguru", "Rich cricket coverage"],
    highlight: true,
  },
  {
    label: "Interruptions",
    items: ["Ads", "Autoplay video", "Promotions", "Notifications"],
  },
];

type Category = { label: string; items: string[]; highlight?: boolean };

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.76 6.24 6.74.62-5.1 4.5 1.54 6.64L12 16.9l-5.94 3.6 1.54-6.64-5.1-4.5 6.74-.62L12 2.5z" />
    </svg>
  );
}

export default function UserFeedbackSummary({
  categories = FEEDBACK_CATEGORIES as Category[],
}: {
  title?: string;
  categories?: Category[];
}) {
  return (
    <section className="w-full max-w-xl px-8 py-8">
      <h2 className="text-lg font-bold tracking-tight text-foreground mb-6">{title.toUpperCase()}</h2>

      <div className="flex flex-col gap-6">
        {categories.map((category) => (
          <div key={category.label}>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block rounded bg-muted px-2.5 py-1 font-mono text-xs tracking-wide text-foreground">
                {category.label.toUpperCase()}
              </span>
              {category.highlight && <StarIcon className="w-4 h-4 text-foreground" />}
            </div>
            <p className="text-[15px] leading-snug text-muted-foreground">{category.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
