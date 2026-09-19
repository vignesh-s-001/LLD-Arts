import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cont1 from '../assets/dr.jpg';
import cont2 from '../assets/IMG_20220516_144514.jpg';
import cont3 from '../assets/d.jpg';

const About = () => {
  return (
    <Container className="py-3">
      <h2 className='text-center fw-bold mt-3 mb-5'> ABOUT THE ART </h2>

      <Row className="align-items-center mb-5 gy-4">
        <Col xs={12} md={5} className="text-center">
          <img
            src={cont3}
            alt="Pencil Art Portrait"
            style={{ height: '350px', width: '280px', objectFit: 'cover' }}
            className='border border-5 border-dark shadow rounded'
          />
        </Col>
        <Col xs={12} md={7}>
          <h3 className='fw-bold lead fs-3 mb-3'>PENCIL ART & REALISTIC PORTRAITS</h3>
          <p className="lh-lg">
            Specializing in lifelike graphite sketches and realistic charcoal portraits. Every stroke is meticulously crafted by hand to capture delicate textures, fine facial details, shadows, and the true emotional depth of your favorite photographs. Perfect for personalized keepsake gifts, wedding anniversaries, memorial portraits, and unique home art collections.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5 gy-4 flex-md-row-reverse">
        <Col xs={12} md={5} className="text-center">
          <img
            src={cont1}
            alt="Tattoo Art Design"
            style={{ height: '350px', width: '280px', objectFit: 'cover' }}
            className='border border-5 border-dark shadow rounded'
          />
        </Col>
        <Col xs={12} md={7}>
          <h3 className='fw-bold lead fs-3 mb-3'>TATTOO ART & CUSTOM INK CONCEPTS</h3>
          <p className="lh-lg">
            Creating original, artistic tattoo flash and bespoke body art illustrations. From intricate blackwork linework and shaded geometry to expressive, meaningful concepts, every design is conceptualized to turn your personal vision and narrative into unforgettable, timeless tattoo artwork.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-4 gy-4">
        <Col xs={12} md={5} className="text-center">
          <img
            src={cont2}
            alt="Board Art Piece"
            style={{ height: '350px', width: '280px', objectFit: 'cover' }}
            className='border border-5 border-dark shadow rounded'
          />
        </Col>
        <Col xs={12} md={7}>
          <h3 className='fw-bold lead fs-3 mb-3'>BOARD ART & DECORATIVE CREATIONS</h3>
          <p className="lh-lg">
            Blending acrylic mediums, mixed-media drawing, and freehand illustrations on wood boards and canvases. Each piece is an exploration of contemporary art styling, designed to bring life, warmth, and aesthetic personality to your studio, workspace, or living interior.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;