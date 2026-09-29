import React from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { PRICING_PLANS, PricingPlan } from "../data/antelmaData";
import { Language, TRANSLATIONS } from "../i18n/translations";

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  currentLang?: Language;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  onSelectPlan,
  currentLang = "it"
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
              / {t.plans_kicker} /
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b1f3f] font-sans">
            {t.plans_title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t.plans_desc}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-[#0b1f3f] text-white shadow-2xl scale-[1.02] border-2 border-red-600"
                  : "bg-white text-slate-900 border border-slate-200/80 hover:shadow-xl"
              }`}
            >
              {/* Popular badge in Red */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md ${
                    plan.isPopular ? "bg-red-600 text-white" : "bg-[#1e3a8a] text-white"
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold font-sans mb-2">
                  {plan.name}
                </h3>
                <p className={`text-xs mb-6 ${plan.isPopular ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-200/20">
                  <span className="text-3xl font-extrabold tracking-tight font-sans">
                    {plan.price}
                  </span>
                  <span className={`text-xs block mt-1 ${plan.isPopular ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${
                    plan.isPopular ? "text-blue-200" : "text-slate-500"
                  }`}>
                    Caratteristiche &amp; SLA:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.isPopular ? "bg-red-600/30 text-red-400" : "bg-blue-50 text-[#1e3a8a]"
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className={plan.isPopular ? "text-slate-200" : "text-slate-700"}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-[#0b1f3f] hover:bg-[#1a386b] text-white"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
