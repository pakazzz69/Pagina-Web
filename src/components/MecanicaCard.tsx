import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  titulo: string;
  imagenes: string[]; // ahora acepta varias imágenes
  descripcion: string;
}

const MecanicaCard: React.FC<Props> = ({ titulo, imagenes, descripcion }) => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + imagenes.length) % imagenes.length);
  const next = () => setIndex((index + 1) % imagenes.length);

  return (
    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-700/30 shadow-lg hover:shadow-2xl hover:shadow-red-700/40 hover:border-red-600/60 transition-all duration-300 group">
      
      {/* Carrusel interno */}
      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={titulo}
            className={`w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 rounded-lg"></div>

        {/* Flechas - solo si hay múltiples imágenes */}
        {imagenes.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-red-700/60 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-0"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-700/60 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-0"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicadores de página */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {imagenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index ? "bg-red-600 w-6" : "bg-red-700/50 hover:bg-red-600"
                  }`}
                  aria-label={`Imagen ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Título */}
      <h4 className="text-red-400 font-bold text-xl mb-3 group-hover:text-red-300 transition-colors">
        {titulo}
      </h4>

      {/* Descripción */}
      <p className="text-gray-300 text-sm leading-relaxed">{descripcion}</p>
    </div>
  );
};

export default MecanicaCard;