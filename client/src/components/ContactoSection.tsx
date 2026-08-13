/* ============================================================
   CONTACTO SECTION — Casa Rural Estel
   Design: Dark wood background, warm form, contact info
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    telefono: "",
    casa: "",
    fechaEntrada: "",
    fechaSalida: "",
    personas: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp message with form data
    const whatsappMessage = encodeURIComponent(
      `Hola, me gustaria consultar sobre Casa Rural Estel.\n\nNombre: ${formState.nombre}\nEmail: ${formState.email}\nTelefono: ${formState.telefono}\n\nCasa de interes: ${formState.casa || "Sin especificar"}\nFecha entrada: ${formState.fechaEntrada || "Sin especificar"}\nFecha salida: ${formState.fechaSalida || "Sin especificar"}\nNo. personas: ${formState.personas || "Sin especificar"}\n\nMensaje: ${formState.mensaje || "Sin mensaje adicional"}`
    );
    // WhatsApp API link with the phone number
    window.location.href = `https://wa.me/34652685490?text=${whatsappMessage}`;
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section
      id="contacto"
      className="bg-[oklch(0.22_0.04_45)] py-20 lg:py-28"
      ref={ref}
    >
      <div
        className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-[oklch(0.55_0.12_35)]" />
            <span className="font-['Lato'] text-sm tracking-widest uppercase text-[oklch(0.55_0.12_35)]">
              Contacto y reservas
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[oklch(0.97_0.01_75)]">
            ¿Listo para escapar?
          </h2>
          <p className="mt-4 font-['Lato'] text-[oklch(0.70_0.02_75)] text-lg max-w-xl leading-relaxed">
            Escríbenos por WhatsApp o llámanos para consultar disponibilidad y tarifas. Respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Info cards */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 bg-[oklch(0.30_0.05_45)] border border-[oklch(0.35_0.05_45)]">
                <div className="w-10 h-10 bg-[oklch(0.55_0.12_35/0.20)] flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[oklch(0.72_0.09_35)]" />
                </div>
                <div>
                  <div className="font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-1">Teléfono</div>
                  <a href="tel:+34652685490" className="font-['Playfair_Display'] text-lg text-[oklch(0.97_0.01_75)] hover:text-[oklch(0.72_0.09_35)] transition-colors">
                    +34 652 68 54 90
                  </a>
                  <p className="font-['Lato'] text-xs text-[oklch(0.60_0.02_75)] mt-0.5">También por WhatsApp</p>
                </div>
              </div>



              <div className="flex items-start gap-4 p-5 bg-[oklch(0.30_0.05_45)] border border-[oklch(0.35_0.05_45)]">
                <div className="w-10 h-10 bg-[oklch(0.55_0.12_35/0.20)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[oklch(0.72_0.09_35)]" />
                </div>
                <div>
                  <div className="font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-1">Ubicación</div>
                  <p className="font-['Playfair_Display'] text-lg text-[oklch(0.97_0.01_75)]">
                    C/ Eres 29, Eslida
                  </p>
                  <p className="font-['Lato'] text-xs text-[oklch(0.60_0.02_75)] mt-0.5">
                    Castellón · Parque Natural Sierra de Espadán<br />
                    Comunitat Valenciana, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[oklch(0.30_0.05_45)] border border-[oklch(0.35_0.05_45)]">
                <div className="w-10 h-10 bg-[oklch(0.55_0.12_35/0.20)] flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[oklch(0.72_0.09_35)]" />
                </div>
                <div>
                  <div className="font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-1">Check-in / Check-out</div>
                  <p className="font-['Playfair_Display'] text-lg text-[oklch(0.97_0.01_75)]">
                    10:00 — 17:00
                  </p>
                  <p className="font-['Lato'] text-xs text-[oklch(0.60_0.02_75)] mt-0.5">Entrada a partir de las 10h · Salida antes de las 17h</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-48 bg-[oklch(0.30_0.05_45)] border border-[oklch(0.35_0.05_45)] overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12326.5!2d-0.3282!3d39.8748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5ff5f4b2c3d4e5%3A0x6a7b8c9d0e1f2a3b!2sEslida%2C%20Castell%C3%B3n%2C%20Spain!5e0!3m2!1ses!2ses!4v1708420000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) sepia(0.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Eslida, Castellón"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-[oklch(0.30_0.05_45)] border border-[oklch(0.35_0.05_45)] p-8 lg:p-10">
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[oklch(0.97_0.01_75)] mb-6">
                Solicitar información o reserva
              </h3>

              {enviado ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <CheckCircle size={48} className="text-[oklch(0.55_0.12_35)]" />
                  <p className="font-['Playfair_Display'] text-xl text-[oklch(0.97_0.01_75)] text-center">
                    ¡Abriendo WhatsApp!
                  </p>
                  <p className="font-['Lato'] text-[oklch(0.70_0.02_75)] text-center">
                    Tu mensaje se enviará a través de WhatsApp. Te responderemos en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formState.nombre}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.22_0.04_45)] border border-[oklch(0.40_0.05_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.55_0.12_35)] transition-colors placeholder:text-[oklch(0.45_0.03_60)]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.22_0.04_45)] border border-[oklch(0.40_0.05_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.55_0.12_35)] transition-colors placeholder:text-[oklch(0.45_0.03_60)]"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formState.telefono}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.22_0.04_45)] border border-[oklch(0.40_0.05_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.55_0.12_35)] transition-colors placeholder:text-[oklch(0.45_0.03_60)]"
                        placeholder="+34 652 68 54 90"
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-2">
                        Casa de interés
                      </label>
                      <select
                        name="casa"
                        value={formState.casa}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.22_0.04_45)] border border-[oklch(0.40_0.05_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.55_0.12_35)] transition-colors"
                      >
                        <option value="">Seleccionar casa</option>
                        <option value="Planta Baja">Planta Baja (8 personas)</option>
                        <option value="Primera Planta">Primera Planta (4 personas)</option>
                        <option value="Segunda Planta">Segunda Planta (6 personas)</option>
                        <option value="Tercera Planta">Tercera Planta (2-4 personas)</option>
                        <option value="Apartamento Rural Estel">Apartamento Rural Estel (2-3 personas)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-2">
                        Fecha entrada
                      </label>
                      <input
                        type="date"
                        name="fechaEntrada"
                        value={formState.fechaEntrada}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.22_0.04_45)] border border-[oklch(0.40_0.05_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.55_0.12_35)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-2">
                        Fecha salida
                      </label>
                      <input
                        type="date"
                        name="fechaSalida"
                        value={formState.fechaSalida}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.22_0.04_45)] border border-[oklch(0.40_0.05_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.55_0.12_35)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-2">
                      Número de personas
                    </label>
                    <select
                      name="personas"
                      value={formState.personas}
                      onChange={handleChange}
                      className="w-full bg-[oklch(0.22_0.04_45)] border border-[oklch(0.40_0.05_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.55_0.12_35)] transition-colors"
                    >
                      <option value="">Nº personas</option>
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Lato'] text-xs text-[oklch(0.55_0.12_35)] tracking-widest uppercase mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      value={formState.mensaje}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-[oklch(0.22_0.04_45)] border border-[oklch(0.40_0.05_45)] text-[oklch(0.97_0.01_75)] font-['Lato'] text-sm px-4 py-3 focus:outline-none focus:border-[oklch(0.55_0.12_35)] transition-colors placeholder:text-[oklch(0.45_0.03_60)] resize-none"
                      placeholder="Cuéntanos qué necesitas, preguntas sobre las casas, servicios especiales..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-[oklch(0.55_0.12_35)] text-[oklch(0.97_0.01_75)] font-['Lato'] font-semibold tracking-wide hover:bg-[oklch(0.45_0.10_35)] transition-all duration-300 rounded-sm"
                  >
                    <Send size={18} />
                    Enviar consulta por WhatsApp
                  </button>

                  <p className="font-['Lato'] text-xs text-[oklch(0.60_0.02_75)] text-center mt-4">
                    Al enviar este formulario, aceptas nuestra política de privacidad. Responderemos en menos de 24 horas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
