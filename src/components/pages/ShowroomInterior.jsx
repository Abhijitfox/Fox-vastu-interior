    import React from "react";
    import { motion } from "framer-motion";
    import { Link } from "react-router-dom";
import ShowroomFeatures from "../main/services/ShowroomFeatures";
import ShowroomGallery from "../main/services/ShowroomGallery";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";
import WhyChooseUs from "../main/services/WhyChooseUs";

    const ShowroomInterior = () => {
    const features = [
        {
        title: "Luxury Showroom Layout",
        description: "Optimized space to showcase products elegantly.",
        icon: "/assets/icons/layout.svg",
        },
        {
        title: "Lighting & Ambience",
        description: "Create the perfect mood for customers.",
        icon: "/assets/icons/light.svg",
        },
        {
        title: "Interactive Displays",
        description: "Engage visitors with modern interactive setups.",
        icon: "/assets/icons/display.svg",
        },
    ];

    const galleryImages = [
        "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-style-1-1300x1280.jpg",
        "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/stylish-compositon-modern-living-room-interior-with-frotte-armchair-sofa-plants-painting-wooden-commode-side-table-elegant-home-accessories-template-copy-spacexa-1300x1280.jpg",
        "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-style-1-1300x1280.jpg",
        "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/stylish-compositon-modern-living-room-interior-with-frotte-armchair-sofa-plants-painting-wooden-commode-side-table-elegant-home-accessories-template-copy-spacexa-1300x1280.jpg",
        "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-style-1-1300x1280.jpg",
        "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/stylish-compositon-modern-living-room-interior-with-frotte-armchair-sofa-plants-painting-wooden-commode-side-table-elegant-home-accessories-template-copy-spacexa-1300x1280.jpg",
    ];

    const steps = [
        "Concept & Ideation",
        "Space Planning & Layout",
        "Design Development",
        "Final Execution",
    ];

    return (
        <div className="w-full overflow-hidden text-gray-800 font-sans">
      {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
  {/* Background Image with Scale Animation */}
  <motion.div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/images/services-hero-img.jpg')" }}
    initial={{ scale: 1 }}
animate={{ scale: 1.09 }}
    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
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
      Showroom Interior Design
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6">
      Transforming commercial spaces into immersive brand experiences
    </p>
    <Link
      to="/contact-us"
      className="inline-block px-8 py-3 bg-white text-[#0b2545] rounded-full font-semibold hover:bg-white/90 transition"
    >
      Let's Talk
    </Link>
  </motion.div>
</section>


        {/* Features Section */}
<ShowroomFeatures/>

        {/* Gallery Section */}
      <ShowroomGallery/>
        {/* Process / Steps Section */}
<WhyChooseUs/>

        {/* Project Inquiry Section */}
<ProjectInquirySection />
            <BackgroundImageSwitcher
                image="/assets/images/hero-slideimg-1.jpeg"

            />
        </div>
    );
    };

    export default ShowroomInterior;
