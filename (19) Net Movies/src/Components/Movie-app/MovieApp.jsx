import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import PageTitle from "../../Components/Page-title/PageTitle.jsx";
import MovieAppImage from "../../Images/Movie-App.webp";
import { Link } from "react-router-dom";
import "./MovieApp.css";

const MovieApp = () => {
  return (
    <motion.div 
      className="movie-app"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={5}>
            <motion.div
              className="left"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={MovieAppImage} className="img-fluid" alt="Movie App" />
            </motion.div>
          </Col>
          <Col lg={5}>
            <motion.div
              className="right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <PageTitle title="It has never been easier to watch free movies online." />
              <p>
                Select your favorite streaming services to discover more, search
                faster, and get curated recommendations—all without ever leaving
                Plex. Connect with friends to see who’s watching what, where.
              </p>
              <Link className="btn btn-danger" to={"/movies"}>
                Discover All Movies
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default MovieApp;