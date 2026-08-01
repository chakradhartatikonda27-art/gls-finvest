import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-gold transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gold">{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight size={14} className="text-text-muted" />}
        </span>
      ))}
    </nav>
  );
}
