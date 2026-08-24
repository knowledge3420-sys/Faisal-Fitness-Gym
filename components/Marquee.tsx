const words = [
  "Strength",
  "Cardio",
  "Discipline",
  "Consistency",
  "Energy",
  "Community",
];

/** Decorative scrolling word band. Pure CSS animation, aria-hidden. */
export function Marquee() {
  const items = [...words, ...words];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/[0.06] bg-carbon-900 py-6"
    >
      <div className="animate-marquee flex w-max">
        {items.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center whitespace-nowrap">
            <span className="px-8 font-display text-3xl uppercase tracking-wide text-cream/[0.13] md:px-10 md:text-4xl">
              {word}
            </span>
            <span className="size-1.5 rounded-full bg-volt-400/40" />
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-carbon-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-carbon-950 to-transparent"
      />
    </div>
  );
}
