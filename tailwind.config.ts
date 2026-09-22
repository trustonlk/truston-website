import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        truston: {
          blue: {
            DEFAULT: "#0A1C9A",
            dark: "#07145f",
            deep: "#040c38",
            void: "#050814",
            light: "#1E3AEB",
            bright: "#3B5CFF",
          },
          green: {
            DEFAULT: "#00C853",
            light: "#1EE06A",
            glow: "#7DFFE0",
            dark: "#00963F",
          },
          surface: {
            DEFAULT: "#FFFFFF",
            subtle: "#F5F7FB",
            muted: "#EEF2F8",
            cardDark: "#0C1428",
            cardDarkElevated: "#121C36",
          },
          nexus: {
            bg: "#050814",
            card: "#0C1428",
            cardBorder: "rgba(255,255,255,0.08)",
            indigo: "#6366f1",
            indigoLight: "#818cf8",
            glow: "rgba(99,102,241,0.28)",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern-dark": "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
        "grid-pattern-light": "radial-gradient(rgba(10, 28, 154, 0.08) 1px, transparent 1px)",
        "gradient-radial-blue": "radial-gradient(ellipse at center, rgba(10, 28, 154, 0.38) 0%, rgba(5, 8, 20, 0.96) 75%)",
        "gradient-hero-dark": "linear-gradient(180deg, #050814 0%, #07145f 60%, #040c38 100%)",
        "gradient-nexus-hero": "linear-gradient(135deg, #050814 0%, #0b1224 40%, #15104a 70%, #050814 100%)",
        "gradient-nexus-card": "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(10,15,30,0.9) 100%)",
        "gradient-nexus-glow": "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.25) 0%, transparent 60%)",
        "gradient-green-glow": "radial-gradient(ellipse at 50% 0%, rgba(0,200,83,0.2) 0%, transparent 60%)",
      },
      boxShadow: {
        "glow-green": "0 0 28px -8px rgba(0, 200, 83, 0.45)",
        "glow-green-lg": "0 0 48px -8px rgba(30, 224, 106, 0.55)",
        "glow-blue": "0 0 30px -5px rgba(30, 58, 235, 0.4)",
        "glow-indigo": "0 0 30px -5px rgba(99, 102, 241, 0.4)",
        "card-dark": "0 18px 40px -18px rgba(2, 7, 26, 0.75)",
        "soft": "0 20px 50px -28px rgba(15, 23, 42, 0.28)",
        "nexus-card": "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px -15px rgba(0,0,0,0.5)",
        "nexus-card-hover": "0 0 0 1px rgba(0,200,83,0.28), 0 25px 50px -10px rgba(0,0,0,0.55)",
      },
      animation: {
        "pulse-slow":    "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float":         "float 7s ease-in-out infinite",
        "float-slow":    "float 11s ease-in-out infinite",
        "float-fast":    "float 4.5s ease-in-out infinite",
        "glow-pulse":    "glowPulse 3.4s ease-in-out infinite",
        "slide-up":      "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee":       "marquee 28s linear infinite",
        "shimmer":       "shimmer 2.2s linear infinite",
        "border-beam":   "borderBeam 4s linear infinite",
        "gradient-shift":"gradientShift 8s ease-in-out infinite",
        "text-glow":     "textGlow 3s ease-in-out infinite",
        "scale-in":      "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "orbit":         "orbit 12s linear infinite",
        "orbit-reverse": "orbit 18s linear infinite reverse",
        "blob":          "blob 10s ease-in-out infinite",
        "scan-line":     "scanLine 3s linear infinite",
        "fade-in-up":    "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 18px rgba(0,200,83,0.28)" },
          "50%":      { boxShadow: "0 0 40px rgba(30,224,106,0.6), 0 0 80px rgba(0,200,83,0.15)" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(20px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderBeam: {
          "0%":   { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "300% 0%" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        textGlow: {
          "0%, 100%": { textShadow: "0 0 20px rgba(0,200,83,0)" },
          "50%":      { textShadow: "0 0 30px rgba(0,200,83,0.6), 0 0 60px rgba(0,200,83,0.2)" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        orbit: {
          "0%":   { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", transform: "scale(1)" },
          "33%":      { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%", transform: "scale(1.05)" },
          "66%":      { borderRadius: "50% 60% 30% 60% / 30% 40% 70% 50%", transform: "scale(0.97)" },
        },
        scanLine: {
          "0%":   { transform: "translateY(-100%)", opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

