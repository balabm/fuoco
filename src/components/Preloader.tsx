"use client";

import { useEffect, useState } from "react";
import Flame from "./Flame";

export default function Preloader() {
  const [lifted, setLifted] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";

    const lift = setTimeout(() => {
      setLifted(true);
      window.__lenis?.start();
      document.body.style.overflow = "";
    }, 1100);
    const remove = setTimeout(() => setGone(true), 2100);

    return () => {
      clearTimeout(lift);
      clearTimeout(remove);
      window.__lenis?.start();
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        lifted ? "-translate-y-full" : ""
      }`}
    >
      <Flame className="hero-rise h-10 w-10 text-terracotta" />
      <p
        className="hero-rise mt-4 font-serif text-5xl font-semibold tracking-wide text-olive"
        style={{ animationDelay: "0.15s" }}
      >
        Fuoco
      </p>
      <span
        className="hero-rise mt-5 block h-px w-16 bg-terracotta"
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  );
}
