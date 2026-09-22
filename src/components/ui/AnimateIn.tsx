"use client";

import React from "react";
import { motion, useInView, type TargetAndTransition } from "framer-motion";
import { useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  blur?: boolean;
  scale?: boolean;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.65,
  once = true,
  blur = true,
  scale = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const directionMap = {
    up:    { y: 36, x: 0 },
    down:  { y: -36, x: 0 },
    left:  { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none:  { x: 0, y: 0 },
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
      ...(blur ? { filter: "blur(6px)" } : {}),
      ...(scale ? { scale: 0.95 } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(blur ? { filter: "blur(0px)" } : {}),
      ...(scale ? { scale: 1 } : {}),
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.08,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, filter: "blur(4px)", scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={hover ? { y: -6, transition: { duration: 0.3, ease: "easeOut" } } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};
