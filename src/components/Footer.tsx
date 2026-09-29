import React from "react";
import { IMAGES } from "../assets/images";
import { ANTELMA_INFO, SERVICES } from "../data/antelmaData";
import { Language, TRANSLATIONS } from "../i18n/translations";

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectServiceLanding?: (serviceId: string) => void;
  onNavigateCareers?: () => void;
  currentLang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate,
  onSelectServiceLanding,
  onNavigateCareers,
  currentLang = "it"
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;

  return (
    <footer className="bg-[#050e1d] text-white pt-20 pb-12 border-t border-blue-950">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Big Impact Statement in Blue & Red */}
        <div className="pb-16 border-b border-blue-900/60 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={IMAGES.logoWhite}
                alt={ANTELMA_INFO.name}
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const p = e.currentTarget.parentElement;
                  if (p && !p.querySelector(".white-logo-fallback")) {
                    const sp = document.createElement("span");
                    sp.className = "white-logo-fallback text-2xl font-bold text-white";
                    sp.innerHTML = 'ANTELMA<span class="text-red-500">.</span>';
                    p.appendChild(sp);
                  }
                }}
              />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl text-slate-100 font-sans">
              {t.footer_cta_title} <br />
              <span className="text-red-500">
                {t.footer_cta_subtitle}
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate("contacts")}
              className="px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-red-600 hover:bg-red-700 text-white transition-all shadow-lg active:scale-95 cursor-pointer font-sans"
            >
              {t.footer_btn_quote}
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase border-2 border-blue-700 text-blue-200 hover:border-white hover:text-white transition-all active:scale-95 cursor-pointer font-sans"
            >
              {t.footer_btn_services}
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 text-xs">
          
          {/* Col 1: About Antelma */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300 font-mono">
              Profilo Societario
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Operatore di telecomunicazioni e System Integrator per l'evoluzione tecnologica delle imprese: reti dedicate in fibra ottica, sicurezza perimetrale ed endpoint NIS2, centralini cloud e presidio sistemistico h24.
            </p>
            <div className="text-slate-400 text-[11px] space-y-1">
              <div>Sede: {ANTELMA_INFO.address}</div>
              <div>Tel: {ANTELMA_INFO.phone} | Fax: {ANTELMA_INFO.fax}</div>
              <div>Email: {ANTELMA_INFO.email}</div>
            </div>
          </div>

          {/* Col 2: Company Navigation (Intred Model) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300 font-mono">
              Azienda
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-red-400 transition-colors">
                  Chi Siamo &amp; Storia
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-red-400 transition-colors">
                  Mission &amp; Valori
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-red-400 transition-colors">
                  Management &amp; Governance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-red-400 transition-colors">
                  La Nostra Rete
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateCareers) {
                      onNavigateCareers();
                    } else {
                      onNavigate("about");
                    }
                  }} 
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Lavora con Noi
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Soluzioni TLC & Cyber */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300 font-mono">
              Servizi &amp; Soluzioni
            </h4>
            <ul className="space-y-2 text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => {
                      if (onSelectServiceLanding) {
                        onSelectServiceLanding(s.id);
                      } else {
                        onNavigate("services");
                      }
                    }} 
                    className="hover:text-red-400 transition-colors text-left truncate max-w-full cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Conformità & Garanzie */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300 font-mono">
              Qualità &amp; Garanzie
            </h4>
            <div className="p-4 rounded-2xl bg-[#09172c] border border-blue-900/60 space-y-2 text-[11px] text-slate-300">
              <div className="font-semibold text-white">Direttiva UE NIS2 &amp; ISO 27001</div>
              <div>Kit di conformità aziendale e auditing dei rischi informatici per la supply chain.</div>
              <div className="pt-2 border-t border-blue-900 text-[10px] text-emerald-400 font-semibold">
                SLA di presa in carico &lt; 15 min
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-blue-900/60 text-[11px] text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            &copy; 2026 {ANTELMA_INFO.legalName} | P.IVA e C.F. {ANTELMA_INFO.vatNumber} | {ANTELMA_INFO.rea}
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Termini e Condizioni</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
            <span className="hover:text-white cursor-pointer">Carta dei Servizi AGCOM</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
