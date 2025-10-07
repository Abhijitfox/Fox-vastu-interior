import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/assets/images/slideimg1.jpeg",
    "/assets/images/slideimg2.jpeg",
    "/assets/images/slideimg3.jpeg",
    "/assets/images/slideimg4.jpeg",
];

const CustomCarousel = () => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const [direction, setDirection] = useState(1);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 2) % images.length);
        resetAutoSlide();
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 2 + images.length) % images.length);
        resetAutoSlide();
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 2) % images.length);
        }, 4000);
    };

    const resetAutoSlide = () => {
        clearInterval(intervalRef.current);
        startAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    const currentImages = [images[index], images[(index + 1) % images.length]];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            position: "absolute", // ✅ ensures overlap during transition
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "relative",
            transition: { duration: 0.7, ease: "easeInOut" },
        },
        exit: (direction) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0,
            position: "absolute", // ✅ keeps outgoing slide visible till fade out
        }),
    };

    return (
        <Box
            sx={{
                width: "100%",
                overflow: "hidden",
                position: "relative",
                py: { xs: 2, md: 4 },
                backgroundColor: "#fff",
            }}
        >
            {/* ⬅️ Left Arrow */}
            <IconButton
                onClick={prevSlide}
                sx={{
                    position: "absolute",
                    left: { xs: 10, md: 40 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
                    zIndex: 10,
                }}
            >
                <ChevronLeft />
            </IconButton>

            {/* ➡️ Right Arrow */}
            <IconButton
                onClick={nextSlide}
                sx={{
                    position: "absolute",
                    right: { xs: 10, md: 40 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
                    zIndex: 10,
                }}
            >
                <ChevronRight />
            </IconButton>

            {/* 🖼️ Slide Section */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AnimatePresence custom={direction} mode="popLayout">
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "1.5rem",
                            flexWrap: "wrap",
                            width: "100%",
                        }}
                    >
                        {currentImages.map((img, i) => (
                            <Box
                                key={i}
                                component="img"
                                src={img}
                                alt={`slide-${i}`}
                                sx={{
                                    width: { xs: "90%", sm: "45%", md: "45%" },
                                    height: { xs: "240px", md: "350px" },
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                                }}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Box>
    );
};

export default CustomCarousel;
