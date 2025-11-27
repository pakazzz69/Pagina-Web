import { Play } from "lucide-react";
import { useState } from "react";

export default function Trailer({ src }: { src?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden cursor-pointer" role="button" onClick={() => setOpen(true)}>
        <img src="/src/assets/trailer-thumb.svg" alt="Trailer thumbnail" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="p-4 bg-red-700 rounded-full shadow-lg">
            <Play color="#fff" size={28} />
          </div>
          <div className="absolute bottom-4 left-4 text-sm text-gray-200 bg-black/50 px-3 py-1 rounded">AQUÍ IRÁ EL TRÁILER</div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={() => setOpen(false)}>
          <div className="w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <div className="relative pb-[56.25%]">
              <iframe className="absolute inset-0 w-full h-full" src={src ?? "https://www.youtube.com/embed/dQw4w9WgXcQ"} title="Trailer" allowFullScreen />
            </div>
            <button aria-label="Cerrar" className="absolute right-4 top-4 text-white text-xl" onClick={() => setOpen(false)}>✕</button>
          </div>
        </div>
      )}
    </>
  );
}
