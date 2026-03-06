export type ProjectMockup = {
  src: string;
  type: "laptop" | "phone";
};

export type ProjectStorySection = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type ProjectStory = {
  sections: ProjectStorySection[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description?: string;
  logo?: string;
  mockups?: ProjectMockup[];
  story: ProjectStory;
};

const projectOrder = [
  "re-source",
  "credit-builder",
  "scoreflow",
  "portfolio-insights",
] as const;

const projectOrderIndex = Object.fromEntries(
  projectOrder.map((slug, index) => [slug, index]),
) as Record<string, number>;

const projectLibrary: Project[] = [
  {
    slug: "credit-builder",
    title: "Credit Builder",
    subtitle: "Kredittkonsept for Emerging Prime",
    description:
      "Et atferdsdrevet kredittkortkonsept som gjør kredittscore forståelig og handlingsbar for unge voksne.",
    logo: "/images/projects/credit-builder-card.svg",
    story: {
      sections: [
        {
          title: "Kort fortalt",
          body:
            "Jeg designet et atferdsdrevet kredittkortkonsept for en banks mobilapplikasjon som gjør kredittscore forståelig, handlingsbar og mindre stressende for unge voksne. Løsningen ble bygget som en guidet mestringsreise og validert i en kvantitativ konsepttest med over 1 000 respondenter, der Credit Builder rangerte høyest totalt og spesielt sterkt i aldersgruppen 18–24.", }, {
          title: "Kontekst",
          body:
            "Unge voksne i starten av kredittlivet, med begrenset historikk og høy følsomhet for uforutsigbarhet møter ofte grenser, priser og straff, men mangler tydelig veiledning, kontroll på tilbakebetaling og konkrete verktøy for å bygge gode vaner i dagens kredittprodukter. Målet var å designe en opplevelse som gjør kredittscore synlig og handlingsbar, reduserer stress rundt minimumsbetaling og samtidig er kommersielt robust. ",
        },
        {
          title: "Rolle",
          body:
            "Lead UX og Product Designer i konsept- og prototypefase. Jeg eide produktretning, informasjonsarkitektur, kjerneflyter, mestringsmekanismer, prototyping og formidling mot interessenter på tvers av design, produkt og business.",
        },
        {
          title: "Prosess",
          body:
            "Jeg startet med å definere problemet fra både brukerens og bankens perspektiv. Emerging Prime er en krevende målgruppe fordi de ofte mangler erfaring med kreditt, mens tradisjonelle kredittkort er laget for mer etablerte kunder. Derfor kartla jeg først hvilke beslutninger brukeren faktisk må ta i hverdagen, og hvor friksjonen oppstår. I stedet for å starte med funksjoner, strukturerte jeg produktet rundt handlinger som forbedrer kredittscore, og utviklet en enkel modell for opplevelsen: mål, handling, belønning og trygghet. Denne modellen ble grunnlag for informasjonsarkitektur, flyter og funksjoner. Derfra jobbet jeg iterativt med produktstrukturen og de fem hovedreisene, brukte prototyper for å teste om mekanismene var forståelige og motiverende, og dokumenterte forretningshypoteser for å sikre at konseptet støttet lavere risiko og høyere engasjement.",
        },
        {
          title: "Leveranse",
          body:
            "Jeg leverte et helhetlig konsept som flytter kredittkortet fra passiv betalingsmekanisme til en guidet progresjonsreise med tydelig sammenheng mellom brukeradferd, belønning og risikokontroll.",
        },
        {
          title: "Forretningshypoteser og risikoreduksjon",
          body:
            "Konseptet ble koblet til tydelige hypoteser om vekst, risiko og langsiktig verdi.",
          bullets: [
            "Økt penetrasjon i målgruppen gjennom en mer relevant og pedagogisk kredittopplevelse.",
            "Lavere misligholdsrisiko ved å belønne ønsket adferd tidlig, ikke bare straffe avvik sent.",
            "Høyere livstidsverdi gjennom varige vaner, progresjon og gjentatt bruk.",
            "Sterkere differensiering i et kredittmarked med ellers like produkter.",
            "Bedre grunnlag for kryssalg i et større finansielt økosystem.",
          ],
        },
        {
          title: "Modell for mestring og kontroll",
          body:
            "Kjernemodellen ble bygget som en enkel sløyfe: mål -> handling -> belønning -> trygghet.",
          bullets: [
            "Mål: Goal Engine gjør kredittscore-mål konkret med delmål og anbefalte tiltak.",
            "Handling: Daglige valg oversettes til tydelige handlinger i dashboard og kortkontroll.",
            "Belønning: Future Fund og tier-system gjør ansvarlig adferd synlig og attraktiv over tid.",
            "Trygghet: Cushion via round ups reduserer betalingsstress, og Price Promise kobler disiplin til bedre vilkår.",
          ],
        },
        {
          title: "Fem hovedreiser som bygger progresjon",
        },
      ],
    },
  },
  {
    slug: "scoreflow",
    title: "Compete",
    subtitle: "Skalerbar konkurranseplattform",
    description:
      "En gamifisert konkurranseplattform med et tydelig rammeverk for dømming, scoring og ranking.",
    logo: "/logos/compete.svg",
    story: {
      sections: [
        {
          title: "Kort fortalt",
          body:
            "Jeg utviklet en mer troverdig og skalerbar konkurransemotor for en utfordringsplattform ved å definere et tydelig rammeverk for dømming og scoring, og ved å rydde opp i navigasjonen samt styrke samspillet mellom design og utvikling..",
        },
        {
          title: "Kontekst",
          body:
            "Plattformen hadde inkonsistens mellom Figma og implementert UI, fragmentert navigasjon med dead ends og en vinnerlogikk som var for løs til at konkurranser føltes rettferdige. Samtidig bygget produktet opp teknisk og visuell gjeld som gjorde videre utvikling tregere og mer risikabel.",
        },
        {
          title: "Rolle",
          body:
            "Lead UX Designer. Jeg eide rammeverk for scoring og vurdering, restrukturering av kjerneflyter og etablering av et produksjonsnært designsystem i Figma basert på eksisterende frontend.",
        },
        {
          title: "Prosess",
          body:
            "Utgangspunktet var en plattform som hadde vokst organisk, der design og implementasjon ikke lenger var i synk. Før jeg tegnet nye løsninger brukte jeg tid på å forstå hvordan produktet faktisk fungerte i produksjon. Jeg tok utgangspunkt i eksisterende frontend som fasit, og kartla komponenter, tokens og navigasjonsmønstre for å identifisere inkonsistenser. Parallelt analyserte jeg kjerneflytene for å finne hvor brukere mistet kontekst eller traff dead ends, med mål om en mer sammenhengende og forutsigbar navigasjon. Når strukturen var tydeligere, utviklet jeg et robust rammeverk for scoring og vurdering med tydelige kriterier, vekting og rangering, slik at konkurranser kan skaleres uten at hver chall trenger egne regler.",
        },
        {
          title: "Leveranse",
          body:
            "Leveransen besto av et produksjonsnært designsystem, kjerneflyt uten dead ends og et skalerbart rammeverk for scoring og domming.",
        },
        {
          title: "Produksjonsnært designsystem",
          body:
            "Jeg tok utgangspunkt i produksjonskoden og formaliserte tokens og komponenter til et system i Figma. Det inkluderte strukturert farge- og typografihierarki, komponenter med varianter og states, avatar-system med status, navigasjonskomponenter med aktive states og en hero-løsning som håndterer flere verter.",
        },
        {
          title: "Kjerneflyt uten dead ends",
          body:
            "Jeg restrukturerte opplevelsen til en sammenhengende navigasjonsloop mellom feed, chall room, contributions og profiler. Målet var at back og innganger alltid skulle returnere til riktig kontekst, og at contribution view skulle være konsistent uavhengig av hvor brukeren kom fra.",
        },
        {
          title: "Scoring og domming som tåler skala",
          body:
            "Jeg definerte et fleksibelt vurderingsrammeverk med kriterier og underkriterier, vektet scoring, automatisk ranking, tydelige tie breakers og håndtering av edge cases som manglende vurderinger og diskvalifisering.",
        },
        {
          title: "Forretningslogikk",
          body:
            "Rammeverket var laget for å øke tillit og fullføringsgrad i konkurranser, samtidig som det gjør produktet enklere å videreutvikle uten å bygge nye regler for hver chall.",
        },
      ],
    },
  },
  {
    slug: "portfolio-insights",
    title: "Portfolio Insights",
    subtitle: "Rollebasert KPI-rapportering",
    description:
      "En SaaS-plattform for porteføljerapportering som gjør KPI-data mer konsistent, etterprøvbar og nyttig i beslutninger.",
    logo: "/images/projects/portfolio-insights-desktop-mockup.png",
    story: {
      sections: [
        {
          title: "Kort fortalt",
          body:
            "Jeg designet en SaaS-plattform som samler porteføljeselskaper og investorer i ett felles KPI- og rapporteringssystem, med mekanismer som gjør data mer konsistent, mer etterprøvbar og enklere å bruke i beslutninger.",
        },
        {
          title: "Kontekst",
          body:
            "Porteføljerapportering skjer ofte i regneark og e-post, med ulik definisjon av KPIer, varierende datakvalitet og sen beslutningsstøtte. I tillegg brukes subjektive ratinger ofte i oppfølging, men de blir fort bias og lite sammenlignbare uten struktur.",
        },
        {
          title: "Rolle",
          body:
            "UX og Product Designer med ansvar for produktstruktur, informasjonsarkitektur, prototyping og mekanismer for datakvalitet og ansvarlighet i brukeropplevelsen.",
        },
        {
          title: "Prosess",
          body:
            "Prosjektet startet med å forstå hvordan porteføljerapportering faktisk skjer i praksis, ofte gjennom regneark, e-post og manuelle oppsummeringer. Første steg var å kartlegge hvilke datapunkter som brukes, hvem som eier dem, og hvordan de inngår i beslutninger. I stedet for å starte med enkeltgrensesnitt begynte jeg med informasjonsstrukturen: hvilke KPI-er som må rapporteres, hvordan de henger sammen og hvilke roller som trenger tilgang til hva. Derfra utviklet jeg mekanismer i opplevelsen for å sikre datakvalitet, som validering mot historiske trender, konsistenssjekker mellom KPI-er og krav om begrunnelse ved avvik. Prototyper ble brukt iterativt for å teste hvordan rapporteringen kan være strukturert uten å bli tung å bruke.",
        },
        {
          title: "Leveranse",
          body:
            "Leveransen besto av struktur for innsamling og oppfølging, valideringsmekanismer for subjektive vurderinger og tydelig etterprøvbarhet i data.",
        },
        {
          title: "Struktur for innsamling og oppfølging",
          body:
            "En felles modell for innsamling, validering og analyse på tvers av selskaper og roller, med standardisert input og tydelig eierskap.",
        },
        {
          title: "Validering av subjektive vurderinger",
          body:
            "Mekanismer som gjør ratinger mer troverdige og sammenlignbare: benchmarking mot historikk, validering mot objektive KPIer, avviksdeteksjon via konsistenssjekker, varsler ved avvik og krav om begrunnelse ved ekstreme vurderinger.",
        },
        {
          title: "Etterprøvbarhet og historikk",
          body:
            "Audit trail-tenkning som kobler datapunkt til ansvar, endringer og tidspunkt, slik at rapportering tåler etterkontroll og det er tydelig hva beslutninger er basert på.",
        },
        {
          title: "Forretningslogikk",
          body:
            "Løsningen er laget for å redusere manuelt arbeid, øke datakvalitet og korte ned tiden fra rapportering til beslutningsgrunnlag, samtidig som den bygger en historikk som gir bedre trendforståelse over tid.",
        },
      ],
    },
  },
  {
    slug: "re-source",
    title: "Re:Source",
    subtitle: "Produktfundament fra null",
    description:
      "Et digitalt system for å registrere, spore og forvalte inventar gjennom hele livssyklusen.",
    logo: "/images/projects/resource/re-source-qr-card.png",
    story: {
      sections: [
        {
          title: "Kort fortalt",
          body:
            "Jeg bygget et komplett produktfundament for et inventar- og sirkulærøkonomi-økosystem før utvikling, i en situasjon uten utviklingsteam og uten finansiering.Leveransen var en klikkbar prototype og et designsystem som var klart for overlevering til engineering, og prosjektet ble ferdigstilt to uker før estimat.",
        },
        {
          title: "Kontekst",
          body:
            "Prosjektet måtte fungere som beslutningsgrunnlag for investorer og kunder, samtidig som det måtte være realistisk å bygge hvis finansiering kom på plass. Risikoen var å ende med en prototype som ser bra ut, men som mangler modell, states og regler til å fungere i praksis.",
        },
        {
          title: "Rolle",
          body:
            "Lead designer i en pre-engineering-fase. Jeg eide informasjonsarkitektur, rolle og tilgang, kjerneflyter, designsystem, prototyping og dokumentasjon som grunnlag for videre utvikling.",
        },
        {
          title: "Prosess",
          body:
            "Prosjektet startet i en fase uten teknisk plattform eller utviklingsteam, så designarbeidet måtte fungere som fundament for videre produktutvikling. Jeg begynte med systemets grunnstruktur og jobbet først med datamodellen og relasjonene mellom objekter, siden inventar må spores over tid, flyttes mellom lokasjoner og gjennom flere livssyklusfaser. Når strukturen var tydelig, delte jeg produktet i fire flater med ulike roller og behov: administrasjon, intern registrering, kunde-backoffice og feltapplikasjon. Jeg etablerte et designsystem tidlig for å kunne produsere raskere og mer konsistent, og brukte flytdiagrammer aktivt for å estimere skjermvolum, identifisere gjenbruk og strukturere milepæler.",
        },
        {
          title: "Leveranse",
          body:
            "Leveransen dekket produktøkosystem, systemmodell, designsystem og planlegging for gjennomførbar engineering.",
        },
        {
          title: "Produktøkosystem med fire flater",
          bullets: [
            "Admin og backoffice for masterdata, roller, verifisering og oversikt.",
            "Intern app for QR-basert registrering.",
            "Kunde-backoffice for fleet management og service.",
            "Kundeapp for rapportering og vedlikehold i felt.",
          ],
        },
        {
          title: "Systemmodell og livssykkel",
          body:
            "Jeg modellerte objekt- og hendelseslogikk som grunnlag for konsistente flyter: Base Unit, Instance, Series, Fleet, Event og Verification. Dette gjorde det mulig å designe rollebaserte handlinger, statusendringer, historikk og sporbarhet på tvers av flater.",
        },
        {
          title: "Designsystem før høyvolum produksjon",
          body:
            "Jeg etablerte et komponent- og tokensystem med tydelige states, semantiske farger, typografi, modulær form og valideringsmønstre. Målet var gjenbruk, konsistens og mindre rework.",
        },
        {
          title: "Planlegging med flyt og gjenbruk",
          body:
            "Jeg brukte flytdiagrammer til å beregne skjermvolum, identifisere gjenbruk, estimere produksjonstakt og styre milepæler. Med økende gjenbruk økte farten, og leveransen ble ferdig to uker før estimat.",
        },
        {
          title: "Forretningslogikk",
          body:
            "Arbeidet reduserte teknisk og produktmessig risiko før utvikling ved å avklare modell, roller og state transitions, og ved å etablere et skalerbart UI-fundament som tåler videre produktutvikling.",
        },
      ],
    },
  },
];

export const projects: Project[] = [...projectLibrary].sort((a, b) => {
  const aOrder = projectOrderIndex[a.slug] ?? Number.MAX_SAFE_INTEGER;
  const bOrder = projectOrderIndex[b.slug] ?? Number.MAX_SAFE_INTEGER;

  return aOrder - bOrder;
});

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
