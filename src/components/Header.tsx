"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Atmosphere", href: "#atmosphere" },
  { label: "Menu", href: "#menu" },
  { label: "Find Us", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        const total =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? window.scrollY / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-cream/85 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "border-olive/15 shadow-card"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-serif text-3xl font-semibold tracking-wide text-olive transition-colors hover:text-terracotta"
        >
          Fuoco
        </a>
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[13px] font-medium uppercase tracking-[0.18em] text-olive-soft transition-colors hover:text-terracotta"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#menu"
          className="rounded-full bg-terracotta px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-cream shadow-bamboo transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark"
        >
          View Menu
        </a>
      </div>
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] bg-terracotta"
        style={{ width: `${progress * 100}%` }}
      />
    </header>
  );
}
