import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/graphics/animated-background";

export function ServiceHero({ title, tagline, photo }: { title: string; tagline: string; photo: string }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`${photo}?w=1600&q=75&auto=format&fit=crop`}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/88 to-bg-dark/50" />
      <AnimatedBackground />
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
      <Container wide className="relative z-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: title }]} />
        <h1 className="mt-5 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
          {title}
        </h1>
        <p className="mt-4 text-base text-gold max-w-2xl font-heading">{tagline}</p>
        <Button href="/contact" size="lg" className="mt-8">
          Book Consultation
        </Button>
      </Container>
    </section>
  );
}
