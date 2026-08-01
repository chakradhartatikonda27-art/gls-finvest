import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  /** wide = 1440px site max-width (e.g. full-bleed hero backgrounds); default = 1280px content width */
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-16",
        wide ? "max-w-site" : "max-w-content",
        className
      )}
    >
      {children}
    </div>
  );
}
