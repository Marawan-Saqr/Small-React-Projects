import { Container, Form, Navbar, Nav } from "react-bootstrap";
import { useState } from 'react';



const NavBar = ({ searchItems }) => {

  // Component States
  const [search, setSearch] = useState('');



  return (
    <div>
      <Navbar style={{borderBottom: '2px solid orangered'}} expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <div className="brand-color">Resturant Menu</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mx-2"
                onChange={(e)=> setSearch(e.target.value)}
                value={search}
              />
              <button
                type="button"
                className="btn btn-warning"
                onClick={()=> searchItems(search)}
              >
                Search
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};



export default NavBar;