/* ============================================================
   HERO SECTION — Casa Rural Estel
   Design: Full-screen aerial image, text bottom-left, parallax overlay
   ============================================================ */

import { useEffect, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#casas");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
      >
        <img
          src="/images/hero-portada.jpg"
          alt="Casa Rural Estel - Eslida, Sierra de Espadán"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay — darker at bottom-left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.04_45/0.85)] via-[oklch(0.15_0.04_45/0.30)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.04_45/0.60)] via-transparent to-transparent" />

      {/* Content — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-16 lg:pb-20">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Location badge */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-[oklch(0.72_0.09_35)]" />
            <span className="text-[oklch(0.72_0.09_35)] font-['Lato'] text-sm tracking-widest uppercase">
              Eslida · Parque Natural Sierra de Espadán · Castellón
            </span>
          </div>

          {/* Star decorative motif */}
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[oklch(0.55_0.12_35)]"
                fill="currentColor"
              >
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            ))}
          </div>

          {/* Main title */}
          <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold text-[oklch(0.97_0.01_75)] leading-tight mb-4">
            Casa Rural
            <br />
            <em className="text-[oklch(0.75_0.18_100)] not-italic">Estel</em>
          </h1>

          {/* Subtitle */}
          <p className="font-['Lato'] text-lg sm:text-xl text-[oklch(0.88_0.02_75)] font-light leading-relaxed mb-8 max-w-lg">
            Bloque Rural Estel y Apartamento Rural Estel en el corazón de la Sierra de Espadán. Naturaleza, silencio y autenticidad mediterránea a 40 minutos de la costa.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const el = document.querySelector("#casas");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-[oklch(0.55_0.12_35)] text-[oklch(0.97_0.01_75)] font-['Lato'] font-semibold tracking-wide hover:bg-[oklch(0.45_0.10_35)] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Ver las casas
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#contacto");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 border border-[oklch(0.97_0.01_75/0.6)] text-[oklch(0.97_0.01_75)] font-['Lato'] font-semibold tracking-wide hover:border-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.97_0.01_75/0.1)] transition-all duration-300 rounded-sm"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 right-8 lg:right-16 text-[oklch(0.97_0.01_75/0.6)] hover:text-[oklch(0.97_0.01_75)] transition-colors animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={32} />
      </button>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[oklch(0.55_0.12_35)] via-[oklch(0.72_0.09_35)] to-transparent" />
    </section>
  );
}
