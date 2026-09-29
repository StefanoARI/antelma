import React, { useState } from "react";
import { Search, X, ArrowRight, Wifi, ShieldCheck, PhoneCall, Headphones, Layers, HardDrive } from "lucide-react";
import { SERVICES, ServiceItem } from "../data/antelmaData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
  onNavigate: (page: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onNavigate,
}) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filtered = query.trim()
    ? SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.category.toLowerCase().includes(query.toLowerCase()) ||
          s.fullDesc.toLowerCase().includes(query.toLowerCase()) ||
          s.features.some((f) => f.toLowerCase().includes(query.toLowerCase()))
      )
    : SERVICES;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-2xl border border-neutral-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-neutral-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Cerca servizi (es. FiberEVOx, NIS2, Smart Office, Assistenza)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base font-medium text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-none"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Navigation Tags */}
        <div className="px-6 py-3 bg-neutral-50 border-b border-neutral-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] font-mono text-neutral-400 uppercase">Suggeriti:</span>
          {["FiberEVOx", "Cyber Security", "NIS2", "Smart Office", "Disaster Recovery"].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100 transition-colors text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-2">
          {filtered.length > 0 ? (
            filtered.map((s) => (
              <div
                key={s.id}
                onClick={() => {
                  onSelectService(s);
                  onClose();
                }}
                className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-neutral-100 transition-colors cursor-pointer border border-transparent hover:border-neutral-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 group-hover:bg-red-50 text-neutral-700 group-hover:text-red-600 flex items-center justify-center shrink-0">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-syne text-neutral-900 group-hover:text-red-600 transition-colors">
                      {s.title}
                    </div>
                    <div className="text-[11px] text-neutral-500 line-clamp-1">
                      {s.shortDesc}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
                    {s.badge}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-xs text-neutral-500">
              Nessun risultato trovato per "{query}". Prova con un termine diverso o esplora le sezioni principali.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                onNavigate("about");
                onClose();
              }}
              className="hover:text-neutral-900"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => {
                onNavigate("services");
                onClose();
              }}
              className="hover:text-neutral-900"
            >
              Tutti i Servizi
            </button>
            <button
              onClick={() => {
                onNavigate("contacts");
                onClose();
              }}
              className="hover:text-neutral-900"
            >
              Contatti
            </button>
          </div>
          <span>Esc per chiudere</span>
        </div>
      </div>
    </div>
  );
};
