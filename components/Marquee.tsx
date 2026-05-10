type MarqueeProps = {
  text: string;
  className?: string;
};

export function Marquee({ text, className = "" }: MarqueeProps) {
  const items = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div
      className={`overflow-hidden border-y border-orange/30 bg-navy/40 backdrop-blur-sm ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap py-2.5">
        {items.map((i) => (
          <span
            key={`a-${i}`}
            className="text-orange font-mono text-[0.7rem] sm:text-xs font-bold tracking-[0.4em] uppercase mx-6 sm:mx-10 inline-flex items-center gap-6 sm:gap-10"
          >
            {text}
            <span className="text-orange/40">★</span>
          </span>
        ))}
        {items.map((i) => (
          <span
            key={`b-${i}`}
            className="text-orange font-mono text-[0.7rem] sm:text-xs font-bold tracking-[0.4em] uppercase mx-6 sm:mx-10 inline-flex items-center gap-6 sm:gap-10"
          >
            {text}
            <span className="text-orange/40">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
