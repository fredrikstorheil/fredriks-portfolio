import Link from "next/link";

import { projects } from "@/data/projects";

export function ProjectCards() {
  return (
    <div className="projectList">
      {projects.map((project) => (
        <article key={project.slug} className="projectCard">
          <Link href={`/projects/${project.slug}`} className="projectLink">
            <div className="projectText">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectSubtitle">{project.subtitle}</p>
              <span className="projectCta">Se case →</span>
            </div>
            <div
              className={`projectMedia projectMedia-${project.slug}`}
              aria-hidden="true"
            />
          </Link>
        </article>
      ))}
    </div>
  );
}
