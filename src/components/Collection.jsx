import useReveal from "../hooks/useReveal";
import clusterRings from "../assets/images/cluster-rings.png";
import bands from "../assets/images/bands.png";
import rings from "../assets/images/rings.png";
import customDesign from "../assets/images/custom-design.png";

const ITEMS = [
  { id: "engagement", label: "Cluster Rings", img: clusterRings, href: "#cluster-rings" },
  { id: "bands", label: "Bands", img: bands, href: "#bands" },
  { id: "rings", label: "Rings", img: rings, href: "#rings" },
  { id: "custom", label: "Custom Design", img: customDesign, href: "#custom-design" },
];

export default function Collection() {
  const [ref, shown] = useReveal(0.15);

  return (
    <section id="wedding" ref={ref} className="scroll-mt-28 bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs text-ink/70">Handcrafted Jewelry</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Wedding &amp; Engagement</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <a
              key={item.label}
              id={item.id}
              href={item.href}
              style={{ transitionDelay: shown ? `${i * 110}ms` : "0ms" }}
              className={`group scroll-mt-28 block transition-all duration-700 ease-out ${
                shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-mist">
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-center text-sm text-ink transition group-hover:text-sage-dark">
                {item.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}