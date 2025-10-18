import React from "react";
import { motion } from "framer-motion";

const ScrollTextBridge = () => {
    return (
        <div className="relative h-[55vh] md:h-[60vh] flex items-center justify-center bg-transparent overflow-hidden">
            <motion.h2
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 45, // slow and calm motion
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2, // wait before starting to move
                }}
                className="text-[3rem] md:text-[6rem] font-extrabold uppercase tracking-[0.1em] whitespace-nowrap"
                style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #FFF5D3",
                    letterSpacing: "0.01em",
                    lineHeight: 0.5,
                }}
            >
                INTERIOR DESIGN · MODERN STRUCTURES · THINKING OUTSIDE THE BOX · DECORATION ·
            </motion.h2>
        </div>
    );
};

export default ScrollTextBridge;
