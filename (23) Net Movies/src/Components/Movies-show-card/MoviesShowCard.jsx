import React from "react";
import { Link } from 'react-router-dom';
import "./MoviesShowCard.css";

const MoviesShowCard = ({ item }) => {
  return (
    <div className="show">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          className="card-img-top"
          style={{ height: "400px", objectFit: "cover", borderRadius: "8px" }}
        />
        <div className="text-center">
          <h5 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
            <Link to={`/movies/movie-details/${item.id}`}>{item.title}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MoviesShowCard;
