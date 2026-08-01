export function SkylineIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skylineGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C79B42" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#A97925" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="skylineBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#244D9A" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#173E82" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="skylineFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B1220" stopOpacity="0" />
          <stop offset="100%" stopColor="#0B1220" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Back row — muted blue towers */}
      <rect x="20" y="180" width="46" height="200" fill="url(#skylineBlue)" opacity="0.5" />
      <rect x="76" y="140" width="38" height="240" fill="url(#skylineBlue)" opacity="0.5" />
      <rect x="460" y="160" width="44" height="220" fill="url(#skylineBlue)" opacity="0.5" />
      <rect x="510" y="120" width="34" height="260" fill="url(#skylineBlue)" opacity="0.5" />

      {/* Mid row */}
      <rect x="130" y="110" width="52" height="270" fill="url(#skylineBlue)" />
      <rect x="190" y="150" width="34" height="230" fill="url(#skylineBlue)" opacity="0.75" />
      <rect x="380" y="130" width="50" height="250" fill="url(#skylineBlue)" />
      <rect x="336" y="170" width="36" height="210" fill="url(#skylineBlue)" opacity="0.75" />

      {/* Hero tower — gold, front and center */}
      <rect x="234" y="60" width="92" height="320" fill="url(#skylineGold)" />
      {/* Windows grid on hero tower */}
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={246 + col * 20}
            y={78 + row * 28}
            width="10"
            height="16"
            fill="#0B1220"
            opacity="0.35"
          />
        ))
      )}
      {/* Spire */}
      <rect x="272" y="30" width="16" height="34" fill="url(#skylineGold)" />
      <circle cx="280" cy="26" r="4" fill="#D9AE52" />

      {/* Growth arrow motif overlay */}
      <path
        d="M40 340 L160 290 L230 320 L320 220 L420 250 L520 150"
        stroke="#C79B42"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />
      <path d="M480 150 L520 150 L520 190" stroke="#C79B42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="40" cy="340" r="5" fill="#D9AE52" />
      <circle cx="230" cy="320" r="5" fill="#D9AE52" />
      <circle cx="320" cy="220" r="5" fill="#D9AE52" />
      <circle cx="520" cy="150" r="6" fill="#D9AE52" />

      {/* Ground fade */}
      <rect x="0" y="380" width="560" height="40" fill="url(#skylineFade)" />
    </svg>
  );
}
