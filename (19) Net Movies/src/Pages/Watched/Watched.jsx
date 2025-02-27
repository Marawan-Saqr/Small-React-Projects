import React, { useContext } from "react";
import { watchedContext } from "../../Contexts/WatchedContext";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import "./Watched.css";
import PageTitle from "../../Components/Page-title/PageTitle.jsx";

const Watched = () => {
  // Component States
  const { watchedMovies, removeWatchedMovie, loading } =
    useContext(watchedContext);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="watched-list">
      <div className="container">
        <h2>
          <PageTitle title="Watched List" />
        </h2>
        {watchedMovies.length === 0 ? (
          <p>No movies added to the watched list yet.</p>
        ) : (
          <ul>
            {watchedMovies.map((movie, index) => (
              <li key={index} className="watched-movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-info">
                  <h3 style={{color: '#fff'}}>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <p>
                    <strong>Release Date:</strong> {movie.release_date}
                  </p>
                  <button
                    style={{ margin: "0px" }}
                    className="btn btn-danger"
                    onClick={() => removeWatchedMovie(movie.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Watched;
