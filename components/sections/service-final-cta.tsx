import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/graphics/animated-background";
import { site } from "@/lib/data/site";

export function ServiceFinalCta() {
  return (
    <section className="relative py-20 bg-brand-gradient overflow-hidden">
      <AnimatedBackground />
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
      <Container wide className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Need Expert Guidance?</h2>
        <p className="mt-3 text-white/75">Talk to our investment experts today.</p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button href="/contact" size="lg">
            Book Consultation
          </Button>
          <Button href={`tel:${site.phone}`} variant="outline" size="lg">
            <Phone size={18} /> Call Now
          </Button>
          <Button href={`https://wa.me/${site.whatsapp}`} target="_blank" variant="outline" size="lg">
            <MessageCircle size={18} /> WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
