export interface ServiceLandingDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  geoTarget: string;
  geoCoverageCities: string[];
  heroBadge: string;
  heroSubtitle: string;
  stats: { label: string; value: string; detail: string }[];
  problemTitle: string;
  problemDesc: string;
  problems: string[];
  solutionTitle: string;
  solutionDesc: string;
  solutions: string[];
  techArchitecture: { title: string; desc: string; iconType: string }[];
  comparison: {
    feature: string;
    antelma: string;
    traditional: string;
  }[];
  sizingOptions: {
    title: string;
    target: string;
    specs: string[];
    recommendedFor: string;
  }[];
  localCaseStudy: {
    client: string;
    location: string;
    challenge: string;
    result: string;
    quote: string;
    author: string;
  };
  faqs: { q: string; a: string }[];
}

export const SERVICE_LANDING_DATA: Record<string, ServiceLandingDetail> = {
  "connettivita-gestita": {
    id: "connettivita-gestita",
    slug: "fibra-ottica-dedicata-lombardia",
    title: "FiberEVOx & Connettività Gestita",
    category: "Reti & Connettività",
    h1: "Fibra Ottica Dedicata FTTO/FTTH per Imprese a Busto Arsizio, Varese, Milano e Lombardia",
    seoTitle: "Fibra Ottica Dedicata per Imprese | Busto Arsizio, Varese, Milano | Antelma FiberEVOx",
    seoDescription: "Connessione internet in fibra ottica fino a 10 Gbps simmetrici con banda garantita al 100%, backup automatico 5G con medesimo IP e SLA di ripristino in 4 ore in tutta la Lombardia.",
    geoTarget: "Busto Arsizio, Varese, Gallarate, Saronno, Legnano, Milano Caldera MIX, Monza e tutta la Lombardia",
    geoCoverageCities: ["Busto Arsizio", "Varese", "Milano (Caldera MIX)", "Gallarate", "Legnano", "Saronno", "Monza", "Como", "Bergamo", "Brescia", "Novara"],
    heroBadge: "Infrastruttura Proprietà Antelma · Interconnessione MIX Milano",
    heroSubtitle: "Massima velocità simmetrica garantita al 100%, latenza minima per applicazioni cloud critiche ed eliminazione totale dei fermi con failover 5G istantaneo.",
    stats: [
      { label: "Uptime Contrattuale", value: "99.99%", detail: "Garantito con penale su base annua" },
      { label: "Banda Garantita (MCR)", value: "100%", detail: "Simmetrica in download e upload" },
      { label: "SLA di Ripristino Guasto", value: "< 4 Ore", detail: "Intervento diretto sul territorio" },
      { label: "Latenza verso MIX Caldera", value: "< 2.5 ms", detail: "Ottimale per ERP, VPN e VoIP" },
    ],
    problemTitle: "Il costo nascosto delle linee consumer o semi-aziendali",
    problemDesc: "La maggior parte degli operatori nazionali vende connessioni 'fino a 1 o 2.5 Gbps', ma in realtà si tratta di accessi GPON condivisi con centinaia di altri utenti, con banda minima ridicola (spesso 100 Mbps o meno) e assistenza affidata a call center remoti che impiegano giorni a risolvere un guasto.",
    problems: [
      "Calo drastico di prestazioni e lag nelle ore di punta quando tutto l'ufficio lavora in cloud",
      "Perdita di fatturato e fermo della produzione o del magazzino in caso di trancio cavo o disservizio",
      "Attese estenuanti al call center automatico senza mai parlare con un tecnico responsabile",
      "Indirizzi IP dinamici che complicano VPN, sistemi di videosorveglianza e accessi sicuri dei dipendenti",
    ],
    solutionTitle: "La soluzione: FiberEVOx con Architettura Zero-Downtime",
    solutionDesc: "Con Antelma il tuo circuito in fibra è progettato individualmente dal nostro team di ingegneri di rete. Colleghiamo la tua sede con fibra ottica dedicata punto-punto attestata direttamente al Milan Internet eXchange (MIX di via Caldera a Milano). In più, installiamo un router enterprise con failover 4G/5G automatico che conserva lo stesso indirizzo IP statico.",
    solutions: [
      "Banda simmetrica 1:1 scalabile da 100 Mbps fino a 10 Gbps senza saturazione di vicinato",
      "Apparato router Cisco o Fortinet monitorato 24/7/365 dal nostro Network Operations Center (NOC)",
      "Failover istantaneo trasparente: se la fibra viene tranciata, il traffico passa sul 5G in meno di 1 secondo senza far cadere telefonate VoIP o sessioni ERP",
      "Assistenza diretta dei nostri tecnici con sede a Busto Arsizio, pronti a intervenire in loco in meno di 2 ore",
    ],
    techArchitecture: [
      {
        title: "Interconnessione Diretta MIX Milano",
        desc: "Dorsale proprietaria a bassissima latenza con instradamento BGP multi-homing e peering diretto con i maggiori carrier internazionali e cloud provider (AWS, Azure, Google).",
        iconType: "network",
      },
      {
        title: "Failover 5G con Identico IP Statico",
        desc: "Grazie alle nostre classi IP proprietarie registrate al RIPE NCC, in caso di anomalia fisica sulla fibra la connessione passa su link radio/5G mantenendo lo stesso IP pubblico.",
        iconType: "shield",
      },
      {
        title: "Monitoraggio Proattivo PRTG h24",
        desc: "Sonde telemetriche controllano ogni 30 secondi jitter, latenza, perdita pacchetti e saturazione. Se rileviamo degrado, interveniamo prima che l'azienda percepisca il problema.",
        iconType: "cpu",
      },
      {
        title: "Posa Dedicata & Permessi Comunali",
        desc: "Gestione completa end-to-end: rilievi topografici, scavo micro-trincea, permessi enti locali e collaudo con riflettometria ottica (OTDR) certificata.",
        iconType: "server",
      },
    ],
    comparison: [
      {
        feature: "Canale di Assistenza Tecnica",
        antelma: "Ingegnere di rete dedicato con recapito diretto a Busto Arsizio",
        traditional: "Call center anonimo con risponditore automatico (IVR)",
      },
      {
        feature: "Banda Minima Garantita (MCR)",
        antelma: "100% della banda nominale contrattualizzata",
        traditional: "Spesso tra il 5% e il 15% della velocità dichiarata",
      },
      {
        feature: "Ripristino in caso di Guasto",
        antelma: "Garantito entro 4 ore solari con tecnici locali on-site",
        traditional: "Miglior sforzo (spesso 3-5 giorni lavorativi)",
      },
      {
        feature: "Continuità Operativa di Backup",
        antelma: "Failover automatico 5G istantaneo con lo stesso IP statico",
        traditional: "Nessun backup, o chiavetta USB con IP dinamico diverso",
      },
      {
        feature: "Fatturazione e Trasparenza",
        antelma: "Canone fisso, nessuna voce nascosta, nessun vincolo capestro",
        traditional: "Costi di disdetta gonfiati, rimodulazioni continue",
      },
    ],
    sizingOptions: [
      {
        title: "FiberEVOx Business 300M",
        target: "Studi professionali e PMI (10-30 postazioni)",
        specs: ["300 Mbps Simmetrici 1:1", "1 IP Statico dedicato", "Backup 4G/5G con switch automatico", "Router Managed Cisco incluso", "SLA 8 ore lavorative"],
        recommendedFor: "Aziende con uso intensivo di Microsoft 365, videoconferenze e backup cloud giornalieri.",
      },
      {
        title: "FiberEVOx Pro 1 Gbps (Più Richiesto)",
        target: "Aziende industriali e commerciali (30-100 postazioni)",
        specs: ["1.000 Mbps Simmetrici Garantiti", "Subnet 8 IP Statici", "Backup 5G Ultra-Broadband a zero disconnessione", "Firewall NGFW perimetrale integrato", "SLA 4 ore 24/7/365"],
        recommendedFor: "Poli produttivi, logistica, gestionali ERP centralizzati e sedi con server interni.",
      },
      {
        title: "FiberEVOx Ultra 10 Gbps Enterprise",
        target: "Corporate, multisito, data center e campus industriali",
        specs: ["Fino a 10 Gbps dedicati FTTO punto-punto", "Doppio anello in fibra con percorsi fisici differenziati", "BGP Session con ASN cliente o Antelma", "SLA 2 ore con penali contrattuali", "Technical Account Manager assegnato"],
        recommendedFor: "Infrastrutture mission-critical, disaster recovery sincrono, poli ospedalieri ed e-commerce ad altissimo traffico.",
      },
    ],
    localCaseStudy: {
      client: "Gruppo Manifatturiero Meccanico di Precisione",
      location: "Gallarate (VA) · 140 addetti e 3 stabilimenti",
      challenge: "I continui micro-blackout della precedente linea ADSL/FTTC causavano l'arresto del software MES di controllo dei centri di lavoro a controllo numerico (CNC), provocando scarti di lavorazione e ritardi nelle consegne ai clienti automotive tedeschi.",
      result: "Installazione di FiberEVOx 1 Gbps con doppio percorso e failover 5G. In 36 mesi di monitoraggio continuativo si è registrato il 100% di continuità senza un singolo minuto di fermo macchine.",
      quote: "Con Antelma abbiamo smesso di preoccuparci della rete. Quando c'è stato un trancio cavi causato da lavori stradali nel nostro comune, il backup 5G è subentrato all'istante senza che nessuno in officina o in amministrazione se ne accorgesse.",
      author: "Ing. Marco P. · Direttore di Stabilimento",
    },
    faqs: [
      {
        q: "In quali comuni della Lombardia è disponibile la fibra dedicata FiberEVOx?",
        a: "Copriamo capillarmente tutta la provincia di Varese (Busto Arsizio, Gallarate, Saronno, Varese città, Cassano Magnago, Tradate), la Città Metropolitana di Milano (Legnano, Rho, Cinisello, Milano città con accesso diretto MIX Caldera), Monza e Brianza, Como, Lecco, Bergamo e Brescia, oltre a erogare collegamenti su tutto il territorio nazionale tramite accordi di interconnessione primaria.",
      },
      {
        q: "Quanto tempo occorre per attivare una linea in fibra ottica dedicata FTTO?",
        a: "I tempi standard per la progettazione, richiesta dei permessi agli enti comunali e posa variano tra i 30 e i 60 giorni lavorativi. Tuttavia, per evitare qualsiasi attesa al cliente, Antelma può attivare entro 48 ore un collegamento provvisorio ad alta velocità tramite ponte radio o 5G Enterprise che consente l'immediata operatività in attesa del collaudo ottico.",
      },
      {
        q: "Cosa significa 'Banda Minima Garantita al 100%'?",
        a: "A differenza delle offerte commerciali consumer dove la banda dichiarata è solo teorica e crolla durante i picchi di traffico della zona, con FiberEVOx l'intera larghezza di banda contrattualizzata (es. 1 Gbps) è riservata esclusivamente alla tua azienda lungo l'intera tratta fino al nodo MIX di Milano Caldera.",
      },
      {
        q: "Come funziona il backup automatico con medesimo IP statico?",
        a: "Il router enterprise fornito da Antelma monitora costantemente il circuito in fibra. Se la portante ottica decade per un trancio cavi o un guasto a monte, commuta istantaneamente il traffico sulla scheda radio 5G. Poiché la nostra rete instrada la tua subnet IP su entrambi i percorsi, i tuoi server, le VPN e i centralini VoIP continuano a funzionare senza dover riconfigurare nulla.",
      },
    ],
  },
  "cyber-security-nis2": {
    id: "cyber-security-nis2",
    slug: "cyber-security-nis2-aziendale",
    title: "Piani Cyber Security & Adeguamento NIS2",
    category: "Cyber Security",
    h1: "Cyber Security Aziendale & Conformità Direttiva NIS2 in Lombardia e Nord Italia",
    seoTitle: "Cyber Security & Adeguamento NIS2 per Imprese | Antelma Secure",
    seoDescription: "Protezione completa per PMI e Corporate: Vulnerability Assessment, EDR gestito con SOC 24/7, formazione anti-phishing e conformità alla Direttiva Europea NIS2 con audit certificati.",
    geoTarget: "Busto Arsizio, Milano, Varese, Monza, Bergamo, Brescia e tessuto industriale della Lombardia",
    geoCoverageCities: ["Busto Arsizio", "Milano", "Varese", "Monza", "Bergamo", "Brescia", "Como", "Lecco", "Lodi", "Cremona", "Pavia"],
    heroBadge: "Security Operations Center (SOC) Certificato ISO 27001",
    heroSubtitle: "Blocca ransomware, violazioni di dati e accessi non autorizzati proteggendo la continuità aziendale e rispettando gli obblighi di legge previsti dalla nuova Direttiva Europea NIS2.",
    stats: [
      { label: "Tempo Medio Rilevamento Minaccia", value: "< 3 Min", detail: "Analisi telemetrica AI e SOC 24/7" },
      { label: "Incidenti Ransomware a Clienti", value: "Zero", detail: "Grazie a isolamento EDR proattivo" },
      { label: "Conformità Normativa NIS2", value: "100%", detail: "Gap analysis e documentazione legale" },
      { label: "Riduzione Rischio Umano", value: "-85%", detail: "Simulazioni di phishing e training continuo" },
    ],
    problemTitle: "Il nuovo scenario delle minacce e le pesanti sanzioni NIS2",
    problemDesc: "L'82% degli attacchi informatici nel Nord Italia colpisce le piccole e medie imprese, spesso utilizzate come porta d'ingresso per colpire grandi filiere e multinazionali. Con l'entrata in vigore della Direttiva NIS2, le sanzioni per mancata adozione di misure adeguate possono raggiungere fino a 10 milioni di euro o il 2% del fatturato annuo globale, oltre alla responsabilità diretta degli amministratori.",
    problems: [
      "Attacchi ransomware capaci di cifrare l'intero archivio aziendale e i backup non isolati in poche ore",
      "Tentativi quotidiani di spear-phishing diretti all'ufficio amministrativo per deviare bonifici o rubare credenziali",
      "Responsabilità personale dei membri del Consiglio di Amministrazione per mancata adozione di standard di sicurezza minimi",
      "Rischio di esclusione immediata dagli albi fornitori di grandi committenti industriali per non conformità NIS2",
    ],
    solutionTitle: "La suite Antelma Secure: Difesa a 360 Gradi e Consulenza NIS2",
    solutionDesc: "Non ci limitiamo a installare un antivirus: forniamo un ecosistema difensivo gestito continuativamente dal nostro Security Operations Center (SOC). Analizziamo le vulnerabilità dell'infrastruttura, proteggiamo ogni endpoint (PC, server, smartphone), isoliamo istantaneamente le minacce e redigiamo i piani formali di risposta agli incidenti.",
    solutions: [
      "Vulnerability Assessment e Penetration Testing periodici su perimetro esterno e rete interna",
      "Protezione Endpoint EDR/XDR SentinelOne gestita da analisti cyber certificati CISSP",
      "Next-Gen Firewall Fortinet in alta affidabilità con ispezione SSL approfondita e filtro DNS anti-malware",
      "Piattaforma di Cyber Awareness continua per formare il personale e verificare la resilienza al phishing",
      "Gap Analysis NIS2 e redazione della documentazione di conformità tecnica e organizzativa",
    ],
    techArchitecture: [
      {
        title: "SOC Gestito 24/7 con Intelligenza Artificiale",
        desc: "Monitoraggio continuo degli eventi di sicurezza tramite piattaforma SIEM/SOAR. Analisi comportamentale delle minacce e blocco istantaneo prima che il payload malevolo possa propagarsi.",
        iconType: "shield",
      },
      {
        title: "Backup Immutabile Air-Gapped",
        desc: "Archiviazione dei dati aziendali secondo la regola 3-2-1 con copie immutabili e isolate fisicamente dalla rete locale, impossibili da crittografare o cancellare da parte di ransomware.",
        iconType: "server",
      },
      {
        title: "Simulazioni di Phishing e Formazione",
        desc: "Campagne periodiche controllate via email con scenari realistici. I dipendenti che cliccano vengono reindirizzati a mini-moduli formativi interattivi di 3 minuti.",
        iconType: "cpu",
      },
      {
        title: "Audit di Filiera e Supply Chain Risk",
        desc: "Verifica dei fornitori terzi e partner commerciali interconnessi ai sistemi aziendali, come espressamente richiesto dai requisiti minimi dell'art. 21 della Direttiva NIS2.",
        iconType: "network",
      },
    ],
    comparison: [
      {
        feature: "Tipo di Protezione",
        antelma: "EDR/XDR comportamentale con SOC 24/7 e isolamento immediato",
        traditional: "Antivirus tradizionale a firme che non rileva attacchi zero-day",
      },
      {
        feature: "Adeguamento Direttiva NIS2",
        antelma: "Kit completo tecnico, legale e procedurale con certificazione",
        traditional: "Nessun supporto normativo, responsabilità lasciata all'azienda",
      },
      {
        feature: "Gestione Incidenti Informatici",
        antelma: "Squadra di Incident Response pronta all'intervento entro 15 minuti",
        traditional: "Nessun piano formalizzato, tempi di reazione di giorni o settimane",
      },
      {
        feature: "Formazione Dipendenti",
        antelma: "Piattaforma automatica con simulazioni mensili e metriche HR",
        traditional: "Nessuna sensibilizzazione del personale (il punto più debole)",
      },
      {
        feature: "Sicurezza Backup",
        antelma: "Architettura immutabile isolata con test di ripristino mensili",
        traditional: "Semplice disco USB o NAS collegato in rete (vulnerabile a cifratura)",
      },
    ],
    sizingOptions: [
      {
        title: "Antelma Secure Essential",
        target: "PMI da 10 a 30 postazioni",
        specs: ["Firewall Gestito NGFW", "Protezione Endpoint EDR su tutte le macchine", "Filtro DNS e anti-spam avanzato", "Backup Cloud protetto", "Report mensile sicurezza"],
        recommendedFor: "Aziende commerciali e studi che necessitano di una solida protezione perimetrale e postazioni sicure.",
      },
      {
        title: "Antelma Secure NIS2 Compliance (Consigliato)",
        target: "Medie imprese (30-150 postazioni) e fornitori di filiere critiche",
        specs: ["Tutto di Essential +", "Gap Analysis e Roadmap NIS2", "SOC 24/7/365 con SIEM gestito", "Piattaforma Phishing Awareness", "Backup Immutabile anti-ransomware", "Procedura Incident Response formalizzata"],
        recommendedFor: "Aziende metalmeccaniche, chimiche, logistiche e subfornitori automotive obbligati ai sensi NIS2.",
      },
      {
        title: "Antelma Secure Enterprise Defense",
        target: "Grandi aziende, gruppi multisito e infrastrutture critiche",
        specs: ["Security Team dedicato con CISO as a Service", "Penetration Testing semestrale interno ed esterno", "Monitoraggio Deep Web & Dark Web per credenziali trapelate", "Microsegmentazione di rete Zero Trust", "Assicurazione Cyber Risk inclusa/agevolata"],
        recommendedFor: "Imprese con requisiti stringenti di conformità bancaria, farmaceutica, aerospaziale o multinazionale.",
      },
    ],
    localCaseStudy: {
      client: "Azienda Chimica e Distribuzione Materie Prime",
      location: "Busto Arsizio (VA) · 65 postazioni",
      challenge: "L'azienda ha ricevuto una comunicazione da una multinazionale cliente che richiedeva l'attestazione di conformità alla Direttiva NIS2 e ai protocolli di supply chain security entro 60 giorni, pena la revoca del contratto di fornitura pluriennale.",
      result: "Antelma ha eseguito il vulnerability assessment in 5 giorni, implementato l'EDR gestito e predisposto la documentazione tecnica e organizzativa. L'audit del committente è stato superato con il massimo punteggio.",
      quote: "Non solo abbiamo protetto la nostra rete da possibili attacchi devastanti, ma abbiamo salvaguardato una commessa da oltre 2 milioni di euro grazie alla prontezza del team Antelma.",
      author: "Dott. Giorgio V. · CFO & Responsabile Acquisti",
    },
    faqs: [
      {
        q: "La mia azienda ricade nell'obbligo di conformità NIS2?",
        a: "La Direttiva NIS2 include sia i soggetti essenziali sia i soggetti importanti: comprende aziende manifatturiere, chimiche, farmaceutiche, alimentari, di trasporto, fornitura energia, telecomunicazioni e fornitori di servizi digitali con oltre 50 dipendenti o 10 milioni di euro di fatturato. Inoltre, anche le PMI più piccole vi rientrano indirettamente se fanno parte della catena di fornitura di grandi gruppi già soggetti a obbligo.",
      },
      {
        q: "Cosa succede se un'azienda non rispetta le misure della Direttiva NIS2?",
        a: "Oltre alle sanzioni pecuniarie (fino a 10 milioni di euro o al 2% del fatturato mondiale), la legge prevede la responsabilità personale degli organi di amministrazione e la possibilità di sospensione temporanea dalle funzioni direttive per gli amministratori delegati negligenti.",
      },
      {
        q: "Quanto dura un Vulnerability Assessment preliminare?",
        a: "L'attività di scansione e analisi dura generalmente dai 3 ai 7 giorni lavorativi, senza interrompere minimamente le ordinarie attività aziendali. Al termine rilasciamo una relazione chiara ed esaustiva per la direzione, con l'indice di rischio e le azioni prioritarie da intraprendere.",
      },
    ],
  },
  "smart-office-voice": {
    id: "smart-office-voice",
    slug: "centralino-cloud-smart-office",
    title: "Smart Office Suite & Voice Cloud",
    category: "Voice & Cloud",
    h1: "Centralino Cloud & Telefonia VoIP Aziendale con WhatsApp OpenBridge Integrato",
    seoTitle: "Centralino in Cloud & WhatsApp Business per Aziende | Antelma Smart Office",
    seoDescription: "Elimina centralini fisici obsoleti: telefonia VoIP in cloud, app mobile e desktop, integrazione ufficiale WhatsApp Business OpenBridge e centralini per il settore alberghiero in Lombardia.",
    geoTarget: "Busto Arsizio, Varese, Milano, Monza, Como e imprese del terziario/manifattura lombarde",
    geoCoverageCities: ["Busto Arsizio", "Varese", "Milano", "Monza", "Como", "Legnano", "Gallarate", "Saronno", "Brescia", "Bergamo"],
    heroBadge: "Certificazione Yeastar Platinum & Integrazione WhatsApp API",
    heroSubtitle: "Comunica con clienti e collaboratori da qualsiasi luogo, su qualsiasi dispositivo, con numerazioni geografiche, videoconferenza Teams e gestione centralizzata dei messaggi WhatsApp.",
    stats: [
      { label: "Risparmio su Canoni Telefonici", value: "-60%", detail: "Addio a linee ISDN e canoni fisici" },
      { label: "Tempo di Risposta ai Clienti", value: "-45%", detail: "Grazie allo smistamento intelligente IVR" },
      { label: "Postazioni Attivabili", value: "Illimitate", detail: "Scalabilità istantanea da 2 a 1000 interni" },
      { label: "Integrazione WhatsApp", value: "Nativa", detail: "Canali WhatsApp sincronizzati al CRM" },
    ],
    problemTitle: "I limiti frustranti dei centralini telefonici tradizionali",
    problemDesc: "Apparati fisici chiusi in sgabuzzini caldi che richiedono costosi tecnici ogni volta che serve cambiare un'impostazione, interni che non squillano sullo smartphone quando sei in trasferta o a casa, e clienti che scrivono al cellulare personale dei dipendenti su WhatsApp senza alcuna tracciabilità aziendale.",
    problems: [
      "Chiamate commerciali perse perché il personale è fuori sede o in produzione",
      "Numeri WhatsApp personali usati per trattative aziendali, con rischio di perdita dati e clienti",
      "Costi esorbitanti di manutenzione hardware e canoni per vecchie linee ISDN obsolete",
      "Nessuna integrazione con gestionali aziendali, rubriche condivise o Microsoft Teams",
    ],
    solutionTitle: "Smart Office Suite: La Comunicazione Unificata Antelma",
    solutionDesc: "Portiamo l'intero sistema di comunicazione della tua impresa sul cloud: il tuo numero fisso aziendale squilla contemporaneamente sul telefono da tavolo, sul computer e sullo smartphone. Con il connettore esclusivo WhatsApp OpenBridge, tutte le chat WhatsApp con i clienti vengono smistate agli operatori autorizzati e archiviate centralmente.",
    solutions: [
      "Centralino PBX in Cloud su Data Center italiano ad altissima affidabilità con ridondanza geografica",
      "App desktop e mobile (iOS/Android) intuitive per gestire chiamate, chat interne e presenza colleghi",
      "WhatsApp Business OpenBridge: utilizza il numero fisso aziendale per ricevere e inviare messaggi WhatsApp",
      "Integrazione diretta con Microsoft 365, Teams, Salesforce, HubSpot e i più diffusi gestionali italiani",
      "Modulo Smart Office Hospitality per strutture ricettive, hotel e cliniche con gestione addebiti e check-in",
    ],
    techArchitecture: [
      {
        title: "Architettura Cloud Yeastar PBX",
        desc: "Server dedicati in cloud sicuro con crittografia end-to-end SRTP/TLS, zero hardware on-site da manutenere e aggiornamenti automatici trasparenti.",
        iconType: "server",
      },
      {
        title: "WhatsApp OpenBridge API",
        desc: "Gateway certificato Meta per collegare le chat WhatsApp ai flussi del centralino, consentendo risposte multiple da parte di più operatori sullo stesso numero aziendale.",
        iconType: "phone",
      },
      {
        title: "Integrazione Microsoft Teams & CRM",
        desc: "Chiama e ricevi direttamente dall'interfaccia di Microsoft Teams sfruttando le linee VoIP Antelma a tariffe competitive senza acquistare costose licenze Microsoft Phone System aggiuntive.",
        iconType: "cpu",
      },
      {
        title: "Trunk SIP a Ridondanza Geografica",
        desc: "Instradamento su molteplici data center nazionali con failover automatico su rete mobile in caso di emergenza, garantendo che i tuoi clienti non trovino mai occupato.",
        iconType: "network",
      },
    ],
    comparison: [
      {
        feature: "Flessibilità Lavorativa",
        antelma: "Lavori ovunque con app mobile e desktop, stesso interno telefonico",
        traditional: "Vincolato alla scrivania fisica dell'ufficio",
      },
      {
        feature: "Gestione Messaggi WhatsApp",
        antelma: "WhatsApp OpenBridge ufficiale su numero fisso con multi-operatore e CRM",
        traditional: "Cellulari privati dei commerciali senza controllo aziendale",
      },
      {
        feature: "Costi di Manutenzione",
        antelma: "Zero costi hardware, canone all-inclusive con aggiornamenti compresi",
        traditional: "Costosi interventi on-site per ogni modifica di interno o orario",
      },
      {
        feature: "Tempi di Attivazione",
        antelma: "Attivazione e configurazione in 48 ore, portabilità numeri trasparente",
        traditional: "Semanas di attesa e interruzioni prolungate della linea",
      },
      {
        feature: "Tariffe Telefoniche",
        antelma: "Tariffe trasparenti a consumo o flat illimitato senza scatto alla risposta",
        traditional: "Canoni mensili elevati per canali voce fisici inutilizzati",
      },
    ],
    sizingOptions: [
      {
        title: "Smart Office Business Start",
        target: "Studi professionali e piccole imprese (2-10 interni)",
        specs: ["Centralino Cloud completo", "App Desktop e Mobile per tutti gli utenti", "Messaggi vocali personalizzati e orari giorno/notte", "Portabilità numeri esistenti inclusa", "Telefoni IP Yealink inclusi o app-only"],
        recommendedFor: "Studi legali, commercialisti, agenzie e piccole attività.",
      },
      {
        title: "Smart Office Suite + WhatsApp (Consigliato)",
        target: "Aziende commerciali e industriali (10-50 interni)",
        specs: ["Tutto di Start +", "Modulo OpenBridge WhatsApp Business", "Integrazione rubrica CRM / ERP", "Registrazione chiamate conforme GDPR", "Coda d'attesa e risponditore IVR avanzato"],
        recommendedFor: "Aziende con reparto commerciale e customer service attivo.",
      },
      {
        title: "Smart Office Hospitality & Multi-Site",
        target: "Hotel, catene alberghiere, strutture sanitarie e sedi distribuite",
        specs: ["Integrazione con gestionali PMS (Fidelio, Opera, 5Stelle)", "Gestione sveglie, room status e addebiti minibar", "Interconnessione multi-sede con interni brevi unificati", "Canali voce contemporanei illimitati", "Presidio 24/7 per emergenze"],
        recommendedFor: "Hotel di prestigio, resort, cliniche private e gruppi con molteplici filiali.",
      },
    ],
    localCaseStudy: {
      client: "Catena di Cliniche Dentali e Polispecialistiche",
      location: "Milano & Provincia di Varese · 6 sedi",
      challenge: "Ogni sede aveva un centralino diverso, i pazienti chiamavano e trovavano spesso occupato, e le richieste di appuntamento inviate su WhatsApp restavano inevase per ore sul cellulare della reception.",
      result: "Unificazione su Smart Office Suite Cloud con 45 interni e WhatsApp OpenBridge. Tutte le richieste WhatsApp e telefoniche ora vengono gestite da un call center centralizzato con riduzione dei tempi di attesa dell'80%.",
      quote: "Abbiamo aumentato le prenotazioni del 28% nei primi 4 mesi solo grazie alla possibilità di rispondere tempestivamente su WhatsApp dal centralino aziendale.",
      author: "Dott.ssa Laura B. · Direttore Operativo",
    },
    faqs: [
      {
        q: "Posso mantenere i miei attuali numeri telefonici fissi?",
        a: "Certamente. Gestiamo noi l'intera procedura di portabilità (Number Portability) con il tuo operatore precedente. Il passaggio avviene senza alcun momento di interruzione delle linee durante una finestra concordata.",
      },
      {
        q: "Serve comprare nuovi telefoni da scrivania per usare il centralino cloud?",
        a: "Non è obbligatorio. Puoi scegliere di utilizzare i computer dei dipendenti con cuffie professionali e gli smartphone tramite la nostra app, oppure mantenere o noleggiare da noi telefoni da tavolo IP professionali ad alta definizione vocale (Yealink / Fanvil).",
      },
      {
        q: "Come funziona concretamente l'integrazione di WhatsApp Business?",
        a: "Colleghiamo il tuo numero telefonico aziendale alle API Cloud ufficiali di Meta. Quando un cliente scrive al tuo numero WhatsApp, il messaggio compare sulla console degli operatori abilitati, che possono rispondere da PC, allegare documenti, consultare la scheda del cliente nel CRM e trasferire la chat a un collega.",
      },
    ],
  },
  "assistenza-it-tlc": {
    id: "assistenza-it-tlc",
    slug: "assistenza-sistemistica-sla",
    title: "Assistenza IT & TLC Certificata",
    category: "Supporto Sistemistico",
    h1: "Assistenza Sistemistica & Supporto IT On-Site entro 2 Ore per Aziende in Lombardia",
    seoTitle: "Assistenza IT e Presidio Sistemistico Aziendale | Busto Arsizio, Milano, Varese",
    seoDescription: "Supporto sistemistico proattivo, Help Desk interno h24 e interventi on-site garantiti con SLA contrattualizzati nelle province di Varese, Milano, Como e Monza.",
    geoTarget: "Busto Arsizio, Gallarate, Legnano, Varese, Milano, Saronno e hinterland",
    geoCoverageCities: ["Busto Arsizio", "Varese", "Milano", "Legnano", "Gallarate", "Saronno", "Monza", "Como", "Brescia", "Bergamo"],
    heroBadge: "Tecnici Senior Certificati Microsoft, VMware e Cisco",
    heroSubtitle: "Un intero reparto IT esterno con competenze enterprise a una frazione del costo di un'assunzione interna. Risolviamo il 92% dei problemi entro 15 minuti da remoto.",
    stats: [
      { label: "Tempo Presa in Carico Ticket", value: "< 15 Min", detail: "Per urgenze bloccanti di produzione" },
      { label: "Intervento On-Site Garantito", value: "< 2 Ore", detail: "In tutta la provincia di Varese e Milano" },
      { label: "Risoluzione al Primo Contatto", value: "88%", detail: "Senza passaggi a call center esterni" },
      { label: "Soddisfazione Clienti (CSAT)", value: "99.2%", detail: "Monitorata su oltre 12.000 ticket" },
    ],
    problemTitle: "Il dramma dell'assistenza informatica improvvisata",
    problemDesc: "Affidarsi al 'tecnico occasionale' che non risponde quando l'azienda è ferma, o a contratti generici senza alcuna penale di rispetto degli SLA, espone le imprese a costi occulti giganteschi: dipendenti inattivi, server bloccati e backup che quando servono non funzionano.",
    problems: [
      "Server bloccati e dipendenti impossibilitati a lavorare per mezze giornate",
      "Nessuna manutenzione proattiva: si interviene solo dopo che il guasto o il disastro è già avvenuto",
      "Mancanza di documentazione tecnica e dipendenza totale da una singola persona",
      "Backup mai testati che in caso di guasto o virus si rivelano vuoti o corrotti",
    ],
    solutionTitle: "Il Presidio Sistemistico Antelma: Proattività e Garanzia Contrattuale",
    solutionDesc: "Con il nostro servizio di Caring Sistemistico, la tua infrastruttura è monitorata 24 ore su 24 dai nostri sistemi telemetrici. Interveniamo da remoto prima ancora che tu ti accorga dell'anomalia. E se serve un intervento sul posto, i nostri tecnici sul territorio arrivano presso la tua sede entro 2 ore con furgoni attrezzati e parti di ricambio a bordo.",
    solutions: [
      "Help Desk prioritario con tecnici senior italiani di 1°, 2° e 3° livello",
      "Monitoraggio proattivo H24 di server, storage, switch, access point e gruppi di continuità UPS",
      "Presidio on-site programmato (es. 1 mezza giornata a settimana) per manutenzioni e affiancamento utenti",
      "Disaster Recovery & Backup Management con simulazioni semestrali di ripristino bare-metal",
      "Gestione completa licenze Microsoft 365, Active Directory, policy di sicurezza e migrazioni cloud",
    ],
    techArchitecture: [
      {
        title: "Piattaforma RMM Enterprise",
        desc: "Agent di monitoraggio remoto su ogni workstation e server. Patching di sicurezza automatico fuori dall'orario lavorativo per non interrompere i dipendenti.",
        iconType: "cpu",
      },
      {
        title: "Help Desk Multicanale Diretto",
        desc: "Apertura ticket via email, portale web o telefono diretto con risposta umana in meno di 60 secondi senza passaggi intermedi.",
        iconType: "headset",
      },
      {
        title: "Laboratorio Tecnico & Ricambi Pronta Consegna",
        desc: "Magazzino ricambi a Busto Arsizio con server muletto, dischi enterprise, firewall e switch pronti per sostituzioni d'emergenza in caso di guasto hardware catastrofico.",
        iconType: "server",
      },
      {
        title: "Documentazione & Disaster Recovery Plan",
        desc: "Mappatura puntuale di ogni apparato, credenziale protetta su vault crittografato e piano operativo di ripristino per azzerare il tempo di fermo.",
        iconType: "shield",
      },
    ],
    comparison: [
      {
        feature: "Modalità di Ingaggio",
        antelma: "Proattiva: monitoriamo e preveniamo i guasti prima che si verifichino",
        traditional: "Reattiva: intervengono solo quando l'azienda è già ferma",
      },
      {
        feature: "Tempi di Intervento (SLA)",
        antelma: "Scritto nel contratto con penali economiche in caso di ritardo",
        traditional: "Miglior sforzo verbale ('arriveremo appena possibile')",
      },
      {
        feature: "Competenze Disponibili",
        antelma: "Team multidisciplinare: specialisti reti, cloud, cyber, server e database",
        traditional: "Singolo tecnico generico con conoscenze limitate",
      },
      {
        feature: "Test dei Backup",
        antelma: "Test periodici di ripristino documentati con verbale formale",
        traditional: "Sperare che il backup funzioni quando accade l'emergenza",
      },
      {
        feature: "Tariffe e Canoni",
        antelma: "Canone flat trasparente senza sorprese a fine mese",
        traditional: "Fatturazione a ore gonfiate ad ogni singolo intervento",
      },
    ],
    sizingOptions: [
      {
        title: "Smart Care Remoto",
        target: "Piccole aziende e studi professionali (5-20 postazioni)",
        specs: ["Help Desk telefonico e teleassistenza illimitata", "Monitoraggio RMM 24/7 su server e PC", "Gestione backup cloud", "Aggiornamenti di sicurezza patch management", "SLA 4 ore lavorative"],
        recommendedFor: "Aziende con infrastruttura prevalentemente cloud o server semplice.",
      },
      {
        title: "Business Continuity Care (Più Scelto)",
        target: "Aziende strutturate (20-80 postazioni)",
        specs: ["Tutto di Smart Care +", "Interventi on-site illimitati in provincia di Varese/Milano", "Presidio sistemistico programmato mensile", "SLA 2 ore con canale prioritario", "Gestione infrastruttura di rete e firewall", "Test di disaster recovery semestrali"],
        recommendedFor: "Aziende con server interni, magazzino e produzione continua.",
      },
      {
        title: "Total Enterprise Management",
        target: "Corporate, stabilimenti industriali e realtà multisito (80+ postazioni)",
        specs: ["Presidio sistemistico on-site settimanale dedicato", "Supporto h24/7/365 per emergenze bloccanti", "Technical Account Manager assegnato", "Governance IT e pianificazione budget quinquennale", "Audit di sicurezza continuo"],
        recommendedFor: "Aziende con requisiti di continuità non-stop su turni h24.",
      },
    ],
    localCaseStudy: {
      client: "Azienda di Logistica e Trasporti Internazionali",
      location: "Busto Arsizio e Malpensa Cargo City · 90 dipendenti",
      challenge: "Il guasto improvviso al server di magazzino alle 6:00 del mattino bloccava lo sdoganamento delle merci a Malpensa. Il precedente fornitore non rispondeva prima delle 9:30.",
      result: "Subentro di Antelma con presidio telemetrico h24. Alle 6:15 un alert di pre-guasto disco ha attivato il team di reperibilità Antelma che ha ripristinato l'immagine virtuale prima dell'inizio del turno dei corrieri.",
      quote: "Sapere che dietro i nostri server c'è una squadra seria di Busto Arsizio che risponde subito ci ha permesso di lavorare a Malpensa con totale tranquillità.",
      author: "Stefano M. · Responsabile Logistica",
    },
    faqs: [
      {
        q: "In quanto tempo intervenite fisicamente presso la nostra azienda?",
        a: "Per i clienti con contratto di continuità nelle province di Varese, Milano, Como e Monza garantiamo l'arrivo del tecnico on-site entro 2 ore solari dalla chiamata per i disservizi bloccanti.",
      },
      {
        q: "Possiamo mantenere il nostro personale interno IT e affiancarlo con Antelma?",
        a: "Assolutamente sì. Spesso collaboriamo con l'IT Manager interno dell'azienda, supportandolo per la gestione delle infrastrutture critiche, la sicurezza avanzata, le ferie e le emergenze, liberando il suo tempo da incombenze ripetitive.",
      },
      {
        q: "Come vengono gestiti i backup per essere certi che funzionino?",
        a: "Adottiamo la regola 3-2-1 con copie immutabili su storage locale protetto e copia cifrata su cloud europeo. Ogni mese eseguiamo un test automatizzato di avvio virtuale (Virtual Boot) dei server per certificare che il backup sia integro e avviabile in meno di 15 minuti.",
      },
    ],
  },
  "workstation-device-caring": {
    id: "workstation-device-caring",
    slug: "noleggio-hardware-workstation",
    title: "Workstation, Device & Antelma Care",
    category: "Hardware & Device",
    h1: "Noleggio Operativo Hardware & Flotte PC Aziendali a Varese e Milano",
    seoTitle: "Noleggio Operativo PC, Workstation & Stampanti Gestite | Antelma Care",
    seoDescription: "Formula all-inclusive al 100% deducibile fiscalmente: PC aziendali, workstation grafiche HP/Lenovo, stampa gestita con toner automatico e caring completo.",
    geoTarget: "Province di Varese, Milano, Como, Monza e Nord Italia",
    geoCoverageCities: ["Busto Arsizio", "Milano", "Varese", "Legnano", "Gallarate", "Monza", "Como", "Brescia", "Bergamo"],
    heroBadge: "Partner Certificato HP Enterprise, Lenovo e Dell",
    heroSubtitle: "Rinnovamento tecnologico continuo senza immobilizzare capitali. Canoni fissi all-inclusive comprensivi di configurazione, garanzia kasko e sostituzione immediata.",
    stats: [
      { label: "Deducibilità Fiscale Canoni", value: "100%", detail: "Ai fini IRES e IRAP nell'anno" },
      { label: "Tempo di Sostituzione Guasto", value: "< 24 Ore", detail: "Muletto identico pronto all'uso" },
      { label: "Impatto su Linee di Credito", value: "Zero", detail: "Nessun indebitamento bancario o CRIF" },
      { label: "Configurazione Pre-Consegna", value: "Zero-Touch", detail: "Pronto all'uso con software e VPN" },
    ],
    problemTitle: "Perché acquistare l'hardware informatico è un errore per l'azienda",
    problemDesc: "L'acquisto di computer e stampanti comporta esborsi di cassa immediati, ammortamenti fiscali lenti in 5 anni su beni che dopo 3 anni sono già lenti, e costi di riparazione non previsti quando scade la garanzia base del produttore.",
    problems: [
      "Liquidità bloccata in beni che si svalutano rapidamente e perdono efficienza",
      "Dipendenti rallentati da computer obsoleti che impiegano 10 minuti solo per avviarsi",
      "Gestione caotica dell'acquisto toner e cartucce con scorte dimenticate negli armadi",
      "Smaltimento dei vecchi PC problematico e soggetto a normative RAEE severe",
    ],
    solutionTitle: "La formula Antelma Care: Hardware Enterprise a Canone Certo",
    solutionDesc: "Con il nostro servizio di Noleggio Operativo (Locazione Finanziaria a lungo termine da 24 a 60 mesi), forniamo computer portatili, workstation CAD/grafiche e sistemi di stampa multifunzione di fascia business. Tutto configurato con i tuoi programmi aziendali prima della consegna, con garanzia kasko totale e sostituzione anticipata.",
    solutions: [
      "Hardware di prima scelta professionale (HP, Lenovo, Dell, Dynabook) con dischi NVMe ultraveloci",
      "Stampa Gestita (Managed Print Services): stampanti professionali con rifornimento automatico toner",
      "Antelma Care MDM: gestione centralizzata e blocco da remoto in caso di furto o smarrimento",
      "Smaltimento ecologico RAEE e cancellazione certificata dei dati (Data Wiping) a fine noleggio",
    ],
    techArchitecture: [
      {
        title: "Provisioning Zero-Touch",
        desc: "I computer vengono preparati nel nostro laboratorio con l'immagine standard aziendale: suite Office, antivirus EDR, VPN, certificati e software gestionale già installati.",
        iconType: "cpu",
      },
      {
        title: "Managed Print Telemetry",
        desc: "Le multifunzione monitorano il livello di usura e di toner, ordinando automaticamente i consumabili prima che si esauriscano senza che tu debba fare nulla.",
        iconType: "server",
      },
      {
        title: "Copertura Danni e Kasko Integrale",
        desc: "Qualsiasi danno accidentale, caduta, versamento di liquidi o cortocircuito è coperto da garanzia kasko con sostituzione entro 24 ore.",
        iconType: "shield",
      },
      {
        title: "Cancellazione Dati Certificata GDPR",
        desc: "A fine noleggio i supporti di memoria vengono bonificati con standard militare DoD 5220.22-M e rilascio di certificato per conformità privacy.",
        iconType: "network",
      },
    ],
    comparison: [
      {
        feature: "Trattamento Fiscale",
        antelma: "Canoni mensili deducibili al 100% ai fini IRES e IRAP",
        traditional: "Ammortamento pluriennale in 5 anni con beni a cespite",
      },
      {
        feature: "Rinnovamento Tecnologico",
        antelma: "Sostituzione con modelli nuovi ogni 24, 36 o 48 mesi",
        traditional: "Macchine tenute per 6-7 anni con perdita di produttività",
      },
      {
        feature: "Assistenza e Riparazioni",
        antelma: "Tutto compreso nel canone, manodopera e pezzi inclusi",
        traditional: "Preventivi e costi imprevisti per ogni guasto post-garanzia",
      },
      {
        feature: "Impatto su Rating Bancario",
        antelma: "Non compare in Centrale Rischi (CRIF/Banca d'Italia)",
        traditional: "Finanziamenti bancari che assorbono fidi aziendali",
      },
      {
        feature: "Pronto all'Uso",
        antelma: "Consegna con utente e programmi pronti per il dipendente",
        traditional: "PC 'nudo' da configurare manualmente con ore di lavoro",
      },
    ],
    sizingOptions: [
      {
        title: "Mobile Business Pack",
        target: "Commerciali, manager e dipendenti in smart working",
        specs: ["Notebook ultraleggero 14\" o 15.6\" Intel Core i5/i7, 16/32GB RAM", "Docking station USB-C con doppio monitor 24\"", "Antivirus EDR gestito e backup cloud", "Sostituzione kasko in 24 ore", "Canone mensile tutto compreso"],
        recommendedFor: "Aziende con forza vendita o personale che lavora in mobilità.",
      },
      {
        title: "Engineering & CAD Workstation",
        target: "Uffici tecnici, architetti, designer e studi di progettazione",
        specs: ["Workstation fissa o mobile certificata ISV con NVIDIA RTX", "Processore ad altissima frequenza per calcoli 3D e rendering", "Monitor 27\" o 34\" 4K calibrato colore", "Assistenza on-site 4 ore lavorative con parti dedicate", "Backup locale su NVMe ad alta velocità"],
        recommendedFor: "Aziende metalmeccaniche, ingegneristiche e studi di grafica.",
      },
      {
        title: "Fleet Print & Document Management",
        target: "Uffici amministrativi con medi e alti volumi di stampa",
        specs: ["Multifunzione A3/A4 a colori ad alta velocità", "Riconoscimento OCR e scansione automatica a cartella/cloud", "Toner e ricambi spediti automaticamente", "Nessun acquisto cartucce, costo pagina chiaro e fisso", "Manutenzione ordinaria e rulli inclusi"],
        recommendedFor: "Aziende con produzione documentale intensa e spedizioni frequenti.",
      },
    ],
    localCaseStudy: {
      client: "Studio di Ingegneria e Progettazione Civile",
      location: "Varese Centro · 22 collaboratori",
      challenge: "Workstation acquistate 5 anni prima che si bloccavano durante il rendering dei modelli BIM per commesse pubbliche, con frequenti guasti hardware fuori garanzia e costi di riparazione continui.",
      result: "Sostituzione dell'intero parco macchine con 22 Workstation HP ZBook con formula noleggio operativo a 36 mesi. Produttività incrementata del 35% e canoni interamente dedotti.",
      quote: "Non abbiamo speso un solo euro di anticipo e i nostri progettisti hanno finalmente macchine potenti e silenziose che non si piantano mai.",
      author: "Ing. Andrea C. · Partner dello Studio",
    },
    faqs: [
      {
        q: "Qual è la durata tipica del noleggio operativo?",
        a: "Le formule standard prevedono durate di 24, 36, 48 o 60 mesi. Al termine del periodo l'azienda può decidere se rinnovare il contratto ricevendo macchine nuove di ultima generazione, riscattare i beni o restituirli senza alcun vincolo.",
      },
      {
        q: "Cosa comprende la garanzia kasko inclusa?",
        a: "La nostra copertura kasko copre tutti i danni accidentali causati da urti, cadute, liquidi versati sulla tastiera, fulmini e sbalzi di tensione. Il dispositivo viene riparato o sostituito entro 24 ore lavorative.",
      },
      {
        q: "La pratica di noleggio richiede tempi lunghi di approvazione finanziaria?",
        a: "No, la procedura è rapida e digitalizzata: la delibera viene rilasciata generalmente entro 24-48 ore dalla presentazione della documentazione aziendale di bilancio.",
      },
    ],
  },
  "sviluppo-software-integrazione": {
    id: "sviluppo-software-integrazione",
    slug: "sviluppo-software-system-integration",
    title: "Sviluppo Software & System Integration",
    category: "System Integration",
    h1: "System Integration, Sviluppo Connettori API & Automazione per Imprese Lombarde",
    seoTitle: "System Integration & Connettori API Custom | Antelma Busto Arsizio",
    seoDescription: "Collega i tuoi silos informatici: connettori API REST tra gestionali ERP (Zucchetti, TeamSystem, SAP), CRM, e-commerce e piattaforme di magazzino in Lombardia.",
    geoTarget: "Busto Arsizio, Milano, Varese, Bergamo, Brescia e poli industriali",
    geoCoverageCities: ["Busto Arsizio", "Milano", "Varese", "Bergamo", "Brescia", "Monza", "Como", "Lecco", "Torino", "Bologna"],
    heroBadge: "Sviluppo Agile & Architetture Cloud-Native Certificate",
    heroSubtitle: "Elimina le trascrizioni manuali e gli errori umani. Automatizza i flussi di dati tra produzione, vendite, logistica e contabilità con connettori software robusti e sicuri.",
    stats: [
      { label: "Riduzione Errori di Trascrizione", value: "-95%", detail: "Sincronizzazione dati in tempo reale" },
      { label: "Tempo Risparmiato per Ordine", value: "35 Min", detail: "Dall'e-commerce all'ERP di magazzino" },
      { label: "Architetture Realizzate", value: "Microservizi", detail: "Container Docker e API sicure" },
      { label: "Uptime dei Connettori", value: "99.98%", detail: "Con logging e riprova automatica" },
    ],
    problemTitle: "Il labirinto dei software aziendali che non si parlano",
    problemDesc: "La maggior parte delle aziende utilizza software diversi per compiti diversi: un gestionale per le fatture, un CRM per i commerciali, un e-commerce per gli ordini e fogli Excel per il magazzino. Risultato? Dipendenti che passano ore a ricopiare dati manualmente da uno schermo all'altro, con errori inevitabili e ritardi.",
    problems: [
      "Ore di lavoro sprecate dal personale per reinserire ordini e anagrafiche tra sistemi diversi",
      "Disallineamento delle giacenze di magazzino con merce venduta ma non disponibile",
      "Mancanza di una visione chiara e aggiornata per il management sull'andamento delle vendite",
      "Software legacy bloccati su vecchi server che non si integrano con le nuove app cloud",
    ],
    solutionTitle: "La System Integration Antelma: Dati Connessi e Processi Automatici",
    solutionDesc: "Progettiamo connettori middleware e integrazioni API custom che mettono in comunicazione bidirezionale i tuoi sistemi aziendali. Dai gestionali storici (Zucchetti, TeamSystem, SAP, Microsoft Dynamics) alle moderne piattaforme cloud, creiamo flussi automatizzati affidabili con tracciamento continuo di ogni transazione.",
    solutions: [
      "Connettori API REST e SOAP custom per sincronizzare ordini, listini, fatture e anagrafiche",
      "Integrazione automatica e-commerce (Shopify, WooCommerce, Magento) con il gestionale ERP di magazzino",
      "Workflow digitali approvativi con firma elettronica avanzata e archiviazione documentale",
      "Dashboard analitiche di Business Intelligence (Power BI) per il monitoraggio in tempo reale dei KPI aziendali",
    ],
    techArchitecture: [
      {
        title: "Middleware Cloud-Native Resiliente",
        desc: "Architettura basata su code di messaggi (RabbitMQ / Kafka) che garantisce la consegna dei dati anche in caso di caduta temporanea del gestionale locale, senza perdere alcuna transazione.",
        iconType: "network",
      },
      {
        title: "Sicurezza e Autenticazione OAuth 2.0",
        desc: "Tutte le comunicazioni API sono cifrate con TLS 1.3, token di autenticazione a scadenza e filtri IP restrittivi per la massima sicurezza dei dati sensibili.",
        iconType: "shield",
      },
      {
        title: "Interfaccia Web Custom Responsive",
        desc: "Applicativi web interni fruibili da tablet per operatori di officina o magazzinieri, integrati con lettori barcode e terminali industriali.",
        iconType: "cpu",
      },
      {
        title: "Monitoraggio & Alerting Proattivo",
        desc: "Se un'API di terze parti fallisce o restituisce errore, il nostro sistema invia alert immediati e ritenta la sincronizzazione in background in modo intelligente.",
        iconType: "server",
      },
    ],
    comparison: [
      {
        feature: "Tipo di Sviluppo",
        antelma: "Modulare su misura con documentazione OpenAPI e codice di proprietà cliente",
        traditional: "Plugin preconfezionati instabili che smettono di funzionare agli aggiornamenti",
      },
      {
        feature: "Gestione Errori e Code",
        antelma: "Code asincrone con zero perdita dati anche durante i fermi server",
        traditional: "Sincronizzazioni sincrone fragili che perdono ordini se la rete cade",
      },
      {
        feature: "Competenza ERP Italiano",
        antelma: "Conoscenza approfondita dei database dei gestionali italiani più diffusi",
        traditional: "Sviluppatori generici senza alcuna conoscenza fiscale o contabile",
      },
      {
        feature: "Manutenzione Continuativa",
        antelma: "SLA di supporto dedicato con presa in carico rapida delle modifiche",
        traditional: "Sviluppatore irreperibile dopo il collaudo iniziale del software",
      },
      {
        feature: "Conformità Sicurezza e GDPR",
        antelma: "Privacy by design, crittografia e tracciabilità log delle modifiche",
        traditional: "Dati scambiati in chiaro senza log o controlli di accesso",
      },
    ],
    sizingOptions: [
      {
        title: "API Connector Base",
        target: "Aziende con e-commerce e gestionale da allineare",
        specs: ["Sincronizzazione ordini e anagrafiche clienti", "Allineamento giacenze magazzino in tempo reale", "Pannello web di controllo e log transazioni", "Notifiche automatiche in caso di anomalie", "Collaudo e formazione personale"],
        recommendedFor: "Aziende B2B o B2C che vendono online con ERP Zucchetti, TeamSystem o simili.",
      },
      {
        title: "Custom Enterprise Integration (Più Richiesto)",
        target: "Medie e grandi imprese manifatturiere o distributive",
        specs: ["Middleware multilivello con gestione code RabbitMQ", "Integrazione MES di produzione, ERP e logistica", "App web per tablet operatori di linea/magazzino", "Automazione fatturazione e documenti di trasporto DDT", "Supporto prioritario con SLA 4 ore"],
        recommendedFor: "Imprese con processi complessi tra reparto produttivo, magazzino e vendite.",
      },
      {
        title: "Full Digital Platform & BI",
        target: "Corporate, franchising o realtà con rete commerciale estesa",
        specs: ["Piattaforma web custom per rete agenti o clienti B2B", "Integrazione avanzata Microsoft Power BI", "Architettura microservizi ad altissima scalabilità", "Single Sign-On (SSO) con Active Directory aziendale", "Team di sviluppo dedicato per evolutive continue"],
        recommendedFor: "Aziende che vogliono creare un portale B2B per la propria clientela fidelizzata.",
      },
    ],
    localCaseStudy: {
      client: "Azienda di Packaging e Stampa Industriale",
      location: "Busto Arsizio (VA) · 80 dipendenti",
      challenge: "Gli ordini ricevuti dal portale clienti venivano stampati su carta e reinseriti a mano nell'ERP aziendale da 3 impiegate, con tempi di elaborazione di 24 ore e frequenti errori di codice prodotto.",
      result: "Antelma ha sviluppato un connettore API custom con convalida automatica e sincronizzazione istantanea. I tempi di lavorazione degli ordini sono scesi da 24 ore a 30 secondi, azzerando gli errori.",
      quote: "Abbiamo liberato 3 persone che ora si dedicano al customer care e allo sviluppo commerciale invece che a ricopiare bolle al computer. Un investimento che si è ripagato in meno di 6 mesi.",
      author: "Dott. Massimo T. · Amministratore Delegato",
    },
    faqs: [
      {
        q: "Quali gestionali ERP siete in grado di integrare?",
        a: "Abbiamo esperienza consolidata con i principali ERP del mercato italiano e internazionale: Zucchetti (Ad Hoc Revolution, Enterprise), TeamSystem (Alyante, Enterprise), SAP Business One, Microsoft Dynamics 365, Passepartout, oltre a gestionali custom basati su database SQL Server, PostgreSQL, MySQL o Oracle.",
      },
      {
        q: "Cosa succede se il nostro gestionale aziendale va offline temporaneamente?",
        a: "I nostri connettori middleware sono progettati con architettura a code asincrone: i dati in ingresso vengono conservati in modo sicuro e ritrasmessi automaticamente non appena il gestionale torna raggiungibile, garantendo che nessuna transazione venga mai persa.",
      },
      {
        q: "Il codice sorgente del connettore software rimane di nostra proprietà?",
        a: "Sì, nei nostri progetti su misura il codice sorgente e la relativa documentazione tecnica vengono rilasciati al cliente al termine del collaudo, garantendo piena trasparenza e nessuna dipendenza forzata.",
      },
    ],
  },
};
