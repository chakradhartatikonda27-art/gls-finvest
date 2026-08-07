"use client";

import { useState, useTransition } from "react";
import type { HeroImageInput } from "@/app/admin/(dashboard)/hero/actions";
import { ImageUpload } from "@/components/admin/image-upload";

export function HeroImageForm({
  initial,
  onSubmit,
}: {
  initial?: Partial<HeroImageInput>;
  onSubmit: (input: HeroImageInput) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<HeroImageInput>({
    photo_url: initial?.photo_url ?? "",
  });

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
    <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-400">
          {error}
        </div>
      )}

      <div>
        <label className={labelClass}>Photo</label>
        <ImageUpload value={form.photo_url} onChange={(url) => setForm({ ...form, photo_url: url })} />
      </div>

      <button
        type="submit"
        disabled={isPending || !form.photo_url}
        className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-5 py-2.5 text-sm transition-colors disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Photo"}
      </button>
    </form>
  );
}
