import React, { useState, useEffect } from "react";

// carouselData - Her bir slaytın içeriği ve arka plan görselleri
const carouselData = [
  {
    title: "Slayt 1",
    description: "Bu, ilk slaytın içeriğidir.",
    buttonText: "Buton 1",
    imageUrl: "https://picsum.photos/400/900", // Görsel URL'si
  },
  {
    title: "Slayt 2",
    description: "Bu, ikinci slaytın içeriğidir.",
    buttonText: "Buton 2",
    imageUrl: "https://picsum.photos/400/901", // Görsel URL'si
  },
  {
    title: "Slayt 3",
    description: "Bu, üçüncü slaytın içeriğidir.",
    buttonText: "Buton 3",
    imageUrl: "https://picsum.photos/400/902", // Görsel URL'si
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sonraki slayta geçiş
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  // Önceki slayta geçiş
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  // Otomatik geçiş (5 saniyede bir)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Temizleme işlemi
  }, []);

  return (
    <div className="">
      {/* Carousel Slide */}
      <div
        className="bg-cover bg-center w-min-full h-[300px] flex flex-col items-center justify-center gap-4"
        style={{
          backgroundImage: `url(${carouselData[currentIndex].imageUrl})`,
        }}
      >
        <div>
          <h2>{carouselData[currentIndex].title}</h2>
          <p>{carouselData[currentIndex].description}</p>
          <button>{carouselData[currentIndex].buttonText}</button>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div>
        <button onClick={prevSlide}>Önceki</button>
        <button onClick={nextSlide}>Sonraki</button>
      </div>
    </div>
  );
}
