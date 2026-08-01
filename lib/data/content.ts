// NOTE: Testimonials are placeholder content pending real client quotes —
// swap before launch. Stats and timeline reflect the "Since 2009" positioning.

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ramesh Kumar",
    role: "Homeowner, GLS Horizon Heights",
    quote:
      "The clarity on titles and RERA documentation was what closed the deal for me. No surprises at registration — exactly what was promised on day one.",
    rating: 5,
  },
  {
    name: "Priya Anand",
    role: "Investor, Open Plots Portfolio",
    quote:
      "I've bought through three developers before GLS. This was the first time the site visit, the paperwork, and the handover all matched.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    role: "Founder, portfolio venture",
    quote:
      "GLS came in as a growth investor, not just a check-writer. Their advisory on structuring the next round saved us months.",
    rating: 5,
  },
];

export const stats = [
  { label: "Years of Trust", value: 15, suffix: "+" },
  { label: "Projects Delivered", value: 40, suffix: "+" },
  { label: "Happy Families", value: 2500, suffix: "+" },
  { label: "Sq.ft Developed", value: 3.2, suffix: "M+" },
] as const;

export const timeline = [
  { year: "2009", title: "GLS Finvest founded", description: "Began operations in Visakhapatnam with a focus on transparent real estate transactions." },
  { year: "2013", title: "First gated community", description: "Delivered our first residential gated development, setting the RERA-readiness standard we still follow." },
  { year: "2017", title: "Commercial expansion", description: "Entered commercial real estate with Grade-A office developments along the IT corridor." },
  { year: "2021", title: "Investment advisory launch", description: "Formalized portfolio advisory services spanning real estate and growth-stage ventures." },
  { year: "2025", title: "40+ projects delivered", description: "Crossed 2,500 families served and expanded venture investment activity across Andhra Pradesh." },
] as const;

export const coreValues = [
  { title: "Transparency", description: "Every title, approval, and cost is disclosed before you sign — not after." },
  { title: "Discipline", description: "We commit to timelines and hold ourselves to them, project after project." },
  { title: "Long-term thinking", description: "We build and invest for decade-long value, not quarterly optics." },
  { title: "Partnership", description: "Clients and founders we work with are treated as long-term stakeholders, not transactions." },
] as const;

export const whyGls = [
  { title: "15+ Years Experience", description: "Operating continuously since 2009 across real estate and investment." },
  { title: "Trusted Since 2009", description: "Track record built on delivered projects, not projections." },
  { title: "Transparent Process", description: "Clear documentation and pricing at every stage." },
  { title: "Legal Support", description: "In-house legal review on every title and agreement." },
  { title: "Expert Team", description: "Dedicated advisory across real estate and venture investment." },
  { title: "Investment Planning", description: "Portfolio structuring tailored to your risk profile and horizon." },
  { title: "Premium Support", description: "A single point of contact from consultation through handover." },
] as const;

// NOTE: Illustrative chart data pending real portfolio figures from finance team —
// swap before launch. Structure (shape/keys) is final.

export const portfolioGrowth = [
  { year: "2019", value: 100 },
  { year: "2020", value: 118 },
  { year: "2021", value: 132 },
  { year: "2022", value: 156 },
  { year: "2023", value: 178 },
  { year: "2024", value: 211 },
  { year: "2025", value: 248 },
] as const;

export const portfolioAllocation = [
  { name: "Residential", value: 34, color: "#173E82" },
  { name: "Villas", value: 22, color: "#244D9A" },
  { name: "Commercial", value: 18, color: "#C79B42" },
  { name: "Open Plots", value: 14, color: "#A97925" },
  { name: "Venture Capital", value: 12, color: "#1FA971" },
] as const;

export const yoyReturns = [
  { year: "2021", realEstate: 11.2, venture: 14.8 },
  { year: "2022", realEstate: 13.5, venture: 9.4 },
  { year: "2023", realEstate: 15.1, venture: 22.6 },
  { year: "2024", realEstate: 16.8, venture: 18.2 },
  { year: "2025", realEstate: 18.4, venture: 26.1 },
] as const;
