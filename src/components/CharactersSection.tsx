import CharacterCard from "./CharacterCard";
import EnemiesSection from "./EnemiesSection";
import ItemsSection from "./ItemsSection";
import ArtSection from "./ArtSection";

export default function CharactersSection() {
  return (
    <section id="characters" className="py-20 container mx-auto px-6 md:px-12">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Personajes Principales</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <CharacterCard
          name="Y3LLW"
          role="Protagonista Activo"
          roleColor="text-red-400"
          description="Un personaje dotado de agilidad y determinación, listo para enfrentarse a las oscuridades que acechan en las sombras."
          images={[
            { src: "/imgs/pc_yellow_1.png", caption: "Vista Frontal" },
            { src: "/imgs/pc_yellow_2.png", caption: "Vista Lateral" },
            { src: "/imgs/pc_yellow_3.png", caption: "Vista Posterior" },
            { src: "/imgs/pc_yellow_4.png", caption: "Vista Detalle" },
          ]}
        />
        <CharacterCard
          name="6R4Y"
          role="Protagonista Alternativo"
          roleColor="text-blue-400"
          description="Una figura misteriosa con habilidades únicas, que ofrece una perspectiva diferente en la batalla contra lo desconocido."
          images={[
            { src: "/imgs/pc_gray_4.png", caption: "Vista Frontal" },
            { src: "/imgs/pc_gray_3.png", caption: "Vista Lateral" },
            { src: "/imgs/pc_gray_2.png", caption: "Vista Posterior" },
            { src: "/imgs/pc_gray_1.png", caption: "Vista Detalle" },
          ]}
        />
      </div>

      <EnemiesSection />
      <ItemsSection />
      <ArtSection />
    </section>
  );
}
