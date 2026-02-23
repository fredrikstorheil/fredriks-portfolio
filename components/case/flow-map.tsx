"use client";

import { useState } from "react";

import type { CaseFlow } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";

type FlowMapProps = {
  flow: CaseFlow;
};

export function FlowMap({ flow }: FlowMapProps) {
  const [openNodeId, setOpenNodeId] = useState(flow.nodes[0]?.id ?? "");

  if (flow.nodes.length === 0) {
    return null;
  }

  return (
    <CaseSection
      title="Flytkart"
      lede={flow.overview ?? "Oversikt over hovednoder og overgangene mellom dem."}
    >
      <div className="flowDiagram" aria-hidden="true">
        {flow.nodes.map((node, index) => (
          <div key={node.id} className="flowDiagramNode">
            <span className="flowDiagramDot" />
            <span className="flowDiagramLabel">{node.title}</span>
            {index < flow.nodes.length - 1 ? (
              <span className="flowDiagramConnector" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="flowAccordion">
        {flow.nodes.map((node) => {
          const panelId = `flow-panel-${node.id}`;
          const isOpen = openNodeId === node.id;

          return (
            <article key={node.id} className="flowAccordionItem">
              <h3 className="flowAccordionHeading">
                <button
                  type="button"
                  className="flowAccordionButton"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenNodeId(isOpen ? "" : node.id)}
                >
                  <span>{node.title}</span>
                  <span className="flowAccordionState" aria-hidden="true">
                    {isOpen ? "Skjul" : "Vis"}
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                className="flowAccordionPanel"
                hidden={!isOpen}
                role="region"
                aria-label={`${node.title} detaljer`}
              >
                <p className="flowNodeDescription">{node.description}</p>
                {node.screens?.length ? (
                  <ul className="flowNodeScreens">
                    {node.screens.map((screen) => (
                      <li key={screen} className="flowNodeScreenItem">
                        {screen}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </CaseSection>
  );
}
