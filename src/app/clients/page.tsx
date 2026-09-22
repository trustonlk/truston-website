import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { VERIFIED_CLIENTS_DATA, TIER1_TECH_PARTNERS } from "@/data/clientsData";
import { Shield, ArrowRight, CheckCircle2, ExternalLink, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Verified Clients & Technology Partners | Truston Digital Solutions",
  description: "Explore the verified client organizations across higher education, real estate, hospitality, and corporate industries powered by Truston Digital Solutions in Sri Lanka.",
};

export default function ClientsPage() {
  return (
    <div className="pt-[4.5rem]">
      <PageHero
        badge="Proven Track Record"
        title="Trusted by Organizations Across Sri Lanka"
        subtitle="Our client relationships are founded on rigorous engineering delivery, transparent SLAs, and responsive 24 x 7 infrastructure support."
      />

      {/* Verified Client Sectors */}
      <section className="py-20 section-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {VERIFIED_CLIENTS_DATA.map((sec) => (
            <div key={sec.id} className="p-8 sm:p-12 card-light">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-truston-green-dark uppercase tracking-wider">
                    Sector // {sec.sectorBadge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
                    {sec.sectorName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-xl">
                    {sec.description}
                  </p>
                </div>

                <span className="self-start sm:self-auto px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700 whitespace-nowrap">
                  {sec.organizations.length} Verified Deployments
                </span>
              </div>

              {/* 2-Column Grid of Clients with Logo Badges */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {sec.organizations.map((org, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-truston-green/50 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Logo header container */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="h-16 w-44 rounded-xl bg-white border border-slate-100 shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] p-2.5 flex items-center justify-center group-hover:border-slate-200 transition-colors">
                          <Image
                            src={org.logo}
                            alt={`${org.name} logo`}
                            width={150}
                            height={44}
                            className="max-h-11 max-w-[150px] w-auto object-contain filter group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <span className="px-2.5 py-1 rounded-md bg-truston-green/10 text-truston-green-dark text-[10px] font-mono font-bold uppercase tracking-wider">
                          Active AMC
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-truston-green" />
                        <span className="text-[11px] font-mono text-truston-green-dark uppercase tracking-wider font-semibold">
                          {org.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-truston-blue transition-colors">
                        {org.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                        {org.highlight}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-truston-green" />
                        <span>Verified Sri Lanka Client</span>
                      </span>

                      {org.website ? (
                        <a
                          href={org.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-400 hover:text-truston-blue transition-colors font-sans font-medium"
                        >
                          <span>Official Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span>Colombo, LK</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Global Tier-1 Tech Ecosystem */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-truston-green-light uppercase tracking-wider block">
                  Hardware & Technology Ecosystem
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                  Tier-1 International OEM Technology Partners
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                  We deploy only verified, original equipment manufactured by the world&apos;s leading network and cybersecurity brands.
                </p>
              </div>

              <span className="self-start md:self-auto px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                100% Genuine Hardware & Tested
              </span>
            </div>

            {/* Infinite Horizontal Marquee Track (Right-to-Left, Seamless Loop, Original Colors) */}
            <div className="mt-8 relative overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8">
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

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-truston-green flex-shrink-0" />
              <span>Truston respects enterprise confidentiality. All client references are based strictly on verified corporate profile disclosures.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-ink border-t border-white/10 text-center noise">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Join the Organizations Relying on Truston
          </h3>
          <p className="text-sm text-slate-300 mt-2">
            Let us design, secure, and support your organization’s digital infrastructure.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              <span>Request an Enterprise Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
