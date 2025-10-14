import React from 'react'

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

    <div className="container py-5">
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
  <div className="row g-3">
    {images.map((image, index) => (
      <div 
        key={index}
        className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
      >
        <div 
          className="w-100 overflow-hidden rounded shadow-sm"
          style={{ height: '320px' }} // fixed equal height for all images
        >
          <img
            src={image}
            alt={`Design showcase image ${index + 1}`}
            className="img-fluid w-100 h-100"
            style={{
              objectFit: 'cover', // keeps aspect ratio, fills box
              objectPosition: 'center', // centers image crop
            }}
          />
        </div>
      </div>
    ))}
  </div>
</div>
    </div>

  )
}

export default Showcase
