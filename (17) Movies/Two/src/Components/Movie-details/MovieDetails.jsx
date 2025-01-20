import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import './MovieDetails.css';

const MovieDetails = () => {

  // Component States
  const param = useParams();
  const [movie, setMovie] = useState({});


  // Fetch movie details
  const getMovieDetails = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`);
    setMovie(response.data);
  };


  // UseEffect
  useEffect(() => {
    getMovieDetails();
  }, []);


  return (
    <div className="movie-details-container mt-5">
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex">
            <img
              className="img-movie"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title || 'Movie Poster'}
            />
            <div className="details-text text-right">
              <p className="card-text-details border-bottom">
                <span className="label">Movie Name:</span> {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                <span className="label">Release Date:</span> {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                <span className="label">Vote Count:</span> {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                <span className="label">Rating:</span> {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story">
            <div className="text-left p-4">
              <p className="card-text-title border-bottom">Overview:</p>
            </div>
            <div className="text-left px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center">
          <Link to="/">
            <button className="btn btn-primary custom-btn mx-2">
              Back to Home
            </button>
          </Link>
          <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary custom-btn">
              Watch Movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};



export default MovieDetails;