import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Link className="fw-bold navbar-brand" to={"/"}>
          My Commerece
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to={"/"}>Home</Link>
            <Link className="nav-link" to={"all-products"}>All Products</Link>
            <Link className="nav-link" to={"cart"}>Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;