import Link from "next/link";

import { projects } from "@/data/projects";

export function ProjectCards() {
  const creditBuilderSubtitle = "Kredittkort for førstegangsbrukere";

  return (
    <div className="projectList">
      {projects.map((project) => (
        <article key={project.slug} className="projectCard">
          <Link href={`/projects/${project.slug}`} className="projectLink">
            <div className="projectText">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectSubtitle">
                {project.slug === "credit-builder"
                  ? creditBuilderSubtitle
                  : project.subtitle}
              </p>
              <span className="projectCta">Se case →</span>
            </div>
            <div
              className={`projectMedia projectMedia-${project.slug}`}
              aria-hidden="true"
            >
              <img
                className="projectMediaLogo"
                src={project.logo}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
