import React from "react";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { IMAGES } from "../assets/images";
import { CASE_STUDIES, CaseStudy } from "../data/antelmaData";

import { Language } from "../i18n/translations";

interface CasestudiesPageProps {
  onNavigateHome: () => void;
  onExploreMore: (study: CaseStudy) => void;
  onOpenContact: () => void;
  currentLang?: Language;
}

export const CasestudiesPage: React.FC<CasestudiesPageProps> = ({
  onNavigateHome,
  onExploreMore,
  onOpenContact,
  currentLang = "it",
}) => {
  return (
    <div className="pt-24 pb-20 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="relative w-full rounded-[36px] overflow-hidden aspect-[21/9] sm:aspect-[24/8] min-h-[260px] bg-neutral-900 shadow-2xl mb-16">
          <img
            src={IMAGES.caseStudyTraffic}
            alt="Case Studies Antelma"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
                Storie di Successo Reali
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-syne">
                Case Studies
              </h1>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mt-2 font-normal">
                Come abbiamo trasformato l'infrastruttura, la connettività e la sicurezza informatica delle aziende clienti.
              </p>
            </div>

            <div className="self-end bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-neutral-300 flex items-center gap-2">
              <button onClick={onNavigateHome} className="hover:text-white transition-colors">
                Home
              </button>
              <ChevronRight className="w-3 h-3 text-neutral-500" />
              <span className="text-white font-medium">Case Studies</span>
            </div>
          </div>
        </div>

        {/* List of Case Studies */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="bg-white rounded-[32px] border border-neutral-200/80 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-mono">
                    {study.date}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-mono text-red-600 uppercase tracking-wider block">
                    {study.clientCategory}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-[#111111]">
                    {study.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-neutral-600">
                    <p>
                      <strong className="text-neutral-900">La Sfida:</strong> {study.challenge}
                    </p>
                    <p>
                      <strong className="text-neutral-900">La Soluzione Antelma:</strong> {study.solution}
                    </p>
                    <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 font-medium flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Risultati Concreti:</strong> {study.results}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-[11px] bg-neutral-100 text-neutral-700 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenContact}
                      className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900 text-white hover:bg-neutral-800 transition-all"
                    >
                      Richiedi Caso Simile
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
