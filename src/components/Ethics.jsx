import useReveal from "../hooks/useReveal";
import hands from "../assets/images/image.png";

const VALUES = [
  "Traceable Gems",
  "Reclaimed Metals",
  "Fairmined Gold",
  "Love in All Ways",
  "Small Footprint",
];

export default function Ethics() {
  const [ref, shown] = useReveal(0.2);

  return (
    <section id="ethics" ref={ref} className="scroll-mt-28">
      <div className="grid md:grid-cols-2">
        <div className="min-h-[320px] overflow-hidden md:min-h-[560px]">
          <img
            src={hands}
            alt="Hands holding a handcrafted gold ring"
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${
              shown ? "scale-100" : "scale-110"
            }`}
          />
        </div>

        <div
          className={`flex flex-col items-center justify-center bg-sage px-8 py-16 text-center transition-all duration-700 ease-out md:px-14 ${
            shown ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
          }`}
        >
          <p className="text-xs text-ink/70">Sustainability</p>
          <h2 className="mt-3 text-3xl md:text-4xl">An Ethical Approach</h2>
          <p className="mt-10 max-w-md text-sm leading-7 text-ink/90">
            Making jewelry requires responsibility to the earth that creates our materials and
            respect for the people who inhabit it. From day one, we committed to creating designs
            of ethical origins from mine to market. Today, we&apos;re a proud leader in sustainable
            sourcing and mindful production.
          </p>
          <a
            href="#about"
            className="mt-8 rounded-full bg-white px-8 py-2.5 text-sm text-ink transition duration-200 hover:bg-ink hover:text-white active:scale-95"
          >
            Learn More
          </a>
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-y-3 bg-mist px-5 py-4 text-center text-xs text-ink sm:grid-cols-3 md:grid-cols-5">
        {VALUES.map((v) => (
          <li key={v} className="transition-colors hover:text-sage-dark">
            {v}
          </li>
        ))}
      </ul>
    </section>
  );
}