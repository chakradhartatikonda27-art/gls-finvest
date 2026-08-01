import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { stats } from "@/lib/data/content";

export function StatsBand() {
  return (
    <section className="bg-bg-section border-y border-border py-14">
      <Container wide className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-gold">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-text-secondary">{s.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}
