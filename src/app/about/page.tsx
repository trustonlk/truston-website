import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PageHero } from "@/components/layout/PageHero";
import { CORE_VALUES_DATA } from "@/data/valuesData";
import { TIER1_TECH_PARTNERS } from "@/data/clientsData";
import { VisionMission } from "@/components/home/VisionMission";
import {
  Award,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Truston | Enterprise IT System Integrator",
  description: "Learn about Truston Digital Solutions, our corporate vision, 5 mission pillars, core values, and certified engineering methodology across Sri Lanka.",
};

export default function AboutPage() {
  return (
    <div className="pt-[4.5rem]">
      <PageHero
        badge="About Truston Digital Solutions"
        title="Architecting Resilient IT Infrastructure"
        subtitle="A premier system integrator delivering certified network engineering, cybersecurity, smart data centers, and 24 x 7 managed services across Sri Lanka."
      />

      <section className="py-20 section-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-70 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-truston-green-dark">
                Company Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 leading-tight">
                Enterprise technology partners built for zero-downtime operations.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Truston Digital Solutions operates as a specialized enterprise IT system integrator in Sri Lanka. We design, deploy, and maintain mission-critical communications networks, structured optical cabling backbones, secure data centers, and managed infrastructure.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                By maintaining uncompromising engineering standards, rigorous Fluke testing protocols, and manufacturer-authorized hardware partnerships, we ensure your organization&apos;s digital foundation remains fast, secure, and resilient.
              </p>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="text-lg font-display font-bold text-slate-900">
                Core Engineering Capabilities
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Award,
                    title: "Fluke-tested structured cabling",
                    body: "Cat6/6A copper and single-mode/multi-mode optical fiber deployments with 100% channel pass guarantees.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Multi-layer cybersecurity architecture",
                    body: "Zero-trust network segmentation, next-gen intrusion prevention, and gateway security.",
                  },
                  {
                    icon: Clock,
                    title: "24 x 7 operations & AMC",
                    body: "Rapid triage, component replacement SLA, and quarterly preventive health audits.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-truston-green/10 text-truston-green-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgraded Creative Vision & Mission Component */}
      <VisionMission />

      <section className="py-20 section-midnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Foundational DNA"
            title="Our 6 Core Values"
            subtitle="The non-negotiable principles behind every deployment."
            theme="dark"
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES_DATA.map((val) => (
              <div key={val.name} className="p-6 card-dark">
                <span className="text-xs font-mono font-semibold text-truston-green-light uppercase">
                  {val.tagline}
                </span>
                <h3 className="text-lg font-display font-bold text-white mt-1">
                  {val.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Technology Alliances */}
      <section className="py-20 section-ink text-white border-t border-white/10 noise relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Global Tier-1 Ecosystem"
            title="Authorized Technology Standards & OEM Partners"
            subtitle="Truston designs and installs IT infrastructure using certified components from the world's most trusted manufacturers."
            theme="dark"
            align="center"
          />

          {/* Infinite Horizontal Marquee Track (Right-to-Left, Seamless Loop, Original Colors) */}
          <div className="mt-12 relative overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-900 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-900 to-transparent z-10" />

            <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-5 px-4">
              {[...TIER1_TECH_PARTNERS, ...TIER1_TECH_PARTNERS].map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex-shrink-0 flex flex-col items-center justify-between h-28 w-44 p-3 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:border-truston-green/60 hover:bg-white/[0.09] transition-all duration-300 group shadow-lg"
                >
                  <div className="w-full h-15 rounded-xl bg-white flex items-center justify-center p-2.5 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={125}
                      height={40}
                      className="max-h-10 max-w-[125px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="w-full text-center mt-1.5">
                    <p className="text-[11px] font-display font-bold text-slate-200 group-hover:text-white truncate">
                      {partner.name}
                    </p>
                    <p className="text-[9px] font-mono text-slate-400 truncate">
                      {partner.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
