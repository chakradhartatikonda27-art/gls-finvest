"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export type SiteSettingsInput = {
  legal_name: string;
  tagline: string;
  hero_headline: string;
  hero_subheadline: string;
  description: string;
  phone: string;
  email: string;
  address_line1: string;
  address_line2: string;
  whatsapp: string;
  linkedin_url: string;
  instagram_url: string;
  facebook_url: string;
  twitter_url: string;
  youtube_url: string;
};

export async function updateSiteSettings(input: SiteSettingsInput) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("site_settings")
    .upsert({ id: 1, ...input, updated_at: new Date().toISOString() });

  if (error) throw new Error(error.message);

  revalidatePath("/admin/settings");
  revalidatePath("/", "layout");
}
