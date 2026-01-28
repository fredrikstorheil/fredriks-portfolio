import Link from "next/link";

const projects = [
  {
    slug: "redq",
    title: "RedQ",
    subtitle: "Datasikkerhet for SMB-markedet",
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
    <div className="app">
      <header className="appHeader">
        <div className="appHeaderTop">
          <p className="appName">Fredrik Storheil</p>
        </div>

        <nav className="tabNav" aria-label="Hovednavigasjon">
          <Link href="/" className="tab tabActive">
            Hjem
          </Link>
          <Link href="/projects/redq" className="tab">
            RedQ
          </Link>
          <Link href="/projects/chall" className="tab">
            Chall
          </Link>
          <Link href="/projects/ikea" className="tab">
            IKEA
          </Link>
          <Link href="/projects/senseon" className="tab">
            SenseOn
          </Link>
        </nav>
      </header>

      <main className="appMain">
        <section
          className="introSection"
          aria-labelledby="intro-title"
        >
          <div className="introText">
            <h1 id="intro-title" className="introTitle">
              Produktdesigner
            </h1>
            <p className="introLead">
              Produktene jeg lager formes med forståelse for mennesker,
              forretning og hvordan løsninger må fungere når de vokser og
              endrer seg.
            </p>
            <p className="introBody">
              Erfaring med å forbedre onboarding, struktur, navigasjon og
              kjerneflyter i komplekse produkter innen finans, offentlig
              sektor og datatunge B2B-løsninger.
            </p>
          </div>

          <figure className="introPortrait">
            <img
              src="/fredrik-portrait.jpg"
              alt="Portrett av Fredrik Storheil"
            />
          </figure>
        </section>

        <section
          className="projectsSection"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title" className="sectionTitle">
            Prosjekter
          </h2>

          <div className="projectList">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="projectCard"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="projectLink"
                >
                  <div className="projectText">
                    <h3 className="projectTitle">{project.title}</h3>
                    <p className="projectSubtitle">{project.subtitle}</p>
                    <span className="projectCta">Se case →</span>
                  </div>
                  <div
                    className={`projectMedia projectMedia-${project.slug}`}
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}