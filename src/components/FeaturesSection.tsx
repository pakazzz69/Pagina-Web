import FeatureCard from "./FeatureCard";
import { Eye, Footprints, Zap } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 container mx-auto px-6 md:px-12">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Características Principales</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard title="Narrativa Inmersiva" text="Sumérgete en una historia profunda y aterradora que te mantendrá al borde del asiento." icon={<Eye size={24} />} />
        <FeatureCard title="Dinámicas Únicas" text="Mecánicas de juego innovadoras que desafían tu ingenio y reflejos." icon={<Zap size={24} />} />
        <FeatureCard title="Mundo Persistente" text="Un entorno vivo que reacciona a tus acciones y decisiones." icon={<Footprints size={24} />} />
      </div>
    </section>
  );
}
