import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/container";

const EMAIL = "linpeng2027@gmail.com";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-24 pb-32 sm:pt-32 sm:pb-40"
    >
      <Container>
        {/* Status pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
          <span className="font-mono text-xs text-muted">
            Open to AI/SWE & Research Internships for Spring/Summer 2027
          </span>
        </div>

        {/* Name */}
        <h1
          id="hero-heading"
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {`Peng Lin`}
        </h1>

        {/* Role line */}
        <p className="mt-4 text-xl text-muted sm:text-2xl">
          {`CS at Syracuse · Research Intern at Leibniz Lab`}
        </p>

        {/* Paragraph */}
        <p className="mt-8 max-w-content text-base leading-relaxed text-foreground/80 sm:text-lg">
          {`I'm currently working on LLM reasoning, and vulnerability reasoning system at Syracuse's Leibniz Lab. `}
          {/* Past projects: Watch-To-Read (a YouTube video to eBook pipeline) on Google Cloud Run and a Flask + React freelance marketplace for university students. */}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
          >
            View projects
            <ArrowDown
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            className="text-muted underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Email me
          </a>
        </div>
      </Container>
    </section>
  );
}