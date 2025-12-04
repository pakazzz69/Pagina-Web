import Carousel from "./Carousel";

function PhaseCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="inline-block px-3 py-1 bg-red-700/20 text-red-400 rounded-full text-sm font-semibold mb-3">
        {number}
      </div>
      <h5 className="text-white font-semibold mb-2">{title}</h5>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default function ArtSection() {
  return (
    <div className="mb-20">
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Arte y Diseño</h3>
        <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 rounded-full"></div>
      </div>

      <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-950 rounded-2xl p-8 border border-neutral-800 mb-12">
        <h4 className="text-2xl font-bold text-white mb-6">Proceso de Esculpido</h4>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <PhaseCard
            number="Fase 1"
            title="Captura de Imágenes"
            description="4 ángulos: frontal, posterior, lateral izquierdo y derecho"
          />
          <PhaseCard
            number="Fase 2"
            title="Frames de Animación"
            description="3 frames por movimiento: base, intermedio y final"
          />
          <PhaseCard
            number="Fase 3"
            title="Consistencia Visual"
            description="Mismos ángulos, fondos e iluminación para cada personaje"
          />
        </div>

        <div className="h-80 rounded-xl overflow-hidden bg-black/30 mb-6">
          <Carousel
            images={[
              { src: "/imgs/frame-00000.jpg", caption: "Vista Lateral Izquierda" },
              { src: "/imgs/frame-00001.jpg", caption: "Vista Posterior" },
              { src: "/imgs/frame-00002.jpg", caption: "Vista Lateral Derecha" },
              { src: "/imgs/frame-00006.jpg", caption: "Vista Frontal" },
            ]}
          />
        </div>

        <p className="text-gray-300 leading-relaxed">
          El proceso de captura se realiza mediante la fotografía de 4 imágenes en diferentes ángulos. Cada movimiento contiene 3 frames de acción: uno base, uno intermedio y uno final. Este mismo proceso se realizó para cada personaje, manteniendo los mismos ángulos, fondos e iluminación para garantizar consistencia visual.
        </p>
      </div>
    </div>
  );
}
