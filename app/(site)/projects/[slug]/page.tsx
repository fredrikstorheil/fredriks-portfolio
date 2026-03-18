import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JourneySketchBoard } from "@/components/case/journey-sketch-board";
import { getProjectBySlug, projects } from "@/data/projects";
import { getPublicImageMetadata } from "@/lib/public-image-metadata";

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

const resourceProductEcosystemGallery = [
  {
    step: 1,
    title: "Produktøkosystem med fire flater",
    screens: [
      {
        title: "ReSource Backoffice",
        caption: "Admin og backoffice for masterdata, roller, verifisering og oversikt.",
        frameAspectRatio: "2170 / 1430",
        frameWidth: "clamp(408px, 82vw, 590px)",
        imageSrc: "/images/projects/resource/senseon-backoffice-macbook-mockup.svg",
        imageAlt: "ReSource backoffice vist på macbook",
      },
      {
        title: "ReSource Registrar",
        caption: "Intern app for QR-basert registrering.",
        frameAspectRatio: "464 / 957",
        frameWidth: "clamp(130px, 26vw, 188px)",
        imageSrc: "/images/projects/resource/login-mobil-iphone-mockup.svg",
        imageAlt: "Login-app vist på iPhone",
      },
      {
        title: "Kunde Backoffice",
        caption: "Kunde-backoffice for håndtering av møbelflåter og service.",
        frameAspectRatio: "2170 / 1430",
        frameWidth: "clamp(408px, 82vw, 590px)",
        imageSrc: "/images/projects/resource/kunde-backoffice-macbook-mockup.svg",
        imageAlt: "Kunde-backoffice vist på macbook",
      },
      {
        title: "Kunde Mobilapp",
        caption: "Kundeapp for rapportering og vedlikehold i felt.",
        frameAspectRatio: "464 / 957",
        frameWidth: "clamp(130px, 26vw, 188px)",
        imageSrc: "/images/projects/resource/kunde-mobil-iphone-mockup.svg",
        imageAlt: "Kundeapp vist på iPhone",
      },
    ],
  },
];

const resourceSystemModelGallery = [
  {
    step: 1,
    title: "Systemmodell og livssykkel",
    screens: [
      {
        title: "Datamodell og relasjoner",
        frameAspectRatio: "1536 / 1380",
        frameWidth: "min(100%, 980px)",
        imageSrc: "/images/projects/resource/systemmodell-livssykkel-diagram.svg",
        imageAlt: "Systemmodell og livssykkel for Re:Source med entiteter, felter og relasjoner",
      },
    ],
  },
];

const resourceDesignSystemGallery = [
  {
    step: 1,
    title: "Bibliotek og kjernekomponenter",
    screens: [
      {
        title: "Figma sidebar",
        frameAspectRatio: "240 / 777",
        frameWidth: "clamp(80px, 18vw, 108px)",
        imageSrc: "/images/projects/resource/designsystem/figma-sidebar-designsystem.png",
        imageAlt: "Figma-sidebar som viser Re:Source-designsystemets komponentbibliotek",
      },
      {
        title: "Buttons",
        frameAspectRatio: "977 / 595",
        frameWidth: "clamp(310px, 68vw, 420px)",
        imageSrc: "/images/projects/resource/designsystem/buttons.png",
        imageAlt: "Oversikt over knappestiler i designsystemet",
      },
      {
        title: "Button Group",
        frameAspectRatio: "888 / 726",
        frameWidth: "clamp(248px, 56vw, 336px)",
        imageSrc: "/images/projects/resource/designsystem/button-group.png",
        imageAlt: "Button groups og segmented controls i designsystemet",
      },
      {
        title: "Tag",
        frameAspectRatio: "491 / 232",
        frameWidth: "clamp(270px, 52vw, 348px)",
        imageSrc: "/images/projects/resource/designsystem/tag.png",
        imageAlt: "Tag-komponenter i designsystemet",
      },
    ],
  },
  {
    step: 2,
    title: "Feedback og varsler",
    screens: [
      {
        title: "Action Panel",
        frameAspectRatio: "517 / 743",
        frameWidth: "clamp(164px, 34vw, 214px)",
        imageSrc: "/images/projects/resource/designsystem/action-panel.png",
        imageAlt: "Action panel-komponenter med ulike CTA-oppsett",
      },
      {
        title: "Alerts",
        frameAspectRatio: "536 / 865",
        frameWidth: "clamp(164px, 34vw, 214px)",
        imageSrc: "/images/projects/resource/designsystem/alerts.png",
        imageAlt: "Alerts med ulike states og informasjonsnivåer",
      },
      {
        title: "Alerts Button",
        frameAspectRatio: "343 / 754",
        frameWidth: "clamp(124px, 26vw, 160px)",
        imageSrc: "/images/projects/resource/designsystem/alerts-button.png",
        imageAlt: "Knappevarianter brukt i alerts",
      },
      {
        title: "Alert Close Button",
        frameAspectRatio: "305 / 323",
        frameWidth: "clamp(196px, 34vw, 244px)",
        imageSrc: "/images/projects/resource/designsystem/alert-close-button.png",
        imageAlt: "Lukkeknapp-varianter for alerts",
      },
    ],
  },
  {
    step: 3,
    title: "State og hjelpeflater",
    screens: [
      {
        title: "Reuse State",
        frameAspectRatio: "940 / 418",
        frameWidth: "clamp(332px, 72vw, 456px)",
        imageSrc: "/images/projects/resource/designsystem/reuse-state.png",
        imageAlt: "Reuse state-komponenter for ulike statusnivåer",
      },
      {
        title: "Simple Stats",
        frameAspectRatio: "990 / 550",
        frameWidth: "clamp(320px, 68vw, 430px)",
        imageSrc: "/images/projects/resource/designsystem/simple-stats.png",
        imageAlt: "Simple stats-komponenter og grupperinger",
      },
      {
        title: "Empty State",
        frameAspectRatio: "689 / 658",
        frameWidth: "clamp(220px, 48vw, 292px)",
        imageSrc: "/images/projects/resource/designsystem/empty-state.png",
        imageAlt: "Empty state-komponenter med og uten call to action",
      },
    ],
  },
  {
    step: 4,
    title: "Input og kontrollvalg",
    screens: [
      {
        title: "Checkbox",
        frameAspectRatio: "946 / 367",
        frameWidth: "clamp(324px, 70vw, 444px)",
        imageSrc: "/images/projects/resource/designsystem/checkbox.png",
        imageAlt: "Checkbox-komponenter i flere størrelser og states",
      },
      {
        title: "Dropdown Menu",
        frameAspectRatio: "551 / 670",
        frameWidth: "clamp(180px, 34vw, 232px)",
        imageSrc: "/images/projects/resource/designsystem/dropdown-menu.png",
        imageAlt: "Dropdown-meny med åpne og lukkede states",
      },
      {
        title: "Input Field",
        frameAspectRatio: "907 / 692",
        frameWidth: "clamp(264px, 58vw, 356px)",
        imageSrc: "/images/projects/resource/designsystem/input-field.png",
        imageAlt: "Input-felt med hint, hjelpetekst og feiltilstander",
      },
      {
        title: "Radio Button",
        frameAspectRatio: "267 / 353",
        frameWidth: "clamp(160px, 24vw, 188px)",
        imageSrc: "/images/projects/resource/designsystem/radio-button.png",
        imageAlt: "Radio button-komponenter i skalerbare størrelser",
      },
      {
        title: "Toggle",
        frameAspectRatio: "441 / 707",
        frameWidth: "clamp(142px, 28vw, 176px)",
        imageSrc: "/images/projects/resource/designsystem/toggle.png",
        imageAlt: "Toggle-komponenter med ikon og kort variant",
      },
    ],
  },
];

const resourceFlowDiagramGallery = [
  {
    step: 1,
    title: "Kundeflater",
    screens: [
      {
        title: "Backoffice Kunde",
        caption: "Flyt for kunde-backoffice med service, status og oppgaver.",
        frameAspectRatio: "9872 / 4016",
        frameWidth: "clamp(380px, 82vw, 560px)",
        imageSrc: "/images/projects/resource/flytdiagram/backoffice-kunde.png",
        imageAlt: "Flytdiagram for kunde-backoffice i Re:Source",
      },
      {
        title: "Mobilapp Kunde",
        caption: "Flyt for kundeappen i felt med registrering og vedlikehold.",
        frameAspectRatio: "9872 / 3408",
        frameWidth: "clamp(408px, 86vw, 620px)",
        imageSrc: "/images/projects/resource/flytdiagram/mobilapp-kunde.png",
        imageAlt: "Flytdiagram for kunde-mobilapp i Re:Source",
      },
    ],
  },
  {
    step: 2,
    title: "Re:Source-flater",
    screens: [
      {
        title: "Backoffice Re:Source",
        caption: "Intern backoffice-flyt med flere roller, steg og avhengigheter.",
        frameAspectRatio: "9680 / 18928",
        frameWidth: "clamp(144px, 24vw, 188px)",
        imageSrc: "/images/projects/resource/flytdiagram/backoffice-resource.png",
        imageAlt: "Flytdiagram for Re:Source-backoffice",
      },
      {
        title: "Mobilapp Re:Source (QR)",
        caption: "QR-basert registreringsflyt for intern mobilapp.",
        frameAspectRatio: "9872 / 8000",
        frameWidth: "clamp(252px, 56vw, 360px)",
        imageSrc: "/images/projects/resource/flytdiagram/mobilapp-resource-qr.png",
        imageAlt: "Flytdiagram for Re:Source mobilapp med QR-registrering",
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
                      const metadata = getPublicImageMetadata(mockup.src);

                      return (
                        <Image
                          key={mockup.src}
                          className={floatClass}
                          src={mockup.src}
                          alt=""
                          aria-hidden="true"
                          width={metadata.width}
                          height={metadata.height}
                          sizes="(min-width: 768px) 280px, 240px"
                          unoptimized={metadata.unoptimized}
                        />
                      );
                    })}
                  </>
                )
              : heroImageSrc
              ? (
                  <Image
                    className="projectMediaLogo projectMediaLogo--hero"
                    src={heroImageSrc}
                    alt=""
                    aria-hidden="true"
                    {...(() => {
                      const metadata = getPublicImageMetadata(heroImageSrc);

                      return {
                        width: metadata.width,
                        height: metadata.height,
                        sizes: "(min-width: 768px) 300px, 220px",
                        unoptimized: metadata.unoptimized,
                      };
                    })()}
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

                          {project.slug === "re-source" &&
                              subSection.title === "Produktøkosystem med fire flater"
                            ? (
                                <JourneySketchBoard
                                  items={resourceProductEcosystemGallery}
                                  ariaLabel="Produktøkosystem med fire flater"
                                  showItemHeader={false}
                                  showScreenIndex={false}
                                />
                              )
                            : null}

                          {project.slug === "re-source" &&
                              subSection.title === "Systemmodell og livssykkel"
                            ? (
                                <JourneySketchBoard
                                  items={resourceSystemModelGallery}
                                  ariaLabel="Systemmodell og livssykkel"
                                  showItemHeader={false}
                                  showScreenIndex={false}
                                  disableRailScroll
                                  stretchScreens
                                />
                              )
                            : null}

                          {project.slug === "re-source" &&
                              subSection.title === "Designsystem før høyvolum produksjon"
                            ? (
                                <JourneySketchBoard
                                  items={resourceDesignSystemGallery}
                                  ariaLabel="Designsystem før høyvolum produksjon"
                                  showScreenIndex={false}
                                />
                              )
                            : null}

                          {project.slug === "re-source" &&
                              subSection.title === "Planlegging med flyt og gjenbruk"
                            ? (
                                <JourneySketchBoard
                                  items={resourceFlowDiagramGallery}
                                  ariaLabel="Planlegging med flyt og gjenbruk"
                                  showScreenIndex={false}
                                />
                              )
                            : null}

                          {subSection.bullets?.length &&
                          !(
                            project.slug === "re-source" &&
                            (
                              subSection.title === "Produktøkosystem med fire flater" ||
                              subSection.title === "Systemmodell og livssykkel" ||
                              subSection.title === "Designsystem før høyvolum produksjon" ||
                              subSection.title === "Planlegging med flyt og gjenbruk"
                            )
                          ) ? (
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
