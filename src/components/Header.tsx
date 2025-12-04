import { Menu, X, Home, Zap, Users, Video, Download, Gamepad2 } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '#hero', icon: Home },
    { label: 'Características', href: '#features', icon: Zap },
    { label: 'Personajes', href: '#characters', icon: Users },
    { label: 'Tráiler', href: '#trailer', icon: Video },
    { label: 'Descargar', href: '#download', icon: Download },
  ]

  return (
    <header className="w-full bg-black/40 backdrop-blur-xl sticky top-0 z-50 border-b border-neutral-800/50">
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-900 rounded-lg flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-red-700/50 transition-all">
            <Gamepad2 size={20} />
          </div>
          <div className="text-white font-bold text-lg tracking-tight hidden sm:block">NOCTURNA</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a 
                key={item.href}
                href={item.href} 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium text-sm group"
              >
                <Icon size={16} className="group-hover:text-red-500 transition-colors" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a href="#download" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-red-700/30">
            <Download size={16} />
            Descargar Juego
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/5 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800/50 bg-black/60 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.href}
                    href={item.href} 
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors font-medium py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    <Icon size={18} className="text-red-500" />
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <a 
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <Download size={18} />
              Descargar Juego
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
