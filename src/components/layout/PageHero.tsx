import React from "react";
import { CircuitBackground } from "@/components/ui/CircuitBackground";

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({ badge, title, subtitle, children }) => {
  return (
    <section className="relative overflow-hidden section-ink noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[280px] bg-truston-green/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Information Technology Circuit Watermark Animation */}
      <CircuitBackground variant="page-header" opacity={0.22} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 text-center">
        <div className="eyebrow mx-auto mb-6 bg-white/5 border border-truston-green/25 text-truston-green-light">
          <span className="w-1.5 h-1.5 rounded-full bg-truston-green-light animate-pulse" />
          <span>{badge}</span>
        </div>
        <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-white tracking-tight leading-[1.08] text-balance">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};
