# Ideas de Diseño - Casa Rural Estel

## Contexto
Sitio web para Casa Rural Estel, un complejo de 3-4 casas rurales en Eslida (Castellón), en el Parque Natural Sierra de Espadán. El nombre "Estel" significa "estrella" en valenciano.

---

<response>
<text>
## Opción A: "Tierra y Piedra" — Rusticismo Mediterráneo Contemporáneo

**Design Movement:** Mediterranean Vernacular Revival — arquitectura rural española reinterpretada con sensibilidad editorial moderna.

**Core Principles:**
1. Autenticidad material: piedra, madera, terracota como protagonistas visuales
2. Horizontalidad y respiración: secciones amplias que evocan el paisaje abierto de la sierra
3. Tipografía editorial con raíces clásicas: serif elegante para títulos, sans-serif humanista para cuerpo
4. Fotografía como narrativa: imágenes grandes, inmersivas, con overlay sutil

**Color Philosophy:**
- Terracota cálida (#C4622D) — el color de los tejados y la tierra
- Verde alcornoque (#4A6741) — los bosques de la Sierra Espadán
- Crema piedra (#F5EDD8) — el color de la piedra caliza local
- Marrón oscuro (#2C1810) — vigas de madera, contraste tipográfico
- Dorado suave (#D4A853) — detalles, estrellas (estel), acentos

**Layout Paradigm:**
- Hero de pantalla completa con imagen aérea y texto superpuesto en esquina inferior izquierda (no centrado)
- Secciones alternadas: imagen izquierda + texto derecha / texto izquierda + imagen derecha
- Tarjetas de casas con efecto de revelación al hover
- Navegación horizontal fija con fondo translúcido

**Signature Elements:**
1. Estrella de 8 puntas (símbolo "estel") como motivo decorativo recurrente
2. Líneas horizontales finas en terracota como separadores de sección
3. Texturas de piedra/lino como fondos de sección

**Interaction Philosophy:**
- Scroll suave con aparición progresiva de elementos
- Hover en imágenes: zoom sutil + overlay con nombre de la casa
- Botones con borde y relleno al hover

**Animation:**
- Fade-in desde abajo al entrar en viewport (staggered para grupos)
- Parallax sutil en imágenes hero
- Transiciones de 300ms con ease-out

**Typography System:**
- Display: Playfair Display (serif, elegante, editorial)
- Body: Lato o Source Sans Pro (humanista, legible)
- Tamaños: 72px hero / 48px h2 / 32px h3 / 18px body
</text>
<probability>0.09</probability>
</response>

<response>
<text>
## Opción B: "Luz de Atardecer" — Warmth-First Organic Design

**Design Movement:** Organic Warmth — inspirado en el movimiento "warm minimalism" pero con riqueza textural mediterránea.

**Core Principles:**
1. Calidez antes que frialdad: cada decisión de color y tipografía debe evocar calor y bienvenida
2. Asimetría orgánica: layouts que parecen crecer naturalmente, no construidos en cuadrícula
3. Capas y profundidad: overlays, sombras suaves, gradientes cálidos
4. Contenido primero: la información es accesible sin sacrificar la estética

**Color Philosophy:**
- Ámbar dorado (#E8A045) — luz de atardecer sobre la sierra
- Siena tostada (#8B4513) — tierra mojada, madera envejecida
- Marfil cálido (#FAF3E0) — fondo principal, pergamino
- Verde musgo (#556B2F) — vegetación, naturaleza
- Carbón suave (#3D2B1F) — texto principal

**Layout Paradigm:**
- Navegación lateral izquierda fija en desktop, hamburger en mobile
- Hero con texto en panel semitransparente flotante
- Sección de casas en mosaico irregular (no grid uniforme)
- Footer con mapa de ubicación integrado

**Signature Elements:**
1. Gradientes de ámbar a transparente en overlays de imagen
2. Bordes orgánicos (clip-path diagonal) entre secciones
3. Iconografía de línea fina personalizada (montaña, casa, estrella)

**Interaction Philosophy:**
- Microinteracciones en cada elemento interactivo
- Cursor personalizado (estrella pequeña)
- Scroll horizontal en galería de imágenes

**Animation:**
- Reveal con máscara de clip-path al entrar en viewport
- Parallax en capas múltiples (foreground/background)
- Contador animado para estadísticas (años, casas, huéspedes)

**Typography System:**
- Display: Cormorant Garamond (serif clásico, elegante)
- Body: Nunito (redondeado, amigable, cálido)
- Accent: Cormorant Garamond Italic para citas y destacados
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Opción C: "Estel — La Estrella de la Sierra" — Editorial Rural Moderno

**Design Movement:** Editorial Rustic — la estética de las revistas de viaje de lujo aplicada a un entorno rural valenciano.

**Core Principles:**
1. Contraste dramático: negro profundo vs. crema cálida, imágenes grandes vs. texto pequeño
2. Jerarquía tipográfica fuerte: los títulos son los protagonistas visuales
3. Espacio negativo generoso: el silencio visual es tan importante como el contenido
4. Fotografía editorial: imágenes tratadas con coherencia de color (tonos cálidos, ligeramente desaturados)

**Color Philosophy:**
- Negro pizarra (#1C1917) — fondo de secciones oscuras, autoridad
- Crema pergamino (#F7F0E3) — fondo principal, calidez
- Terracota (#B85C38) — acento primario, llamadas a la acción
- Gris piedra (#9E9589) — texto secundario, detalles
- Blanco hueso (#FEFCF8) — contraste en secciones oscuras

**Layout Paradigm:**
- Hero de pantalla completa con imagen de fondo y título enorme (96px) en blanco
- Secciones alternadas oscuro/claro para ritmo visual
- Galería de casas en formato revista: imagen grande + texto lateral
- Barra de navegación minimalista con solo el logo y los enlaces esenciales

**Signature Elements:**
1. Tipografía enorme como elemento gráfico (letras de 200px como decoración)
2. Líneas diagonales sutiles como separadores
3. Números de sección en grande y semitransparentes (01, 02, 03...)

**Interaction Philosophy:**
- Hover en tarjetas: desplazamiento vertical del texto revelando más información
- Navegación con indicador de sección activa
- Galería con lightbox para ver imágenes en grande

**Animation:**
- Entrada de texto letra por letra en el hero
- Secciones que se revelan con un barrido horizontal
- Imágenes que aparecen con un efecto de zoom-out desde el centro

**Typography System:**
- Display: DM Serif Display (serif moderno, impactante)
- Body: DM Sans (sans-serif geométrico, limpio)
- Números: Bebas Neue (condensado, impactante para secciones)
</text>
<probability>0.08</probability>
</response>

---

## Decisión Final: Opción A — "Tierra y Piedra"

Se elige esta opción por su autenticidad mediterránea, su equilibrio entre rusticismo y modernidad editorial, y su capacidad para transmitir la calidez y el carácter único de las casas rurales en la Sierra de Espadán. La paleta de terracota, verde alcornoque y crema piedra evoca directamente el paisaje y los materiales de construcción de la zona.
