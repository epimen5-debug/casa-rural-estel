/* ============================================================
   FOOTER — Casa Rural Estel
   Design: Dark wood, minimal, star motif
   ============================================================ */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.16_0.03_45)] border-t border-[oklch(0.30_0.04_45)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663370219074/GiJFuPWVnEkLEkpg.png"
                alt="Casa Rural Estel"
                className="h-12 w-12 object-contain"
              />
              <div>
                <span className="block font-['Playfair_Display'] text-lg font-semibold text-[oklch(0.97_0.01_75)]">
                  Rural Estel
                </span>
                <span className="block font-['Lato'] text-xs text-[oklch(0.75_0.18_100)] tracking-widest uppercase">
                  Eslida · Castellón
                </span>
              </div>
            </div>
            <p className="font-['Lato'] text-sm text-[oklch(0.60_0.02_75)] leading-relaxed max-w-xs">
              Cuatro casas rurales en el corazón del Parque Natural Sierra de Espadán. Naturaleza, descanso y autenticidad mediterránea.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Las Casas", href: "#casas" },
                { label: "Servicios", href: "#servicios" },
                { label: "Entorno", href: "#entorno" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-['Lato'] text-sm text-[oklch(0.70_0.02_75)] hover:text-[oklch(0.72_0.09_35)] transition-colors flex items-center gap-2 group"
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-[oklch(0.55_0.12_35)] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                    </svg>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+34600000000"
                  className="font-['Lato'] text-sm text-[oklch(0.70_0.02_75)] hover:text-[oklch(0.72_0.09_35)] transition-colors"
                >
                  +34 652 68 54 90
                </a>
              </li>
              <li>
                <span className="font-['Lato'] text-sm text-[oklch(0.60_0.02_75)]">
                  Eslida, 12528<br />
                  Castellón, España
                </span>
              </li>
            </ul>

            {/* Social links placeholder */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[oklch(0.35_0.05_45)] flex items-center justify-center text-[oklch(0.60_0.02_75)] hover:border-[oklch(0.55_0.12_35)] hover:text-[oklch(0.72_0.09_35)] transition-all"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[oklch(0.35_0.05_45)] flex items-center justify-center text-[oklch(0.60_0.02_75)] hover:border-[oklch(0.55_0.12_35)] hover:text-[oklch(0.72_0.09_35)] transition-all"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Quality logos */}
        <div className="py-8 border-t border-[oklch(0.28_0.04_45)] flex flex-wrap items-center justify-center gap-8">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663370219074/BRcoVbeCiNCGZKsK.png"
            alt="Parque Natural Sierra de Espadán - Turismo de la Naturaleza"
            className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[oklch(0.28_0.04_45)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Lato'] text-xs text-[oklch(0.45_0.02_75)]">
            © {currentYear} Bloque Rural Estel · Eslida, Castellón · Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-['Lato'] text-xs text-[oklch(0.45_0.02_75)] hover:text-[oklch(0.70_0.02_75)] transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="font-['Lato'] text-xs text-[oklch(0.45_0.02_75)] hover:text-[oklch(0.70_0.02_75)] transition-colors">
              Aviso legal
            </a>
            <a href="#" className="font-['Lato'] text-xs text-[oklch(0.45_0.02_75)] hover:text-[oklch(0.70_0.02_75)] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
