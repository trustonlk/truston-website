import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  className = "",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      <div
        className={`eyebrow mb-5 ${
          isDark
            ? "bg-white/5 border border-truston-green/25 text-truston-green-light shimmer-overlay"
            : "bg-white border border-truston-blue/15 text-truston-blue"
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isDark ? "bg-truston-green-light animate-pulse" : "bg-truston-green"
          }`}
        />
        <span className="relative z-10">{badge}</span>
      </div>

      <h2
        className={`text-[1.85rem] sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.12] ${
          isDark ? "text-white animate-text-glow" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
