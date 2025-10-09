import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCarousel from "../custom/CustomCarousel";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import ScrollTextBridge from "./ScrollTextBridge";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";



import {
    faTwitter,
    faFacebookF,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import CustomDots from "../custom/CustomDots";

const slides = [
    {
        id: 1,
        title: "Creating Harmony Through Design",
        text: "Interior design aims to create spaces that not only look visually appealing but also enhance the well-being and quality of life.",
        image: "/assets/images/hero-slideimg-1.jpeg",
    },
    {
        id: 2,
        title: "Where Style Meets Comfort",
        text: "Interior design encompasses various aspects, including selecting and arranging furniture, choosing color schemes.",
        image: "/assets/images/hero-slideimg-2.jpeg",
    },
    {
        id: 3,
        title: "Discover the Art of Living",
        text: "Interior design aims to create spaces that not only look visually appealing but also enhance the well-being and quality of life.",
        image: "/assets/images/hero-slideimg-3.jpeg",
    },
    {
        id: 4,
        title: "Your Space, Your Signature Style",
        text: "Interior design is the art and science of enhancing the interior spaces of buildings to achieve a more functional.",
        image: "/assets/images/hero-slideimg-4.jpeg",
    },
    {
        id: 5,
        title: "Transform Your Home",
        text: "Ultimately, interior design aims to create environments that enhance the quality of life, evoke certain moods or emotions.",
        image: "/assets/images/hero-slideimg-5.jpeg",
    },
];

// preload images
slides.forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
});

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    // Auto slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden bg-black">
                {/* Background images */}
                <div className="absolute inset-0 z-0">
                    {slides.map((slide, index) => (
                        <motion.img
                            key={slide.id}
                            src={slide.image}
                            alt={slide.title}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{
                                opacity: current === index ? 1 : 0,
                                scale: current === index ? 1.08 : 1.05,
                            }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                        />
                    ))}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content Layer */}
                <div className="flex justify-between items-center absolute inset-0 px-4 sm:px-8 md:px-10 lg:px-20">
                    {/* Left social icons */}
                    <div className="hidden md:flex flex-col gap-3 sm:gap-4 text-white text-sm sm:text-base md:text-lg lg:text-2xl">
                        <FontAwesomeIcon icon={faFacebookF} className="transition-colors" />
                        <FontAwesomeIcon icon={faTwitter} className="transition-colors" />
                        <FontAwesomeIcon icon={faInstagram} className="transition-colors" />
                    </div>

                    {/* Center text */}
                    <div className="flex flex-col gap-y-8 justify-center items-start text-white z-10 max-w-xs sm:max-w-md md:max-w-2xl">
                        {/* Title */}
                        <motion.h1
                            key={slides[current].title}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                        >
                            {slides[current].title}
                        </motion.h1>

                        {/* Text */}
                        <motion.p
                            key={slides[current].text}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            className="text-xs sm:text-sm md:text-base lg:text-xl max-w-sm sm:max-w-md md:max-w-xl"
                        >
                            {slides[current].text}
                        </motion.p>
                    </div>

                    {/* Right scroll down */}
                    <div className="md:flex hidden  flex-col justify-center items-center text-white space-y-4 sm:space-y-6 md:space-y-12 lg:space-y-16">
                        <FontAwesomeIcon
                            icon={faArrowDown}
                            className="text-sm sm:text-lg md:text-xl lg:text-2xl animate-bounce"
                        />
                        <div className="text-[8px] sm:text-[10px] md:text-sm tracking-widest uppercase rotate-90">
                            SCROLL DOWN
                        </div>
                    </div>

                </div>

                {/* Bottom left dots */}
                <CustomDots slides={slides} setCurrent={setCurrent} current={current} className="absolute left-10 sm:left-14 md:left-16 bottom-8 sm:bottom-12 md:bottom-16 flex gap-3 md:gap-4 z-20" />

                {/* Bottom right arrows */}
                <div className="absolute right-10 sm:right-14 md:right-16 bottom-8 sm:bottom-12 md:bottom-16 flex justify-center items-center gap-3 md:gap-4 z-20">
                    <button
                        onClick={prevSlide}
                        className="p-1.5 sm:p-2 rounded-full bg-white/30 hover:bg-white/60 transition"
                    >
                        <ChevronLeft className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-1.5 sm:p-2 rounded-full bg-white/30 hover:bg-white/60 transition"
                    >
                        <ChevronRight className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </button>
                </div>
            </div>
            <Section1 />
            <ScrollTextBridge />
            <Section2 />
            <CustomCarousel />
            <Section3 />
            <ProjectInquirySection />
            <BackgroundImageSwitcher
                image="/assets/images/bg-1.jpeg"

            />

        </>
    );
}
