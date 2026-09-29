import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { IMAGES } from "../assets/images";
import { Language, TRANSLATIONS } from "../i18n/translations";

interface NewsSectionProps {
  onReadArticle: (articleId: string) => void;
  onViewAll: () => void;
  currentLang?: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ 
  onReadArticle, 
  onViewAll,
  currentLang = "it"
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;

  const articles = [
    {
      id: "nis2-guide",
      title: "Adeguamento Direttiva NIS2: Requisiti e Obblighi per le Imprese Italiane",
      excerpt: "Tutto ciò che la dirigenza e gli IT Manager devono sapere per proteggere la supply chain e rispettare le nuove disposizioni di sicurezza comunitarie.",
      date: "24 Settembre 2026",
      category: "Cyber Security",
      image: IMAGES.itSocCyberAnalyst,
    },
    {
      id: "business-continuity-cost",
      title: "Business Continuity: Quanto Costa un'Ora di Fermo Informatico alla Tua Azienda?",
      excerpt: "Un'analisi dettagliata sui costi nascosti di interruzioni di rete, attacchi ransomware e la strategia per azzerare i tempi di inattività.",
      date: "12 Settembre 2026",
      category: "Reti & TLC",
      image: IMAGES.itFiberTechnicianField,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with "+ More articles" button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                / {t.news_kicker} /
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b1f3f] font-sans">
              {t.news_title}
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border border-slate-300 text-[#0b1f3f] hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all self-start sm:self-auto cursor-pointer"
          >
            <span>+ {t.news_all}</span>
          </button>
        </div>

        {/* 2-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => onReadArticle(art.id)}
              className="group cursor-pointer bg-white rounded-[28px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#0b1f3f]/90 backdrop-blur-md text-white shadow-sm border border-blue-800">
                    {art.category}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    {art.date}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1f3f] leading-snug group-hover:text-red-600 transition-colors mb-3 font-sans">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0b1f3f] group-hover:text-red-600 transition-colors">
                    Leggi l'approfondimento
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
