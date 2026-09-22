"use client";

import React from "react";
import { SectionHeader } from "../layout/SectionHeader";
import { WHY_CHOOSE_TRUSTON_DATA } from "@/data/processData";
import { FadeInSection, StaggerContainer, StaggerItem } from "../ui/AnimateIn";
import { 
  Award, 
  Clock, 
  Infinity, 
  ShieldCheck, 
  TrendingUp, 
  Sliders, 
  DollarSign, 
  Check,
  ShieldAlert
} from "lucide-react";

export const WhyTruston: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Award: Award,
    Clock: Clock,
    Infinity: Infinity,
    ShieldCheck: ShieldCheck,
    TrendingUp: TrendingUp,
    Sliders: Sliders,
    DollarSign: DollarSign,
  };

  return (
    <section id="why-truston" className="py-24 section-ink text-white relative overflow-hidden noise">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="ambient-orb w-[500px] h-[500px] bg-indigo-600/10 top-[20%] left-[10%]" style={{ animationDelay: "2s" }} />
      <div className="ambient-orb w-[400px] h-[350px] bg-truston-green/[0.06] bottom-[10%] right-[5%]" style={{ animationDelay: "5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="Engineering Authority & Trust"
            title="Why Leading Organizations Choose Truston"
            subtitle="Built on engineering rigor, transparent governance, and round-the-clock dedication. We deliver enterprise reliability without bureaucratic stagnation."
            theme="dark"
            align="center"
          />

          {/* Pullquote highlight */}
          <div className="mt-10 max-w-2xl mx-auto callout-dark">
            <span
              className="block font-display font-extrabold text-6xl leading-none text-truston-green opacity-20 mb-1 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="text-lg sm:text-xl font-display font-semibold text-white leading-snug pl-2">
              We don&apos;t just install cables — we architect the backbone your business runs on.
            </p>
            <footer className="mt-4 pl-2 flex items-center gap-2 text-slate-400">
              <span className="w-5 h-px bg-truston-green" />
              <span className="text-[11px] font-mono tracking-widest text-truston-green font-bold uppercase">
                Truston Engineering Promise
              </span>
            </footer>
          </div>
        </FadeInSection>

        {/* 7 Verified Proof Cards */}

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_TRUSTON_DATA.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            const isHighlight = idx === 1;

            return (
              <StaggerItem key={item.number}>
                <div
                  className={`p-7 rounded-3xl transition-all duration-300 border flex flex-col justify-between h-full backdrop-blur-md ${
                    isHighlight
                      ? "bg-slate-900 text-white border-emerald-500/50 shadow-lg"
                      : "card-dark text-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${
                          isHighlight
                            ? "bg-truston-green/10 text-truston-green border-truston-green/30"
                            : "bg-white/5 text-slate-300 border-white/10"
                        }`}
                      >
                        PILLAR {item.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          isHighlight
                            ? "bg-truston-green text-[#0a0f1e] font-bold shadow-[0_0_10px_#00e65c]"
                            : "bg-white/5 text-slate-400 border border-white/10"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isHighlight
                            ? "bg-truston-green text-[#0a0f1e]"
                            : "bg-white/5 text-truston-green border border-white/10"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs leading-relaxed mt-3 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-truston-green">
                    <Check className="w-3.5 h-3.5" />
                    <span>Verified Operational Standard</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}

          {/* 8th Card: The Single Accountability Partner Summary */}
          <StaggerItem>
            <div className="p-7 rounded-3xl bg-gradient-to-br from-truston-green to-truston-green-light text-[#050814] shadow-glow-green-lg flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#0a0f1e]/20 text-[#0a0f1e]">
                  SINGLE ACCOUNTABILITY
                </span>
                <h3 className="text-xl font-display font-extrabold mt-4 leading-snug">
                  One Accountability Partner. Zero Finger-Pointing.
                </h3>
                <p className="text-xs text-[#0a0f1e]/90 mt-3 leading-relaxed font-medium">
                  When you deploy with Truston, you eliminate the friction of coordinating between cabling contractors, firewall vendors, and support technicians.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0a0f1e]/20">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                  Full Infrastructure Lifecycle Managed
                </span>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>

      </div>
    </section>
  );
};
