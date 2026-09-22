import React from "react";
import Link from "next/link";
import { ArrowRight, WifiOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-16 section-ink text-white px-4 text-center">
      <div className="max-w-md mx-auto p-8 sm:p-10 card-dark">
        <div className="w-16 h-16 rounded-2xl bg-white/5 text-rose-400 flex items-center justify-center mx-auto mb-6">
          <WifiOff className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest">
          Error 404 // packet dropped
        </span>

        <h1 className="text-3xl font-display font-bold text-white mt-2">
          Node route not found
        </h1>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          The page you requested does not exist or has been re-routed.
        </p>

        <div className="mt-8">
          <Link href="/" className="btn-primary">
            <span>Return home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
