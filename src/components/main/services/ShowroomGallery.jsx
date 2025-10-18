import React from "react";
import { motion } from "framer-motion";

const ShowroomGallery = () => {
  const galleryImages = [
    "/assets/images/showroom1.jpg",
    "/assets/images/showroom2.jpg",
    "/assets/images/showroom3.jpg",
    "/assets/images/showroom4.jpg",
    "/assets/images/showroom5.jpg",
    "/assets/images/showroom6.jpg",
  ];

  // Animation variants for entrance
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="pb-2 pt-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b2545] mb-14">
          Showroom Gallery
        </h2>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              className="relative group overflow-hidden rounded-2xl shadow-md bg-white h-[300px] hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <motion.img
                src={img}
                alt={`Showroom ${idx + 1}`}
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
              />

              {/* Overlay Caption */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white text-center py-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <p className="text-lg font-medium tracking-wide">
                  Showroom {idx + 1}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-10 w-64 h-64 bg-[#0b2545]/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 -right-10 w-72 h-72 bg-[#b3c7e6]/20 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default ShowroomGallery;
