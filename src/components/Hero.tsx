import { Play, Download, Zap } from "lucide-react";

export default function Hero() {
  const handleTrailerClick = () => {
    document.getElementById("trailer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />
      <div className="absolute inset-0 opacity-30 z-[-1]" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)",
      }} />
      <div className="absolute inset-0 opacity-20 z-[-1]" style={{
        backgroundImage: "radial-gradient(circle at 80% 80%, rgba(30, 30, 30, 0.4) 0%, transparent 70%)",
      }} />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/30 border border-red-700/50 rounded-full text-red-400 text-xs font-semibold uppercase tracking-widest mb-8">
            <Zap size={14} />
            Próximamente Disponible
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight text-white drop-shadow-2xl tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-red-100 to-red-400 bg-clip-text text-transparent">
              NOCTURNA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
            Sumérgete en un horror psicológico que desafiará tu cordura
          </p>

          {/* Description */}
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-12">
            Un viaje desconcertante a través de las sombras del miedo. Enfrenta amenazas indecibles, toma decisiones que moldean tu destino y descubre los misterios que acechan en la oscuridad.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button 
              onClick={handleTrailerClick}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold px-8 py-4 rounded-lg shadow-2xl shadow-red-700/50 transition-all transform hover:scale-105 text-lg"
            >
              <Play size={22} /> Ver Tráiler
            </button>

            <button className="inline-flex items-center gap-3 border-2 border-red-700 text-red-400 hover:text-white hover:border-red-600 font-semibold px-8 py-4 rounded-lg transition-all hover:bg-red-900/20">
              <Download size={22} /> Descargar Juego
            </button>
          </div>

          {/* Trust/Status Line */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>En desarrollo activo • Lanzamiento Q1 2026</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
