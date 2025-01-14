import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../Images/logo.webp';
import './TopNav.css';
import { Link } from 'react-router-dom';

const TopNav = ({ searchMovie }) => {

  // Component States
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = () => {
    searchMovie(searchTerm);
  }


  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="danger" data-bs-theme="dark">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand href="#"><img src={Logo} alt="Logo" /></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className='nav-link' to={"/"}>Home</Link>
              <Link className='nav-link' to={"/about"}>About</Link>
              <Link className='nav-link' to={"/contact"}>Contact</Link>
              <Link className='nav-link' to={"/movies-list"}>Movies</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
              />
              <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;