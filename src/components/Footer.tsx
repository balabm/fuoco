import Flame from "./Flame";

// Fill these in to display contact details in the footer.
const contact = {
  phone: "",
  address: "",
  instagram: "",
};

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-20 overflow-hidden bg-olive text-cream">
      <div className="pointer-events-none absolute inset-0 bg-bamboo-weave opacity-[0.15]" />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-serif text-3xl font-semibold">
              <Flame className="h-6 w-6 text-ember" />
              Fuoco
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-cream/70">
              Wood-fired Italian kitchen — pizza, homemade pasta, seafood and
              dolci beneath glowing sage arches.
            </p>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ember">
              Explore
            </p>
            <ul className="space-y-2 text-[14px] text-cream/80">
              <li>
                <a href="#atmosphere" className="transition-colors hover:text-ember">
                  Atmosphere
                </a>
              </li>
              <li>
                <a href="#menu" className="transition-colors hover:text-ember">
                  Menu
                </a>
              </li>
              <li>
                <a href="#top" className="transition-colors hover:text-ember">
                  Back to top
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ember">
              Visit
            </p>
            <ul className="space-y-2 text-[14px] text-cream/80">
              {contact.address ? <li>{contact.address}</li> : null}
              {contact.phone ? (
                <li>
                  <a href={`tel:${contact.phone}`} className="hover:text-ember">
                    {contact.phone}
                  </a>
                </li>
              ) : null}
              {contact.instagram ? (
                <li>
                  <a
                    href={contact.instagram}
                    className="hover:text-ember"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              ) : null}
              {!contact.address && !contact.phone && !contact.instagram ? (
                <li className="text-cream/50">Contact details coming soon.</li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* giant watermark */}
        <p
          aria-hidden
          className="mt-14 select-none text-center font-serif text-[22vw] font-semibold leading-[0.8] text-transparent sm:text-[16vw]"
          style={{ WebkitTextStroke: "1.5px rgba(235,230,219,0.16)" }}
        >
          FUOCO
        </p>

        <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 py-6 text-[12px] text-cream/50">
          <span>© {new Date().getFullYear()} Fuoco. All rights reserved.</span>
          <span>Prices in INR (₹) · Regular / Large where noted</span>
        </div>
      </div>
    </footer>
  );
}
