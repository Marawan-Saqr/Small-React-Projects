import React, { useContext } from 'react';
import { moviesContext } from '../../Contexts/MoviesContext.jsx';
import MoviesShowCard from '../Movies-show-card/MoviesShowCard.jsx';
import PageTitle from '../Page-title/PageTitle.jsx';
import { motion } from 'framer-motion';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'; // Import the LoadingSpinner component

const MoviesShow = () => {
  // Access movies and loading state from context
  const { movies, loading } = useContext(moviesContext);

  return (
    <div className='container'>
      <h4><PageTitle title={"TRENDING MOVIES"} /></h4>

      {/* Show loading spinner while data is loading */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="row">
          {movies.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              className="col-md-6 col-lg-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <MoviesShowCard item={item} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Display message if there are no movies */}
      {movies.length === 0 && !loading && <h2>No Movies To Show</h2>}
    </div>
  );
};

export default MoviesShow;