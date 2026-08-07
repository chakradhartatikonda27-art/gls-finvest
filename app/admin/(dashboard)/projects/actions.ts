"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ProjectInput = {
  slug: string;
  name: string;
  category: "Residential" | "Villas" | "Commercial" | "Open Plots";
  location: string;
  area: string;
  price_from: string;
  status: "Ongoing" | "Completed" | "Upcoming";
  image_category: string;
  photo_url: string;
  highlights: string[];
};

export async function createProject(input: ProjectInput) {
  const supabase = await createClient();

  const { data: project, error } = await supabase
    .from("projects")
    .insert({
      slug: input.slug,
      name: input.name,
      category: input.category,
      location: input.location,
      area: input.area,
      price_from: input.price_from,
      status: input.status,
      image_category: input.image_category,
      photo_url: input.photo_url,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  if (input.highlights.length > 0) {
    await supabase.from("project_highlights").insert(
      input.highlights.map((h, i) => ({
        project_id: project.id,
        highlight: h,
        display_order: i,
      }))
    );
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
  redirect("/admin/projects");
}

export async function updateProject(id: string, input: ProjectInput) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("projects")
    .update({
      slug: input.slug,
      name: input.name,
      category: input.category,
      location: input.location,
      area: input.area,
      price_from: input.price_from,
      status: input.status,
      image_category: input.image_category,
      photo_url: input.photo_url,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw new Error(error.message);

  await supabase.from("project_highlights").delete().eq("project_id", id);
  if (input.highlights.length > 0) {
    await supabase.from("project_highlights").insert(
      input.highlights.map((h, i) => ({
        project_id: id,
        highlight: h,
        display_order: i,
      }))
    );
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
}
