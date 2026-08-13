/* ============================================================
   HOME PAGE — Casa Rural Estel
   Design: "Tierra y Piedra" — Mediterranean Vernacular Revival
   Sections: Hero → Casas → Servicios → Galería → Entorno → Contacto → Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BienvenidaSection from "@/components/BienvenidaSection";
import CasasSection from "@/components/CasasSection";
import ServiciosSection from "@/components/ServiciosSection";
import GaleriaSection from "@/components/GaleriaSection";
import EntornoSection from "@/components/EntornoSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BienvenidaSection />
      <CasasSection />
      <ServiciosSection />
      <GaleriaSection />
      <EntornoSection />
      <ContactoSection />
      <Footer />
    </div>
  );
}
