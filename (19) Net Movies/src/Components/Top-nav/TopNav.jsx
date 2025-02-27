import './TopNav.css';
import Logo from '../../../public/Logo.webp';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useContext } from 'react';
import { moviesContext } from '../../Contexts/MoviesContext.jsx';


const TopNav = () => {

  // Component States
  const location = useLocation();
  const movie = useContext(moviesContext);


  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Link to={"/"} className='navbar-brand'><img style={{width: '60px', borderRadius: '50%'}} src={Logo} /></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link to={"/"} className='nav-link'><i className="fa-solid fa-house"></i> Home</Link>
              <Link to={"/about"} className='nav-link'><i className="fa-regular fa-address-card"></i> About</Link>
              <Link to={"/movies"} className='nav-link'><i className="fa-solid fa-film"></i> Movies</Link>
              <Link to={"/watched"} className='nav-link'><i className="fa-solid fa-list"></i> Watched</Link>
            </Nav>
            {location.pathname === "/movies" && <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=> movie.searchMovie(e.target.value)}
              />
            </Form>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default TopNav;