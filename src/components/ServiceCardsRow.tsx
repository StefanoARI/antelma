import React from "react";
import { ArrowUpRight, Wifi, ShieldAlert, PhoneCall, Headphones } from "lucide-react";
import { SERVICES, ServiceItem } from "../data/antelmaData";

interface ServiceCardsRowProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceCardsRow: React.FC<ServiceCardsRowProps> = ({ onSelectService }) => {
  const cards = SERVICES.slice(0, 4);

  const getIcon = (id: string) => {
    switch (id) {
      case "connettivita-gestita":
        return <Wifi className="w-5 h-5 text-red-600" />;
      case "cyber-security-nis2":
        return <ShieldAlert className="w-5 h-5 text-[#1e3a8a]" />;
      case "smart-office-voice":
        return <PhoneCall className="w-5 h-5 text-red-600" />;
      default:
        return <Headphones className="w-5 h-5 text-[#1e3a8a]" />;
    }
  };

  return (
    <section className="py-14 bg-white border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section kicker */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
              / infrastrutture &amp; servizi /
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400">·</span>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-600">
              Soluzioni integrate per la Business Continuity aziendale
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-[#f8fafc] hover:bg-white rounded-[24px] p-7 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(11,31,63,0.12)] border border-slate-200/80 hover:border-blue-900/30 flex flex-col justify-between cursor-pointer min-h-[240px]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 group-hover:border-red-500/30 group-hover:bg-red-50 flex items-center justify-center transition-colors shadow-xs">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0b1f3f] tracking-tight mb-2 group-hover:text-red-600 transition-colors font-sans">
                  {service.title.split("&")[0].trim()}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-200/60 mt-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 group-hover:text-[#0b1f3f] transition-colors">
                  Scheda Tecnica
                </span>
                <div className="w-7 h-7 rounded-full bg-slate-200 group-hover:bg-[#0b1f3f] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
