import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ShowroomFeatures from "../main/services/ShowroomFeatures";
import ShowroomGallery from "../main/services/ShowroomGallery";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";
import WhyChooseUsSection from "../custom/WhyChooseUsSection";

const ShowroomInterior = () => {

  // WHY CHOOSE US — EXACT WORD FILE CONTENT
  const features = [
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
        "We are well-versed with the local market, including typical flat sizes, light orientation, traffic noise, local material availability, and timelines.",
      image: "/assets/images/whychooseus4.jpg",
    },
    {
      title: "Complete End-to-End Interior Solutions Under One Roof",
      description:
        "We provide all-in-one services from design, carpentry/fabrication, installation, finishing, and after-care.",
      image: "/assets/images/whychooseus1.jpg",
    },
    {
      title: "On-Time Delivery With Realistic Costs & Real Value",
      description:
        "We are committed to delivering during real timelines and aligning costs so you get value without compromising your dream.",
      image: "/assets/images/whychooseus2.jpg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Showroom Interior Design Services | Vastu Vibes Design</title>
        <meta
          name="description"
          content="Vastu Vibes designs personalised, functional, and aesthetically balanced interior spaces with transparency, expertise, and end-to-end execution."
        />
        <link
          rel="canonical"
          href="https://playful-cranachan-8efc2c.netlify.app/services/showroom-interior-design"
        />
      </Helmet>

      <div className="w-full overflow-hidden text-gray-800 font-sans">

        {/* HERO SECTION — WORD-FILE TEXT */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/services-hero-img.jpg')" }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.09 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          <div className="absolute inset-0 bg-black/50"></div>

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

        {/* SHOWROOM FEATURES SECTION — USING COMPONENT BUT WORD-FILE CONTENT WILL APPEAR INSIDE THAT COMPONENT */}
        <ShowroomFeatures />

        {/* GALLERY SECTION — unchanged */}
        <ShowroomGallery />

        {/* WHY CHOOSE US — exact Word File content */}
        <WhyChooseUsSection
          title="Why Choose Vastu Vibes?"
          subtitle="Because we focus on your lifestyle, your space, and your peace of mind."
          features={features}
        />

        {/* INQUIRY SECTION */}
        <ProjectInquirySection />

        {/* BACKGROUND TRANSITION */}
        <BackgroundImageSwitcher image="/assets/images/hero-slideimg-1.jpeg" />
      </div>
    </>
  );
};

export default ShowroomInterior;
