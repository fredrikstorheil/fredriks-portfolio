import Image from "next/image";

import type { CaseHeaderData } from "@/data/project-case";
import type { ProjectMockup } from "@/data/projects";
import { getPublicImageMetadata } from "@/lib/public-image-metadata";

type CaseHeaderMedia = {
  slug: string;
  title: string;
  logo: string;
  mockups?: ProjectMockup[];
};

type CaseHeaderProps = {
  header: CaseHeaderData;
  media?: CaseHeaderMedia;
};

function ProjectHeroMedia({ media }: { media: CaseHeaderMedia }) {
  if (media.mockups?.length) {
    return (
      <figure
        className={`project-hero__media projectMainPhoto projectMedia-${media.slug}`}
        role="img"
        aria-label={`${media.title} hovedbilde`}
      >
        <div className="projectMediaGrid" aria-hidden="true">
          {media.mockups.map((mockup) => {
            const metadata = getPublicImageMetadata(mockup.src);

            return (
              <div key={mockup.src} className="projectMediaGridItem">
                <Image
                  className={`projectMediaMockup projectMediaMockup--${mockup.type}`}
                  src={mockup.src}
                  alt=""
                  aria-hidden="true"
                  width={metadata.width}
                  height={metadata.height}
                  sizes="(min-width: 768px) 280px, 220px"
                  unoptimized={metadata.unoptimized}
                />
              </div>
            );
          })}
        </div>
      </figure>
    );
  }

  const logoMetadata = getPublicImageMetadata(media.logo);

  return (
    <figure
      className={`project-hero__media projectMainPhoto projectMedia-${media.slug}`}
      role="img"
      aria-label={`${media.title} hovedbilde`}
    >
      <Image
        className="projectMediaLogo projectMediaLogo--main"
        src={media.logo}
        alt=""
        aria-hidden="true"
        width={logoMetadata.width}
        height={logoMetadata.height}
        sizes="(min-width: 768px) 240px, 180px"
        unoptimized={logoMetadata.unoptimized}
      />
    </figure>
  );
}

export function CaseHeader({ header, media }: CaseHeaderProps) {
  return (
    <section className="caseHeader" aria-labelledby="case-header-title">
      <p className="caseEyebrow">One screen story</p>
      <h1 id="case-header-title" className="projectPageTitle caseHeaderTitle">
        {header.title}
      </h1>
      <p className="projectBodyText caseHeaderIntro">{header.intro}</p>

      {media ? (
        <div className="project-hero">
          <ProjectHeroMedia media={media} />
        </div>
      ) : null}

      <dl className="caseMetaGrid">
        <div className="caseMetaItem">
          <dt className="caseMetaLabel">Rolle</dt>
          <dd className="caseMetaValue">{header.role}</dd>
        </div>
        <div className="caseMetaItem">
          <dt className="caseMetaLabel">Team</dt>
          <dd className="caseMetaValue">{header.team}</dd>
        </div>
        <div className="caseMetaItem">
          <dt className="caseMetaLabel">Tid</dt>
          <dd className="caseMetaValue">{header.timeline}</dd>
        </div>
      </dl>

      {header.responsibilities.length > 0 ? (
        <div className="caseResponsibilities">
          <h2 className="caseSubheading">Ansvar</h2>
          <ul className="caseInlineList">
            {header.responsibilities.map((item) => (
              <li key={item} className="caseInlineListItem">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {header.deliverables.length > 0 ? (
        <div className="caseDeliverables" aria-label="Leveranser">
          {header.deliverables.map((deliverable) => (
            <span key={deliverable} className="caseChip">
              {deliverable}
            </span>
          ))}
        </div>
      ) : null}

      {header.confidentiality ? (
        <p className="caseConfidentiality">Konfidensialitet, {header.confidentiality}</p>
      ) : null}
    </section>
  );
}
