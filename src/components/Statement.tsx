"use client";

import { useEffect, useRef, useState } from "react";
import Embers from "./Embers";

const WORDS: { text: string; accent?: boolean }[] = [
  { text: "We" },
  { text: "cook" },
  { text: "with" },
  { text: "fire.", accent: true },
  { text: "Everything" },
  { text: "else" },
  { text: "follows.", accent: true },
];

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <Embers
        count={22}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      />
      <div
        ref={ref}
        className="relative mx-auto max-w-5xl px-5 text-center sm:px-8"
      >
        <p className="font-serif text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.08] text-olive">
          {WORDS.map((w, i) => (
            <span
              key={i}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`reveal reveal-blur mr-[0.24em] inline-block last:mr-0 ${
                on ? "reveal-visible" : ""
              } ${w.accent ? "italic text-terracotta" : ""}`}
            >
              {w.text}
            </span>
          ))}
        </p>
        <p
          style={{ transitionDelay: `${WORDS.length * 90 + 200}ms` }}
          className={`reveal mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-olive-soft ${
            on ? "reveal-visible" : ""
          }`}
        >
          A wood-fired oven, organic basil, the day&apos;s catch — and a room
          that glows like the coals themselves.
        </p>
      </div>
    </section>
  );
}
