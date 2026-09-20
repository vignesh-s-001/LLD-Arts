import React from 'react'; 
import { Container, Carousel } from 'react-bootstrap';
import car0 from './assets/car0.jpg';
import car1 from './assets/car1.webp';
import car2 from './assets/car2.jpg';
import pot1 from './assets/mn.jpg';
import pot2 from './assets/sl.jpg';
import pot3 from './assets/ps.jpg';
import Potraits from './Pages/Potraits';
import Editing from './Pages/Editing';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Poetry from './Pages/Poetry';

const Home = () => {
  return (
    <>
      <Container>
        <h4 className='text-center border-primary fw-bold mt-4'>
          <span className='p-2'>LONELYDEVIL-ARTS</span>
        </h4>
      </Container>

      <Container className='mt-3'>
        <Carousel>
          <Carousel.Item>
            <picture>
              <source media="(max-width: 767px)" srcSet={pot1} />
              <img
                style={{ height: '500px', objectFit: 'cover', border: '15px solid black' }}
                className='d-block w-100'
                src={car0}
                alt="Portrait Art"
              />
            </picture>
            <Carousel.Caption>
              <h3>Potrait Arts</h3>
              <p>Lets Watchout our page now.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <picture>
              <source media="(max-width: 767px)" srcSet={pot2} />
              <img
                style={{ height: '500px', objectFit: 'cover', border: '15px solid black' }}
                className='d-block w-100'
                src={car1}
                alt="Tattoo Art"
              />
            </picture>
            <Carousel.Caption>
              <h3>Tattoo Arts</h3>
              <p>Lets Watchout our page now.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <picture>
              <source media="(max-width: 767px)" srcSet={pot3} />
              <img
                style={{ height: '500px', objectFit: 'cover', border: '15px solid black' }}
                className='d-block w-100'
                src={car2}
                alt="Board Art"
              />
            </picture>
            <Carousel.Caption>
              <h3>Board Arts</h3>
              <p>Lets Watchout our page now.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Quick section links */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
          <a href="#potraits" className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
            <i className="bi bi-palette me-1"></i> Portraits
          </a>
          <a href="#editing" className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
            <i className="bi bi-film me-1"></i> Editing
          </a>
          <a href="#pricing" className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
            <i className="bi bi-tag me-1"></i> Pricing & Offers
          </a>
          <a href="#poetry" className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
            <i className="bi bi-pen me-1"></i> Poetry
          </a>
          <a href="#about" className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
            <i className="bi bi-info-circle me-1"></i> About
          </a>
          <a href="#contact" className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
            <i className="bi bi-envelope me-1"></i> Contact
          </a>
        </div>
      </Container>

      {/* Show all sections one by one */}
      <div className="home-sections mt-5">
        <section id="potraits" className="py-4">
          <Potraits />
        </section>

        <Container>
          <hr className="my-5 opacity-25" />
        </Container>

        <section id="editing" className="py-4">
          <Editing />
        </section>

        <Container>
          <hr className="my-5 opacity-25" />
        </Container>

        <section id="pricing" className="py-4">
          <Pricing />
        </section>

        <Container>
          <hr className="my-5 opacity-25" />
        </Container>

        <section id="poetry" className="py-4">
          <Poetry />
        </section>

        <Container>
          <hr className="my-5 opacity-25" />
        </Container>

        <section id="about" className="py-4">
          <About />
        </section>

        <Container>
          <hr className="my-5 opacity-25" />
        </Container>

        <section id="contact" className="py-4">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home; 