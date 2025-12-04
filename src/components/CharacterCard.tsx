import Carousel from "./Carousel";

interface CharacterCardProps {
  name: string;
  role: string;
  roleColor: string;
  description: string;
  images: Array<{ src: string; caption: string }>;
}

export default function CharacterCard({ name, role, roleColor, description, images }: CharacterCardProps) {
  return (
    <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-950 rounded-2xl p-8 border border-neutral-800 hover:border-red-700/50 transition">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className={`text-sm font-semibold ${roleColor}`}>{role}</p>
      </div>
      <div className="mb-6 h-80 rounded-xl overflow-hidden bg-black/30">
        <Carousel images={images} />
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
