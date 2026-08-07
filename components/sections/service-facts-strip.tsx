import { Info } from "lucide-react";
import { Container } from "@/components/ui/container";

type Fact = { label: string; value: string };

export function ServiceFactsStrip({ facts }: { facts: Fact[] }) {
  if (!facts || facts.length === 0) return null;

  const hasRateFact = facts.some((f) => f.value.includes("*"));

  return (
    <section className="py-10 bg-bg-dark border-b border-border">
      <Container wide>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-heading font-semibold uppercase tracking-widest text-gold shrink-0">
            Good to Know
          </span>
          {facts.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-xs md:text-sm"
            >
              <span className="text-text-secondary">{f.label}</span>
              <span className="font-heading font-semibold text-text">{f.value}</span>
            </span>
          ))}
        </div>
        {hasRateFact && (
          <p className="mt-3 flex items-start gap-1.5 text-xs text-text-muted">
            <Info size={13} className="shrink-0 mt-0.5" />
            *Rates are indicative and vary by lender, credit profile, and RBI policy — verify current terms before transacting.
          </p>
        )}
      </Container>
    </section>
  );
}
