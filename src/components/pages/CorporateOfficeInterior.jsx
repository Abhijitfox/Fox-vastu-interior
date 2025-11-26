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

  // SERVICES — EXACT WORD FILE CONTENT
  const corporateFeatures = [
    {
      title: "Smart space planning and layout ideas.",
      description: "We take care of everything your home needs from start to finish.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/office.png",
    },
    {
      title: "Custom-made furniture and modular carpentry.",
      description: "Customised furniture and modular carpentry tailored around your needs.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/meeting-room.png",
    },
    {
      title: "Well-planned lighting that sets the right mood.",
      description: "Lighting that sets the right mood and enhances your space.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/lounge.png",
    },
    {
      title: "False ceiling design and electrical planning.",
      description: "False ceiling and electrical planning that ensures functionality and aesthetics.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/home.png",
    },
    {
      title: "Functional kitchen and wardrobe designs.",
      description: "Functional kitchen and wardrobe designs that simplify day-to-day living.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/wardrobe.png",
    },
    {
      title: "Décor styling, soft furnishing, and final touches.",
      description: "Décor styling, soft furnishings, and finishing touches done by our team.",
      icon: "https://img.icons8.com/ios-filled/100/0b2545/interior.png",
    },
  ];

  // GALLERY IMAGES (same structure)
  const corporateImages = [
    "/assets/images/corporate-office-Interior-features-2.avif",
    "/assets/images/corporate-office-Interior-features-1.avif",
    "/assets/images/corporate-office-Interior-features-3.avif",
    "/assets/images/corporate-office-Interior-features-4.avif",
    "/assets/images/corporate-office-Interior-features-5.avif",
    "/assets/images/corporate-office-Interior-features-6.avif",
  ];

  // WHY CHOOSE US — EXACT PARAGRAPHS FROM WORD FILE
  const residentialFeaturesforwhychoseus = [
    {
      title: "Understanding Your Lifestyle, Not Just Your Likes",
      description:
        "We start our process by understanding the details of how you live, not just what you like. That means your daily routines, your family’s requirements, your storage habits, and your preferred vibe.",
      image: "/assets/images/whychooseus1.jpg",
    },
    {
      title: "Designs That Balance Aesthetics, Function & Vastu",
      description:
        "We strike the right balance between aesthetics, function, and Vastu principles (if desired), providing you with a home that feels right, not just looks good.",
      image: "/assets/images/whychooseus2.jpg",
    },
    {
      title: "Full Transparency With 3D Visuals & Stage-Wise Planning",
      description:
        "We will provide 3D visuals with a clear, stage-wise plan, and explain the cost implications of material or design choices upfront.",
      image: "/assets/images/whychooseus3.jpg",
    },
    {
      title: "Local Expertise for Smarter Budgets & Zero Surprises",
      description:
        "We understand flat sizes, light direction, traffic noise, local material availability, and timelines. This leads to realistic schedules and smarter budgets.",
      image: "/assets/images/whychooseus4.jpg",
    },

  ];

  return (
    <>
      <Helmet>
        <title>Interior Design Services | Vastu Vibes Design</title>
        <meta
          name="description"
          content="Vastu Vibes provides personalised design, smart planning, Vastu alignment, transparent costing, and end-to-end home interior execution."
        />
      </Helmet>

      <div className="w-full overflow-hidden text-gray-800 font-sans">

        {/* HERO SECTION — EXACT WORD FILE TEXT */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/assets/images/corporate-office-Interior-service-hero.jpg')",
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <div className="absolute inset-0 bg-black/40"></div>

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
              Every home has a story. At Vastu Vibes, we design spaces that simplify your routines, calm your mind, and finally make your home feel like you.
            </p>

            <Link
              to="/contact-us"
              className="inline-block px-8 py-3 bg-white text-[#0b2545] rounded-full font-semibold hover:bg-white/90 transition"
            >
              Book Your Free Consultation Today
            </Link>
          </motion.div>
        </section>

        {/* FEATURES SECTION — WORD FILE CONTENT */}
        <FeaturesSection
          title="What Exactly Do Our Interior Services Include?"
          subtitle="We take care of everything your home needs from start to finish."
          features={corporateFeatures}
        />

        {/* GALLERY SECTION */}
        <GallerySection
          title="Interior Design Gallery"
          images={corporateImages}
        />

        {/* WHY CHOOSE US — WORD FILE CONTENT */}
        <WhyChooseUsSection2
          title="What Makes Our Interior Design Service Different?"
          features={residentialFeaturesforwhychoseus}
        />

        {/* INQUIRY SECTION */}
        <ProjectInquirySection />

        {/* Background Transition */}
        <BackgroundImageSwitcher image="/assets/images/hero-slideimg-1.jpeg" />
      </div>
    </>
  );
};

export default CorporateOfficeInterior;
