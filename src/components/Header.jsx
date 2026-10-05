import { useEffect, useRef, useState } from "react";

const NAV = [
  { label: "Engagement", href: "#engagement" },
  { label: "Wedding", href: "#wedding" },
  { label: "Custom", href: "#custom" },
  { label: "Fine Jewelry", href: "#fine-jewelry" },
  { label: "Ethics", href: "#ethics" },
  { label: "About", href: "#about" },
];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

export default function Header({ cartCount = 0, onCartClick, onSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [bump, setBump] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > lastY && y > 120) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (cartCount === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 350);
    return () => clearTimeout(t);
  }, [cartCount]);

  const submitSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    if (onSearch) onSearch(q);
    else console.log("search:", q);
    setSearchOpen(false);
    setQuery("");
  };

  const hideHeader = hidden && !menuOpen && !searchOpen;

  return (
    <header className="sticky top-0 z-50 animate-slide-down">
      <div
        className={`transition-transform duration-500 ease-out ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="bg-sage/30 text-center text-xs text-ink">
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 px-4 py-2 transition-opacity hover:opacity-60"
          >
            Read our{" "}
            <span className="underline underline-offset-4">Customer Reviews</span>
          </a>
        </div>

        <div
          className={`bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
            <a
              href="#top"
              className="shrink-0 text-lg font-medium tracking-wide text-ink"
            >
              Bario Neal
            </a>

            <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-sm text-ink"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-1 text-ink">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(!searchOpen)}
                className="rounded-full p-2.5 transition hover:bg-black/5 active:scale-90"
              >
                <SearchIcon />
              </button>

              <button
                type="button"
                aria-label="Cart"
                onClick={onCartClick}
                className="relative rounded-full p-2.5 transition hover:bg-black/5 active:scale-90"
              >
                <BagIcon />
                <span
                  className={`absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-ink px-1 text-[10px] leading-none text-white ${
                    bump ? "animate-pop" : ""
                  }`}
                >
                  {cartCount}
                </span>
              </button>

              <button
                type="button"
                aria-label="Menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="ml-1 grid h-10 w-10 place-items-center rounded-full transition hover:bg-black/5 lg:hidden"
              >
                <span className="relative block h-3.5 w-5">
                  <span
                    className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${
                      menuOpen ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-px w-5 bg-ink transition-opacity duration-200 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${
                      menuOpen ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {searchOpen && (
            <form
              onSubmit={submitSearch}
              className="animate-fade-in border-t border-black/5"
            >
              <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-3">
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search rings, bands, custom design..."
                  className="w-full rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm outline-none transition focus:border-sage-dark focus:ring-4 focus:ring-sage/30"
                />
                <button
                  type="submit"
                  className="rounded-full bg-ink px-5 py-2.5 text-sm text-white transition hover:bg-sage-dark active:scale-95"
                >
                  Search
                </button>
              </div>
            </form>
          )}

          <div
            className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out lg:hidden ${
              menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <nav className="min-h-0" aria-label="Mobile">
              <ul className="flex flex-col px-5 pb-6 pt-2">
                {NAV.map((item, i) => (
                  <li
                    key={item.href}
                    style={{ transitionDelay: menuOpen ? `${i * 45}ms` : "0ms" }}
                    className={`border-b border-black/5 transition-all duration-500 ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                        }`}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3.5 text-base text-ink transition hover:pl-2 hover:text-sage-dark"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}