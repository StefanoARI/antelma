import React, { useState } from "react";
import { 
  Wifi, ShieldCheck, PhoneCall, Headphones, 
  HardDrive, Layers, ArrowRight, ChevronRight, 
  CheckCircle2, Sparkles, Filter, Server, Lock, ExternalLink, MapPin
} from "lucide-react";
import { IMAGES } from "../assets/images";
import { SERVICES, ServiceItem } from "../data/antelmaData";
import { Language } from "../i18n/translations";

interface ServicesPageProps {
  onNavigateHome: () => void;
  onSelectServiceLanding: (serviceId: string) => void;
  onOpenQuickModal: (service: ServiceItem) => void;
  onOpenContact: () => void;
  currentLang?: Language;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onSelectServiceLanding,
  onOpenQuickModal,
  onOpenContact,
  currentLang = "it",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutti");

  const categories = [
    "Tutti",
    "Reti & Connettività",
    "Cyber Security",
    "Voice & Cloud",
    "Supporto Sistemistico",
    "Hardware & Device",
    "System Integration",
  ];

  const filteredServices =
    selectedCategory === "Tutti"
      ? SERVICES
      : SERVICES.filter((s) => s.category.includes(selectedCategory));

  const getServiceIcon = (category: string) => {
    if (category.includes("Reti")) return <Wifi className="w-5 h-5" />;
    if (category.includes("Cyber")) return <ShieldCheck className="w-5 h-5" />;
    if (category.includes("Voice")) return <PhoneCall className="w-5 h-5" />;
    if (category.includes("Supporto")) return <Headphones className="w-5 h-5" />;
    if (category.includes("Hardware")) return <HardDrive className="w-5 h-5" />;
    return <Layers className="w-5 h-5" />;
  };

  return (
    <div className="pt-24 pb-24 bg-[#f8f9fb]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <button onClick={onNavigateHome} className="hover:text-[#0b1f3f] transition-colors cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0b1f3f] font-bold">Servizi IT &amp; TLC</span>
        </nav>

        {/* Top Header Banner in Blue & Red with Authentic IT Photo */}
        <div className="relative w-full rounded-[36px] overflow-hidden bg-gradient-to-r from-[#0b1f3f] via-[#122e5d] to-[#1e3a8a] text-white p-8 sm:p-12 lg:p-16 mb-16 shadow-xl border border-blue-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-200 text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Catalogo Soluzioni Enterprise &amp; Landing Page SEO/GEO
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
                Servizi di Connettività, Cyber Security e Assistenza IT
              </h1>

              <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed font-normal">
                Dalla posa di fibra ottica dedicata FTTO all'adeguamento normativo NIS2, fino alla telefonia cloud unificata e alla manutenzione sistemistica continuativa con SLA contrattualizzato.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-blue-200">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Presidio diretto nelle province di Varese, Milano, Como, Monza e in tutta la Lombardia</span>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-2xl border-2 border-white/20">
                <img
                  src={IMAGES.itTechnicianServers}
                  alt="Ingegneri IT al lavoro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3f]/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-xs text-white font-medium">
                    Infrastrutture gestite con SLA garantito &lt; 15 minuti
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Pillars Blue Section - Each pillar links to its landing page */}
        <div className="bg-[#0b1f3f] text-white rounded-[32px] p-8 sm:p-12 mb-16 shadow-2xl border border-blue-900/60">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-red-400 uppercase tracking-wider block mb-2 font-bold">
              / pilastri dell'infrastruttura /
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
              Architettura Tecnologica Integrata
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Clicca su ciascun pilastro per aprire la Landing Page tecnica dedicata con dettagli di copertura territoriale e architettura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              onClick={() => onSelectServiceLanding("connettivita-gestita")}
              className="p-6 rounded-2xl bg-[#08152a] border border-blue-900/50 hover:border-red-500/70 transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-sans flex items-center justify-between">
                <span>FiberEVOx 10 Gbps</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Circuiti in fibra dedicati con banda simmetrica e failover automatico su rete 5G per zero disconnessioni.
              </p>
              <div className="text-[11px] font-bold text-red-400 group-hover:underline pt-1">
                Apri Landing Page &rarr;
              </div>
            </div>

            <div 
              onClick={() => onSelectServiceLanding("cyber-security-nis2")}
              className="p-6 rounded-2xl bg-[#08152a] border border-blue-900/50 hover:border-red-500/70 transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-sans flex items-center justify-between">
                <span>Antelma Secure NIS2</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Vulnerability assessment, gap analysis e protocolli conformi alla direttiva europea per la supply chain.
              </p>
              <div className="text-[11px] font-bold text-red-400 group-hover:underline pt-1">
                Apri Landing Page &rarr;
              </div>
            </div>

            <div 
              onClick={() => onSelectServiceLanding("smart-office-voice")}
              className="p-6 rounded-2xl bg-[#08152a] border border-blue-900/50 hover:border-red-500/70 transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-sans flex items-center justify-between">
                <span>Smart Office Suite</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Centralino cloud integrato con WhatsApp OpenBridge, smart working e telefonia IP aziendale avanzata.
              </p>
              <div className="text-[11px] font-bold text-red-400 group-hover:underline pt-1">
                Apri Landing Page &rarr;
              </div>
            </div>

            <div 
              onClick={() => onSelectServiceLanding("assistenza-it-tlc")}
              className="p-6 rounded-2xl bg-[#08152a] border border-blue-900/50 hover:border-red-500/70 transition-all space-y-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-sans flex items-center justify-between">
                <span>Help Desk H24 &amp; SLA</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Supporto diretto da tecnici interni, manutenzione proattiva da remoto e interventi on-site garantiti entro 2h.
              </p>
              <div className="text-[11px] font-bold text-red-400 group-hover:underline pt-1">
                Apri Landing Page &rarr;
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b1f3f]">
              Filtra per Area Tecnologica:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0b1f3f] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:text-[#0b1f3f] border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Services Grid: Clicking card navigates to dedicated SEO/GEO Landing Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onSelectServiceLanding(service.id)}
              className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-red-600/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0b1f3f] group-hover:bg-red-50 group-hover:text-red-600 flex items-center justify-center transition-colors">
                    {getServiceIcon(service.category)}
                  </div>
                  <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200/60">
                    {service.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-between">
                  <span>0{index + 1} / {service.category}</span>
                  <span className="text-red-600 text-[10px] font-bold group-hover:underline">Landing Page SEO/GEO</span>
                </div>

                <h3 className="text-xl font-bold text-[#0b1f3f] mb-3 group-hover:text-red-600 transition-colors font-sans">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Landing Page (Primary) & Popup (Secondary) */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                <span className="text-xs font-mono font-bold text-slate-500">
                  {service.metrics}
                </span>

                <div className="flex items-center gap-2">
                  {/* Secondary button: Quick Popup Modal */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuickModal(service);
                    }}
                    title="Visualizza scheda tecnica in finestra popup rapida"
                    className="px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-500 hover:text-[#0b1f3f] hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
                  >
                    Scheda Rapida
                  </button>

                  {/* Primary button: Dedicated SEO/GEO Landing Page */}
                  <button
                    onClick={() => onSelectServiceLanding(service.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0b1f3f] text-white group-hover:bg-red-600 transition-all shadow-xs cursor-pointer"
                  >
                    <span>Landing Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-red-600 to-[#0b1f3f] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans">
              Hai bisogno di una soluzione tecnologica su misura?
            </h3>
            <p className="text-xs sm:text-sm text-slate-100 mt-2 max-w-xl">
              I nostri tecnici eseguono studi di fattibilità gratuiti, verifiche di copertura fibra FTTO e assessment preliminari NIS2 in tutta la Lombardia.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0b1f3f] hover:bg-slate-100 transition-all shadow-md shrink-0 cursor-pointer font-sans"
          >
            Richiedi Studio di Fattibilità
          </button>
        </div>

      </div>
    </div>
  );
};
