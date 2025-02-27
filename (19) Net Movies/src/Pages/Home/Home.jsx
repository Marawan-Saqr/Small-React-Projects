import Introduction from '../../Components/Introduction/Introduction.jsx';
import MoviesShow from '../../Components/Movies_Show/MoviesShow.jsx';
import AboutData from '../../Components/About-data/AboutData.jsx';
import Advantages from '../../Components/Advantages/Advantages.jsx';
import Discover from '../../Components/Discover/Discover.jsx';
import MovieApp from '../../Components/Movie-app/MovieApp.jsx';
import Compatible from '../../Components/Compatible/Compatible.jsx';


const Home = () => {
  return (
    <div>
      <Introduction />
      <MoviesShow />
      <AboutData />
      <Advantages />
      <Discover />
      <MovieApp />
      <Compatible />
    </div>
  );
};



export default Home;