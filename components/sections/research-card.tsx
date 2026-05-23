import { ArrowUpRight } from "lucide-react";
import type { ResearchEntry } from "@/lib/research";

export function ResearchCard({ entry }: { entry: ResearchEntry }) {
  return (
    <li className="relative pl-7">
      <span
        aria-hidden="true"
        className="absolute -left-[5px] top-11 h-2.5 w-2.5 rounded-full border border-accent bg-background"
      />
      <article className="border-b border-border py-10 last:border-b-0">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {entry.lab}
            </h3>
            <p className="mt-1 text-sm text-muted">{entry.affiliation}</p>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
            <span>{entry.period}</span>
            {entry.current && (
              <>
                <span aria-hidden="true">/</span>
                <span>Current</span>
              </>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm text-muted">
          {entry.role} with {entry.advisor}
        </p>

        {entry.threads.length > 0 && (
          <ul role="list" className="mt-6 grid gap-3 md:grid-cols-2">
            {entry.threads.map((thread, i) => (
              <li
                key={`${entry.slug}-thread-${i}`}
                className="rounded border border-border bg-foreground/[0.025] p-4 text-sm leading-relaxed text-foreground/80"
              >
                {thread}
              </li>
            ))}
          </ul>
        )}

        {entry.links && entry.links.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {entry.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}
      </article>
    </li>
  );
}
