import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ImageAnimation = ({ images }) => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    // Function to start/reset auto-slide
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

    // Manual navigation
    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        startAutoSlide();
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
        startAutoSlide();
    };
    return (
        <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-[45%] w-full flex flex-col items-center"
        >
            <div className="relative w-[480px] h-[400px] rounded-xl overflow-hidden shadow-xl">
                {images.map((img, i) => (
                    <motion.img
                        key={i}
                        src={img}
                        alt={`slide-${i}`}
                        className="absolute w-full h-full object-cover rounded-xl"
                        animate={{
                            opacity: i === index ? 1 : 0,
                            scale: i === index ? 1 : 1.05,
                            x: i === index ? 0 : 50,
                            y: i === index ? 0 : 50,
                            zIndex: i === index ? 2 : 1,
                        }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-10 mt-8 text-[#022c32] text-3xl font-light">
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
        </motion.div>
    )
}

export default ImageAnimation
