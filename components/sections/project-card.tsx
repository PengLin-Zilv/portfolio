import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { caseStudy, live, repo } = project.links;

  return (
    <li className="border-b border-border py-10 last:border-b-0">
      <article>
        {/* Title row */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight">
            {caseStudy ? (
              <Link
                href={caseStudy}
                className="group inline-flex items-baseline gap-1.5 text-foreground transition-colors hover:text-accent"
              >
                {project.title}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 self-center text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </Link>
            ) : (
              <span className="text-foreground">{project.title}</span>
            )}
          </h3>

          <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted">
            <span>{project.year}</span>
            {project.status && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.status}</span>
              </>
            )}
          </div>
        </div>

        {/* Summary */}
        <p className="mt-3 text-foreground/80">{project.summary}</p>

        {/* Optional paragraph */}
        {project.description && (
          <p className="mt-3 max-w-content text-sm leading-relaxed text-foreground/70">
            {project.description}
          </p>
        )}

        {/* Stack */}
        {project.stack.length > 0 && (
          <ul
            aria-label="Tech stack"
            className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted"
          >
            {project.stack.map((tech, i) => (
              <li key={`${project.slug}-${i}`} className="inline-flex items-center">
                {tech}
                {i < project.stack.length - 1 && (
                  <span aria-hidden="true" className="ml-3 select-none">·</span>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* External link row */}
        {(live || repo) && (
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Live
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted underline underline-offset-4 transition-colors hover:text-foreground"
              >
                GitHub
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </article>
    </li>
  );
}