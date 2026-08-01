import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navLinks, site } from "@/lib/data/site";
import { services } from "@/lib/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-section border-t border-border">
      <Container wide className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="font-heading text-2xl font-bold text-text">
            GLS <span className="text-gradient-gold">Finvest</span>
          </Link>
          <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-xs">
            {site.description}
          </p>
          <div className="mt-6 flex gap-4">
            {[
              { Icon: Linkedin, href: site.social.linkedin },
              { Icon: Instagram, href: site.social.instagram },
              { Icon: Twitter, href: site.social.twitter },
              { Icon: Facebook, href: site.social.facebook },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-text mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-text-secondary hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-text mb-5">Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-text-secondary hover:text-gold transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-text mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <span>{site.address.line1}, {site.address.line2}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container wide className="py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>{site.tagline} · Since {site.founded}</p>
        </Container>
      </div>
    </footer>
  );
}
