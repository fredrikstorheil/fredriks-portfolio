import type { CaseScope } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";

type ScopeMatrixProps = {
  scope: CaseScope;
};

type ScopeColumn = {
  key: "must" | "should" | "nice";
  title: string;
};

const scopeColumns: ScopeColumn[] = [
  { key: "must", title: "Must" },
  { key: "should", title: "Should" },
  { key: "nice", title: "Nice" },
];

export function ScopeMatrix({ scope }: ScopeMatrixProps) {
  const hasItems =
    scope.must.length > 0 || scope.should.length > 0 || scope.nice.length > 0;

  if (!hasItems) {
    return null;
  }

  return (
    <CaseSection title="Prioritering" lede="Scope ble styrt av risiko, verdi og gjennomforbarhet.">
      <div className="scopeMatrix">
        {scopeColumns.map((column) => {
          const items = scope[column.key];
          const reason = scope.reasons?.[column.key];

          return (
            <article key={column.key} className="scopeColumn">
              <h3 className="scopeColumnTitle">{column.title}</h3>
              <ul className="scopeList">
                {items.map((item) => (
                  <li key={item} className="scopeListItem">
                    {item}
                  </li>
                ))}
              </ul>
              {reason ? <p className="scopeReason">Fordi, {reason}</p> : null}
            </article>
          );
        })}
      </div>
    </CaseSection>
  );
}
