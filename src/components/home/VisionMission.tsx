"use client";

import React from "react";
import { VISION_STATEMENT, MISSION_PILLARS } from "@/data/valuesData";
import { FadeInSection } from "../ui/AnimateIn";
import { 
  Eye, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Handshake, 
  Award,
  ArrowUpRight,
  Globe2,
  Lock
} from "lucide-react";

export const VisionMission: React.FC = () => {
  // Mapping specific meaningful icons for each mission pillar
  const pillarIcons: Record<string, React.ElementType> = {
    "01": ShieldCheck,
    "02": Zap,
    "03": Clock,
    "04": Handshake,
    "05": Award,
  };

  return (
    <section id="vision-mission" className="py-24 section-paper-alt relative overflow-hidden scroll-mt-24">
      {/* Dynamic ambient backdrop */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      <div className="ambient-orb w-[650px] h-[500px] bg-[#0A1C9A]/[0.06] top-[15%] left-[20%]" style={{ animationDelay: "1s" }} />
      <div className="ambient-orb w-[450px] h-[400px] bg-[#00C853]/[0.05] bottom-[10%] right-[10%]" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tagline / Header */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A1C9A]/15 shadow-sm text-xs font-mono font-semibold text-[#07145f] mb-4">
              <span className="w-2 h-2 rounded-full bg-truston-green shadow-[0_0_8px_#00e65c] animate-pulse" />
              <span>ORGANIZATIONAL PURPOSE & STRATEGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              Architecting the Future of Enterprise IT in Sri Lanka
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Guided by a clear long-term horizon and concrete execution principles across every deployment.
            </p>
          </div>
        </FadeInSection>

        {/* Creative Split Stage: Vision (Left) & Mission (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ===================== OUR VISION CARD (5 Cols) ===================== */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-20px_rgba(7,20,95,0.12)] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#0A1C9A]/30 transition-all duration-300">
            {/* Top decorative gradient glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#07145f] via-[#0A1C9A] to-truston-green" />
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#0A1C9A]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0A1C9A]/10 transition-colors" />

            <div>
              {/* Header: Icon in front of "Our Vision" in prominent Dark Blue */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#07145f]/10 via-[#0A1C9A]/15 to-emerald-500/15 border border-[#0A1C9A]/20 flex items-center justify-center text-[#07145f] shadow-[0_8px_20px_-6px_rgba(7,20,95,0.25)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-[#07145f]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-truston-green-dark font-bold block mb-0.5">
                    Strategic Horizon
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-[#07145f] tracking-tight">
                    Our Vision
                  </h3>
                </div>
              </div>

              {/* Inspiring Vision Statement */}
              <div className="mt-8 relative">
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-100 relative shadow-sm">
                  <span className="text-4xl font-serif text-[#0A1C9A]/20 absolute top-3 left-4 select-none pointer-events-none">
                    &ldquo;
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 leading-snug relative z-10 pl-4 border-l-4 border-[#07145f]">
                    {VISION_STATEMENT.headline}
                  </h4>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed pl-4">
                    {VISION_STATEMENT.subline}
                  </p>
                </div>
              </div>

              {/* Creative Vision Key Pillars */}
              <div className="mt-8 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold block">
                  Vision Commitments
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-700 font-medium">
                    <Globe2 className="w-4 h-4 text-[#07145f] flex-shrink-0" />
                    <span>National Footprint</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-700 font-medium">
                    <Sparkles className="w-4 h-4 text-truston-green-dark flex-shrink-0" />
                    <span>Future-Ready Tech</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-700 font-medium sm:col-span-2">
                    <Lock className="w-4 h-4 text-[#07145f] flex-shrink-0" />
                    <span>Zero-Compromise Security & Reliability</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600 font-medium">
              <span>SRI LANKA ENTERPRISE IT</span>
              <div className="flex items-center gap-1 text-truston-green-dark font-semibold">
                <span>Verified Partner</span>
                <span className="w-2 h-2 rounded-full bg-truston-green inline-block" />
              </div>
            </div>
          </div>


          {/* ===================== OUR MISSION CARD (7 Cols) ===================== */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-20px_rgba(7,20,95,0.12)] p-8 sm:p-10 relative overflow-hidden group hover:border-[#0A1C9A]/30 transition-all duration-300">
            {/* Top decorative gradient glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-truston-green via-[#0A1C9A] to-[#07145f]" />
            <div className="absolute -top-24 -left-24 w-52 h-52 bg-truston-green/5 rounded-full blur-2xl pointer-events-none group-hover:bg-truston-green/10 transition-colors" />

            {/* Header: Icon in front of "Our Mission" in prominent Dark Blue */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#07145f]/10 via-[#0A1C9A]/15 to-truston-green/20 border border-[#0A1C9A]/20 flex items-center justify-center text-[#07145f] shadow-[0_8px_20px_-6px_rgba(7,20,95,0.25)] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-[#07145f]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-truston-green-dark font-bold block mb-0.5">
                    Action Roadmap
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-[#07145f] tracking-tight">
                    Our Mission
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#07145f]" />
                <span className="font-semibold text-[#07145f]">5 Delivery Pillars</span>
              </div>
            </div>

            {/* 5 Strategic Mission Pillars with interactive design */}
            <div className="mt-6 space-y-3.5">
              {MISSION_PILLARS.map((item) => {
                const PillarIcon = pillarIcons[item.number] || Target;

                return (
                  <div
                    key={item.number}
                    className="group/item p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-slate-50/90 to-white border border-slate-150 hover:border-[#0A1C9A]/30 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-3.5 sm:gap-4"
                  >
                    {/* Number Badge with subtle icon */}
                    <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                      <span className="w-8 h-8 rounded-xl bg-white border border-slate-200 group-hover/item:border-[#0A1C9A]/40 group-hover/item:bg-[#07145f] group-hover/item:text-white flex items-center justify-center text-xs font-mono font-bold text-[#07145f] shadow-sm transition-all duration-300">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="text-sm sm:text-base font-display font-bold text-slate-900 group-hover/item:text-[#07145f] transition-colors flex items-center gap-2">
                          <PillarIcon className="w-4 h-4 text-truston-green-dark group-hover/item:text-[#0A1C9A] transition-colors flex-shrink-0" />
                          <span>{item.title}</span>
                        </h5>
                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover/item:text-[#07145f] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all flex-shrink-0 opacity-0 group-hover/item:opacity-100" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

