type Category = "Residential" | "Villas" | "Commercial" | "Open Plots";

function ResidentialArt() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <rect x="90" y="30" width="60" height="150" fill="#244D9A" opacity="0.85" />
      <rect x="160" y="55" width="50" height="125" fill="#173E82" opacity="0.85" />
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 3 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={98 + c * 18} y={42 + r * 22} width="9" height="13" fill="#C79B42" opacity="0.5" />
        ))
      )}
      <rect x="20" y="140" width="260" height="4" fill="#C79B42" opacity="0.4" />
    </svg>
  );
}

function VillaArt() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <polygon points="150,45 220,95 80,95" fill="#A97925" opacity="0.85" />
      <rect x="90" y="95" width="120" height="70" fill="#244D9A" opacity="0.85" />
      <rect x="130" y="120" width="24" height="45" fill="#0B1220" opacity="0.6" />
      <rect x="60" y="160" width="180" height="5" fill="#C79B42" opacity="0.4" />
      <circle cx="245" cy="60" r="14" fill="#D9AE52" opacity="0.5" />
    </svg>
  );
}

function CommercialArt() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <rect x="70" y="35" width="70" height="140" fill="#173E82" opacity="0.85" />
      <rect x="150" y="55" width="80" height="120" fill="#244D9A" opacity="0.85" />
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 3 }).map((_, c) => (
          <rect key={`a-${r}-${c}`} x={78 + c * 20} y={45 + r * 18} width="10" height="10" fill="#C79B42" opacity="0.45" />
        ))
      )}
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <rect key={`b-${r}-${c}`} x={158 + c * 17} y={65 + r * 18} width="9" height="10" fill="#D9AE52" opacity="0.4" />
        ))
      )}
      <rect x="20" y="175" width="260" height="4" fill="#C79B42" opacity="0.4" />
    </svg>
  );
}

function PlotsArt() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={40 + c * 56}
            y={40 + r * 34}
            width="48"
            height="26"
            fill="none"
            stroke="#C79B42"
            strokeWidth="1.5"
            opacity={0.5 + ((r + c) % 3) * 0.12}
          />
        ))
      )}
      <path d="M20 175 L280 175" stroke="#244D9A" strokeWidth="3" opacity="0.5" />
    </svg>
  );
}

const artByCategory: Record<Category, () => React.ReactElement> = {
  Residential: ResidentialArt,
  Villas: VillaArt,
  Commercial: CommercialArt,
  "Open Plots": PlotsArt,
};

export function ProjectIllustration({ category, className }: { category: Category; className?: string }) {
  const Art = artByCategory[category];
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-primary/30 via-bg-card to-bg-dark ${className ?? ""}`}>
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:16px_16px]" />
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Art />
      </div>
    </div>
  );
}
