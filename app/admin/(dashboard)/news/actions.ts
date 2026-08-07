"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type NewsItemInput = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  photo_url: string;
  published_date: string;
};

function revalidateAll() {
  revalidatePath("/admin/news");
  revalidatePath("/");
}

export async function createNewsItem(input: NewsItemInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("news_items").insert(input);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/news");
}

export async function updateNewsItem(id: string, input: NewsItemInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("news_items").update(input).eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/news");
}

export async function deleteNewsItem(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("news_items").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
}
