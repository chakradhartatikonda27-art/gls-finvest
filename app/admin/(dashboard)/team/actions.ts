"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type TeamMemberInput = {
  name: string;
  role: string;
  bio: string;
  photo_url: string;
  linkedin_url: string;
};

function revalidateAll() {
  revalidatePath("/admin/team");
  revalidatePath("/");
  revalidatePath("/about");
}

export async function createTeamMember(input: TeamMemberInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("team_members").insert(input);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/team");
}

export async function updateTeamMember(id: string, input: TeamMemberInput) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("team_members")
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
  redirect("/admin/team");
}

export async function deleteTeamMember(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidateAll();
}
