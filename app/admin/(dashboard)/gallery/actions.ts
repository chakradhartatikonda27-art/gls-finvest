"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type GalleryItemInput = {
  label: string;
  category: string;
  photo_url: string;
  span: "large" | "tall" | "wide" | "normal";
};

function revalidateAll() {
  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}

export async function createGalleryItem(input: GalleryItemInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("gallery_items").insert(input);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/gallery");
}

export async function updateGalleryItem(id: string, input: GalleryItemInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("gallery_items").update(input).eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/gallery");
}

export async function deleteGalleryItem(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("gallery_items").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
}
