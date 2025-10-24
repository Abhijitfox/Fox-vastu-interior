import React from 'react'
import { motion } from "framer-motion";

const Showcase = () => {
     const images = [
    '/assets/images/about-1.jpg', // Top-Left: Wooden wall, yellow chair
    '/assets/images/about-2.jpg', // Top-Middle: Sofa, white chair, palm
    '/assets/images/about-3.jpg', // Top-Right: Close-up, vase on table
    '/assets/images/about-4.jpg', // Bottom-Left: Sofa, large window
    '/assets/images/about-5.jpg', // Bottom-Middle: White sofa, round coffee table
    '/assets/images/about-6.jpg', // Bottom-Right: Bedroom, hanging lights
  ];

  return (
    <div className='bg-white'>

    <div className=" py-5">
  {/* --- Header Section --- */}
  <div className="row mb-4">
    <div className="col-12">
      <h1 
        className="display-3 fw-bold mb-1"
        style={{ color: '#00334d' }}
      >
        Showcase
      </h1>
      <p className="lead text-dark">Bringing visions to reality</p>
    </div>
  </div>

  {/* --- Image Grid Section --- */}
 <div className="row g-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="overflow-hidden rounded-4 shadow-sm position-relative w-100"
                style={{ height: "320px", cursor: "pointer" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <motion.img
                  src={image}
                  alt={`Design showcase ${index + 1}`}
                  className="img-fluid w-100 h-100"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.4s ease",
                  }}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Overlay on hover */}
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,51,77,0.7) 100%)",
                    color: "white",
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    letterSpacing: "1px",
                  }}
                >
                  <motion.span
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    View Design
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
</div>
    </div>

  )
}

export default Showcase

