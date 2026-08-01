import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/graphics/animated-background";
import { site } from "@/lib/data/site";

export function CtaBand() {
  return (
    <section className="relative py-20 bg-brand-gradient overflow-hidden">
      <AnimatedBackground />
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
      <Container wide className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Ready to Build Your Future With GLS?
          </h2>
          <p className="mt-3 text-white/75 max-w-lg">
            Book a consultation with our advisory team — no obligation, just clarity on your next move.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/contact" size="lg">
            Book Consultation
          </Button>
          <Button
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            variant="outline"
            size="lg"
          >
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
