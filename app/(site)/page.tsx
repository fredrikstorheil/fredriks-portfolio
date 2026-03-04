import { ProjectCards } from "@/components/projects/project-cards";

const profileCards = [
  {
    title: "Hvem jeg er",
    body:
      "Produktdesigner som kombinerer strategi, interaksjon og systemtenkning for å redusere friksjon i komplekse tjenester.",
  },
  {
    title: "Hva jeg kan",
    body:
      "Brukerinnsikt, prioritering, flytmodellering, informasjonsarkitektur, UX-writing og designsystem-tenkning.",
  },
  {
    title: "Hva team får",
    body:
      "Tydelige beslutninger, raskere leveranser og løsninger som tåler vekst uten å bli manuelle.",
  },
];

const caseReadingGuide = [
  {
    title: "Problem",
    body:
      "Hva var bruker- og forretningsutfordringen, og hva hindret effekt med dagens løsning?",
  },
  {
    title: "Designgrep",
    body:
      "Hva jeg gjorde, hvilke avveininger som ble tatt, og hvorfor retningen ble valgt.",
  },
  {
    title: "Resultat",
    body:
      "Hvilken effekt løsningen ga, hva teamet lærte, og hva som ble prioritert videre.",
  },
];

const practicalInfo = [
  "Innholdet er kuratert for rekrutterere og ansettende ledere som trenger rask oversikt.",
  "Alle case bruker samme struktur slik at prosjektene kan sammenlignes direkte.",
  "Sensitiv informasjon er anonymisert eller abstrahert der det er nødvendig.",
  "Porteføljen kan brukes som web, men innholdet er også laget for presentasjon i intervju.",
];

export default function Home() {
  return (
    <>
      <section className="introSection" aria-labelledby="intro-title">
        <div className="introHeader">
          <div className="introCopy">
            <h1 id="intro-title" className="introTitle">
              UX- og produktdesigner
            </h1>
            <p className="introLead">
              Jeg designer digitale produkter for mennesker, forretning og drift
              samtidig, med fokus på kjerneflyter som må fungere når løsningen
              skalerer.
            </p>
          </div>
          <figure className="introPortrait">
            <img
              src="/images/fredrik-portrait.jpg"
              alt="Portrett av Fredrik Storheil"
            />
          </figure>
        </div>

        <p className="introBody">
          Erfaring med onboarding, navigasjon og beslutningsstøtte i finans,
          offentlig sektor og datatunge B2B-produkter.
        </p>
      </section>

      <section className="portfolioSection" aria-labelledby="profile-title">
        <h2 id="profile-title" className="sectionTitle">
          Profil
        </h2>
        <p className="sectionLead">
          Kort oppsummert: hvilken rolle jeg tar, hvordan jeg jobber og hva
          team kan forvente i leveranse.
        </p>

        <div className="portfolioCardGrid">
          {profileCards.map((item) => (
            <article key={item.title} className="portfolioCard">
              <h3 className="portfolioCardTitle">{item.title}</h3>
              <p className="portfolioCardBody">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolioSection" aria-labelledby="stories-title">
        <h2 id="stories-title" className="sectionTitle">
          Utvalgte case
        </h2>
        <p className="sectionLead">
          Hvert case er valgt for å vise ulik type problem, metode og effekt.
          Begrunnelsen står direkte i kortene.
        </p>
      </section>

      <section
        className="projectsSection homeProjectsSection"
        aria-labelledby="projects-title"
      >
        <h2 id="projects-title" className="sectionTitle">
          Prosjekter
        </h2>

        <ProjectCards showSelectionReason />
      </section>

      <section className="portfolioSection" aria-labelledby="framework-title">
        <h2 id="framework-title" className="sectionTitle">
          Case-struktur
        </h2>
        <p className="sectionLead">
          For å gjøre vurdering enkel følger alle case samme leseflyt.
        </p>

        <div className="portfolioCardGrid">
          {caseReadingGuide.map((item) => (
            <article key={item.title} className="portfolioCard">
              <h3 className="portfolioCardTitle">{item.title}</h3>
              <p className="portfolioCardBody">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolioSection" aria-labelledby="launch-title">
        <h2 id="launch-title" className="sectionTitle">
          Praktisk informasjon
        </h2>
        <p className="sectionLead">
          Innholdet er strukturert for rask gjennomgang og trygg deling i
          rekrutteringsprosess.
        </p>

        <ul className="launchList">
          {practicalInfo.map((item) => (
            <li key={item} className="launchListItem">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
