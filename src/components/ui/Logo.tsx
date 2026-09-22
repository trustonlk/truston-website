"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "dark-bg" | "light-bg" | "badge";
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  className = "",
  showTagline = true,
}) => {
  const isLightBg = variant === "light-bg";

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-truston-green rounded-lg transition-all ${className}`}
      aria-label="Truston Digital Solutions Home"
    >
      {variant === "badge" ? (
        <div className="bg-white px-3 py-1.5 rounded-xl shadow-md shadow-black/20 border border-white/20 transition-all duration-300 group-hover:shadow-truston-green/20 group-hover:border-truston-green/40">
          <Image
            src="/images/truston-logo-cropped.png"
            alt="Truston Digital Solution"
            width={160}
            height={42}
            className="h-8 sm:h-9 w-auto object-contain"
            priority
          />
        </div>
      ) : isLightBg ? (
        <Image
          src="/images/truston-logo-clean-transparent.png"
          alt="Truston Digital Solution"
          width={180}
          height={48}
          className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      ) : (
        <div className="flex items-center">
          <Image
            src="/images/truston-logo-darkmode.png"
            alt="Truston Digital Solution"
            width={190}
            height={50}
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,176,72,0.15)] transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
      )}
    </Link>
  );
};
