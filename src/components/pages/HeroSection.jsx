import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebookF,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Components
import CustomDots from "../custom/CustomDots";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import ScrollTextBridge from "../custom/ScrollTextBridge";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";
import Section1 from "../main/home/Section1";
import Section2 from "../main/home/Section2";
import Section3 from "../main/home/Section3";
import ServicesSection from "../main/home/ServicesSection"; // New Component
import WhyChooseSection from "../main/home/WhyChooseSection"; // New Component
import CustomCarousel from "../custom/CustomCarousel";

const slides = [
    {
        id: 1,
        title: "Vastu Vibes Design-Pune’s Soulful Interior Decorators That Create Spaces with Purpose",
        text: "Because every space has energy — we simply give it direction.",
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
        text: "We design around you, how you move, think, work, and live, then combine it all with the timeless flow of Vastu energy.",
        image: "/assets/images/hero-slideimg-3.jpeg",
    },
    {
        id: 4,
        title: "Your Space, Your Signature Style",
        text: "That’s how every project begins: not with colors or furniture, but with your story.",
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

    const handleScroll = () => {
        const next = document.getElementById("section1-anchor");
        next?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <Helmet>
                <title>Vastu Vibes Design | Best Residential Interior Designers in Pune</title>
                <meta
                    name="description"
                    content="Vastu Vibes Design - Pune’s Soulful Interior Decorators. We create spaces with purpose, blending modern aesthetics with Vastu energy."
                />
                <link rel="canonical" href="https://playful-cranachan-8efc2c.netlify.app/" />
            </Helmet>

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
                            as="h1"
                            key={slides[current].title}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight"
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
                            onClick={handleScroll}
                            icon={faArrowDown}
                            className="text-sm sm:text-lg md:text-xl lg:text-2xl animate-bounce cursor-pointer"
                        />
                        <div
                            onClick={handleScroll}
                            className="text-[8px] sm:text-[10px] md:text-sm tracking-widest uppercase rotate-90 cursor-pointer">
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

            <div id="section1-anchor">
                <Section1 />
            </div>
            <ScrollTextBridge />
            <Section2 />
            <CustomCarousel />
            <Section3 />
            <ServicesSection />
            <WhyChooseSection />
            <ProjectInquirySection />
            <BackgroundImageSwitcher image="/assets/images/bg-1.jpeg" />
        </>
    );
}