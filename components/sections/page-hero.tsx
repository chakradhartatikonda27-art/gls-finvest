import { Container } from "@/components/ui/container";
import { AnimatedBackground } from "@/components/graphics/animated-background";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="relative pt-40 pb-20 bg-brand-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-overlay" />
      <AnimatedBackground />
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
      <Container wide className="relative z-10">
        <span className="text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base text-white/75 max-w-2xl leading-relaxed">{description}</p>
        )}
      </Container>
    </section>
  );
}
