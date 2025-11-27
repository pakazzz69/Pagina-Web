import { Play, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-0" />
      <div className="absolute inset-0 bg-[url('/src/assets/hero-bg.svg')] bg-cover bg-center opacity-70 blur-sm z-[-1]" />

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg tracking-tight">
            AQUÍ IRÁ EL TÍTULO DEL JUEGO
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-400">AQUÍ IRÁ EL SUBTÍTULO / TAGLINE</p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white font-semibold px-5 py-3 rounded-md shadow-lg transition-transform transform hover:-translate-y-0.5">
              <Play size={18} /> Ver tráiler
            </button>

            <button className="inline-flex items-center gap-3 border border-neutral-600 text-neutral-100 px-5 py-3 rounded-md hover:bg-white/5 transition">
              <ShoppingCart size={18} /> Reservar edición limitada
            </button>
          </div>

          <div className="mt-6 text-xs text-gray-400">AQUÍ IRÁ LA LÍNEA DE CONFIANZA / ESTADO DEL LANZAMIENTO</div>
        </div>
      </div>
    </section>
  );
}
