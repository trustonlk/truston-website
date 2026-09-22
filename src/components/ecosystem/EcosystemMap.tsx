"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SOLUTIONS_DATA, SolutionItem } from "@/data/solutionsData";
import { SectionHeader } from "../layout/SectionHeader";
import { FadeInSection } from "../ui/AnimateIn";
import { 
  Network, 
  ShieldCheck, 
  PhoneCall, 
  Server, 
  Cable, 
  Headphones, 
  Laptop, 
  ArrowRight, 
  CheckCircle2, 
  Cpu,
  Layers,
  Sparkles,
  ShieldAlert
} from "lucide-react";

export const EcosystemMap: React.FC = () => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>("network-solutions");

  const activeSolution: SolutionItem = 
    SOLUTIONS_DATA.find((s) => s.id === activeSolutionId) || SOLUTIONS_DATA[0];

  const domains = [
    { id: "network-solutions", label: "Enterprise Routing & Switching", icon: Network, tier: "L2/L3 Architecture" },
    { id: "security-solutions", label: "Perimeter Cybersecurity & SASE", icon: ShieldCheck, tier: "Zero-Trust Firewalls" },
    { id: "elv-solutions", label: "ELV Systems & Surveillance", icon: PhoneCall, tier: "IP CCTV & Telephony" },
    { id: "smart-datacenter", label: "Smart Data Centers & Server Rooms", icon: Server, tier: "Precision Containment" },
    { id: "cabling-solutions", label: "Structured Cabling & Fiber Optics", icon: Cable, tier: "Fluke Certified Cat6A" },
    { id: "managed-services", label: "Managed IT Services & AMC", icon: Headphones, tier: "24 x 7 SLA Operations" },
    { id: "device-rental", label: "Enterprise IT Hardware Leases", icon: Laptop, tier: "Fleet Provisioning" },
  ];

  const ActiveIcon = domains.find((d) => d.id === activeSolutionId)?.icon || Network;

  return (
    <section id="ecosystem" className="py-24 bg-[#080d1e] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="Solution Architecture Navigator"
            title="Unified Enterprise Technology Domains"
            subtitle="Explore how Truston’s engineering disciplines interconnect to provide resilient, high-throughput digital foundations for corporate operations."
            theme="dark"
            align="center"
          />
        </FadeInSection>

        {/* High-End Enterprise Navigator Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Domain Selector Menu */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="pb-3 mb-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>SELECT TECHNOLOGY DOMAIN</span>
              <span>7 CORE PILLARS</span>
            </div>

            {domains.map((dom, idx) => {
              const Icon = dom.icon;
              const isActive = dom.id === activeSolutionId;

              return (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => setActiveSolutionId(dom.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between group border ${
                    isActive
                      ? "bg-slate-900 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-emerald-500 text-[#050814]"
                          : "bg-slate-800 text-slate-400 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {dom.label}
                      </h4>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {dom.tier}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-emerald-400 translate-x-1" : "text-slate-600 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Specifications Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Header Telemetry */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                      SPECIFICATION // {activeSolution.code}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                      {activeSolution.title}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
                  Standard: ISO / TIA-568
                </span>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeSolution.fullDesc}
                </p>
              </div>

              {/* Key Deliverables Grid */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Engineered Capabilities & Hardware Deliverables</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSolution.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Value Callout */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1 font-semibold">
                  Business Value Guarantee
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {activeSolution.businessValue}
                </p>
              </div>

              {/* Footer CTAs */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={`/solutions#${activeSolution.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-white transition-colors"
                >
                  <span>Read Full Technical Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/contact?service=${encodeURIComponent(activeSolution.title)}`}
                  className="btn-primary !py-2 !px-5 !text-xs"
                >
                  Request Architecture Quote
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
