import { ProjectCards } from "@/components/projects/project-cards";

export default function Home() {
  return (
    <>
      <section className="introSection" aria-labelledby="intro-title">
        <figure className="introPortrait">
          <img
            src="/images/fredrik-portrait.jpg"
            alt="Portrett av Fredrik Storheil"
          />
        </figure>

        <h1 id="intro-title" className="introTitle">
          Produktdesigner
        </h1>
        <p className="introLead">
          Produktene jeg lager formes med forståelse for mennesker, forretning
          og hvordan løsninger må fungere når de vokser og endrer seg.
        </p>
        <p className="introBody">
          Erfaring med å forbedre onboarding, struktur, navigasjon og
          kjerneflyter i komplekse produkter innen finans, offentlig sektor og
          datatunge B2B-løsninger.
        </p>
      </section>

      <section className="projectsSection" aria-labelledby="projects-title">
        <h2 id="projects-title" className="sectionTitle">
          Prosjekter
        </h2>

        <ProjectCards />
      </section>
    </>
  );
}
