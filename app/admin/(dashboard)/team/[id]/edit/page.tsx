import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { TeamForm } from "@/components/admin/team-form";
import { updateTeamMember } from "../../actions";

export default async function EditTeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: member } = await supabase.from("team_members").select("*").eq("id", id).single();
  if (!member) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Edit Team Member</h1>
      <div className="mt-6">
        <TeamForm initial={member} onSubmit={updateTeamMember.bind(null, id)} />
      </div>
    </div>
  );
}
