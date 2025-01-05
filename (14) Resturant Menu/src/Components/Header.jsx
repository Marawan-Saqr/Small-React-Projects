import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Row className='mt-2' style={{textTransform: 'uppercase'}}>
      <Col sm="12" className='justify-content-center text-center'>
        <h2 style={{color: 'orangered'}}>Our Resturant</h2>
      </Col>
    </Row>
  )
}

export default Header;
