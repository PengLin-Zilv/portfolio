import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <h2
          id="about-heading"
          className="mb-12 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          About
        </h2>

        {/* Narrative paragraph */}
        <p className="max-w-content text-base leading-relaxed text-foreground/80 sm:text-lg">
          {`What I gravitate toward is reasoning you can verify — adding structure where things would otherwise stay impressionistic. 
          I want to work on something provable, or prove something works.`}
        </p>

        {/* Education */}
        <div className="mt-12">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
            Education
          </h3>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="text-foreground">Syracuse University</p>
            <p className="font-mono text-xs text-muted">Expected May 2027</p>
          </div>
          <p className="mt-1 text-sm text-foreground/80">
            B.S. Computer Science, Minor in Mathematics · GPA 3.788
          </p>

          <a
            href="/PengLin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Resume
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Recognition */}
        <div className="mt-12">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
            Recognition
          </h3>
          <ul role="list" className="space-y-2">
            <li className="flex gap-3 text-foreground/80">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted"
              />
              <span className="leading-relaxed">{`Tan Family Education Foundation Scholarship`}</span>
            </li>
            <li className="flex gap-3 text-foreground/80">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted"
              />
              <span className="leading-relaxed">{`Leadership Scholar`}</span>
            </li>
            <li className="flex gap-3 text-foreground/80">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted"
              />
              <span className="leading-relaxed">{`Success Scholar`}</span>
            </li>
            {/* Add or remove <li>s as needed. If you have no recognition to list, comment out the whole div above. */}
          </ul>
        </div>

        {/* { Outside Work } */}
        
        <div className="mt-12">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
            Outside Work
          </h3>
          <p className="max-w-content text-foreground/80">
            {`I enjoy going to gym, rock climb, and exploring food spots.`}
          </p>
        </div>
       
      </Container>
    </section>
  );
}