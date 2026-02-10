export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  logo: string;
  context: string[];
  role: string[];
  process: string[];
  outcome: string[];
};

export const projects: Project[] = [
  {
    slug: "credit-builder",
    title: "Credit Builder",
    subtitle:
      "Gjorde et komplekst kredittkortkonsept forståelig og testbart ved å strukturere produktlogikk og sikre riktige designpremisser.",
    logo: "/images/projects/Credit Builder Card.svg",
    context: [
      "**Kontekst**\nEt kredittkort rettet mot unge voksne med liten kreditthistorikk. Produktet kombinerte onboarding, kredittscore, tier-system, cashback og målsetting i én sammenhengende opplevelse.",
      "**Utfordring**\nÅ få hele systemet til å henge sammen – og gjøre det forståelig.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for strukturering av brukerreiser, interaksjonsdesign/prototyping og avklaringer rundt scope og premisser.",
      "**Leveranse**\nDelbare prototyper for review og iterasjon.",
    ],
    process: [
      "**Oppdaterte designpremisser**\nAvdekket at mobilbanken hadde nytt design – unngikk at vi bygget på et utdatert visuelt grunnlag.",
      "**Strukturerte onboarding**\nReduserte kompleksiteten til tre tydelige budskap: forstå kredittscore → tjen belønning → få bedre vilkår.",
      "**Ryddet i dashboardet**\nPrioriterte kjerneinformasjon og skilte tydelig mellom kortadministrasjon og medlemslogikk.",
      "**Gjorde løsningen reviewbar**\nBygget strukturerte “happy flows” som muliggjorde presis feedback og små iterasjoner.",
    ],
    outcome: [
      "**Hva endret seg**\nFra funksjonsliste → til tydelig produktarkitektur.",
      "**Hva endret seg**\nFra fragmentert verdifortelling → til klar progresjon.",
      "**Hva endret seg**\nFra risiko for utdatert design → til oppdatert og relevant kontekst.",
    ],
  },
  {
    slug: "portfolio-insight",
    title: "Portfolio Insight",
    subtitle:
      "Rollebasert SaaS for porteføljeoppfølging i et investeringsmiljø.\nNavn og detaljer er anonymisert av hensyn til konfidensialitet.\nJeg gjorde løsningen operativ ved å strukturere data og dashboards til en MVP som støttet reelle beslutninger.",
    logo: "/logos/portfolio-insight.svg",
    context: [
      "**Kontekst**\nBehov for å standardisere rapportering og forenkle kommunikasjon mellom investorer og porteføljeselskaper gjennom ett felles grensesnitt.",
      "**Problem**\nManuelle rutiner ga inkonsistente tall, lav sporbarhet og mye tid brukt på oppfølging i flere kanaler.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for innsikt, struktur, interaksjonsdesign og prototyping.",
      "**Leveranse**\nWireframes og interaktive prototyper for dashboards, KPI-oversikt og rollebasert tilgang, tett koblet til utvikling.",
    ],
    process: [
      "**Kartla arbeidsflyt og beslutninger**\nIntervjuer/workshops for å forstå hvilke KPI-er som faktisk styrer oppfølging og prioritering.",
      "**Definerte informasjonsarkitektur**\nStrukturerte navigasjon, begreper og visningsnivåer slik at data ble forståelig og sammenlignbar.",
      "**Designet rollebasert tilgang**\nSkapte tydelige “views” for ulike behov (oversikt vs. detalj) uten å overvelde brukeren.",
      "**Bygget dashboard-mønstre**\nKomponentiserte KPI-kort, trender og avvik slik at nye porteføljeselskaper kunne legges til uten å redesigne alt.",
      "**Itererte med brukertesting**\nTestet tidlig for å fange misforståelser i KPI-er og justerte språk, rekkefølge og prioritet.",
    ],
    outcome: [
      "**Hva endret seg**\nFra manuell og fragmentert rapportering → til en samlet arbeidsflate med standardisert struktur.",
      "**Hva endret seg**\nFra “data finnes, men brukes ikke” → til dashboards som støttet konkrete oppfølgingsbeslutninger.",
      "**Hva endret seg**\nFra ad hoc-kommunikasjon → til tydelig rolle- og ansvarsklarhet i hva som rapporteres og når.",
    ],
  },
  {
    slug: "assetcycle",
    title: "AssetCycle",
    subtitle:
      "Plattform for sirkulær ressursstyring i kontormiljøer.\nNavn og detaljer er anonymisert av hensyn til konfidensialitet.\nJeg oversatte komplekse arbeidsprosesser til tydelige flyter og et skalerbart designsystem.",
    logo: "/logos/assetcycle.svg",
    context: [
      "**Kontekst**\nBærekraftig ressursbruk krever oversikt over inventar, tilstand og flyt mellom lokasjoner — ofte uten gode verktøy.",
      "**Behov**\nBrukerne trengte en enkel måte å registrere, finne, flytte og gjenbruke møbler med tydelige regler og status.",
    ],
    role: [
      "**Min rolle**\nUX-/produktdesigner med ansvar for innsikt, workshops, flyter og UI på desktop og mobil.",
      "**Leveranse**\nInteraktive prototyper + etablering av et designsystem som støttet WCAG og rask implementering.",
    ],
    process: [
      "**Ledet innsikt og problemdefinisjon**\nIntervjuer og workshops for å forstå kjerneoppgaver og friksjon i eksisterende rutiner.",
      "**Definerte kjerneflyter**\nRegistrering → søk/oversikt → status/tilstand → flytt/ombruk, med tydelige states og ansvar.",
      "**Prioriterte informasjonsdesign**\nGjorde data forståelig med konsistent struktur, etiketter og visuell hierarki.",
      "**Etablerte designsystem**\nKomponenter og mønstre tilpasset WCAG og tett koblet til utviklingspraksis.",
      "**Itererte med brukertesting**\nJusterte språk, rekkefølge og UI-states basert på tilbakemeldinger fra faktiske scenarier.",
    ],
    outcome: [
      "**Hva endret seg**\nFra fragmenterte rutiner → til en tydelig produktflyt for registrering, oversikt og ombruk.",
      "**Hva endret seg**\nFra “inventar som liste” → til en operativ arbeidsflate med status, ansvar og handling.",
      "**Hva endret seg**\nFra inkonsistent UI → til et designsystem som gjorde videre utvikling raskere og mer forutsigbar.",
    ],
  },
  {
    slug: "scoreflow",
    title: "ScoreFlow",
    subtitle:
      "Struktur for vurdering og rangering i en konkurranseplattform.\nNavn og detaljer er anonymisert av hensyn til konfidensialitet.\nJeg gjorde vurderingslogikk robust ved å strukturere regler, scoring og edge cases i en sammenhengende brukeropplevelse.",
    logo: "/logos/scoreflow.svg",
    context: [
      "**Kontekst**\nPlattformen trengte tydeligere struktur i alt fra påmelding til vurdering og resultater.",
      "**Kjerneproblem**\nScoring var vanskelig å forstå og vanskelig å gjennomføre konsistent når flere dommere og kriterier var involvert.",
    ],
    role: [
      "**Min rolle**\nUX-/produktdesigner med ansvar for redesign av kjerneflyter og struktur for judging & scoring.",
      "**Leveranse**\nWireframes og prototyper for innsending, vurdering, poengsetting og resultatsider — inkludert regelsett og edge cases.",
    ],
    process: [
      "**Kartla scoring-logikk**\nDefinerte kriteriegrupper, skalaer og hvordan poeng summeres/vektes.",
      "**Designet vurderingsflyt**\nGjorde det enkelt å vurdere mange bidrag uten å miste oversikt eller konsistens.",
      "**Håndterte edge cases**\nInkluderte rangering, tie-breakers og tydelige states for ufullstendige vurderinger.",
      "**Forenklet navigasjon**\nStrukturerte informasjonsarkitektur slik at deltakere og dommere fant riktig sted raskt.",
      "**Itererte på forståelighet**\nJusterte språk, rekkefølge og visuell feedback for å gjøre scoring transparent.",
    ],
    outcome: [
      "**Hva endret seg**\nFra utydelig vurdering → til et strukturert judging & scoring-system med klare regler.",
      "**Hva endret seg**\nFra manuell “tommelfinger”-vurdering → til konsistente kriterier og tydelig feedback i UI.",
      "**Hva endret seg**\nFra sårbar rangering → til robust håndtering av edge cases og forutsigbare resultater.",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
