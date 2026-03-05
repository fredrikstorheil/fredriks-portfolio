type JourneyRailProps = {
  steps?: string[];
  ariaLabel?: string;
};

const defaultSteps = [
  "Søknad og onboarding",
  "Dashboard",
  "Medlemskap",
  "Kredittscore og mål",
  "Kortkontroll",
];

export function JourneyRail({
  steps = defaultSteps,
  ariaLabel = "Progresjonslinje med fem hovedreiser fra onboarding til kortkontroll.",
}: JourneyRailProps) {
  return (
    <figure className="caseDiagramCard" aria-label={ariaLabel}>
      <figcaption className="caseDiagramTitle">Journey Rail</figcaption>

      <div className="caseDiagramFlow caseDiagramFlow--rail">
        {steps.map((step, index) => (
          <div key={`${step}-${index}`} className="caseDiagramFlowItem caseDiagramFlowItem--inline">
            <div className="caseDiagramNode caseDiagramNode--step">
              <span className="caseDiagramStepBadge">{index + 1}</span>
              <span>{step}</span>
            </div>
            {index < steps.length - 1
              ? (
                  <svg
                    className="caseDiagramConnectorIcon caseDiagramConnectorIcon--adaptive"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M5 12h14m0 0-4-4m4 4-4 4" />
                  </svg>
                )
              : null}
          </div>
        ))}
      </div>

      <p className="caseDiagramAssistive srOnly">
        Fem steg i progresjon: {steps.join(" -> ")}.
      </p>
    </figure>
  );
}
