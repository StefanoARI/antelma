import React from "react";
import { PARTNERS } from "../data/antelmaData";

export const PartnersRow: React.FC = () => {
  return (
    <section className="py-16 bg-[#fafafa] border-t border-b border-neutral-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-mono font-medium text-neutral-500 tracking-wider">
            / partners /
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-syne text-neutral-900 tracking-tight">
            Trusted collaborators &amp; Certified Technology
          </h3>
        </div>

        {/* Clean monochrome partner grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="h-16 rounded-2xl bg-white border border-neutral-200/70 flex items-center justify-center p-3 text-center transition-all duration-200 hover:border-neutral-400 hover:shadow-xs group cursor-default"
            >
              <span className="font-extrabold font-syne text-xs sm:text-sm tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-colors uppercase">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
