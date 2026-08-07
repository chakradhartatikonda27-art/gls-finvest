"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SocialFloatingBar } from "@/components/layout/social-floating-bar";
import { BackToTop } from "@/components/layout/back-to-top";
import { ScrollProgress } from "@/components/layout/scroll-progress";

// The public marketing site (Navbar, Footer, floating buttons) should never
// wrap the /admin panel — that's a completely separate app shell with its
// own sidebar layout. This checks the current path and skips all public
// chrome entirely for anything under /admin.
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <SocialFloatingBar />
      <BackToTop />
    </>
  );
}
