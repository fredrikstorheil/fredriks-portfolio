import type { CaseHeaderData } from "@/data/project-case";

type CaseHeaderMedia = {
  slug: string;
  title: string;
  logo: string;
};

type CaseHeaderProps = {
  header: CaseHeaderData;
  media?: CaseHeaderMedia;
};

function ProjectHeroMedia({ media }: { media: CaseHeaderMedia }) {
  const isResource = media.slug === "resource";

  if (isResource) {
    return (
      <figure
        className={`project-hero__media projectMainPhoto projectMedia-${media.slug}`}
        role="img"
        aria-label={`${media.title} hovedbilde`}
      >
        <div className="projectMediaGrid" aria-hidden="true">
          <div className="projectMediaGridItem">
            <img
              className="projectMediaMockup projectMediaMockup--laptop"
              src="/images/projects/resource/SenseOn Backoffice Macbook Mockup.svg"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
          <div className="projectMediaGridItem">
            <img
              className="projectMediaMockup projectMediaMockup--phone"
              src="/images/projects/resource/Login Mobil Iphone Mockup.svg"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
          <div className="projectMediaGridItem">
            <img
              className="projectMediaMockup projectMediaMockup--phone"
              src="/images/projects/resource/Kunde Mobil Iphone Mockup.svg"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
          <div className="projectMediaGridItem">
            <img
              className="projectMediaMockup projectMediaMockup--laptop"
              src="/images/projects/resource/Kunde Backoffice Macbook Mockup.svg"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={`project-hero__media projectMainPhoto projectMedia-${media.slug}`}
      role="img"
      aria-label={`${media.title} hovedbilde`}
    >
      <img
        className="projectMediaLogo projectMediaLogo--main"
        src={media.logo}
        alt=""
        aria-hidden="true"
        loading="lazy"
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
