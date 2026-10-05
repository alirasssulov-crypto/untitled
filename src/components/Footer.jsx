import { useState } from "react";

const COLUMNS_LEFT = [
  {
    title: "Get In Touch",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Appointments", href: "#appointments" },
      { label: "Philadelphia Shop", href: "#philadelphia" },
      { label: "NYC Shop", href: "#nyc" },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Get an Estimate", href: "#estimate" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Who We Are", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Reviews", href: "#reviews" },
      { label: "Press", href: "#press" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "https://instagram.com", external: true },
      { label: "Facebook", href: "https://facebook.com", external: true },
      { label: "Twitter", href: "https://twitter.com", external: true },
      { label: "Pinterest", href: "https://pinterest.com", external: true },
    ],
  },
];

const COLUMNS_RIGHT = [
  {
    title: "Policy",
    links: [
      { label: "Log In", href: "#login" },
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Returns & Exchanges", href: "#returns" },
      { label: "Accessibility", href: "#accessibility" },
    ],
  },
  {
    title: "FAQs",
    links: [
      { label: "Warranty & Repairs", href: "#warranty" },
      { label: "Ring Resizing", href: "#resizing" },
      { label: "Jewelry Care", href: "#care" },
      { label: "Hand-Made For You", href: "#handmade" },
      { label: "Shipping", href: "#shipping" },
      { label: "International Orders", href: "#international" },
      { label: "Pricing", href: "#pricing" },
      { label: "Covid Updates", href: "#covid" },
    ],
  },
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium text-ink">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-block text-sm text-ink/70 transition-all duration-200 hover:translate-x-1 hover:text-ink"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  const buttonText =
    status === "loading" ? "Sending..." : status === "success" ? "Subscribed" : "Subscribe";

  const message =
    status === "error"
      ? "Enter a valid email address."
      : status === "success"
      ? "Thanks! You're on the list."
      : "";

  return (
    <footer id="newsletter" className="bg-mist text-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.4fr_1fr] lg:gap-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:order-1">
            {COLUMNS_LEFT.map((c) => (
              <LinkColumn key={c.title} {...c} />
            ))}
          </div>

          <div className="order-first flex flex-col items-center text-center lg:order-2">
            <h2 className="text-4xl font-normal leading-tight md:text-5xl">
              We Find Always
              <br />
              in All Ways.
            </h2>

            <form onSubmit={handleSubmit} noValidate className="mt-8 w-full max-w-md">
              <div
                className={`flex items-center rounded-full border bg-white p-1 transition focus-within:ring-4 focus-within:ring-sage/30 ${
                  status === "error"
                  ? "border-red-400"
                    : "border-black/20 focus-within:border-sage-dark"
                }`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Email Address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-ink/50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-sage px-6 py-2 text-sm text-ink transition duration-200 hover:bg-sage-dark hover:text-white active:scale-95 disabled:opacity-60"
                >
                  {buttonText}
                </button>
              </div>

              <p
                role="status"
                className={`mt-3 h-5 text-xs transition-opacity duration-300 ${
                  message ? "opacity-100" : "opacity-0"
                } ${status === "error" ? "text-red-500" : "text-sage-dark"}`}
              >
                {message}
              </p>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:order-3">
            {COLUMNS_RIGHT.map((c) => (
              <LinkColumn key={c.title} {...c} />
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-ink/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Bario Neal. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 transition hover:text-ink"
          >
            Back to top
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}