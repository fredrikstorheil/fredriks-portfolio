import Link from "next/link";

import { ArrowRight } from "@/components/icons";
import { projects } from "@/data/projects";

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
              {project.logo ? (
                <img
                  className="projectMediaLogo"
                  src={project.logo}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              ) : null}
            </div>

            <div className="projectText">
              <div className="projectTitleRow">
                <h3 className="projectTitle">{project.title}</h3>
                <span className="projectArrow" aria-hidden="true">
                  <ArrowRight size={18} strokeWidth={2.2} />
                </span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
