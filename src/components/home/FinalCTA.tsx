"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { TRUSTON_CONFIG } from "@/config/truston.config";
import { FadeInSection } from "@/components/ui/AnimateIn";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 section-ink text-white relative overflow-hidden noise scan-line">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      <div className="ambient-orb w-[600px] h-[400px] bg-indigo-600/[0.12] top-[20%] left-[20%]" style={{ animationDelay: "0s" }} />
      <div className="ambient-orb w-[500px] h-[350px] bg-truston-green/[0.07] bottom-[10%] right-[15%]" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Monospace Pill */}
        <FadeInSection direction="none" blur>
          <div className="eyebrow mb-6 bg-white/5 border border-truston-green/30 text-truston-green-light shimmer-overlay">
            <Sparkles className="w-3.5 h-3.5 text-truston-green relative z-10" />
            <span className="relative z-10">Start Your Technology Journey</span>
          </div>
        </FadeInSection>

        {/* Quote-styled headline block */}
        <FadeInSection delay={0.15} scale>
          <div className="callout-dark max-w-3xl mx-auto text-left mb-8 border-beam rounded-r-2xl">
            <span
              className="block font-display font-extrabold text-7xl leading-none text-truston-green opacity-15 mb-1 -mt-2 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1] text-balance pl-2">
              Ready to Build a <span className="animated-gradient-text">Smarter, More Secure</span> Infrastructure?
            </h2>
            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed pl-2">
              Let&apos;s design the right technology foundation for your organization. From multi-branch network deployments and advanced SASE security to data centers and managed IT support.
            </p>
          </div>
        </FadeInSection>

        {/* Primary & Secondary CTAs */}
        <FadeInSection delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton strength={0.25}>
              <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 text-base border-beam rounded-full">
                <span>Request a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link href="/contact" className="btn-ghost w-full sm:w-auto px-8 py-4 text-base">
                <span>Contact Truston</span>
              </Link>
            </MagneticButton>
          </div>
        </FadeInSection>

        {/* Direct Contact Micro-Info */}
        <FadeInSection delay={0.45}>
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-truston-green" />
              <a href={`mailto:${TRUSTON_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                {TRUSTON_CONFIG.contact.email}
              </a>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-truston-green" />
              <span>ISO Standard Compliant Installations</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-truston-green animate-ping" />
              <span>24 x 7 Support Escalation</span>
            </span>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
};
