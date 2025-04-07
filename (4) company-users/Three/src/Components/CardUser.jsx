import React from 'react';
import { Card } from 'react-bootstrap';

const CardUser = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.firstName} {item.lastName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.job}</Card.Subtitle>
        <Card.Text>Age: {item.age}</Card.Text>
      </Card.Body>
    </Card>
  );
}


export default CardUser;