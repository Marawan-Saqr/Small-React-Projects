import './TopNav.css';
import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';



const TopNav = ({ noteData, setNoteData }) => {

  // Component States
  const [searchInput, setSearchInput] = useState('');


  // Search For Word
  const searchWord = (word) => {
    if (word !== "") {
      let newFilter = noteData.filter((item)=> {
        return item.title === word;
      })
      setNoteData(newFilter);
    } else {
      setNoteData(noteData);
    }
  }



  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Notes App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
              />
              <Button onClick={()=> searchWord(searchInput)} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};



export default TopNav;