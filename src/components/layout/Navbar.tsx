"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/Logo";
import { TRUSTON_CONFIG } from "@/config/truston.config";
import { Menu, X, ArrowRight, Shield } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Clients", href: "/clients" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3">
      <div
        className={`nav-island mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          isScrolled ? "py-2.5 shadow-lg shadow-black/10" : "py-3"
        }`}
        style={{
          animation: "fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <div className="px-3 sm:px-5 flex items-center justify-between">
          <Logo variant="light-bg" />

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[13px] font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-slate-900 shadow-md shadow-slate-900/20"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn-primary !px-5 !py-2.5 !text-[13px]">
              <span>Get Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Link href="/contact" className="btn-primary !px-3.5 !py-1.5 !text-xs">
              Consult
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl nav-island rounded-2xl p-5 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl ${
                    isActive ? "bg-slate-900 text-white" : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}
          </div>
          <div className="mt-5 pt-4 border-t border-slate-200 space-y-4">
            <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <Shield className="w-5 h-5 text-truston-green flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-900">24 x 7 Enterprise IT Support</p>
                <p className="text-[11px] text-slate-500">AMC & SLA response under 15 minutes</p>
              </div>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-slate-500">
              {TRUSTON_CONFIG.contact.email}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
