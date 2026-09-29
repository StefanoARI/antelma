import React from "react";
import { ChevronRight, ArrowRight, Calendar, User } from "lucide-react";
import { IMAGES } from "../assets/images";

import { Language } from "../i18n/translations";

interface NewsPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
  currentLang?: Language;
}

export const NewsPage: React.FC<NewsPageProps> = ({ 
  onNavigateHome, 
  onOpenContact,
  currentLang = "it"
}) => {
  const articles = [
    {
      id: "nis2-guide",
      title: "Adeguamento Direttiva NIS2: Scadenze, Obblighi e Sanzioni per le PMI Italiane",
      excerpt: "La guida completa di Antelma per comprendere i requisiti di sicurezza informatica della supply chain e preparare l'azienda alle verifiche.",
      date: "24 Settembre 2026",
      category: "Cyber Security",
      author: "Team Sicurezza Antelma",
      image: IMAGES.bannerCoralNetwork,
    },
    {
      id: "business-continuity-cost",
      title: "Business Continuity: Quanto Costa un'Ora di Fermo Informatico alla Tua Impresa?",
      excerpt: "I costi diretti e indiretti di un blackout IT e come la connettività FiberEVOx con failover automatico azzera ogni rischio.",
      date: "12 Settembre 2026",
      category: "Reti & TLC",
      author: "Engineering Antelma",
      image: IMAGES.bannerFluidRibbons,
    },
    {
      id: "smart-office-openbridge",
      title: "Centralino Cloud e WhatsApp OpenBridge: La Rivoluzione delle Comunicazioni Aziendali",
      excerpt: "Come unificare le chiamate vocali, l'integrazione con Microsoft Teams e i canali WhatsApp ufficiali in un'unica piattaforma omnichannel.",
      date: "28 Agosto 2026",
      category: "Voice & Cloud",
      author: "Voice Specialist Antelma",
      image: IMAGES.caseStudyTraffic,
    },
    {
      id: "stampa-gestita-mps",
      title: "Stampa Aziendale Gestita e Noleggio Operativo: Ottimizzare i Costi di Gestione",
      excerpt: "Perché passare dalla proprietà dell'hardware al noleggio con caring garantito riduce fino al 35% i costi operativi aziendali.",
      date: "15 Agosto 2026",
      category: "Hardware & Caring",
      author: "Divisione MPS Antelma",
      image: IMAGES.caseStudyDatacenter,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
          <button onClick={onNavigateHome} className="hover:text-neutral-900 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-neutral-900 font-semibold">News &amp; Tech Insights</span>
        </div>

        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono text-red-600 uppercase tracking-widest block mb-2">
            / blog &amp; aggiornamenti /
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-syne text-[#111111] tracking-tight">
            Notizie, Trend e Guide Tecniche per le Imprese
          </h1>
          <p className="text-sm text-neutral-600 mt-4 leading-relaxed">
            Approfondimenti curati dai nostri specialisti su cyber security, telecomunicazioni, gestione della rete e innovazione digitale.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-[28px] overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-neutral-900 shadow-sm">
                    {art.category}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {art.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {art.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-syne text-neutral-900 leading-snug group-hover:text-red-600 transition-colors mb-3">
                    {art.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-semibold text-neutral-900 group-hover:text-red-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>Richiedi approfondimento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
