import type { ReactNode } from "react";

type CaseSectionProps = {
  title: string;
  lede?: string;
  children: ReactNode;
  variant?: "default" | "subtle";
};

export function CaseSection({
  title,
  lede,
  children,
  variant = "default",
}: CaseSectionProps) {
  return (
    <section className={`caseSection caseSection-${variant}`}>
      <header className="caseSectionHeader">
        <h2 className="caseSectionTitle">{title}</h2>
        {lede ? <p className="caseSectionLede">{lede}</p> : null}
      </header>
      <div className="caseSectionBody">{children}</div>
    </section>
  );
}
