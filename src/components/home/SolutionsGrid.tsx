"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "../layout/SectionHeader";
import { SOLUTIONS_DATA } from "@/data/solutionsData";
import { FadeInSection, StaggerContainer, StaggerItem } from "../ui/AnimateIn";
import { 
  Network, 
  ShieldCheck, 
  PhoneCall, 
  Server, 
  Cable, 
  Headphones, 
  Laptop, 
  ArrowRight, 
  Check,
  Sparkles
} from "lucide-react";

export const SolutionsGrid: React.FC = () => {
  const iconComponents: Record<string, React.ElementType> = {
    Network: Network,
    ShieldCheck: ShieldCheck,
    PhoneCall: PhoneCall,
    Server: Server,
    Cable: Cable,
    Headphones: Headphones,
    Laptop: Laptop,
  };

  return (
    <section id="solutions" className="py-24 section-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="Core Capabilities & Solutions"
            title="Engineering the Infrastructure Behind Your Business"
            subtitle="Comprehensive system integration covering every layer of the enterprise technology stack—designed for seamless performance, maximum cybersecurity, and zero operational disruption."
            theme="light"
            align="center"
          />
        </FadeInSection>

        {/* 7 Solutions Grid */}
        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS_DATA.map((sol, index) => {
            const Icon = iconComponents[sol.icon] || Network;
            const isLarge = index === 0;

            return (
              <StaggerItem key={sol.id}>
                <div
                  className={`group relative p-7 sm:p-8 card-light flex flex-col justify-between h-full ${
                    isLarge ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Top Badge & Code */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-mono font-bold text-truston-green-dark px-2.5 py-1 bg-truston-green/10 border border-truston-green/20 rounded-md">
                        {sol.number} {"//"} {sol.code}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-truston-green group-hover:text-[#050814] flex items-center justify-center text-truston-green-dark transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-truston-blue transition-colors">
                      {sol.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sol.shortDesc}
                    </p>

                    {/* Capability Highlights */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                        Included Capabilities
                      </span>
                      <ul className="space-y-2">
                        {sol.features.slice(0, 4).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-truston-green flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/solutions#${sol.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-truston-green-dark hover:text-truston-blue transition-colors"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-[10px] font-mono text-slate-400">
                      Enterprise Grade
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl section-ink border border-white/10 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="callout-dark inline-block mb-2">
              <span
                className="block font-display font-extrabold text-5xl leading-none text-truston-green opacity-20 mb-0.5 -mt-1 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <h4 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2 pl-2">
                <Sparkles className="w-5 h-5 text-truston-green-light" />
                Require a Custom Multi-Service Architecture?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 pl-2">
                Our certified engineers provide comprehensive consultation tailored to your facility and branch network.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="relative z-10 btn-primary whitespace-nowrap"
          >
            Request Custom Proposal
          </Link>
        </div>

      </div>
    </section>
  );
};
