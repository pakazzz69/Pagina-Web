interface EnemyProps {
  name: string;
  level: string;
  image: string;
  description: string;
}

function EnemyCard({ name, level, image, description }: EnemyProps) {
  return (
    <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-red-900/40 rounded-2xl overflow-hidden hover:border-red-700/80 transition group">
      <div className="p-8">
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-white mb-2">{name}</h4>
          <p className="text-red-400 text-sm">{level}</p>
        </div>

        <div className="w-full h-64 bg-black/50 rounded-xl overflow-hidden flex items-center justify-center mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
          />
        </div>

        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function EnemiesSection() {
  return (
    <div className="mb-20">
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Amenazas del Abismo</h3>
        <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <EnemyCard
          name="Maleante Mutado"
          level="Amenaza Nivel Alto"
          image="/imgs/enemigo_1.gif"
          description="Habitante degenerado de la zona de exclusión, mutado más allá de lo humanamente posible. Su forma retiene apenas una apariencia humana que utiliza como engaño para atrapar a sus presas desprevenidas."
        />
        <EnemyCard
          name="Cholita Mutada"
          level="Amenaza Nivel Extremo"
          image="/imgs/enemigo_2.gif"
          description="Lo que alguna vez fue una trabajadora común, ahora es una aberración mutada más allá del reconocimiento. Sus instintos depredadores hacen de ella una de las amenazas más letales del juego."
        />
      </div>
    </div>
  );
}
