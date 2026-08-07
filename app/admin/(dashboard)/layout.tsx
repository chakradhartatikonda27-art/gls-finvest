import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/admin/logout-button";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/hero", label: "Hero Photos" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/team", label: "Team" },
  { href: "/admin/testimonials", label: "Testimonials" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/news", label: "News" },
  { href: "/admin/settings", label: "Site Settings" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#0B1220] flex">
      <aside className="w-60 shrink-0 border-r border-white/10 flex flex-col">
        <div className="p-5 border-b border-white/10">
          <span className="font-bold text-white">GLS Admin</span>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <p className="px-3 text-xs text-white/40 truncate mb-2">{user.email}</p>
          <LogoutButton />
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
