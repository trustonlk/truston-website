"use client";

import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface CircuitTrace {
  points: Point[];
  totalLength: number;
  segmentLengths: number[];
}

interface GentlePulse {
  traceIndex: number;
  distance: number;
  speed: number;
  length: number;
  alpha: number;
  delay: number;
}

interface ViaPad {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  pulsePhase: number;
}

interface CircuitBackgroundProps {
  variant?: "hero" | "page-header";
  className?: string;
  opacity?: number;
}

export const CircuitBackground: React.FC<CircuitBackgroundProps> = ({
  variant = "hero",
  className = "",
  opacity = 0.25, // Low opacity watermark style
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const traces: CircuitTrace[] = [];
    const pulses: GentlePulse[] = [];
    const pads: ViaPad[] = [];

    const dist = (p1: Point, p2: Point) => Math.hypot(p2.x - p1.x, p2.y - p1.y);

    // Build widely spaced, watermark-style diagonal & orthogonal PCB traces
    const buildWatermarkCircuits = () => {
      traces.length = 0;
      pulses.length = 0;
      pads.length = 0;

      const isHero = variant === "hero";
      const centerX = width * 0.5;
      const centerY = isHero ? height * 0.45 : height * 0.5;

      // Lines spaced well apart (wider spacing as requested: "lines mechchara lagin nathuwa tikak durin danna")
      const spacing = isHero ? 72 : 56;
      const margin = 40;

      // 1. Diagonal Center Bus (running 45 degrees across the middle)
      const busLines = isHero ? 4 : 3;
      for (let b = 0; b < busLines; b++) {
        const offset = (b - (busLines - 1) / 2) * (spacing * 0.45);
        const len = Math.min(width, height) * 0.7;
        const p1 = { x: centerX - len * 0.5 + offset, y: centerY + len * 0.5 + offset };
        const p2 = { x: centerX + len * 0.5 + offset, y: centerY - len * 0.5 + offset };

        const l = dist(p1, p2);
        traces.push({
          points: [p1, p2],
          totalLength: l,
          segmentLengths: [l],
        });

        // Pads at ends
        pads.push({ x: p1.x, y: p1.y, radius: 3, alpha: 0.4, pulsePhase: Math.random() });
        pads.push({ x: p2.x, y: p2.y, radius: 3, alpha: 0.4, pulsePhase: Math.random() });
      }

      // 2. Corner & Edge Traces converging towards center at 45-degree angles
      // Top & Bottom Traces
      const colCount = Math.floor((width - margin * 2) / spacing);
      for (let c = 0; c <= colCount; c++) {
        const startX = margin + c * spacing;

        // Top branch
        if (Math.random() > 0.25) {
          const startY = -10;
          const turnY = Math.min(centerY - 40, (Math.random() * 0.3 + 0.15) * height);
          const dir = startX > centerX ? -1 : 1;
          const diagLen = Math.min(Math.abs(startX - centerX) * 0.6, 120);

          const pt1 = { x: startX, y: startY };
          const pt2 = { x: startX, y: turnY };
          const pt3 = { x: startX + dir * diagLen, y: turnY + diagLen }; // 45° bend
          const pt4 = { x: startX + dir * (diagLen + 40), y: turnY + diagLen }; // Terminal run

          const segs = [dist(pt1, pt2), dist(pt2, pt3), dist(pt3, pt4)];
          const tot = segs.reduce((a, b) => a + b, 0);

          traces.push({
            points: [pt1, pt2, pt3, pt4],
            totalLength: tot,
            segmentLengths: segs,
          });

          pads.push({
            x: pt4.x,
            y: pt4.y,
            radius: Math.random() > 0.6 ? 3 : 2,
            alpha: 0.35,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }

        // Bottom branch
        if (Math.random() > 0.25) {
          const startY = height + 10;
          const turnY = Math.max(centerY + 40, height - (Math.random() * 0.3 + 0.15) * height);
          const dir = startX > centerX ? -1 : 1;
          const diagLen = Math.min(Math.abs(startX - centerX) * 0.6, 120);

          const pt1 = { x: startX, y: startY };
          const pt2 = { x: startX, y: turnY };
          const pt3 = { x: startX + dir * diagLen, y: turnY - diagLen }; // 45° bend
          const pt4 = { x: startX + dir * (diagLen + 40), y: turnY - diagLen };

          const segs = [dist(pt1, pt2), dist(pt2, pt3), dist(pt3, pt4)];
          const tot = segs.reduce((a, b) => a + b, 0);

          traces.push({
            points: [pt1, pt2, pt3, pt4],
            totalLength: tot,
            segmentLengths: segs,
          });

          pads.push({
            x: pt4.x,
            y: pt4.y,
            radius: Math.random() > 0.6 ? 3 : 2,
            alpha: 0.35,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }

      // Left & Right Edge Traces
      const rowCount = Math.floor((height - margin * 2) / spacing);
      for (let r = 0; r <= rowCount; r++) {
        const startY = margin + r * spacing;

        // Left branch
        if (Math.random() > 0.3) {
          const startX = -10;
          const turnX = Math.min(centerX - 80, (Math.random() * 0.25 + 0.1) * width);
          const dirY = startY > centerY ? -1 : 1;
          const diagLen = Math.min(Math.abs(startY - centerY) * 0.5, 90);

          const pt1 = { x: startX, y: startY };
          const pt2 = { x: turnX, y: startY };
          const pt3 = { x: turnX + diagLen, y: startY + dirY * diagLen };
          const pt4 = { x: turnX + diagLen + 50, y: startY + dirY * diagLen };

          const segs = [dist(pt1, pt2), dist(pt2, pt3), dist(pt3, pt4)];
          const tot = segs.reduce((a, b) => a + b, 0);

          traces.push({
            points: [pt1, pt2, pt3, pt4],
            totalLength: tot,
            segmentLengths: segs,
          });

          pads.push({
            x: pt4.x,
            y: pt4.y,
            radius: 2.5,
            alpha: 0.35,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }

        // Right branch
        if (Math.random() > 0.3) {
          const startX = width + 10;
          const turnX = Math.max(centerX + 80, width - (Math.random() * 0.25 + 0.1) * width);
          const dirY = startY > centerY ? -1 : 1;
          const diagLen = Math.min(Math.abs(startY - centerY) * 0.5, 90);

          const pt1 = { x: startX, y: startY };
          const pt2 = { x: turnX, y: startY };
          const pt3 = { x: turnX - diagLen, y: startY + dirY * diagLen };
          const pt4 = { x: turnX - diagLen - 50, y: startY + dirY * diagLen };

          const segs = [dist(pt1, pt2), dist(pt2, pt3), dist(pt3, pt4)];
          const tot = segs.reduce((a, b) => a + b, 0);

          traces.push({
            points: [pt1, pt2, pt3, pt4],
            totalLength: tot,
            segmentLengths: segs,
          });

          pads.push({
            x: pt4.x,
            y: pt4.y,
            radius: 2.5,
            alpha: 0.35,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }

      // Soft electrical pulses traveling along traces (gentle, watermark style, non-intrusive)
      for (let i = 0; i < traces.length; i++) {
        if (Math.random() > 0.35) {
          pulses.push({
            traceIndex: i,
            distance: Math.random() * traces[i].totalLength,
            speed: Math.random() * 0.9 + 0.6,
            length: Math.random() * 40 + 25,
            alpha: Math.random() * 0.35 + 0.25, // Soft, low highlight
            delay: Math.random() * 80,
          });
        }
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      buildWatermarkCircuits();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const getPointAtDistance = (trace: CircuitTrace, d: number): { x: number; y: number } => {
      let accumulated = 0;
      for (let i = 0; i < trace.segmentLengths.length; i++) {
        const segLen = trace.segmentLengths[i];
        if (d <= accumulated + segLen || i === trace.segmentLengths.length - 1) {
          const t = segLen > 0 ? (d - accumulated) / segLen : 0;
          const p1 = trace.points[i];
          const p2 = trace.points[i + 1];
          return {
            x: p1.x + (p2.x - p1.x) * t,
            y: p1.y + (p2.y - p1.y) * t,
          };
        }
        accumulated += segLen;
      }
      const last = trace.points[trace.points.length - 1];
      return { x: last.x, y: last.y };
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    // ── 60fps Subtle Watermark Render Loop ─────────────────
    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // ── 1. Draw Subtle PCB Circuit Traces ──────────────────
      ctx.lineWidth = 1.3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 0; i < traces.length; i++) {
        const trace = traces[i];
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let p = 1; p < trace.points.length; p++) {
          ctx.lineTo(trace.points[p].x, trace.points[p].y);
        }
        // Very soft watermark trace line
        ctx.strokeStyle = "rgba(0, 160, 255, 0.28)";
        ctx.stroke();
      }

      // ── 2. Draw Subtle Circuit Via Pads ────────────────────
      for (let i = 0; i < pads.length; i++) {
        const pad = pads[i];
        pad.pulsePhase += 0.02;
        const pulse = 0.6 + 0.4 * Math.sin(pad.pulsePhase);

        // Small pad ring
        ctx.beginPath();
        ctx.arc(pad.x, pad.y, pad.radius + 1.2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 190, 255, ${pad.alpha * pulse})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Small center dot
        ctx.beginPath();
        ctx.arc(pad.x, pad.y, pad.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 220, 255, ${pad.alpha * 1.2 * pulse})`;
        ctx.fill();
      }

      // ── 3. Draw Gentle, Soft Flowing Electric Pulses ───────
      if (!prefersReducedMotion) {
        for (let i = 0; i < pulses.length; i++) {
          const pulse = pulses[i];

          if (pulse.delay > 0) {
            pulse.delay -= 1;
            continue;
          }

          const trace = traces[pulse.traceIndex];
          if (!trace) continue;

          pulse.distance += pulse.speed;

          if (pulse.distance >= trace.totalLength) {
            pulse.distance = 0;
            pulse.delay = Math.random() * 100 + 30;
            continue;
          }

          // Draw gentle tail
          const tailLen = pulse.length;
          const headDist = pulse.distance;
          const tailDist = Math.max(0, headDist - tailLen);

          const steps = 6;
          const stepDist = (headDist - tailDist) / steps;

          for (let s = 0; s < steps; s++) {
            const d1 = tailDist + s * stepDist;
            const d2 = tailDist + (s + 1) * stepDist;
            const pt1 = getPointAtDistance(trace, d1);
            const pt2 = getPointAtDistance(trace, d2);

            const a = ((s + 1) / steps) * pulse.alpha;

            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.strokeStyle = `rgba(0, 210, 255, ${a})`;
            ctx.lineWidth = 1.2 + (s / steps) * 0.8;
            ctx.stroke();
          }

          // Soft spark head (no harsh blinding highlight)
          const head = getPointAtDistance(trace, headDist);
          ctx.beginPath();
          ctx.arc(head.x, head.y, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 245, 255, ${pulse.alpha * 1.3})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [variant]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden z-[1] ${className}`}
      aria-hidden="true"
    >
      {/* Background Watermark Image Layer (Soft & Low Opacity) */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity"
        style={{
          backgroundImage: "url('/images/circuit-watermark.jpg')",
          opacity: 0.12,
          filter: "brightness(0.7) contrast(1.1)",
          mixBlendMode: "screen",
        }}
      />

      {/* Gentle Animated Circuit Pulse Canvas (Watermark opacity) */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none relative z-10"
        style={{ opacity }}
      />
    </div>
  );
};
