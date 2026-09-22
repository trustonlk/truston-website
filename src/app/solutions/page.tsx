import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SOLUTIONS_DATA } from "@/data/solutionsData";
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
  Check,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Solutions | Network, Cybersecurity & Data Centers",
  description: "Explore Truston's complete enterprise technology capabilities: Network Architecture, Advanced Cybersecurity, ELV Systems, Smart Data Centers, Structured Cabling, Managed IT Services, and Device Rentals.",
};

export default function SolutionsPage() {
  const iconMap: Record<string, React.ElementType> = {
    Network,
    ShieldCheck,
    PhoneCall,
    Server,
    Cable,
    Headphones,
    Laptop,
  };

  return (
    <div className="pt-[4.5rem]">
      <PageHero
        badge="Enterprise Solutions Directory"
        title="Complete Technology Infrastructure"
        subtitle="From optical fiber backbones and zero-trust perimeter defense to server room containment and 24 x 7 managed care."
      >
        <div className="mt-8 flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
          {SOLUTIONS_DATA.map((sol) => (
            <a
              key={sol.id}
              href={`#${sol.id}`}
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-truston-green hover:text-[#050814] border border-white/10 text-xs font-medium text-slate-300 transition-colors"
            >
              {sol.title}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="py-20 section-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />
        <div className="relative space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {SOLUTIONS_DATA.map((sol) => {
            const Icon = iconMap[sol.icon] || Network;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className="scroll-mt-28 p-8 sm:p-12 card-light relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 border-b border-slate-100 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-truston-green/10 text-truston-green-dark flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-truston-green-dark uppercase tracking-wider">
                        Solution {sol.number} {"//"} {sol.code}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-1">
                        {sol.title}
                      </h2>
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(sol.title)}`}
                    className="btn-primary !text-xs sm:!text-sm"
                  >
                    Consult for {sol.title.split(" ")[0]}
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                        Overview & operational scope
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {sol.fullDesc}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-truston-green-dark font-semibold block mb-1">
                        Enterprise business impact
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {sol.businessValue}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                        Key capabilities included
                      </h4>
                      <ul className="space-y-2.5">
                        {sol.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-truston-green flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      Architectural specifications
                    </h3>

                    <div className="space-y-4">
                      {sol.technicalDetails.map((tech, tIdx) => (
                        <div key={tIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                          <h4 className="text-sm font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-truston-green-dark" />
                            <span>{tech.title}</span>
                          </h4>
                          <ul className="space-y-2">
                            {tech.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-600">
                                <Check className="w-3.5 h-3.5 text-truston-green flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-truston-blue/5 border border-truston-green/20 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>Compliance</span>
                      <span className="text-truston-green-dark font-bold">ISO / IEC best practices</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 section-ink border-t border-white/10 text-center noise">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Need an integrated multi-solution architecture?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            Our engineers can conduct an on-site infrastructure audit and design an integrated proposal for your facility.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              <span>Schedule an engineering consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
