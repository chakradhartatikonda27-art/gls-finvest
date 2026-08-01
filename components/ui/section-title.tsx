import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl md:text-3xl lg:text-[2.25rem] font-heading font-bold leading-tight",
          light ? "text-primary" : "text-text"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-sm md:text-base leading-relaxed",
            light ? "text-primary/70" : "text-text-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
