import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-medium transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-bg-dark hover:bg-gold-hover shadow-gold hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border border-white/20 text-text hover:border-gold hover:text-gold bg-transparent",
        ghost: "text-text-secondary hover:text-gold",
      },
      size: {
        sm: "px-5 py-2 text-sm",
        md: "px-7 py-3.5 text-sm md:text-base",
        lg: "px-9 py-4 text-base md:text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
}

export function Button({ children, href, variant, size, className, onClick, target }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
