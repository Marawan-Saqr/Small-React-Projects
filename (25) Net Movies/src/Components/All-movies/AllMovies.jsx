import React, { useContext } from 'react';
import { moviesContext } from '../../Contexts/MoviesContext.jsx';
import MoviesShowCard from '../Movies-show-card/MoviesShowCard.jsx';
import PageTitle from '../../Components/Page-title/PageTitle.jsx';
import PaginationComp from '../PaginationComp/PaginationComp.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'; // Import the LoadingSpinner component

const AllMovies = () => {
  // Component States
  const { movies, loading } = useContext(moviesContext);

  return (
    <div className='container'>
      <h4><PageTitle title={"ALL MOVIES"} /></h4>
      {/* Show loading spinner when data is being fetched */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="row">
          {movies.length > 0 ? (
            movies.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                <MoviesShowCard item={item} />
              </div>
            ))
          ) : (
            <h2>No Movies To Show</h2>
          )}
          <PaginationComp />
        </div>
      )}
    </div>
  );
};

export default AllMovies;