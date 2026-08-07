"use client";

import { useState, useTransition } from "react";
import type { TeamMemberInput } from "@/app/admin/(dashboard)/team/actions";

export function TeamForm({
  initial,
  onSubmit,
}: {
  initial?: Partial<TeamMemberInput>;
  onSubmit: (input: TeamMemberInput) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<TeamMemberInput>({
    name: initial?.name ?? "",
    role: initial?.role ?? "",
    bio: initial?.bio ?? "",
    photo_url: initial?.photo_url ?? "",
    linkedin_url: initial?.linkedin_url ?? "",
  });

  const inputClass =
    "w-full rounded-lg bg-[#0B1220] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C79B42]";
  const labelClass = "block text-xs text-white/60 mb-1.5";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        await onSubmit(form);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Role / Title</label>
          <input
            required
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className={inputClass}
            placeholder="Chief Executive Officer"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Photo URL</label>
        <input
          required
          value={form.photo_url}
          onChange={(e) => setForm({ ...form, photo_url: e.target.value })}
          className={inputClass}
          placeholder="https://..."
        />
      </div>

      <div>
        <label className={labelClass}>Bio</label>
        <textarea
          required
          rows={3}
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>LinkedIn URL (optional)</label>
        <input
          value={form.linkedin_url}
          onChange={(e) => setForm({ ...form, linkedin_url: e.target.value })}
          className={inputClass}
          placeholder="https://linkedin.com/in/..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-5 py-2.5 text-sm transition-colors disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Team Member"}
      </button>
    </form>
  );
}
