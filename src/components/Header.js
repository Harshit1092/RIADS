import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState } from "react";


export const Header = () => {
    const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="./favicon.ico" className='w-20' alt="RIADS" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 w-100 justify-content-center" style={{ maxHeight: "auto" }} navbarScroll >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <NavDropdown title="Our Courses" id="navbarScrollingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
              <NavDropdown.Item href="#" onMouseLeave={hideDropdown}>Refresher Course on HMV Drivers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">Search Registration</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
             <button type="button" className="bg-[#c54545] px-3 text-white">Pay Now</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
