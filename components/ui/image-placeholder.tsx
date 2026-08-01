import { Building2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Styled placeholder for photography slots. Replace with next/image pointing
 * to licensed stock photography or client-supplied assets before launch —
 * do not hotlink unlicensed web images into production.
 */
export function ImagePlaceholder({
  label,
  icon: Icon = Building2,
  className,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  icon?: LucideIcon;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card bg-gradient-to-br from-primary/40 via-bg-card to-bg-dark flex items-center justify-center",
        aspect,
        className
      )}
    >
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />
      <div className="relative flex flex-col items-center gap-3 text-text-muted px-6 text-center">
        <Icon size={32} className="text-gold/70" />
        <span className="text-xs uppercase tracking-widest">{label}</span>
      </div>
    </div>
  );
}
