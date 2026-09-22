"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] origin-left h-[2.5px] pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00c853, #1ee06a, #7dffe0, #00c853)",
        backgroundSize: "200% 100%",
        boxShadow: "0 0 12px rgba(0, 200, 83, 0.6), 0 0 24px rgba(0, 200, 83, 0.2)",
      }}
    />
  );
};
