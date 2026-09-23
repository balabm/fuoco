"use client";

import { useEffect, useRef, useState } from "react";

const panels = [
  {
    title: "The Dining Room",
    caption: "Crisp white tables & soft grey seating",
    body: "bg-gradient-to-b from-[#F6F4EE] via-[#E8E4DA] to-[#B9B7AE]",
    inner: (
      <>
        <div className="absolute inset-x-[16%] bottom-[14%] h-2.5 rounded-full bg-white/90 shadow-card" />
        <div className="absolute bottom-[10%] left-[30%] h-[12%] w-8 rounded-t-md bg-[#8B897F]/60" />
        <div className="absolute bottom-[10%] right-[30%] h-[12%] w-8 rounded-t-md bg-[#8B897F]/60" />
      </>
    ),
  },
  {
    title: "Sage Arches",
    caption: "Backlit cutouts in signature sage green",
    body: "bg-sage",
    inner: (
      <>
        <div className="flicker absolute inset-x-[18%] bottom-0 top-[10%] rounded-t-full bg-arch-glow-core" />
        <div className="absolute inset-y-0 left-[6%] w-px bg-olive/15" />
        <div className="absolute inset-y-0 right-[6%] w-px bg-olive/15" />
      </>
    ),
  },
  {
    title: "Bamboo & Ember",
    caption: "Woven pendant light over warm wood",
    body: "bg-gradient-to-b from-[#C88A4B] via-[#A5662F] to-[#6E4520]",
    inner: (
      <>
        <div className="absolute inset-0 bg-bamboo-weave opacity-60" />
        <div className="absolute left-1/2 top-0 h-[26%] w-px -translate-x-1/2 bg-olive/50" />
        <div className="float-soft absolute left-1/2 top-[26%] h-12 w-20 -translate-x-1/2 rounded-b-full bg-ember bg-bamboo-weave shadow-bamboo" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-olive/40 to-transparent" />
      </>
    ),
  },
  {
    title: "The Wood-Fired Oven",
    caption: "Four hundred degrees of patience",
    body: "bg-gradient-to-b from-[#241811] via-[#1A120C] to-[#0E0906]",
    inner: (
      <>
        <div className="flicker absolute inset-x-[14%] bottom-[28%] h-[34%] rounded-t-full bg-arch-glow-core" />
        <div className="absolute inset-x-[30%] bottom-[30%] h-2 rounded-full bg-ember/70 blur-[2px]" />
      </>
    ),
  },
  {
    title: "Golden Hour",
    caption: "Sunset held indoors, every evening",
    body: "bg-gradient-to-b from-[#F0D9A8] via-[#D89B5A] to-[#8C5A2E]",
    inner: (
      <>
        <div className="absolute left-1/2 top-[24%] h-16 w-16 -translate-x-1/2 rounded-full bg-[#FFF3D6] opacity-80 blur-[6px]" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-olive/50 to-transparent" />
      </>
    ),
  },
];

export default function Atmosphere() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sec = sectionRef.current;
        const track = trackRef.current;
        if (!sec || !track) return;
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / total));
        const max = track.scrollWidth - window.innerWidth;
        track.style.transform = `translate3d(${-p * max}px, 0, 0)`;
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="atmosphere" ref={sectionRef} className="relative h-[380vh]">
      {/* drop interior photos into the frames below as <img className="warm-photo"> */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-20 z-10 w-full max-w-6xl -translate-x-1/2 px-5 sm:px-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-terracotta">
            Atmosphere
          </p>
          <h2 className="font-serif text-4xl font-semibold text-olive sm:text-5xl">
            Dine beneath the arches
          </h2>
        </div>

        <div ref={trackRef} className="flex w-max items-center gap-[6vw] px-[8vw] will-change-transform">
          {panels.map((p, i) => (
            <figure key={p.title} className="w-[68vw] shrink-0 sm:w-[44vw] lg:w-[30vw] xl:w-[25vw]">
              <div
                className={`relative aspect-[3/4] overflow-hidden rounded-t-full shadow-arch ${p.body}`}
              >
                {p.inner}
                <div className="warm-photo absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-olive/45 via-transparent to-transparent" />
                <span className="absolute left-5 top-[12%] font-serif text-lg italic text-cream/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <span className="block font-serif text-2xl font-semibold text-cream">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-cream/70">
                    {p.caption}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 w-44 -translate-x-1/2">
          <div className="h-px w-full bg-olive/20">
            <div
              className="h-full bg-terracotta transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-olive-soft">
            keep scrolling
          </p>
        </div>
      </div>
    </section>
  );
}
