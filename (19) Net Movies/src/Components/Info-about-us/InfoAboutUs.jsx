import React from 'react';
import './InfoAboutUs.css';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from '../../Components/Page-title/PageTitle.jsx';
import aboutUsImage from '../../Images/about-us-page.webp';

const InfoAboutUs = () => {
  return (
    <div className='info-about-us'>
      <Container>
        <h2 className='text-center'><PageTitle title="About Us"></PageTitle></h2>
        <p className='text-center'>Welcome to Net Movies, your ultimate destination for endless entertainment! Dive into a vast collection of blockbuster hits, timeless classics, and the latest releases from around the world. Whether you're in the mood for action, romance, comedy, or suspense, we’ve got something for everyone. Enjoy high-quality streaming, personalized recommendations, and an immersive viewing experience—all from the comfort of your home. Start watching today and let the magic of cinema take you on an unforgettable journey!</p>
        <Row className='justify-content-center'>
          <Col lg={6}>
            <img src={ aboutUsImage } className='img-fluid rounded' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default InfoAboutUs;