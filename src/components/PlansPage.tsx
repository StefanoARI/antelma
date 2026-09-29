import React from "react";
import { ChevronRight, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { PRICING_PLANS, PricingPlan, ANTELMA_INFO } from "../data/antelmaData";

import { Language } from "../i18n/translations";

interface PlansPageProps {
  onNavigateHome: () => void;
  onSelectPlan: (plan: PricingPlan) => void;
  onOpenContact: () => void;
  currentLang?: Language;
}

export const PlansPage: React.FC<PlansPageProps> = ({
  onNavigateHome,
  onSelectPlan,
  onOpenContact,
  currentLang = "it",
}) => {
  return (
    <div className="pt-24 pb-20 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
          <button onClick={onNavigateHome} className="hover:text-neutral-900 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-neutral-900 font-semibold">Piani di Servizio &amp; Continuità</span>
        </div>

        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono text-red-600 uppercase tracking-widest block mb-2">
            / contratti &amp; sla /
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-syne text-[#111111] tracking-tight">
            Piani di Supporto &amp; Continuità Operativa
          </h1>
          <p className="text-sm text-neutral-600 mt-4 leading-relaxed">
            Personalizzabili per ogni esigenza aziendale: connettività garantita, protezione cyber, presidio sistemistico e reperibilità 24/7.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-[#111111] text-white shadow-2xl scale-[1.02] border border-neutral-700"
                  : "bg-white text-neutral-900 border border-neutral-200/80 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm ${
                    plan.isPopular ? "bg-red-600 text-white" : "bg-neutral-800 text-neutral-200"
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold font-syne mb-2">
                  {plan.name}
                </h3>
                <p className={`text-xs mb-6 ${plan.isPopular ? "text-neutral-400" : "text-neutral-600"}`}>
                  {plan.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-neutral-200/40">
                  <span className="text-3xl font-extrabold font-syne tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-xs block mt-1 ${plan.isPopular ? "text-neutral-400" : "text-neutral-500"}`}>
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${
                    plan.isPopular ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    Incluso nel Piano:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.isPopular ? "bg-red-500/20 text-red-400" : "bg-neutral-900 text-white"
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className={plan.isPopular ? "text-neutral-300" : "text-neutral-700"}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-[#111111] hover:bg-neutral-800 text-white"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SLA Guarantee Box */}
        <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-neutral-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-syne text-neutral-900">
                Garanzia Contrattuale di Business Continuity
              </h4>
              <p className="text-xs text-neutral-600 mt-1 max-w-xl">
                Ogni contratto Antelma include SLA formali registrati con penali contrattuali per garantire che la tua connettività e i tuoi server non subiscano mai blackout non presidiati.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900 text-white hover:bg-neutral-800 transition-all shrink-0"
          >
            Scarica Carta dei Servizi
          </button>
        </div>

      </div>
    </div>
  );
};
