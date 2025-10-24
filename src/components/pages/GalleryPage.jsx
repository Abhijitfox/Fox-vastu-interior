import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ShowroomGallery from "../main/services/ShowroomGallery";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";
import WhyChooseUsSection from "../custom/WhyChooseUsSection";

const GalleryPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

const features = [
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

  return (
        <div className="w-full overflow-hidden text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-style-1-1300x1280.jpg')",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Vastu Interior Gallery
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
            Explore our curated collection of Vastu-compliant interior designs.
          </p>
            <Link
            to="/contact-us"
            className="inline-block px-8 py-3 bg-white text-[#0b2545] rounded-full font-semibold hover:bg-white/90 transition"
          >
            Let’s Talk
          </Link>
        </motion.div>
      </section>

      {/* Gallery Section */}
    <ShowroomGallery/>
      {/* Featured Projects Section */}
<WhyChooseUsSection
    title="Why Choose Us"
    subtitle="Experience excellence through creative design, precision execution, and timeless appeal."
    features={features}
  />
<ProjectInquirySection/>
<BackgroundImageSwitcher
                image="/assets/images/hero-slideimg-1.jpeg"

            />   
    </div>
  );
};

export default GalleryPage;
