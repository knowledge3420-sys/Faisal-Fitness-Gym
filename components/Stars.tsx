import { Star } from "lucide-react";

type StarsProps = {
  /** Rating from 0 to 5 (decimals render as partial fill). */
  value?: number;
  className?: string;
};

/** Five-star rating with precise partial-fill support (e.g. 4.9). */
export function Stars({ value = 5, className = "size-4" }: StarsProps) {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`Rated ${value} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const pct = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <span key={i} className="relative inline-block" aria-hidden>
            <Star
              className={`${className} text-white/[0.14]`}
              fill="currentColor"
              strokeWidth={0}
            />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
              <Star className={`${className} text-star`} fill="currentColor" strokeWidth={0} />
            </span>
          </span>
        );
      })}
    </span>
  );
}
