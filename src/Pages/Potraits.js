import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Image } from 'react-bootstrap';
import pot1 from '../assets/mn.jpg';
import pot2 from '../assets/sl.jpg';
import pot3 from '../assets/ps.jpg';

const Potraits = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  return (
    <div>
      <Container fluid className="px-lg-5">
        <h3 className='text-center fw-bold mt-4'>  MY POTRAIT MODELS  </h3>
        <Container fluid className='mt-5'>
          <Row className='justify-content-center g-4'>
            <Col xs={12} sm={6} lg={4} className='d-flex justify-content-center'>
              <Card className='border-light text-center w-100' style={{ maxWidth: '350px' }}>
                <Card.Img 
                  variant="top" 
                  src={pot1} 
                  className='border border-5 border-dark mx-auto mt-3' 
                  style={{ height: '400px', width: '90%', objectFit: 'cover', cursor: 'pointer' }} 
                  alt='img-art'
                  onClick={() => handleImageClick(pot1)}
                />
                <Card.Body>
                  <Button variant="primary" className='w-100 fw-bold'>ORDER NOW</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs={12} sm={6} lg={4} className='d-flex justify-content-center'>
              <Card className='border-light text-center w-100' style={{ maxWidth: '350px' }}>
                <Card.Img 
                  variant="top" 
                  src={pot2} 
                  className='border border-5 border-dark mx-auto mt-3' 
                  style={{ height: '400px', width: '90%', objectFit: 'cover', cursor: 'pointer' }} 
                  alt='img-art'
                  onClick={() => handleImageClick(pot2)}
                />
                <Card.Body>
                  <Button variant="primary" className='w-100 fw-bold'>ORDER NOW</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={4} className='d-flex justify-content-center'>
              <Card className='border-light text-center w-100' style={{ maxWidth: '350px' }}>
                <Card.Img 
                  variant="top" 
                  src={pot3} 
                  alt="Portrait model 3" 
                  className='border border-5 border-dark mx-auto mt-3' 
                  style={{ height: '400px', width: '90%', objectFit: 'cover', cursor: 'pointer' }} 
                  onClick={() => handleImageClick(pot3)}
                />
                <Card.Body>
                  <Button variant="primary" className='w-100 fw-bold'>ORDER NOW</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Portrait View</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedImage && (
            <Image src={selectedImage} alt="Full size portrait" fluid className="border border-5 border-dark" style={{ maxHeight: '80vh', objectFit: 'contain' }} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Potraits;

