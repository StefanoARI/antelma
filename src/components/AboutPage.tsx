import React, { useState } from "react";
import { 
  ChevronRight, ArrowRight, ShieldCheck, Award, Users, 
  CheckCircle2, Download, FileText, Server, Wifi, 
  MapPin, Phone, Briefcase, ExternalLink, Network, Clock, 
  Building2, Check, Sparkles, UserCheck, GitBranch, LayoutGrid
} from "lucide-react";
import { IMAGES } from "../assets/images";
import { ANTELMA_INFO } from "../data/antelmaData";
import { Language, TRANSLATIONS } from "../i18n/translations";

export type AboutTab = "profilo" | "organigramma" | "valori" | "rete" | "certificazioni" | "carriere";

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
  initialTab?: AboutTab;
  currentLang?: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onNavigateHome, 
  onOpenContact,
  initialTab = "organigramma",
  currentLang = "it"
}) => {
  const [activeTab, setActiveTab] = useState<AboutTab>(initialTab);
  const [orgViewMode, setOrgViewMode] = useState<"albero" | "griglia">("albero");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
      if (initialTab === "carriere") {
        setTimeout(() => {
          const el = document.getElementById("about-tabs-container");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    }
  }, [initialTab]);

  const handleDownload = (docName: string) => {
    setDownloadSuccess(docName);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  const managementTeam = [
    {
      id: "ceo",
      role: "Amministratore Delegato & Direzione Generale",
      department: "Direzione Strategica & Governance",
      name: "Ing. Roberto Colombo",
      photo: IMAGES.teamCeoRoberto,
      badge: "Vertice Esecutivo",
      badgeColor: "bg-red-600 text-white",
      borderColor: "border-red-600",
      bio: "Oltre 25 anni di esperienza nello sviluppo di infrastrutture di telecomunicazione e strategie IT per il tessuto produttivo e industriale lombardo.",
      education: "Laurea Magistrale in Ingegneria delle Telecomunicazioni · Politecnico di Milano",
      certifications: ["Governance IT & Risk Management", "Strategia TLC Nazionale"],
      responsibilities: ["Supervisione strategica degli investimenti in rete fibra", "Rapporti istituzionali AGCOM e Ministero", "Partnership enterprise con Cisco, TIM e Fortinet"],
    },
    {
      id: "cto",
      role: "CTO - Direttore Tecnico & Infrastruttura di Rete",
      department: "Ingegneria di Rete & FiberEVOx",
      name: "Alessandro Bonetti",
      photo: IMAGES.teamCtoAlessandro,
      badge: "Infrastruttura Dati",
      badgeColor: "bg-[#0b1f3f] text-blue-200 border border-blue-800",
      borderColor: "border-blue-900",
      bio: "Progettista e responsabile dell'architettura della dorsale FiberEVOx, dell'interconnessione al Milan Internet eXchange (MIX Caldera) e delle reti SD-WAN multi-nodo ad alta affidabilità.",
      education: "Ingegneria Informatica · Certificato Cisco CCIE Routing & Switching",
      certifications: ["Cisco Certified Internetwork Expert (CCIE)", "Juniper JNCIP-ENT"],
      responsibilities: ["Progettazione tratte fibra ottica FTTO/FTTH", "Routing BGP e peering nazionale/internazionale", "Continuità operativa e ridondanza anelli dorsale"],
    },
    {
      id: "ciso",
      role: "Responsabile Cyber Security & NIS2 Compliance",
      department: "Security Operations Center (SOC)",
      name: "Dott.ssa Elena Varese",
      photo: IMAGES.teamCisoElena,
      badge: "Cyber Defense & Normativa",
      badgeColor: "bg-red-700 text-white",
      borderColor: "border-red-700",
      bio: "Guida il Security Operations Center (SOC) di Antelma, gestendo analisi delle vulnerabilità, penetration testing periodici e l'adeguamento normativo alla Direttiva Europea NIS2 per le PMI e grandi imprese.",
      education: "Laurea in Sicurezza dei Sistemi e Reti Informatiche · Università Statale di Milano",
      certifications: ["CISSP (Certified Information Systems Security Professional)", "Lead Auditor ISO/IEC 27001"],
      responsibilities: ["Piani operativi NIS2 e mitigazione supply chain", "Incident Response & gestione allarmi SIEM 24/7", "Cyber Awareness e simulazioni di phishing"],
    },
    {
      id: "voice",
      role: "Responsabile Voice Cloud & System Integration",
      department: "Voice, PBX & Soluzioni Software",
      name: "Davide Grassi",
      photo: IMAGES.teamDevDavide,
      badge: "Smart Office & Unified Comms",
      badgeColor: "bg-[#1e3a8a] text-blue-100",
      borderColor: "border-blue-800",
      bio: "Responsabile dell'architettura Smart Office Suite, dell'integrazione WhatsApp OpenBridge e dei middleware di connessione tra centralini in cloud e gestionali ERP/CRM aziendali.",
      education: "Informatica Applicata · Specializzazione in Architetture Microservizi e SIP",
      certifications: ["Yeastar Certified Architect", "Microsoft 365 Teams Voice Specialist"],
      responsibilities: ["Sviluppo integrazioni WhatsApp Business API", "Migrazione da centralini fisici a cloud PBX", "Soluzioni VoIP Hospitality per settore alberghiero"],
    },
    {
      id: "support",
      role: "Responsabile Assistenza Clienti & Presidio Sistemistico",
      department: "Customer Operations & Help Desk",
      name: "Marco Pozzi",
      photo: IMAGES.teamSupportMarco,
      badge: "SLA Garantiti & On-Site",
      badgeColor: "bg-emerald-700 text-white",
      borderColor: "border-emerald-700",
      bio: "Coordina il team interno di Help Desk sistemistico di 1° e 2° livello e la squadra di tecnici sul territorio per interventi on-site garantiti entro 2 ore nelle province lombarde.",
      education: "Perito Informatico · Formazione Specialistica Microsoft Enterprise",
      certifications: ["VMware Certified Professional (VCP)", "ITIL Foundation v4"],
      responsibilities: ["Garanzia dei tempi di presa in carico < 15 minuti", "Presidio sistemistico on-site programmato e urgente", "Gestione backup immutabili e disaster recovery"],
    },
    {
      id: "hr",
      role: "Responsabile Risorse Umane & Antelma Academy",
      department: "People & Organization",
      name: "Giulia Moretti",
      photo: IMAGES.teamHrGiulia,
      badge: "Talent & Formazione",
      badgeColor: "bg-amber-600 text-white",
      borderColor: "border-amber-600",
      bio: "Gestisce l'acquisizione dei talenti ingegneristici, il percorso di carriera dei tecnici e i programmi continui di certificazione professionale dell'Antelma Academy.",
      education: "Laurea in Psicologia del Lavoro e Organizzazione Aziendale · Università Cattolica",
      certifications: ["Talent Management & Employee Wellbeing", "Certificazioni Formative Fondimpresa"],
      responsibilities: ["Selezione di ingegneri di rete e analisti cyber", "Piani di welfare aziendale e smart working sicuro", "Percorsi di formazione tecnica specialistica"],
    },
  ];

  const jobs = [
    {
      title: "Ingegnere di Rete TLC & Fibra Ottica",
      department: "Infrastruttura Dati",
      location: "Busto Arsizio (VA) / Presidi Lombardia",
      contract: "Tempo Indeterminato full-time",
      responsibilities: [
        "Progettazione e provisioning di circuiti dedicati FTTO e ponti radio",
        "Configurazione switch core, router BGP e apparati firewall perimetrali",
        "Monitoraggio telemetrico della dorsale e gestione delle scalate tecniche",
      ],
      requirements: [
        "Laurea o diploma a indirizzo telecomunicazioni / informatico",
        "Conoscenza protocolli di routing (BGP, OSPF), VLAN, MPLS, SD-WAN",
        "Gradita certificazione Cisco CCNA o CCNP",
      ],
    },
    {
      title: "Tecnico Sistemista Senior (Sistemi Windows/Linux)",
      department: "Assistenza & Supporto Sistemistico",
      location: "Busto Arsizio (VA) e interventi on-site",
      contract: "Tempo Indeterminato full-time",
      responsibilities: [
        "Gestione e manutenzione infrastrutture server on-premise e cloud",
        "Configurazione policy Active Directory, Microsoft 365 e backup immutabili",
        "Supporto tecnico specialistico di 2° livello a clienti aziendali",
      ],
      requirements: [
        "Esperienza minima di 4 anni in ruoli analoghi presso System Integrator",
        "Competenza approfondita su Windows Server, virtualizzazione VMware/Hyper-V",
        "Forte orientamento al problem-solving e al rispetto degli SLA",
      ],
    },
    {
      title: "Cyber Security Analyst & Incident Responder",
      department: "Security Operations Center (SOC)",
      location: "Busto Arsizio (VA) / Ibrido",
      contract: "Tempo Indeterminato full-time",
      responsibilities: [
        "Analisi delle minacce e gestione degli alert EDR/SIEM in tempo reale",
        "Esecuzione di vulnerability assessment e gap analysis direttiva NIS2",
        "Supporto alla redazione dei piani di disaster recovery e incident response",
      ],
      requirements: [
        "Esperienza in sicurezza offensiva o difensiva per ambienti aziendali",
        "Conoscenza framework MITRE ATT&CK e normative ISO 27001 / NIS2",
        "Attitudine alla formazione e al contatto con i referenti IT aziendali",
      ],
    },
  ];

  const mediaDocs = [
    {
      title: "Company Profile Istituzionale Antelma 2026",
      desc: "Presentazione societaria, visione tecnologica, infrastrutture di rete e servizi di punta per le aziende.",
      size: "2.4 MB · PDF",
      date: "Aggiornato Settembre 2026",
    },
    {
      title: "Carta dei Servizi & Indicatori di Qualità AGCOM",
      desc: "Documento ufficiale depositato presso l'Autorità per le Garanzie nelle Comunicazioni con gli standard SLA.",
      size: "1.1 MB · PDF",
      date: "Approvato 2026",
    },
    {
      title: "Mappa di Copertura Rete Fibra & Punti di Presenza (POP)",
      desc: "Dettaglio delle dorsali in fibra ottica FiberEVOx e degli anelli di ridondanza in Lombardia.",
      size: "3.8 MB · PDF",
      date: "Edizione 2026",
    },
    {
      title: "Manuale Metodologico Adeguamento Direttiva NIS2",
      desc: "Guida tecnica per gli IT Manager sui controlli di sicurezza minimi e sulla gestione del rischio cyber.",
      size: "1.8 MB · PDF",
      date: "Guida Ufficiale 2026",
    },
  ];

  return (
    <div className="pt-24 pb-24 bg-[#f8f9fb]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <button onClick={onNavigateHome} className="hover:text-[#0b1f3f] transition-colors cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0b1f3f] font-bold">Chi Siamo (Company)</span>
        </nav>

        {/* Hero Banner: Company Profile Header (Intred Model) */}
        <section className="relative rounded-[36px] overflow-hidden bg-gradient-to-r from-[#0b1f3f] via-[#122e5d] to-[#1e3a8a] text-white p-8 sm:p-12 lg:p-16 mb-12 shadow-xl border border-blue-900/50">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-200 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Profilo Societario &amp; Team · Antelma S.r.l.
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 font-sans">
              L'Innovazione Tecnologica al Servizio della Crescita Aziendale
            </h1>
            
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Il profilo di un operatore ICT e System Integrator che ha fatto dell'affidabilità, della connettività a banda ultralarga e della sicurezza informatica il proprio tratto distintivo sul territorio italiano.
            </p>
          </div>

          {/* Subheader KPI bar */}
          <div className="relative z-10 mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                25+ Anni
              </div>
              <div className="text-xs text-slate-300 mt-1">Esperienza nel Settore TLC &amp; IT</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-red-400 tabular-nums">
                +1.500 Km
              </div>
              <div className="text-xs text-slate-300 mt-1">Dorsali Fibra e Reti Posate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                99.99%
              </div>
              <div className="text-xs text-slate-300 mt-1">Uptime Rete e Datacenter</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">
                100%
              </div>
              <div className="text-xs text-slate-300 mt-1">Assistenza Tecnica Interna</div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs (Organigramma highlighted) */}
        <div id="about-tabs-container" className="mb-10 flex overflow-x-auto no-scrollbar gap-2 pb-2 border-b border-slate-200 scroll-mt-28">
          {[
            { id: "organigramma", label: "Team & Organigramma" },
            { id: "profilo", label: "Chi Siamo & Storia" },
            { id: "valori", label: "Mission & Valori" },
            { id: "rete", label: "La Nostra Rete" },
            { id: "certificazioni", label: "Certificazioni & Qualità" },
            { id: "carriere", label: "Lavora Con Noi" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0b1f3f] text-white shadow-md border-b-2 border-red-500"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: TEAM & ORGANIGRAMMA (Rich Visual Schema with Photos) */}
        {activeTab === "organigramma" && (
          <div className="space-y-12 animate-in fade-in duration-200">
            
            {/* Header with Switcher between Tree & Grid */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-red-600 uppercase font-bold tracking-wider">
                    / governance &amp; struttura organizzativa /
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3f] tracking-tight">
                  Organigramma Aziendale &amp; Leadership Antelma
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  Uno schema trasparente delle figure apicali e dei responsabili operativi di dipartimento che garantiscono ogni giorno la continuità dei servizi IT e TLC.
                </p>
              </div>

              {/* View mode toggle */}
              <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl self-start sm:self-auto">
                <button
                  onClick={() => setOrgViewMode("albero")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    orgViewMode === "albero"
                      ? "bg-white text-[#0b1f3f] shadow-sm"
                      : "text-slate-600 hover:text-[#0b1f3f]"
                  }`}
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Schema ad Albero</span>
                </button>
                <button
                  onClick={() => setOrgViewMode("griglia")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    orgViewMode === "griglia"
                      ? "bg-white text-[#0b1f3f] shadow-sm"
                      : "text-slate-600 hover:text-[#0b1f3f]"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Griglia Schede</span>
                </button>
              </div>
            </div>

            {/* VIEW MODE 1: VISUAL TREE SCHEMA */}
            {orgViewMode === "albero" && (
              <div className="space-y-12">
                
                {/* LEVEL 1: CEO / DIREZIONE GENERALE (Apex Node) */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border-2 border-red-600 shadow-xl transition-transform hover:-translate-y-1">
                    <div className="flex items-start gap-5">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-red-500">
                        <img
                          src={managementTeam[0].photo}
                          alt={managementTeam[0].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white mb-1 shadow-xs">
                          {managementTeam[0].badge}
                        </span>
                        <h3 className="text-lg font-bold text-[#0b1f3f] truncate">
                          {managementTeam[0].name}
                        </h3>
                        <div className="text-xs font-semibold text-slate-700 mt-0.5 leading-snug">
                          {managementTeam[0].role}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono mt-1 truncate">
                          {managementTeam[0].education}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                      {managementTeam[0].bio}
                    </div>
                  </div>

                  {/* Vertical trunk line */}
                  <div className="w-0.5 h-10 bg-gradient-to-b from-red-600 to-blue-900" />
                  <div className="w-3 h-3 rounded-full bg-blue-900 -mt-1.5" />
                </div>

                {/* Horizontal branch bar */}
                <div className="relative hidden lg:block -mt-6 mb-6">
                  <div className="h-0.5 w-5/6 mx-auto bg-blue-900/60" />
                </div>

                {/* LEVEL 2: DEPARTMENT DIRECTORS (5 Branches) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {managementTeam.slice(1).map((member) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Photo with status indicator */}
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100 shadow-inner">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2.5 left-2.5">
                            <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider shadow-xs ${member.badgeColor}`}>
                              {member.badge.split("&")[0].trim()}
                            </span>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider mb-0.5 truncate">
                          {member.department}
                        </div>

                        <h4 className="text-base font-bold text-[#0b1f3f] group-hover:text-red-600 transition-colors">
                          {member.name}
                        </h4>

                        <div className="text-xs font-semibold text-slate-700 leading-tight mt-1 mb-3">
                          {member.role}
                        </div>

                        <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                          {member.bio}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <div className="text-[10px] font-mono text-slate-400 truncate">
                          {member.certifications[0]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* VIEW MODE 2: DETAILED GRID */}
            {orgViewMode === "griglia" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managementTeam.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="relative w-18 h-18 rounded-2xl overflow-hidden shadow-md shrink-0 border border-slate-200">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider mb-1 ${member.badgeColor}`}>
                            {member.badge}
                          </span>
                          <h3 className="text-base font-bold text-[#0b1f3f]">
                            {member.name}
                          </h3>
                          <div className="text-xs font-semibold text-red-600 mt-0.5">
                            {member.role}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-slate-700 leading-relaxed mb-4">
                        {member.bio}
                      </div>

                      <div className="space-y-1.5 mb-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Responsabilità Primarie:
                        </div>
                        {member.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                      <strong>Formazione:</strong> {member.education}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Department Summary */}
            <div className="p-8 rounded-3xl bg-[#0b1f3f] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-900">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-red-500" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
                    Squadra Tecnica Certificata
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans">
                  Vuoi parlare direttamente con uno dei nostri responsabili tecnici?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Il nostro management e gli ingegneri di sede sono costantemente a contatto con le aziende clienti per audit preliminari e progettazioni personalizzate.
                </p>
              </div>

              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white transition-all shadow-md shrink-0 cursor-pointer"
              >
                Contatta la Direzione Tecnica
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: CHI SIAMO & STORIA (with Team Schema Summary) */}
        {activeTab === "profilo" && (
          <div className="space-y-12 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-mono text-red-600 uppercase font-bold tracking-wider">
                  / chi siamo /
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3f] tracking-tight">
                  Nati per Connettere le Imprese al Futuro con Competenza e Passione
                </h2>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong className="text-[#0b1f3f]">Antelma S.r.l.</strong> è un operatore di telecomunicazioni e system integrator fondato con l'obiettivo di tradurre la complessità tecnologica in un vantaggio competitivo tangibile per le aziende. Con sede a Busto Arsizio, operiamo capillarmente sul territorio lombardo e a livello nazionale.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Attraverso infrastrutture proprietarie in fibra ottica ad accesso dedicato (FiberEVOx), connettività ad alta velocità e sicurezza informatica di ultima generazione, affianchiamo piccole, medie e grandi imprese in ogni fase della trasformazione digitale. Non siamo un semplice fornitore, ma un partner strategico al fianco dell'imprenditore e dell'IT Manager.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0b1f3f] block">Nessun Call Center Esterno</strong>
                      <span className="text-xs text-slate-500">Parli solo con tecnici certificati nella nostra sede.</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0b1f3f] block">SLA Reali &amp; Risarcimento</strong>
                      <span className="text-xs text-slate-500">Impegni formali registrati con tempi certi di intervento.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-900 border-4 border-white">
                  <img
                    src={IMAGES.itSupportDeskHuman}
                    alt="Team Antelma assistenza tecnica sistemistica e supporto clienti"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3f]/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm font-bold">Assistenza Tecnica Diretta</div>
                      <div className="text-xs text-slate-300">Presidio continuo con tecnici interni qualificati</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Team Photos Preview Banner */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider block">
                    Leadership &amp; Persone
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f3f] mt-1">
                    La Squadra Direttiva al Fianco del Tuo Business
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab("organigramma")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0b1f3f] text-white hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <span>Apri Organigramma Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {managementTeam.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setActiveTab("organigramma")}
                    className="group text-center cursor-pointer p-3 rounded-2xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-2 shadow-sm border border-slate-200 group-hover:border-red-600 transition-colors">
                      <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs font-bold text-[#0b1f3f] group-hover:text-red-600 transition-colors truncate">
                      {m.name}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {m.role.split("&")[0].trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Media kit & Institutional Downloads (from Intred Model) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f3f]">
                    Media Kit &amp; Documentazione Istituzionale
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Consulta o scarica i documenti societari, i dati tecnici e la carta dei servizi ufficiale.
                  </p>
                </div>
                {downloadSuccess && (
                  <div className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 animate-in fade-in">
                    ✓ Documento "{downloadSuccess}" scaricato con successo
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mediaDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all flex items-start justify-between gap-4 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0b1f3f] group-hover:text-red-600 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {doc.desc}
                        </p>
                        <div className="text-[11px] font-mono text-slate-400 mt-2">
                          {doc.size} · {doc.date}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDownload(doc.title)}
                      className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-[#0b1f3f] hover:text-white flex items-center justify-center transition-colors shrink-0 shadow-xs cursor-pointer"
                      title="Scarica documento"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MISSION E VALORI */}
        {activeTab === "valori" && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="max-w-3xl">
              <span className="text-xs font-mono text-red-600 uppercase font-bold tracking-wider">
                / mission e valori /
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3f] tracking-tight mt-1">
                Connessi e Protetti Sempre: La Nostra Promessa alle Imprese
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mt-4">
                La connettività e la sicurezza informatica non sono semplici utility tecnologiche, ma la linfa vitale che garantisce la continuità operativa del business, la serenità dei lavoratori e la salvaguardia dei dati aziendali.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Vicinanza al Territorio",
                  desc: "Presidio capillare in Lombardia. Quando c'è un'esigenza critica, i nostri tecnici intervengono fisicamente in sede senza deleghe a terzi.",
                  badge: "Km Zero",
                  icon: <MapPin className="w-5 h-5 text-red-600" />,
                },
                {
                  title: "Continuità Assoluta",
                  desc: "Ogni nodo di rete e sistema è progettato per eliminare i single point of failure attraverso failover automatici su fibra e 5G.",
                  badge: "Business Continuity",
                  icon: <ShieldCheck className="w-5 h-5 text-[#1e3a8a]" />,
                },
                {
                  title: "Innovazione Pragmatica",
                  desc: "Adottiamo solo tecnologie mature, scalabili e sicure, anticipando le normative comunitarie come la Direttiva NIS2.",
                  badge: "Cyber Security",
                  icon: <Sparkles className="w-5 h-5 text-red-600" />,
                },
                {
                  title: "Trasparenza Contrattuale",
                  desc: "Rapporti basati sulla chiarezza: canoni trasparenti, assistenza all-inclusive e SLA con penali a favore del cliente.",
                  badge: "Etica & Fiducia",
                  icon: <Award className="w-5 h-5 text-[#1e3a8a]" />,
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center">
                        {val.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                        {val.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0b1f3f] mb-2 font-sans">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0b1f3f]">
                    <span>Standard Certificato</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LA NOSTRA RETE */}
        {activeTab === "rete" && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-mono text-red-600 uppercase font-bold tracking-wider">
                  / infrastruttura /
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3f] tracking-tight">
                  Infrastruttura di Rete Proprietaria &amp; Interconnessioni MIX
                </h2>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  La rete FiberEVOx di Antelma è sviluppata secondo un'architettura ad anelli ottici ridondati interconnessi ai principali Internet Exchange Point italiani, a partire dal <strong className="text-[#0b1f3f]">Milan Internet eXchange (MIX) di Caldera</strong>.
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                    <Server className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0b1f3f] block">Accesso Dedicato FTTO/FTTH</strong>
                      <span className="text-xs text-slate-600">Fibre ottiche dedicate con banda simmetrica al 100% garantita e latenze minime inferiori a 3ms sui nodi core.</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                    <Wifi className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0b1f3f] block">Backup Automatico Multi-Operatore 5G</strong>
                      <span className="text-xs text-slate-600">Switch trasparente a zero interruzioni su rete cellulare industriale con mantenimento degli indirizzi IP pubblici statici.</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                    <Network className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0b1f3f] block">Data Center Ridondati Tier III/IV</strong>
                      <span className="text-xs text-slate-600">Infrastrutture server e cloud ospitate in data center certificati sul territorio nazionale con alimentazione protetta e monitoraggio 24/7.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-900 border-4 border-white">
                  <img
                    src={IMAGES.itFiberTechnicianField}
                    alt="Giunzione fibra ottica e collaudo apparati di trasmissione Antelma"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3f]/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm font-bold">Collaudo Tecnico Certificato</div>
                      <div className="text-xs text-slate-300">Certificazione strumentale di ogni singola tratta ottica</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CERTIFICAZIONI & QUALITÀ */}
        {activeTab === "certificazioni" && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="max-w-3xl">
              <span className="text-xs font-mono text-red-600 uppercase font-bold tracking-wider">
                / conformità &amp; accreditamenti /
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3f] tracking-tight mt-1">
                Certificazioni Nazionali ed Europee
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mt-4">
                Operiamo nel pieno rispetto dei più rigorosi standard del Ministero delle Imprese e del Made in Italy, dell'AGCOM e delle normative europee di cyber security e continuità aziendale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1f3f]">
                  Operatore TLC Ministeriale Autorizzato
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Autorizzazione generale per l'offerta al pubblico di reti e servizi di comunicazione elettronica rilasciata dal Ministero delle Imprese e del Made in Italy. Iscrizione al Registro degli Operatori di Comunicazione (ROC).
                </p>
                <div className="text-xs font-mono font-semibold text-slate-500 pt-2 border-t border-slate-100">
                  Registro Imprese Varese: 01814180129 · Regolamento AGCOM
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1f3f]">
                  ISO 9001:2015 &amp; ISO 27001:2022
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sistemi di gestione della qualità certificati per l'assistenza sistemistica e la progettazione reti, integrati con il sistema di gestione della sicurezza delle informazioni per garantire riservatezza, integrità e disponibilità dei dati.
                </p>
                <div className="text-xs font-mono font-semibold text-slate-500 pt-2 border-t border-slate-100">
                  Audit periodici di conformità accreditati Accredia
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: LAVORA CON NOI / CARRIERE */}
        {activeTab === "carriere" && (
          <div id="lavora-con-noi-section" className="space-y-10 animate-in fade-in duration-200 scroll-mt-28">
            <div className="max-w-3xl">
              <span className="text-xs font-mono text-red-600 uppercase font-bold tracking-wider">
                / opportunità di carriera /
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f3f] tracking-tight mt-1">
                Lavora Con Noi nel Cuore dell'Innovazione IT
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mt-4">
                Siamo costantemente alla ricerca di talenti appassionati di tecnologia, reti e sicurezza. Offriamo contratti stabili, percorsi di formazione continua e certificazioni ufficiali a carico dell'azienda.
              </p>
            </div>

            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                    <div>
                      <span className="text-[11px] font-mono text-red-600 font-bold uppercase tracking-wider">
                        {job.department}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0b1f3f] mt-1 font-sans">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" />
                          {job.contract}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={onOpenContact}
                      className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0b1f3f] text-white hover:bg-red-600 transition-colors shrink-0 cursor-pointer"
                    >
                      Invia Candidatura
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-xs text-slate-700">
                    <div>
                      <strong className="text-[#0b1f3f] block mb-2 font-bold uppercase tracking-wider text-[11px]">
                        Responsabilità Principali:
                      </strong>
                      <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                        {job.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-[#0b1f3f] block mb-2 font-bold uppercase tracking-wider text-[11px]">
                        Requisiti Richiesti:
                      </strong>
                      <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                        {job.requirements.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
