import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ResidentialFeatures from "../main/services/ResidentialFeatures";
import ResidentialGallery from "../main/services/ResidentialGallery";
import WhyChooseUsforResidential from "../main/services/WhyChooseUsforResidential";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";

const ResidentialInterior = () => {
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
      <ResidentialFeatures />

      {/* Gallery Section */}
      <ResidentialGallery />

      {/* Why Choose Us Section */}
      <WhyChooseUsforResidential />

      {/* Project Inquiry Section */}
      <ProjectInquirySection />

      {/* Background Transition */}
      <BackgroundImageSwitcher image="/assets/images/hero-slideimg-1.jpeg" />
    </div>
  );
};

export default ResidentialInterior;
