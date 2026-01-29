export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  context: string[];
  role: string[];
  process: string[];
  outcome: string[];
};

export const projects: Project[] = [
  {
    slug: "redq",
    title: "RedQ",
    subtitle: "Datasikkerhet for SMB-markedet",
    context: [
      "RedQ ønsket å gjøre IT-drift og sikkerhet enklere å forstå og selge til små og mellomstore bedrifter.",
      "Selskapet hadde høy teknisk kompetanse, men tjenestene var organisert som konsulentleveranser og opplevdes lite oversiktlige for ikke-tekniske beslutningstakere.",
      "Mange kunder forstod først verdien av IT-sikkerhet etter at noe hadde gått galt, og språket i bransjen gjorde terskelen høy for å ta gode valg i forkant.",
    ],
    role: [
      "Jeg ledet arbeidet med å rydde i tjenestestrukturen og oversatte et teknisk tilbud til et tydelig produktunivers tilpasset SMB-markedet.",
      "Samarbeidet tett med ledelse og tekniske fagmiljøer for å prioritere budskap, pakker og nivåer.",
    ],
    process: [
      "Kartla dagens tjenestekart, intervjuet salg og kunder, og identifiserte friksjon i kjøpsreisen.",
      "Utviklet konseptet Vev som binder sammen tjenester, språk og struktur, og testet navngivning og pakker i enkle prototyper.",
      "Designet en ny nettside som visualiserer konseptet og gjør tjenestene enklere å forstå, sammenligne og navigere.",
    ],
    outcome: [
      "Resultatet er et mer tilgjengelig og forståelig tjenestetilbud, samt et solid grunnlag for videre vekst, salg og produktutvikling.",
      "Leveransen etablerte et felles språk internt og en tydeligere kundeopplevelse for nye og eksisterende kunder.",
    ],
  },
  {
    slug: "chall",
    title: "Chall",
    subtitle: "Gamification i appdesign",
    context: [
      "Chall ønsket å øke daglig engasjement i appen gjennom tydelige progresjonsløyper og motiverende belønninger.",
      "Målgruppen var unge voksne som trener ujevnt og trenger enkle påminnelser og synlig fremdrift.",
      "Suksess ble målt i økt retensjon, flere fullførte utfordringer og høyere daglig aktivitet.",
    ],
    role: [
      "Jeg var ansvarlig for opplevelsesdesign, gamification-mekanikker og visuell retning.",
      "Samarbeidet med produktleder og utviklere for å definere scope, målinger og MVP.",
    ],
    process: [
      "Gjennomførte brukersamtaler og analyserte drop-off for å finne hvor motivasjonen falt.",
      "Skisset og prototypet nivåsystem, streaks og belønninger, og testet med klikkbare prototyper.",
      "Prioriterte mekanikker som gir rask mestringsfølelse og lav friksjon i første uke.",
    ],
    outcome: [
      "Løsningen ga en tydeligere progresjon og mer forutsigbar belønning i hverdagsbruk.",
      "Neste steg er A/B-testing av belønningshyppighet og videre personalisering.",
    ],
  },
  {
    slug: "ikea",
    title: "IKEA",
    subtitle: "Digital kommunikasjon på varehuset",
    context: [
      "IKEA ønsket bedre digital kommunikasjon i varehuset for å veilede kunder og redusere kø og usikkerhet.",
      "Primære brukere var besøkende som trenger raske svar, samt ansatte som oppdaterer kampanjer og informasjon.",
      "Suksess ble målt i bedre veifinning, færre avbrudd i kundereisen og høyere konvertering i utvalgte soner.",
    ],
    role: [
      "Jeg utviklet informasjonsarkitektur, skjermmønstre og prototypeflyter for butikkskjermer.",
      "Samarbeidet med butikkledelse, innholdsansvarlige og tekniske leverandører i pilot.",
    ],
    process: [
      "Observerte kundestrømmer og kartla spørsmål som ofte havnet hos ansatte.",
      "Itererte på skjermhierarki og visuelle signaler i fysiske mockups og korte felttester.",
      "Valgte et modulært innholdssystem som gjør oppdateringer raske uten å miste konsistens.",
    ],
    outcome: [
      "Pilot viste tydeligere kundeflyt og mindre behov for muntlig veiledning i utvalgte soner.",
      "Neste steg er skalering til flere varehus og bedre integrasjon med kampanjeplanlegging.",
    ],
  },
  {
    slug: "senseon",
    title: "SenseOn",
    subtitle: "SaaS for ombruk og inventar",
    context: [
      "SenseOn trengte en digital plattform som gjør det enklere å spore inventar og øke ombruk i store organisasjoner.",
      "Brukerne var drift, innkjøp og bærekraftsteam som trenger oversikt, livsløpsdata og friksjonsfri flyt.",
      "Suksess ble målt i økt gjenbruksrate, lavere innkjøpskostnader og bedre datakvalitet.",
    ],
    role: [
      "Jeg var produktdesigner på tvers av kartlegging, IA, interaksjonsdesign og design system.",
      "Jobbet tett med produktleder og utviklingsteam for å levere MVP og pilot.",
    ],
    process: [
      "Gjennomførte intervjuer og analyserte dagens manuelle prosesser for registrering og flytting av inventar.",
      "Bygget prototyper for søk, registrering og rapportering, og justerte etter interne piloter.",
      "Valgte en enkel, skalerbar informasjonsstruktur som støtter både små og store porteføljer.",
    ],
    outcome: [
      "MVP gjorde det mulig å få sanntidsoversikt og etablere felles rutiner for ombruk.",
      "Neste steg er automatisering av datafangst og dypere innsikt i livsløpskostnader.",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
