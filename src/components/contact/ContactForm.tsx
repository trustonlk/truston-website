"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";
import { TRUSTON_CONFIG } from "@/config/truston.config";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceRequired: "Network Solutions",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const services = [
    "Network Solutions",
    "Security Solutions",
    "ELV Solutions",
    "Smart Data Center Solutions",
    "Cabling Solutions",
    "Managed Services (AMC)",
    "Device Rental Services",
    "Other Enterprise Inquiries",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid corporate email address.");
      return;
    }

    setStatus("submitting");

    try {
      // Compose a rich mailto: link with full inquiry details
      const subject = `[CONSULTATION REQUEST] ${formData.serviceRequired} — ${formData.company || formData.fullName}`;
      const body = [
        `Consultation Request — Truston Digital Solutions`,
        ``.padEnd(60, `—`),
        ``,
        `Full Name:    ${formData.fullName}`,
        `Company:      ${formData.company || "—"}`,
        `Email:        ${formData.email}`,
        `Phone:        ${formData.phone || "—"}`,
        `Service:      ${formData.serviceRequired}`,
        ``,
        `Project Details & Requirements:`,
        `—————————————————————————————`,
        formData.message,
        ``,
        `—————————————————————————————`,
        `Sent via Truston Digital Solutions website contact form.`,
      ].join("\n");

      const mailtoHref = `mailto:${TRUSTON_CONFIG.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open the mail client
      const link = document.createElement("a");
      link.href = mailtoHref;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Short delay for UX, then show success
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to open your email client. Please contact us directly at " + TRUSTON_CONFIG.contact.email);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 card-dark text-center">
        <div className="w-16 h-16 rounded-full bg-truston-green/20 text-truston-green flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white">
          Email Client Opened
        </h3>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
          Your pre-filled consultation request for{" "}
          <strong className="text-truston-green">{formData.serviceRequired}</strong> has been prepared. Please send it from your email client to complete your inquiry.
        </p>
        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-truston-green">
          <Mail className="w-4 h-4" />
          <span>{TRUSTON_CONFIG.contact.email}</span>
        </div>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                company: "",
                email: "",
                phone: "",
                serviceRequired: "Network Solutions",
                message: "",
              });
            }}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 card-light space-y-6"
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-display font-bold text-slate-900">
          Request an Infrastructure Consultation
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Provide your project requirements to consult with our enterprise engineering team. This form will open your email client with a pre-filled message.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-xs text-rose-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-mono font-semibold text-slate-700 mb-1.5 uppercase">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Ruwan Perera"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-truston-green/40 focus:border-truston-green/50 transition-all"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-mono font-semibold text-slate-700 mb-1.5 uppercase">
            Company / Organization
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Lanka Holdings (Pvt) Ltd"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-truston-green/40 focus:border-truston-green/50 transition-all"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-mono font-semibold text-slate-700 mb-1.5 uppercase">
            Corporate Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-truston-green/40 focus:border-truston-green/50 transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-mono font-semibold text-slate-700 mb-1.5 uppercase">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+94 77 XXX XXXX"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-truston-green/40 focus:border-truston-green/50 transition-all"
          />
        </div>
      </div>

      {/* Row 3: Service Required Dropdown */}
      <div>
        <label htmlFor="serviceRequired" className="block text-xs font-mono font-semibold text-slate-700 mb-1.5 uppercase">
          Primary Service Required <span className="text-rose-500">*</span>
        </label>
        <select
          id="serviceRequired"
          value={formData.serviceRequired}
          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-truston-green/40 focus:border-truston-green/50 transition-all"
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Message / Requirements */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono font-semibold text-slate-700 mb-1.5 uppercase">
          Project Details / Requirements <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your facility requirements, current challenges, number of drops/endpoints, or target timeline..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-truston-green/40 focus:border-truston-green/50 transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          id="contact-submit-btn"
          className="w-full btn-primary !rounded-xl py-4 disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#050814]" />
              <span>Preparing Email...</span>
            </>
          ) : (
            <>
              <span>Send Consultation Request</span>
              <Send className="w-4 h-4 text-[#050814]" />
            </>
          )}
        </button>
      </div>

      <div className="text-center">
        <p className="text-[11px] text-slate-400">
          Clicking submit will open your email client with a pre-filled message addressed to{" "}
          <span className="font-mono text-truston-blue-dark">{TRUSTON_CONFIG.contact.email}</span>.
        </p>
      </div>
    </form>
  );
};
