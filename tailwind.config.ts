import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Light corporate theme, matching client reference (Federal Land) —
      // white/light backgrounds, navy blue as dominant color, gold kept as a
      // brand accent (from the GLS logo) rather than dropped entirely.
      // Hero-type bands (Hero, PageHero, ServiceHero, CtaBand) intentionally
      // stay bold navy — they use bg-brand-gradient/hero-overlay below,
      // which are raw hex, NOT these tokens, so they're unaffected.
      colors: {
        primary: {
          DEFAULT: "#173E82", // Primary Blue
          light: "#244D9A", // Secondary Blue
        },
        gold: {
          DEFAULT: "#C79B42", // Premium Gold
          deep: "#A97925", // Deep Gold
          hover: "#D9AE52", // Button Hover
        },
        bg: {
          dark: "#FFFFFF", // was dark navy — now main page background (white)
          section: "#F5F7FA", // was dark navy — now alternating light section bg
          card: "#FFFFFF", // was dark navy — now card background (white, differentiated by border/shadow)
          light: "#F8FAFC",
        },
        text: {
          DEFAULT: "#0F172A", // was white — now near-navy for readability on light bg
          secondary: "#475569", // was light gray — now slate gray
          muted: "#94A3B8",
        },
        success: "#1FA971",
        border: {
          DEFAULT: "rgba(15,23,42,.08)", // was white/8% — now dark/8% for visibility on light bg
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
        content: "1280px",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #173E82, #244D9A, #0B1220)",
        "hero-overlay": "linear-gradient(rgba(8,15,30,.82), rgba(8,15,30,.82))",
      },
      borderRadius: {
        card: "1rem",
        xl2: "1.5rem",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(199,155,66,0.35)",
        card: "0 20px 50px -20px rgba(0,0,0,0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-particle": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.5" },
          "90%": { opacity: "0.5" },
          "100%": { transform: "translateY(-110vh) translateX(30px)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
