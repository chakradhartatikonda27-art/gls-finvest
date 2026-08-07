"use client";

import { useState, useTransition } from "react";
import type { ServiceInput } from "@/app/admin/(dashboard)/services/actions";
import { ImageUpload } from "@/components/admin/image-upload";

const icons = ["building", "map", "trendingUp", "wallet", "handshake", "home"] as const;

export function ServiceForm({
  initial,
  onSubmit,
}: {
  initial?: Partial<ServiceInput>;
  onSubmit: (input: ServiceInput) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<ServiceInput>({
    slug: initial?.slug ?? "",
    title: initial?.title ?? "",
    card_description: initial?.card_description ?? "",
    icon: initial?.icon ?? "building",
    photo_url: initial?.photo_url ?? "",
    hero_tagline: initial?.hero_tagline ?? "",
    overview: initial?.overview ?? "",
    benefits: initial?.benefits ?? [""],
    features: initial?.features ?? [{ title: "", description: "" }],
    faqs: initial?.faqs ?? [{ question: "", answer: "" }],
  });

  const inputClass =
    "w-full rounded-lg bg-[#0B1220] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C79B42]";
  const labelClass = "block text-xs text-white/60 mb-1.5";
  const sectionClass = "border-t border-white/10 pt-5 mt-5";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        await onSubmit({
          ...form,
          benefits: form.benefits.filter((b) => b.trim() !== ""),
          features: form.features.filter((f) => f.title.trim() !== ""),
          faqs: form.faqs.filter((f) => f.question.trim() !== ""),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5 pb-16">
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

      <div>
        <label className={labelClass}>Card Description (homepage grid)</label>
        <textarea
          required
          rows={2}
          value={form.card_description}
          onChange={(e) => setForm({ ...form, card_description: e.target.value })}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Icon</label>
          <select
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
            className={inputClass}
          >
            {icons.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Photo</label>
        <ImageUpload value={form.photo_url} onChange={(url) => setForm({ ...form, photo_url: url })} />
      </div>

      <div>
        <label className={labelClass}>Hero Tagline (detail page)</label>
        <input
          required
          value={form.hero_tagline}
          onChange={(e) => setForm({ ...form, hero_tagline: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Overview</label>
        <textarea
          required
          rows={2}
          value={form.overview}
          onChange={(e) => setForm({ ...form, overview: e.target.value })}
          className={inputClass}
        />
      </div>

      {/* Benefits */}
      <div className={sectionClass}>
        <label className={labelClass}>Benefits</label>
        {form.benefits.map((b, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              value={b}
              onChange={(e) => {
                const next = [...form.benefits];
                next[i] = e.target.value;
                setForm({ ...form, benefits: next });
              }}
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => setForm({ ...form, benefits: form.benefits.filter((_, idx) => idx !== i) })}
              className="px-3 text-red-400/70 hover:text-red-400 text-sm"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setForm({ ...form, benefits: [...form.benefits, ""] })}
          className="text-xs text-[#C79B42] hover:underline"
        >
          + Add benefit
        </button>
      </div>

      {/* Features */}
      <div className={sectionClass}>
        <label className={labelClass}>Features</label>
        {form.features.map((f, i) => (
          <div key={i} className="mb-3 p-3 rounded-lg bg-white/5 space-y-2">
            <input
              value={f.title}
              onChange={(e) => {
                const next = [...form.features];
                next[i] = { ...next[i], title: e.target.value };
                setForm({ ...form, features: next });
              }}
              className={inputClass}
              placeholder="Feature title"
            />
            <input
              value={f.description}
              onChange={(e) => {
                const next = [...form.features];
                next[i] = { ...next[i], description: e.target.value };
                setForm({ ...form, features: next });
              }}
              className={inputClass}
              placeholder="Feature description"
            />
            <button
              type="button"
              onClick={() => setForm({ ...form, features: form.features.filter((_, idx) => idx !== i) })}
              className="text-xs text-red-400/70 hover:text-red-400"
            >
              Remove feature
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setForm({ ...form, features: [...form.features, { title: "", description: "" }] })}
          className="text-xs text-[#C79B42] hover:underline"
        >
          + Add feature
        </button>
      </div>

      {/* FAQs */}
      <div className={sectionClass}>
        <label className={labelClass}>FAQs</label>
        {form.faqs.map((f, i) => (
          <div key={i} className="mb-3 p-3 rounded-lg bg-white/5 space-y-2">
            <input
              value={f.question}
              onChange={(e) => {
                const next = [...form.faqs];
                next[i] = { ...next[i], question: e.target.value };
                setForm({ ...form, faqs: next });
              }}
              className={inputClass}
              placeholder="Question"
            />
            <textarea
              value={f.answer}
              onChange={(e) => {
                const next = [...form.faqs];
                next[i] = { ...next[i], answer: e.target.value };
                setForm({ ...form, faqs: next });
              }}
              rows={2}
              className={inputClass}
              placeholder="Answer"
            />
            <button
              type="button"
              onClick={() => setForm({ ...form, faqs: form.faqs.filter((_, idx) => idx !== i) })}
              className="text-xs text-red-400/70 hover:text-red-400"
            >
              Remove FAQ
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setForm({ ...form, faqs: [...form.faqs, { question: "", answer: "" }] })}
          className="text-xs text-[#C79B42] hover:underline"
        >
          + Add FAQ
        </button>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-5 py-2.5 text-sm transition-colors disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Service"}
      </button>
    </form>
  );
}
