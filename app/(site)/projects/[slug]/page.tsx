import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JourneySketchBoard } from "@/components/case/journey-sketch-board";
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

const creditBuilderJourneySketches = [
  {
    step: 1,
    title: "Søknad og onboarding",
    caption:
      "Reduserer usikkerhet tidlig, setter tydelige forventninger og får brukeren raskt i gang med ansvarlig kredittbruk.",
    screens: [
      {
        title: "Home",
        imageSrc: "/images/projects/credit-builder/onboarding/onboarding-1.svg",
        imageAlt: "Onboarding skjerm 1",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/onboarding/onboarding-2.svg",
        imageAlt: "Onboarding skjerm 2",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/onboarding/onboarding-3.svg",
        imageAlt: "Onboarding skjerm 3",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/onboarding/onboarding-4.svg",
        imageAlt: "Onboarding skjerm 4",
      },
    ],
  },
  {
    step: 2,
    title: "Dashboard",
    caption:
      "Gir løpende oversikt over saldo, betalinger og status, slik at brukeren kan ta tryggere valg i hverdagen.",
    screens: [
      {
        title: "Card Management",
        imageSrc: "/images/projects/credit-builder/dashboard/dashboard-1.svg",
        imageAlt: "Dashboard skjerm 1",
      },
      {
        title: "Transactions",
        imageSrc: "/images/projects/credit-builder/dashboard/dashboard-2.svg",
        imageAlt: "Dashboard skjerm 2",
      },
    ],
  },
  {
    step: 3,
    title: "Medlemskap",
    caption:
      "Synliggjør progresjon og belønninger, slik at gode vaner oppleves konkrete og motiverende over tid.",
    screens: [
      {
        title: "Membership Dashboard",
        imageSrc: "/images/projects/credit-builder/membership/membership-1.svg",
        imageAlt: "Medlemskap skjerm 1",
      },
      {
        title: "Reward Points",
        imageSrc: "/images/projects/credit-builder/membership/membership-2.svg",
        imageAlt: "Medlemskap skjerm 2",
      },
      {
        title: "Annual Percentage Rate",
        imageSrc: "/images/projects/credit-builder/membership/membership-3.svg",
        imageAlt: "Medlemskap skjerm 3",
      },
      {
        title: "Educational Hub",
        imageSrc: "/images/projects/credit-builder/membership/membership-4.svg",
        imageAlt: "Medlemskap skjerm 4",
      },
    ],
  },
  {
    step: 4,
    title: "Kredittscore og mål",
    caption:
      "Gjør kredittscore handlingsbar med tydelige mål og tiltak, så brukeren vet hva som forbedrer scoren.",
    screens: [
      {
        title: "Credit Score Monitoring",
        imageSrc: "/images/projects/credit-builder/kredittscore/kredittscore-1.svg",
        imageAlt: "Kredittscore og mål skjerm 1",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kredittscore/kredittscore-2.svg",
        imageAlt: "Kredittscore og mål skjerm 2",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kredittscore/kredittscore-3.svg",
        imageAlt: "Kredittscore og mål skjerm 3",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kredittscore/kredittscore-4.svg",
        imageAlt: "Kredittscore og mål skjerm 4",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kredittscore/kredittscore-5.svg",
        imageAlt: "Kredittscore og mål skjerm 5",
      },
    ],
  },
  {
    step: 5,
    title: "Kortkontroll",
    caption:
      "Gir direkte kontroll på kortbruk og grenser, som forebygger overforbruk og øker tryggheten rundt tilbakebetaling.",
    screens: [
      {
        title: "Card Control Tooltip",
        imageSrc: "/images/projects/credit-builder/kortkontroll/kortkontroll-1.svg",
        imageAlt: "Kortkontroll skjerm 1",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kortkontroll/kortkontroll-2.svg",
        imageAlt: "Kortkontroll skjerm 2",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kortkontroll/kortkontroll-3.svg",
        imageAlt: "Kortkontroll skjerm 3",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kortkontroll/kortkontroll-4.svg",
        imageAlt: "Kortkontroll skjerm 4",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kortkontroll/kortkontroll-5.svg",
        imageAlt: "Kortkontroll skjerm 5",
      },
      {
        title: "Walkthrough",
        imageSrc: "/images/projects/credit-builder/kortkontroll/kortkontroll-6.svg",
        imageAlt: "Kortkontroll skjerm 6",
      },
      {
        title: "Card Controls",
        imageSrc: "/images/projects/credit-builder/kortkontroll/kortkontroll-7.svg",
        imageAlt: "Kortkontroll skjerm 7",
      },
    ],
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
  const heroImageSrc = project.heroImage ?? project.logo;
  const isCreditBuilder = project.slug === "credit-builder";

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
              : heroImageSrc
              ? (
                  <img
                    className="projectMediaLogo projectMediaLogo--hero"
                    src={heroImageSrc}
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
                              subSection.title === "Fem hovedreiser som bygger progresjon"
                            ? (
                                <JourneySketchBoard items={creditBuilderJourneySketches} />
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
    title: `${project.title} | Fredrik Storheil`,
    description: project.subtitle,
  };
}
