import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { TRUSTON_CONFIG } from "@/config/truston.config";
import { Mail, MapPin, Clock, ShieldCheck, Headphones, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Truston | Request an Infrastructure Consultation",
  description: "Connect with Truston Digital Solutions in Colombo, Sri Lanka. Request a consultation for enterprise network design, cybersecurity, data centers, structured cabling, or managed services.",
};

export default function ContactPage() {
  return (
    <div className="pt-[4.5rem]">
      <PageHero
        badge="Start a Dialogue"
        title="Consult with Our Engineers"
        subtitle="Let’s discuss your network topology, upcoming server room deployment, security compliance audit, or annual managed services contract."
      />

      <section className="py-20 section-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 card-light space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-truston-green-dark">
                    Corporate headquarters
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900 mt-1">
                    Truston Digital Solutions
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    System integrator & enterprise technology provider
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-truston-green flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Office location</strong>
                      <span className="text-slate-600">{TRUSTON_CONFIG.contact.address.display}</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">Physical surveys scheduled upon consultation request</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-truston-green flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Official email</strong>
                      <a
                        href={`mailto:${TRUSTON_CONFIG.contact.email}`}
                        className="text-truston-green-dark hover:underline font-mono"
                      >
                        {TRUSTON_CONFIG.contact.email}
                      </a>
                      <p className="text-[11px] text-slate-400 mt-0.5">For enterprise RFPs, quotations & proposals</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-truston-green flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Telephone hotline</strong>
                      <a
                        href="tel:0779595730"
                        className="text-truston-green-dark hover:underline font-mono font-semibold"
                      >
                        077 9595 730
                      </a>
                      <p className="text-[11px] text-slate-400 mt-0.5">Direct phone & technical inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-truston-green flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Business hours</strong>
                      <span className="text-slate-600">{TRUSTON_CONFIG.contact.hours.weekdays}</span>
                      <p className="text-[11px] text-truston-green-dark font-mono mt-0.5">
                        24 x 7 emergency escalation active
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl section-ink border border-white/10 flex items-start gap-4">
                <Headphones className="w-8 h-8 text-truston-green-light flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Active AMC emergency hotline
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Existing corporate clients with priority SLAs can access round-the-clock emergency escalation via direct ticket dispatch.
                  </p>
                  <div className="mt-3">
                    <span className="text-xs font-mono text-truston-green-light font-bold">
                      Email: {TRUSTON_CONFIG.contact.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-truston-green flex-shrink-0" />
                <p className="text-xs text-slate-500">
                  All engineering proposals and bill of materials adhere strictly to international ISO standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
