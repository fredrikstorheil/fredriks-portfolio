type BusinessValueChainProps = {
  steps?: string[];
  note?: string;
  ariaLabel?: string;
};

const defaultSteps = [
  "Ansvarlig bruk",
  "Lavere misligholdsrisiko",
  "Høyere engasjement",
  "Økt livstidsverdi",
];

export function BusinessValueChain({
  steps = defaultSteps,
  note = "Dette ble dokumentert som hypoteser i konseptfasen for å koble brukeradferd til risiko og verdi.",
  ariaLabel = "Verdikjede fra ansvarlig bruk til økt livstidsverdi.",
}: BusinessValueChainProps) {
  return (
    <figure className="caseDiagramCard" aria-label={ariaLabel}>
      <figcaption className="caseDiagramTitle">Business Value Chain</figcaption>

      <div className="caseDiagramFlow caseDiagramFlow--horizontal">
        {steps.map((step, index) => (
          <div key={`${step}-${index}`} className="caseDiagramFlowItem caseDiagramFlowItem--inline">
            <div className="caseDiagramNode">{step}</div>
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

      <p className="caseDiagramFootnote">{note}</p>
      <p className="caseDiagramAssistive srOnly">Verdikjede: {steps.join(" -> ")}.</p>
    </figure>
  );
}
