import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import FeaturesSection from '../custom/FeaturesSection';
import GallerySection from '../custom/GallerySection';
import ProjectInquirySection from '../custom/ProjectInquirySection';
import BackgroundImageSwitcher from '../custom/BackgroundImageSwitcher';

const HotelInteriors = () => {
    const hotelFeatures = [
  {
    title: "Luxurious Guest Rooms",
    description:
      "Elegant, comfortable rooms designed to provide guests with a relaxing and memorable stay.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/bed.png",
  },

  {
    title: "Fine Dining & Lounges",
    description:
      "Sophisticated dining areas and lounges that combine aesthetic appeal with functionality.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/restaurant.png",
  },
  {
    title: "Spa & Wellness Areas",
    description:
      "Peaceful wellness and spa facilities designed to provide relaxation and rejuvenation.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/spa.png",
  },
];
const hotelImages = [
  "/assets/images/hotel-interior-5.avif",
  "/assets/images/hotel-interior-2.avif",
  "/assets/images/hotel-interior-3.avif",
  "/assets/images/hotel-interior-4.avif",
  "/assets/images/hotel-interior-1.avif",
  "/assets/images/hotel-interior-6.avif",
];
  return (
    <div className="w-full overflow-hidden text-gray-800 font-sans">
                <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Scale Animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/corporate-office-Interior-service-hero.jpg')",
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
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl px-6"
        >
       <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
  Hotel Interior
</h1>
<p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6">
  Crafting luxurious, welcoming, and functional hotel spaces that delight every guest.
</p>


          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 bg-white text-[#0b2545] rounded-full font-semibold hover:bg-white/90 transition"
          >
            Let’s Talk
          </Link>
        </motion.div>
      </section>
       <FeaturesSection
    title="Exquisite Hotel Interiors"
    subtitle="Designing luxurious, functional, and memorable hotel spaces for an exceptional guest experience."
    features={hotelFeatures}
  />
    <GallerySection title=" Hotel Interiors Gallery" images={hotelImages} />
 <ProjectInquirySection />

      {/* Background Transition */}
      <BackgroundImageSwitcher image="/assets/images/hero-slideimg-1.jpeg" />
    </div>
  )
}

export default HotelInteriors
