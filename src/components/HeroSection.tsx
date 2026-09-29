import React from "react";
import { ArrowRight, ShieldCheck, Zap, Globe, Sparkles, Server, CheckCircle2, PhoneCall } from "lucide-react";
import { IMAGES } from "../assets/images";
import { ANTELMA_INFO } from "../data/antelmaData";
import { Language, TRANSLATIONS } from "../i18n/translations";

interface HeroSectionProps {
  onExplore: () => void;
  onOpenContact: () => void;
  currentLang?: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExplore, 
  onOpenContact, 
  currentLang = "it" 
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f8fafd] via-[#f1f5f9] to-[#ffffff]">
      
      {/* Subtle background tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Authentic IT Service Photo with Human Team */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-square rounded-[36px] overflow-hidden bg-slate-900 shadow-[0_25px_60px_-15px_rgba(11,31,63,0.18)] border-4 border-white group">
              <img
                src={IMAGES.itTechnicianServers}
                alt="Ingegneri IT e sistemisti di rete Antelma al lavoro su infrastrutture dati e fibra ottica"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3f]/85 via-transparent to-black/10 pointer-events-none" />

              {/* Floating Live SLA Trust Badge */}
              <div className="absolute top-6 left-6 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0b1f3f] font-sans">
                    FiberEVOx 10 Gbps
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    Fibra Dedicata FTTO
                  </div>
                </div>
              </div>

              {/* Floating Bottom Trust Panel */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0b1f3f] font-sans">
                      Presidio Sistemistico Diretto
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Nessun call center esterno · Busto Arsizio (VA)
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                  H24 / SLA &lt;15m
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Blue-Red Accents */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center space-y-6">
            
            {/* Section kicker with Blue & Red badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#0b1f3f] text-xs font-bold font-mono tracking-wide uppercase border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                {t.hero_kicker}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#0b1f3f] tracking-tight leading-[1.08] font-sans">
              {t.hero_title_1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-[#1e3a8a]">
                {t.hero_title_2}
              </span>
            </h1>

            {/* Lead Narrative (Human & Professional) */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
              {t.hero_desc}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              {t.hero_subdesc}
            </p>

            {/* CTAs (Blue and Red) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0b1f3f] hover:bg-[#152e59] text-white transition-all shadow-md active:scale-95 cursor-pointer border border-blue-900"
              >
                <span>{t.hero_cta_explore}</span>
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border-2 border-red-600 text-red-600 hover:bg-red-50 transition-all active:scale-95 cursor-pointer font-semibold"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t.hero_cta_contact}</span>
              </button>
            </div>

            {/* KPI Numbers with Tabular Figures */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200">
              <div className="p-2 rounded-xl bg-white/70 border border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1f3f] tabular-nums">
                  99.99%
                </div>
                <div className="text-[11px] font-medium text-slate-600 mt-0.5">
                  {t.hero_uptime}
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white/70 border border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-red-600 tabular-nums">
                  &lt;15 min
                </div>
                <div className="text-[11px] font-medium text-slate-600 mt-0.5">
                  {t.hero_sla}
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white/70 border border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1e3a8a] tabular-nums">
                  100%
                </div>
                <div className="text-[11px] font-medium text-slate-600 mt-0.5">
                  {t.hero_compliance}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
