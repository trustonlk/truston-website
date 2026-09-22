"use client";

import React from "react";

interface PullquoteProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
  theme?: "dark" | "light" | "green";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Pullquote: React.FC<PullquoteProps> = ({
  children,
  author,
  role,
  theme = "dark",
  size = "md",
  className = "",
}) => {
  const themeCls = {
    dark: "bg-white/[0.032] border-l-4 border-l-truston-green border border-white/10 text-white",
    light: "bg-white border-l-4 border-l-truston-green border border-slate-200/80 text-slate-900",
    green: "bg-truston-green/10 border-l-4 border-l-truston-green border border-truston-green/25 text-slate-900",
  }[theme];

  const quoteColor = {
    dark: "text-truston-green",
    light: "text-truston-green",
    green: "text-truston-green",
  }[theme];

  const textSize = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl md:text-2xl",
  }[size];

  const authorColor = {
    dark: "text-slate-400",
    light: "text-slate-500",
    green: "text-slate-600",
  }[theme];

  return (
    <blockquote
      className={`relative rounded-2xl px-7 py-6 ${themeCls} ${className}`}
    >
      {/* Giant decorative quote mark */}
      <span
        className={`absolute top-3 left-4 font-display font-extrabold text-5xl leading-none select-none pointer-events-none ${quoteColor} opacity-30`}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p
        className={`${textSize} font-display font-semibold leading-relaxed pl-5`}
      >
        {children}
      </p>

      {(author || role) && (
        <footer className={`mt-4 pl-5 flex items-center gap-2 ${authorColor}`}>
          <span className="w-6 h-px bg-current opacity-40" />
          <span className="text-xs font-mono font-semibold tracking-wide">
            {author}
            {role && (
              <span className="font-normal opacity-70">{` — ${role}`}</span>
            )}
          </span>
        </footer>
      )}
    </blockquote>
  );
};
