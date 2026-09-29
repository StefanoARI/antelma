import React, { useState } from "react";
import { ChevronRight, ChevronDown, HelpCircle, ShieldAlert } from "lucide-react";
import { FAQ_ITEMS } from "../data/antelmaData";

import { Language } from "../i18n/translations";

interface FaqPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
  currentLang?: Language;
}

export const FaqPage: React.FC<FaqPageProps> = ({ 
  onNavigateHome, 
  onOpenContact,
  currentLang = "it"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-20 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
          <button onClick={onNavigateHome} className="hover:text-neutral-900 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-neutral-900 font-semibold">FAQ &amp; Normativa NIS2</span>
        </div>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-mono font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Domande Frequenti &amp; Garanzie</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-syne text-[#111111] tracking-tight">
            Tutto ciò che Devi Sapere su Servizi, SLA e Sicurezza
          </h1>
          <p className="text-sm text-neutral-600 mt-4 leading-relaxed">
            Risposte chiare e trasparenti sui contratti di assistenza, tempi di intervento, obblighi legali NIS2 e passaggio a Smart Office Cloud.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-syne font-bold text-neutral-900 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-red-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4 animate-in fade-in duration-150">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-neutral-500 mb-4">
            Hai un quesito specifico per la tua infrastruttura aziendale?
          </p>
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#111111] text-white hover:bg-neutral-800 transition-all shadow-md"
          >
            Contatta il Nostro Team di Ingegneria
          </button>
        </div>

      </div>
    </div>
  );
};
