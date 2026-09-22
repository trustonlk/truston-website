"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  isCore?: boolean;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const NetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Canvas sizing with DPI awareness
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse Tracking
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Generate Topology Nodes
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 14 : 26;
    const nodes: Node[] = [];

    // Central Core Node (Truston Digital Hub)
    nodes.push({
      x: width * 0.5,
      y: height * 0.45,
      originX: width * 0.5,
      originY: height * 0.45,
      vx: 0,
      vy: 0,
      radius: 7,
      color: "#00E65C",
      isCore: true,
    });

    for (let i = 1; i < nodeCount; i++) {
      const angle = (i / (nodeCount - 1)) * Math.PI * 2 + (Math.random() - 0.5);
      const dist = Math.random() * (Math.min(width, height) * 0.42) + 60;
      const nx = width * 0.5 + Math.cos(angle) * dist;
      const ny = height * 0.45 + Math.sin(angle) * dist * 0.8;

      nodes.push({
        x: nx,
        y: ny,
        originX: nx,
        originY: ny,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() > 0.8 ? 5 : 3.5,
        color: Math.random() > 0.65 ? "#00B048" : "#3B5CFF",
      });
    }

    // Generate Network Connections
    const connections: [number, number][] = [];
    // Connect each node to central core or nearby neighbors
    for (let i = 1; i < nodes.length; i++) {
      if (Math.random() > 0.3) {
        connections.push([0, i]);
      }
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].originX - nodes[j].originX;
        const dy = nodes[i].originY - nodes[j].originY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < (isMobile ? 110 : 160)) {
          connections.push([i, j]);
        }
      }
    }

    // Data Packets traveling along connections
    const packets: Packet[] = [];
    const packetCount = isMobile ? 8 : 16;
    for (let i = 0; i < packetCount; i++) {
      if (connections.length > 0) {
        const randConn = connections[Math.floor(Math.random() * connections.length)];
        packets.push({
          fromNode: randConn[0],
          toNode: randConn[1],
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.005,
          color: Math.random() > 0.5 ? "#00E65C" : "#FFFFFF",
        });
      }
    }

    // IntersectionObserver to pause when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let frame = 0;

    // Animation Loop
    const render = () => {
      frame++;
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Update Nodes
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];

          if (!prefersReducedMotion) {
            // Gentle natural organic float
            if (!node.isCore) {
              node.x += node.vx;
              node.y += node.vy;

              // Bound to origin
              const dx = node.x - node.originX;
              const dy = node.y - node.originY;
              if (Math.abs(dx) > 25) node.vx *= -1;
              if (Math.abs(dy) > 25) node.vy *= -1;
            }

            // Mouse repulsion / attraction
            const mdx = mouse.x - node.x;
            const mdy = mouse.y - node.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < mouse.radius) {
              const force = (1 - mDist / mouse.radius) * 12;
              node.x -= (mdx / mDist) * force * 0.3;
              node.y -= (mdy / mDist) * force * 0.3;
            }
          }
        }

        // Draw Connections
        ctx.lineWidth = 1;
        for (const [i, j] of connections) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const alpha = Math.max(0.04, 0.25 - dist / 400);
          ctx.strokeStyle = `rgba(59, 92, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }

        // Draw Data Packets
        if (!prefersReducedMotion) {
          for (const p of packets) {
            p.progress += p.speed;
            if (p.progress >= 1) {
              p.progress = 0;
              // Pick new connection
              const conn = connections[Math.floor(Math.random() * connections.length)];
              p.fromNode = conn[0];
              p.toNode = conn[1];
            }

            const from = nodes[p.fromNode];
            const to = nodes[p.toNode];
            if (from && to) {
              const px = from.x + (to.x - from.x) * p.progress;
              const py = from.y + (to.y - from.y) * p.progress;

              ctx.fillStyle = p.color;
              ctx.shadowColor = p.color;
              ctx.shadowBlur = 8;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0; // Reset
            }
          }
        }

        // Draw Nodes
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];

          // Outer Pulse Ring for Core Node
          if (node.isCore) {
            const pulse = (Math.sin(frame * 0.05) + 1) * 0.5;
            ctx.strokeStyle = `rgba(0, 230, 92, ${0.15 + pulse * 0.25})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius + 8 + pulse * 6, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Node Body
          ctx.fillStyle = node.color;
          ctx.shadowColor = node.color;
          ctx.shadowBlur = node.isCore ? 14 : 6;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Inner white highlight
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 0.35, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.88 }}
      aria-hidden="true"
    />
  );
};
