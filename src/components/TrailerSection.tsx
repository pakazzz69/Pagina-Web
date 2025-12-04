import Trailer from "./Trailer";

export default function TrailerSection() {
  const trailers = [
    { id: 1, src: "/videos/trailer.mp4", title: "Tráiler Principal" },
    { id: 2, src: "/videos/trailer2.mp4", title: "Gameplay Reveal" },
  ];

  return (
    <section id="trailer" className="py-20 container mx-auto px-6 md:px-12">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mira los Tráilers</h2>
        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
          Descubre el mundo oscuro y fascinante de NOCTURNA. Prepárate para una experiencia que desafiará tus límites psicológicos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {trailers.map((trailer) => (
          <div key={trailer.id} className="group">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl hover:shadow-red-700/50 transition-all duration-300">
              <Trailer src={trailer.src} />
            </div>
            <p className="text-gray-300 font-semibold mt-4 text-center">{trailer.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
