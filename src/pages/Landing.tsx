import Hero from "../components/Hero";
import Header from "../components/Header";
import FeaturesSection from "../components/FeaturesSection";
import TrailerSection from "../components/TrailerSection";
import CharactersSection from "../components/CharactersSection";
import CarruselMecanicas from "../components/CarruselMecanicas";

import Footer from "../components/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#030303] via-[#0a0a0a] to-[#050505] text-neutral-200">
      <Header />
      <Hero />
      <FeaturesSection />
      <TrailerSection />
      <CharactersSection />
      <CarruselMecanicas />
      
      <Footer />
    </main>
  );
}
