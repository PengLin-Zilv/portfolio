import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";

const FACTS = [
  { label: "Degree", value: "B.S. CS", detail: "Minor in Mathematics" },
  { label: "Graduation", value: "May 2027", detail: "Syracuse University" },
  { label: "GPA", value: "3.788", detail: "Current academic record" },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <h2
              id="about-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              About
            </h2>

            <p className="mt-8 max-w-content text-base leading-relaxed text-foreground/80 sm:text-lg">
              What I gravitate toward is reasoning you can verify - adding
              structure where things would otherwise stay impressionistic. I
              want to work on something provable, or prove something works.
            </p>

            <div className="mt-12">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                Recognition
              </h3>
              <ul role="list" className="grid gap-3 sm:grid-cols-3">
                <li className="rounded border border-border bg-foreground/[0.025] p-4 text-sm text-foreground/80">
                  Tan Family Education Foundation Scholarship
                </li>
                <li className="rounded border border-border bg-foreground/[0.025] p-4 text-sm text-foreground/80">
                  Leadership Scholar
                </li>
                <li className="rounded border border-border bg-foreground/[0.025] p-4 text-sm text-foreground/80">
                  Success Scholar
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                Outside Work
              </h3>
              <p className="max-w-content text-foreground/80">
                I enjoy going to the gym, rock climbing, and exploring food
                spots.
              </p>
            </div>
          </div>

          <aside aria-label="Education summary" className="lg:pt-14">
            <div className="rounded border border-border bg-foreground/[0.025] p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                Education
              </h3>

              <div className="mt-5 space-y-3">
                {FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-t border-border pt-3 first:border-t-0 first:pt-0"
                  >
                    <p className="font-mono text-xs text-muted">{fact.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                      {fact.value}
                    </p>
                    <p className="mt-1 text-sm text-foreground/70">{fact.detail}</p>
                  </div>
                ))}
              </div>

              <a
                href="/PengLin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Resume
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
