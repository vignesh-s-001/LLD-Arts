import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import yt from '../assets/yt.jpg';
import insta from '../assets/insta (1).jpg';
import cont from '../assets/insta (2).png';

const Contact = () => {
  return (
    <>
      <h3 className='text-center fw-bold mt-4'> CONTACT </h3>
      <Container className='d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4'>
        {/* WhatsApp & Call */}
        <Card className='border-light text-center shadow-sm' style={{ width: '320px' }}>
          <Card.Img
            variant="top"
            src={cont}
            alt="WhatsApp and Phone Contact"
            className='img rounded-circle mx-auto mt-3'
            style={{ height: '260px', width: '260px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>WHATSAPP & CALL</Card.Title>
            <Card.Text className="fw-semibold fs-5 mb-3">
              +91 6369307326
            </Card.Text>
            <Button
              as="a"
              href="https://wa.me/916369307326"
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
              className="d-flex align-items-center justify-content-center gap-2 fw-bold"
            >
              <i className="bi bi-whatsapp"></i> Chat on WhatsApp
            </Button>
          </Card.Body>
        </Card>

        {/* YouTube */}
        <Card className='border-light text-center shadow-sm' style={{ width: '320px' }}>
          <Card.Img
            variant="top"
            src={yt}
            alt="YouTube Channel"
            className='img rounded-circle mx-auto mt-3'
            style={{ height: '260px', width: '260px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>YT : Lonelydevil Creations</Card.Title>
            <Card.Text>
              500 Subscribers
            </Card.Text>
            <Button
              as="a"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
              className="d-flex align-items-center justify-content-center gap-2 fw-bold"
            >
              <i className="bi bi-youtube"></i> Visit Channel
            </Button>
          </Card.Body>
        </Card>

        {/* Instagram */}
        <Card className='border-light text-center shadow-sm' style={{ width: '320px' }}>
          <Card.Img
            variant="top"
            src={insta}
            alt="Instagram Profile"
            className='img rounded-circle mx-auto mt-3'
            style={{ height: '260px', width: '260px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>INSTA ID : @lordlonelydevil</Card.Title>
            <Card.Text>
              17k followers
            </Card.Text>
            <Button
              as="a"
              href="https://www.instagram.com/lordlonelydevil/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-danger"
              className="d-flex align-items-center justify-content-center gap-2 fw-bold"
            >
              <i className="bi bi-instagram"></i> View Instagram
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Contact;