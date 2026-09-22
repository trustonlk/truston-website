"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "../layout/SectionHeader";
import { TRUSTON_CONFIG } from "@/config/truston.config";
import { FadeInSection } from "../ui/AnimateIn";
import { 
  Activity, 
  Clock, 
  ArrowRight, 
  Server, 
  Zap, 
  Headphones,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export const SupportNoc: React.FC = () => {
  return (
    <section id="support" className="py-24 bg-[#070b18] text-white relative overflow-hidden scan-line">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="ambient-orb w-[500px] h-[400px] bg-truston-green/[0.06] top-[15%] right-[5%]" style={{ animationDelay: "0s" }} />
      <div className="ambient-orb w-[400px] h-[350px] bg-indigo-600/[0.08] bottom-[10%] left-[10%]" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <SectionHeader
            badge="24 x 7 Operations & NOC"
            title="Your Infrastructure Never Stops. Neither Do We."
            subtitle="Round-the-clock technical support, proactive monitoring, and guaranteed response SLAs to keep your networks, server rooms, and client endpoints running at peak performance."
            theme="dark"
            align="center"
          />
        </FadeInSection>

        {/* Real Command Center Photo & Telemetry Dashboard */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <span className="text-sm font-semibold text-white tracking-wide block">
                  Truston Network Operations Center
                </span>
                <span className="text-xs text-slate-400">
                  Live Infrastructure Telemetry & Emergency Escalation
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold">
              <span>24 x 7 Engineering Dispatch Ready</span>
            </div>
          </div>

          {/* Photo & Specs Showcase */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
              <Image
                src="/images/noc-command-center.jpg"
                alt="Truston Network Operations Center Command Wall"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                <span className="font-mono text-emerald-400 font-medium">Continuous Telemetry Oversight</span>
                <span className="bg-slate-900/80 px-2.5 py-1 rounded border border-white/10 font-mono text-[11px]">SLA Response &lt; 15 Mins</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xl font-display font-bold text-white">
                Guaranteed Response When Every Second Counts
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our certified engineers handle multi-tier incidents with structured escalation workflows, on-site emergency dispatch throughout Sri Lanka, and dedicated hardware replacement inventory.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "15-minute response SLA for critical enterprise outages",
                  "Dedicated buffer hardware for rapid on-site replacement",
                  "Preventive bi-monthly health inspections and cleanups",
                  "Direct hotline to senior network and security engineers",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Operations Telemetry Cards */}
          <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span>COVERAGE</span>
                <Clock className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-display font-bold text-white mt-1">24 / 7 / 365</p>
              <p className="text-xs text-slate-400 mt-0.5">Continuous corporate support</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span>PREVENTIVE</span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-display font-bold text-white mt-1">Scheduled</p>
              <p className="text-xs text-slate-400 mt-0.5">Bi-monthly health audits</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span>ENGINEERS</span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-display font-bold text-white mt-1">Certified</p>
              <p className="text-xs text-slate-400 mt-0.5">Cisco & Fortinet specialists</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span>HARDWARE</span>
                <Server className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-display font-bold text-white mt-1">Repairs</p>
              <p className="text-xs text-slate-400 mt-0.5">Component-level servicing</p>
            </div>
          </div>

          {/* Action CTA inside Support Section */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h5 className="text-base font-semibold text-white">
                Require immediate technical support or an AMC proposal?
              </h5>
              <p className="text-xs text-slate-400 mt-0.5">
                Reach our emergency desk or schedule a preventive survey for your premises.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/support" className="btn-primary !text-xs !py-2.5 !px-5">
                Contact Support Desk
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
