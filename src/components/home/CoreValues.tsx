"use client";

import React from "react";
import { SectionHeader } from "../layout/SectionHeader";
import { CORE_VALUES_DATA } from "@/data/valuesData";
import { FadeInSection, StaggerContainer, StaggerItem } from "../ui/AnimateIn";
import { 
  Award, 
  Shield, 
  Lightbulb, 
  Users, 
  CheckCircle2, 
  Handshake 
} from "lucide-react";

export const CoreValues: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Award: Award,
    Shield: Shield,
    Lightbulb: Lightbulb,
    Users: Users,
    CheckCircle2: CheckCircle2,
    Handshake: Handshake,
  };

  return (
    <section id="values" className="py-24 section-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      {/* Animated ambient orbs */}
      <div className="ambient-orb w-[600px] h-[500px] bg-indigo-600/10 top-[30%] left-[15%]" style={{ animationDelay: "0s" }} />
      <div className="ambient-orb w-[400px] h-[400px] bg-truston-green/[0.06] top-[10%] right-[10%]" style={{ animationDelay: "4s" }} />
      <div className="ambient-orb w-[350px] h-[300px] bg-indigo-500/[0.07] bottom-[10%] right-[30%]" style={{ animationDelay: "7s" }} />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="06 // Organizational DNA"
            title="What We Build Every Solution Around"
            subtitle="Our core values guide every technical proposal, cable installation, firewall configuration, and client interaction."
            theme="dark"
            align="center"
          />
        </FadeInSection>

        {/* 6 Values Grid */}
        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CORE_VALUES_DATA.map((val) => {
            const Icon = iconMap[val.icon] || Award;

            return (
              <StaggerItem key={val.name}>
                <div
                  className="group p-8 card-dark flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-truston-green/10 border border-truston-green/20 flex items-center justify-center text-truston-green mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-truston-green">
                      {val.tagline}
                    </span>

                    <h3 className="text-xl font-display font-bold text-white mt-1 group-hover:text-truston-green transition-colors">
                      {val.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>FOUNDATIONAL VALUE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-truston-green shadow-[0_0_8px_#00e65c]" />
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
