import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/data/site";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl2 overflow-hidden border border-border">
        {/* Swap with an embedded Google Map iframe using the office's actual coordinates before launch */}
        <div className="aspect-[4/3] bg-bg-card flex flex-col items-center justify-center gap-3 text-text-muted">
          <MapPin size={32} className="text-gold" />
          <span className="text-xs uppercase tracking-widest">Map — Office Location</span>
        </div>
      </div>

      <div className="rounded-card border border-border bg-bg-card p-7 space-y-5">
        <div className="flex gap-4">
          <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
          <div>
            <div className="font-heading font-semibold text-text text-sm">Office Address</div>
            <div className="text-sm text-text-secondary mt-1">
              {site.address.line1}<br />{site.address.line2}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Phone size={20} className="text-gold shrink-0 mt-0.5" />
          <div>
            <div className="font-heading font-semibold text-text text-sm">Phone</div>
            <a href={`tel:${site.phone}`} className="text-sm text-text-secondary mt-1 block hover:text-gold">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <Mail size={20} className="text-gold shrink-0 mt-0.5" />
          <div>
            <div className="font-heading font-semibold text-text text-sm">Email</div>
            <a href={`mailto:${site.email}`} className="text-sm text-text-secondary mt-1 block hover:text-gold">
              {site.email}
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <Clock size={20} className="text-gold shrink-0 mt-0.5" />
          <div>
            <div className="font-heading font-semibold text-text text-sm">Business Hours</div>
            <div className="text-sm text-text-secondary mt-1 space-y-0.5">
              {site.hours.map((h) => (
                <div key={h.day}>{h.day}: {h.time}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
