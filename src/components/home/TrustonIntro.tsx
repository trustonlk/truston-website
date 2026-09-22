"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "../layout/SectionHeader";
import { FadeInSection, StaggerContainer, StaggerItem } from "../ui/AnimateIn";
import { 
  Compass, 
  Layers, 
  Cpu, 
  FileCheck, 
  LifeBuoy, 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  Hotel, 
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  Award
} from "lucide-react";

export const TrustonIntro: React.FC = () => {
  const lifecycle = [
    {
      step: "01",
      name: "Consultation",
      label: "Needs & Site Survey",
      icon: Compass,
      desc: "Comprehensive physical site audit, bandwidth needs, security posture, and topological analysis."
    },
    {
      step: "02",
      name: "Architecture",
      label: "System Design",
      icon: Layers,
      desc: "Tailored engineering schematics, redundancy routing, and itemized hardware Bill of Materials (BOM)."
    },
    {
      step: "03",
      name: "Deployment",
      label: "Certified Implementation",
      icon: Cpu,
      desc: "ISO-compliant structured cabling, server rack commissioning, SASE firewalls, and core switching."
    },
    {
      step: "04",
      name: "Verification",
      label: "Fluke Certification",
      icon: FileCheck,
      desc: "Fluke channel testing per drop, throughput stress testing, failover drills, and QA sign-off."
    },
    {
      step: "05",
      name: "Operations",
      label: "24 x 7 Managed Support",
      icon: LifeBuoy,
      desc: "Dedicated SLA response, quarterly preventive care, AMC maintenance, and component repair."
    },
  ];

  const sectors = [
    { name: "Corporate Organizations", icon: Building2, count: "Multi-Branch Connectivity & Firewalls" },
    { name: "Educational Institutions", icon: GraduationCap, count: "High-Density Campus Wi-Fi & Computer Labs" },
    { name: "Hotels & Luxury Resorts", icon: Hotel, count: "Guest Wi-Fi, IP Telephony & CCTV Systems" },
    { name: "Commercial & Industrial", icon: Briefcase, count: "Structured Cabling & Hardware Fleet Leases" },
  ];

  return (
    <section id="introduction" className="py-24 section-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="Lifecycle Engineering Methodology"
            title="Complete Infrastructure Lifecycle Management"
            subtitle="Truston Digital Solutions architects, deploys, and maintains enterprise technology foundations across Sri Lanka—freeing your team to focus on business growth while we safeguard your connectivity and security."
            theme="light"
            align="center"
          />
        </FadeInSection>

        {/* 5 Steps Process Grid */}
        <div className="mt-14">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-5 relative">
            {lifecycle.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.step}>
                  <div className="group relative p-6 card-light flex flex-col justify-between h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                            Stage {item.step}
                          </span>
                          <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-truston-blue transition-colors mt-0.5">
                            {item.name}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-emerald-500 group-hover:text-[#050814] flex items-center justify-center text-emerald-600 transition-all duration-300 flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <p className="text-xs font-semibold text-indigo-700 font-mono mb-2">
                        {item.label}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>DELIVERY PHASE</span>
                      <span className="text-emerald-600 font-semibold">ISO 11801</span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Physical Engineering Quality Showcase: Realistic Image + Engineering Specs */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl card-light grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/cabling-rack.jpg"
              alt="Truston Precision Structured Cabling & Cisco Network Rack Deployment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Physical Layer Engineering</p>
                <p className="text-[10px] font-mono text-slate-300">Cat6A 10Gbps & Single-Mode Fiber Backbones</p>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                FLUKE TESTED
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Rigorous Installation Governance</span>
            </div>


            {/* Callout-styled heading */}
            <div className="callout-light">
              <span
                className="block font-display font-extrabold text-6xl leading-none text-truston-green opacity-15 mb-1 -mt-1 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-tight pl-2">
                Physical Precision That Eliminates Downtime Before It Starts
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-2">
                Over 70% of enterprise network failures trace back to sub-standard physical cabling, poor cable bend radiuses, and uncertified terminations. Truston enforces strict international standard installations with comprehensive Fluke channel certification reports for every deployed node.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                "Fluke DSX-8000 Certified Reports",
                "Clean Velcro Structured Bundling",
                "Color-Coded Subnet Patch Panels",
                "Full Cable Pathway Wire Trays",
                "Fire-Retardant LSZH Jackets",
                "25-Year Manufacturer Cable Warranty",
              ].map((spec) => (
                <div key={spec} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-Sector Competence Bar */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#080d1e] text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                Multi-Sector Competence
              </span>
              <h4 className="text-2xl font-display font-bold text-white">
                One Partner Across Your Infrastructure Lifecycle
              </h4>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                We engineer scalable technology foundations for corporate enterprises, leading educational institutes, and luxury hospitality destinations across Sri Lanka.
              </p>
              <div className="mt-5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-white transition-colors"
                >
                  <span>Learn more about our company</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto">
              {sectors.map((sec) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.name}
                    className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all flex items-center gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{sec.name}</p>
                      <p className="text-[11px] text-slate-400">{sec.count}</p>
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
