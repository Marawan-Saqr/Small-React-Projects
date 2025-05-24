import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Advantages.css';

const Advantages = () => {
  return (
    <div className='advantages'>
      <Container>
        <Row>
          <Col lg={3}>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // يضمن تشغيل الأنيميشن مرة واحدة فقط
              transition={{ duration: 0.6 }}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png" alt="globe" className="icon" />
              <h4>Works Worldwide</h4>
              <p>No other free streaming service delivers more content to and from more countries worldwide.</p>
            </motion.div>
          </Col>
          <Col lg={3}>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/1828/1828490.png" alt="titles" className="icon" />
              <h4>Thousands of Titles</h4>
              <p>Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more.</p>
            </motion.div>
          </Col>
          <Col lg={3}>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/845/845646.png" alt="free" className="icon" />
              <h4>Always 100% Free</h4>
              <p>Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.</p>
            </motion.div>
          </Col>
          <Col lg={3}>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/2942/2942809.png" alt="device" className="icon" />
              <h4>Device-Friendly</h4>
              <p>Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advantages;