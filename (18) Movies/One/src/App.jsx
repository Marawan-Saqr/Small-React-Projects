import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Movielist from './Components/Movielist';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';


function App() {

  // Component States
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);


  // Get All Movies
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=ar");
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  }


  // Get Current Page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=ar&page=${page}`);
    setMovies(res.data.results);
  }


  // Search Movies
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cc77dc99cfe3060cfe5410df352d4c7d&query=${word}&language=ar`);
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  }


  // UseEffect
  useEffect(()=> {
    getAllMovies();
  }, [])


  return (
    <div>
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movielist movies={movies} getPage={getPage} pageCount={pageCount} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
};



export default App;