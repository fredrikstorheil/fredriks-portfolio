import type { CaseFinding } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";

type FindingsGridProps = {
  findings: CaseFinding[];
};

export function FindingsGrid({ findings }: FindingsGridProps) {
  if (findings.length === 0) {
    return null;
  }

  return (
    <CaseSection
      title="Funn"
      lede="Kjernefunnene som styrte prioritering, flyt og grensesnittvalg."
    >
      <div className="findingsGrid">
        {findings.map((finding) => (
          <article key={finding.title} className="insightCard">
            <h3 className="insightCardTitle">{finding.title}</h3>
            <p className="insightCardBody">{finding.body}</p>
          </article>
        ))}
      </div>
    </CaseSection>
  );
}
