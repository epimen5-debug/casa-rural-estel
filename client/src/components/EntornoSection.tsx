/* ============================================================
   ENTORNO SECTION — Casa Rural Estel
   Design: Light limestone background, image + text alternating
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const actividades = [
  {
    titulo: "Senderismo por la Sierra",
    descripcion:
      "El Parque Natural Sierra de Espadán ofrece una red de senderos para todos los niveles. Desde rutas familiares hasta travesías de varios días. La Ruta de las Fuentes, que parte desde Eslida, es especialmente recomendada.",
   imagen: "/images/entorno-senderismo.jpg",
    etiqueta: "Naturaleza",
  },
  {
    titulo: "Gastronomía y productos locales",
    descripcion:
      "Eslida es famosa por su miel artesanal, sus embutidos caseros y su aceite de oliva. Los mercados locales y los restaurantes del pueblo ofrecen una experiencia gastronómica auténtica con ingredientes de la tierra.",
    imagen: "/images/entorno-gastronomia.jpg",
    etiqueta: "Gastronomía",
  },
];

const lugaresInteres = [
  { nombre: "Castillo de Eslida", distancia: "5 min a pie", tipo: "Patrimonio" },
  { nombre: "Iglesia del Salvador (s. XVII)", distancia: "3 min a pie", tipo: "Patrimonio" },
  { nombre: "Ruta de las Fuentes", distancia: "Desde la puerta", tipo: "Senderismo" },
  { nombre: "Barranco de L'Oret", distancia: "15 min en coche", tipo: "Naturaleza" },
  { nombre: "Playas de Castellón", distancia: "40 min en coche", tipo: "Playa" },
  { nombre: "Grutas de San José (Vall d'Uixó)", distancia: "30 min en coche", tipo: "Excursión" },
  { nombre: "Segorbe (ciudad medieval)", distancia: "35 min en coche", tipo: "Cultura" },
  { nombre: "Mercado de Nules", distancia: "25 min en coche", tipo: "Mercado" },
];

function ActividadCard({ actividad, index }: { actividad: typeof actividades[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"} gap-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image */}
      <div className="lg:w-1/2 overflow-hidden">
        <img
          src={actividad.imagen}
          alt={actividad.titulo}
          className="w-full h-64 lg:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div
        className={`lg:w-1/2 flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-16 ${
          isEven ? "bg-[oklch(0.93_0.02_75)]" : "bg-[oklch(0.97_0.015_75)]"
        }`}
      >
        <span className="inline-block px-3 py-1 bg-[oklch(0.42_0.08_145/0.12)] text-[oklch(0.42_0.08_145)] font-['Lato'] text-xs tracking-widest uppercase mb-4 self-start border border-[oklch(0.42_0.08_145/0.25)]">
          {actividad.etiqueta}
        </span>
        <span className="block w-10 h-0.5 bg-[oklch(0.55_0.12_35)] mb-4" />
        <h3 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.04_45)] mb-4">
          {actividad.titulo}
        </h3>
        <p className="font-['Lato'] text-[oklch(0.42_0.04_60)] text-base leading-relaxed">
          {actividad.descripcion}
        </p>
      </div>
    </div>
  );
}

export default function EntornoSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const [tableVisible, setTableVisible] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTableVisible(true); },
      { threshold: 0.1 }
    );
    if (titleRef.current) obs1.observe(titleRef.current);
    if (tableRef.current) obs2.observe(tableRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section id="entorno" className="bg-[oklch(0.97_0.015_75)]">
      {/* Section header */}
      <div
        ref={titleRef}
        className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-0.5 bg-[oklch(0.55_0.12_35)]" />
          <span className="font-['Lato'] text-sm tracking-widest uppercase text-[oklch(0.55_0.12_35)]">
            El entorno
          </span>
        </div>
        <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.04_45)] max-w-xl">
          Eslida y la Sierra de Espadán
        </h2>
        <p className="mt-4 font-['Lato'] text-[oklch(0.42_0.04_60)] text-lg max-w-2xl leading-relaxed">
          Situado en pleno Parque Natural de la Sierra de Espadán, Eslida es un tesoro natural y cultural en la provincia de Castellón. Bosques de alcornoques, fuentes naturales, historia árabe y gastronomía auténtica te esperan.
        </p>
      </div>

      {/* Activity cards */}
      <div className="flex flex-col">
        {actividades.map((actividad, index) => (
          <ActividadCard key={actividad.titulo} actividad={actividad} index={index} />
        ))}
      </div>

      {/* Lugares de interés */}
      <div
        ref={tableRef}
        className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 transition-all duration-700 ${
          tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h3 className="font-['Playfair_Display'] text-2xl lg:text-3xl font-bold text-[oklch(0.22_0.04_45)] mb-8">
          Lugares de interés cercanos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lugaresInteres.map((lugar) => (
            <div
              key={lugar.nombre}
              className="p-5 bg-white border border-[oklch(0.88_0.03_75)] hover:border-[oklch(0.55_0.12_35)] hover:shadow-md transition-all duration-300 group"
            >
              <span className="inline-block px-2 py-0.5 bg-[oklch(0.55_0.12_35/0.10)] text-[oklch(0.38_0.10_35)] font-['Lato'] text-xs tracking-wide mb-3 rounded-sm">
                {lugar.tipo}
              </span>
              <h4 className="font-['Playfair_Display'] text-base font-semibold text-[oklch(0.22_0.04_45)] mb-1 leading-snug group-hover:text-[oklch(0.55_0.12_35)] transition-colors">
                {lugar.nombre}
              </h4>
              <p className="font-['Lato'] text-sm text-[oklch(0.52_0.04_60)]">
                {lugar.distancia}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
