"use client";

import { useState, useTransition } from "react";
import { updateSiteSettings, type SiteSettingsInput } from "@/app/admin/(dashboard)/settings/actions";

export function SettingsForm({ initial }: { initial?: Partial<SiteSettingsInput> }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState<SiteSettingsInput>({
    legal_name: initial?.legal_name ?? "",
    tagline: initial?.tagline ?? "",
    hero_headline: initial?.hero_headline ?? "",
    hero_subheadline: initial?.hero_subheadline ?? "",
    description: initial?.description ?? "",
    phone: initial?.phone ?? "",
    email: initial?.email ?? "",
    address_line1: initial?.address_line1 ?? "",
    address_line2: initial?.address_line2 ?? "",
    whatsapp: initial?.whatsapp ?? "",
    linkedin_url: initial?.linkedin_url ?? "",
    instagram_url: initial?.instagram_url ?? "",
    facebook_url: initial?.facebook_url ?? "",
    twitter_url: initial?.twitter_url ?? "",
    youtube_url: initial?.youtube_url ?? "",
  });

  const inputClass =
    "w-full rounded-lg bg-[#0B1220] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C79B42]";
  const labelClass = "block text-xs text-white/60 mb-1.5";
  const sectionClass = "border-t border-white/10 pt-5 mt-5";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaved(false);
    startTransition(async () => {
      try {
        await updateSiteSettings(form);
        setSaved(true);
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
      {saved && (
        <div className="rounded-lg bg-green-500/10 border border-green-500/30 px-3 py-2 text-sm text-green-400">
          Saved — changes are live on the site.
        </div>
      )}

      <div>
        <label className={labelClass}>Legal Name</label>
        <input
          required
          value={form.legal_name}
          onChange={(e) => setForm({ ...form, legal_name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Tagline</label>
        <input
          required
          value={form.tagline}
          onChange={(e) => setForm({ ...form, tagline: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Hero Headline</label>
        <input
          required
          value={form.hero_headline}
          onChange={(e) => setForm({ ...form, hero_headline: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Hero Subheadline</label>
        <textarea
          required
          rows={2}
          value={form.hero_subheadline}
          onChange={(e) => setForm({ ...form, hero_subheadline: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Company Description</label>
        <textarea
          required
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className={inputClass}
        />
      </div>

      <div className={sectionClass}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone</label>
            <input
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>WhatsApp Number (digits only, with country code)</label>
            <input
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className={inputClass}
              placeholder="919000000000"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className={labelClass}>Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Address Line 1</label>
            <input
              required
              value={form.address_line1}
              onChange={(e) => setForm({ ...form, address_line1: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Address Line 2</label>
            <input
              required
              value={form.address_line2}
              onChange={(e) => setForm({ ...form, address_line2: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div className={sectionClass}>
        <label className={labelClass}>Social Links (leave blank to hide)</label>
        <div className="space-y-3">
          <input
            value={form.linkedin_url}
            onChange={(e) => setForm({ ...form, linkedin_url: e.target.value })}
            className={inputClass}
            placeholder="LinkedIn URL"
          />
          <input
            value={form.instagram_url}
            onChange={(e) => setForm({ ...form, instagram_url: e.target.value })}
            className={inputClass}
            placeholder="Instagram URL"
          />
          <input
            value={form.facebook_url}
            onChange={(e) => setForm({ ...form, facebook_url: e.target.value })}
            className={inputClass}
            placeholder="Facebook URL"
          />
          <input
            value={form.twitter_url}
            onChange={(e) => setForm({ ...form, twitter_url: e.target.value })}
            className={inputClass}
            placeholder="Twitter / X URL"
          />
          <input
            value={form.youtube_url}
            onChange={(e) => setForm({ ...form, youtube_url: e.target.value })}
            className={inputClass}
            placeholder="YouTube URL"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-5 py-2.5 text-sm transition-colors disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Settings"}
      </button>
    </form>
  );
}
