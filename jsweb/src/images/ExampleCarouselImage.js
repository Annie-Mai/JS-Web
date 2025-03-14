import React from 'react';

const ExampleCarouselImage = ({ images }) => {
  return (
    <div className="carousel-images">
      {images.map((image, index) => (
        <div key={index} className="carousel-image">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ExampleCarouselImage;