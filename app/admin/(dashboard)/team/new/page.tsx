"use client";

import { TeamForm } from "@/components/admin/team-form";
import { createTeamMember } from "../actions";

export default function NewTeamMemberPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add Team Member</h1>
      <div className="mt-6">
        <TeamForm onSubmit={(input) => createTeamMember(input)} />
      </div>
    </div>
  );
}
