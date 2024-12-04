// components/Carousel.tsx
import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [
    "/images/news.jpg", // Yerel resim
    "/images/news.jpg", // Harici resim
    "/images/news.jpg", // Harici resim
  ];

  

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg max-w-4xl min-h-[500px]">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1024} // Sabit genişlik
              height={500} // Sabit yükseklik
              className="rounded-lg"
            />
            {/* Başlık */}
            
          </div>
        ))}
      </div>

      {/* Önceki Buton */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-200 transition duration-300"
      >
        &#10094; {/* Sol ok */}
      </button>

      {/* Sonraki Buton */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-200 transition duration-300"
      >
        &#10095; {/* Sağ ok */}
      </button>

      {/* Göstergeler */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
