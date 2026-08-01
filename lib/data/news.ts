// NOTE: Placeholder news items — swap with real GLS Finvest press/updates
// before launch. Structure (category, date, excerpt) is final.

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  photo: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "horizon-heights-topping-off",
    title: "GLS Horizon Heights reaches topping-off milestone",
    excerpt:
      "Construction on our MVP Colony residential tower has reached its final floor, keeping the project on track for its committed handover timeline.",
    category: "Visakhapatnam",
    date: "Jul 18, 2026",
    photo: "https://images.unsplash.com/photo-1768638687896-35bde623d532",
  },
  {
    slug: "fintech-valley-expansion",
    title: "GLS Business Square breaks ground in the Fintech Valley corridor",
    excerpt:
      "Our newest commercial development begins construction in the Rushikonda–Kapuluppada belt, positioned for the district's continued IT and fintech growth.",
    category: "Commercial",
    date: "Jul 10, 2026",
    photo: "https://images.unsplash.com/photo-1743178207584-4a0c1109975e",
  },
  {
    slug: "emerald-fields-dtcp-approval",
    title: "GLS Emerald Fields receives full DTCP approval",
    excerpt:
      "Our Anandapuram plotted development has cleared final regulatory approval, opening bookings for one of the area's fastest-appreciating growth corridors.",
    category: "Open Plots",
    date: "Jun 28, 2026",
    photo: "https://images.unsplash.com/photo-1694730652852-9404a2d0214b",
  },
];
