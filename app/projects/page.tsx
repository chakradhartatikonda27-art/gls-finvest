import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { getProjects } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore GLS Finvest's residential, villa, commercial, and open plot developments across Visakhapatnam, Andhra Pradesh.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Developments Across Visakhapatnam"
        description="Every project carries the same non-negotiables: clean titles, transparent pricing, and delivery on schedule."
      />
      <ProjectsGrid projects={projects} />
      <CtaBand />
    </>
  );
}
