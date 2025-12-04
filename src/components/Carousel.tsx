import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselItem = {
  src: string;
  caption?: string;
};

const Carousel = ({
  images = [] as CarouselItem[],
  autoPlay = true,
  autoPlayTime = 5000,
}) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(next, autoPlayTime);
    return () => clearInterval(interval);
  }, [index, autoPlay, autoPlayTime]);

  if (images.length === 0) {
    return <div className="w-full h-96 bg-black/30 rounded-2xl flex items-center justify-center text-gray-500">Sin imágenes</div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl group">
      {/* Image Container */}
      <div className="relative w-full h-full bg-black">
        <img
          src={images[index].src}
          alt={images[index].caption ?? `Imagen ${index + 1}`}
          className="w-full h-full object-contain transition-opacity duration-500"
        />

        {/* Caption */}
        {images[index].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <p className="text-white font-semibold text-lg">{images[index].caption}</p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 justify-center">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index 
                ? "bg-white w-8" 
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carousel;
