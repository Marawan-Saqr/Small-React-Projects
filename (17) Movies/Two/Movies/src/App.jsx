import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TopNav from "./Components/Topnav/TopNav.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import MovieList from "./Components/Movie-list/MovieList.jsx";
import axios from "axios";
import MovieDetails from './Components/Movie-details/MovieDetails.jsx';

function App() {

  // Component States
  const [movie, setMovie] = useState([]);
  const [pageCount, setPageCount] = useState(0);


  // Get All Movies
  const getAllMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en");
    setMovie(response.data.results);
    setPageCount(response.data.total_pages);
  }


  // Get Current Page
  const getPage = async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en&page=${page}`);
    setMovie(response.data.results);
  }


  // Search Movie
  const searchMovie = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cc77dc99cfe3060cfe5410df352d4c7d&query=${word}&language=en`);
      setMovie(response.data.results);
      setPageCount(response.data.total_pages);
    }
  }


  // UseEffect
  useEffect(() => {
    getAllMovies();
  }, []);


  return (
    <div>
      <BrowserRouter>
        <TopNav searchMovie={searchMovie} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movies-list" element={<MovieList movie={movie} getPage={getPage} pageCount={pageCount} />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}



export default App;