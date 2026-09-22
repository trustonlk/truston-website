import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SERVICE_PROCESS_STEPS } from "@/data/processData";
import {
  Compass,
  Layers,
  Cpu,
  FileCheck,
  LifeBuoy,
  CheckCircle2,
  ArrowRight,
  Clock,
  Wrench,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Methodology | Lifecycle System Integration",
  description: "Learn about Truston's 5-stage service delivery methodology, Annual Managed IT Services (AMC), preventive hardware maintenance, and enterprise device rental fleet.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Layers,
    Cpu,
    FileCheck,
    LifeBuoy,
  };

  return (
    <div className="pt-[4.5rem]">
      <PageHero
        badge="Service Delivery & Methodology"
        title="Engineered Lifecycle Delivery"
        subtitle="From initial site survey to ongoing 24 x 7 NOC escalation, our delivery methodology adheres to strict international ISO benchmarks."
      />

      <section className="py-20 section-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-truston-green-dark font-semibold">
              The 5-stage framework
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-slate-900">
              From Requirement to Commissioning
            </h2>
          </div>

          <div className="space-y-8">
            {SERVICE_PROCESS_STEPS.map((step) => {
              const Icon = iconMap[step.icon] || Compass;

              return (
                <div
                  key={step.step}
                  className="p-8 sm:p-10 card-light grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-truston-green/10 border border-truston-green/20 text-truston-green-dark flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-truston-green-dark uppercase">
                          Stage {step.step}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-slate-900">
                          {step.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-truston-blue font-mono">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-xs font-mono uppercase tracking-wider text-truston-green-dark font-semibold block mb-3">
                        Stage deliverables & verification
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-truston-green flex-shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 section-midnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-truston-green-light font-bold">
                Operational assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                Annual Managed Services Contracts (AMC)
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Protect your hardware capital and ensure continuous business productivity. Truston’s Annual Maintenance Contracts provide comprehensive preventive care, priority hardware repairs, and 24 x 7 emergency response for all your corporate IT infrastructure.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-truston-green-light flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Total IT Peripheral & PC Repairs</h4>
                    <p className="text-xs text-slate-400">Component-level repairs for laptops, desktops, motherboards, displays, and printers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-truston-green-light flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Enterprise Warranty Management</h4>
                    <p className="text-xs text-slate-400">We manage OEM RMA tickets, component replacements, and manufacturer warranties on your behalf.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-truston-green-light flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Scheduled Preventive Maintenance</h4>
                    <p className="text-xs text-slate-400">Periodic on-site deep-cleaning, thermal inspection, and firmware health updates.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/contact" className="btn-primary">
                  <span>Request AMC Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 card-dark">
              <span className="text-xs font-mono uppercase tracking-widest text-truston-green-light font-semibold">
                Equipment rental fleet
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                Flexible Enterprise Device Rentals
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Scale your team or equip temporary exam centers, conferences, and projects without heavy capital expenditures.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  ["Enterprise Laptops & Workstations", "Pre-Configured"],
                  ["Enterprise Network Switches & Routers", "Managed Layer 2/3"],
                  ["SIP / IP Telephones", "PoE Ready"],
                ].map(([label, tag]) => (
                  <div key={label} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{label}</span>
                    <span className="text-[11px] font-mono text-truston-green-light">{tag}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Short-term & long-term agreements</span>
                <Link href="/contact" className="text-truston-green-light hover:underline font-semibold">
                  Inquire fleet leases →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
