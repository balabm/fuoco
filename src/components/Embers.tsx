"use client";

import { useEffect, useRef } from "react";

const COLORS = ["217,160,91", "241,205,145", "255,224,178", "196,110,60"];

interface Particle {
  x: number;
  y: number;
  vy: number;
  sway: number;
  phase: number;
  size: number;
  alpha: number;
  color: string;
}

export default function Embers({
  className = "",
  count = 40,
}: {
  className?: string;
  count?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const spawn = (fromBottom = true): Particle => ({
      x: Math.random() * w,
      y: fromBottom ? h + 10 + Math.random() * 30 : Math.random() * h,
      vy: 0.25 + Math.random() * 0.6,
      sway: 0.4 + Math.random() * 0.9,
      phase: Math.random() * Math.PI * 2,
      size: 0.8 + Math.random() * 2.1,
      alpha: 0.3 + Math.random() * 0.55,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const particles = Array.from({ length: count }, () => spawn(false));
    let t = 0;

    const tick = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        p.y -= p.vy;
        const x = p.x + Math.sin(t * 1.6 * p.sway + p.phase) * 14 * p.sway;
        const fade = Math.max(0, Math.min(1, (p.y / h) * 1.5));
        const twinkle = 0.65 + 0.35 * Math.sin(t * 7 + p.phase);
        const a = p.alpha * fade * twinkle;

        ctx.beginPath();
        ctx.fillStyle = `rgba(241,205,145,${a * 0.22})`;
        ctx.arc(x, p.y, p.size * 3.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color},${a})`;
        ctx.arc(x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.y < -12) Object.assign(p, spawn());
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [count]);

  return <canvas ref={ref} aria-hidden className={className} />;
}
