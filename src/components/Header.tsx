import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#050505]/60 via-[#0b0b0b]/60 to-[#050505]/60 backdrop-blur-md sticky top-0 z-40 border-b border-neutral-800">
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-600 rounded-md flex items-center justify-center text-white font-bold">N</div>
          <div className="text-white font-semibold tracking-tight">NOCTURNA</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#hero" className="hover:text-white">Inicio</a>
          <a href="#history" className="hover:text-white">Historia</a>
          <a href="#characters" className="hover:text-white">Personajes</a>
          <a href="#media" className="hover:text-white">Media</a>
          <a href="#download" className="hover:text-white">Descargar</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#download" className="hidden sm:inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition">Descargar</a>
          <button className="md:hidden p-2 rounded-md text-gray-300 hover:bg-white/5"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  )
}
