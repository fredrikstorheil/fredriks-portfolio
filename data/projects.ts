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
    slug: "credit-builder",
    title: "Credit Builder",
    subtitle:
      "Kredittkort for unge førstegangsbrukere med integrert kredittscore og belønningssystem.",
    logo: "/images/projects/Credit Builder Card.svg",
    heroText:
      "**Utfordring**\nKredittscore, renter og vilkår kommuniseres ofte i et språk som er vanskelig å forstå for nye brukere.\nMange førstegangsbrukere ser ikke sammenhengen mellom egen atferd og økonomiske konsekvenser.\n\nLøsningen måtte gjøre denne sammenhengen tydelig og konkret.",
    context: [
      "**Produktet**\nCredit Builder ble utviklet som en del av en eksisterende mobilbank.\n\nLøsningen gir brukeren:\n- Oversikt over kredittscore og påvirkningsfaktorer\n- Progresjon gjennom nivåsystem basert på bruk\n- Cashback og forbedrede vilkår ved ansvarlig atferd\n- Full kortadministrasjon i samme grensesnitt\n\nProduktet kobler sammen kredittforståelse og faktisk kortbruk i én sammenhengende opplevelse.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for informasjonsarkitektur, brukerreiser og interaktive prototyper som dannet grunnlag for implementering.",
    ],
    process: [
      "**Løsning**\nLøsningen oversetter kredittspråk til progresjon.\n- Atferd kobles direkte til nivå og fordeler\n- Kredittscore visualiseres med tydelige påvirkningsfaktorer\n- Belønning og vilkår presenteres som resultat av riktig bruk\n- Viktigste informasjon prioriteres i dashboardet\n\nProduktet er bygget for å gjøre kreditt forståelig gjennom struktur, ikke forklaring alene.",
      "**Struktur**\n- Onboarding: Forklarer hvordan kreditt bygges og hva som påvirker score.\n- Medlemsnivåer: Riktig bruk gir progresjon og konkrete fordeler.\n- Dashboard: Balanse, progresjon og belønning er synlig uten unødvendig kompleksitet.",
    ],
    outcome: [
      "**Resultat**\n- Strukturert og implementerbar produktarkitektur\n- Tydelig kobling mellom atferd, kredittscore og fordeler\n- Løsningen ble tatt videre og brukt i en operativ bankkontekst",
    ],
  },
  {
    slug: "portfolio-insight",
    title: "Portfolio Insight",
    subtitle:
      "SaaS for investeringsmiljøer som samler rapportering og KPI-oppfølging i én arbeidsflate.",
    logo: "/logos/portfolio-insight.svg",
    heroText:
      "**Utfordring**\nRapportering foregikk i regneark og e-post, og tallene var vanskelig å sammenligne på tvers av selskap.\nOppfølging ble tidkrevende og lite sporbar.\n\nProduktet måtte gjøre KPI-rapportering konsistent og beslutninger mulig å ta raskt.",
    context: [
      "**Produktet**\nPortfolio Insight ble bygget som en felles arbeidsflate for investorer og porteføljeselskaper.\n\nLøsningen gir brukeren:\n- Standardiserte KPI-rapporter per selskap og periode\n- Dashboard med mål, avvik og utvikling over tid\n- Rollebaserte visninger for oversikt og detalj\n- Oppfølgingspunkter knyttet til konkrete tall\n\nProduktet gjør rapportering og oppfølging til én sammenhengende flyt.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for informasjonsarkitektur, dashboardstruktur og prototyper for MVP.",
    ],
    process: [
      "**Løsning**\nLøsningen samler rapportering og oppfølging i et fast rammeverk.\n- KPI-er defineres én gang og brukes likt i alle selskaper\n- Avvik og mål vises først, detaljer ligger bak\n- Oppgaver og kommentarer knyttes til perioder og tall\n- Rollebasert tilgang styrer hva som er synlig og hvem som eier oppfølging\n\nSlik blir tall operative, ikke bare dokumentert.",
      "**Struktur**\n- Rapportering: Selskap fyller inn KPI-er med tydelige definisjoner.\n- Dashboard: Investor ser portefølje, avvik og prioriterte tiltak.\n- Selskapsside: Historikk og dokumentasjon per KPI-område.",
    ],
    outcome: [
      "**Resultat**\n- MVP med standardisert KPI-struktur og rapporteringsrytme klar for pilot\n- Mindre manuelt arbeid i sammenstilling fordi data kommer i samme format\n- Felles arbeidsflate som gir sporbarhet i oppfølging og ansvar",
    ],
  },
  {
    slug: "assetcycle",
    title: "AssetCycle",
    subtitle:
      "Plattform for registrering og gjenbruk av inventar på tvers av lokasjoner.",
    logo: "/logos/assetcycle.svg",
    heroText:
      "**Utfordring**\nInventar ble flyttet mellom kontorer uten sporbarhet, og gjenbruk krevde manuell koordinering.\nDet gjorde ansvar uklart og førte til unødvendige innkjøp.\n\nProduktet måtte gjøre status, eierskap og flyt synlig i sanntid.",
    context: [
      "**Produktet**\nAssetCycle er en operativ arbeidsflate for inventar og gjenbruk.\n\nLøsningen gir brukeren:\n- Registrering med tilstand, bilder og ansvarlig enhet\n- Søk og oversikt med filter på lokasjon og kategori\n- Flytte- og gjenbruksforespørsler med enkel godkjenning\n- Historikk per objekt for bruk, lagring og omplassering\n\nProduktet gjør inventar håndterbart som en levende ressurs.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for kjerneflyter, UI på desktop og mobil, og designsystem.",
    ],
    process: [
      "**Løsning**\nLøsningen definerer et tydelig livsløp for hvert objekt.\n- Hvert inventar får status fra registrert til i bruk, på lager eller til gjenbruk\n- Flytt og ombruk er egne handlinger med ansvarlig mottaker\n- Tilstand og bilder gir rask vurdering før beslutning\n- Lager og lokasjoner vises som konkrete steder, ikke fritekst\n\nDet gir forutsigbarhet i flyt og eierskap.",
      "**Struktur**\n- Registrering: Opprett objekt med tilstand og lokasjon.\n- Inventaroversikt: Filtrer, finn og prioriter basert på status.\n- Flytt og gjenbruk: Forespør, godkjenn og bekreft overlevering.",
    ],
    outcome: [
      "**Resultat**\n- Klar produktflyt for registrering, flytt og ombruk\n- Sporbar status og ansvar per objekt i hele livsløpet\n- Designspråk og komponenter som støtter videre utrulling",
    ],
  },
  {
    slug: "scoreflow",
    title: "ScoreFlow",
    subtitle:
      "Konkurranseplattform for strukturert vurdering og automatisk rangering av bidrag.",
    logo: "/logos/scoreflow.svg",
    heroText:
      "**Utfordring**\nScoring ble gjennomført ulikt mellom dommere, og reglene var vanskelig å følge i praksis.\nResultater måtte kontrolleres manuelt og var sårbare for feil.\n\nProduktet måtte gjøre vurdering konsistent og beregningene transparente.",
    context: [
      "**Produktet**\nScoreFlow er en vurderingsplattform for innsending, scoring og resultater.\n\nLøsningen gir brukeren:\n- Kriteriesett med skalaer og vekting per kategori\n- Dommerpanel med tildelte bidrag og status\n- Automatisk poengberegning og rangering\n- Resultatsider med grunnlag per kriterium\n\nProduktet gjør regelverk til en konkret arbeidsflyt for dommere og arrangør.",
    ],
    role: [
      "**Min rolle**\nProduktdesigner med ansvar for vurderingsflyt, regelsett og resultatvisning.",
    ],
    process: [
      "**Løsning**\nLøsningen oversetter regelverket til faste steg i scoring.\n- Kriterier og vekting defineres før konkurransen starter\n- Dommere vurderer i en strukturert liste med tydelig fremdrift\n- Scoring låses per bidrag og summeres automatisk\n- Tie-breaker-regler håndteres som en del av beregningen\n\nDet gir lik behandling av alle bidrag.",
      "**Struktur**\n- Innsending: Deltakere leverer bidrag med riktig kategori.\n- Vurdering: Dommere scorer mot kriterier med status per bidrag.\n- Resultater: Rangering, poengsummer og tie-breaker vises tydelig.",
    ],
    outcome: [
      "**Resultat**\n- Konsistent scoring på tvers av dommere og kriterier\n- Automatisk beregning og rangering uten manuelle regneark\n- Robust håndtering av tie-breakers og ufullstendige vurderinger",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
