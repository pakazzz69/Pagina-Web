import { Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-neutral-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white">
                <Gamepad2 size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">DARK INCURSION</h3>
            </div>
            <p className="text-gray-400 text-sm">Una experiencia de terror psicológico inmersiva.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-white transition">Inicio</a></li>
              <li><a href="#features" className="hover:text-white transition">Características</a></li>
              <li><a href="#characters" className="hover:text-white transition">Personajes</a></li>
              <li><a href="#download" className="hover:text-white transition">Descargar</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Prensa</a></li>
              <li><a href="#" className="hover:text-white transition">Media</a></li>
              <li><a href="#" className="hover:text-white transition">Comunidad</a></li>
              <li><a href="#" className="hover:text-white transition">Soporte</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Discord</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; 2026 DARK INCURSION. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
