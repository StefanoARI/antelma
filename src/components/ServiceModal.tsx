import React, { useState } from "react";
import { X, Check, ArrowRight, ShieldCheck, Send } from "lucide-react";
import { ServiceItem, ANTELMA_INFO } from "../data/antelmaData";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onContactService: (serviceName: string) => void;
  onNavigateLanding?: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onContactService,
  onNavigateLanding,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-[32px] p-6 sm:p-10 shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-md">
              {service.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {service.metrics}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-[#111111] tracking-tight">
            {service.title}
          </h3>

          <p className="text-sm text-neutral-600 leading-relaxed font-medium">
            {service.shortDesc}
          </p>

          <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {service.fullDesc}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold font-syne uppercase tracking-wider text-neutral-900">
              Specifiche e Vantaggi Inclusi:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <div className="w-4 h-4 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {onNavigateLanding && (
                <button
                  onClick={() => {
                    onClose();
                    onNavigateLanding(service.id);
                  }}
                  className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 hover:bg-blue-100 text-[#0b1f3f] border border-blue-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Apri Landing Page (SEO/GEO)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                </button>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onContactService(service.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Richiedi Offerta Dedicata</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
