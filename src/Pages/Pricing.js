import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <Container className="py-4">
      <h2 className='text-center fw-bold mt-3 mb-4'> SPECIAL OFFERS & COMMISSIONS </h2>
      <p className='text-center mb-5 mx-auto' style={{ maxWidth: '650px' }}>
        Commission custom hand-drawn portraits, realistic sketches, and artistic decor directly from Lonelydevil Arts. Take advantage of our limited-time discounts!
      </p>

      <Row className='g-4 justify-content-center'>
        <Col xs={12} md={4}>
          <Card className='h-100 shadow-sm border text-center p-3'>
            <Card.Body className="d-flex flex-column">
              <div className="mb-3">
                <Badge bg="danger" className="fs-6 px-3 py-2 rounded-pill">
                  50% OFF
                </Badge>
              </div>
              <Card.Title className="fw-bold fs-4">First Order</Card.Title>
              <Card.Subtitle className="mb-3">New Client Welcome Offer</Card.Subtitle>
              <Card.Text className="flex-grow-1">
                New to Lonelydevil Arts? Enjoy half off on your very first portrait sketch or custom artwork commission. An ideal opportunity to turn personal memories or loved ones' photos into handmade art.
              </Card.Text>
              <div className="mt-3">
                <Button as={Link} to="/contact" variant="primary" className="w-100 fw-bold">
                  Claim Offer
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className='h-100 shadow-sm border text-center p-3 border-primary'>
            <Card.Body className="d-flex flex-column">
              <div className="mb-3">
                <Badge bg="primary" className="fs-6 px-3 py-2 rounded-pill">
                  30% OFF
                </Badge>
              </div>
              <Card.Title className="fw-bold fs-4">Second Order</Card.Title>
              <Card.Subtitle className="mb-3">Loyalty Art Discount</Card.Subtitle>
              <Card.Text className="flex-grow-1">
                Returning for another masterpiece? Enjoy 30% off your second custom artwork or framed portrait commission as a thank you for your ongoing support of our artistic journey.
              </Card.Text>
              <div className="mt-3">
                <Button as={Link} to="/contact" variant="primary" className="w-100 fw-bold">
                  Claim Offer
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className='h-100 shadow-sm border text-center p-3'>
            <Card.Body className="d-flex flex-column">
              <div className="mb-3">
                <Badge bg="success" className="fs-6 px-3 py-2 rounded-pill">
                  10% OFF
                </Badge>
              </div>
              <Card.Title className="fw-bold fs-4">Regular Orders</Card.Title>
              <Card.Subtitle className="mb-3">Multi-Order & Packages</Card.Subtitle>
              <Card.Text className="flex-grow-1">
                Looking for multiple portrait drawings, group sketches, or seasonal decor gifts? Receive a flat 10% discount across all regular orders and custom board art projects.
              </Card.Text>
              <div className="mt-3">
                <Button as={Link} to="/contact" variant="outline-primary" className="w-100 fw-bold">
                  Order Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pricing;