import type { CaseDataModel } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";

type DataModelProps = {
  dataModel: CaseDataModel;
};

export function DataModel({ dataModel }: DataModelProps) {
  const hasEntities = dataModel.entities.length > 0;
  const hasPrinciples = dataModel.principles.length > 0;

  if (!hasEntities && !hasPrinciples) {
    return null;
  }

  return (
    <CaseSection
      title="Datamodell"
      lede="Entiteter, relasjoner og prinsipper som holder strukturen konsistent over tid."
    >
      <div className="dataModelLayout">
        {hasEntities ? (
          <div className="entityGrid" aria-label="Entiteter og relasjoner">
            {dataModel.entities.map((entity) => (
              <article key={entity.name} className="entityCard">
                <h3 className="entityName">{entity.name}</h3>
                <p className="entityDescription">{entity.description}</p>
                {entity.relations?.length ? (
                  <ul className="entityRelations">
                    {entity.relations.map((relation) => (
                      <li key={relation} className="entityRelationItem">
                        {relation}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}

        {hasPrinciples ? (
          <div className="principlesCard">
            <h3 className="principlesTitle">Core principles</h3>
            <ul className="principlesList">
              {dataModel.principles.map((principle) => (
                <li key={principle.title} className="principlesListItem">
                  <span className="principleName">{principle.title}</span>
                  <span className="principleBody">{principle.body}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </CaseSection>
  );
}
