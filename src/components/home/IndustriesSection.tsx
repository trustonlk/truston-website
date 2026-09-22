"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "../layout/SectionHeader";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import { FadeInSection, StaggerContainer, StaggerItem } from "../ui/AnimateIn";
import { Building2, GraduationCap, Hotel, Briefcase, ArrowRight, Check } from "lucide-react";

export const IndustriesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Building2: Building2,
    GraduationCap: GraduationCap,
    Hotel: Hotel,
    Briefcase: Briefcase,
  };

  return (
    <section id="industries" className="py-24 section-ink text-white relative overflow-hidden noise">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="Industries & Sectors"
            title="Infrastructure Engineered for Your Business Environment"
            subtitle="Every sector possesses unique traffic densities, regulatory demands, and uptime requirements. We tailor physical cabling, network security, and telephony for your operational reality."
            theme="dark"
            align="center"
          />
        </FadeInSection>

        {/* 4 Industries Grid */}
        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;

            return (
              <StaggerItem key={ind.id}>
                <div
                  className="group p-8 sm:p-10 card-dark flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-truston-green/10 border border-truston-green/20 flex items-center justify-center text-truston-green group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-truston-green px-3 py-1 bg-truston-green/10 border border-truston-green/20 rounded-full">
                        VERIFIED SECTOR
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-truston-green transition-colors">
                      {ind.name}
                    </h3>

                    <p className="text-xs font-semibold text-indigo-400 mt-1 font-mono">
                      {ind.tagline}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Solutions for this sector */}
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                        Tailored Infrastructure Solutions
                      </span>
                      <ul className="space-y-2">
                        {ind.trustonSolutions.map((sol, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-truston-green flex-shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/industries#${ind.id}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-truston-green hover:text-white transition-colors"
                    >
                      <span>View Sector Framework</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/contact"
                      className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      Consult for {ind.name.split(" ")[0]}
                    </Link>
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
