import { Link } from 'react-router-dom';
import './NotFound.css';


const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>404 Not Found</h2>
      <p>This Page Not Found In Website</p>
      <Link to={"/"}>
        <button className='btn btn-success'>Return To Home</button>
      </Link>
    </div>
  )
}

export default NotFound;