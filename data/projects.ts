import type { ProjectCaseContent } from "./project-case";

export type ProjectSignals = {
  domain: string;
  caseType: string;
  keyStrength: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  logo: string;
  signals: ProjectSignals;
  heroText?: string;
  context: string[];
  role: string[];
  process: string[];
  outcome: string[];
  caseContent?: ProjectCaseContent;
};

export const projects: Project[] = [
  {
    slug: "resource",
    title: "Re:Source",
    subtitle: "Digital infrastruktur for sirkulaer ressursforvaltning",
    logo: "/images/projects/resource/SenseOn Backoffice Macbook Mockup.svg",
    signals: {
      domain: "Sirkulaer drift",
      caseType: "Plattform",
      keyStrength: "Systemdesign",
    },
    heroText:
      "Re:Source startet som en ambisjon om aa erstatte manuell inventarhaandtering med en skalerbar plattform for sirkulaer ressursforvaltning.",
    context: [
      "Data var fragmentert. Prosessene var personavhengige. Plattformen kunne ikke vokse uten struktur.",
    ],
    role: [
      "Jeg definerte rollelogikk, dataflyt og livssyklus foer visuell detaljering.",
    ],
    process: [
      "Flytdiagrammer avdekket hull tidlig. Designsystem ble bygget med produksjonsklar komponenttenkning.",
    ],
    outcome: [
      "Leveransen ble implementerbar, robust og ferdig tidligere enn planlagt.",
    ],
    caseContent: {
      header: {
        title: "Re:Source",
        intro:
          "Re:Source gikk fra fragmentert inventarhaandtering til en samlet digital infrastruktur for sirkulaer ressursforvaltning. Caset krevde tydelig rollefordeling, sporbar dataflyt og en struktur som kunne skaleres uten manuelle avhengigheter.",
        role: "Lead produktdesigner",
        team: "1 designer, 2 utviklere, 1 produkteier",
        timeline: "14 uker",
        responsibilities: [
          "Produktarkitektur",
          "Rolle og tilgangsmodell",
          "Flytmodellering",
          "Designsystem",
        ],
        deliverables: [
          "One screen story",
          "Flytkart",
          "Komponentspesifikasjon",
          "MVP scope",
        ],
        confidentiality: "Kundenavn og tallnivaa er anonymisert.",
      },
      findings: [
        {
          title: "Datakilder manglet felles struktur",
          body: "Samme inventarpost kunne eksistere i flere formater, som ga friksjon i kvalitetssikring.",
        },
        {
          title: "Ansvar var fordelt utydelig",
          body: "Oppgaver ble handtert i epost og regneark uten tydelig eierskap per steg.",
        },
        {
          title: "Rolleflater var blandet",
          body: "Admin, intern drift og kunde trengte ulike handlinger, men fikk overlappende grensesnitt.",
        },
        {
          title: "Mangel paa sporbarhet ga risiko",
          body: "Endringer i status og lokasjon manglet historikk og kunne ikke spores raskt.",
        },
        {
          title: "Ulik terminologi sinket onboarding",
          body: "Teamet brukte forskjellige begrep for samme prosess, som ga feil i prioritering.",
        },
        {
          title: "Komponentgjenbruk ga stor effekt",
          body: "Tidlig systematisering reduserte antall unike skjermer og forenklet utviklingsplan.",
        },
      ],
      kpis: [
        { label: "Tid til registrering", value: "-43%", note: "Malt i intern pilot" },
        {
          label: "Datakompletthet",
          value: "+31 pp",
          note: "Indikator, felter per objekt",
        },
        {
          label: "Flyter med gjenbruk",
          value: "68%",
          note: "Indikator, delte komponentmønstre",
        },
        {
          label: "Tidlig leveranse",
          value: "2 uker",
          note: "Ferdig foer plan",
        },
      ],
      scope: {
        must: [
          "Rollebasert tilgangsstyring",
          "Statusflyt med historikk",
          "Inventarregister med validering",
        ],
        should: [
          "Sammenligning av objekter pa tvers av enheter",
          "Kommentarspor for avvik",
          "Dashbord for status og volum",
        ],
        nice: [
          "Automatisk forslag til neste handling",
          "Varsling ved terskelbrudd",
          "Maler for oppsettsstarter",
        ],
        reasons: {
          must: "uten dette blir drift ustabil og vanskelig aa skalere",
          should: "gir bedre kvalitet i beslutninger og raskere avklaring",
          nice: "gir effektivisering, men er ikke kritisk i første fase",
        },
      },
      flow: {
        overview:
          "Flyten dekker registrering, intern behandling, kundeoppfoelging og avslutning med tydelige overleveringer.",
        nodes: [
          {
            id: "capture",
            title: "Registrering",
            description:
              "Objekt blir registrert med strukturert metadata, eierskap og status.",
            screens: ["Nytt objekt", "Validering", "Koeoversikt"],
          },
          {
            id: "triage",
            title: "Intern behandling",
            description:
              "Internt team prioriterer, setter tiltak og oppdaterer status med sporbar logg.",
            screens: ["Arbeidsflate", "Prioritet", "Historikk"],
          },
          {
            id: "customer",
            title: "Kundeoppfolging",
            description:
              "Kunden ser relevant status, kommentarer og neste steg i egen flate.",
            screens: ["Kundeside", "Varsler", "Dokumentasjon"],
          },
          {
            id: "close",
            title: "Lukking",
            description:
              "Saken avsluttes med standardisert dokumentasjon og kvalitetssjekk.",
            screens: ["Oppsummering", "Signoff"],
          },
        ],
      },
      exceptions: [
        {
          trigger: "Objekt registreres uten komplett metadata",
          response: "Systemet stopper innsending og markerer manglende felter",
          rule: "Alle kritiske felter maa valideres foer lagring",
          consequence: "Reduserer feil og senere manuell opprydding",
        },
        {
          trigger: "Kunde endrer status uten intern bekreftelse",
          response: "Endringen parkeres som forslag med intern godkjenning",
          rule: "Statusendring med risiko krever intern signoff",
          consequence: "Beskytter datakvalitet og revisjonsspor",
        },
        {
          trigger: "To brukere oppdaterer samme sak samtidig",
          response: "Siste endring blokkeres inntil ny versjon er hentet",
          rule: "Optimistisk laasing med konfliktmelding",
          consequence: "Unngaar at oppdateringer overskriver hverandre",
        },
      ],
      dataModel: {
        entities: [
          {
            name: "Objekt",
            description: "Kjerneenhet med identitet, status, lokasjon og livssyklus.",
            relations: ["Har mange hendelser", "Eies av en organisasjon"],
          },
          {
            name: "Hendelse",
            description: "Tidsstemplet endring knyttet til handling, rolle og kommentar.",
            relations: ["Tilhører ett objekt", "Kan trigge varsel"],
          },
          {
            name: "Rolle",
            description: "Definerer tilgang til handlinger, datafelt og visninger.",
            relations: ["Kobles til bruker", "Styrer hvilke overganger som er gyldige"],
          },
          {
            name: "Organisasjon",
            description: "Representerer kunde eller intern enhet med egne rettigheter.",
            relations: ["Har mange objekter", "Har mange brukere"],
          },
        ],
        principles: [
          {
            title: "En sannhetskilde",
            body: "Alle statusendringer skrives til ett sporbart datalag.",
          },
          {
            title: "Rolle styrer handling",
            body: "Brukere ser bare handlinger de faktisk kan fullfoere.",
          },
          {
            title: "Validering foer visning",
            body: "Systemet stopper ufullstendige data foer de sprer seg i flyten.",
          },
        ],
      },
      buildPlan: [
        {
          phase: "Kartlegging og scope",
          duration: "2 uker",
          goals: [
            "Definere kjerneproblemer",
            "Avgrense MVP",
            "Etablere suksessindikatorer",
          ],
          deliverables: [
            "Problemkart",
            "Prioriteringsmatrise",
            "Maaldefinisjon",
          ],
          integrations: ["Ingen, analysefase"],
        },
        {
          phase: "Kjernemodell og flyt",
          duration: "5 uker",
          goals: [
            "Bygge rollemodell",
            "Definere statusoverganger",
            "Teste kritiske noder",
          ],
          deliverables: ["Flytdiagram", "Lo-fi prototyper", "Regelsett"],
          integrations: ["Autentisering", "Logg og audit"],
        },
        {
          phase: "Komponenter og implementering",
          duration: "5 uker",
          goals: [
            "Sikre konsistent UI",
            "Redusere utviklingsfriksjon",
            "Levere testbar MVP",
          ],
          deliverables: ["Designsystem", "Hi-fi prototyper", "Hand-off"],
          integrations: ["Backoffice API", "Kundeportal"],
        },
        {
          phase: "Stabilisering og overlevering",
          duration: "2 uker",
          goals: [
            "Verifisere flyter i drift",
            "Lukke avvik",
            "Dokumentere neste fase",
          ],
          deliverables: ["QA-funn", "Release-notater", "Videre plan"],
          integrations: ["Dashbord", "Varslingskanal"],
        },
      ],
      artifacts: [
        {
          label: "Backoffice mockup",
          type: "UI",
          href: "/images/projects/resource/SenseOn Backoffice Macbook Mockup.svg",
          thumbnail: "/images/projects/resource/SenseOn Backoffice Macbook Mockup.svg",
        },
        {
          label: "Login mobil",
          type: "UI",
          href: "/images/projects/resource/Login Mobil Iphone Mockup.svg",
          thumbnail: "/images/projects/resource/Login Mobil Iphone Mockup.svg",
        },
        {
          label: "Kunde mobil",
          type: "UI",
          href: "/images/projects/resource/Kunde Mobil Iphone Mockup.svg",
          thumbnail: "/images/projects/resource/Kunde Mobil Iphone Mockup.svg",
        },
        {
          label: "Kunde backoffice",
          type: "UI",
          href: "/images/projects/resource/Kunde Backoffice Macbook Mockup.svg",
          thumbnail: "/images/projects/resource/Kunde Backoffice Macbook Mockup.svg",
        },
      ],
      reflection: [
        "Systemflyt maa visualiseres tidlig, ellers blir UI avgjoerelser tilfeldige.",
        "Rollemodell boer avklares foer detaljdesign for aa unngaa omarbeid.",
        "Tydelig audit-logg reduserer baade feilrate og supportkostnader.",
      ],
    },
  },
  {
    slug: "credit-builder",
    title: "Credit Builder",
    subtitle: "Kredittkort for foerstegangsbrukere",
    logo: "/images/projects/Credit Builder Card.svg",
    signals: {
      domain: "Finans",
      caseType: "Mobilbank",
      keyStrength: "Trust by design",
    },
    heroText:
      "Credit Builder ble utviklet for unge brukere uten kreditthistorikk, med maalet om aa gjoere kreditt forstaaelig og handlingsdrevet.",
    context: [
      "Tradisjonelle kort forklarer vilkaar, men viser ikke tydelig hvordan atferd paavirker score og fremtidige vilkaar.",
    ],
    role: [
      "Jeg strukturerte produktet rundt en tydelig progresjonsmodell, fra forstaaelse til handling og bedre vilkaar.",
    ],
    process: [
      "Delbare prototyper ble brukt som beslutningsgrunnlag for baade design og gjennomforing.",
    ],
    outcome: [
      "Caset ga en implementerbar struktur som koblet atferd, score og belonning i samme opplevelse.",
    ],
    caseContent: {
      header: {
        title: "Credit Builder",
        intro:
          "Credit Builder er et kredittkortkonsept for brukere uten etablert kreditthistorikk. Maalet var aa gjore abstrakte begrep konkrete, slik at brukeren forstar sammenhengen mellom atferd, score og bedre vilkaar. Løsningen ble bygget som en modulert mobilbankopplevelse med tydelig progresjon.",
        role: "Lead produktdesigner",
        team: "1 designer, 3 utviklere, 1 produkteier",
        timeline: "12 uker",
        responsibilities: [
          "Produktstrategi",
          "Informasjonsarkitektur",
          "Kritiske flyter",
          "Designsystem",
        ],
        deliverables: [
          "MVP blueprint",
          "Interaktiv prototype",
          "Prioriteringsmatrise",
          "Handoff",
        ],
        confidentiality: "Detaljerte forretningsmetrikker er anonymisert.",
      },
      findings: [
        {
          title: "Kredittbegrep var uklare",
          body: "Brukerne blandet APR, minimumsbetaling og scoreendring, og tok beslutninger uten forutsigbarhet.",
        },
        {
          title: "Feedback kom for sent",
          body: "Brukeren saa konsekvenser av atferd for sent, som reduserte laeringseffekt.",
        },
        {
          title: "Belonning sto utenfor kontekst",
          body: "Cashback og medlemsniva var ikke knyttet til konkrete handlinger i flyten.",
        },
        {
          title: "Onboarding var for generell",
          body: "Foerste steg manglet differensiering mellom nye og erfarne kortbrukere.",
        },
        {
          title: "Score ble presentert uten anbefaling",
          body: "Et tall alene ga lav verdi uten konkrete tiltak og forventet effekt.",
        },
        {
          title: "Kortadministrasjon var fragmentert",
          body: "Innstillinger og kredittinformasjon var spredt i separate visninger.",
        },
        {
          title: "Tillit krevde sporbar logikk",
          body: "Brukere trengte forklaringer som viste hvorfor en endring i score skjedde.",
        },
        {
          title: "Sammenheng ga motivasjon",
          body: "Nar handling, progresjon og belonning ble koblet, økte fullforingsgrad i testflyt.",
        },
      ],
      kpis: [
        {
          label: "Onboarding fullforing",
          value: "+26%",
          note: "Malt i prototype-test",
        },
        {
          label: "Forstaelighet APR",
          value: "+34 pp",
          note: "Indikator, testspoersmaal",
        },
        {
          label: "Aktive score-sjekker",
          value: "2.1x",
          note: "Indikator, uke 1",
        },
        {
          label: "Tid til foerste handling",
          value: "-39%",
          note: "Malt i onboardingflyt",
        },
      ],
      scope: {
        must: [
          "Onboarding med tydelig forventning",
          "Scorekort med forklarende tiltak",
          "Belonningsmodell koblet til atferd",
        ],
        should: [
          "Nivaprogram med synlig progresjon",
          "Scenarioforklaring for renteendring",
          "Samlet kortadministrasjon",
        ],
        nice: [
          "Personlige tips basert pa mønster",
          "Push-varsler med prediksjon",
          "Ekstern benchmark i anonymisert form",
        ],
        reasons: {
          must: "uten disse modulene forstar brukeren ikke hvordan kreditt faktisk bygges",
          should: "disse styrker beslutningskvalitet og reduserer feilbruk",
          nice: "disse oker motivasjon, men kan fases inn etter validering",
        },
      },
      flow: {
        overview:
          "Flyten er bygget som en laeringssløyfe, fra onboarding til daglig handling og periodisk evaluering.",
        nodes: [
          {
            id: "start",
            title: "Onboarding",
            description:
              "Brukeren velger maal, setter risikoprofil og ser hvordan handlinger paavirker score.",
            screens: ["Maalvalg", "Kortvilkaar", "Foerste anbefaling"],
          },
          {
            id: "dashboard",
            title: "Dashboard",
            description:
              "Samlet oversikt over score, limit, forbruk og neste anbefalte handling.",
            screens: ["Hovedkort", "Handlinger", "Varsler"],
          },
          {
            id: "tier",
            title: "Medlemsniva",
            description:
              "Brukeren ser progresjon mot neste niva og hvilke handlinger som utloeser belonning.",
            screens: ["Nivaaoversikt", "Regler", "Belonning"],
          },
          {
            id: "score",
            title: "Scoreoppfolging",
            description:
              "Periodiske scoreoppdateringer kobles til konkrete hendelser i forrige periode.",
            screens: ["Scorehistorikk", "Forklaring", "Neste steg"],
          },
        ],
      },
      exceptions: [
        {
          trigger: "Bruker betaler under minimumsbelop",
          response: "Systemet viser direkte effekt paa score og anbefaler korrigerende handling",
          rule: "Kritisk avvik krever synlig advarsel og neste steg",
          consequence: "Reduserer risiko for gjentatt feiladferd",
        },
        {
          trigger: "Bruker passerer kredittutnyttelse over terskel",
          response: "Dashboard prioriterer tiltak som demper negativ scoreeffekt",
          rule: "Tiltak med hoyest effekt vises først",
          consequence: "Bedre beslutning under tidspress",
        },
        {
          trigger: "Mangler historikk for scoreendring",
          response: "Systemet markerer lav datakvalitet og forklarer begrensning",
          rule: "Ingen implisitt konklusjon uten datagrunnlag",
          consequence: "Bygger tillit gjennom transparent usikkerhet",
        },
        {
          trigger: "Bruker hopper over onboardingsteg",
          response: "Flyten tilbyr komprimert versjon med minstekrav",
          rule: "Kritisk informasjon kan ikke utelates",
          consequence: "Opprettholder kvalitet uten a tvinge lang flyt",
        },
      ],
      dataModel: {
        entities: [
          {
            name: "Brukerprofil",
            description:
              "Personlige maal, risikoprofil og preferanser som styrer anbefalinger.",
            relations: ["Har mange handlinger", "Har ett aktivt medlemsniva"],
          },
          {
            name: "Kreditthendelse",
            description:
              "Registrerer betaling, utnyttelse, forfall og avvik med tidsstempel.",
            relations: ["Tilhører brukerprofil", "Paavirker score"],
          },
          {
            name: "ScoreSnapshot",
            description:
              "Periodisk scoreverdi med forklarbare drivere.",
            relations: ["Bygges av kreditthendelser", "Kobles til anbefaling"],
          },
          {
            name: "Medlemsniva",
            description:
              "Regelsett for progresjon, belonning og vilkaar per niva.",
            relations: ["Har mange terskler", "Kobles til brukerprofil"],
          },
        ],
        principles: [
          {
            title: "Forklarbarhet foerst",
            body: "Alle viktige scoreendringer skal kunne forklares i klar tekst.",
          },
          {
            title: "Handling over teori",
            body: "Systemet prioriterer konkrete neste steg framfor passiv informasjon.",
          },
          {
            title: "Progressiv tillit",
            body: "Brukeren faar mer avansert innsikt etter hvert som forstaaelsen øker.",
          },
        ],
      },
      buildPlan: [
        {
          phase: "Problemforstaaelse og modell",
          duration: "2 uker",
          goals: [
            "Avdekke hovedbarrierer i kredittforstaaelse",
            "Definere nordstjerneflyt",
            "Forankre prioriteringskriterier",
          ],
          deliverables: ["Intervjuguide", "Flytskissse", "Scopevurdering"],
          integrations: ["Ingen, innsiktsfase"],
        },
        {
          phase: "Kjerneflyter og prototyping",
          duration: "4 uker",
          goals: [
            "Bygge onboarding og dashboard",
            "Koble handling til scoreeffekt",
            "Teste forstaelighet i prototype",
          ],
          deliverables: ["Lo-fi prototyper", "Designregler", "Testoppsett"],
          integrations: ["Kredittmotor", "Kundedata API"],
        },
        {
          phase: "Nivaa og belonning",
          duration: "3 uker",
          goals: [
            "Definere progresjonsregler",
            "Synliggjore cashbacklogikk",
            "Validere edge cases",
          ],
          deliverables: ["Nivaamodel", "Belonningskort", "Feilhåndtering"],
          integrations: ["Lojalitetsmotor", "Varslingssystem"],
        },
        {
          phase: "Hardening og handoff",
          duration: "3 uker",
          goals: [
            "Polere kritiske flyter",
            "Lukke uklarheter med utvikling",
            "Forberede implementering",
          ],
          deliverables: ["Hi-fi prototype", "Handoff", "Backlog for neste fase"],
          integrations: ["Analyse events", "Supportkanal"],
        },
      ],
      artifacts: [
        {
          label: "Kortvisual",
          type: "UI",
          href: "/images/projects/Credit Builder Card.svg",
          thumbnail: "/images/projects/Credit Builder Card.svg",
        },
        {
          label: "Behavioral tier system",
          type: "Systemkart",
          href: "/images/projects/Behavioural Tier System.svg",
          thumbnail: "/images/projects/Behavioural Tier System.svg",
        },
        {
          label: "Current credit score",
          type: "Datavisning",
          href: "/images/projects/Current Credit Score.svg",
          thumbnail: "/images/projects/Current Credit Score.svg",
        },
      ],
      reflection: [
        "APR og atferd boer kobles enda tidligere i onboarding.",
        "Forklaringslag for score endring er avgjørende for tillit.",
        "Nivaaprogrammet fungerer best nar progresjon vises som konkrete steg.",
        "Mikrocopy rundt risiko boer testes med flere brukersegmenter.",
      ],
    },
  },
  {
    slug: "portfolio-insight",
    title: "Portfolio Insight",
    subtitle: "Rollebasert rapporteringsplattform",
    logo: "/logos/portfolio-insight.svg",
    signals: {
      domain: "B2B SaaS",
      caseType: "Rapportering",
      keyStrength: "Datamodell",
    },
    heroText:
      "Portfolio Insight samlet KPI-rapportering og vurdering av verdidrivere i en strukturert arbeidsflate.",
    context: [
      "Rapportering foregikk i regneark og epost, med lav sammenlignbarhet og fragmentert beslutningsgrunnlag.",
    ],
    role: ["Jeg definerte driverlogikk, rolleflater og valideringsregler foer visuell detaljering."],
    process: [
      "Systemet fikk historisk sammenligning, peer-avviksvarsler og kommentarplikt ved ekstreme vurderinger.",
    ],
    outcome: [
      "Produktet flyttet teamet fra etterskuddsrapportering til strukturert sanntidsinnsikt.",
    ],
    caseContent: {
      header: {
        title: "Portfolio Insight",
        intro:
          "Portfolio Insight ble laget for investormiljo med mange porteføljeselskaper og ulik rapporteringsmodenhet. Maalet var en felles struktur for KPI, verdidrivere og avviksbehandling, slik at beslutninger tas paa sammenlignbare data.",
        role: "Lead produktdesigner",
        team: "1 designer, 4 utviklere, 1 analyseansvarlig",
        timeline: "16 uker",
        responsibilities: [
          "Informasjonsarkitektur",
          "Valideringslogikk",
          "Rolleflater",
          "Dashbordprinsipper",
        ],
        deliverables: [
          "Datamodell",
          "Flytkart",
          "KPI-rammeverk",
          "Implementeringsplan",
        ],
        confidentiality: "Kundenavn og verdier er anonymisert.",
      },
      findings: [
        {
          title: "KPI-er ble tolket ulikt",
          body: "Selskaper rapporterte samme indikator med forskjellig definisjon og periode.",
        },
        {
          title: "Kommentarer manglet ved avvik",
          body: "Ekstreme vurderinger kom uten forklaring, som svekket beslutningskvalitet.",
        },
        {
          title: "Rollebehov var ulike",
          body: "Investor og selskap trengte forskjellig detaljniva i samme datasett.",
        },
        {
          title: "Historikk var vanskelig aa lese",
          body: "Manuell sammenstilling gjorde trendtolkning treg og sårbar for feil.",
        },
        {
          title: "Peer-sammenligning manglet kontekst",
          body: "Avvik ble observert sent fordi gruppesnitt ikke var synlig i flyten.",
        },
        {
          title: "Terskler var udefinerte",
          body: "Uklare varslingsgrenser ga for mange eller for faa avviksalarmer.",
        },
      ],
      kpis: [
        {
          label: "Rapporteringssyklus",
          value: "-37%",
          note: "Malt i pilotperiode",
        },
        {
          label: "Komplette innsendelser",
          value: "+29 pp",
          note: "Indikator, validerte felter",
        },
        {
          label: "Avvik med kommentar",
          value: "94%",
          note: "Malt etter regelinnforing",
        },
        {
          label: "Tid til beslutning",
          value: "-22%",
          note: "Indikator, komitemote",
        },
      ],
      scope: {
        must: [
          "KPI-definisjon med validering",
          "Rollebaserte visninger",
          "Kommentarplikt ved avvik",
        ],
        should: [
          "Historisk trendvisning",
          "Peer-sammenligning",
          "Automatisk avviksflagg",
        ],
        nice: [
          "Forslag til tiltak fra tidligere perioder",
          "Eksport til styrerapporter",
          "Skreddersydd varsling per rolle",
        ],
        reasons: {
          must: "uten felles definisjon blir data ikke sammenlignbar",
          should: "gir raskere innsikt og bedre kalibrering",
          nice: "gir ekstra effektivisering etter at grunnmuren er stabil",
        },
      },
      flow: {
        overview:
          "Prosessen gaar fra datainnsending og validering til avviksbehandling og investorklargjort innsikt.",
        nodes: [
          {
            id: "submit",
            title: "Innsending",
            description:
              "Selskapet registrerer KPI-data i rollebasert skjema med feltvalidering.",
            screens: ["Rapporteringsskjema", "Status", "Kvalitetssjekk"],
          },
          {
            id: "validate",
            title: "Validering",
            description:
              "Systemet sammenligner historikk, peers og terskler foer data godkjennes.",
            screens: ["Avvikspanel", "Kommentar", "Godkjenning"],
          },
          {
            id: "review",
            title: "Vurdering",
            description:
              "Investor gjennomgar drivere, avvik og forklaringer med prioritering.",
            screens: ["Drivervisning", "KPI-kort", "Notater"],
          },
          {
            id: "decision",
            title: "Beslutning",
            description:
              "Resultatet brukes i komite med eksportert beslutningsunderlag.",
            screens: ["Beslutningspakke", "Oppfolging"],
          },
        ],
      },
      exceptions: [
        {
          trigger: "Ekstrem KPI-endring uten kommentar",
          response: "Innsending stoppes inntil begrunnelse er lagt inn",
          rule: "Kommentarplikt ved terskelbrudd",
          consequence: "Hoeyere kvalitet i avviksanalyse",
        },
        {
          trigger: "Historikk mangler for ny KPI",
          response: "KPI merkes som oppstart med alternativ benchmark",
          rule: "Nye KPI-er maa ha baseline-regel",
          consequence: "Unngaar feil tolkning av trend",
        },
        {
          trigger: "Rolle uten tilgang forsoker aa godkjenne",
          response: "Handling avvises og logges",
          rule: "Kun godkjennerrolle kan signere periode",
          consequence: "Sterkere styring og revisjonsspor",
        },
      ],
      dataModel: {
        entities: [
          {
            name: "Portefoljeselskap",
            description: "Rapporterende enhet med egne KPI-sett og perioder.",
            relations: ["Har mange KPI-innsendinger", "Har en rollemodell"],
          },
          {
            name: "KPIEntry",
            description: "En rapportert indikator med verdi, periode og kommentar.",
            relations: ["Tilhører selskap", "Valideres mot regelsett"],
          },
          {
            name: "DriverAssessment",
            description: "Vurdering av verdidriver med score og begrunnelse.",
            relations: ["Kobles til KPIEntry", "Brukes i beslutning"],
          },
          {
            name: "ThresholdRule",
            description: "Definerer terskler for varsling og kommentarplikt.",
            relations: ["Gjelder KPIEntry", "Eies av investorrolle"],
          },
        ],
        principles: [
          {
            title: "Lik definisjon for alle",
            body: "En KPI skal ha samme betydning pa tvers av selskap.",
          },
          {
            title: "Avvik krever kontekst",
            body: "Store endringer skal alltid forklares med kommentar.",
          },
          {
            title: "Rollebasert klarhet",
            body: "Brukere ser data i detaljniva som passer ansvaret deres.",
          },
        ],
      },
      buildPlan: [
        {
          phase: "Definisjon og alignment",
          duration: "3 uker",
          goals: [
            "Standardisere KPI-definisjoner",
            "Enes om terskler",
            "Prioritere kritiske roller",
          ],
          deliverables: ["KPI-ordbok", "Rollekart", "Scope"],
          integrations: ["Ingen, analysefase"],
        },
        {
          phase: "Datamodell og validering",
          duration: "5 uker",
          goals: [
            "Bygge innsending med validering",
            "Etablere avviksregler",
            "Koble historikk",
          ],
          deliverables: ["Datamodell", "Valideringsflyt", "Lo-fi"],
          integrations: ["Rapporterings-API", "Autentisering"],
        },
        {
          phase: "Rolleflater og beslutningsvisning",
          duration: "5 uker",
          goals: [
            "Bygge investorflate",
            "Bygge selskapsflate",
            "Teste beslutningspakker",
          ],
          deliverables: ["Hi-fi", "Komponentbibliotek", "Notatsystem"],
          integrations: ["Dashborddata", "Eksport"],
        },
        {
          phase: "Pilot og kalibrering",
          duration: "3 uker",
          goals: ["Kjore pilot", "Tette valideringshull", "Planlegge neste release"],
          deliverables: ["Pilotfunn", "Justerte terskler", "Backlog"],
          integrations: ["Analyse events"],
        },
      ],
      artifacts: [
        {
          label: "Portfolio logo",
          type: "Brand",
          href: "/logos/portfolio-insight.svg",
          thumbnail: "/logos/portfolio-insight.svg",
        },
        {
          label: "Prosjektbilde",
          type: "Cover",
          href: "/images/projects/chall-projectimage.jpg",
          thumbnail: "/images/projects/chall-projectimage.jpg",
        },
        {
          label: "Prosjektbilde alternativ",
          type: "Cover",
          href: "/images/projects/redq-projectimage.jpg",
          thumbnail: "/images/projects/redq-projectimage.jpg",
        },
      ],
      reflection: [
        "Terskeldefinisjon boer forankres enda tidligere med domeneeksperter.",
        "Kommentarplikt ved avvik gir tydelig kvalitetsløft i beslutningsmoter.",
        "Rolleflater reduserer stoy og oker handlingshastighet.",
      ],
    },
  },
  {
    slug: "scoreflow",
    title: "ScoreFlow",
    subtitle: "Strukturert evalueringsplattform",
    logo: "/logos/scoreflow.svg",
    signals: {
      domain: "Vurdering",
      caseType: "Operativ plattform",
      keyStrength: "Beslutningslogikk",
    },
    heroText:
      "ScoreFlow standardiserte vurdering, vekting og resultatberegning i konkurranser med mange bidrag.",
    context: [
      "Manuell scoring ga inkonsistens, ulik tolkning av kriterier og feil i summering.",
    ],
    role: ["Jeg designet kriterielogikk, dommerflyt og transparens i beregningene."],
    process: [
      "Systemet gikk fra individuell vurdering til aggregert resultat med automatisert beregning og sporbarhet.",
    ],
    outcome: [
      "Plattformen reduserte subjektivitet og ga skalerbar vurdering med tydelig revisjonsspor.",
    ],
    caseContent: {
      header: {
        title: "ScoreFlow",
        intro:
          "ScoreFlow ble utviklet for aa redusere bias og feil i manuell konkurransescoring. Caset fokuserte pa kriterielogikk, vekting og transparent aggregasjon slik at resultatet blir konsistent, uavhengig av hvem som scorer.",
        role: "Produktdesigner",
        team: "1 designer, 2 utviklere, 1 fagansvarlig",
        timeline: "10 uker",
        responsibilities: [
          "Scoringsmodell",
          "Dommerflyter",
          "Resultatvisning",
          "Avviksregler",
        ],
        deliverables: [
          "Vektingsmodell",
          "Dommerflate",
          "Resultatlogikk",
          "Pilotprototype",
        ],
      },
      findings: [
        {
          title: "Kriterier ble tolket ulikt",
          body: "Dommere brukte ulike referanserammer uten tydelig normering.",
        },
        {
          title: "Vekting var lite transparent",
          body: "Deltakere og arrangor forsto ikke hvordan totalscore ble beregnet.",
        },
        {
          title: "Tie-breakers var manuelle",
          body: "Like score krevde tidkrevende diskusjoner uten standardregel.",
        },
        {
          title: "Store avvik kom sent frem",
          body: "Ekstreme vurderingssprik ble oppdaget sent i prosessen.",
        },
        {
          title: "Audit trail manglet",
          body: "Det var vanskelig aa etterproeve hvem som gjorde hva.",
        },
        {
          title: "Felles arbeidsflate reduserte feil",
          body: "Samlet prosess for innlegging, beregning og review reduserte manuell overforing.",
        },
      ],
      kpis: [
        { label: "Tid per bidrag", value: "-28%", note: "Malt i pilot" },
        {
          label: "Vurderingsavvik",
          value: "-19%",
          note: "Indikator, standardavvik",
        },
        {
          label: "Automatisk tie-break",
          value: "100%",
          note: "Regelbasert utfall",
        },
        {
          label: "Feil i summering",
          value: "0",
          note: "Malt i testsett",
        },
      ],
      scope: {
        must: [
          "Kriterie- og vektingsmotor",
          "Dommerflate med validering",
          "Automatisk totalberegning",
        ],
        should: [
          "Avviksvisning mellom dommere",
          "Tie-breaker-regler",
          "Resultatlogg",
        ],
        nice: [
          "Kalibreringsmodus før scoring",
          "Eksport med forklaringsfelt",
          "Anonymiseringsmodus per runde",
        ],
        reasons: {
          must: "uten denne kjernen blir ikke resultatet konsistent",
          should: "disse gir bedre kvalitetssikring og transparens",
          nice: "disse kan forbedre prosess etter at grunnmodell er validert",
        },
      },
      flow: {
        overview:
          "Flyten går fra oppsett av kriterier til individuell scoring, aggregasjon og revisjon.",
        nodes: [
          {
            id: "setup",
            title: "Oppsett",
            description:
              "Arrangor definerer kriterier, vekter og tie-breaker-regler foer runden starter.",
            screens: ["Kriterieoppsett", "Vekter", "Regelkontroll"],
          },
          {
            id: "score",
            title: "Individuell scoring",
            description:
              "Dommere scorer bidrag med validering av felt og kommentar ved avvik.",
            screens: ["Scorepanel", "Kommentar", "Status"],
          },
          {
            id: "aggregate",
            title: "Aggregasjon",
            description:
              "Systemet beregner totalscore og markerer potensielle konflikter automatisk.",
            screens: ["Resultattabell", "Avvik", "Tie-break"],
          },
          {
            id: "review",
            title: "Review",
            description:
              "Panelleder gjennomgar logg og godkjenner endelig resultat.",
            screens: ["Audit-logg", "Godkjenning"],
          },
        ],
      },
      exceptions: [
        {
          trigger: "Dommer sender inn uten alle kriterier",
          response: "Systemet blokkerer innsending og markerer mangler",
          rule: "Alle kriterier er paakrevd",
          consequence: "Lik datakvalitet pa tvers av dommere",
        },
        {
          trigger: "To bidrag faar identisk totalscore",
          response: "Tie-breaker-regel anvendes automatisk",
          rule: "Forhaandsdefinert tie-break prioriteres",
          consequence: "Rask og forutsigbar rangering",
        },
        {
          trigger: "Uvanlig stort avvik mellom dommere",
          response: "Bidrag flagges for panelreview",
          rule: "Avvik over terskel krever ekstra gjennomgang",
          consequence: "Redusert bias i sluttresultat",
        },
      ],
      dataModel: {
        entities: [
          {
            name: "Competition",
            description: "Konkurranse med runder, kriterier og regelsett.",
            relations: ["Har mange runder", "Har mange bidrag"],
          },
          {
            name: "Submission",
            description: "Innsendt bidrag som vurderes av flere dommere.",
            relations: ["Har mange vurderinger", "Tilhører en runde"],
          },
          {
            name: "JudgeScore",
            description: "Poeng og kommentar per kriterium, per dommer.",
            relations: ["Tilhører submission", "Kobles til kriterium"],
          },
          {
            name: "ScoreResult",
            description: "Aggregert resultat med tie-break metadata og logg.",
            relations: ["Bygges fra JudgeScore", "Godkjennes av panelleder"],
          },
        ],
        principles: [
          {
            title: "Lik tolkning",
            body: "Kriterier skal presenteres med samme definisjon for alle dommere.",
          },
          {
            title: "Transparent beregning",
            body: "Totalscore skal kunne spores tilbake til enkeltvurderinger.",
          },
          {
            title: "Regelbasert avvikshandtering",
            body: "Store avvik skal utlose standardisert review.",
          },
        ],
      },
      buildPlan: [
        {
          phase: "Modellering",
          duration: "2 uker",
          goals: ["Definere kriterier", "Definere vekter", "Lage tie-break-regel"],
          deliverables: ["Regelsett", "Modellskisse", "Testdata"],
          integrations: ["Ingen, oppstart"],
        },
        {
          phase: "Dommerflyt",
          duration: "3 uker",
          goals: ["Bygge scoreflate", "Legge inn validering", "Teste innsending"],
          deliverables: ["Lo-fi", "Interaksjonsregler", "Pilot"],
          integrations: ["Autentisering"],
        },
        {
          phase: "Aggregasjon",
          duration: "3 uker",
          goals: [
            "Bygge resultatmotor",
            "Implementere tie-break",
            "Synliggjore avvik",
          ],
          deliverables: ["Resultatvisning", "Avvikspanel", "Audit-logg"],
          integrations: ["Analyse", "Eksport"],
        },
        {
          phase: "Kvalitetssikring",
          duration: "2 uker",
          goals: ["Koere testsett", "Lukke avvik", "Dokumentere videre"],
          deliverables: ["Testfunn", "Justering", "Release-notat"],
          integrations: ["Supportkanal"],
        },
      ],
      artifacts: [
        {
          label: "ScoreFlow logo",
          type: "Brand",
          href: "/logos/scoreflow.svg",
          thumbnail: "/logos/scoreflow.svg",
        },
        {
          label: "Prosjektbilde",
          type: "Cover",
          href: "/images/projects/ikea-projectimage.jpg",
          thumbnail: "/images/projects/ikea-projectimage.jpg",
        },
      ],
      reflection: [
        "Kalibreringsmodus boer testes i flere dommerpaneler.",
        "Terskler for avvik maa eies tydelig av fagansvarlig.",
        "Audit-logg er kritisk for tillit i etterkant av konkurranser.",
      ],
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
