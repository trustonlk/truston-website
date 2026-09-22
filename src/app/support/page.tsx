import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TRUSTON_CONFIG } from "@/config/truston.config";
import {
  Clock,
  Activity,
  PhoneCall,
  Mail,
  Wrench,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "24 x 7 Support & Escalation | Truston NOC Command Center",
  description: "Access Truston's 24 x 7 Network Operations Support, emergency incident escalation, preventive maintenance schedules, and hardware warranty assistance.",
};

export default function SupportPage() {
  return (
    <div className="pt-[4.5rem]">
      <PageHero
        badge="NOC & Emergency Escalation"
        title="24 x 7 Enterprise Technical Support"
        subtitle={`${TRUSTON_CONFIG.tagline}. Rapid-response engineering assistance, preventive health audits, and guaranteed business continuity for our AMC partners.`}
      />

      <section className="py-20 section-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl section-ink border border-white/10 shadow-soft mb-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-truston-green-light font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Contracted AMC clients // priority hotline</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Experiencing a Network Outage or Critical Server Failure?
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Active AMC clients with priority SLAs have round-the-clock telephone and on-site escalation access to our standby field engineering team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <a
                  href={`mailto:${TRUSTON_CONFIG.contact.email}?subject=CRITICAL%20SUPPORT%20TICKET`}
                  className="btn-primary text-center"
                >
                  Trigger Priority Ticket
                </a>
                <a href="#channels" className="btn-ghost text-center">
                  View Support Channels
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                kicker: "Round-the-clock",
                title: "24 x 7 Emergency Helpdesk",
                body: "Continuous on-call engineering dispatch for enterprise switch failures, firewall lockouts, routing loops, and server room cutovers.",
                items: ["Rapid remote diagnostic triage", "On-site field engineer dispatch"],
              },
              {
                icon: Activity,
                kicker: "Proactive care",
                title: "Preventive Maintenance",
                body: "Scheduled quarterly audits to identify component fatigue, replace worn thermal interfaces, clean server rack airways, and verify firmware integrity.",
                items: ["Quarterly physical & logical checks", "Detailed audit performance reports"],
              },
              {
                icon: Wrench,
                kicker: "Hardware lab",
                title: "Repairs & Warranty",
                body: "Complete motherboard, power supply, logic board, and mechanical repairs for enterprise desktops, laptops, printers, and switches.",
                items: ["OEM warranty claim processing", "Component-level repair facility"],
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="p-8 card-light flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-truston-green/10 text-truston-green-dark flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-truston-green-dark font-bold uppercase">
                      {pillar.kicker}
                    </span>
                    <h3 className="text-xl font-display font-bold text-slate-900 mt-1">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                  <ul className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-truston-green" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div
            id="channels"
            className="relative overflow-hidden mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#07145f] via-[#0A1C9A] to-[#040c38] bg-[length:200%_200%] animate-gradient-shift border border-blue-400/30 shadow-[0_20px_50px_rgba(7,20,95,0.4)] text-white"
          >
            {/* Ambient gradient glow accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-truston-green/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />

            <div className="relative z-10">
              <div className="max-w-3xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-truston-green-light">
                  Official support channels
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                  Connect Directly with Support Dispatch
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 mt-2">
                  For new AMC contracts, maintenance inquiries, or non-emergency support requests, use our primary business communication points.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-truston-green/50 transition-all hover:bg-white/[0.12] group">
                  <div className="flex items-center gap-2 text-truston-green-light font-mono text-xs font-bold uppercase mb-2">
                    <Mail className="w-4 h-4" />
                    <span>Email support desk</span>
                  </div>
                  <a
                    href={`mailto:${TRUSTON_CONFIG.contact.email}`}
                    className="text-sm font-mono font-bold text-white group-hover:text-truston-green-light transition-colors"
                  >
                    {TRUSTON_CONFIG.contact.email}
                  </a>
                  <p className="text-[11px] text-blue-200/80 mt-1">Monitored 24 x 7 by standby engineering</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-truston-green/50 transition-all hover:bg-white/[0.12] group">
                  <div className="flex items-center gap-2 text-truston-green-light font-mono text-xs font-bold uppercase mb-2">
                    <PhoneCall className="w-4 h-4" />
                    <span>Corporate line</span>
                  </div>
                  <p className="text-sm font-mono font-bold text-white">
                    {TRUSTON_CONFIG.contact.phoneDisplay}
                  </p>
                  <p className="text-[11px] text-blue-200/80 mt-1">{TRUSTON_CONFIG.contact.hours.weekdays}</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-truston-green/50 transition-all hover:bg-white/[0.12] group">
                  <div className="flex items-center gap-2 text-truston-green-light font-mono text-xs font-bold uppercase mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Operational hours</span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Monday – Friday: 8:30 AM – 5:30 PM
                  </p>
                  <p className="text-[11px] text-truston-green-light font-semibold mt-1">24 x 7 emergency line available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
