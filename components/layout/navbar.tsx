"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md py-2.5" : "py-4"
      )}
    >
      <Container wide className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.jpg"
            alt="GLS Finvest Pvt Ltd"
            width={72}
            height={72}
            className="rounded-lg shrink-0"
            priority
          />
          <span className="hidden sm:block font-heading text-xl md:text-2xl font-extrabold tracking-tight leading-none">
            <span className="text-text">GLS</span>{" "}
            <span className="text-gradient-gold">Finvest</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const Icon = navIcons[link.href];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium tracking-wide px-4 py-2.5 rounded-lg transition-colors",
                  active
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:text-primary hover:bg-bg-section"
                )}
              >
                <Icon size={15} className={active ? "text-white" : "text-text-muted"} />
                {link.label}
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
            className="lg:hidden overflow-hidden bg-white border-t border-border"
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
                      "flex items-center gap-3 py-3 px-3 rounded-lg text-base font-medium",
                      active ? "bg-primary text-white" : "text-text-secondary"
                    )}
                  >
                    <Icon size={18} className={active ? "text-white" : "text-text-muted"} />
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
