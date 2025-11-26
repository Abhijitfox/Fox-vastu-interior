import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Showcase from "../main/aboutus/Showcase";
import ImageAnimation from "../custom/ImageAnimation";
import ProjectInquirySection from "../custom/ProjectInquirySection";
import BackgroundImageSwitcher from "../custom/BackgroundImageSwitcher";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Vastu Vibes Design</title>
        <meta
          name="description"
          content="Learn about Vastu Vibes – Pune’s trusted home interior design studio focused on lifestyle-based, functional, and Vastu-aligned interior design."
        />
        <link
          rel="canonical"
          href="https://playful-cranachan-8efc2c.netlify.app/about-us"
        />
      </Helmet>

      {/* HERO SECTION — TEXT FROM WORD FILE */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('assets/images/footerimg.jpeg')",
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
          className="relative z-10 max-w-3xl px-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Vastu Vibes — Home Interior Designer in Pune That Turns Your Daily Life Into a Comfort Experience.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
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

      {/* ABOUT SECTION — ENTIRELY WORD-FILE CONTENT */}
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-20 max-w-7xl mx-auto pt-10">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-4">
            <h2 className="text-4xl font-bold" style={{ color: "#00334d" }}>
              About Us
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
              Understanding Your Lifestyle, Not Just Your Likes
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md md:max-w-lg">
              We start our process by understanding the details of how you live, not just what you like. 
              That means your daily routines, your family’s requirements, your storage habits, 
              and your preferred vibe.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md md:max-w-lg">
              We strike the right balance between aesthetics, function, and Vastu principles (if desired), 
              providing you with a home that feels right, not just looks good.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md md:max-w-lg">
              We will provide 3D visuals with a clear, stage-wise plan, and we’ll explain the cost implications
              of material or design choices upfront.
            </p>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <ImageAnimation
            images={[
              "/assets/images/section-1-1.jpeg",
              "/assets/images/section-1-2.jpeg",
              "/assets/images/section-1-3.jpeg",
            ]}
          />
        </div>

        {/* ADDITIONAL WORD FILE CONTENT */}
        <p className="mt-6 text-[#4F696B] text-[16px] leading-relaxed tracking-wide max-w-5xl mx-auto">
          Many homeowners in Pune struggle with making their home feel truly theirs — mismatched furniture,
          layouts that don’t support lifestyle, hidden costs, changing deadlines, and uncertainty about balancing 
          Vastu with modern design. This is why people trust Vastu Vibes: we help you create a home that feels 
          personal, balanced, and intelligently designed.
        </p>

        <p className="mt-4 text-[#4F696B] text-[16px] leading-relaxed tracking-wide max-w-5xl mx-auto">
          From smart space planning, customised furniture, well-planned lighting, false ceilings, kitchen and wardrobe 
          design, styling, and final touches — we handle everything end-to-end so you don’t have to coordinate 
          with multiple vendors. Our local expertise, transparency, and on-time execution ensure a smooth journey from 
          concept to handover.
        </p>

        <Showcase />
      </div>

      {/* CONTACT CTA */}
      <ProjectInquirySection />

      {/* BACKGROUND TRANSITION */}
      <BackgroundImageSwitcher image="/assets/images/bg-1.jpeg" />
    </>
  );
};

export default About;
