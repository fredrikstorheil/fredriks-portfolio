import type { ReactElement } from "react";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function renderProjectText(text: string) {
  const lines = text.split("\n");
  const elements: ReactElement[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let elementIndex = 0;

  const flushParagraph = () => {
    if (paragraphLines.length === 0) {
      return;
    }

    elements.push(
      <p key={`p-${elementIndex}`} className="projectBodyText">
        {paragraphLines.join(" ")}
      </p>
    );
    elementIndex += 1;
    paragraphLines = [];
  };

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    elements.push(
      <ul key={`list-${elementIndex}`} className="projectList">
        {listItems.map((item, idx) => (
          <li key={`item-${elementIndex}-${idx}`} className="projectListItem">
            {item}
          </li>
        ))}
      </ul>
    );
    elementIndex += 1;
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    const headingMatch = trimmed.match(/^\*\*(.+)\*\*$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      elements.push(
        <h3 key={`h-${elementIndex}`} className="projectSectionTitle">
          {headingMatch[1]}
        </h3>
      );
      elementIndex += 1;
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmed.slice(2));
      return;
    }

    paragraphLines.push(trimmed);
  });

  flushParagraph();
  flushList();

  return elements;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={`projectPage projectPage-${project.slug}`}>
      <div className="projectContent">
        <h1 className="projectPageTitle">{project.title}</h1>
        <p className="projectBodyText">{project.subtitle}</p>

        <div className="project-hero">
          <figure
            className={`project-hero__media projectMainPhoto projectMedia-${project.slug}`}
            role="img"
            aria-label={`${project.title} hovedbilde`}
          >
            <img
              className="projectMediaLogo projectMediaLogo--main"
              src={project.logo}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </figure>
        </div>

        {project.heroText ? (
          <div className="projectTextBlock">
            {renderProjectText(project.heroText)}
          </div>
        ) : null}

        {[
          ...(project.context ?? []),
          ...(project.role ?? []),
          ...(project.process ?? []),
          ...(project.outcome ?? []),
        ].map((text, idx) => (
          <section key={idx} className="projectBlock">
            <div className="projectPhoto" aria-hidden="true">
              <span className="projectPhotoLabel">Bilde</span>
            </div>
            <div className="projectTextBlock">{renderProjectText(text)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
