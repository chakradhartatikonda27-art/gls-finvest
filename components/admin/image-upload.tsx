"use client";

import { useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

export function ImageUpload({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);

    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { error: uploadError } = await supabase.storage.from("photos").upload(fileName, file);
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("photos").getPublicUrl(fileName);
      onChange(data.publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  const inputClass =
    "w-full rounded-lg bg-[#0B1220] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C79B42]";

  return (
    <div>
      <div className="flex gap-3 items-start">
        {value && (
          <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/10 shrink-0">
            <Image src={value} alt="" fill sizes="64px" className="object-cover" />
          </div>
        )}
        <div className="flex-1 space-y-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
            placeholder="https://... (or upload a file below)"
          />
          <label className="inline-flex items-center gap-2 text-xs text-[#C79B42] hover:underline cursor-pointer">
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" disabled={uploading} />
            {uploading ? "Uploading..." : "Upload a photo from your computer"}
          </label>
          {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
      </div>
    </div>
  );
}
