import Image from "next/image";

type Category = "Residential" | "Villas" | "Commercial" | "Open Plots";

// Verified "Free to use under the Unsplash License" photos — commercial use,
// no attribution required. One representative photo per project category
// (swap for real GLS Finvest project photography when available).
const photoByCategory: Record<Category, { url: string; alt: string }> = {
  Residential: {
    url: "https://images.unsplash.com/photo-1768638687896-35bde623d532",
    alt: "Modern residential apartment building exterior",
  },
  Villas: {
    url: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35",
    alt: "White concrete villa surrounded by trees",
  },
  Commercial: {
    url: "https://images.unsplash.com/photo-1743178207584-4a0c1109975e",
    alt: "Modern glass office building exterior",
  },
  "Open Plots": {
    url: "https://images.unsplash.com/photo-1694730652852-9404a2d0214b",
    alt: "Aerial view of open plotted land",
  },
};

export function ProjectPhoto({
  category,
  className,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
}: {
  category: Category;
  className?: string;
  sizes?: string;
}) {
  const photo = photoByCategory[category];
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={`${photo.url}?w=1200&q=80&auto=format&fit=crop`}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/50 via-transparent to-transparent" />
    </div>
  );
}
