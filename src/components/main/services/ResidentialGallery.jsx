import React from "react";
import { motion } from "framer-motion";

const ResidentialGallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598300053407-27b863bcf05f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154350-bb7a7b9a5f5c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598300053390-8b6a6d8a3d5f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154341-bd7a7b9c6b6d?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0b2545]">
          Residential Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg h-[320px] relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <motion.img
                src={img}
                alt={`Residential ${idx + 1}`}
                className="w-full h-full object-cover object-center rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-lg font-semibold rounded-2xl transition"
              >
                View Project {idx + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialGallery;
