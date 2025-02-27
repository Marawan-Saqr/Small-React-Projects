import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../../Contexts/MoviesContext.jsx';
import { watchedContext } from '../../Contexts/WatchedContext.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner.jsx'; // Import the LoadingSpinner component
import './MovieDetails.css';

const MovieDetails = () => {

  // Component States
  const { id } = useParams();
  const { movieDetails, getMovieDetails, loading } = useContext(moviesContext); // Access loading state from context
  const watch = useContext(watchedContext);

  // UseEffect
  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  // Add the current movie to the watched list
  const handleAddToWatched = () => {
    watch.addToWatched(movieDetails);
  };

  // If data is still loading, show the loading spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!movieDetails) {
    return <p className="loading-text">Movie not found</p>;
  }

  return (
    <div className='movie-details'>
      <Container>
        <Row className="align-items-center">
          {/* Movie Poster */}
          <Col md={4} className="text-center">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
              alt={movieDetails.title} 
              className="movie-poster"
            />
          </Col>

          {/* Movie Info */}
          <Col md={8}>
            <h2 className="movie-title">{movieDetails.title}</h2>
            <p className="release-date">
              <strong>Release Date:</strong> {movieDetails.release_date}
            </p>
            <p className="vote-count">
              <strong>Vote Count:</strong> {movieDetails.vote_count}
            </p>
            <p className="vote-average">
              <strong>Vote Average:</strong> ⭐ {movieDetails.vote_average} / 10
            </p>
            <p className="overview">{movieDetails.overview}</p>

            {/* Homepage Link */}
            {movieDetails.homepage && (
              <Button variant="primary" href={movieDetails.homepage} target="_blank">
                Visit Homepage
              </Button>
            )}
            <Button style={{margin: '0px', marginLeft: '20px'}} variant="none" className="btn btn-warning" onClick={handleAddToWatched}>
              Add To Watched
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetails;
