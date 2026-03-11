import Image from "next/image";
import { ProjectCards } from "@/components/projects/project-cards";

export default function Home() {
  return (
    <>
      <section className="introSection" aria-label="Om Fredrik">
        <div className="introHeader">
          <div className="introCopy">
            <h1 className="introTitle">Produktdesigner</h1>
            <p className="introLead">
              FREDRIK STORHEIL
            </p>
            <p className="introBody">
            Jeg designer digitale produkter med fokus på struktur, flyt og tydelige beslutningspunkter. Arbeidet mitt handler om å gjøre komplekse systemer enklere å forstå for brukerne og enklere å utvikle for teamene som bygger dem.
            </p>
          </div>
          <figure className="introPortrait" aria-hidden="true">
            <Image
              src="/images/fredrik-portrait.jpg"
              alt="Fredrik Storheil"
              width={683}
              height={857}
              priority
            />
          </figure>
        </div>
      </section>

      <section className="projectsSection homeProjectsSection" aria-label="Prosjekter">
        <h2 className="sectionTitle">Prosjekter</h2>
        <ProjectCards />
      </section>
    </>
  );
}
