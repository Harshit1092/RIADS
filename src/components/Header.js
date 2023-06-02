import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";



export const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }
  return (
    <header className="sticky-top">
      <div className="font-semibold">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><img src="./favicon.ico" className='w-20 ml-14' alt="RIADS" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto space-x-4 my-2 my-lg-0 w-100 justify-content-center" style={{ maxHeight: "auto" }} navbarScroll >
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link>
                <Nav.Link href="#">Success Story</Nav.Link>
                <Nav.Link href="#">Take Mock Test</Nav.Link>
                <Nav.Link href="#">Download Study Material</Nav.Link>                
                <NavDropdown title="Our Courses" id="navbarScrollingDropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                  <NavDropdown.Item href="#" onMouseLeave={hideDropdown}>Refresher Course on HMV Drivers</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Notice</Nav.Link>
                <Nav.Link href="#">Candidate Login</Nav.Link>
                <Nav.Link href="#">Admin Login</Nav.Link>                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}
