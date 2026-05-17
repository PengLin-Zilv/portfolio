import { RESEARCH } from "@/lib/research";
import { Container } from "@/components/layout/container";
import { ResearchCard } from "./research-card";

export function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <h2
          id="research-heading"
          className="mb-12 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Research
        </h2>

        <ul className="border-t border-border">
          {RESEARCH.map((entry) => (
            <ResearchCard key={entry.slug} entry={entry} />
          ))}
        </ul>
      </Container>
    </section>
  );
}