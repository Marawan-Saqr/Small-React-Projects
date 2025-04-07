import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card as BootstrapCard } from 'react-bootstrap';

const CardView = ({ itemData }) => {
  return (
    <div className="mt-5">
      <Row className="g-4">
        {itemData.length >= 1 ? (
          <>
            <Col xs={12}>
              <h2 style={{textTransform: 'upperCase'}}>All Users</h2>
            </Col>
            {itemData.map((item, index) => (
              <Col sm={6} md={4} key={index}>
                <BootstrapCard className="h-100 shadow-sm">
                  <BootstrapCard.Img
                    variant="top"
                    src={item.userImg}
                    alt={`${item.userName}'s picture`}
                    className="img-fluid rounded"
                  />
                  <BootstrapCard.Body>
                    <BootstrapCard.Title>{item.userName}</BootstrapCard.Title>
                    <BootstrapCard.Text>
                      <strong>Title:</strong> {item.userTitle}
                      <br />
                      <strong>Age:</strong> {item.userAge}
                      <br />
                      <strong>Skills:</strong> {item.userSkills.join(', ')}
                    </BootstrapCard.Text>
                  </BootstrapCard.Body>
                </BootstrapCard>
              </Col>
            ))}
          </>
        ) : (
          <Col>
            <h2 className="text-center text-muted">No Items To Show</h2>
          </Col>
        )}
      </Row>
    </div>
  );
};



export default CardView;