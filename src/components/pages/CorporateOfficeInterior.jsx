import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FeaturesSection from '../custom/FeaturesSection';
import GallerySection from '../custom/GallerySection';
import WhyChooseUsSection2 from '../custom/WhyChooseUsSection2';
import ProjectInquirySection from '../custom/ProjectInquirySection';
import BackgroundImageSwitcher from '../custom/BackgroundImageSwitcher';
import { Helmet } from 'react-helmet-async';
const CorporateOfficeInterior = () => {
  const corporateFeatures = [
  {
    title: "Innovative Workspaces",
    description:
      "Smart layouts that boost collaboration and reflect your brand identity.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/office.png",
  },
  {
    title: "Executive Cabins",
    description:
      "Elegant private spaces designed for focus, prestige, and productivity.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/meeting-room.png",
  },
  {
    title: "Creative Lounges",
    description:
      "Relaxed areas that foster creativity and enhance employee well-being.",
    icon: "https://img.icons8.com/ios-filled/100/0b2545/lounge.png",
  },
];
const corporateImages = [
  "/assets/images/corporate-office-Interior-features-2.avif",
  "/assets/images/corporate-office-Interior-features-1.avif",
  "/assets/images/corporate-office-Interior-features-3.avif",
  "/assets/images/corporate-office-Interior-features-4.avif",
  "/assets/images/corporate-office-Interior-features-5.avif",
  "/assets/images/corporate-office-Interior-features-6.avif",
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
  return (
    <>
    <Helmet>
  <title>Corporate & Office Interior Design | VastuVibe</title>
  <meta
    name="description"
    content="Design smart, modern, and productivity-focused office spaces that inspire teams and make lasting impressions."
  />
  <link rel="canonical" href="https://playful-cranachan-8efc2c.netlify.app/services/corporate-office-interior-design" />
</Helmet>

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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
  Corporate Office Interior
</h2>
<p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6">
  Designing modern workspaces that inspire productivity, collaboration, and success.
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
    title="Smart Design for Modern Workspaces"
    subtitle="Crafting functional, inspiring office interiors that enhance productivity and leave a lasting impression."
    features={corporateFeatures}
/>
  <GallerySection title=" Corporate Office Gallery" images={corporateImages} />
  <WhyChooseUsSection2 title="Why Choose Us" features={residentialFeaturesforwhychoseus}/>
<ProjectInquirySection />

      {/* Background Transition */}
      <BackgroundImageSwitcher image="/assets/images/hero-slideimg-1.jpeg" />
    </div>
    </>
  )
}

export default CorporateOfficeInterior
