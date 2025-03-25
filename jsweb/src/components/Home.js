import React from 'react'
import { Container, Row, Nav } from "react-bootstrap";
import CarouselBanner from './CarouselBanner'
import Cards from './Cards';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import { Link } from 'react-router-dom';
import "./Home.css";
function Home() {
    const hCard = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: img1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: img2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: img3,
        },
      ];
    
  return (
    <>
        <CarouselBanner/>
        <section className="home-cards" id="Home">
            <Container>
                <Row>
                {hCard.map((card, index) => (
                    <Cards
                        key={index}
                        title={card.title}
                        description={card.description}
                        imgUrl={card.imgUrl}
                    />
                    ))}
                </Row>
            </Container>
        </section>
        <div class="contact-card-container">
            <div class="contact-card-row">
                <div class="col-4">plug in a photo or something</div>
                <div class="col-8">
                    <h1>some description with a contact link</h1>
                    <Nav.Link as={Link} to="/about">Contact Us</Nav.Link>
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;