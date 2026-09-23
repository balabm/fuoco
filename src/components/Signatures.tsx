import Reveal from "./Reveal";

const dishes = [
  {
    name: "Margherita",
    note: "San Marzano tomato, fior di latte, basil — the benchmark",
    price: "₹350 / ₹400",
    art: "radial-gradient(circle at 50% 62%, #E8B04B 0%, #C96F3B 42%, #8C4222 72%, #5E2D16 100%)",
  },
  {
    name: "Carbonara",
    note: "Bacon & egg folded through olive oil, parmesan snow",
    price: "₹590",
    art: "radial-gradient(circle at 50% 60%, #F3E3B8 0%, #D9B978 45%, #A97F3F 78%, #6E4E24 100%)",
  },
  {
    name: "Seafood Spaghetti",
    note: "The day's catch, garlic, parsley & tomato concasse",
    price: "₹590",
    art: "radial-gradient(circle at 50% 60%, #9FB8AE 0%, #5E8A8C 45%, #36555C 78%, #1E3438 100%)",
  },
  {
    name: "Tiramisu",
    note: "Mascarpone clouds over coffee-soaked biscuit",
    price: "₹270",
    art: "radial-gradient(circle at 50% 60%, #E4CFAF 0%, #B98E5F 40%, #6F4A2C 75%, #3E2718 100%)",
  },
];

export default function Signatures() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-terracotta">
            Signatures
          </p>
          <h2 className="font-serif text-4xl font-semibold text-olive sm:text-5xl">
            Dishes we&apos;re known for
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
          {dishes.map((d, i) => (
            <Reveal key={d.name} delay={i * 110} blur>
              <figure className="group cursor-default">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full shadow-arch transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-bamboo">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ background: d.art }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive/55 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-center sm:p-5">
                    <span className="block font-serif text-lg font-semibold text-cream sm:text-xl">
                      {d.name}
                    </span>
                    <span className="mt-1 block font-sans text-[13px] font-semibold text-ember">
                      {d.price}
                    </span>
                  </figcaption>
                </div>
                <p className="mx-auto mt-4 max-w-[22ch] text-center text-[12px] leading-relaxed text-olive-soft">
                  {d.note}
                </p>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
