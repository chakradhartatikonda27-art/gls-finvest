"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Home, Info, Briefcase, Building2, TrendingUp, Image as ImageIcon, Phone as PhoneIcon, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const navIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/about": Info,
  "/services": Briefcase,
  "/projects": Building2,
  "/investment": TrendingUp,
  "/gallery": ImageIcon,
  "/contact": PhoneIcon,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <Container wide className="flex items-center justify-between">
        <Link href="/" className="font-heading text-xl md:text-2xl font-bold tracking-tight text-text">
          GLS <span className="text-gradient-gold">Finvest</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const Icon = navIcons[link.href];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors py-1",
                  active ? "text-gold" : "text-text-secondary hover:text-text"
                )}
              >
                <Icon size={15} className={cn("transition-colors", active ? "text-gold" : "text-text-muted group-hover:text-gold")} />
                {link.label}
                <span
                  className={cn(
                    "absolute left-0 -bottom-0.5 h-[1.5px] bg-gold transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Book Consultation
          </Button>
        </div>

        <button
          className="lg:hidden text-text"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const Icon = navIcons[link.href];
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 py-3 text-base font-medium border-b border-white/5 last:border-0",
                      active ? "text-gold" : "text-text-secondary"
                    )}
                  >
                    <Icon size={18} className={active ? "text-gold" : "text-text-muted"} />
                    {link.label}
                  </Link>
                );
              })}
              <Button href="/contact" className="mt-4 w-full">
                Book Consultation
              </Button>
              <a href={`tel:${site.phone}`} className="mt-2 text-center text-sm text-text-secondary py-2">
                Or call {site.phoneDisplay}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
