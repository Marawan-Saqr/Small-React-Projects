import './ReviewsCards.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ReviewsCards = ({ reviewsBindingData }) => {
  return (
    <div>
      <div className="services-cards" style={{backgroundColor: 'rgb(20 20 20)', padding: '30px 0px'}}>
        <div className="container">
          <Row>
            {reviewsBindingData.map((review, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card style={{backgroundColor: '#191919', textAlign: 'center'}}>
                  <Card.Body>
                    <img 
                      src={review.reviewsCardImage} 
                      alt={review.reviewsCardTitle} 
                      style={{ width: '100%', height: 'auto', margin: '10px 0px' }} 
                    />
                    <Card.Title style={{color: 'white'}}>{review.reviewsCardTitle}</Card.Title>
                    <Card.Text style={{color: 'gray'}}>{review.reviewsCardDesc}</Card.Text>
                    <Card.Link href="#" style={{color: 'yellow', display: 'block', textAlign: 'center'}}>
                      {review.reviewsCardRate}
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCards;