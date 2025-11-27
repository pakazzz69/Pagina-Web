import React, { useState } from "react";

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
    <div className="bg-neutral-900/40 p-5 rounded-xl border border-neutral-700 shadow-lg hover:shadow-cyan-500/20 relative">
      
      {/* Carrusel interno */}
      <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={titulo}
            className={`w-full h-56 object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-300 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Flechas */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-neutral-800/70 px-2 py-1 rounded-full text-white hover:bg-cyan-500 transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-neutral-800/70 px-2 py-1 rounded-full text-white hover:bg-cyan-500 transition"
        >
          ›
        </button>
      </div>

      {/* Título estilo gamer */}
      <h4 className="text-cyan-400 font-extrabold text-xl drop-shadow-[0_0_6px_#00eaff] tracking-wide mb-2">
        {titulo}
      </h4>

      {/* Descripción */}
      <p className="text-gray-300 text-sm leading-relaxed italic">{descripcion}</p>
    </div>
  );
};

export default MecanicaCard;
