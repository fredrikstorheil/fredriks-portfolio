import type { Metadata } from "next";
import type { ReactElement } from "react";
import { notFound } from "next/navigation";

import {
  ArtifactsGallery,
  BuildPlan,
  CaseHeader,
  CaseSection,
  DataModel,
  ExceptionsList,
  FindingsGrid,
  FlowMap,
  ScopeMatrix,
  Scoreboard,
} from "@/components/case";
import { getProjectBySlug, projects, type Project } from "@/data/projects";

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

function renderLegacyContent(project: Project) {
  return (
    <>
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
        <div className="projectTextBlock">{renderProjectText(project.heroText)}</div>
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
    </>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseContent = project.caseContent;

  return (
    <div className={`projectPage projectPage-${project.slug}`}>
      <div className="projectContent">
        {caseContent ? (
          <>
            <CaseHeader
              header={caseContent.header}
              media={{
                slug: project.slug,
                title: project.title,
                logo: project.logo,
                mockups: project.mockups,
              }}
            />
            <FindingsGrid findings={caseContent.findings} />
            <Scoreboard kpis={caseContent.kpis} />
            <ScopeMatrix scope={caseContent.scope} />
            <FlowMap flow={caseContent.flow} />
            <ExceptionsList exceptions={caseContent.exceptions} />
            <DataModel dataModel={caseContent.dataModel} />
            <BuildPlan buildPlan={caseContent.buildPlan} />
            <ArtifactsGallery artifacts={caseContent.artifacts} />

            {caseContent.reflection?.length ? (
              <CaseSection
                title="Refleksjon"
                lede="Punkter vi ville ha prioritert enda tidligere i neste iterasjon."
              >
                <ul className="caseReflectionList">
                  {caseContent.reflection.map((item) => (
                    <li key={item} className="caseReflectionItem">
                      {item}
                    </li>
                  ))}
                </ul>
              </CaseSection>
            ) : null}
          </>
        ) : (
          renderLegacyContent(project)
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Fredrik Storheil`,
    description: project.subtitle,
  };
}
