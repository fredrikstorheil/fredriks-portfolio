type BehaviorLoopExample = {
  label: string;
  value: string;
};

type BehaviorLoopModelProps = {
  nodes?: string[];
  examples?: BehaviorLoopExample[];
  ariaLabel?: string;
};

const defaultNodes = ["Mål", "Handling", "Belønning", "Trygghet"];
const defaultExamples: BehaviorLoopExample[] = [
  {
    label: "Mål",
    value: "Goal Engine",
  },
  {
    label: "Handling",
    value: "Planlagt nedbetaling + round ups",
  },
  {
    label: "Belønning",
    value: "Tier-progresjon",
  },
  {
    label: "Trygghet",
    value: "Buffer (Cushion)",
  },
];

export function BehaviorLoopModel({
  nodes = defaultNodes,
  examples = defaultExamples,
  ariaLabel = "Atferdsmodell med fire steg: mål, handling, belønning og trygghet.",
}: BehaviorLoopModelProps) {
  return (
    <figure className="caseDiagramCard" aria-label={ariaLabel}>
      <figcaption className="caseDiagramTitle">Behavior Loop</figcaption>

      <div className="caseDiagramFlow caseDiagramFlow--horizontal">
        {nodes.map((node, index) => (
          <div key={`${node}-${index}`} className="caseDiagramFlowItem caseDiagramFlowItem--inline">
            <div className="caseDiagramNode caseDiagramNode--step">
              <span className="caseDiagramStepBadge">{index + 1}</span>
              <span>{node}</span>
            </div>
            {index < nodes.length - 1
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

      <dl className="caseDiagramDefinitionList">
        {examples.map((example) => (
          <div key={example.label} className="caseDiagramDefinitionItem">
            <dt>{example.label}</dt>
            <dd>{example.value}</dd>
          </div>
        ))}
      </dl>

      <p className="caseDiagramAssistive srOnly">
        Modellen viser sammenhengen mellom mål, handling, belønning og trygghet.
      </p>
    </figure>
  );
}
