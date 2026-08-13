/* ============================================================
   CASAS SECTION — Casa Rural Estel
   Design: Alternating image-text layout, card hover reveals
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Users, Bed, Bath, Wifi, Flame, TreePine, Play } from "lucide-react";

const casas = [
  {
    id: 0,
    nombre: "Casa Rural Estel",
    bloque: "Casa Rural Estel",
    descripcion:
      "Descubre el completo de Casa Rural Estel en este video. Conoce todas nuestras instalaciones, el entorno natural y la autenticidad de nuestras casas rurales en el corazon de la Sierra de Espadan.",
    video: "https://www.youtube.com/embed/UutPoUjE8mw",
    capacidad: "10 personas",
    habitaciones: "5 habitaciones",
    banos: "2 baños y 1 aseo",
    caracteristicas: ["Piscina", "Barbacoa", "Chimenea", "Cocina equipada"],
    color: "green",
    isVideo: true,
  },
  {
    id: 1,
    nombre: "Apartamento Rural Estel",
    bloque: "Apartamento Rural Estel",
    descripcion:
      "Un acogedor apartamento independiente completamente equipado con comodidades modernas. Ideal para experiencia auténtica de descanso rural.",
    video: "https://www.youtube.com/embed/9Yjo0UomUYc",
    capacidad: "4 personas",
    habitaciones: "1 habitación",
    banos: "1 baño",
    caracteristicas: ["Estufa de leña", "Cocina equipada", "Piedra local", "Confortable"],
    color: "terracotta",
    isVideo: true,
  },
  {
    id: 2,
    nombre: "Primera Planta",
    bloque: "Bloque Rural Estel",
    descripcion:
      "Un acogedor apartamento independiente construido con piedra perfecto para parejas o viajeros solitarios. Completamente equipado con estufa de leña y todas las comodidades modernas. Ideal para una experiencia auténtica de descanso rural.",
    video: "https://www.youtube.com/embed/R2hR5P8WHbs",
    capacidad: "2 personas",
    habitaciones: "1 habitación",
    banos: "1 baño",
    caracteristicas: ["Estufa de leña", "Cocina equipada", "Piedra local", "Confortable"],
    color: "terracotta",
    isVideo: true,
  },
  {
    id: 3,
    nombre: "Segunda Planta",
    bloque: "Bloque Rural Estel",
    descripcion:
      "Apartamento acogedor dentro del bloque rural estel. Espacio perfecto para parejas o familias pequeñas que buscan intimidad y tranquilidad. Diseñado para ser acogedor en invierno y fresco en verano con todas las comodidades necesarias.",
    video: "https://www.youtube.com/embed/bsQNq_SPdhY",
    capacidad: "4 personas",
    habitaciones: "2 habitaciones",
    banos: "1 baño",
    caracteristicas: ["Piscina municipal cercana", "Barbacoa", "Chimenea", "Cocina equipada"],
    color: "green",
    isVideo: true,
  },
  {
    id: 4,
    nombre: "Tercera Planta",
    bloque: "Bloque Rural Estel",
    descripcion:
      "Apartamento situado en la buhardilla del bloque rural estel. Ideal para familias que buscan descanso y conexión con la naturaleza. Su decoración es mezcla del siglo pasado y lo moderno.",
    video: "https://www.youtube.com/embed/ym7D0Pqb31k",
    capacidad: "4 personas",
    habitaciones: "2 habitaciones",
    banos: "1 baño",
    caracteristicas: ["Elementos árabes", "Terraza", "Chimenea", "Cocina equipada"],
    color: "green",
    isVideo: true,
  },

];

function CasaCard({ casa, index }: { casa: typeof casas[0]; index: number }) {
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

  // Special layout for video card
  if (casa.isVideo) {
    return (
      <div
        ref={ref}
        className={`flex flex-col lg:flex-row gap-0 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Video */}
        <div className="lg:w-1/2 overflow-hidden bg-black">
          <iframe
            width="100%"
            height="400"
            src={casa.video}
            title={casa.nombre}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 lg:h-[400px]"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-16 bg-[oklch(0.93_0.02_75)]">
          <span className="inline-block px-3 py-1 bg-[oklch(0.75_0.18_100/0.15)] text-[oklch(0.75_0.18_100)] font-['Lato'] text-xs tracking-widest uppercase mb-2 self-start border border-[oklch(0.75_0.18_100/0.3)]">
            {casa.bloque}
          </span>
          <span className="block w-10 h-0.5 bg-[oklch(0.55_0.12_35)] mb-4" />
          <h3 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.04_45)] mb-2">
            {casa.nombre}
          </h3>
          <p className="font-['Lato'] text-[oklch(0.42_0.04_60)] text-base leading-relaxed mb-6">
            {casa.descripcion}
          </p>

          {/* Details */}
          <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-[oklch(0.85_0.02_75)]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[oklch(0.55_0.12_35)]" />
              <span className="font-['Lato'] text-sm text-[oklch(0.42_0.04_60)]">{casa.capacidad}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-[oklch(0.55_0.12_35)]" />
              <span className="font-['Lato'] text-sm text-[oklch(0.42_0.04_60)]">{casa.habitaciones}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4 text-[oklch(0.55_0.12_35)]" />
              <span className="font-['Lato'] text-sm text-[oklch(0.42_0.04_60)]">{casa.banos}</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {casa.caracteristicas.map((feat, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[oklch(0.85_0.02_75)] text-[oklch(0.42_0.04_60)] font-['Lato'] text-xs rounded-full border border-[oklch(0.75_0.02_75)]"
              >
                {feat}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="self-start px-7 py-3 bg-[oklch(0.22_0.04_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm tracking-wide hover:bg-[oklch(0.55_0.12_35)] transition-colors duration-300 rounded-sm"
          >
            Consultar disponibilidad
          </button>
        </div>
      </div>
    );
  }

  // Regular layout for image cards
  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"} gap-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image/Video */}
      <div className="lg:w-1/2 overflow-hidden">
        {casa.isVideo ? (
          <iframe
            src={casa.video}
            title={casa.nombre}
            className="w-full h-64 lg:h-[400px] border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
      </div>

      {/* Content */}
      <div
        className={`lg:w-1/2 flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-16 ${
          isEven ? "bg-[oklch(0.93_0.02_75)]" : "bg-[oklch(0.97_0.015_75)]"
        }`}
      >
        <span className="inline-block px-3 py-1 bg-[oklch(0.75_0.18_100/0.15)] text-[oklch(0.75_0.18_100)] font-['Lato'] text-xs tracking-widest uppercase mb-2 self-start border border-[oklch(0.75_0.18_100/0.3)]">
          {casa.bloque}
        </span>
        <span className="block w-10 h-0.5 bg-[oklch(0.55_0.12_35)] mb-4" />
        <h3 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.04_45)] mb-2">
          {casa.nombre}
        </h3>
        <p className="font-['Lato'] text-[oklch(0.42_0.04_60)] text-base leading-relaxed mb-6">
          {casa.descripcion}
        </p>

        {/* Details */}
        <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-[oklch(0.85_0.02_75)]">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[oklch(0.55_0.12_35)]" />
            <span className="font-['Lato'] text-sm text-[oklch(0.42_0.04_60)]">{casa.capacidad}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-[oklch(0.55_0.12_35)]" />
            <span className="font-['Lato'] text-sm text-[oklch(0.42_0.04_60)]">{casa.habitaciones}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-[oklch(0.55_0.12_35)]" />
            <span className="font-['Lato'] text-sm text-[oklch(0.42_0.04_60)]">{casa.banos}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {casa.caracteristicas.map((feat, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[oklch(0.85_0.02_75)] text-[oklch(0.42_0.04_60)] font-['Lato'] text-xs rounded-full border border-[oklch(0.75_0.02_75)]"
            >
              {feat}
            </span>
          ))}
        </div>

        <button
          onClick={() => {
            const el = document.querySelector("#contacto");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="self-start px-7 py-3 bg-[oklch(0.22_0.04_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm tracking-wide hover:bg-[oklch(0.55_0.12_35)] transition-colors duration-300 rounded-sm"
        >
          Consultar disponibilidad
        </button>
      </div>
    </div>
  );
}

export default function CasasSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="casas" className="bg-[oklch(0.97_0.015_75)]">
      {/* Section header */}
      <div
        ref={titleRef}
        className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-0.5 bg-[oklch(0.75_0.18_100)]" />
          <span className="font-['Lato'] text-sm tracking-widest uppercase text-[oklch(0.75_0.18_100)]">
            Nuestras casas
          </span>
        </div>
        <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.04_45)] max-w-xl">
          Casa Rural Estel
        </h2>
        <p className="mt-4 font-['Lato'] text-[oklch(0.42_0.04_60)] text-lg max-w-2xl leading-relaxed">
          Tres propuestas de alojamiento rural autentico: el Bloque Rural Estel con sus cuatro plantas independientes, y el Apartamento Rural Estel. Cada una con su propio caracter, todas compartiendo la autenticidad de la arquitectura rural valenciana.
        </p>
      </div>

      {/* Casa cards */}
      <div className="flex flex-col">
        {casas.map((casa, index) => (
          <CasaCard key={casa.id} casa={casa} index={index} />
        ))}
      </div>
    </section>
  );
}
