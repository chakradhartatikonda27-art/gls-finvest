"use client";

import { ProjectForm } from "@/components/admin/project-form";
import { createProject } from "../actions";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add Project</h1>
      <div className="mt-6">
        <ProjectForm onSubmit={(input) => createProject(input)} />
      </div>
    </div>
  );
}
