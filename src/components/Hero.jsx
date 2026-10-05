import { useEffect, useState } from "react";
import heroImg from "../assets/images/hero.jpg";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const reveal = (delay) => ({
    style: { transitionDelay: `${delay}ms` },
    className: `transition-all duration-1000 ease-out ${
      mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`,
  });

  return (
    <section id="fine-jewelry" className="relative min-h-[85vh] overflow-hidden bg-[#c9a98f] md:min-h-[90vh]">
      {/* фото */}
      <img
        src={heroImg}
        alt="Model wearing handcrafted gold jewelry"
        className={`absolute inset-0 h-full w-full object-cover object-[60%_20%] transition-transform duration-[2500ms] ease-out ${
          mounted ? "scale-100" : "scale-110"
        }`}
      />

      {/* затемнение снизу для читаемости текста на телефоне */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent md:from-transparent" />

      {/* вкладка Reviews слева */}
      <a
        href="#reviews"
        className="fixed left-0 top-1/2 z-40 hidden -translate-x-1 items-center gap-2 rounded-r-md bg-[#f1c9b8] px-2 py-4 text-xs tracking-wide text-ink shadow-md transition-transform duration-300 hover:translate-x-0 sm:flex [writing-mode:vertical-rl]"
      >
        <span>★</span>
        Reviews
      </a>

      {/* контент */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end gap-8 px-5 pb-12 md:min-h-[90vh] md:flex-row md:items-end md:justify-between md:px-8 md:pb-16">
        <div className="max-w-sm text-center md:text-left">
          <h1 {...reveal(200)} className={`${reveal(200).className} text-4xl leading-tight text-ink md:text-5xl`}>
            We Find Always
            <br />
            in All Ways
          </h1>

          <p {...reveal(400)} className={`${reveal(400).className} mt-4 text-sm leading-6 text-ink/90`}>
            Our design ethos is gender-neutral and size-inclusive.
          </p>

          <a
            href="#wedding"
            style={{ transitionDelay: "600ms" }}
            className={`mt-6 inline-block rounded-full bg-white/90 px-10 py-2.5 text-sm text-ink backdrop-blur transition-all duration-1000 ease-out hover:bg-ink hover:text-white active:scale-95 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Shop Rings
          </a>
        </div>

        <a
          href="#appointments"
          style={{ transitionDelay: "800ms" }}
          className={`self-center rounded-full bg-white/90 px-10 py-2.5 text-sm text-ink backdrop-blur transition-all duration-1000 ease-out hover:bg-ink hover:text-white active:scale-95 md:self-end ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}