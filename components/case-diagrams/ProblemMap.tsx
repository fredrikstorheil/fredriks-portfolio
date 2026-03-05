type ProblemMapProps = {
  subtitle?: string;
  items?: string[];
  ariaLabel?: string;
};

const defaultProblemItems = [
  "Lite erfaring med kreditt",
  "Usikkerhet rundt betaling",
  "Minimumsbetaling blir standardvalg",
  "Stress og lavere kredittscore",
];

export function ProblemMap({
  subtitle = "Hvorfor Emerging Prime ofte faller i et dårlig mønster",
  items = defaultProblemItems,
  ariaLabel = "Problemkart som viser en årsakskjede fra lite kreditterfaring til stress og lavere kredittscore.",
}: ProblemMapProps) {
  return (
    <figure className="caseDiagramCard" aria-label={ariaLabel}>
      <figcaption className="caseDiagramTitle">ProblemMap</figcaption>
      <p className="caseDiagramSubtitle">{subtitle}</p>

      <div className="caseDiagramFlow caseDiagramFlow--vertical">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="caseDiagramFlowItem">
            <div className="caseDiagramNode">{item}</div>
            {index < items.length - 1
              ? (
                  <svg
                    className="caseDiagramConnectorIcon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 5v14m0 0-4-4m4 4 4-4" />
                  </svg>
                )
              : null}
          </div>
        ))}
      </div>

      <p className="caseDiagramAssistive srOnly">
        Årsakskjede: {items.join(" -> ")}.
      </p>
    </figure>
  );
}
