import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const poems = [
  {
    id: 1,
    title: "புற்கள்",
    lines: [
      "பூக்களின் தோட்டத்தில் புற்களாய் இருந்தும் தெரியாமல் உலகை அறியாமல்",
      "வெட்டப்படுவதற்காக வேகமாய் வளர்ந்துகொண்டிருந்தேன்."
    ],
    category: "கவிதை",
    date: "கவிதை 01"
  }
];

const Poetry = () => {
  return (
    <Container className="py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold mt-3">POETRY / கவிதைகள் </h2>
        {/* <p className="text-secondary mx-auto mt-2" style={{ maxWidth: '600px' }}>
          வரிகளில் வெளிப்படும் கலை மற்றும் உணர்வுகள் — Art and emotions expressed through words.
        </p> */}
      </div>

      <Row className="justify-content-center g-4">
        {poems.map((poem) => (
          <Col xs={12} md={8} lg={7} key={poem.id}>
            <Card className="poem-card shadow-sm border p-4 position-relative">
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 rounded-pill">
                  <i className="bi bi-pen-fill me-1"></i> {poem.category}
                </span>
                <small className="text-secondary fw-semibold">{poem.date}</small>
              </div>

              <Card.Body className="py-3 text-center">
                <i className="bi bi-quote fs-1 text-primary opacity-50 d-block mb-2"></i>
                <h4 className="fw-bold mb-4">{poem.title}</h4>
                <div className="poem-text fs-5 lh-lg">
                  {poem.lines.map((line, index) => (
                    <p key={index} className="mb-2 fw-medium">
                      {line}
                    </p>
                  ))}
                </div>
                <i className="bi bi-quote fs-1 text-primary opacity-50 d-block mt-3" style={{ transform: 'rotate(180deg)' }}></i>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <p className="text-secondary fst-italic">
          <i className="bi bi-feather me-2"></i>
          மேலும் கவிதைகள் விரைவில்... (More poems coming soon)
        </p>
      </div>
    </Container>
  );
};

export default Poetry;

