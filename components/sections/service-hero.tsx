import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/graphics/animated-background";

export function ServiceHero({ title, tagline }: { title: string; tagline: string }) {
  return (
    <section className="relative pt-36 pb-20 bg-brand-gradient overflow-hidden">
      <div className="absolute inset-0 bg-hero-overlay" />
      <AnimatedBackground />
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
      <Container wide className="relative z-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: title }]} />
        <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-text max-w-3xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-gold max-w-2xl font-heading">{tagline}</p>
        <Button href="/contact" size="lg" className="mt-8">
          Book Consultation
        </Button>
      </Container>
    </section>
  );
}
