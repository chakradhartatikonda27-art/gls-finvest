export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: "building" | "briefcase" | "home" | "landPlot" | "lineChart" | "handshake";
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Development",
    description:
      "Premium apartments and gated communities engineered for long-term appreciation and everyday livability.",
    icon: "building",
  },
  {
    slug: "commercial",
    title: "Commercial Real Estate",
    description:
      "Grade-A office spaces and retail developments in high-growth corridors, built for institutional-quality tenants.",
    icon: "briefcase",
  },
  {
    slug: "villas",
    title: "Villa Projects",
    description:
      "Gated villa communities combining architectural distinction with legally clean, RERA-compliant titles.",
    icon: "home",
  },
  {
    slug: "open-plots",
    title: "Open Plots",
    description:
      "DTCP and HMDA/VUDA-approved plotted developments — a transparent, ownership-first entry into real estate.",
    icon: "landPlot",
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    description:
      "Portfolio structuring across real estate and growth-stage ventures, tailored to individual risk appetite.",
    icon: "lineChart",
  },
  {
    slug: "venture-growth",
    title: "Venture & Growth Investment",
    description:
      "Capital and mentorship for early-stage businesses with proven unit economics — where GLS invests alongside founders.",
    icon: "handshake",
  },
];
