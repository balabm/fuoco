"use client";

import { useEffect, useRef } from "react";
import Embers from "./Embers";

export default function Hero() {
  const archRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        if (archRef.current) {
          archRef.current.style.transform = `translateY(${y * 0.14}px)`;
        }
        if (textRef.current) {
          textRef.current.style.transform = `translateY(${y * 0.2}px)`;
          textRef.current.style.opacity = `${Math.max(0, 1 - y / 480)}`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 bg-bamboo-weave opacity-25" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-32 lg:pt-24">
        <div ref={textRef} className="will-change-transform">
          <p
            className="hero-rise mb-5 inline-block rounded-full border border-sage-dark/40 bg-sage-light/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-dark"
            style={{ animationDelay: "0.15s" }}
          >
            Wood-Fired Italian Kitchen
          </p>
          <h1
            className="hero-rise font-serif text-6xl font-semibold leading-[0.95] text-olive sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.3s" }}
          >
            Fuoco
          </h1>
          <p
            className="hero-rise mt-3 font-serif text-2xl italic text-terracotta sm:text-3xl"
            style={{ animationDelay: "0.45s" }}
          >
            fire, flour &amp; the day&apos;s catch
          </p>
          <p
            className="hero-rise mt-6 max-w-md text-[15px] leading-relaxed text-olive-soft"
            style={{ animationDelay: "0.6s" }}
          >
            Hand-stretched pizza from the wood-fired oven, homemade pasta,
            garden-fresh salads and dolci — served beneath glowing sage arches
            and woven bamboo light.
          </p>
          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.75s" }}
          >
            <a
              href="#menu"
              className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cream shadow-bamboo transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark hover:shadow-arch"
            >
              Explore the Menu
            </a>
            <a
              href="#atmosphere"
              className="rounded-full border border-olive/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-olive transition-all hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
            >
              The Space
            </a>
          </div>
        </div>

        {/* the signature glowing sage arch, embers rising inside */}
        <div
          ref={archRef}
          className="relative mx-auto w-full max-w-sm will-change-transform lg:max-w-md"
        >
          <div
            className="hero-rise arch-cutout relative aspect-[3/4] w-full overflow-hidden rounded-t-full shadow-arch"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flicker absolute inset-x-[14%] bottom-0 top-[12%] rounded-t-full bg-arch-glow-core shadow-arch-inner" />
            <Embers className="absolute inset-x-[14%] bottom-0 top-[12%] h-[88%] w-[72%] rounded-t-full" />
            <div className="absolute left-1/2 top-0 h-[22%] w-px -translate-x-1/2 bg-olive/40" />
            <div className="float-soft absolute left-1/2 top-[22%] h-10 w-14 -translate-x-1/2 rounded-b-full bg-ember/80 bg-bamboo-weave shadow-bamboo" />
            <div className="absolute inset-x-[22%] bottom-[10%] h-3 rounded-full bg-[#F6F4EE] shadow-card" />
            <div className="absolute bottom-0 left-1/2 h-[10%] w-1.5 -translate-x-1/2 bg-[#9B9A92]" />
          </div>
          <p
            className="hero-rise mt-5 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-olive-soft"
            style={{ animationDelay: "0.9s" }}
          >
            the sage arch · our signature wall
          </p>
        </div>
      </div>

      {/* scroll cue */}
      <div className="hero-rise absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex" style={{ animationDelay: "1.2s" }}>
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-olive-soft">
          scroll
        </span>
        <span className="scroll-cue block h-10 w-px bg-terracotta" />
      </div>
    </section>
  );
}
