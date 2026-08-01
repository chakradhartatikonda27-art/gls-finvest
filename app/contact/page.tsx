import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a consultation with GLS Finvest Pvt Ltd — real estate and investment advisory in Visakhapatnam, Andhra Pradesh.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Next Move"
        description="Whether it's a property, a plot, or a portfolio — book a no-obligation consultation with our team."
      />
      <section className="py-24 bg-bg-dark">
        <Container wide className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ContactForm />
          <ContactInfo />
        </Container>
      </section>
    </>
  );
}
