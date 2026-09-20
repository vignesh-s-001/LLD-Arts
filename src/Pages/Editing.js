import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Editing = () => {
  return (
    <div>
      <Container fluid className="px-lg-5">
        <h3 className='text-center fw-bold mt-4'> VIDEO EDITING </h3>
        <p className="text-center text-muted mb-5">Amazing video edits coming soon!</p>
        
        <Container fluid className='mt-5'>
          <Row className='justify-content-center g-4'>
            {/* Placeholder for videos */}
            <Col xs={12} sm={6} lg={4} className='d-flex justify-content-center'>
              <Card className='border-light text-center w-100 shadow-sm' style={{ maxWidth: '350px', minHeight: '250px' }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center bg-secondary bg-opacity-10 rounded">
                  <i className="bi bi-play-circle-fill text-primary" style={{ fontSize: '3rem' }}></i>
                  <Card.Title className="mt-3">Coming Soon</Card.Title>
                  <Card.Text className="text-muted">Video edits will be added here shortly.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs={12} sm={6} lg={4} className='d-flex justify-content-center'>
              <Card className='border-light text-center w-100 shadow-sm' style={{ maxWidth: '350px', minHeight: '250px' }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center bg-secondary bg-opacity-10 rounded">
                  <i className="bi bi-camera-video text-primary" style={{ fontSize: '3rem' }}></i>
                  <Card.Title className="mt-3">Coming Soon</Card.Title>
                  <Card.Text className="text-muted">Video edits will be added here shortly.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={4} className='d-flex justify-content-center'>
              <Card className='border-light text-center w-100 shadow-sm' style={{ maxWidth: '350px', minHeight: '250px' }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center bg-secondary bg-opacity-10 rounded">
                  <i className="bi bi-film text-primary" style={{ fontSize: '3rem' }}></i>
                  <Card.Title className="mt-3">Coming Soon</Card.Title>
                  <Card.Text className="text-muted">Video edits will be added here shortly.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Editing;

