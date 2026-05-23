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
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Research
        </h2>

        <p className="mt-4 max-w-content text-sm leading-relaxed text-foreground/70 sm:text-base">
          Current and recent work across neurosymbolic reasoning, vulnerability
          analysis, human perception studies, and simulation.
        </p>

        <ul className="mt-12 border-l border-border">
          {RESEARCH.map((entry) => (
            <ResearchCard key={entry.slug} entry={entry} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
