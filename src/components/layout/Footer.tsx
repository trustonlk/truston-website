"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Logo } from "../ui/Logo";
import { TRUSTON_CONFIG } from "@/config/truston.config";
import { SOLUTIONS_DATA } from "@/data/solutionsData";
import { TIER1_TECH_PARTNERS } from "@/data/clientsData";
import { Mail, MapPin, Clock, Phone, Shield, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="section-ink border-t border-white/10 text-slate-400 text-sm relative overflow-hidden">
      {/* Subtle background tech grid & ambient glow */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00e65c]/40 to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Positioning (2 cols wide on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <Logo />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3">
              {TRUSTON_CONFIG.positioning}
            </p>
            
            {/* System Integrator Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-truston-green animate-pulse shadow-[0_0_8px_#00e65c]" />
              <span>Sri Lanka Enterprise IT System Integrator</span>
            </div>

            <div className="pt-2 text-xs space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-truston-green" />
                <span>ISO-Standard Compliant Infrastructure Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-truston-green" />
                <span>24 x 7 Dedicated Enterprise Emergency Support</span>
              </div>
            </div>
          </motion.div>

          {/* Col 2: Core Solutions (Centered & Calibri Bold Title) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-center flex flex-col items-center"
          >
            <h3 
              style={{ fontFamily: "Calibri, 'Segoe UI', sans-serif" }}
              className="text-sm sm:text-base font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 bg-truston-green rounded-full shadow-[0_0_8px_#00e65c]" />
              INFRASTRUCTURE
            </h3>
            <ul className="space-y-2.5 flex flex-col items-center text-center">
              {SOLUTIONS_DATA.slice(0, 5).map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions#${sol.id}`}
                    className="hover:text-white transition-colors flex items-center justify-center group text-xs text-slate-400"
                  >
                    <span>{sol.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-opacity text-truston-green ml-1" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions#managed-services"
                  className="hover:text-white transition-colors flex items-center justify-center group text-xs text-slate-400"
                >
                  <span>Managed Services (AMC)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-opacity text-truston-green ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#device-rental"
                  className="hover:text-white transition-colors flex items-center justify-center group text-xs text-slate-400"
                >
                  <span>Device Rental Services</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-opacity text-truston-green ml-1" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 3: Company & Navigation (Centered & Calibri Bold Title) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-center flex flex-col items-center"
          >
            <h3 
              style={{ fontFamily: "Calibri, 'Segoe UI', sans-serif" }}
              className="text-sm sm:text-base font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 bg-truston-green rounded-full shadow-[0_0_8px_#00e65c]" />
              ORGANIZATION
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col items-center text-center">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Truston
                </Link>
              </li>
              <li>
                <Link href="/about#vision-mission" className="hover:text-white transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Service Delivery Methodology
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition-colors">
                  Verified Client Portfolio
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors text-truston-green font-medium">
                  24 x 7 Support & Escalation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request Consultation
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 4: Corporate Office & Contact & Inquiry (Centered & Calibri Bold Title) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 text-center flex flex-col items-center"
          >
            <h3 
              style={{ fontFamily: "Calibri, 'Segoe UI', sans-serif" }}
              className="text-sm sm:text-base font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 bg-truston-green rounded-full shadow-[0_0_8px_#00e65c]" />
              HEADQUARTERS
            </h3>
            <div className="space-y-4 text-xs flex flex-col items-center text-center">
              {/* Corporate Office */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 rounded-lg bg-truston-green/10 flex items-center justify-center text-truston-green mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-200 font-semibold text-xs sm:text-[13px]">
                  Kalutara & Colombo, Sri Lanka
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Corporate Office</p>
              </div>

              {/* Contact & Inquiry */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 rounded-lg bg-truston-green/10 flex items-center justify-center text-truston-green mb-1.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a 
                  href={`mailto:${TRUSTON_CONFIG.contact.email}`} 
                  className="text-slate-200 hover:text-truston-green font-mono font-medium transition-colors"
                >
                  info@truston.lk
                </a>
                <a 
                  href="tel:0779595730" 
                  className="text-slate-300 hover:text-truston-green font-mono font-semibold transition-colors mt-0.5 flex items-center justify-center gap-1"
                >
                  <Phone className="w-3 h-3 text-truston-green inline" />
                  077 9595 730
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">Contact & Inquiry</p>
              </div>

              {/* Working Hours & Emergency */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 rounded-lg bg-truston-green/10 flex items-center justify-center text-truston-green mb-1.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-300 font-medium">
                  Monday to Friday 8.30 : 17.00
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-truston-green/10 border border-truston-green/30 text-[10px] text-truston-green font-semibold mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-truston-green animate-pulse" />
                  <span>24 x 7 Emergency Support Active</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Technology Ecosystem & OEM Partners Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
              Authorized Technology Alliances & Standards
            </span>
            <span className="text-[10px] font-mono text-truston-green-light">
              100% Genuine Hardware • Fluke Certified
            </span>
          </div>
          <div className="relative overflow-hidden py-3">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050814] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050814] to-transparent z-10" />

            <div className="animate-marquee-infinite flex items-center gap-3">
              {[...TIER1_TECH_PARTNERS, ...TIER1_TECH_PARTNERS].map((p, idx) => (
                <div
                  key={`footer-${p.name}-${idx}`}
                  title={p.name}
                  className="flex-shrink-0 flex items-center justify-center h-10 w-28 px-2.5 py-1 rounded-lg bg-white shadow-sm border border-slate-100/80 hover:scale-105 transition-all duration-200"
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={90}
                    height={24}
                    className="max-h-6 max-w-[90px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} {TRUSTON_CONFIG.companyName}. All rights reserved. Sri Lanka.
          </p>

          <div className="flex items-center space-x-6 text-slate-500">
            <span className="text-slate-400 font-mono text-[11px]">
              {TRUSTON_CONFIG.tagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
