"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Maximize2, Minimize2, Flame } from "lucide-react";

export const Floating3DModel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const floatTimer = useRef<number | null>(null);
  const floatT = useRef(0);
  const basePos = useRef({ x: 0, y: 0 });

  // ── Mount & initial position ──────────────────────────────────────
  useEffect(() => {
    setHasMounted(true);
    const mobile = window.innerWidth < 640;
    setIsMobile(mobile);
    const startX = window.innerWidth - (mobile ? 90 : 110);
    const startY = window.innerHeight - (mobile ? 180 : 220);
    setPos({ x: startX, y: startY });
    basePos.current = { x: startX, y: startY };
  }, []);

  // ── Ambient float animation (orb only, when not dragging or open) ─
  useEffect(() => {
    if (isDragging || isOpen || !hasMounted) return;

    const animate = () => {
      floatT.current += 0.012;
      const t = floatT.current;
      const fx = Math.sin(t * 0.9) * 6;
      const fy = Math.sin(t) * 9;
      setPos({ x: basePos.current.x + fx, y: basePos.current.y + fy });
      floatTimer.current = requestAnimationFrame(animate);
    };

    floatTimer.current = requestAnimationFrame(animate);
    return () => {
      if (floatTimer.current !== null) cancelAnimationFrame(floatTimer.current);
    };
  }, [isDragging, isOpen, hasMounted]);

  // ── Global drag listeners ─────────────────────────────────────────
  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      const newX = clientX - dragOffset.current.x;
      const newY = clientY - dragOffset.current.y;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const el = isOpen ? panelRef.current : containerRef.current;
      const w = el?.offsetWidth ?? 80;
      const h = el?.offsetHeight ?? 80;
      const cx = Math.max(0, Math.min(newX, vw - w));
      const cy = Math.max(0, Math.min(newY, vh - h));
      setPos({ x: cx, y: cy });
      basePos.current = { x: cx, y: cy };
    };

    const onUp = () => setIsDragging(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging, isOpen]);

  const startDrag = useCallback(
    (e: React.MouseEvent | React.TouchEvent, refEl: HTMLElement | null) => {
      if (!refEl) return;
      setIsDragging(true);
      const cx = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const cy = "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
      dragOffset.current = { x: cx - pos.x, y: cy - pos.y };
      e.preventDefault();
    },
    [pos]
  );

  if (!hasMounted) return null;

  const panelW = isExpanded ? (isMobile ? "min(95vw, 700px)" : "700px") : (isMobile ? "min(90vw, 420px)" : "420px");
  const iframeH = isExpanded ? 460 : 300;

  return (
    <>
      {/* ─── Floating Orb Trigger ─────────────────────────────────── */}
      {!isOpen && (
        <div
          ref={containerRef}
          className="fixed z-[9000] w-16 h-16 cursor-grab active:cursor-grabbing select-none"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
          onMouseDown={(e) => startDrag(e, containerRef.current)}
          onTouchStart={(e) => startDrag(e, containerRef.current)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            if (!isDragging) {
              setIsOpen(true);
              setPos(basePos.current);
            }
          }}
        >
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full border border-truston-green/40 animate-ping opacity-50" />
          <span
            className="absolute inset-0 rounded-full border border-truston-green/20 animate-ping opacity-25"
            style={{ animationDelay: "0.6s", animationDuration: "2.2s" }}
          />

          {/* Glow halo */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-500 pointer-events-none"
            style={{
              background: isHovered
                ? "radial-gradient(circle, rgba(0,200,83,0.28) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 70%)",
              transform: isHovered ? "scale(1.7)" : "scale(1.3)",
            }}
          />

          {/* Orb body */}
          <div
            className="relative w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, #091d0e 0%, #050814 100%)",
              border: `1.5px solid ${isHovered ? "rgba(0,200,83,0.75)" : "rgba(0,200,83,0.5)"}`,
              boxShadow: isHovered
                ? "0 0 24px 8px rgba(0,200,83,0.4), 0 0 56px 20px rgba(0,200,83,0.12), inset 0 1px 0 rgba(0,200,83,0.2)"
                : "0 0 12px 3px rgba(0,200,83,0.25), 0 0 36px 10px rgba(0,200,83,0.07), inset 0 1px 0 rgba(0,200,83,0.12)",
              transition: "box-shadow 0.35s ease, border-color 0.35s ease",
            }}
          >
            <Flame
              className="w-7 h-7"
              style={{
                color: isHovered ? "#3af07c" : "#00c853",
                filter: `drop-shadow(0 0 ${isHovered ? "8px" : "4px"} #00c853)`,
                transform: isHovered ? "scale(1.15)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
            />
          </div>

          {/* Tooltip */}
          {isHovered && (
            <div
              className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest pointer-events-none"
              style={{
                background: "rgba(5,8,20,0.95)",
                border: "1px solid rgba(0,200,83,0.4)",
                color: "#00c853",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5), 0 0 12px rgba(0,200,83,0.1)",
              }}
            >
              🔥 3D Phoenix Model
            </div>
          )}
        </div>
      )}

      {/* ─── 3D Viewer Panel ──────────────────────────────────────── */}
      {isOpen && (
        <div
          ref={panelRef}
          className="fixed z-[9100] flex flex-col"
          style={{
            left: isMobile ? "50%" : `${Math.min(pos.x, Math.max(0, window.innerWidth - 720))}px`,
            top: isMobile ? "50%" : `${Math.min(pos.y, Math.max(0, window.innerHeight - (iframeH + 120)))}px`,
            transform: isMobile ? "translate(-50%, -50%)" : undefined,
            width: panelW,
            maxWidth: "95vw",
            borderRadius: "16px",
            overflow: "hidden",
            background: "linear-gradient(160deg, #07101a 0%, #050814 100%)",
            border: "1px solid rgba(0, 200, 83, 0.35)",
            boxShadow:
              "0 0 0 1px rgba(0,200,83,0.06), 0 32px 100px -24px rgba(0,0,0,0.9), 0 0 80px -10px rgba(0,200,83,0.18)",
          }}
        >
          {/* ── Title bar (drag handle) ── */}
          <div
            className="flex items-center justify-between px-4 py-2.5 cursor-grab active:cursor-grabbing select-none border-b border-white/[0.06]"
            style={{
              background: "linear-gradient(90deg, rgba(0,200,83,0.07) 0%, transparent 70%)",
            }}
            onMouseDown={(e) => startDrag(e, panelRef.current)}
            onTouchStart={(e) => startDrag(e, panelRef.current)}
          >
            <div className="flex items-center gap-2.5">
              {/* macOS traffic lights */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-3 h-3 rounded-full hover:opacity-80 transition-opacity"
                  style={{ background: "#ff5f57" }}
                  title="Close"
                />
                <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                <button
                  type="button"
                  onClick={() => setIsExpanded((p) => !p)}
                  className="w-3 h-3 rounded-full hover:opacity-80 transition-opacity"
                  style={{ background: "#28c840" }}
                  title="Expand"
                />
              </div>

              <span className="w-px h-4 bg-white/10" />

              <div className="flex items-center gap-1.5">
                <Flame
                  className="w-3.5 h-3.5"
                  style={{ color: "#00c853", filter: "drop-shadow(0 0 4px #00c853)" }}
                />
                <span
                  className="text-[11px] font-mono font-bold uppercase tracking-widest"
                  style={{ color: "#00c853" }}
                >
                  Phoenix 3D Model
                </span>
                <span
                  className="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold"
                  style={{
                    color: "rgba(0,200,83,0.8)",
                    background: "rgba(0,200,83,0.08)",
                    border: "1px solid rgba(0,200,83,0.2)",
                  }}
                >
                  INTERACTIVE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsExpanded((p) => !p)}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                style={{ color: "#64748b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00c853")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                title={isExpanded ? "Minimize" : "Expand"}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                style={{ color: "#64748b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f87171")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ── Sketchfab Iframe ── */}
          <div
            className="relative w-full"
            style={{
              height: `${iframeH}px`,
              transition: "height 0.4s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Green corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-truston-green/50 z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-truston-green/50 z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-truston-green/50 z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-truston-green/50 z-10 pointer-events-none" />

            <iframe
              title="phoenix bird"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/844ba0cf144a413ea92c779f18912042/embed?autospin=1&autostart=1&ui_theme=dark&ui_color=00c853&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_annotations=0"
              className="w-full h-full"
              style={{ display: "block", background: "#050814" }}
            />
          </div>

          {/* ── Footer ── */}
          <div
            className="px-4 py-2 flex items-center justify-between border-t border-white/[0.05]"
            style={{ background: "rgba(0,0,0,0.35)" }}
          >
            <span className="text-[10px] font-mono flex items-center gap-1.5" style={{ color: "#475569" }}>
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#00c853" }}
              />
              Drag title bar · Scroll to zoom · Click to rotate
            </span>
            <a
              href="https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-[10px] font-mono transition-colors"
              style={{ color: "#475569" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00c853")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Sketchfab ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
};
