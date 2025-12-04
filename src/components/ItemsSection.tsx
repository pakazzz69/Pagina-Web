import Carousel from "./Carousel";

function ItemCategory({ title, description, images }: { title: string; description: string; images: Array<{ src: string; caption: string }> }) {
  return (
    <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-950 rounded-2xl p-8 border border-neutral-800">
      <h4 className="text-2xl font-bold text-white mb-6">{title}</h4>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="h-80 rounded-xl overflow-hidden bg-black/30 mb-6">
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default function ItemsSection() {
  return (
    <div className="mb-20">
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Arsenal y Objetos</h3>
        <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <ItemCategory
          title="Armas Letales"
          description="Domina una variedad de armas para enfrentarte a las amenazas del abismo:"
          images={[
            { src: "/imgs/686.png", caption: "Escopeta Beretta 686" },
            { src: "/imgs/AK.png", caption: "Fusil de asalto AK-47" },
            { src: "/imgs/aug.png", caption: "Fusil Bullpup STYER AUG" },
            { src: "/imgs/fn.png", caption: "Fusil de batalla FN FAL" },
            { src: "/imgs/g3.png", caption: "Fusil de batalla HK G3" },
            { src: "/imgs/glock.png", caption: "Pistola de 45 ACP Glock 19" },
            { src: "/imgs/fs.png", caption: "Pistola de 9mm Beretta 92 FS" },
            { src: "/imgs/uzi.png", caption: "Subfusil de 9mm UZI" },
            { src: "/imgs/vector.png", caption: "Subfusil de 45 ACP Kriss Vector" },
          ]}
        />
        <ItemCategory
          title="Objetos Consumibles"
          description="Recursos esenciales para tu supervivencia:"
          images={[
            { src: "/imgs/ifak.png", caption: "Botiquín de Primeros Auxilios Individual" },
            { src: "/imgs/pastillas.png", caption: "Contenedor de Betabloqueadores" },
            { src: "/imgs/hypo.png", caption: "Hiperestimulante: Aumenta Vida Máxima" },
            { src: "/imgs/stim.png", caption: "Inyector de Salud: Recupera Vida" },
          ]}
        />
      </div>
    </div>
  );
}
