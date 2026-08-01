import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Building2, Home, LandPlot, TrendingUp, Briefcase, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual look at GLS Finvest's developments, offices, and portfolio moments.",
};

const galleryItems = [
  { label: "Luxury Villas", icon: Home, span: "md:row-span-2" },
  { label: "Commercial Buildings", icon: Briefcase, span: "" },
  { label: "Land Investments", icon: LandPlot, span: "" },
  { label: "Financial Growth", icon: TrendingUp, span: "" },
  { label: "Professional Office", icon: Building2, span: "md:row-span-2" },
  { label: "Business Meetings", icon: Users, span: "" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Look Inside GLS Finvest"
        description="Site photography and portfolio imagery are added here as projects near completion — reach out for a private walkthrough in the meantime."
      />
      <section className="py-24 bg-bg-dark">
        <Container wide>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-6">
            {galleryItems.map((item) => (
              <div key={item.label} className={item.span}>
                <ImagePlaceholder label={item.label} icon={item.icon} aspect="aspect-[4/3] md:h-full md:aspect-auto" />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
