import Reveal from "./Reveal";
import Flame from "./Flame";

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal blur>
          <div className="relative mx-auto max-w-2xl">
            {/* framed arch doorway */}
            <div className="absolute inset-x-[8%] bottom-0 top-[-3rem] rounded-t-full border border-sage-dark/30" />
            <div className="arch-cutout absolute inset-x-[14%] bottom-0 top-[-1rem] rounded-t-full opacity-80 shadow-arch" />

            <div className="relative px-8 pb-16 pt-28 text-center sm:pt-32">
              <Flame className="mx-auto h-8 w-8 text-terracotta" />
              <h2 className="mt-5 font-serif text-4xl font-semibold text-olive sm:text-5xl">
                Tonight, the oven is lit.
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-olive-soft">
                Wood-fired pizzas, handmade pasta and dolci — come sit beneath
                the arches.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream shadow-bamboo transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark hover:shadow-arch"
              >
                Find Us &amp; Reserve
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
