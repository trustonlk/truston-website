"use client";

import React, { useState } from "react";
import { SectionHeader } from "../layout/SectionHeader";
import { SERVICE_PROCESS_STEPS } from "@/data/processData";
import { FadeInSection } from "../ui/AnimateIn";
import { 
  Compass, 
  Layers, 
  Cpu, 
  FileCheck, 
  LifeBuoy, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const iconMap: Record<string, React.ElementType> = {
    Compass: Compass,
    Layers: Layers,
    Cpu: Cpu,
    FileCheck: FileCheck,
    LifeBuoy: LifeBuoy,
  };

  return (
    <section id="process" className="py-24 section-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="07 // Delivery Governance"
            title="From Requirement to Reliable Infrastructure"
            subtitle="A structured 5-stage engineering lifecycle guaranteeing rigorous deployment, Fluke-certified testing, and 24 x 7 operational readiness."
            theme="light"
            align="center"
          />
        </FadeInSection>

        {/* Step Selector Pills */}
        <div className="mt-14 flex items-center justify-between max-w-4xl mx-auto relative px-2">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 -translate-y-1/2 z-0 rounded-full" />
          <div 
            className="absolute top-1/2 left-4 h-1 bg-gradient-to-r from-truston-blue to-truston-green -translate-y-1/2 z-0 transition-all duration-500 rounded-full"
            style={{
              width: activeStepIndex === 0 ? "0%" : `calc(${((activeStepIndex) / (SERVICE_PROCESS_STEPS.length - 1)) * 100}% - 8px)`
            }}
          />

          {SERVICE_PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isPast = idx < activeStepIndex;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "bg-truston-green text-[#050814] scale-110 shadow-glow-green ring-4 ring-white"
                    : isPast
                    ? "bg-truston-blue text-white ring-2 ring-white"
                    : "bg-white text-slate-400 border border-slate-200 hover:border-truston-green"
                }`}
                aria-label={`Select Step ${step.step}: ${step.name}`}
              >
                {step.step}
              </button>
            );
          })}
        </div>

        {/* Interactive Step Card Detail */}
        <div className="mt-12 max-w-4xl mx-auto">
          {(() => {
            const currentStep = SERVICE_PROCESS_STEPS[activeStepIndex];
            const Icon = iconMap[currentStep.icon] || Compass;

            return (
              <div className="p-8 sm:p-10 card-light relative overflow-hidden transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-truston-green/10 border border-truston-green/20 text-truston-green flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-truston-green uppercase tracking-wider">
                        STAGE {currentStep.step} {"//"} {currentStep.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-0.5">
                        {currentStep.name}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-mono text-xs">
                    Stage {activeStepIndex + 1} of 5
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                    Stage Deliverables & Verification
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStep.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-truston-green flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next / Prev buttons */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    ← Previous Stage
                  </button>

                  <button
                    type="button"
                    disabled={activeStepIndex === SERVICE_PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(SERVICE_PROCESS_STEPS.length - 1, prev + 1))}
                    className="btn-primary !text-xs disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
};
