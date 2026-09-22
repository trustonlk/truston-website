"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../layout/SectionHeader";
import { VERIFIED_CLIENTS_DATA, TIER1_TECH_PARTNERS } from "@/data/clientsData";
import { Shield, ExternalLink, CheckCircle2, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInSection, StaggerContainer, StaggerItem } from "../ui/AnimateIn";

export const ClientTrustSection: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>("all");

  const filteredSectors = selectedSector === "all"
    ? VERIFIED_CLIENTS_DATA
    : VERIFIED_CLIENTS_DATA.filter((s) => s.id === selectedSector);

  return (
    <section id="clients" className="py-24 section-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="Verified Client Relationships"
            title="Trusted by Leading Organizations in Sri Lanka"
            subtitle="Our partnerships are founded on technical transparency, Fluke-certified engineering rigor, and reliable 24 x 7 infrastructure maintenance."
            theme="light"
            align="center"
          />
        </FadeInSection>

        {/* Sector Filter Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: "all", label: "All Sectors" },
            { id: "education", label: "Higher Education" },
            { id: "corporate", label: "Corporate Enterprises" },
            { id: "hospitality", label: "Hotels & Resorts" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedSector(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                selectedSector === tab.id
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sector Clients Showcase */}
        <div className="mt-12 space-y-10">
          {filteredSectors.map((sector) => (
            <FadeInSection key={sector.id} className="p-8 sm:p-10 card-light">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
                <div>
                  <span className="text-xs font-bold text-truston-green-dark uppercase tracking-wider block font-mono">
                    Sector // {sector.sectorBadge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-1">
                    {sector.sectorName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                    {sector.description}
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/60 text-xs font-mono font-semibold text-slate-700 whitespace-nowrap">
                  {sector.organizations.length} Verified Deployments
                </span>
              </div>

              {/* Rich Client Cards Grid with Real Logos */}
              <StaggerContainer className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {sector.organizations.map((org, oIdx) => (
                  <StaggerItem
                    key={oIdx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-truston-green/40 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Logo Plate */}
                      <div className="h-16 w-full rounded-xl bg-white border border-slate-100 shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] p-2.5 flex items-center justify-center mb-4 group-hover:border-slate-200 transition-colors">
                        <Image
                          src={org.logo}
                          alt={`${org.name} logo`}
                          width={150}
                          height={44}
                          className="max-h-11 max-w-[150px] w-auto object-contain filter group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Header info */}
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-truston-green" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-truston-green-dark">
                          Verified Client
                        </span>
                      </div>
                      
                      <h4 className="text-base font-display font-bold text-slate-900 group-hover:text-truston-blue transition-colors leading-snug">
                        {org.name}
                      </h4>
                      <p className="text-xs text-truston-blue font-semibold mt-1">
                        {org.type}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {org.highlight}
                      </p>
                      {org.website && (
                        <a
                          href={org.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-truston-blue mt-3 transition-colors"
                        >
                          <span>Official Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInSection>
          ))}
        </div>

        {/* Global Technology Ecosystem Partners Section */}
        <FadeInSection className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0b1224] text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-truston-green/10 border border-truston-green/20 text-truston-green-light text-[11px] font-mono uppercase tracking-wider mb-2">
                  <Cpu className="w-3 h-3" />
                  Hardware & Technology Ecosystem
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Engineered with Global Tier-1 Technology Partners
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  Truston integrates authentic enterprise-grade hardware, optical fiber components, and security appliances backed by international warranties.
                </p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-xs font-mono text-truston-green-light font-bold block">
                  100% Genuine Equipment
                </span>
                <span className="text-[11px] text-slate-400">
                  Fluke-Verified Performance
                </span>
              </div>
            </div>

            {/* Infinite Horizontal Marquee Track (Right-to-Left, Seamless Loop, Original Colors) */}
            <div className="mt-10 relative overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8">
              {/* Left and Right Edge Fade Gradients */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0b1224] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0b1224] to-transparent z-10" />

              {/* Scrolling Container */}
              <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-5 px-4">
                {[...TIER1_TECH_PARTNERS, ...TIER1_TECH_PARTNERS].map((partner, idx) => (
                  <div
                    key={`${partner.name}-${idx}`}
                    className="flex-shrink-0 flex flex-col items-center justify-between h-28 w-44 p-3 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:border-truston-green/60 hover:bg-white/[0.09] transition-all duration-300 group shadow-lg"
                  >
                    {/* Clean elevated logo plate for 100% true original brand colors */}
                    <div className="w-full h-15 rounded-xl bg-white flex items-center justify-center p-2.5 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={125}
                        height={40}
                        className="max-h-10 max-w-[125px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Brand Name & Engineering Category */}
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
        </FadeInSection>

        {/* Source Fidelity Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5 text-truston-green" />
            <span>Client engagements verified from official Truston enterprise deployment records. All hardware deployments are genuine and warranted.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
