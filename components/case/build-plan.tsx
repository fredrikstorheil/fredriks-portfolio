import type { CaseBuildPhase } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";

type BuildPlanProps = {
  buildPlan: CaseBuildPhase[];
};

export function BuildPlan({ buildPlan }: BuildPlanProps) {
  if (buildPlan.length === 0) {
    return null;
  }

  return (
    <CaseSection
      title="Byggeplan"
      lede="Fasevis fremdrift med tydelig kobling mellom mål, leveranser og integrasjoner."
      variant="subtle"
    >
      <ol className="buildPlanList">
        {buildPlan.map((phase, index) => (
          <li key={phase.phase} className="phaseCard">
            <div className="phaseTop">
              <p className="phaseIndex">Fase {index + 1}</p>
              <p className="phaseDuration">{phase.duration}</p>
            </div>
            <h3 className="phaseTitle">{phase.phase}</h3>

            <div className="phaseContent">
              <div className="phaseColumn">
                <h4 className="phaseHeading">Mål</h4>
                <ul className="phaseList">
                  {phase.goals.map((goal) => (
                    <li key={goal} className="phaseListItem">
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="phaseColumn">
                <h4 className="phaseHeading">Leveranser</h4>
                <ul className="phaseList">
                  {phase.deliverables.map((deliverable) => (
                    <li key={deliverable} className="phaseListItem">
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="phaseColumn">
                <h4 className="phaseHeading">Integrasjoner</h4>
                <ul className="phaseList">
                  {phase.integrations.map((integration) => (
                    <li key={integration} className="phaseListItem">
                      {integration}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </CaseSection>
  );
}
