import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/home1.jpg';
import img2 from '../images/car.jpg';
import img3 from '../images/comm.jpg';

function CarouselBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
        <Carousel.Item>
          <a href="/services#home">
            <img 
              className="d-block w-100 carousel-img"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Home Insurance</h3>
              <p>Meow</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href="/services#automobile">
            <img
              className="d-block w-100 carousel-img"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Auto Insurance</h3>
              <p>Meow Meow</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href="/commercial-insurance">
            <img
              className="d-block w-100 carousel-img"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Commercial Insurance</h3>
              <p>Meow Meow Meow</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
