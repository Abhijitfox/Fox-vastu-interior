import React, { useState } from "react";

const AboutSection = () => {
  const cards = [
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/loft-wall-living-room-have-sofa-decoration-3d-rendering-1-1000x1000.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/living-room-interior-have-cabinet-tv-leather-armchair-cement-room-with-concrete-wall-3d-rendering-1000x1000.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/living-room-loft-industrial-style-with-blue-sofa-empty-concrete-wall-3d-rendering-1000x1000.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? cards.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === cards.length - 1 ? 0 : current + 1);

  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
      {/* Left Column */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold flex gap-2">
          <span className="animate-slide-in-right">About</span>
          <span className="animate-slide-in-right delay-150">Us</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          Where Imagination Meets Interiors
        </h2>
      </div>

      {/* Right Column - Card Slider */}
      <div className="md:w-1/2 relative">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={cards[current]}
            alt={`Card ${current + 1}`}
            className="w-full h-96 object-cover transition-transform duration-500"
          />
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
