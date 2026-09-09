/* ============================================================
   NAVBAR — Casa Rural Estel
   Design: Fixed top nav, translucent on scroll, terracotta accents
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Las Casas", href: "#casas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Entorno", href: "#entorno" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[oklch(0.22_0.04_45/0.97)] shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="Casa Rural Estel"
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <span
                className="block text-[oklch(0.97_0.01_75)] font-['Playfair_Display'] text-lg font-semibold leading-tight group-hover:text-[oklch(0.72_0.09_35)] transition-colors"
              >
                Rural Estel
              </span>
              <span className="block text-[oklch(0.75_0.18_100)] font-['Lato'] text-xs tracking-widest uppercase">
                Eslida · Sierra de Espadán
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[oklch(0.90_0.02_75)] hover:text-[oklch(0.72_0.09_35)] font-['Lato'] text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[oklch(0.55_0.12_35)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="ml-4 px-5 py-2 bg-[oklch(0.55_0.12_35)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm tracking-wide hover:bg-[oklch(0.45_0.10_35)] transition-colors duration-200 rounded-sm"
            >
              Reservar
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[oklch(0.97_0.01_75)] hover:text-[oklch(0.72_0.09_35)] transition-colors p-2"
            aria-label="Menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[oklch(0.22_0.04_45/0.98)] backdrop-blur-sm border-t border-[oklch(0.35_0.05_45)]">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[oklch(0.90_0.02_75)] hover:text-[oklch(0.72_0.09_35)] font-['Lato'] text-base py-3 border-b border-[oklch(0.35_0.05_45)] transition-colors flex items-center gap-2"
              >
                <Star size={10} className="text-[oklch(0.55_0.12_35)]" fill="currentColor" />
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="mt-3 px-5 py-3 bg-[oklch(0.55_0.12_35)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm tracking-wide text-center hover:bg-[oklch(0.45_0.10_35)] transition-colors rounded-sm"
            >
              Reservar ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
