/* ============================================================
   SERVICIOS SECTION — Casa Rural Estel
   Design: Dark background, icon grid, warm gold accents
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import {
  Waves, Flame, Car, UtensilsCrossed, TreePine,
  Wind, Baby, Mountain
} from "lucide-react";

const servicios = [
  {
    icon: Waves,
    titulo: "Piscina pública en Eslida",
    desc: "Acceso a la piscina pública municipal de Eslida disponible en temporada de verano.",
  },
  {
    icon: Flame,
    titulo: "Chimeneas y barbacoa",
    desc: "Todas las casas disponen de chimenea de leña. Zona de barbacoa y horno de leña exterior.",
  },

  {
    icon: Car,
    titulo: "Zonas de aparcamiento",
    desc: "Zonas de aparcamiento disponibles en la localidad de Eslida para los huéspedes.",
  },
  {
    icon: UtensilsCrossed,
    titulo: "Cocinas equipadas",
    desc: "Cocinas completamente equipadas con todos los utensilios necesarios para cocinar.",
  },
  {
    icon: TreePine,
    titulo: "Naturaleza a pocos metros",
    desc: "Entorno natural virgen a pocos metros. Bosques de alcornoques, castaños y pinos para disfrutar.",
  },

  {
    icon: Wind,
    titulo: "Aire acondicionado",
    desc: "Sistemas de climatización para garantizar el confort en cualquier época del año.",
  },

  {
    icon: Baby,
    titulo: "Apto para familias",
    desc: "Cunas y tronas disponibles bajo petición. Entorno seguro para los más pequeños.",
  },
  {
    icon: Mountain,
    titulo: "Rutas de senderismo",
    desc: "Información y mapas de las mejores rutas por la Sierra de Espadán desde la puerta.",
  },

];

function ServicioCard({ servicio, index }: { servicio: typeof servicios[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = servicio.icon;

  return (
    <div
      ref={ref}
      className={`p-6 border border-[oklch(0.35_0.05_45)] hover:border-[oklch(0.55_0.12_35)] group transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="w-12 h-12 bg-[oklch(0.55_0.12_35/0.15)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.55_0.12_35)] transition-colors duration-300">
        <Icon
          size={22}
          className="text-[oklch(0.72_0.09_35)] group-hover:text-[oklch(0.97_0.01_75)] transition-colors duration-300"
        />
      </div>
      <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[oklch(0.97_0.01_75)] mb-2">
        {servicio.titulo}
      </h3>
      <p className="font-['Lato'] text-sm text-[oklch(0.70_0.02_75)] leading-relaxed">
        {servicio.desc}
      </p>
    </div>
  );
}

export default function ServiciosSection() {
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
    <section
      id="servicios"
      className="bg-[oklch(0.22_0.04_45)] py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div
          ref={titleRef}
          className={`mb-14 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-[oklch(0.55_0.12_35)]" />
            <span className="font-['Lato'] text-sm tracking-widest uppercase text-[oklch(0.55_0.12_35)]">
              Instalaciones y servicios
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[oklch(0.97_0.01_75)] max-w-lg">
              Todo lo que necesitas para descansar
            </h2>
            <p className="font-['Lato'] text-[oklch(0.70_0.02_75)] text-base max-w-md leading-relaxed">
              Nuestras casas están equipadas con todo lo necesario para que tu estancia sea cómoda y memorable, sin renunciar a la autenticidad rural.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[oklch(0.35_0.05_45)]">
          {servicios.map((servicio, index) => (
            <ServicioCard key={servicio.titulo} servicio={servicio} index={index} />
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[oklch(0.35_0.05_45)]">
          {[
            { num: "4", label: "Casas rurales" },
            { num: "20+", label: "Plazas disponibles" },
            { num: "381m", label: "Altitud sobre el mar" },
            { num: "40'", label: "De la costa" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[oklch(0.55_0.12_35)] mb-2">
                {stat.num}
              </div>
              <div className="font-['Lato'] text-sm text-[oklch(0.70_0.02_75)] tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
