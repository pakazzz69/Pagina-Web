import { ShoppingCart, Download, Zap, Flame, Gift } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-red-950/40 via-black to-red-950/40 py-16 px-8 rounded-2xl border border-red-900/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Prepárate para la Oscuridad</h2>
          <p className="text-xl text-gray-300">Pre-ordena NOCTURNA y recibe beneficios exclusivos</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-black/30 rounded-xl p-6 border border-red-900/30">
            <Flame className="text-yellow-500 mb-3" size={28} />
            <h3 className="text-white font-semibold mb-2">Acceso Temprano</h3>
            <p className="text-gray-400 text-sm">Sé de los primeros en jugar cuando se lance</p>
          </div>
          
          <div className="bg-black/30 rounded-xl p-6 border border-red-900/30">
            <Gift className="text-blue-500 mb-3" size={28} />
            <h3 className="text-white font-semibold mb-2">Contenido Digital</h3>
            <p className="text-gray-400 text-sm">Artbook digital + banda sonora exclusiva</p>
          </div>

          <div className="bg-black/30 rounded-xl p-6 border border-red-900/30">
            <Zap className="text-red-500 mb-3" size={28} />
            <h3 className="text-white font-semibold mb-2">Edición Limitada</h3>
            <p className="text-gray-400 text-sm">Acceso a merchandising exclusivo</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold px-8 py-4 rounded-lg shadow-xl shadow-red-700/50 transition-all transform hover:scale-105">
            <Download size={20} /> Descargar Juego
          </button>
          <button className="inline-flex items-center gap-3 border-2 border-gray-600 text-white hover:border-red-600 hover:text-red-400 font-semibold px-8 py-4 rounded-lg transition-all">
            <Download size={20} /> Wishlist en Steam
          </button>
        </div>
      </div>
    </section>
  );
}
