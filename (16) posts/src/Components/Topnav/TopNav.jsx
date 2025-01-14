import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Link to={"/"} className='navbar-brand'>Posts Today</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link to={"/"} className="nav-link">Home</Link>
            <Link to={"/about"} className="nav-link">About</Link>
            <Link to={"/contact"} className="nav-link">Contact</Link>
            <Link to={"/posts"} className="nav-link">Posts</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;