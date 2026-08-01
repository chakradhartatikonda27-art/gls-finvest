const items = [
  "RERA Registered",
  "DTCP Approved",
  "15+ Years",
  "40+ Projects Delivered",
  "2,500+ Families",
  "Since 2009",
  "Clear Titles Only",
];

export function TrustMarquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-section py-4">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-heading font-medium uppercase tracking-widest text-text-secondary whitespace-nowrap">
            {item}
            <span className="text-gold">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
