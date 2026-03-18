import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "@/components/icons";
import { projects } from "@/data/projects";
import { getPublicImageMetadata } from "@/lib/public-image-metadata";

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
              {project.logo
                ? (() => {
                    const metadata = getPublicImageMetadata(project.logo);

                    return (
                      <Image
                        className="projectMediaLogo"
                        src={project.logo}
                        alt=""
                        aria-hidden="true"
                        width={metadata.width}
                        height={metadata.height}
                        sizes="(min-width: 768px) 220px, 160px"
                        unoptimized={metadata.unoptimized}
                      />
                    );
                  })()
                : null}
            </div>

            <div className="projectText">
              <div className="projectTitleRow">
                <h3 className="projectTitle">{project.title}</h3>
                <span className="projectArrow" aria-hidden="true">
                  <ArrowRight size={18} strokeWidth={2.2} />
                </span>
              </div>
              {project.description ? (
                <p className="projectDescription">{project.description}</p>
              ) : null}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
