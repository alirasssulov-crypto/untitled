import useReveal from "../hooks/useReveal";
import ring from "../assets/images/image1.png";

export default function About() {
  const [ref, shown] = useReveal(0.25);

  return (
    <section id="about" ref={ref} className="scroll-mt-28 bg-[#d9dbd6] px-5 py-24 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="text-xs text-ink/70">About Us</p>

        <img
          src={ring}
          alt="Bario Neal ring"
          loading="lazy"
          className={`mt-10 h-20 w-auto object-contain transition-all duration-1000 ease-out ${
            shown ? "rotate-0 scale-100 opacity-100" : "-rotate-12 scale-75 opacity-0"
          }`}
        />

        <h2
          className={`mt-12 text-3xl leading-snug transition-all duration-1000 ease-out md:text-5xl md:leading-tight ${
            shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Each Bario Neal piece is crafted with ethically sourced precious metals to reflect our
          commitment to human rights and environmental sustainability.
        </h2>
      </div>
    </section>
  );
}