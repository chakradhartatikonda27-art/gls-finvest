export type ServiceIcon = "building" | "map" | "trendingUp" | "wallet" | "handshake" | "home";

export type Service = {
  slug: string;
  title: string;
  /** 2-3 line card copy for the homepage grid */
  cardDescription: string;
  icon: ServiceIcon;
  photo: string;
  /** dedicated page content — kept short and scannable on purpose */
  heroTagline: string;
  overview: string;
  benefits: string[];
  features: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-commercial-real-estate",
    title: "Residential & Commercial Real Estate",
    cardDescription:
      "Premium residential layouts, commercial spaces, open plots, and gated community properties — with complete legal support.",
    icon: "building",
    photo: "https://images.unsplash.com/photo-1768638687896-35bde623d532",
    heroTagline: "Property You Can Trust the Paperwork On",
    overview:
      "We source verified residential, commercial, and plotted properties — and clear every title before it reaches you.",
    benefits: ["Title verified before you commit", "RERA-registered only", "No hidden charges"],
    features: [
      { title: "Residential Apartments", description: "Gated communities with clubhouse and security." },
      { title: "Commercial Spaces", description: "Grade-A retail and office in prime corridors." },
      { title: "Open Plots", description: "DTCP/HMDA-approved plotted developments." },
      { title: "Gated Communities", description: "Villas and apartments with 24/7 security." },
    ],
    faqs: [
      { q: "How do I start?", a: "Book a free consultation — we shortlist properties around your budget and goals before any site visit." },
      { q: "How are properties verified?", a: "Full title, encumbrance, and RERA/DTCP approval review before it's ever shown to a client." },
      { q: "How long does buying take?", a: "3–5 weeks for a clean, ready title from agreement to registration." },
    ],
  },
  {
    slug: "land-villa-investments",
    title: "Land & Villa Plot Investments",
    cardDescription:
      "High-growth land opportunities and premium villa plots for long-term wealth creation.",
    icon: "map",
    photo: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35",
    heroTagline: "Land Doesn't Depreciate. Poor Diligence Does.",
    overview:
      "We identify plotted developments and villa communities in genuine growth corridors — every title cleared first.",
    benefits: ["Growth-corridor locations", "Clear, single-owner titles", "Flexible plot sizes"],
    features: [
      { title: "Investment Plots", description: "Entry-level land in emerging corridors." },
      { title: "Premium Villa Plots", description: "Ready for custom home construction." },
      { title: "Farm Land", description: "Select parcels for long-horizon holding." },
      { title: "Portfolio Structuring", description: "Land as part of a broader portfolio." },
    ],
    faqs: [
      { q: "How do I start?", a: "We match your budget and horizon to plots with clean titles and real growth-corridor positioning." },
      { q: "How are titles verified?", a: "Full title chain and encumbrance check before any plot is presented." },
      { q: "How long does it take?", a: "Typically 2–4 weeks for a clean, ready title." },
    ],
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    cardDescription:
      "Professional investment planning and portfolio guidance to maximize returns while minimizing risk.",
    icon: "trendingUp",
    photo: "https://images.unsplash.com/photo-1743178207584-4a0c1109975e",
    heroTagline: "Portfolio Decisions, Made With Your Numbers",
    overview:
      "Advisory spanning real estate and venture positions, structured around your actual risk tolerance and timeline.",
    benefits: ["Structured to your risk profile", "Same diligence on every asset class", "Ongoing reporting"],
    features: [
      { title: "Portfolio Assessment", description: "Full review before any recommendation." },
      { title: "Diversification", description: "Balance across real estate and ventures." },
      { title: "Risk Analysis", description: "Downside reviewed before capital moves." },
      { title: "Ongoing Review", description: "Scheduled portfolio check-ins." },
    ],
    faqs: [
      { q: "How do I start?", a: "We review your current position and goals before recommending anything." },
      { q: "How are opportunities verified?", a: "Same legal and financial diligence, whether it's a title or a cap table." },
      { q: "How soon is a plan ready?", a: "Most clients get a structured plan within 1–2 weeks." },
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    cardDescription:
      "Customized financial consulting and business solutions for individual and corporate needs.",
    icon: "wallet",
    photo: "https://images.unsplash.com/photo-1694730652852-9404a2d0214b",
    heroTagline: "Financial Planning for the Whole Picture",
    overview:
      "Cash flow planning and financing structure for property purchases — for individuals and businesses alike.",
    benefits: ["Financing matched to real cash flow", "One team, one standard", "Clear cost disclosure"],
    features: [
      { title: "Personal Consulting", description: "Cash flow planning for major purchases." },
      { title: "Corporate Solutions", description: "For businesses evaluating capital deployment." },
      { title: "Financing Coordination", description: "Loan structuring support." },
      { title: "Ongoing Review", description: "Check-ins as your position changes." },
    ],
    faqs: [
      { q: "How do I start?", a: "Book a consultation — we review your position before recommending a structure." },
      { q: "How are solutions verified?", a: "Reviewed against your actual cash flow, not a template." },
      { q: "How long does structuring take?", a: "Usually 1–3 weeks depending on complexity." },
    ],
  },
  {
    slug: "property-consulting",
    title: "Property Consulting",
    cardDescription:
      "Complete consulting: identification, documentation, legal verification, and registration support.",
    icon: "handshake",
    photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    heroTagline: "From 'Interested' to 'Owned'",
    overview:
      "One coordinated process — identification, documentation, legal verification, and registration — one team accountable throughout.",
    benefits: ["One team, start to finish", "Verified before you commit", "Support through possession"],
    features: [
      { title: "Identification", description: "Shortlisting that matches your criteria." },
      { title: "Documentation", description: "Every document reviewed and prepared." },
      { title: "Legal Verification", description: "Title and approval checks upfront." },
      { title: "Registration", description: "Coordinated support at the registrar." },
    ],
    faqs: [
      { q: "How do I start?", a: "Share your requirements — we begin identification once your budget is clear." },
      { q: "How is a property verified?", a: "Full title, encumbrance, and approval check before you see it." },
      { q: "How long does it take?", a: "Most transactions close in 4–6 weeks." },
    ],
  },
  {
    slug: "end-to-end-real-estate",
    title: "End-to-End Real Estate Solutions",
    cardDescription:
      "A complete one-stop solution: buying, investment planning, documentation, and post-purchase support.",
    icon: "home",
    photo: "https://images.unsplash.com/photo-1741156386380-0236c72eb6f9",
    heroTagline: "One Team, Every Stage",
    overview:
      "A single relationship covering buying, investment planning, documentation, and post-purchase support.",
    benefits: ["One contact, every stage", "Consistent diligence throughout", "Support after registration"],
    features: [
      { title: "Property Buying", description: "Shortlisting through registration." },
      { title: "Investment Planning", description: "Portfolio-level guidance." },
      { title: "Documentation & Legal", description: "Handled fully in-house." },
      { title: "Post-Purchase Support", description: "Ongoing support after handover." },
    ],
    faqs: [
      { q: "How do I start?", a: "We scope your full journey before proposing a plan." },
      { q: "Is verification consistent?", a: "Same standard whether it's your first purchase or fifth." },
      { q: "How long does the relationship last?", a: "As long as you're investing — transactions close in weeks." },
    ],
  },
];
