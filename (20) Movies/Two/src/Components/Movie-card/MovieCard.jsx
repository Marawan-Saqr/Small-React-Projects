import React from "react";
import { Col, Card } from "react-bootstrap";
import "./MovieCard.css";
import { Link } from 'react-router-dom';


const MovieCard = ({ element }) => {
  return (
    <Col xs={6} sm={6} md={4} lg={3} className="mb-4 mt-5">
      <Card className="movie-card">
        <div className="image-container">
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500/" + element.poster_path}
            alt={element.title}
          />
          <div className="overlay">
            <div className="overlay-text">
              <strong>Vote Count:</strong> {element.vote_count}
              <br />
              <strong>Vote Average:</strong> {element.vote_average.toFixed(1)}
            </div>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="text-truncate" title={element.title}>
            {element.title}
          </Card.Title>
          <Card.Text>
            <strong>Release Date:</strong> {element.release_date}
          </Card.Text>
          <Link to={`/movie-details/${element.id}`}>
            <button className="btn btn-warning">Show Details</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
