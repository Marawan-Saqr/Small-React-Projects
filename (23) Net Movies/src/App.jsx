import "./App.css";
import WatchedContextProvider from "./Contexts/WatchedContext.jsx";
import MoviesContextProvider from "./Contexts/MoviesContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./Components/Top-nav/TopNav.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import AllMovies from "./Components/All-movies/AllMovies.jsx";
import MovieDetails from "./Pages/Movie-details/MovieDetails.jsx";
import Watched from './Pages/Watched/Watched.jsx';
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <WatchedContextProvider>
      <MoviesContextProvider>
        <BrowserRouter>
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />}>
              <Route index element={<AllMovies />} />
              <Route path="all-movies" element={<AllMovies />} />
              <Route path="movie-details/:id" element={<MovieDetails />} />
            </Route>
            <Route path="/Watched" element={<Watched />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MoviesContextProvider>
    </WatchedContextProvider>
  );
}

export default App;
