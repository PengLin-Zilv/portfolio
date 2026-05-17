import { PROJECTS } from "@/lib/projects";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <h2
          id="projects-heading"
          className="mb-12 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Projects
        </h2>

        <ul className="border-t border-border">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
}