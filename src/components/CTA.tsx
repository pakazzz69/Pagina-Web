import { ShoppingCart } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#0b0b0b] to-[#1a0b0b] py-12 px-6 rounded-xl border border-red-900 my-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Pre-order — Edición limitada</h2>
          <p className="text-gray-300 mt-2">Incluye artbook digital y banda sonora exclusiva.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-gray-300">AQUÍ IRARÁ INFORMACIÓN DEL DESCARGA (placeholder)</div>
          <button className="inline-flex items-center gap-3 bg-red-700 px-4 py-2 rounded-md text-white shadow-lg hover:scale-[1.02] transition">
            <ShoppingCart size={16} /> Descargar
          </button>
        </div>
      </div>
    </section>
  );
}
