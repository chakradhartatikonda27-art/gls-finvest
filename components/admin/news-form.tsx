"use client";

import { useState, useTransition } from "react";
import type { NewsItemInput } from "@/app/admin/(dashboard)/news/actions";
import { ImageUpload } from "@/components/admin/image-upload";

export function NewsForm({
  initial,
  onSubmit,
}: {
  initial?: Partial<NewsItemInput>;
  onSubmit: (input: NewsItemInput) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<NewsItemInput>({
    slug: initial?.slug ?? "",
    title: initial?.title ?? "",
    excerpt: initial?.excerpt ?? "",
    category: initial?.category ?? "",
    photo_url: initial?.photo_url ?? "",
    published_date: initial?.published_date ?? new Date().toISOString().slice(0, 10),
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
          <label className={labelClass}>Title</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Slug</label>
          <input
            required
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Category</label>
          <input
            required
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className={inputClass}
            placeholder="Visakhapatnam"
          />
        </div>
        <div>
          <label className={labelClass}>Published Date</label>
          <input
            required
            type="date"
            value={form.published_date}
            onChange={(e) => setForm({ ...form, published_date: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Photo</label>
        <ImageUpload value={form.photo_url} onChange={(url) => setForm({ ...form, photo_url: url })} />
      </div>

      <div>
        <label className={labelClass}>Excerpt</label>
        <textarea
          required
          rows={3}
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-5 py-2.5 text-sm transition-colors disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save News Item"}
      </button>
    </form>
  );
}
