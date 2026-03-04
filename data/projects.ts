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
  logo?: string;
  mockups?: ProjectMockup[];
  story: ProjectStory;
};

export const projects: Project[] = [
  {
    slug: "riseup",
    title: "Credit Builder",
    subtitle: "Kredittkonsept for Emerging Prime",
    logo: "/images/projects/credit-builder-card.svg",
    story: {
      sections: [
        {
          title: "Kort fortalt",
          body:
            "Jeg designet et kredittkortkonsept som gjør kredittscore forståelig og handlingsbar for Emerging Prime. Løsningen er bygget som en mestringsreise og testet best i målgruppen 18 til 24 i en konsepttest med 1 013 respondenter.",
        },
        {
          title: "Min rolle",
          body:
            "Lead UX og Product Designer i konsept og prototypefase. Jeg eide retning, informasjonsarkitektur, kjerneflyter, mestringsmekanismer, prototyping og formidling mot interessenter.",
        },
        {
          title: "Kontekst",
          body:
            "Tradisjonelle kredittkort er ofte bygget rundt grenser, priser og straff. For unge brukere skaper det stress, lav forutsigbarhet og dårlige valg. Målet var å utvikle en opplevelse som bygger gode vaner og kredittscore over tid, samtidig som modellen er kommersielt bærekraftig.",
        },
        {
          title: "Hva jeg leverte",
          body: "Leveransen besto av produktstruktur, mestringsmekanismer og tydelig forretningslogikk.",
        },
        {
          title: "Produktstruktur",
          body:
            "Fem hovedreiser som henger sammen: søknad og onboarding, dashboard, medlemskap med nivåer og belønninger, kredittscore og mål, kortkontroll og forbruksstyring.",
        },
        {
          title: "Mekanismer for mestring og kontroll",
          bullets: [
            "Goal Engine for å sette og følge kredittscore mål.",
            "Buffer gjennom round ups for å redusere betalingsstress.",
            "Future Fund som belønner god adferd over tid.",
            "Tier system som knytter progresjon til perks og fordeler.",
            "Price Promise som gir bedre vilkår ved ansvarlig bruk.",
          ],
        },
        {
          title: "Forretningslogikk",
          body:
            "Konseptet ble koblet til hypoteser om differensiering, risikoreduksjon, økt langsiktig engasjement og høyere livstidsverdi.",
        },
        {
          title: "Bevis og impact",
          bullets: [
            "Konsepttest: RiseUp rangerte høyest totalt og særlig sterkt i segmentet 18 til 24, basert på 1 013 respondenter.",
            "MVP metrics som følger direkte av løsningen: andel som setter kredittscore mål, bygger buffer og velger planlagt nedbetaling fremfor minimum.",
          ],
        },
      ],
    },
  },
  {
    slug: "chall",
    title: "ScoreFlow",
    subtitle: "Skalerbar konkurranseplattform",
    story: {
      sections: [
        {
          title: "Kort fortalt",
          body:
            "Jeg utviklet en mer troverdig og skalerbar konkurransemotor for en challenge-plattform ved å definere et tydelig rammeverk for domming og scoring, og ved å rydde opp i navigasjon og design- og utvikling-alignment.",
        },
        {
          title: "Min rolle",
          body:
            "UX og Product Designer. Jeg eide rammeverk for scoring og vurdering, restrukturering av kjerneflyter og etablering av et produksjonsnært designsystem i Figma basert på eksisterende frontend.",
        },
        {
          title: "Kontekst",
          body:
            "Plattformen hadde inkonsistens mellom Figma og implementert UI, fragmentert navigasjon med dead ends og en vinnerlogikk som var for løs til at konkurranser føltes rettferdige. Samtidig bygget produktet opp teknisk og visuell gjeld som gjorde videre utvikling tregere og mer risikabel.",
        },
        {
          title: "Hva jeg leverte",
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
        {
          title: "Bevis og impact",
          bullets: [
            "Før og etter kan vises som konkret friksjonsreduksjon: færre dead ends og færre steg til å delta og levere contribution.",
            "Målbare indikatorer i en MVP eller i produksjon: gjenbruksgrad av komponenter, reduksjon i one off-varianter, andel challs som bruker kriteriebasert scoring og fullføringsgrad på domming.",
          ],
        },
      ],
    },
  },
  {
    slug: "investor-insights",
    title: "Portfolio Insights",
    subtitle: "Rollebasert KPI-rapportering",
    logo: "/logos/portfolio-insight.svg",
    story: {
      sections: [
        {
          title: "Kort fortalt",
          body:
            "Jeg designet en SaaS-plattform som samler porteføljeselskaper og investorer i ett felles KPI- og rapporteringssystem, med mekanismer som gjør data mer konsistent, mer etterprøvbar og enklere å bruke i beslutninger.",
        },
        {
          title: "Min rolle",
          body:
            "UX og Product Designer med ansvar for produktstruktur, informasjonsarkitektur, prototyping og mekanismer for datakvalitet og ansvarlighet i brukeropplevelsen.",
        },
        {
          title: "Kontekst",
          body:
            "Porteføljerapportering skjer ofte i regneark og e-post, med ulik definisjon av KPIer, varierende datakvalitet og sen beslutningsstøtte. I tillegg brukes subjektive ratinger ofte i oppfølging, men de blir fort bias og lite sammenlignbare uten struktur.",
        },
        {
          title: "Hva jeg leverte",
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
        {
          title: "Bevis og impact",
          body:
            "Målbare indikatorer som følger direkte av konseptet: tid fra periode slutt til ferdig rapport, tid brukt per selskap per syklus, andel komplette innsendinger innen frist, antall avvik fanget av valideringsregler og andel datapunkter med audit trail.",
        },
      ],
    },
  },
  {
    slug: "senseon",
    title: "Re:Source",
    subtitle: "Produktfundament fra null",
    logo: "/images/projects/resource/senseon-backoffice-macbook-mockup.svg",
    story: {
      sections: [
        {
          title: "Kort fortalt",
          body:
            "Jeg bygget et komplett produktfundament for et inventar- og sirkulærøkonomi-økosystem før utvikling, i en situasjon uten utviklingsteam og uten finansiering. Leveransen var en klikkbar prototype og et designsystem som var klart for overlevering til engineering, og prosjektet ble ferdigstilt to uker før estimat.",
        },
        {
          title: "Min rolle",
          body:
            "Lead designer i en pre-engineering-fase. Jeg eide informasjonsarkitektur, rolle og tilgang, kjerneflyter, designsystem, prototyping og dokumentasjon som grunnlag for videre utvikling.",
        },
        {
          title: "Kontekst",
          body:
            "Prosjektet måtte fungere som beslutningsgrunnlag for investorer og kunder, samtidig som det måtte være realistisk å bygge hvis finansiering kom på plass. Risikoen var å ende med en prototype som ser bra ut, men som mangler modell, states og regler til å fungere i praksis.",
        },
        {
          title: "Hva jeg leverte",
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
        {
          title: "Bevis og impact",
          bullets: [
            "Leveranse: ferdigstilt to uker før estimat.",
            "Målbare indikatorer som følger direkte av arbeidsmåten: gjenbruksgrad av komponenter, skjermvolum per uke etter at systemet var etablert, og antall kjerneflyter med definerte states og edge cases før engineering.",
          ],
        },
      ],
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
