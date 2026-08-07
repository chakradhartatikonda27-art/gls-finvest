"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ServiceInput = {
  slug: string;
  title: string;
  card_description: string;
  icon: string;
  photo_url: string;
  hero_tagline: string;
  overview: string;
  benefits: string[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

function revalidateAll(slug: string) {
  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath(`/services/${slug}`);
  revalidatePath("/");
}

async function saveNested(supabase: Awaited<ReturnType<typeof createClient>>, serviceId: string, input: ServiceInput) {
  await supabase.from("service_benefits").delete().eq("service_id", serviceId);
  await supabase.from("service_features").delete().eq("service_id", serviceId);
  await supabase.from("service_faqs").delete().eq("service_id", serviceId);

  if (input.benefits.length > 0) {
    await supabase.from("service_benefits").insert(
      input.benefits.map((b, i) => ({ service_id: serviceId, benefit: b, display_order: i }))
    );
  }
  if (input.features.length > 0) {
    await supabase.from("service_features").insert(
      input.features.map((f, i) => ({ service_id: serviceId, title: f.title, description: f.description, display_order: i }))
    );
  }
  if (input.faqs.length > 0) {
    await supabase.from("service_faqs").insert(
      input.faqs.map((f, i) => ({ service_id: serviceId, question: f.question, answer: f.answer, display_order: i }))
    );
  }
}

export async function createService(input: ServiceInput) {
  const supabase = await createClient();

  const { data: service, error } = await supabase
    .from("services")
    .insert({
      slug: input.slug,
      title: input.title,
      card_description: input.card_description,
      icon: input.icon,
      photo_url: input.photo_url,
      hero_tagline: input.hero_tagline,
      overview: input.overview,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  await saveNested(supabase, service.id, input);

  revalidateAll(input.slug);
  redirect("/admin/services");
}

export async function updateService(id: string, input: ServiceInput) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("services")
    .update({
      slug: input.slug,
      title: input.title,
      card_description: input.card_description,
      icon: input.icon,
      photo_url: input.photo_url,
      hero_tagline: input.hero_tagline,
      overview: input.overview,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw new Error(error.message);

  await saveNested(supabase, id, input);

  revalidateAll(input.slug);
  redirect("/admin/services");
}

export async function deleteService(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}
