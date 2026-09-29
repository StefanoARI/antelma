export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  fullDesc: string;
  features: string[];
  metrics: string;
  badge: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  date: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  desc: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  avatar: string;
}

export const ANTELMA_INFO = {
  name: "Antelma S.r.l.",
  legalName: "Antelma S.r.l. - Connettività, Servizi IT & Cyber Security",
  tagline: "Partner per l'evoluzione tecnologica della tua impresa",
  subTagline: "Siamo partner delle imprese nell’evoluzione dei processi tecnologici, garantendo efficienza operativa, continuità e sicurezza informatica.",
  address: "Via Gavinana, 3 – 21052 Busto Arsizio (VA)",
  phone: "0331 651.811",
  fax: "0331 651.888",
  email: "info@antelma.it",
  vatNumber: "01814180129",
  rea: "Registro delle Imprese di Varese n. 01814180129",
  hours: "Lun - Ven: 08:30 - 18:30 | Reperibilità h24 con contratti SLA",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "connettivita-gestita",
    title: "FiberEVOx & Connettività Gestita",
    shortDesc: "Reti in Fibra Ottica dedicata simmetrica fino a 10 Gbps con backup failover automatico 4G/5G.",
    category: "Reti & Connettività",
    fullDesc: "Garantisci alla tua impresa un accesso a Internet ultra-performante e a prova di interruzione. Progettiamo e posiamo collegamenti FTTO e FTTH ad altissima affidabilità con banda minima garantita al 100%, monitoraggio attivo 24/7 e switch automatico su dorsale mobile per annullare ogni rischio di down.",
    features: [
      "Circuito in fibra ottica ad accesso dedicato FTTO/FTTH",
      "Banda simmetrica scalabile da 100 Mbps fino a 10 Gbps",
      "Backup 4G/5G con IP statico e failover istantaneo trasparente",
      "Monitoraggio proattivo della dorsale e SLA di ripristino entro 4 ore",
    ],
    metrics: "99.99% Uptime",
    badge: "Alta Prestazione",
  },
  {
    id: "cyber-security-nis2",
    title: "Piani Cyber Security & Adeguamento NIS2",
    shortDesc: "Protezione perimetrale ed endpoint, EDR/XDR gestito e kit normativo per la direttiva europea NIS2.",
    category: "Cyber Security",
    fullDesc: "Difendi il patrimonio informativo e l'operatività della tua azienda dalle crescenti minacce ransomware e phishing. Con Antelma Secure forniamo una suite multilivello: auditing preventivo, firewall NGFW ridondati, SOC di controllo e supporto legale-tecnico per essere pienamente conformi alle direttive europee.",
    features: [
      "Vulnerability Assessment e Penetration Testing periodici",
      "Protezione Endpoint EDR/XDR con risposta automatica alle anomalie",
      "Cyber Security Awareness Training con simulazioni di phishing",
      "Adeguamento formale e tecnico alla Direttiva Europea NIS2",
    ],
    metrics: "Zero Violazioni",
    badge: "Compliance NIS2",
  },
  {
    id: "smart-office-voice",
    title: "Smart Office Suite & Voice Cloud",
    shortDesc: "Centralino in cloud, messaggistica WhatsApp OpenBridge integrata e collaborazione Microsoft Teams.",
    category: "Voice & Cloud",
    fullDesc: "Porta le comunicazioni della tua azienda nel futuro con la nostra Smart Office Suite: centralino PBX cloud senza apparati fisici ingombranti, integrazione nativa con smartphone e smart working, gestione canali WhatsApp aziendali sincronizzati con il CRM e soluzioni dedicate all'ospitalità alberghiera.",
    features: [
      "Centralino Cloud di ultima generazione modulare e scalabile",
      "Smart Office OpenBridge per WhatsApp integrato nel flusso telefonico",
      "Integrazione profonda con Microsoft 365, Teams e i principali CRM",
      "Smart Office Hospitality per Hotel con gestione rooming e check-in",
    ],
    metrics: "-60% Costi Fissi",
    badge: "Omnichannel",
  },
  {
    id: "assistenza-it-tlc",
    title: "Assistenza IT & TLC Certificata",
    shortDesc: "Supporto sistemistico specializzato da remoto e on-site al fianco della Business Continuity della tua azienda.",
    category: "Supporto Sistemistico",
    fullDesc: "Un team di tecnici certificati sempre al tuo fianco per gestire l'infrastruttura server, le postazioni di lavoro, le licenze e la manutenzione ordinaria e straordinaria. Contratti trasparenti con monte ore o canone all-inclusive e presa in carico rapida.",
    features: [
      "Help desk prioritario telefonico, ticket web e teleassistenza immediata",
      "Presidio on-site programmato e per emergenze con tecnici senior",
      "Gestione sistemistica ambienti Windows Server, Linux, VMware e Cloud",
      "Piani di Disaster Recovery e Backup immutabile anti-ransomware",
    ],
    metrics: "< 15 Min Presa in carico",
    badge: "SLA Garantiti",
  },
  {
    id: "workstation-device-caring",
    title: "Workstation, Device & Antelma Care",
    shortDesc: "Noleggio operativo di hardware enterprise, stampa aziendale gestita e caring per flotte mobile.",
    category: "Hardware & Device",
    fullDesc: "Elimina i costi di ammortamento e i problemi di obsolescenza: forniamo PC, notebook, workstation grafiche e stampanti multifunzione di classe business con formula noleggio operativo all-inclusive, comprensiva di ricambi, manutenzione e sostituzione rapida.",
    features: [
      "Fornitura e noleggio operativo Workstation & PC aziendali",
      "Stampa Aziendale Gestita (MPS) con riordino automatico toner",
      "Antelma Care per protezione e gestione remota MDM smartphone/tablet",
      "Smaltimento ecologico e certificato dei dispositivi dismessi",
    ],
    metrics: "100% Detraibile",
    badge: "Formula All-Inclusive",
  },
  {
    id: "sviluppo-software-integrazione",
    title: "Sviluppo Software & System Integration",
    shortDesc: "Integrazione dei sistemi aziendali, connettori API personalizzati e modernizzazione del flusso dati.",
    category: "System Integration",
    fullDesc: "Connettiamo i silos tecnologici della tua azienda per creare un flusso di lavoro continuo e automatizzato. Sviluppiamo middleware, integrazioni API REST e piattaforme web custom collegate al gestionale aziendale per ottimizzare l'efficienza operativa.",
    features: [
      "Sviluppo connettori API per ERP, CRM e piattaforme di magazzino",
      "Automazione dei processi documentali e workflow approvativi",
      "Migrazione verso architetture Cloud ibride sicure",
      "Dashboard analitiche di monitoraggio operativo per il management",
    ],
    metrics: "+40% Efficienza",
    badge: "Custom Cloud",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "Continuità Operativa & Cyber Security per Polo Manifatturiero",
    clientCategory: "Manifattura & Industria 4.0",
    date: "SETTEMBRE 2026",
    image: "/src/assets/images/case_study_datacenter_1790675261157.jpg",
    challenge: "Un'azienda metalmeccanica con 120 dipendenti subiva frequenti rallentamenti di linea ed era esposta a tentativi di spear-phishing che rischiavano di bloccare i macchinari interconnessi.",
    solution: "Installazione di un circuito FiberEVOx 1 Gbps dedicato con backup automatico 5G SD-WAN, deployment della suite Antelma Secure (EDR e filtro DNS) e sessioni di cyber awareness al personale.",
    results: "99.99% di operatività continua registrata, zero incidenti informatici in 18 mesi, piena conformità alla direttiva NIS2.",
    tags: ["FiberEVOx", "Antelma Secure", "NIS2 Compliance"],
  },
  {
    id: "case-2",
    title: "Smart Office Suite & WhatsApp OpenBridge per Gruppo Retail & Servizi",
    clientCategory: "Servizi Corporate & Retail",
    date: "LUGLIO 2026",
    image: "/src/assets/images/case_study_traffic_1790675249324.jpg",
    challenge: "Coordinamento critico tra 8 sedi distaccate e operatori sul territorio, con centinaia di richieste clienti perse tra centralini tradizionali e chat WhatsApp non centralizzate.",
    solution: "Migrazione completa alla Smart Office Suite Cloud con integrazione OpenBridge per collegare i numeri WhatsApp ufficiali al flusso di chiamata e al CRM aziendale.",
    results: "Tempi di risposta al cliente ridotti del 60%, eliminazione dei canoni delle linee analogiche, tracciabilità totale dei contatti commerciali.",
    tags: ["Smart Office", "OpenBridge WhatsApp", "Centralino Cloud"],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "essential",
    name: "Essential Care",
    desc: "Ideale per studi professionali e piccole imprese che necessitano di connettività stabile e supporto rapido.",
    price: "Custom",
    period: "preventivo su misura",
    features: [
      "Connettività protetta con monitoraggio base",
      "Supporto tecnico Help Desk telefonico e ticket",
      "Antivirus & Anti-malware gestito per workstation",
      "SLA di presa in carico entro 4 ore lavorative",
      "Backup cloud schedulato dei file aziendali",
    ],
    cta: "Richiedi Informazioni",
  },
  {
    id: "continuity-pro",
    name: "Business Continuity Pro",
    isPopular: true,
    badge: "Più Scelto dalle Imprese",
    desc: "La soluzione completa per le aziende che non possono permettersi alcun fermo operativo.",
    price: "Soluzione",
    period: "con SLA prioritario",
    features: [
      "Circuito FiberEVOx ad alta velocità con backup 4G/5G failover",
      "Antelma Secure: EDR avanzato, firewall NGFW e protezione email",
      "Smart Office Suite Centralino Cloud con app mobile e desktop",
      "Assistenza continuativa da remoto illimitata + interventi on-site",
      "SLA di intervento garantito entro 2 ore con canale dedicato",
      "Kit di pre-assessment per conformità NIS2",
    ],
    cta: "Configura la Tua Soluzione",
  },
  {
    id: "enterprise",
    name: "Enterprise Global",
    badge: "Personalizzato",
    desc: "Infrastrutture complesse, multisito, sedi produttive e requisiti di massima sicurezza con SOC.",
    price: "Enterprise",
    period: "progetto dedicato",
    features: [
      "Fibra dedicata punto-punto fino a 10Gbps con doppio anello ridondato",
      "SOC Security Operations Center 24/7/365 e Incident Response",
      "Integrazione WhatsApp OpenBridge e personalizzazioni CRM/ERP",
      "Service Level Agreement personalizzato con penali di garanzia",
      "Team sistemistico dedicato e Technical Account Manager assegnato",
      "Formazione continua del personale e Disaster Recovery as a Service",
    ],
    cta: "Parla con un Nostro Esperto",
  },
];

export const PARTNERS = [
  { name: "Cisco Systems", logo: "CISCO" },
  { name: "Fortinet", logo: "FORTINET" },
  { name: "Microsoft 365", logo: "MICROSOFT" },
  { name: "Yeastar Cloud", logo: "YEASTAR" },
  { name: "TIM Enterprise", logo: "TIM" },
  { name: "Fastweb Business", logo: "FASTWEB" },
  { name: "VMware / Broadcom", logo: "VMWARE" },
  { name: "SentinelOne", logo: "SENTINELONE" },
];

export const FAQ_ITEMS = [
  {
    q: "Cos'è la Business Continuity e perché è fondamentale per la mia azienda?",
    a: "La Business Continuity (continuità operativa) è la capacità di un'azienda di continuare a erogare i propri servizi anche di fronte a incidenti imprevisti, blackout della connessione o attacchi informatici. Antelma progetta architetture ridondate (come la fibra con backup 4G/5G automatico) e piani di disaster recovery che evitano fermi operativi, i cui costi per un'azienda possono superare migliaia di euro all'ora.",
  },
  {
    q: "La mia azienda deve adeguarsi alla Direttiva Europea NIS2?",
    a: "La Direttiva NIS2 riguarda molte categorie di imprese ritenute essenziali o importanti nella catena di fornitura (manifattura, trasporti, servizi digitali, fornitori IT e terzisti di grandi gruppi). Con il kit Cyber Security NIS2 di Antelma eseguiamo una mappatura dei rischi, implementiamo le misure tecniche necessarie e certifichiamo i processi per proteggerti da pesanti sanzioni.",
  },
  {
    q: "Come funziona l'integrazione di WhatsApp con il centralino aziendale?",
    a: "Attraverso Smart Office OpenBridge colleghiamo il numero fisso aziendale o un numero dedicato direttamente alle API ufficiali di WhatsApp Business. Le chat vengono smistate agli operatori o ai reparti esattamente come le telefonate, consentendo risposte veloci, archiviazione protetta e sincronizzazione con il CRM aziendale.",
  },
  {
    q: "Che tempi di intervento e SLA offrite con l'assistenza IT?",
    a: "Nei contratti di continuità operativa Antelma garantisce tempi di presa in carico a partire da 15 minuti per le urgenze critiche e tempi di ripristino per linee dati entro 4 ore solari. Il nostro Help Desk interno risponde direttamente dall'Italia senza call center automatizzati.",
  },
];
