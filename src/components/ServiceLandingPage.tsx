import React, { useState } from "react";
import { 
  ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, 
  MapPin, Phone, Mail, Clock, AlertTriangle, Zap, 
  Server, Cpu, Network, Headphones, Award, FileText, 
  ChevronDown, ExternalLink, Sparkles, Building2, Check, Send
} from "lucide-react";
import { ServiceLandingDetail, SERVICE_LANDING_DATA } from "../data/serviceLandingData";
import { SERVICES, ServiceItem, ANTELMA_INFO } from "../data/antelmaData";
import { IMAGES } from "../assets/images";
import { Language } from "../i18n/translations";

interface ServiceLandingPageProps {
  serviceId: string;
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onSelectOtherService: (serviceId: string) => void;
  onOpenQuickModal: (service: ServiceItem) => void;
  currentLang?: Language;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({
  serviceId,
  onNavigateHome,
  onNavigateServices,
  onSelectOtherService,
  onOpenQuickModal,
  currentLang = "it",
}) => {
  const landingData: ServiceLandingDetail =
    SERVICE_LANDING_DATA[serviceId] || SERVICE_LANDING_DATA["connettivita-gestita"];

  const currentServiceItem =
    SERVICES.find((s) => s.id === landingData.id) || SERVICES[0];

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    address: "",
    name: "",
    email: "",
    phone: "",
    seats: "20-50",
    notes: "",
  });

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  const getArchitectureIcon = (iconType: string) => {
    switch (iconType) {
      case "network":
        return <Network className="w-5 h-5 text-red-500" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-red-500" />;
      case "headset":
        return <Headphones className="w-5 h-5 text-blue-400" />;
      default:
        return <Server className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="pt-24 pb-24 bg-[#f8f9fb] text-[#0f172a]">
      {/* Schema.org Structured Data for Local SEO & Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": landingData.title,
            "description": landingData.seoDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Antelma S.r.l.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Gavinana, 3",
                "addressLocality": "Busto Arsizio",
                "addressRegion": "VA",
                "postalCode": "21052",
                "addressCountry": "IT",
              },
              "telephone": "+39 0331 651811",
              "priceRange": "€€€",
            },
            "areaServed": landingData.geoCoverageCities.map((city) => ({
              "@type": "AdministrativeArea",
              "name": city,
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "142",
            },
          }),
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <button 
            onClick={onNavigateHome} 
            className="hover:text-[#0b1f3f] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button 
            onClick={onNavigateServices} 
            className="hover:text-[#0b1f3f] transition-colors cursor-pointer"
          >
            Servizi IT &amp; TLC
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-red-600 font-bold truncate max-w-xs sm:max-w-md">
            {landingData.title}
          </span>
        </nav>

        {/* HERO SECTION: High Conversion & SEO/GEO Headline */}
        <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-[#071326] via-[#0b1f3f] to-[#162e5b] text-white p-6 sm:p-10 lg:p-14 mb-16 shadow-2xl border border-blue-900/60">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Local Authority Copy & Trust Badges */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-mono font-bold tracking-wide uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {landingData.heroBadge}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-200 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  Presidio Operativo Lombardia
                </span>
              </div>

              {/* H1 SEO/GEO Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white leading-tight">
                {landingData.h1}
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
                {landingData.heroSubtitle}
              </p>

              {/* Key Proof Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {landingData.stats.map((stat, i) => (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-left"
                  >
                    <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-red-300 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-300 leading-tight mt-1">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${ANTELMA_INFO.phone.replace(/[\s.]/g, "")}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-red-900/30 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Chiama Subito: {ANTELMA_INFO.phone}</span>
                </a>

                <button
                  onClick={() => onOpenQuickModal(currentServiceItem)}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-300" />
                  <span>Vedi Scheda Rapida (Popup)</span>
                </button>
              </div>

            </div>

            {/* Right Column: Direct High-Converting Coverage & Lead Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-[#0f172a] shadow-2xl border-4 border-white/20 relative">
                
                <div className="mb-5 pb-4 border-b border-slate-100">
                  <div className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-50 text-red-600 mb-1">
                    Verifica Immediata Gratuita
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0b1f3f] font-sans">
                    Richiedi Studio di Fattibilità &amp; Preventivo
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Riscontro tecnico garantito entro 4 ore lavorative dal nostro team di Busto Arsizio.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0b1f3f]">
                      Richiesta Presa in Carico!
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                      Un nostro ingegnere di rete analizzerà la fattibilità tecnica per la sede di <b>{formData.company || "tua azienda"}</b> e ti contatterà al numero indicato.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-red-600 underline hover:text-red-700 cursor-pointer"
                    >
                      Invia un'altra richiesta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitLead} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Azienda / Ragione Sociale *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Es. Officine Meccaniche Rossi S.r.l."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] focus:border-transparent bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Indirizzo Sede &amp; Comune per Verifica Copertura *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Es. Via Milano 45, Gallarate (VA)"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] focus:border-transparent bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Nome Referente *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Mario Rossi"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] focus:border-transparent bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Telefono Diretto *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="0331 XXXXXX / Cell"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] focus:border-transparent bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Aziendale *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="mario.rossi@azienda.it"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] focus:border-transparent bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          N° Postazioni
                        </label>
                        <select
                          value={formData.seats}
                          onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] bg-slate-50/50"
                        >
                          <option value="1-10">1 - 10 postazioni</option>
                          <option value="10-30">10 - 30 postazioni</option>
                          <option value="30-80">30 - 80 postazioni</option>
                          <option value="80+">Oltre 80 / Multisito</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Priorità
                        </label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0b1f3f] bg-slate-50/50">
                          <option>Urgente (disservizio in atto)</option>
                          <option>Entro 30 giorni</option>
                          <option>Valutazione budget annuale</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#0b1f3f] hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 group mt-2"
                    >
                      {isSubmitting ? (
                        <span>Elaborazione verifica...</span>
                      ) : (
                        <>
                          <span>Richiedi Studio di Fattibilità Gratuito</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Dati trattati in conformità al GDPR · Nessuna cessione a terzi</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* LOCAL GEO COVERAGE & DISPATCH PRESENCE */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Copertura Territoriale Diretta Lombardia</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b1f3f] font-sans mt-1">
                Presidio Sistemistico e Rete Dati Attiva sul Territorio
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                I nostri tecnici operano direttamente sul posto con veicoli attrezzati e ricambi a bordo, garantendo tempi di arrivo on-site entro 2 ore dalla chiamata.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center font-black text-xl">
                2h
              </div>
              <div>
                <div className="text-xs font-bold text-[#0b1f3f]">Tempo Massimo On-Site</div>
                <div className="text-[11px] text-slate-500">Garantito da contratto nelle province coperte</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Zone &amp; Centri di Presidio Immediato:
            </span>
            <div className="flex flex-wrap gap-2">
              {landingData.geoCoverageCities.map((city, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/70 border border-blue-200/60 text-[#0b1f3f] text-xs font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>{city}</span>
                </div>
              ))}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                <span>+ Attivazione circuiti dedicati in tutta Italia</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROBLEM VS SOLUTION COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* The Pain / Hidden Cost */}
          <div className="bg-red-50/70 border border-red-200/80 rounded-3xl p-8 sm:p-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-mono font-bold uppercase">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Il Problema delle Linee Ordinarie</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-red-950 font-sans">
              {landingData.problemTitle}
            </h3>
            <p className="text-xs sm:text-sm text-red-900/80 leading-relaxed">
              {landingData.problemDesc}
            </p>
            <div className="space-y-3 pt-2">
              {landingData.problems.map((prob, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-red-900">
                  <div className="w-4 h-4 rounded-full bg-red-200 text-red-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✕
                  </div>
                  <span>{prob}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Antelma Enterprise Advantage */}
          <div className="bg-[#0b1f3f] text-white border border-blue-900 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 text-blue-200 text-xs font-mono font-bold uppercase">
              <Zap className="w-3.5 h-3.5 text-red-400" />
              <span>La Garanzia Contrattuale Antelma</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans">
              {landingData.solutionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {landingData.solutionDesc}
            </p>
            <div className="space-y-3 pt-2">
              {landingData.solutions.map((sol, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* COMPARISON TABLE: Antelma vs Operatori Nazionali Tradizionali */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
              / confronto trasparente /
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1f3f] font-sans">
              Perché le Imprese Scelgono Antelma invece dei Grandi Carrier Generici
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Mettiamo a confronto le differenze sostanziali tra un fornitore ingegneristico dedicato e un operatore commerciale di massa.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-500 uppercase tracking-wider text-xs">
                    Caratteristica del Servizio
                  </th>
                  <th className="py-4 px-4 font-extrabold text-[#0b1f3f] bg-blue-50/60 rounded-t-xl text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      Antelma S.r.l. (Partner Diretto)
                    </span>
                  </th>
                  <th className="py-4 px-4 font-bold text-slate-400 text-xs sm:text-sm">
                    Operatori Nazionali Tradizionali
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {landingData.comparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-800">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 font-bold text-[#0b1f3f] bg-blue-50/30">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.antelma}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-500">
                      {item.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TECHNICAL ARCHITECTURE DEEP-DIVE */}
        <div className="bg-[#0b1f3f] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl border border-blue-900">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-2">
              / sotto il cofano /
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white">
              Architettura Tecnica &amp; Protocolli di Affidabilità
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Standard hardware e di rete enterprise progettati per garantire continuità, crittografia e scalabilità.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landingData.techArchitecture.map((arch, idx) => (
              <div
                key={idx}
                className="bg-[#071326] p-6 rounded-2xl border border-blue-900/60 hover:border-red-600/50 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getArchitectureIcon(arch.iconType)}
                </div>
                <h4 className="text-base font-bold text-white font-sans">
                  {arch.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {arch.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SIZING OPTIONS / CONFIGURATORE PER DIMENSIONE AZIENDALE */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-1">
                / tagli &amp; configurazioni /
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1f3f] font-sans">
                Configurazioni Consigliate per Dimensione Aziendale
              </h2>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-full shrink-0">
              {landingData.sizingOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSizeIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedSizeIndex === idx
                      ? "bg-[#0b1f3f] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#0b1f3f]"
                  }`}
                >
                  Opzione {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {landingData.sizingOptions.map((opt, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSizeIndex(idx)}
                className={`rounded-2xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  selectedSizeIndex === idx
                    ? "border-red-600 bg-red-50/10 shadow-lg"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Livello 0{idx + 1}
                    </span>
                    {selectedSizeIndex === idx && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-600 text-white">
                        Selezionato
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0b1f3f] font-sans mb-1">
                    {opt.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-4">
                    {opt.target}
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {opt.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 italic mb-4">
                    <b>Ideale per:</b> {opt.recommendedFor}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedSizeIndex === idx
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-[#0b1f3f]"
                    }`}
                  >
                    Richiedi Preventivo per Questa Taglia
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LOCAL CASE STUDY: Verified Results in Lombardy */}
        <div className="mb-16 bg-gradient-to-r from-[#071326] to-[#0b1f3f] text-white rounded-3xl p-8 sm:p-12 border border-blue-900/60 shadow-xl">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-mono font-bold uppercase">
                Caso Studio Verificato
              </span>
              <span className="text-xs text-blue-200 font-mono">
                {landingData.localCaseStudy.location}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold font-sans text-white">
              {landingData.localCaseStudy.client}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2">
                  La Sfida Iniziale
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {landingData.localCaseStudy.challenge}
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                  Il Risultato con Antelma
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {landingData.localCaseStudy.result}
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-red-600 pl-4 py-2 italic text-sm text-slate-200">
              "{landingData.localCaseStudy.quote}"
              <div className="not-italic text-xs font-bold text-white mt-2">
                — {landingData.localCaseStudy.author}
              </div>
            </blockquote>
          </div>
        </div>

        {/* DEDICATED SERVICE FAQ (Structured for SEO) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
              / domande frequenti /
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1f3f] font-sans">
              Tutto Quello che Devi Sapere su {landingData.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Risposte chiare fornite dai nostri ingegneri di rete e responsabili tecnici.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {landingData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-[#0b1f3f] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      activeFaq === idx ? "rotate-180 text-red-600" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 bg-slate-50/50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* OTHER SERVICES NAVIGATION BAR */}
        <div className="bg-slate-100/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Esplora altre soluzioni enterprise
              </span>
              <h4 className="text-lg font-bold text-[#0b1f3f] font-sans">
                La Suite Completa di Servizi Antelma
              </h4>
            </div>
            <button
              onClick={onNavigateServices}
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer"
            >
              <span>Vedi Tutto il Catalogo Servizi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.filter((s) => s.id !== landingData.id).map((other) => (
              <button
                key={other.id}
                onClick={() => {
                  onSelectOtherService(other.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-[#0b1f3f] text-[#0b1f3f] hover:text-white border border-slate-200 hover:border-[#0b1f3f] transition-all text-left group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold font-sans">{other.title}</div>
                  <div className="text-[10px] text-slate-400 group-hover:text-slate-300">
                    {other.category}
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>

        {/* STICKY BOTTOM CONVERSION BAR */}
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl py-3 px-4 sm:px-8">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
            <div className="hidden md:flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-xs font-bold text-[#0b1f3f]">
                {landingData.title}
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                · {landingData.stats[0]?.value} {landingData.stats[0]?.label}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <a
                href={`tel:${ANTELMA_INFO.phone.replace(/[\s.]/g, "")}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#0b1f3f] hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>{ANTELMA_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenQuickModal(currentServiceItem)}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0b1f3f] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Scheda Rapida
              </button>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                Verifica Copertura &amp; Preventivo
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
