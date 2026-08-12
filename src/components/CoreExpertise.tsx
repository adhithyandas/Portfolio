import React from "react";
import { SERVICES_DATA } from "../data/portfolioData";

export const CoreExpertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Title */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
            Core Expertise
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-4">
            Engineering Expertise
          </h2>
        </div>

        {/* 6 Cards 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const numberStr = String(index + 1).padStart(2, "0");
            return (
              <div
                key={service.id}
                className="bg-[#111827] border border-[#1E293B] rounded-xl p-7 min-h-50 hover:border-[#38BDF8]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Number Indicator */}
                  <div className="text-2xl font-mono font-bold text-[#38BDF8]/40 group-hover:text-[#38BDF8] transition-colors mb-4">
                    {numberStr}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2.5 group-hover:text-[#38BDF8] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
