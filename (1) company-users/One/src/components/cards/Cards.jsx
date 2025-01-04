import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

const Cards = ({ data }) => {
  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">
        {data.map((card, index) => (
          <div className="col-md-4" key={index}>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={card.cardImage} />
              <Card.Body>
                <Card.Title>{card.cardTitle}</Card.Title>
                <Card.Text>
                  {card.cardDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
