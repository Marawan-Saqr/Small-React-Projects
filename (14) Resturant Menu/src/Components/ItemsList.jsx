import { Card, Row, Col } from "react-bootstrap";

const ItemsList = ({ menuitems }) => {
  return (
    <Row className="mt-5 fw-bold text-bg-dark p-3">
      {menuitems.length >= 1 ? (
        <>
          <h2 className="text-center" style={{textTransform: 'uppercase'}}>Items Available</h2>
          {menuitems.map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.imgUrl} className="img-fluid" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </>
      ) : (
        <h2 className="text-center">No Items For Now</h2>
      )}
    </Row>
  );
};


export default ItemsList;