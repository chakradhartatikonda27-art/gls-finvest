"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function MobileNav({
  navItems,
  userEmail,
}: {
  navItems: { href: string; label: string }[];
  userEmail: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-[#0B1220] sticky top-0 z-40">
        <span className="font-bold text-white">GLS Admin</span>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-white/80 hover:text-white p-1"
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative w-64 bg-[#0B1220] border-r border-white/10 flex flex-col h-full">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <span className="font-bold text-white">GLS Admin</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white/60 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-3 border-t border-white/10">
              <p className="px-3 text-xs text-white/40 truncate">{userEmail}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
