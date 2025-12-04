import { Play } from "lucide-react";
import { useState } from "react";

type TrailerProps = {
  src?: string; // Puede ser URL de YouTube o ruta local MP4
};

export default function Trailer({ src }: TrailerProps) {
  const [open, setOpen] = useState(false);

  const isMp4 = src?.toLowerCase().endsWith(".mp4");

  return (
    <>
      {/* Video Preview */}
      <div
        className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer group"
        role="button"
        onClick={() => setOpen(true)}
      >
        {isMp4 ? (
          <video
            src={src}
            className="w-full h-full object-cover"
            muted
            loop
            preload="metadata"
          />
        ) : (
          <iframe
            className="w-full h-full"
            src={src ?? "https://www.youtube.com/embed/dQw4w9WgXcQ"}
            title="Trailer"
            allowFullScreen
          />
        )}
        
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
          <div className="p-4 bg-red-700 rounded-full shadow-lg group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
            <Play color="#fff" size={32} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-3xl bg-black rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar modal al hacer click dentro del video
          >
            <div className="relative pb-[56.25%]">
              {isMp4 ? (
                <video
                  src={src}
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                />
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={src ?? "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                  title="Trailer"
                  allowFullScreen
                />
              )}
            </div>
            <button
              aria-label="Cerrar"
              className="absolute right-4 top-4 text-white text-2xl font-bold hover:text-red-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
