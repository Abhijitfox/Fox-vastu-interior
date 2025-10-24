import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";
import WhyChooseUsSection2 from "../custom/WhyChooseUsSection2";
import FeaturesSection from "../custom/FeaturesSection";
import GallerySection from "../custom/GallerySection";

const ResidentialInterior = () => {
  
const residentialFeatures = [
  {
    title: "Elegant Living Rooms",
    description:
      "Warm and sophisticated spaces designed to bring families together in comfort and style.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/sofa.png",
  },
  {
    title: "Modern Kitchens",
    description:
      "Combining functionality with design to create perfect cooking and social areas.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/kitchen.png",
  },
  {
    title: "Luxury Bedrooms",
    description:
      "Personalized spaces that promote relaxation and reflect your unique personality.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/bed.png",
  },
];

const residentialFeaturesforwhychoseus = [
  {
    title: "Tailored Design Approach",
    description:
      "We listen, collaborate, and craft interiors that truly reflect your lifestyle and aspirations.",
    image: "/assets/images/whychooseus1.jpg",
  },
  {
    title: "Attention to Detail",
    description:
      "Every finish, texture, and lighting choice is made with precision and purpose.",
    image: "/assets/images/whychooseus2.jpg",
  },
  {
    title: "Sustainable Materials",
    description:
      "We integrate eco-friendly materials and methods to create long-lasting, responsible designs.",
    image: "/assets/images/whychooseus3.jpg",
  },
  {
    title: "Expert Team",
    description:
      "Our designers and craftsmen bring years of expertise to every project.",
    image: "/assets/images/whychooseus4.jpg",
  },
];

const residentialImages = [
  "/assets/images/residential-1.avif",
  "/assets/images/residential-2.avif",
  "/assets/images/residential-3.avif",
  "/assets/images/residential-4.avif",
  "/assets/images/residential-5.avif",
  "/assets/images/residential-6.avif",
];


  return (
    <div className="w-full overflow-hidden text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Scale Animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/residential-hero.jpg')",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Residential Interior Design
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6">
            Crafting timeless homes that reflect your lifestyle and personality.
          </p>
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 bg-white text-[#0b2545] rounded-full font-semibold hover:bg-white/90 transition"
          >
            Let’s Talk
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
<FeaturesSection
    title="Designed for Modern Living"
    subtitle="Every corner of your home deserves thoughtful design, blending comfort and aesthetics in perfect harmony."
    features={residentialFeatures}
  />

      {/* Gallery Section */}
  <GallerySection title="Residential Gallery" images={residentialImages} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection2 title="Why Choose Us" features={residentialFeaturesforwhychoseus}/>
      {/* Project Inquiry Section */}
      <ProjectInquirySection />

      {/* Background Transition */}
      <BackgroundImageSwitcher image="/assets/images/hero-slideimg-1.jpeg" />
    </div>
  );
};

export default ResidentialInterior;
