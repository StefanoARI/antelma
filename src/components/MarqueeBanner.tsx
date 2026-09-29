import React from "react";
import { Language, TRANSLATIONS } from "../i18n/translations";

interface MarqueeBannerProps {
  currentLang?: Language;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({ currentLang = "it" }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;

  const marqueeItems = [
    t.marquee_text_1,
    t.marquee_text_2,
    t.marquee_text_3,
    t.marquee_text_4,
    t.marquee_text_5,
  ];

  return (
    <div className="relative py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white overflow-hidden shadow-inner select-none border-y border-red-800">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-5">
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight uppercase font-sans">
              {item}
            </span>
            <span className="text-red-300 font-mono text-xl">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
