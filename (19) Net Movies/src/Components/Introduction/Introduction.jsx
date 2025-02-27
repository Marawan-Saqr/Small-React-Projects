import { Container, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="home-page mt-5">
      <Container>
        <Col lg={6} md={6} sm={12}>
          {/* Animated h2 */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Movies
          </motion.h2>

          {/* Animated p */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </motion.p>
        </Col>
      </Container>
    </div>
  );
}

export default Introduction;