import Reveal from "./Reveal";

const pillars = [
  {
    num: "01",
    title: "Fire",
    text: "Our wood-fired oven runs hot all service — blistered crusts, charred edges, and that unmistakable ember-kissed flavor.",
    icon: (
      <path d="M12 2c.6 3.2-.4 5.2-2 7.2-1.3 1.6-2.5 3.2-2.5 5.3a4.5 4.5 0 0 0 9 0c0-1.2-.4-2.3-1-3.3-.5 1-1.1 1.7-2 2.1.9-2.3.6-4.6-.3-6.6C12.6 5.4 12 3.8 12 2Z" />
    ),
  },
  {
    num: "02",
    title: "Flour",
    text: "Dough stretched by hand, pasta sheets rolled in-house daily, focaccia baked for every basket of soup and salad.",
    icon: (
      <path d="M12 22V10M12 10c-3 0-5-2.2-5-5 2.8 0 5 2.2 5 5Zm0 0c3 0 5-2.2 5-5-2.8 0-5 2.2-5 5Zm-5 8c-3 0-5-2.2-5-5 2.8 0 5 2.2 5 5Zm0 0c3 0 5-2.2 5-5-2.8 0-5 2.2-5 5Z" />
    ),
  },
  {
    num: "03",
    title: "The Sea",
    text: "The day's catch goes straight from the boats into our seafood spaghetti, soups and grilled plates.",
    icon: (
      <path d="M2 12c2-2.2 4-3.3 6-3.3S12 10 14 12s4 3.3 6 3.3 2-0.5 2-0.5M2 18c2-2.2 4-3.3 6-3.3s4 1.3 6 3.3 4 3.3 6 3.3" />
    ),
  },
];

export default function Craft() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-terracotta">
              Our Craft
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-olive sm:text-5xl">
              Three things we never compromise
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-olive-soft">
              Everything on the menu — all nine chapters of it — is built on
              the same three foundations.
            </p>
          </Reveal>

          <div className="space-y-2">
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 120}>
                <div className="group flex gap-6 rounded-2xl border border-transparent px-4 py-6 transition-colors duration-300 hover:border-olive/10 hover:bg-white/40 sm:px-6">
                  <span className="font-sans text-sm font-semibold tabular-nums text-terracotta/70">
                    {p.num}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-7 w-7 shrink-0 text-sage-dark transition-colors duration-300 group-hover:text-terracotta"
                  >
                    {p.icon}
                  </svg>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-olive">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[14px] leading-relaxed text-olive-soft">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
