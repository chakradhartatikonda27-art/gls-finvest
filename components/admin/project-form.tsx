"use client";

import { useState, useTransition } from "react";
import type { ProjectInput } from "@/app/admin/(dashboard)/projects/actions";

const categories = ["Residential", "Villas", "Commercial", "Open Plots"] as const;
const statuses = ["Ongoing", "Completed", "Upcoming"] as const;

export function ProjectForm({
  initial,
  onSubmit,
}: {
  initial?: Partial<ProjectInput>;
  onSubmit: (input: ProjectInput) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<ProjectInput>({
    slug: initial?.slug ?? "",
    name: initial?.name ?? "",
    category: initial?.category ?? "Residential",
    location: initial?.location ?? "",
    area: initial?.area ?? "",
    price_from: initial?.price_from ?? "",
    status: initial?.status ?? "Ongoing",
    image_category: initial?.image_category ?? "Residential",
    highlights: initial?.highlights ?? [""],
  });

  const inputClass =
    "w-full rounded-lg bg-[#0B1220] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C79B42]";
  const labelClass = "block text-xs text-white/60 mb-1.5";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        await onSubmit({ ...form, highlights: form.highlights.filter((h) => h.trim() !== "") });
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
          <label className={labelClass}>Project Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Slug (URL-friendly, unique)</label>
          <input
            required
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className={inputClass}
            placeholder="gls-horizon-heights"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as ProjectInput["category"] })}
            className={inputClass}
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value as ProjectInput["status"] })}
            className={inputClass}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Location</label>
          <input
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Area (e.g. &ldquo;1,200–2,400 sq.ft&rdquo;)</label>
          <input
            required
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Starting Price (e.g. &ldquo;₹68 L onwards&rdquo;)</label>
        <input
          required
          value={form.price_from}
          onChange={(e) => setForm({ ...form, price_from: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Highlights (one per line)</label>
        {form.highlights.map((h, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              value={h}
              onChange={(e) => {
                const next = [...form.highlights];
                next[i] = e.target.value;
                setForm({ ...form, highlights: next });
              }}
              className={inputClass}
              placeholder="Clubhouse & Pool"
            />
            <button
              type="button"
              onClick={() => setForm({ ...form, highlights: form.highlights.filter((_, idx) => idx !== i) })}
              className="px-3 text-red-400/70 hover:text-red-400 text-sm"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setForm({ ...form, highlights: [...form.highlights, ""] })}
          className="text-xs text-[#C79B42] hover:underline"
        >
          + Add highlight
        </button>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-5 py-2.5 text-sm transition-colors disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Project"}
      </button>
    </form>
  );
}
