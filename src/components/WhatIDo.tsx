import React from "react";
import { Code2, Server, Zap, Cloud } from "lucide-react";
import { SERVICES_DATA } from "../data/portfolioData";

export const WhatIDo: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code2 className="w-8 h-8 text-[#38BDF8]" />;
      case "Server":
        return <Server className="w-8 h-8 text-[#38BDF8]" />;
      case "Zap":
        return <Zap className="w-8 h-8 text-[#38BDF8]" />;
      case "Cloud":
        return <Cloud className="w-8 h-8 text-[#38BDF8]" />;
      default:
        return <Code2 className="w-8 h-8 text-[#38BDF8]" />;
    }
  };

  return (
    <section
      id="what-i-do"
      className="py-20 bg-[#0B1120] relative border-t border-[#1E293B]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Title */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase px-3 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full">
            WHAT I DO
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-4">
            What I Do
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#38BDF8]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-lg bg-[#0B1120] border border-[#1E293B] flex items-center justify-center mb-6 group-hover:border-[#38BDF8]/50 group-hover:bg-[#38BDF8]/5 transition-all">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
