"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/data/site";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Residential", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Request — ${form.interest}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl bg-bg-card border border-border px-4 py-3.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-gold/60 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="glass rounded-xl2 p-8 md:p-10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          required
          placeholder="Full Name"
          className={inputClass}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          className={inputClass}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <input
        required
        type="email"
        placeholder="Email Address"
        className={inputClass}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <select
        className={inputClass}
        value={form.interest}
        onChange={(e) => setForm({ ...form, interest: e.target.value })}
      >
        {["Residential", "Commercial", "Villas", "Open Plots", "Investment Advisory", "Venture & Growth Investment"].map(
          (opt) => (
            <option key={opt} value={opt}>{opt}</option>
          )
        )}
      </select>
      <textarea
        placeholder="Tell us about what you're looking for"
        rows={4}
        className={inputClass}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <Button size="lg" className="w-full justify-center">
        Send Message <Send size={18} />
      </Button>
    </form>
  );
}
