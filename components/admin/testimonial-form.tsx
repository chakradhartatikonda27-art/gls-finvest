"use client";

import { useState, useTransition } from "react";
import type { TestimonialInput } from "@/app/admin/(dashboard)/testimonials/actions";

export function TestimonialForm({
  initial,
  onSubmit,
}: {
  initial?: Partial<TestimonialInput>;
  onSubmit: (input: TestimonialInput) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<TestimonialInput>({
    name: initial?.name ?? "",
    role: initial?.role ?? "",
    quote: initial?.quote ?? "",
    rating: initial?.rating ?? 5,
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
          <label className={labelClass}>Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Role (e.g. &ldquo;Homeowner, MVP Colony&rdquo;)</label>
          <input
            required
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Quote</label>
        <textarea
          required
          rows={3}
          value={form.quote}
          onChange={(e) => setForm({ ...form, quote: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Rating (1-5)</label>
        <select
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
          className={inputClass}
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>{r} stars</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-5 py-2.5 text-sm transition-colors disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Testimonial"}
      </button>
    </form>
  );
}
