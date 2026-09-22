"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CircuitBackground } from "@/components/ui/CircuitBackground";
import { CountUp } from "@/components/ui/CountUp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TIER1_TECH_PARTNERS } from "@/data/clientsData";

const fade = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.12 * i, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#070b18]">
      {/* Data Center Subtle Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/datacenter-hero.jpg"
          alt="Enterprise Tier-3 Data Center Infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 filter brightness-[0.6] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b18] via-[#070b18]/70 to-[#070b18]/50" />
      </div>

      {/* Cyber Electronic Circuit Watermark Animation */}
      <CircuitBackground variant="hero" opacity={0.25} />

      {/* Ambient floating orbs */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div className="ambient-orb w-[500px] h-[400px] bg-emerald-500/[0.07] top-[10%] left-[-5%]" style={{ animationDelay: "0s" }} />
        <div className="ambient-orb w-[400px] h-[350px] bg-indigo-600/[0.08] top-[30%] right-[-8%]" style={{ animationDelay: "3s" }} />
        <div className="ambient-orb w-[300px] h-[300px] bg-truston-green/[0.05] bottom-[5%] left-[40%]" style={{ animationDelay: "6s" }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Live Operational Status Tag */}
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-md mb-8 shadow-sm shimmer-overlay"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono font-semibold tracking-wider text-[11px] uppercase relative z-10">Enterprise IT Systems Integrator</span>
            <span className="text-slate-500 relative z-10">|</span>
            <span className="text-slate-300 font-sans relative z-10">Colombo, Sri Lanka</span>
          </motion.div>

          {/* Master Headline with animated gradient */}
          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-display font-extrabold tracking-tight text-white leading-[1.08] text-balance"
          >
            Building high-performance{" "}
            <span className="animated-gradient-text">IT infrastructure</span>
            {" "}for modern enterprise
          </motion.h1>

          {/* Core Subtitle */}
          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal text-balance"
          >
            Truston Digital Solutions engineers, secures, and manages critical enterprise networks, structured optical cabling, smart data centers, and multi-branch communication across Sri Lanka.
          </motion.p>

          {/* Action CTAs with magnetic effect */}
          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <MagneticButton strength={0.25}>
              <Link href="/solutions" className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-semibold border-beam rounded-full">
                Explore Our Solutions
                <ArrowRight className="w-4 h-4 text-[#050814]" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link href="/contact" className="btn-ghost w-full sm:w-auto px-8 py-3.5 text-sm font-semibold">
                Request On-Site Consultation
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Hardware & Ecosystem Authority Banner */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-14 pt-8 border-t border-slate-800/80 w-full"
          >
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-4">
              Engineered with Global Tier-1 Technology Ecosystems
            </p>
            {/* Infinite Horizontal Marquee Track in Hero */}
            <div className="relative overflow-hidden py-3 w-full -mx-4 sm:mx-0">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#070b18] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#070b18] to-transparent z-10" />

              <div className="animate-marquee-infinite flex items-center gap-3 sm:gap-4">
                {[...TIER1_TECH_PARTNERS, ...TIER1_TECH_PARTNERS].map((partner, idx) => (
                  <div
                    key={`hero-${partner.name}-${idx}`}
                    title={partner.name}
                    className="flex-shrink-0 flex items-center justify-center h-12 w-36 px-3.5 py-1.5 rounded-xl bg-white shadow-md border border-slate-100/90 hover:scale-105 transition-all duration-300 group"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={110}
                      height={28}
                      className="max-h-7 max-w-[110px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Animated Stats Grid with CountUp */}
          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full max-w-4xl"
          >
            {[
              { label: "Structured Cabling", end: 500, suffix: "+ Km", sub: "Fluke DTX/DSX Certified" },
              { label: "Infrastructure Uptime", end: 99.98, suffix: "%", sub: "High-Availability SLAs", decimals: 2 },
              { label: "Emergency Triage", prefix: "< ", end: 15, suffix: " Mins", sub: "24 x 7 NOC Escalation" },
              { label: "Installation Standard", metric: "ISO / IEC", sub: "11801 Compliance" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-left backdrop-blur-md hover:border-emerald-500/40 transition-all duration-500 shimmer-overlay"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-[11px] font-mono text-slate-400 block relative z-10">{stat.label}</span>
                <span className="text-xl sm:text-2xl font-display font-extrabold text-white mt-0.5 block relative z-10">
                  {"metric" in stat ? (
                    stat.metric
                  ) : (
                    <CountUp
                      prefix={stat.prefix}
                      end={stat.end!}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                      duration={2200}
                    />
                  )}
                </span>
                <span className="text-[11px] text-emerald-400/90 font-medium mt-0.5 flex items-center gap-1 relative z-10">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050814] to-transparent z-10 pointer-events-none" />
    </section>
  );
};
