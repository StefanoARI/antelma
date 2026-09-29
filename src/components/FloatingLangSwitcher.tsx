import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, Globe, Check } from "lucide-react";
import { Language, LANGUAGES } from "../i18n/translations";
import { applyGoogleTranslateLanguage } from "../i18n/googleTranslate";

interface FloatingLangSwitcherProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const FloatingLangSwitcher: React.FC<FloatingLangSwitcherProps> = ({
  currentLang,
  onSelectLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  const handleSelectLanguage = (langCode: Language) => {
    onSelectLang(langCode);
    applyGoogleTranslateLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 left-6 z-40">
      {/* Dropup Menu */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-3 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1 flex items-center justify-between">
            <span>Seleziona Lingua</span>
            <span className="text-[9px] font-normal text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Auto Translate</span>
          </div>
          <div className="space-y-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                  currentLang === lang.code
                    ? "bg-[#0b1f3f] text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <span>{lang.label}</span>
                </div>
                {currentLang === lang.code && (
                  <Check className="w-3.5 h-3.5 text-red-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Trigger Button in Bottom Left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Cambia lingua del sito"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-slate-200/90 backdrop-blur-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer group"
      >
        <span className="text-xl leading-none">{currentOption.flag}</span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#0b1f3f]">
          {currentOption.code}
        </span>
        <ChevronUp
          className={`w-3.5 h-3.5 text-slate-400 group-hover:text-[#0b1f3f] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};
