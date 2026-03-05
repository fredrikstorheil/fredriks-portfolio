type KeyScreenItem = {
  title: string;
  caption: string;
  imageSrc?: string;
  imageAlt?: string;
};

type KeyScreensRowProps = {
  items?: KeyScreenItem[];
};

const defaultItems: KeyScreenItem[] = [
  {
    title: "Goal Engine",
    caption: "Setter kredittscore-mal med neste anbefalte handling.",
  },
  {
    title: "Cushion / buffer",
    caption: "Bygger buffer automatisk med round ups for lavere betalingsstress.",
  },
  {
    title: "Tier progresjon",
    caption: "Synlig progresjon fra Rookie til Star med perks og cashback.",
  },
];

export function KeyScreensRow({ items = defaultItems }: KeyScreensRowProps) {
  return (
    <section className="caseDiagramCard" aria-label="Key screens">
      <h4 className="caseDiagramTitle">Key screens</h4>
      <div className="caseKeyScreensGrid">
        {items.map((item) => (
          <article key={item.title} className="caseKeyScreenCard">
            <div className="caseKeyScreenMedia">
              {item.imageSrc
                ? (
                    <img src={item.imageSrc} alt={item.imageAlt ?? item.title} loading="lazy" />
                  )
                : (
                    <div className="caseKeyScreenPlaceholder" aria-hidden="true">
                      Placeholder
                    </div>
                  )}
            </div>
            <h5>{item.title}</h5>
            <p>{item.caption}</p>
          </article>
        ))}
      </div>
      <p className="caseDiagramAssistive srOnly">
        Tre nøkkelskjermer vises: Goal Engine, Cushion eller buffer, og Tier
        progresjon.
      </p>
    </section>
  );
}
