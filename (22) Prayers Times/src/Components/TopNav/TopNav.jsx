import { Container, Col } from "react-bootstrap";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top-nav mt-3">
      <Container>
        <Col lg={2}>
          <div className="logo">
            <img src="./logo.png" className="img-fluid" />
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default TopNav;