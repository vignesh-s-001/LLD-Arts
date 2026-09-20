import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <Navbar expand="lg" className={isDark ? "bg-dark border-bottom border-secondary" : "bg-primary"}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontWeight: 'bold', backgroundColor: 'white' }} className='fs-4 ms-2 ms-md-5 ps-3 lead text-dark' id='head'>LONELYDEVIL </span>
          <span style={{ fontWeight: 'bold', backgroundColor: 'black' }} className='fs-4 ps-2 lead text-light' id='head'> ARTS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-end me-md-5 align-items-center" id='hr'>
            <Nav.Item className='fw-bold ps-3 pe-3'><Link to="/" style={{ textDecoration: "none", color: 'white' }} className='hor'>HOME</Link></Nav.Item>
            <Nav.Item className='fw-bold first ps-3 pe-3'><Link to="/potraits" style={{ textDecoration: "none", color: 'white' }} className='hor'>POTRAITS</Link></Nav.Item>
            <Nav.Item className='fw-bold ps-3 pe-3'><Link to="/editing" style={{ textDecoration: "none", color: 'white' }} className='hor'>EDITING</Link></Nav.Item>
            <Nav.Item className='fw-bold second ps-3 pe-3'><Link to='/pricing' style={{ textDecoration: "none", color: 'white' }} className='hor'>PRICING</Link></Nav.Item>
            <Nav.Item className='fw-bold ps-3 pe-3'><Link to="/poetry" style={{ textDecoration: "none", color: 'white' }} className='hor'>POETRY</Link></Nav.Item>
            <Nav.Item className='fw-bold ps-3 pe-3'><Link to="/contact" style={{ textDecoration: "none", color: 'white' }} className='hor'>CONTACT</Link></Nav.Item>
            <Nav.Item className='fw-bold ps-3 pe-3'><Link to="/about" style={{ textDecoration: "none", color: 'white' }} className='hor'>ABOUT</Link></Nav.Item>
            <Nav.Item className='ps-3 pe-3 mt-2 mt-lg-0'>
              <Button
                variant={isDark ? "outline-light" : "light"}
                size="sm"
                className={`theme-toggle-btn rounded-pill d-flex align-items-center gap-2 px-3 py-1 fw-bold shadow-sm ${!isDark ? 'text-dark' : ''}`}
                onClick={toggleTheme}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <i className={`bi ${isDark ? 'bi-sun-fill text-warning' : 'bi-moon-stars-fill text-primary'}`}></i>
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;