import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-450 h-550 overflow-hidden transition-transform duration-300 transform  hover:scale-105">
     
        <img 
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex} `}
          className="object-cover mr-7 rounded-xl"
        />
      
    </div>
  );
};

export default ImageSlider;
