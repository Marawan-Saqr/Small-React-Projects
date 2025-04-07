import './ServiceCards.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ServiceCards = ({ servicesBindingData }) => {
  return (
    <div>
      <div className="services-cards" style={{backgroundColor: 'rgb(20 20 20)', padding: '30px 0px'}}>
        <div className="container">
          <Row>
            {servicesBindingData.map((service, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card style={{backgroundColor: '#191919', textAlign: 'center'}}>
                  <Card.Body>
                    <div style={{color: 'rebeccapurple', fontSize: '30px', margin: '10px 0px'}}>{service.serviceCardIcon}</div>
                    <Card.Title style={{color: 'white'}}>{service.serviceCardTitle}</Card.Title>
                    <Card.Text style={{color: 'gray'}}>{service.serviceCardDescription}</Card.Text>
                    <Card.Link href="#" style={{color: 'gray', display: 'block', textAlign: 'center'}}>
                      {service.serviceCardHref}
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ServiceCards;
