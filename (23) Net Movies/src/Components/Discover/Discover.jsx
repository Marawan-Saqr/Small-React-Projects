import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';  // إضافة مكتبة Framer Motion للأنيميشن
import PageTitle from '../../Components/Page-title/PageTitle.jsx';
import DiscoverImage from '../../Images/Discover.webp';
import { Link } from 'react-router-dom';
import './Discover.css';

const Discover = () => {
  return (
    <motion.div 
      className='discover'
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className="left">
              <h2><PageTitle title="See what’s new on Pluto TV, Tubi, & more." /></h2>
              <p>
                Select your favorite streaming services to discover more, search faster, 
                and get curated recommendations—all without ever leaving Plex. Connect 
                with friends to see who’s watching what, where.
              </p>
              <Link className="btn btn-danger" to={"/movies"}>Discover All Movies</Link>
            </div>
          </Col>
          <Col lg={6}>
            <motion.div
              className="right"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={DiscoverImage} className='img-fluid' alt="Discover Movies" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Discover;
