"use client";

import { useState, useTransition } from "react";
import type { GalleryItemInput } from "@/app/admin/(dashboard)/gallery/actions";

const spans = ["normal", "wide", "tall", "large"] as const;

export function GalleryForm({
  initial,
  onSubmit,
}: {
  initial?: Partial<GalleryItemInput>;
  onSubmit: (input: GalleryItemInput) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<GalleryItemInput>({
    label: initial?.label ?? "",
    category: initial?.category ?? "",
    photo_url: initial?.photo_url ?? "",
    span: initial?.span ?? "normal",
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
          <label className={labelClass}>Label</label>
          <input
            required
            value={form.label}
            onChange={(e) => setForm({ ...form, label: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Category</label>
          <input
            required
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className={inputClass}
            placeholder="Real Estate"
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
        <label className={labelClass}>Tile Size (grid layout)</label>
        <select
          value={form.span}
          onChange={(e) => setForm({ ...form, span: e.target.value as GalleryItemInput["span"] })}
          className={inputClass}
        >
          {spans.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-5 py-2.5 text-sm transition-colors disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Gallery Item"}
      </button>
    </form>
  );
}
