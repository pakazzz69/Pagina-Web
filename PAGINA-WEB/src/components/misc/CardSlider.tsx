import { useState } from "react";
import type { SliderProps } from "../../interfaces/SliderProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Slider: React.FC<SliderProps> = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev == 0 ? images.length -1 : prev));
    };

    const forward = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev == images.length - 1 ? 0 : prev));
    };

    return (
    <div className="w-full place-content-center bg-gray-900">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-900 p-2 sm:p-4">
            <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
                {currentIndex + 1}/{images.length}
            </div>

            <button
            onClick={previous}
            className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-700 shadow-md"
            >
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>

            <button
            onClick={forward}
            className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-700 shadow-md"
            >
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>

            <div className="w-full h-60 flex justify-center items-center bg-gray-900 py-8">
            {images.map((image, index) => (
                <div
                key={index}
                className={`absolute top-0 transition-opacity duration-300 ${
                    currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
                >
                <img src={image} alt={`slider-${index}`} className="rounded-sm h-80 w-[20rem] object-contain mx-auto" />
                </div>
            ))}
            </div>
        </div>
    </div>

    );
};

export default Slider;
