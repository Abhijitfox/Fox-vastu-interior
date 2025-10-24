import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GallerySection = ({ title, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-5 bg-gray-50 relative overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0b2545]">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg h-[320px] relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={() => setSelectedImage(img)}
            >
              <motion.img
                src={img}
                alt={`${title} ${idx + 1}`}
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

      {/* --- Lightbox Popup --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-8 text-white text-4xl font-bold cursor-pointer hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
