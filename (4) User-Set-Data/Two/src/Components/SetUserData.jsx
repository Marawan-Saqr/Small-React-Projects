import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SetUserData = ({setName, setAge, setTitle}) => {
  return (
    <Container className="text-center my-5">
      <Row className="justify-content-center mb-3">
        <Col md="auto">
          <Button onClick={setName} variant="primary" size="lg" className="mx-2">
            Set Name
          </Button>
        </Col>
        <Col md="auto">
          <Button onClick={setAge} variant="success" size="lg" className="mx-2">
            Set Age
          </Button>
        </Col>
        <Col md="auto">
          <Button onClick={setTitle} variant="info" size="lg" className="mx-2">
            Set Title
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SetUserData;