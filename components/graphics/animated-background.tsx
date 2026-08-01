// Deterministic particle configs (no Math.random() at render — avoids SSR/CSR
// hydration mismatches). left% / size / duration / delay pre-seeded.
const particles = [
  { left: 4, size: 3, duration: 18, delay: 0, color: "#C79B42" },
  { left: 11, size: 2, duration: 22, delay: 3, color: "#244D9A" },
  { left: 18, size: 4, duration: 16, delay: 6, color: "#C79B42" },
  { left: 26, size: 2, duration: 24, delay: 1, color: "#D9AE52" },
  { left: 34, size: 3, duration: 20, delay: 8, color: "#244D9A" },
  { left: 41, size: 2, duration: 19, delay: 4, color: "#C79B42" },
  { left: 49, size: 3, duration: 23, delay: 11, color: "#D9AE52" },
  { left: 57, size: 2, duration: 17, delay: 2, color: "#244D9A" },
  { left: 64, size: 4, duration: 21, delay: 9, color: "#C79B42" },
  { left: 72, size: 2, duration: 25, delay: 5, color: "#D9AE52" },
  { left: 79, size: 3, duration: 18, delay: 12, color: "#244D9A" },
  { left: 87, size: 2, duration: 20, delay: 7, color: "#C79B42" },
  { left: 93, size: 3, duration: 22, delay: 14, color: "#D9AE52" },
  { left: 8, size: 2, duration: 26, delay: 16, color: "#244D9A" },
  { left: 45, size: 2, duration: 19, delay: 18, color: "#C79B42" },
  { left: 68, size: 3, duration: 24, delay: 13, color: "#D9AE52" },
];

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animation: `float-particle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
