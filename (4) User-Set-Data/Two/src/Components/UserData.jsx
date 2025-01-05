import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const UserData = ({changeName, changeAge, changeTitle}) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-4">User Information</Card.Title>
              <div className="mb-3">
                <h5>Name:</h5>
                <p>{changeName}</p>
              </div>
              <div className="mb-3">
                <h5>Age:</h5>
                <p>{changeAge}</p>
              </div>
              <div className="mb-3">
                <h5>Title:</h5>
                <p>{changeTitle}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserData;