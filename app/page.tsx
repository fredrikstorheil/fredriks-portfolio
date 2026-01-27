import Link from "next/link";

const projects = [
  {
    slug: "redq",
    title: "RedQ",
    subtitle: "Datasikkerhet for SMB-markedet",
    overlayText: "Q",
  },
  {
    slug: "chall",
    title: "Chall",
    subtitle: "Gamification i appdesign",
  },
  {
    slug: "ikea",
    title: "IKEA",
    subtitle: "Digital kommunikasjon på varehuset",
  },
  {
    slug: "senseon",
    title: "SenseOn",
    subtitle: "SaaS for ombruk og inventar",
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="top">
          <div className="brand">Fredrik Storheil</div>
        </div>

        <nav className="nav" aria-label="Prosjektnavigasjon">
          <Link className="pill pillActive" href="/">
            Hjem
          </Link>
          <Link className="pill" href="/projects/redq">
            RedQ
          </Link>
          <Link className="pill" href="/projects/chall">
            Chall
          </Link>
          <Link className="pill" href="/projects/ikea">
            IKEA
          </Link>
          <Link className="pill" href="/projects/senseon">
            SenseOn
          </Link>
        </nav>
      </header>

      <main className="main">
        <section className="heroRow">
          <div className="heroLeft">
            <h1 className="h1">Produktdesigner</h1>
            <p className="lead">
              Produktene jeg lager formes med forståelse for mennesker, forretning og hvordan løsninger må fungere når de vokser og endrer seg.
            </p>
          </div>

          <div className="avatar" aria-label="Profilbilde" />
        </section>

        <p className="lead" style={{ maxWidth: 540 }}>
          Erfaring med å forbedre onboarding, struktur, navigasjon og kjerneflyter i komplekse produkter innen finans, offentlig sektor og datatunge B2B-løsninger.
        </p>

        <h2 className="sectionTitle">Prosjekter</h2>

        <section className="cards" aria-label="Prosjektliste">
          {projects.map((p) => (
            <Link key={p.slug} className="card" href={`/projects/${p.slug}`}>
              <div className="cardLeft">
                <div className="cardTitle">{p.title}</div>
                <div className="cardSubtitle">{p.subtitle}</div>
                <div className="cardCta">Se case →</div>
              </div>

              <div className="cardMedia" aria-hidden>
                <div className="cardMediaOverlay">
                  <span style={{ fontWeight: 800, fontSize: 28, color: "white" }}>
                    {p.overlayText ?? ""}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}