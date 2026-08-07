"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type TestimonialInput = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

function revalidateAll() {
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}

export async function createTestimonial(input: TestimonialInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("testimonials").insert(input);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/testimonials");
}

export async function updateTestimonial(id: string, input: TestimonialInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("testimonials").update(input).eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("testimonials").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
}
