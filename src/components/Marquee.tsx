import Flame from "./Flame";

const items = [
  "Wood-Fired Pizza",
  "Handmade Pasta",
  "The Day's Catch",
  "Garden Salads",
  "Dolci",
  "Focaccia & Antipasti",
];

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-terracotta/25 bg-terracotta py-3.5">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {items.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center whitespace-nowrap"
              >
                <span className="px-6 font-serif text-lg italic tracking-wide text-cream sm:text-xl">
                  {item}
                </span>
                <Flame className="h-3.5 w-3.5 text-ember" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
