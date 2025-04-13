import { Row } from 'react-bootstrap';
import MovieCard from '../../Components/Movie-card/MovieCard.jsx';
import Pagination from '../Pagination/Pagination.jsx';



const MovieList = ({ movie, pageCount, getPage }) => {
  return (
    <Row>
      {
        movie.length >= 1 ? (movie.map((element)=> (
          <MovieCard key={element.id} element={ element } />
        ))) : <h2>No Movies For Now</h2>
      }
      <Pagination pageCount={pageCount} getPage={getPage} />
    </Row>
  )
}


export default MovieList;