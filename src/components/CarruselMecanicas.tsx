import React from "react";

import Carousel from "./Carousel";

interface MecanicaCard {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagenes: Array<{ src: string; caption: string }>;
}

const CarruselMecanicas: React.FC = () => {
  const mecanicas: MecanicaCard[] = [
    {
      titulo: "Sistema de Ataques",
      subtitulo: "Combate Dinámico",
      descripcion: "Domina variados sistemas de combate y ataques especiales. Cada ataque se desarrolla en tiempo real, requiriendo precisión y timing perfecto para vencer a tus enemigos.",
      imagenes: [
        { src: "/imgs/ataques.png", caption: "Sistema de Ataque Básico" },
        { src: "/imgs/ataques2.png", caption: "Ataques Especiales" },
        { src: "/imgs/ataques3.png", caption: "Combos Letales" },
      ],
    },
    {
      titulo: "Estrategia Táctica",
      subtitulo: "Planificación Profunda",
      descripcion: "Planifica cada movimiento estratégicamente en un entorno que castiga decisiones equivocadas. Usa el terreno a tu favor y anticipa los movimientos de tus enemigos.",
      imagenes: [
        { src: "/imgs/estrategia.png", caption: "Análisis Táctico" },
      ],
    },
    {
      titulo: "Sistema de Turnos",
      subtitulo: "Combate por Turnos",
      descripcion: "Combate por turnos donde cada acción tiene consecuencias. Piensa antes de actuar, gestiona tus recursos y adapta tu estrategia a los movimientos enemigos.",
      imagenes: [
        { src: "/imgs/turnos.png", caption: "Sistema de Turnos Avanzado" },
      ],
    },
  ];

  return (
    <section id="mecanicas" className="py-20 container mx-auto px-6 md:px-12">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mecánicas de Juego</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {mecanicas.map((mecanica, index) => (
          <div key={index} className="bg-gradient-to-br from-neutral-900/60 to-neutral-950 rounded-2xl p-8 border border-neutral-800 hover:border-red-700/50 transition">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{mecanica.titulo}</h3>
              <p className="text-sm font-semibold text-red-400">{mecanica.subtitulo}</p>
            </div>
            <div className="mb-6 h-80 rounded-xl overflow-hidden bg-black/30">
              <Carousel images={mecanica.imagenes} />
            </div>
            <p className="text-gray-300">{mecanica.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarruselMecanicas;
