import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import { Building2, GraduationCap, Hotel, Briefcase, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Enterprise IT Solutions Sri Lanka",
  description: "Discover tailored IT infrastructure solutions for Corporate Enterprises, Educational Institutes, Hotels & Villas, and Commercial Business Organizations across Sri Lanka.",
};

export default function IndustriesPage() {
  const iconMap: Record<string, React.ElementType> = {
    Building2,
    GraduationCap,
    Hotel,
    Briefcase,
  };

  return (
    <div className="pt-[4.5rem]">
      <PageHero
        badge="Sector Blueprints"
        title="Tailored for Your Operational Reality"
        subtitle="We understand the exact architectural differences between a high-density university campus, a luxury villa resort, and a corporate headquarters."
      />

      <section className="py-20 section-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;

            return (
              <div key={ind.id} id={ind.id} className="scroll-mt-28 p-8 sm:p-12 card-light">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-truston-green/10 text-truston-green-dark flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-truston-green-dark uppercase">
                        Enterprise sector
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                        {ind.name}
                      </h2>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary !text-xs">
                    Consult for this sector
                  </Link>
                </div>

                <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {ind.description}
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                  <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-100">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-rose-600 font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Sector-specific challenges</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.keyChallenges.map((ch, cIdx) => (
                        <li key={cIdx} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-truston-green/5 border border-truston-green/20">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-truston-green-dark font-semibold mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Engineered Truston solutions</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.trustonSolutions.map((sol, sIdx) => (
                        <li key={sIdx} className="text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-truston-green flex-shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
