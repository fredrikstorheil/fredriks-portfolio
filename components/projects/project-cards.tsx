import Link from "next/link";

import { projects } from "@/data/projects";
import { ArrowRight } from "@/components/icons";

export function ProjectCards() {
  return (
    <div className="projectList">
      {projects.map((project) => (
        <article key={project.slug} className="projectCard">
          <Link href={`/projects/${project.slug}`} className="projectLink">
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
            <div className="projectText">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectSubtitle">{project.subtitle}</p>
              <span className="projectCta">
                Se case
                <ArrowRight
                  className="projectCtaIcon"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
