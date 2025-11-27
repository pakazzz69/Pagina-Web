import Hero from "../components/Hero";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import Trailer from "../components/Trailer";
import CTA from "../components/CTA";
import { Eye, MapIcon, SkullIcon } from "lucide-react";

export default function Landing() {

  const imagesMaps = ["images/img_map_1.png", "images/img_map_2.png", "images/img_map_3.png"];
  const imagesInventory = ["images/img_inventory.png", "images/img_inventory_2.png", "images/img_inventory_3.png", "images/img_inventory_4.png"];
  const imagesGUI = ["images/img_gui_1.png", "images/img_gui_4.png", "images/img_gui_3.png"];
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#070707] to-[#050507] text-neutral-200">
      <Header />
      <Hero />

      <section id="history" className="py-12 container mx-auto px-6 md:px-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-extrabold text-white mb-10">Vive una experiencia de horror en El Alto:</h2>
        <div className="grid md:grid-cols-3 gap-6 w-full">
          <FeatureCard title="EXPLORACIÓN EN 2D" text="Explora un mundo en 2D con estilo pixelart ambientados en calles de la ciudad de El Alto." images={imagesMaps} icon={<MapIcon size={18} />} />
          <FeatureCard title="GESTIONA TU EQUIPO" text="Adminsitra tus recursos en el inventario para descubirir elementos de la historia y sobrevivir a los enemigos." images={imagesInventory} icon={<Eye size={18} />} />
          <FeatureCard title="ENFRENTATE A MONSTRUOS POR TURNOS" text="Pelea contra los monstruos alrededor de todo el mapa, pero adminsitrar rus puntos de acción. Cada punto es clave." images={imagesGUI} icon={<SkullIcon size={18} />} />
        </div>
      </section>

      <section id="media" className="py-12 container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white">La historia</h2>
            <p className="mt-4 text-gray-400">Un incidente ocurrió en la ciudad de El Alto, haciendo que las personas se conviertan en monstruos. Tu objetivo: salir de la ciudad a toda costa, enfrentandote a monstruos, explorando el mundo, y principalmente, no debes morir.</p>
          </div>

          <div>
            <Trailer />
          </div>
        </div>
      </section>

      <section id="characters" className="py-12 container mx-auto px-6 md:px-12">
        <h3 className="text-2xl font-bold text-white mb-6">Capturas</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-lg w-full h-44 bg-neutral-900/30 border border-neutral-800 flex items-center justify-center text-gray-400">AQUÍ IRARÁ UNA CAPTURA</div>
          <div className="rounded-lg w-full h-44 bg-neutral-900/30 border border-neutral-800 flex items-center justify-center text-gray-400">AQUÍ IRARÁ UNA CAPTURA</div>
          <div className="rounded-lg w-full h-44 bg-neutral-900/30 border border-neutral-800 flex items-center justify-center text-gray-400">AQUÍ IRARÁ UNA CAPTURA</div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-6 md:px-12">
        <h3 className="text-2xl font-bold text-white mb-6">Personajes</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/40 p-4 rounded-xl border border-neutral-800 flex items-center justify-center text-gray-400">AQUÍ IRÁ PERSONAJE 1</div>

          <div className="bg-neutral-900/40 p-4 rounded-xl border border-neutral-800 flex items-center justify-center text-gray-400">AQUÍ IRÁ PERSONAJE 2</div>

          <div className="bg-neutral-900/40 p-4 rounded-xl border border-neutral-800 flex items-center justify-center text-gray-400">AQUÍ IRARÁ PERSONAJE 3</div>
        </div>
      </section>

      <section id="download" className="py-12 container mx-auto px-6 md:px-12">
        <CTA />
      </section>
      <footer className="py-12">
        <div className="container mx-auto px-6 md:px-12 bg-gradient-to-r from-[#070707] to-[#0f0f0f] rounded-3xl p-8 border border-neutral-800 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold">IO</div>
              <div>
                <div className="text-white font-semibold">INTERVENCIÓN EN LA OSCURIDAD</div>
                <div className="text-xs text-gray-400">ATRAVEZARÁS UN INFIERNO, PARA TENER UN FUTURO MEJOR.</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
              <a href="#hero" className="hover:text-white">Inicio</a>
              <a href="#history" className="hover:text-white">Historia</a>
              <a href="#characters" className="hover:text-white">Personajes</a>
              <a href="#media" className="hover:text-white">Media</a>
              <a href="#download" className="hover:text-white">Descargar</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xs text-gray-400">Changuitos Development Group</div>
              <div className="text-xs text-gray-500">© 2025</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
