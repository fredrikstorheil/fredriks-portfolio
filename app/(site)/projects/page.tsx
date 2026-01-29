import { ProjectCards } from "@/components/projects/project-cards";

export default function ProjectsPage() {
  return (
    <section className="projectsSection" aria-labelledby="projects-title">
      <h1 id="projects-title" className="sectionTitle">
        Prosjekter
      </h1>

      <ProjectCards />
    </section>
  );
}
