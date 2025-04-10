import { Row, Card, Col } from 'react-bootstrap';
import CardMovie from './CardMovie';
import PaginationComponent from '../Components/PaginationComponent';


const Movielist = ({ movies, getPage, pageCount }) => {
  return (
    <Row className='mt-3'>
      {
        movies.length >= 1 ? (movies.map((mov)=> {
          return <CardMovie key={mov.id} mov={mov} />
        })) : <h2 className='text-center p-5'>لا يوجد افلام</h2>
      }
      <PaginationComponent getPage={getPage} pageCount={pageCount} />
    </Row>
  )
}


export default Movielist;