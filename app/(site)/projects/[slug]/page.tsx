import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  BehaviorLoopModel,
  BusinessValueChain,
  JourneyRail,
  KeyScreensRow,
  ProblemMap,
} from "@/components/case-diagrams";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type RenderSection = {
  title: string;
  body?: string;
  bullets?: string[];
  subSections: {
    title: string;
    body?: string;
    bullets?: string[];
  }[];
};

const toAnchorId = (title: string, index: number) => {
  const normalizedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `project-section-${normalizedTitle || index + 1}-${index + 1}`;
};

const creditBuilderProblemMapItems = [
  "Lite erfaring med kreditt",
  "Usikkerhet rundt betaling",
  "Minimumsbetaling blir standardvalg",
  "Stress og lavere kredittscore",
];

const creditBuilderLoopNodes = ["Mål", "Handling", "Belønning", "Trygghet"];
const creditBuilderLoopExamples = [
  {
    label: "Mål",
    value: "Goal Engine",
  },
  {
    label: "Handling",
    value: "Planlagt nedbetaling + round ups",
  },
  {
    label: "Belønning",
    value: "Tier-progresjon",
  },
  {
    label: "Trygghet",
    value: "Buffer (Cushion)",
  },
];

const creditBuilderJourneySteps = [
  "Søknad og onboarding",
  "Dashboard",
  "Medlemskap",
  "Kredittscore og mål",
  "Kortkontroll",
];

const creditBuilderValueChainSteps = [
  "Ansvarlig bruk",
  "Lavere misligholdsrisiko",
  "Høyere engasjement",
  "Økt livstidsverdi",
];

const creditBuilderKeyScreens = [
  {
    title: "Goal Engine",
    caption: "Setter kredittscore-mål med neste anbefalte handling.",
  },
  {
    title: "Cushion / buffer",
    caption: "Bygger buffer automatisk med round ups for lavere betalingsstress.",
  },
  {
    title: "Tier progresjon",
    caption: "Synlig progresjon fra Rookie til Star med perks og cashback.",
  },
];

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const heroIntro = project.story.sections.find(
    (section) => section.title === "Kort fortalt",
  )?.body;
  const sourceSections = project.story.sections.filter(
    (section) => section.title !== "Kort fortalt",
  );
  const hasHeroMockups = Boolean(project.mockups?.length);
  const isCreditBuilder = project.slug === "riseup";

  const sections: RenderSection[] = [];

  for (let i = 0; i < sourceSections.length; i += 1) {
    const current = sourceSections[i];
    const isDeliverablesRoot =
      current.title === "Hva jeg leverte" || current.title === "Leveranse";

    if (!isDeliverablesRoot) {
      sections.push({
        title: current.title,
        body: current.body,
        bullets: current.bullets,
        subSections: [],
      });
      continue;
    }

    const grouped: RenderSection = {
      title: current.title,
      body: current.body,
      bullets: current.bullets,
      subSections: [],
    };

    let cursor = i + 1;
    while (
      cursor < sourceSections.length &&
      sourceSections[cursor].title !== "Bevis og impact"
    ) {
      grouped.subSections.push(sourceSections[cursor]);
      cursor += 1;
    }

    sections.push(grouped);
    i = cursor - 1;
  }

  const sectionsWithIds = sections.map((section, index) => ({
    ...section,
    id: toAnchorId(section.title, index),
  }));

  return (
    <div className={`projectPage projectPage-${project.slug}`}>
      <div className="projectContent">
        <header className="projectHeroCard" aria-labelledby="project-page-title">
          <div className="projectHeroText">
            <p className="projectHeroEyebrow">Prosjekt</p>
            <h1 id="project-page-title" className="projectPageTitle">
              {project.title}
            </h1>
            {heroIntro ? <p className="projectHeroIntro">{heroIntro}</p> : null}
          </div>

          <figure
            className={`projectHeroVisual projectMedia projectMedia-${project.slug}`}
            role="img"
            aria-label={`${project.title} prosjektillustrasjon`}
          >
            {hasHeroMockups
              ? (
                  <>
                    {project.mockups?.slice(0, 2).map((mockup, index) => {
                      const floatClass =
                        index === 0
                          ? "projectMediaFloat projectMediaFloat--score"
                          : "projectMediaFloat projectMediaFloat--tier";

                      return (
                        <img
                          key={mockup.src}
                          className={floatClass}
                          src={mockup.src}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                        />
                      );
                    })}
                  </>
                )
              : project.logo
              ? (
                  <img
                    className="projectMediaLogo projectMediaLogo--hero"
                    src={project.logo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                )
              : (
                  <span className="projectHeroMonogram" aria-hidden="true">
                    {project.title}
                  </span>
                )}
          </figure>
        </header>

        {sectionsWithIds.map((section) => {
          const isDeliverablesSection = section.subSections.length > 0;
          const sectionClassName = isDeliverablesSection
            ? "projectTextBlock projectSectionCard projectSectionCard--deliverables"
            : "projectTextBlock projectSectionCard";

          return (
            <section
              key={`${project.slug}-${section.id}`}
              className={sectionClassName}
              aria-labelledby={section.id}
            >
              <h2 id={section.id} className="projectSectionTitle">
                {section.title}
              </h2>

              {section.body ? <p className="projectBodyText">{section.body}</p> : null}

              {isCreditBuilder && section.title === "Kontekst"
                ? (
                    <ProblemMap
                      items={creditBuilderProblemMapItems}
                      subtitle="Hvorfor Emerging Prime ofte faller i et dårlig mønster"
                    />
                  )
                : null}

              {section.bullets?.length ? (
                <ul className="projectBulletList">
                  {section.bullets.map((item, itemIndex) => (
                    <li key={`${section.id}-${itemIndex}`} className="projectBulletItem">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.subSections.length
                ? (
                    <div className="projectDeliverablesGrid">
                      {section.subSections.map((subSection, subSectionIndex) => (
                        <div
                          key={`${section.id}-${subSection.title}-${subSectionIndex}`}
                          className="projectSubsection"
                        >
                          <h3 className="projectSubsectionTitle">{subSection.title}</h3>

                          {subSection.body ? (
                            <p className="projectBodyText">{subSection.body}</p>
                          ) : null}

                          {isCreditBuilder &&
                              subSection.title === "Modell for mestring og kontroll"
                            ? (
                                <BehaviorLoopModel
                                  nodes={creditBuilderLoopNodes}
                                  examples={creditBuilderLoopExamples}
                                />
                              )
                            : null}

                          {isCreditBuilder && subSection.title === "Produktstruktur"
                            ? <JourneyRail steps={creditBuilderJourneySteps} />
                            : null}

                          {isCreditBuilder && subSection.title === "Forretningslogikk"
                            ? (
                                <BusinessValueChain
                                  steps={creditBuilderValueChainSteps}
                                  note="Dette ble dokumentert som hypoteser i konseptet for å koble brukeradferd til risiko og verdi."
                                />
                              )
                            : null}

                          {subSection.bullets?.length ? (
                            <ul className="projectBulletList">
                              {subSection.bullets.map((item, itemIndex) => (
                                <li
                                  key={`${section.id}-${subSectionIndex}-${itemIndex}`}
                                  className="projectBulletItem"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : null}

                          {isCreditBuilder &&
                              subSection.title === "Mekanismer for mestring og kontroll"
                            ? <KeyScreensRow items={creditBuilderKeyScreens} />
                            : null}
                        </div>
                      ))}
                    </div>
                  )
                : null}
            </section>
          );
        })}
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

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Fredrik Storheil`,
    description: project.subtitle,
  };
}
