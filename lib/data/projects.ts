// NOTE: Project names, pricing, and status are placeholder — swap with real
// GLS Finvest project details and photography before launch. Locations and
// the infrastructure context in highlights (Fintech Valley, Bheemili growth,
// Anandapuram appreciation) reflect real, current Visakhapatnam market data;
// only the specific project identity is fictional.

export type Project = {
  slug: string;
  name: string;
  category: "Residential" | "Villas" | "Commercial" | "Open Plots";
  location: string;
  area: string;
  priceFrom: string;
  status: "Ongoing" | "Completed" | "Upcoming";
  highlights: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "gls-horizon-heights",
    name: "GLS Horizon Heights",
    category: "Residential",
    location: "MVP Colony, Visakhapatnam",
    area: "1,450 – 2,600 sq.ft",
    priceFrom: "₹95 Lakh onwards",
    status: "Ongoing",
    highlights: ["Sea-facing towers", "Established residential hub", "RERA registered"],
    image: "residential-tower-skyline",
  },
  {
    slug: "gls-serene-meadows",
    name: "GLS Serene Meadows",
    category: "Villas",
    location: "Bheemunipatnam Road, Visakhapatnam",
    area: "2,800 – 4,200 sq.ft",
    priceFrom: "₹1.8 Cr onwards",
    status: "Ongoing",
    highlights: ["Gated villa community", "Bheemili coastal growth corridor", "24/7 security"],
    image: "luxury-villa-community",
  },
  {
    slug: "gls-business-square",
    name: "GLS Business Square",
    category: "Commercial",
    location: "Rushikonda IT Corridor, Visakhapatnam",
    area: "500 – 12,000 sq.ft",
    priceFrom: "On Request",
    status: "Upcoming",
    highlights: ["Grade-A office space", "Fintech Valley Vizag corridor", "Flexible floor plates"],
    image: "modern-office-building",
  },
  {
    slug: "gls-emerald-fields",
    name: "GLS Emerald Fields",
    category: "Open Plots",
    location: "Anandapuram, Visakhapatnam",
    area: "1,200 – 3,000 sq.ft",
    priceFrom: "₹18 Lakh onwards",
    status: "Ongoing",
    highlights: ["DTCP approved", "High-appreciation growth locality", "Gated layout with amenities"],
    image: "plotted-land-development",
  },
];
