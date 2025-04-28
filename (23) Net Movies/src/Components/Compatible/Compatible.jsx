import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";  // استيراد Framer Motion
import PageTitle from "../../Components/Page-title/PageTitle.jsx";
import { Link } from "react-router-dom";
import CompatibleImage from '../../Images/Compatible.webp';
import "./Compatible.css";

const Compatible = () => {
  return (
    <motion.div 
      className="compatible mb-3"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              className="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4>
                <PageTitle title="We’re compatible." />
              </h4>
              <p>
                Stream Plex from just about any phone, tablet, smart TV, gaming consoles, or PC.
              </p>
              <Link to={"/movies"} className="btn btn-danger">
                Get Started
              </Link>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              className="right"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src={CompatibleImage} className="img-fluid rounded" alt="Compatible Devices" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Compatible;