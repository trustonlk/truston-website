"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.035,
  as: Tag = "h2",
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className="overflow-hidden">
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block mr-[0.28em]"
            initial={{ y: "110%", opacity: 0, rotateX: 45 }}
            animate={
              isInView
                ? { y: 0, opacity: 1, rotateX: 0 }
                : { y: "110%", opacity: 0, rotateX: 45 }
            }
            transition={{
              duration: 0.55,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
};

// ── Animated Gradient Text ────────────────────────────────────────
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = "from-emerald-400 via-teal-200 to-white",
}) => {
  return (
    <span
      className={`bg-gradient-to-r ${colors} bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift ${className}`}
    >
      {children}
    </span>
  );
};
