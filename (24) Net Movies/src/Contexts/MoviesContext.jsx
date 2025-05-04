import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const moviesContext = createContext();
const MoviesContextProvider = ({ children }) => {

  // Component States
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);


  // Get All Movies
  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en`
      );
      setMovies(response.data.results);
      setPageCount(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };


  // Get Current Page
  const getPage = async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en&page=${page}`);
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
  }


  // Get Movie Details
  const getMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en`
      );
      setMovieDetails(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };


  // Search Movie Function
  const searchMovie = async (word) => {
    if (word === "") {
      getMovies();
    } else {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=cc77dc99cfe3060cfe5410df352d4c7d&query=${word}&language=en`
        );
        setMovies(response.data.results);
        setPageCount(response.data.total_pages);
      } catch (error) {
        console.error("Error searching for movie:", error);
      }
    }
  };


  //Use Effect
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <moviesContext.Provider value={{ movies, movieDetails, getMovieDetails, getPage, pageCount, getMovies, searchMovie, loading }}>
      {children}
    </moviesContext.Provider>
  );
};


export default MoviesContextProvider;