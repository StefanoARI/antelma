import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Activity } from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "../data/antelmaData";
import { Language, TRANSLATIONS } from "../i18n/translations";
import { IMAGES } from "../assets/images";

interface CaseStudyDarkProps {
  onExploreMore: (study: CaseStudy) => void;
  currentLang?: Language;
}

export const CaseStudyDark: React.FC<CaseStudyDarkProps> = ({ 
  onExploreMore,
  currentLang = "it"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;

  // Enhance case studies with authentic IT photos
  const enhancedStudies = [
    {
      ...CASE_STUDIES[0],
      image: IMAGES.itSocCyberAnalyst,
    },
    {
      ...CASE_STUDIES[1],
      image: IMAGES.caseStudyDatacenter,
    },
  ];

  const currentStudy = enhancedStudies[currentIndex] || enhancedStudies[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % enhancedStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + enhancedStudies.length) % enhancedStudies.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#071326] text-white overflow-hidden border-t border-b border-blue-950">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-medium text-red-400 tracking-wider">
                / {t.case_kicker} /
              </span>
              <span className="inline-block w-8 h-[1px] bg-blue-800" />
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                Success Stories Imprese
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              {t.case_title}
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              aria-label="Precedente"
              className="w-11 h-11 rounded-full border border-blue-800/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400 tabular-nums">
              0{currentIndex + 1} / 0{enhancedStudies.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Successivo"
              className="w-11 h-11 rounded-full border border-blue-800/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-[#0b1c36] rounded-[32px] border border-blue-900/60 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Real IT Photo with Date Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group border border-blue-800/40">
                <img
                  src={currentStudy.image}
                  alt={currentStudy.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Date Badge as seen in video (top-left) */}
                <div className="absolute top-5 left-5 bg-[#0b1f3f]/90 backdrop-blur-md border border-blue-700/60 rounded-xl px-4 py-2.5 shadow-xl">
                  <div className="text-[10px] uppercase font-mono text-blue-200">
                    {currentStudy.date.split(" ")[0]}
                  </div>
                  <div className="text-2xl font-bold text-red-500 leading-none mt-0.5">
                    {currentStudy.date.split(" ")[1] || "26"}
                  </div>
                </div>

                {/* Tag on bottom */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                  {currentStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#0b1f3f]/80 text-blue-100 border border-blue-700/50 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Challenge, Solution, Results */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
              
              <div>
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-2">
                  {currentStudy.clientCategory}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight font-sans">
                  {currentStudy.title}
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#08152a] border border-blue-900/50">
                  <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block mb-1">
                    {t.case_challenge}:
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {currentStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#08152a] border border-blue-900/50">
                  <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block mb-1">
                    {t.case_solution}:
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {currentStudy.solution}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/60">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {t.case_results}:
                    </span>
                  </div>
                  <p className="text-red-100 leading-relaxed font-medium">
                    {currentStudy.results}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onExploreMore(currentStudy)}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-[#0b1f3f] hover:bg-slate-100 transition-all shadow-md active:scale-95 cursor-pointer font-sans"
                >
                  <span>{t.case_more}</span>
                  <span className="w-6 h-6 rounded-full bg-[#0b1f3f] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
