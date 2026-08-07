import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProjectForm } from "@/components/admin/project-form";
import { updateProject } from "../../actions";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: project } = await supabase.from("projects").select("*").eq("id", id).single();
  if (!project) notFound();

  const { data: highlights } = await supabase
    .from("project_highlights")
    .select("highlight")
    .eq("project_id", id)
    .order("display_order", { ascending: true });

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Edit Project</h1>
      <div className="mt-6">
        <ProjectForm
          initial={{
            slug: project.slug,
            name: project.name,
            category: project.category,
            location: project.location,
            area: project.area,
            price_from: project.price_from,
            status: project.status,
            image_category: project.image_category,
            highlights: (highlights ?? []).map((h) => h.highlight),
          }}
          onSubmit={(input) => updateProject(id, input)}
        />
      </div>
    </div>
  );
}
