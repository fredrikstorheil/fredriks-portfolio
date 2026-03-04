import Link from "next/link";

import { projects } from "@/data/projects";
import { ArrowRight } from "@/components/icons";

type ProjectCardsProps = {
  showSelectionReason?: boolean;
};

export function ProjectCards({ showSelectionReason = false }: ProjectCardsProps) {
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

            <div className="projectSignals" aria-label="Prosjektsignaler">
              <span className="projectSignalChip">{project.signals.domain}</span>
              <span className="projectSignalChip">{project.signals.caseType}</span>
              <span className="projectSignalChip">{project.signals.keyStrength}</span>
            </div>

            <div className="projectText">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectSubtitle">{project.subtitle}</p>

              {showSelectionReason && project.selectionReason ? (
                <p className="projectSelectionReason">
                  <span className="projectSelectionLabel">Hvorfor dette caset:</span>{" "}
                  {project.selectionReason}
                </p>
              ) : null}

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
