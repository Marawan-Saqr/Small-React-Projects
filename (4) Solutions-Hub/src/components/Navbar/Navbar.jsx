import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

const TopBar = () => {
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor: 'black'}}>
        <Container fluid>
          <Navbar.Brand href="#" className="text-white fw-bold">Solutions Hub.</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#about" className="text-white fw-bold">Home</Nav.Link>
              <Nav.Link href="#about" className="text-white fw-bold">About</Nav.Link>
              <Nav.Link href="#features" className="text-white fw-bold">Features</Nav.Link>
              <Nav.Link href="#pricing" className="text-white fw-bold">Pricing</Nav.Link>
              <Nav.Link href="#contact" className="text-white fw-bold">Contact Us</Nav.Link>
            </Nav>
            <Nav className="ms-auto" style={{alignItems: 'center'}}>
              <Nav.Link href="https://facebook.com" className="text-white fw-bold social-icon">
                <i className="fab fa-facebook-f"></i>
              </Nav.Link>
              <Nav.Link href="https://twitter.com" className="text-white fw-bold social-icon">
                <i className="fab fa-twitter"></i>
              </Nav.Link>
              <Nav.Link href="https://linkedin.com" className="text-white fw-bold social-icon">
                <i className="fab fa-linkedin-in"></i>
              </Nav.Link>
              <Nav.Link href="#" className="text-white fw-bold">
                <button style={{
                  background: 'none',
                  color: '#fff',
                  border: '1px solid rebeccapurple',
                  padding: '4px 13px',
                  borderRadius: '5px',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-bell" style={{ verticalAlign: 'middle', marginRight: '5px' }}></i>
                  Get Started
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
