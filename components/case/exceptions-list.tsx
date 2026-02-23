import type { CaseException } from "@/data/project-case";

import { CaseSection } from "@/components/case/case-section";

type ExceptionsListProps = {
  exceptions: CaseException[];
};

export function ExceptionsList({ exceptions }: ExceptionsListProps) {
  if (exceptions.length === 0) {
    return null;
  }

  return (
    <CaseSection
      title="Avvik og edge cases"
      lede="Scenarioer som krevde tydelige regler for robust produktatferd."
      variant="subtle"
    >
      <div className="exceptionsGrid">
        {exceptions.map((item, index) => (
          <article key={`${item.trigger}-${index}`} className="exceptionCard">
            <h3 className="exceptionCardTitle">Case {index + 1}</h3>
            <dl className="exceptionList">
              <div className="exceptionRow">
                <dt className="exceptionLabel">Trigger</dt>
                <dd className="exceptionValue">{item.trigger}</dd>
              </div>
              <div className="exceptionRow">
                <dt className="exceptionLabel">Systemrespons</dt>
                <dd className="exceptionValue">{item.response}</dd>
              </div>
              <div className="exceptionRow">
                <dt className="exceptionLabel">Regel</dt>
                <dd className="exceptionValue">{item.rule}</dd>
              </div>
              <div className="exceptionRow">
                <dt className="exceptionLabel">Konsekvens</dt>
                <dd className="exceptionValue">{item.consequence}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </CaseSection>
  );
}
