/* ============================================================
   BIENVENIDA SECTION — Casa Rural Estel
   Design: Limestone cream background, asymmetric layout, star motif
   ============================================================ */

import { useEffect, useRef, useState } from "react";

export default function BienvenidaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[oklch(0.97_0.015_75)] py-20 lg:py-28 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-[oklch(0.55_0.12_35)]" />
              <span className="font-['Lato'] text-sm tracking-widest uppercase text-[oklch(0.55_0.12_35)]">
                Bienvenidos
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.04_45)] leading-tight mb-6">
              Donde el tiempo se detiene
            </h2>
            <p className="font-['Lato'] text-[oklch(0.42_0.04_60)] text-lg leading-relaxed mb-6">
              Situado en pleno <strong className="text-[oklch(0.22_0.04_45)]">Parque Natural de la Sierra de Espadán</strong>, Eslida es un tesoro natural y cultural en la provincia de Castellón, a poco más de 40 minutos de la costa.
            </p>
            <p className="font-['Lato'] text-[oklch(0.42_0.04_60)] text-base leading-relaxed mb-6">
              Su entorno, dominado por frondosos bosques de alcornoques, castaños y pinos, lo convierte en un destino privilegiado para los amantes del senderismo, la bicicleta de montaña o simplemente para quienes disfrutan de largos paseos por la naturaleza.
            </p>
            <p className="font-['Lato'] text-[oklch(0.42_0.04_60)] text-base leading-relaxed mb-8">
              En <em className="font-['Playfair_Display'] text-[oklch(0.55_0.12_35)] not-italic text-lg">Casa Rural Estel</em> — "estel" significa estrella en valenciano — encontrarás cuatro casas auténticas, construidas con piedra local, que te acogerán como en casa.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: "★", label: "Autenticidad", desc: "Arquitectura rural valenciana original" },
                { num: "★", label: "Naturaleza", desc: "En pleno Parque Natural Sierra Espadán" },
                { num: "★", label: "Tranquilidad", desc: "Lejos del ruido, cerca de todo" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <span className="text-[oklch(0.55_0.12_35)] text-xl">★</span>
                  <h4 className="font-['Playfair_Display'] text-base font-semibold text-[oklch(0.22_0.04_45)]">
                    {item.label}
                  </h4>
                  <p className="font-['Lato'] text-xs text-[oklch(0.52_0.04_60)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: decorative image grid */}
          <div className="relative">
            {/* Large decorative number */}
            <div
              className="absolute -top-8 -right-4 font-['Playfair_Display'] text-[180px] font-bold leading-none select-none pointer-events-none"
              style={{ color: "oklch(0.55 0.12 35 / 0.06)" }}
            >
              E
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663370219074/GGHpDxpIooACThjP.jpg"
                  alt="Casa rural exterior"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden mt-8">
                <img
                  src="/images/bienvenida-interior.jpg"
                  alt="Interior acogedor"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden -mt-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663370219074/ZbEWXyplWVzSaiRm.jpg"
                  alt="Naturaleza Sierra Espadán"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden mt-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663370219074/wHUBGStLKFiGtkpe.jpg"
                  alt="Barbacoa exterior"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Decorative terracotta block */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[oklch(0.55_0.12_35/0.15)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
