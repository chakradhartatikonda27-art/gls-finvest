// Real, verified "Free to use under the Unsplash License" photography
// (commercial use permitted, no attribution required) — curated from across
// the site's already-vetted image set. Swap with real GLS Finvest site/project
// photography when available; structure and captions are final.

export type GalleryItem = {
  label: string;
  category: string;
  photo: string;
  /** grid span hint for the bento layout */
  span: "large" | "tall" | "wide" | "normal";
};

export const galleryItems: GalleryItem[] = [
  {
    label: "City Skyline, Visakhapatnam",
    category: "Real Estate",
    photo: "https://images.unsplash.com/photo-1771450092348-5f33e2cc2963",
    span: "large",
  },
  {
    label: "Luxury Villa Living",
    category: "Villas",
    photo: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35",
    span: "tall",
  },
  {
    label: "Grade-A Office Space",
    category: "Commercial",
    photo: "https://images.unsplash.com/photo-1743178207584-4a0c1109975e",
    span: "normal",
  },
  {
    label: "Residential Towers",
    category: "Residential",
    photo: "https://images.unsplash.com/photo-1768638687896-35bde623d532",
    span: "normal",
  },
  {
    label: "Portfolio Growth",
    category: "Financial Growth",
    photo: "https://images.unsplash.com/photo-1534951009808-766178b47a4f",
    span: "wide",
  },
  {
    label: "Plotted Land Development",
    category: "Land Investments",
    photo: "https://images.unsplash.com/photo-1694730652852-9404a2d0214b",
    span: "normal",
  },
  {
    label: "Client Handover",
    category: "Milestones",
    photo: "https://images.unsplash.com/photo-1741156386380-0236c72eb6f9",
    span: "normal",
  },
  {
    label: "Deal Closed",
    category: "Partnerships",
    photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    span: "tall",
  },
  {
    label: "Advisory in Session",
    category: "Business Meetings",
    photo: "https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b",
    span: "wide",
  },
];
