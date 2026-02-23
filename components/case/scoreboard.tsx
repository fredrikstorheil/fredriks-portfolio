import type { CaseKpi } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";

type ScoreboardProps = {
  kpis: CaseKpi[];
};

export function Scoreboard({ kpis }: ScoreboardProps) {
  if (kpis.length === 0) {
    return null;
  }

  return (
    <CaseSection
      title="Maltavle"
      lede="Tall som ble brukt til kalibrering av effekt og retning."
      variant="subtle"
    >
      <div className="scoreboardGrid">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="scoreCard">
            <p className="scoreCardLabel">{kpi.label}</p>
            <p className="scoreCardValue">{kpi.value}</p>
            <p className="scoreCardNote">{kpi.note}</p>
          </article>
        ))}
      </div>
    </CaseSection>
  );
}
