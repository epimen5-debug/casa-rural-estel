/* ============================================================
   GALERIA SECTION — Bloque Rural Estel
   Design: Masonry-style grid, lightbox on click
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const imagenes = [
  {
    src: "/images/galeria-iglesia-1.jpg",
    alt: "Iglesia del Salvador de Eslida - Patrimonio historico",
    span: "col-span-2 row-span-2",
  },
  {
  src: "/images/galeria-iglesia-2.jpg",
    alt: "Iglesia del Salvador - Detalle arquitectonico",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/galeria-pueblo.jpg",
    alt: "Pueblo de Eslida - Vistas panoramicas",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/galeria-sierra.jpg",
    alt: "Sierra de Espadan - Parque Natural",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/galeria-bosque.jpg",
    alt: "Bosques de alcornoques - Naturaleza de Eslida",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/galeria-vistas.jpg",
    alt: "Vistas de la Sierra de Espadan desde Eslida",
    span: "col-span-1 row-span-1",
  },
];

export default function GaleriaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-[oklch(0.93_0.02_75)] py-20 lg:py-28">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-[oklch(0.75_0.18_100)]" />
            <span className="font-['Lato'] text-sm tracking-widest uppercase text-[oklch(0.75_0.18_100)]">
              Galeria
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.04_45)]">
            Eslida y su entorno
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {imagenes.map((img, i) => (
            <div
              key={i}
              className={`${img.span} overflow-hidden group cursor-pointer relative`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="Galeria" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
