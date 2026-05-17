import { ArrowUpRight } from "lucide-react";
import type { ResearchEntry } from "@/lib/research";

export function ResearchCard({ entry }: { entry: ResearchEntry }) {
  return (
    <li className="border-b border-border py-10 last:border-b-0">
      <article>
        {/* Top row: lab + affiliation on left, period + current on right */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {entry.lab}
            <span className="ml-2 font-normal text-muted">
              · {entry.affiliation}
            </span>
          </h3>

          <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted">
            <span>{entry.period}</span>
            {entry.current && (
              <>
                <span aria-hidden="true">·</span>
                <span>Current</span>
              </>
            )}
          </div>
        </div>

        {/* Role + advisor */}
        <p className="mt-2 text-sm text-muted">
          {entry.role} with {entry.advisor}
        </p>

        {/* Threads */}
        {entry.threads.length > 0 && (
          <ul role="list" className="mt-5 space-y-2">
            {entry.threads.map((thread, i) => (
              <li
                key={`${entry.slug}-thread-${i}`}
                className="flex gap-3 text-foreground/80"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted"
                />
                <span className="leading-relaxed">{thread}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
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