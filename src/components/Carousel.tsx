import { useState, useEffect } from "react";

const Carousel = ({ images = [], autoPlay = true, autoPlayTime = 3000 }) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(next, autoPlayTime);
        return () => clearInterval(interval);
    }, [index, autoPlay, autoPlayTime]);

    return (
        <div className="relative w-full max-w-3xl h-72 md:h-96 mx-auto overflow-hidden rounded-2xl shadow-xl">

            {/* Imagen */}
            <img
                src={images[index]}
                alt=""
                className="w-full h-full object-contain object-center transition-opacity duration-500 bg-black"
            />

            {/* Botón izquierdo */}
            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl px-3 py-1 rounded-full"
            >
                ❮
            </button>

            {/* Botón derecho */}
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl px-3 py-1 rounded-full"
            >
                ❯
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 w-full flex justify-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white scale-110" : "bg-white/50"
                            }`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
