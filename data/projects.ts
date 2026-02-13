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
    subtitle: "Digital infrastruktur for sirkulær ressursforvaltning",
    logo: "/images/projects/resource/SenseOn Backoffice Macbook Mockup.svg",
    heroText:
      "Re:Source startet som en ambisjon om å erstatte manuell inventarhåndtering med en skalerbar plattform for sirkulær ressursforvaltning.\nInventar ble registrert i regneark, flyttet via e-post og dokumentert i separate systemer.",
    context: [
      "Data var fragmentert.\nProsessene var personavhengige.\nPlattformen kunne ikke vokse uten struktur.\n\nLøsningen besto av fire produkter for ulike roller – admin/backoffice, intern app, kunde-backoffice og kundeapp.\nUten tydelig rollelogikk og eierskap ville opplevelsen bli fragmentert.",
    ],
    role: [
      "Oppgaven var ikke å “designe en app”, men å definere hvordan hele systemet skulle henge sammen.\nRoller, eierskap, dataflyt og livssyklus ble definert før noe visuelt ble besluttet.\n\nJeg startet derfor med systemlogikken før UI.\nFullstendige flytdiagrammer avdekket hull og uklarheter tidlig.\nHvis noe ikke hang sammen i flyten, stoppet vi og løste det før det ble design.",
    ],
    process: [
      "For å sikre konsistens bygget jeg et designsystem fra bunnen av.\nKomponenter og states ble laget med produksjon i tankene – ikke bare presentasjon.\n\nFlytene ble brukt aktivt til å estimere fremdrift basert på komponentgjenbruk.\nLeveransen ble ferdig to uker før planlagt, noe som ga rom for finjustering og håndtering av uforutsette behov.",
    ],
    outcome: [
      "Resultatet var en hel digital infrastruktur – ikke bare prototyper.\nEn tydelig produktarkitektur som kunne overleveres til utvikling uten å måtte redesignes.\n\nI ettertid ville jeg dokumentert beslutningslogikken enda mer eksplisitt for å gjøre onboarding av nye designere raskere.",
    ],
  },
  {
    slug: "credit-builder",
    title: "Credit Builder",
    subtitle: "Kredittkort for førstegangsbrukere",
    logo: "/images/projects/Credit Builder Card.svg",
    heroText:
      "Credit Builder ble utviklet for unge brukere uten kreditthistorikk.\nUtfordringen var ikke bare å lage et nytt kredittkort – men å gjøre kreditt forståelig.",
    context: [
      "Tradisjonelle kort forklarer vilkår, men de forklarer ikke sammenhenger.\nKredittspråk er komplekst.\nMange unge ser ikke hvordan egen atferd påvirker score, rente og fremtidige vilkår.\n\nOppgaven var å strukturere et kredittkortkonsept som integrerer kredittscore, medlemsnivåer, belønning og kortadministrasjon i én operativ mobilbankopplevelse.",
    ],
    role: [
      "Jeg reduserte kompleksiteten til tre kjerneverdier:\nForstå kreditt → tjen belønning → forbedre vilkår.\n\nProduktet ble strukturert i tydelige moduler: onboarding, dashboard, medlemsnivå og score-monitorering.\nAtferd ble koblet direkte til konsekvens: brukerhandling → progresjon → cashback → bedre vilkår.\nPå den måten ble kreditt ikke bare forklart – den ble opplevd.",
    ],
    process: [
      "Delbare prototyper fungerte som beslutningsverktøy.\nDe gjorde det mulig å teste helheten før utvikling.\nSamtidig ble designpremisser avklart tidlig for å unngå å bygge på utdatert visuell kontekst.\n\nResultatet var en helhetlig produktarkitektur som gikk fra konsept til implementerbar løsning i operativ kontekst.",
    ],
    outcome: [
      "Skulle jeg gjort det igjen, ville jeg testet enda tidligere hvordan brukere faktisk forstår sammenhengen mellom APR og atferd.",
    ],
  },
  {
    slug: "portfolio-insight",
    title: "Portfolio Insight",
    subtitle: "Rollebasert rapporteringsplattform",
    logo: "/logos/portfolio-insight.svg",
    heroText:
      "Portfolio Insight ble utviklet for et investeringsmiljø med flere porteføljeselskaper.\nRapportering foregikk via regneark og e-post.",
    context: [
      "Data var inkonsistente, forsinkede og vanskelige å sammenligne.\nVurderinger var subjektive, og beslutninger ble tatt på fragmentert grunnlag.\n\nMålet var å samle KPI-rapportering og vurdering av verdidrivere i én strukturert SaaS-arbeidsflate.",
    ],
    role: [
      "Jeg startet med logikken, ikke grensesnittet.\nHva er en driver?\nHvem vurderer den?\nHva skjer når en vurdering avviker?\n\nFørst når dette var definert, kunne det visualiseres.",
    ],
    process: [
      "Systemet fikk innebygget validering: historisk sammenligning, peer-avviksvarsler og kommentarplikt ved ekstreme vurderinger.\nRollebaserte flater sikret at selskap og investor hadde riktig innsikt, ikke bare samme skjerm.\n\nPlattformen ble designet for sanntid – ikke etterskuddsrapportering.\nData ble tilgjengelig når den ble lagt inn, ikke når et dokument ble sendt.",
    ],
    outcome: [
      "Resultatet var et skifte fra manuell og subjektiv rapportering til strukturert, konsistent og transparent innsikt.\n\nNeste gang ville jeg definert terskelverdier sammen med domeneeksperter enda tidligere for å styrke kalibreringen av systemet.",
    ],
  },
  {
    slug: "scoreflow",
    title: "ScoreFlow",
    subtitle: "Strukturert evalueringsplattform",
    logo: "/logos/scoreflow.svg",
    heroText:
      "ScoreFlow adresserte et kjent problem: manuell scoring i konkurranser gir inkonsistens, ulik tolkning av kriterier og manuell summering.\nNår antall bidrag øker, øker også risiko for bias og feil.",
    context: [
      "Oppgaven var å designe en strukturert løsning for vurdering, vekting og automatisk beregning av resultater.\n\nJeg definerte kriterielogikk og vekting før designet startet.\nHvilke parametere avgjør resultat?\nHvordan håndteres tie-breakers?\nHva skjer ved avvikende vurderinger?",
    ],
    role: [
      "Dommerflyten ble strukturert fra individuell vurdering til aggregert resultat med full transparens.\nBeregning ble automatisert.\n\nSystemet ble designet slik at konsistens ikke er avhengig av hvem som scorer.",
    ],
    process: [
      "Resultatet var en overgang fra manuell og subjektiv vurdering til en standardisert og skalerbar struktur med tydelig sporbarhet.\n\nI neste iterasjon ville jeg inkludert en mer eksplisitt peer-review-mekanisme for ytterligere kvalitetssikring.",
    ],
    outcome: [],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
