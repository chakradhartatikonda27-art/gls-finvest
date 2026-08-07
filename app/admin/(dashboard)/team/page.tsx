import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteTeamMember } from "./actions";

export default async function AdminTeamPage() {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("team_members")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Team</h1>
          <p className="mt-1 text-sm text-white/60">{members?.length ?? 0} total</p>
        </div>
        <Link
          href="/admin/team/new"
          className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-4 py-2 text-sm transition-colors"
        >
          + Add Team Member
        </Link>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5 text-left text-white/60">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(members ?? []).map((m) => (
              <tr key={m.id} className="border-t border-white/10 text-white/90">
                <td className="px-4 py-3">{m.name}</td>
                <td className="px-4 py-3 text-white/60">{m.role}</td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link href={`/admin/team/${m.id}/edit`} className="text-[#C79B42] hover:underline">
                    Edit
                  </Link>
                  <DeleteButton id={m.id} action={deleteTeamMember} label="team member" />
                </td>
              </tr>
            ))}
            {(!members || members.length === 0) && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-white/40">
                  No team members yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
