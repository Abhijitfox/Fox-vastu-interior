import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import FeaturesSection from '../custom/FeaturesSection';
import GallerySection from '../custom/GallerySection';
import ProjectInquirySection from '../custom/ProjectInquirySection';
import BackgroundImageSwitcher from '../custom/BackgroundImageSwitcher';
import { Helmet } from 'react-helmet-async';

const HotelInteriors = () => {

  // FEATURES SECTION — replaced with EXACT service list from Word file
  const hotelFeatures = [
    {
      title: "Smart space planning and layout ideas.",
      description:
        "We take care of everything your home needs from start to finish.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/sofa.png",
    },
    {
      title: "Custom-made furniture and modular carpentry.",
      description:
        "Custom-made furniture and modular carpentry tailored to your requirements.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/kitchen.png",
    },
    {
      title: "Well-planned lighting that sets the right mood.",
      description:
        "Lighting that sets the right mood and enhances the entire space.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/bed.png",
    },
    {
      title: "False ceiling design and electrical planning.",
      description:
        "Detailed false ceiling design and electrical planning for seamless execution.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/home.png",
    },
    {
      title: "Functional kitchen and wardrobe designs.",
      description:
        "Functional and well-structured kitchen and wardrobe designs.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/wardrobe.png",
    },
    {
      title: "Décor styling, soft furnishing, and final touches.",
      description:
        "Décor styling, soft furnishings, and final touches for a complete look.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/interior.png",
    },
  ];

  // GALLERY remains same (your images)
  const hotelImages = [
    "/assets/images/hotel-interior-5.avif",
    "/assets/images/hotel-interior-2.avif",
    "/assets/images/hotel-interior-3.avif",
    "/assets/images/hotel-interior-4.avif",
    "/assets/images/hotel-interior-1.avif",
    "/assets/images/hotel-interior-6.avif",
  ];

  return (
    <>
      <Helmet>
        <title>Hotel Interior Design Services | Vastu Vibes Design</title>
        <meta
          name="description"
          content="Vastu Vibes brings smart, aesthetic, functional, and Vastu-aligned interior design with complete end-to-end execution."
        />
        <link rel="canonical" href="https://playful-cranachan-8efc2c.netlify.app/services/hotel-interior-design" />
      </Helmet>

      <div className="w-full overflow-hidden text-gray-800 font-sans">

        {/* HERO SECTION — replaced with Word file text */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
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

          {/* HERO CONTENT — EXACT LINES FROM WORD FILE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-3xl px-6"
          >
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">
              Vastu Vibes — Home Interior Designer in Pune That Turns Your Daily Life Into a Comfort Experience.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6">
              At Vastu Vibes, we design spaces that simplify your routines, calm your mind,
              and finally make your home feel like you.
            </p>

            <Link
              to="/contact-us"
              className="inline-block px-8 py-3 bg-white text-[#0b2545] rounded-full font-semibold hover:bg-white/90 transition"
            >
              Book Your Free Consultation Today
            </Link>
          </motion.div>
        </section>

        {/* FEATURES SECTION — now showing EXACT Word file service list */}
        <FeaturesSection
          title="What Exactly Do Our Interior Services Include?"
          subtitle="We take care of everything your space needs from start to finish."
          features={hotelFeatures}
        />

        {/* GALLERY SECTION */}
        <GallerySection title="Interior Design Gallery" images={hotelImages} />

        {/* INQUIRY SECTION */}
        <ProjectInquirySection />

        {/* Background Transition */}
        <BackgroundImageSwitcher image="/assets/images/hero-slideimg-1.jpeg" />
      </div>
    </>
  );
}

export default HotelInteriors
