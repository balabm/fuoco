"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { formatPrice, menuData, slugify, type MenuItem } from "@/lib/menu";
import Reveal from "./Reveal";
import Flame from "./Flame";

const tabs = menuData.categories.map((c) => ({
  name: c.name,
  id: slugify(c.name),
}));

function VegDot({ veg }: { veg?: boolean }) {
  if (veg === undefined) return null;
  return (
    <span
      title={veg ? "Vegetarian" : "Non-vegetarian"}
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      className={`mt-[7px] inline-block h-2 w-2 shrink-0 rounded-full ${
        veg ? "bg-sage-dark" : "bg-terracotta"
      }`}
    />
  );
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group -mx-3 rounded-xl px-3 py-2 transition-colors duration-300 hover:bg-white/50">
      <div className="flex items-baseline gap-2.5">
        <VegDot veg={item.veg} />
        <div className="grid min-w-0 flex-1 grid-cols-[auto_1fr_auto] items-baseline gap-x-3">
          <h4 className="font-serif text-lg font-bold leading-snug text-olive transition-colors duration-300 group-hover:text-terracotta">
            {item.name}
          </h4>
          <span
            aria-hidden
            className="mb-1 border-b border-dotted border-olive/30 transition-colors duration-300 group-hover:border-terracotta/50"
          />
          <span className="whitespace-nowrap font-sans text-[15px] font-semibold tabular-nums text-terracotta">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
      {item.description ? (
        <p className="mt-1 max-w-prose pl-[18px] text-[13px] leading-relaxed text-olive-soft">
          {item.description}
        </p>
      ) : null}
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState(tabs[0].id);
  const [query, setQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);

  const filtering = query.trim().length > 0 || vegOnly;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id.replace("menu-", ""));
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const t of tabs) {
      const el = document.getElementById(`menu-${t.id}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // keep the active pill visible inside the scrollable tab bar
  useEffect(() => {
    tabBarRef.current
      ?.querySelector(`[data-tab="${active}"]`)
      ?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(`menu-${id}`);
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -150 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const results = useMemo(() => {
    if (!filtering) return null;
    const q = query.trim().toLowerCase();
    const match = (i: MenuItem) =>
      (!vegOnly || i.veg) &&
      (!q ||
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q));
    return menuData.categories
      .map((cat) => ({
        name: cat.name,
        items: [
          ...(cat.items ?? []),
          ...(cat.subcategories ?? []).flatMap((s) => s.items),
        ].filter(match),
      }))
      .filter((g) => g.items.length > 0);
  }, [query, vegOnly, filtering]);

  const resultCount = results?.reduce((n, g) => n + g.items.length, 0) ?? 0;

  return (
    <section id="menu" className="scroll-mt-16">
      {/* arch-topped container mirrors the restaurant's wall cutouts */}
      <div className="rounded-t-[3rem] border-t border-olive/10 bg-cream-dark/60 pb-24 pt-16 sm:rounded-t-[4rem]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mb-4">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-terracotta">
                  <Flame className="h-3.5 w-3.5" />
                  The Menu
                </p>
                <h2 className="font-serif text-4xl font-semibold text-olive sm:text-5xl">
                  From the wood-fired oven
                </h2>
              </div>
              <div className="flex w-full max-w-sm items-center gap-3 sm:w-auto">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="I'm craving… (try 'pesto')"
                  className="w-full rounded-full border border-olive/20 bg-cream px-5 py-2.5 text-sm text-olive placeholder:text-olive-soft/60 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/25 sm:w-56"
                />
                <button
                  onClick={() => setVegOnly((v) => !v)}
                  aria-pressed={vegOnly}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    vegOnly
                      ? "border-sage-dark bg-sage-dark text-cream"
                      : "border-olive/25 text-olive-soft hover:border-sage-dark hover:text-sage-dark"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-current" />
                  Veg
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-olive-soft">
              <span>Dual prices denote Regular / Large.</span>
              <span>Add chicken to any vegetarian pasta for ₹100.</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-sage-dark" /> Vegetarian
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-terracotta" /> Non-veg
              </span>
            </div>
          </Reveal>
        </div>

        {/* sticky category tabs with scroll-spy */}
        {!filtering && (
          <div className="sticky top-16 z-30 border-y border-olive/10 bg-cream/95 backdrop-blur-md">
            <div
              ref={tabBarRef}
              className="no-scrollbar mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 sm:px-6"
            >
              {tabs.map((t) => (
                <button
                  key={t.id}
                  data-tab={t.id}
                  aria-current={active === t.id ? "true" : undefined}
                  onClick={() => scrollTo(t.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    active === t.id
                      ? "scale-105 bg-terracotta text-cream shadow-bamboo"
                      : "text-olive-soft hover:bg-sage-light/40 hover:text-olive"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {filtering ? (
          <div className="mx-auto max-w-6xl space-y-12 px-5 pt-12 sm:px-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-olive-soft">
              {resultCount} {resultCount === 1 ? "dish" : "dishes"} found
            </p>
            {resultCount === 0 && (
              <p className="font-serif text-2xl italic text-olive-soft">
                Nothing on the menu matches — try &ldquo;prawn&rdquo;,
                &ldquo;mushroom&rdquo; or &ldquo;chocolate&rdquo;.
              </p>
            )}
            {results!.map((g) => (
              <div key={g.name}>
                <h3 className="mb-5 font-serif text-2xl font-semibold text-olive">
                  {g.name}
                </h3>
                <div className="grid gap-x-12 gap-y-4 lg:grid-cols-2">
                  {g.items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-6xl space-y-16 px-5 pt-14 sm:px-8">
            {menuData.categories.map((cat, ci) => (
              <section
                key={cat.name}
                id={`menu-${slugify(cat.name)}`}
                className="scroll-mt-40"
              >
                <Reveal>
                  <header className="mb-8 flex items-baseline gap-4 border-b border-olive/15 pb-4">
                    <span className="font-sans text-sm font-semibold tabular-nums text-terracotta/70">
                      {String(ci + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl font-semibold text-olive sm:text-4xl">
                        {cat.name}
                      </h3>
                      {cat.description ? (
                        <p className="mt-1 font-serif text-lg italic text-terracotta">
                          {cat.description}
                        </p>
                      ) : null}
                    </div>
                  </header>
                </Reveal>

                {cat.items ? (
                  <div className="grid gap-x-12 gap-y-4 lg:grid-cols-2">
                    {cat.items.map((item, i) => (
                      <Reveal key={item.name} delay={Math.min(i, 5) * 70}>
                        <MenuItemRow item={item} />
                      </Reveal>
                    ))}
                  </div>
                ) : null}

                {cat.subcategories?.map((sub) => (
                  <div key={sub.name} className="mb-10 last:mb-0">
                    <Reveal>
                      <h4 className="mb-6 inline-block rounded-t-full border-b-2 border-sage bg-sage-light/30 px-6 pb-1 pt-3 font-serif text-xl font-semibold text-sage-dark">
                        {sub.name}
                      </h4>
                    </Reveal>
                    <div className="grid gap-x-12 gap-y-4 lg:grid-cols-2">
                      {sub.items.map((item, i) => (
                        <Reveal key={item.name} delay={Math.min(i, 5) * 70}>
                          <MenuItemRow item={item} />
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
