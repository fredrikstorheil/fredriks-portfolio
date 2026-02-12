export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  logo: string;
  heroText?: string;
  context: string[];
  role: string[];
  process: string[];
  outcome: string[];
};

export const projects: Project[] = [
  {
    slug: "resource",
    title: "Re:Source",
    subtitle:
      "Digital infrastruktur for sirkulær ressursforvaltning på tvers av roller og flater.",
    logo: "/images/projects/resource/SenseOn Backoffice Macbook Mockup.svg",
    heroText:
      "**Utfordring**\nInventar ble registrert og håndtert manuelt, uten felles struktur eller systemstøtte.\n\nKunden trengte en digital plattform som kunne samle registrering, forvaltning og gjenbruk i én skalerbar SaaS-løsning – på tvers av interne og eksterne roller.",
    context: [
      "**Produktet**\nRe:Source er en plattform for sirkulær ressursforvaltning på tvers av roller og flater.\n\nLøsningen består av:\n- Admin/Backoffice for masterdata og styring av regelverk\n- Intern mobilapp for registrering av inventar og etablering av flåter\n- Kunde-backoffice for administrasjon av flåter og tilgang\n- Kundeapp for registrering av eiendeler og rapportering av vedlikeholdsbehov\n\nProduktet binder sammen drift, forvaltning og kundesiden i én sammenhengende flyt.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner og UX-lead med ansvar for informasjonsarkitektur, flytdiagrammer for estimering og planlegging, klikkbare prototyper og et designsystem for prototyping og overlevering.\n\nOppgaven var å levere klikkbare prototyper til kundemøter, samtidig som leveransen måtte være klar for produksjonsoverlevering.",
    ],
    process: [
      "**Løsning**\nLøsningen etablerer en felles arkitektur for fire produkter og gjorde dem demonstrerbare i salg, investor- og kundedemoer.\n- Klikkbare prototyper ble brukt i kundemøter og fungerte som grunnlag for produksjonsoverlevering\n- Alle flyter ble laget med tanke på direkte utvikling og konsistente regler på tvers av roller\n- Et nytt designsystem ble bygget fra bunnen av for gjenbruk på tvers av flater\n- Komponentmønstre ble benchmarket mot component.gallery med fokus på tilgjengelighet og beste praksis\n\nResultatet er en helhetlig produktpakke som fungerer som prototype og byggbart grunnlag.",
      "**Struktur**\n- Admin/Backoffice: Masterdata, regelverk og tilgangsstyring.\n- Intern mobil: Registrerer inventar og bygger flåter ute i felt.\n- Kunde-backoffice: Administrerer flåter, brukere og rapportering.\n- Kundeapp: Registrerer eiendeler og melder vedlikehold.\n\nAlle produkter deler samme komponentsystem og rollebaserte flyter, slik at data og handlinger henger sammen.",
    ],
    outcome: [
      "**Resultat**\n- Fullt scope levert to uker tidligere enn estimert\n- Bufferen ble brukt til uforutsette avklaringer og til å finjustere og innarbeide nye kundeønsker\n- Overleveringsklart designgrunnlag selv om løsningen ikke ble satt i produksjon",
    ],
  },
  {
    slug: "portfolio-insight",
    title: "Portfolio Insight",
    subtitle:
      "Rollebasert SaaS for KPI-rapportering og oppfølging av verdidrivere i porteføljeselskaper.",
    logo: "/logos/portfolio-insight.svg",
    heroText:
      "**Utfordring**\nRapportering skjedde i regneark og e-post, uten felles definisjoner eller sporbarhet.\nTall måtte kvalitetssikres manuelt, og beslutninger ble forsinket.\n\nMålet var en felles arbeidsflate som gjør KPI-rapportering konsistent og oppfølging mulig i sanntid.",
    context: [
      "**Produktet**\nPortfolio Insight er en rollebasert SaaS-arbeidsflate for investeringsmiljøer og porteføljeselskaper.\n\nLøsningen gir:\n- Standardiserte KPI-maler som gjør tall sammenlignbare\n- Strukturert innrapportering per periode med full sporbarhet\n- Sanntidsoversikt av mål, avvik og verdidrivere\n- Datagrunnlag som kan bygges videre til trend- og prediktiv innsikt",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for informasjonsarkitektur, rapporteringsflyt og prototyper for MVP.\n\n- Definerte KPI-maler og inputkrav for sammenlignbarhet\n- Designet rollebaserte visninger for investorer og porteføljeselskaper\n- Spesifiserte krav til logging, validering og kvalitetssikring",
    ],
    process: [
      "**Løsning**\nLøsningen gjør kvalitet på vurderinger målbar og sammenlignbar.\n- Vurderinger benchmarkes mot historiske vurderinger per KPI\n- Valideres mot objektive metrikker og terskelverdier\n- Konsistenssjekk mellom brukere og selskaper flagger avvik\n- Automatiske varsler ved terskelavvik og krav om begrunnelse ved ekstreme vurderinger\n- Alle endringer logges med bruker og tidspunkt",
      "**Struktur**\nArbeidsflaten følger én standard rytme for innrapportering og oppfølging.\n- Rapportering per selskap og periode med faste felt og definisjoner\n- Driver-oppfølging koblet til KPI-avvik og tiltak\n- Porteføljeoversikt for investeringsmiljø med prioriteringer\n- Selskapsside med historikk, kommentarer og dokumentasjon",
    ],
    outcome: [
      "**Resultat**\n- Raskere beslutninger fordi tall og avvik er synlige i sanntid\n- Høyere datakvalitet gjennom validering og konsistente maler\n- Tydelig ansvar med full sporbarhet på hver innrapportering\n- Skalerbar rapportering på tvers av porteføljeselskaper",
    ],
  },
  {
    slug: "credit-builder",
    title: "Credit Builder",
    subtitle:
      "Kredittkort for unge førstegangsbrukere med integrert kredittscore og belønningssystem.",
    logo: "/images/projects/Credit Builder Card.svg",
    heroText:
      "**Utfordring**\nKredittspråk og vilkår er ofte uklare for unge førstegangsbrukere.\nProduktet måtte gjøre sammenhengen mellom atferd og fordeler konkret og trygg i hverdagsbruk.",
    context: [
      "**Produktet**\nCredit Builder er et kredittkortkonsept som samler læring, belønning og kortstyring i én helhet.\nFire moduler knytter onboarding, dashboard, nivåsystem og score-overvåking sammen.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for produktlogikk, flyt og prototyper.\nDefinerte struktur, innhold og målepunkt for en implementerbar løsning.",
    ],
    process: [
      "**Løsning**\nKredittspråk ble oversatt til konkrete valg og synlige fordeler.\nAtferd påvirker nivå, belønning og vilkår, og score vises med tydelige drivere.\nOnboarding setter verdiene: forstå kreditt, tjen belønning, forbedre vilkår.",
      "**Struktur**\nFire moduler henger sammen i en progresjon: onboarding, dashboard, nivåsystem og score.\nDashboard samler balanse, score, cashback og fremdrift i ett bilde.\nPrototyper ble brukt til samordning og var klare for videre utvikling.",
    ],
    outcome: [
      "**Resultat**\n- Implementerbar produktarkitektur og felles forståelse av kreditt\n- Bedre datagrunnlag for beslutninger gjennom tydelige prototyper\n- Levert to uker før estimat med tid til finjustering",
    ],
  },
  {
    slug: "scoreflow",
    title: "ScoreFlow",
    subtitle:
      "Konkurranseplattform for strukturert vurdering og automatisk rangering av bidrag.",
    logo: "/logos/scoreflow.svg",
    heroText:
      "**Utfordring**\nVurderinger ble gjort ulikt og manuelt, med mye tolkning fra dommer til dommer.\nDet skapte usikkerhet rundt rettferdighet og krevde tidkrevende kontroll.\nMålet var ett felles system for konsistent scoring og tydelig resultatgrunnlag.",
    context: [
      "**Produktet**\nScoreFlow er en plattform som standardiserer vurdering av bidrag mot definerte kriterier.\nDen samler innsending, scoring og resultatvisning i en felles arbeidsflyt.\nFokus er på skalerbar vurdering, sporbarhet og bedre beslutninger.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for å strukturere scoringslogikk og flyt.\nPrototyperte vurderingsløp og justerte kriterier sammen med fagmiljøet.\nSikret at oppsett, begreper og prioritering hang sammen.",
    ],
    process: [
      "**Løsning**\nScoreFlow gjør scoring lik for alle ved å låse kriterier før vurdering.\nBeregning av poeng skjer automatisk, med synlig grunnlag per bidrag.\nDommerne får en ryddig flyt som reduserer friksjon og skjevhet.",
      "**Struktur**\nKriterier og skalaer defineres på forhånd.\nReviewer-flyt samler tildelte bidrag, status og fremdrift.\nResultater aggregeres og vises i oversiktlige dashboards.",
    ],
    outcome: [
      "**Resultat**\n- Mer konsistent scoring og mindre skjevhet mellom dommere\n- Skalerbar vurdering uten manuelle regneark\n- Tydeligere beslutningsgrunnlag og bedre transparens",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
