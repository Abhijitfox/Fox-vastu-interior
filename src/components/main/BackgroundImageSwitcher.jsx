import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundImageSwitcher = () => {
    const [bgIndex, setBgIndex] = useState(0);

    const images = [
        "/assets/images/bg-1.jpeg", // background for Section1 + Section2
        "/assets/images/bg-1.jpeg", // background for Section3 + Section4
    ];

    // Preload images
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const switchPoint = window.innerHeight * 0; // halfway between Section2 & Section3
            setBgIndex(scrollPosition > switchPoint ? 1 : 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            key={bgIndex}
            className="fixed top-0 left-0 w-full h-screen -z-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[bgIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <div className="absolute inset-0 bg-black/20" />
        </motion.div>
    );
};

export default BackgroundImageSwitcher;
