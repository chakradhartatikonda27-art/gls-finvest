import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

const sections = [
  { href: "/admin/hero", label: "Hero Photos", table: "hero_images" },
  { href: "/admin/projects", label: "Projects", table: "projects" },
  { href: "/admin/services", label: "Services", table: "services" },
  { href: "/admin/team", label: "Team Members", table: "team_members" },
  { href: "/admin/testimonials", label: "Testimonials", table: "testimonials" },
  { href: "/admin/gallery", label: "Gallery Items", table: "gallery_items" },
  { href: "/admin/news", label: "News Items", table: "news_items" },
];

export default async function AdminDashboard() {
  const supabase = await createClient();

  const counts = await Promise.all(
    sections.map(async (s) => {
      const { count } = await supabase.from(s.table).select("*", { count: "exact", head: true });
      return { ...s, count: count ?? 0 };
    })
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <p className="mt-1 text-sm text-white/60">Manage every piece of content on the live site.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {counts.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-xl bg-[#1A2435] border border-white/10 p-5 hover:border-[#C79B42]/40 transition-colors"
          >
            <div className="text-3xl font-bold text-[#C79B42]">{s.count}</div>
            <div className="mt-1 text-sm text-white/70">{s.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
