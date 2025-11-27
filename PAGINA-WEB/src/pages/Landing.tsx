import Hero from "../components/Hero";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import Trailer from "../components/Trailer";
import CTA from "../components/CTA";
import MecanicaCard from "../components/MecanicaCard";
import { Eye, Footprints, Ghost } from "lucide-react";


export default function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#070707] to-[#050507] text-neutral-200">
      <Header />
      <Hero />

      <section id="history" className="py-12 container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="AQUÍ FEATURE 1" text="(placeholder)" icon={<Eye size={18} />} />
          <FeatureCard title="AQUÍ FEATURE 2" text="(placeholder)" icon={<Ghost size={18} />} />
          <FeatureCard title="AQUÍ FEATURE 3" text="(placeholder)" icon={<Footprints size={18} />} />
        </div>
      </section>

      <section id="media" className="py-12 container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white">AQUÍ IRÁ LA SECCIÓN DE HISTORIA</h2>
            <p className="mt-4 text-gray-400">(Contenido placeholder — aquí irá la historia / lore. Tú la completarás más tarde.)</p>
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

        
<section className="py-12 container mx-auto px-6 md:px-12">
  <h3 className="text-2xl font-bold text-white mb-6">Mecánicas</h3>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    <MecanicaCard
      titulo="Ataque"
      imagenes={["/pagina/ataques.png", "/pagina/ataques2.png", "/pagina/ataques3.png"]}
      descripcion="Puedes realizar ataques a cada parte del cuerpo del enemigo, piensa bien donde atacar para acabar con EL."
    />
    <MecanicaCard
      titulo="Estrategia"
      imagenes={["/pagina/estrategia.png"]}
      descripcion="Cada enemigo es diferente, adapta tu estrategia para vencerlos a todos."
    />
    <MecanicaCard
      titulo="Turnos"
      imagenes={["/pagina/turnos.png", "/pagina/ataques.png"]}
      descripcion="Piensa bien en tus acciones y en tus ataques, pueden costarte la partida. MIDE BIEN TUS MOVIMIENTOS."
    />
  
  </div>
</section>


      <section id="download" className="py-12 container mx-auto px-6 md:px-12">
        <CTA />
      </section>
      <footer className="py-12">
        <div className="container mx-auto px-6 md:px-12 bg-gradient-to-r from-[#070707] to-[#0f0f0f] rounded-3xl p-8 border border-neutral-800 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold">N</div>
              <div>
                <div className="text-white font-semibold">NOCTURNA</div>
                <div className="text-xs text-gray-400">AQUÍ IRÁ UN SUBTÍTULO CORTO (placeholder)</div>
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
              <div className="text-xs text-gray-400">AQUÍ IRÁ UN ENLACE A REDES (placeholder)</div>
              <div className="text-xs text-gray-500">© 2026</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
