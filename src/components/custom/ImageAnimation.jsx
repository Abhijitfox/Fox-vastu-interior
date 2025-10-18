import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageAnimation = ({ images }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startAutoSlide();
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  return (
    <div className="md:w-[45%] w-full flex flex-col items-center">
      {/* Responsive Wrapper */}
      <div className="relative w-full max-w-[480px] h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`slide-${index}`}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          />
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="flex gap-10 mt-6 sm:mt-8 text-[#022c32] text-2xl sm:text-3xl font-light">
        <button
          onClick={handlePrev}
          className="hover:scale-110 transition-transform"
          aria-label="Previous Image"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="hover:scale-110 transition-transform"
          aria-label="Next Image"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ImageAnimation;
