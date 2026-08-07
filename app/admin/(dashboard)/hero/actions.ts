"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type HeroImageInput = {
  photo_url: string;
};

function revalidateAll() {
  revalidatePath("/admin/hero");
  revalidatePath("/");
}

export async function createHeroImage(input: HeroImageInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("hero_images").insert(input);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/hero");
}

export async function updateHeroImage(id: string, input: HeroImageInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("hero_images").update(input).eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/hero");
}

export async function deleteHeroImage(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("hero_images").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
}
