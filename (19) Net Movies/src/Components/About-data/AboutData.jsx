import React from "react";
import "./AboutData.css";
import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "../../Components/Page-title/PageTitle.jsx";
import { Link } from "react-router-dom";
import AboutImage from '../../Images/AboutData.webp';
import { motion } from 'framer-motion';

const AboutData = () => {
  return (
    <div className="about-data">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              className="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <h4>
                <PageTitle title="About Us" />
              </h4>
              <p>
                Welcome to Net Movies, your ultimate destination for endless
                entertainment! Dive into a vast collection of blockbuster hits,
                timeless classics, and the latest releases from around the
                world. Whether you're in the mood for action, romance, comedy,
                or suspense, we’ve got something for everyone. Enjoy
                high-quality streaming, personalized <span>recommendations</span>, and an
                immersive viewing experience—all from the comfort of your home.
                Start watching today and let the magic of cinema take you on an
                unforgettable journey!
              </p>
              <Link to={"/movies"} className="btn btn-danger">
                Get Started
              </Link>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              className="right"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img src={ AboutImage } className="img-fluid rounded" alt="About Us" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutData;