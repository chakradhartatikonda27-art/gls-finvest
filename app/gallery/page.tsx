import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { GalleryBento } from "@/components/sections/gallery-bento";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual look at GLS Finvest's developments, offices, and portfolio moments.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Look Inside GLS Finvest"
        description="Developments, offices, and portfolio moments — click any image to explore it full-size."
      />
      <GalleryBento />
      <CtaBand />
    </>
  );
}
